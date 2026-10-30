// After `vite build`: write dist/<route>/index.html with that route's meta tags,
// plus sitemap.xml, so crawlers that don't run JavaScript still see the right page info.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const seo = JSON.parse(readFileSync(join(root, "src/data/seo.json"), "utf8"));
const base = readFileSync(join(dist, "index.html"), "utf8");

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const withMeta = (html, path, { title, description }) => {
  const url = seo.siteUrl + (path === "/" ? "/" : path);
  const swaps = [
    [/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`],
    [/(<meta name="description" content=")[^"]*/, `$1${esc(description)}`],
    [/(<link rel="canonical" href=")[^"]*/, `$1${url}`],
    [/(<meta property="og:url" content=")[^"]*/, `$1${url}`],
    [/(<meta property="og:title" content=")[^"]*/, `$1${esc(title)}`],
    [/(<meta property="og:description" content=")[^"]*/, `$1${esc(description)}`],
    [/(<meta name="twitter:title" content=")[^"]*/, `$1${esc(title)}`],
    [/(<meta name="twitter:description" content=")[^"]*/, `$1${esc(description)}`],
  ];
  return swaps.reduce((out, [re, rep]) => {
    if (!re.test(out)) throw new Error(`prerender-meta: tag not found for ${re}`);
    return out.replace(re, rep);
  }, html);
};

const today = new Date().toISOString().slice(0, 10);
const urls = [];

for (const [path, meta] of Object.entries(seo.routes)) {
  const file = path === "/" ? join(dist, "index.html") : join(dist, path, "index.html");
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, withMeta(base, path, meta));
  urls.push(`  <url><loc>${seo.siteUrl}${path === "/" ? "/" : path}</loc><lastmod>${today}</lastmod></url>`);
}

writeFileSync(
  join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`
);

console.log(`prerender-meta: wrote ${urls.length} pages and sitemap.xml`);
