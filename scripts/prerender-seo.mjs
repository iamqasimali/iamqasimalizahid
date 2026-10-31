// After `vite build`, write one HTML file per route plus the agent-facing text files.
// Crawlers that do not run JavaScript get the crawlable copy inside #root.
import { appendFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");

const esc = (value) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const mustReplace = (html, pattern, build) => {
  pattern.lastIndex = 0;
  if (!pattern.test(html)) throw new Error(`prerender-seo: missing ${pattern}`);
  pattern.lastIndex = 0;
  const replacer = typeof build === "function" ? (...groups) => build(groups) : build;
  return html.replace(pattern, replacer);
};

const renderPage = (template, mod, path) => {
  const meta = mod.metaFor(path);
  const indexable = meta.robots.startsWith("index");
  let html = template;

  const attr = (prefix, value) => `${prefix}${value}`;
  html = mustReplace(html, /<title>[^<]*<\/title>/, () => `<title>${esc(meta.title)}</title>`);
  html = mustReplace(html, /(<meta name="description" content=")[^"]*/, (groups) => attr(groups[1], esc(meta.description)));
  html = mustReplace(html, /(<meta name="robots" content=")[^"]*/, (groups) => attr(groups[1], esc(meta.robots)));
  html = mustReplace(html, /(<meta property="og:type" content=")[^"]*/, (groups) => attr(groups[1], meta.ogType));
  html = mustReplace(html, /(<meta property="og:title" content=")[^"]*/, (groups) => attr(groups[1], esc(meta.title)));
  html = mustReplace(html, /(<meta property="og:description" content=")[^"]*/, (groups) => attr(groups[1], esc(meta.description)));
  html = mustReplace(html, /(<meta name="twitter:title" content=")[^"]*/, (groups) => attr(groups[1], esc(meta.title)));
  html = mustReplace(html, /(<meta name="twitter:description" content=")[^"]*/, (groups) => attr(groups[1], esc(meta.description)));

  if (indexable) {
    const url = mod.abs(path);
    html = mustReplace(html, /(<link rel="canonical" href=")[^"]*/, (groups) => attr(groups[1], url));
    html = mustReplace(html, /(<meta property="og:url" content=")[^"]*/, (groups) => attr(groups[1], url));
    html = mustReplace(
      html,
      /(<link rel="alternate" type="text\/markdown" title="Markdown version" href=")[^"]*/,
      (groups) => attr(groups[1], mod.abs(meta.markdownPath)),
    );
  } else {
    html = html.replace(/\s*<link rel="canonical" href="[^"]*"\s*\/?>/, "");
    html = html.replace(/\s*<meta property="og:url" content="[^"]*"\s*\/?>/, "");
    html = html.replace(/\s*<link rel="alternate" type="text\/markdown" title="Markdown version" href="[^"]*"\s*\/?>/, "");
  }

  const json = JSON.stringify(mod.jsonLdFor(path)).replace(/</g, "\\u003c");
  html = mustReplace(
    html,
    /<script type="application\/ld\+json" id="structured-data">[\s\S]*?<\/script>/,
    () => `<script type="application/ld+json" id="structured-data">${json}</script>`,
  );

  const crawl = mod.crawlHtml(path);
  if (!crawl.includes("<h1")) throw new Error(`prerender-seo: ${path} crawl HTML has no h1`);
  html = mustReplace(
    html,
    /<div id="root"><\/div>/,
    () =>
      `<div id="root"><div id="crawl-content">${crawl}</div><script>document.getElementById("crawl-content")?.setAttribute("aria-hidden","true")</script></div>`,
  );

  return html;
};

const vite = await createServer({
  configFile: join(root, "vite.config.ts"),
  server: { middlewareMode: true, hmr: false, watch: null },
  appType: "custom",
  logLevel: "error",
});

try {
  const mod = await vite.ssrLoadModule("/src/lib/discoverability.ts");
  const template = readFileSync(join(dist, "index.html"), "utf8");
  const paths = mod.indexablePaths();
  const headerRules = [];

  for (const path of paths) {
    const htmlFile = path === "/" ? join(dist, "index.html") : join(dist, path.slice(1), "index.html");
    mkdirSync(dirname(htmlFile), { recursive: true });
    writeFileSync(htmlFile, renderPage(template, mod, path));

    const markdown = mod.markdownFor(path);
    if (!markdown?.startsWith("# ")) throw new Error(`prerender-seo: missing markdown for ${path}`);
    const markdownFile = path === "/" ? join(dist, "index.md") : join(dist, `${path.slice(1)}.md`);
    mkdirSync(dirname(markdownFile), { recursive: true });
    writeFileSync(markdownFile, markdown);

    const alternate = `Link: <${mod.abs(mod.markdownPathFor(path))}>; rel="alternate"; type="text/markdown", <${mod.abs("/llms.txt")}>; rel="describedby"; type="text/markdown"`;
    headerRules.push(`${path}\n  ${alternate}`);
    if (path !== "/") headerRules.push(`${path}/\n  ${alternate}`);
    headerRules.push(
      [
        mod.markdownPathFor(path),
        "  Content-Type: text/markdown; charset=utf-8",
        "  X-Robots-Tag: noindex",
        `  Link: <${mod.abs(path)}>; rel="canonical", <${mod.abs("/llms.txt")}>; rel="describedby"; type="text/markdown"`,
      ].join("\n"),
    );
  }

  writeFileSync(join(dist, "404.html"), renderPage(template, mod, "/404"));
  writeFileSync(join(dist, "llms.txt"), mod.llmsTxt());
  writeFileSync(join(dist, "llms-full.txt"), mod.llmsFull());
  writeFileSync(join(dist, "sitemap.xml"), mod.sitemapXml());
  writeFileSync(join(dist, "robots.txt"), mod.robotsTxt());
  appendFileSync(join(dist, "_headers"), `\n${headerRules.join("\n\n")}\n`);

  const llms = mod.llmsTxt();
  if (!llms.startsWith("# ")) throw new Error("prerender-seo: llms.txt needs an H1");
  for (const path of paths) {
    const mirror = mod.abs(mod.markdownPathFor(path));
    if (!llms.includes(mirror)) throw new Error(`prerender-seo: llms.txt missing ${mirror}`);
  }

  console.log(`prerender-seo: wrote ${paths.length} pages, markdown mirrors, llms.txt and sitemap.xml`);
} finally {
  await vite.close();
}
