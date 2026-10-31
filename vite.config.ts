import { defineConfig, type ViteDevServer } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const markdownRoute = (url: string) => {
  if (url === "/index.md") return "/";
  const match = url.match(/^\/((?:projects\/)?[a-z0-9-]+)\.md$/);
  return match ? `/${match[1]}` : null;
};

// Serve the same agent files in dev that the production build writes to dist.
function agentDiscovery() {
  return {
    name: "agent-discovery",
    configureServer(server: ViteDevServer) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url?.split("?")[0] ?? "";
        const route = markdownRoute(url);
        const kind =
          url === "/llms.txt" || url === "/llms-full.txt"
            ? "llms"
            : url === "/sitemap.xml"
              ? "sitemap"
              : url === "/robots.txt"
                ? "robots"
                : route
                  ? "markdown"
                  : null;
        if (!kind) {
          next();
          return;
        }

        try {
          const mod = (await server.ssrLoadModule("/src/lib/discoverability.ts")) as {
            llmsTxt: () => string;
            llmsFull: () => string;
            sitemapXml: () => string;
            robotsTxt: () => string;
            markdownFor: (path: string) => string | null;
          };
          const body =
            url === "/llms.txt"
              ? mod.llmsTxt()
              : url === "/llms-full.txt"
                ? mod.llmsFull()
                : url === "/sitemap.xml"
                  ? mod.sitemapXml()
                  : url === "/robots.txt"
                    ? mod.robotsTxt()
                    : mod.markdownFor(route ?? "");
          if (!body) {
            next();
            return;
          }
          const type =
            kind === "sitemap"
              ? "application/xml; charset=utf-8"
              : kind === "robots"
                ? "text/plain; charset=utf-8"
                : "text/markdown; charset=utf-8";
          res.statusCode = 200;
          res.setHeader("Content-Type", type);
          if (kind === "llms" || kind === "markdown") res.setHeader("X-Robots-Tag", "noindex");
          res.end(body);
        } catch (error) {
          next(error);
        }
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), agentDiscovery()],
});
