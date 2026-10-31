import { abs, jsonLdFor, metaFor } from "./discoverability";

const head = () => document.head;

const setAttr = (selector: string, attr: string, value: string) => {
  head().querySelector(selector)?.setAttribute(attr, value);
};

const setOrRemove = (selector: string, attr: string, value: string | null, create: () => HTMLElement) => {
  const existing = head().querySelector(selector);
  if (!value) {
    existing?.remove();
    return;
  }
  const el = existing ?? create();
  el.setAttribute(attr, value);
  if (!existing) head().appendChild(el);
};

// Keep title, description, canonical, social tags and JSON-LD aligned with the route.
export const applyRouteMeta = (path: string) => {
  const meta = metaFor(path);
  const url = abs(path);
  const indexable = meta.robots.startsWith("index");

  document.title = meta.title;
  setAttr('meta[name="description"]', "content", meta.description);
  setAttr('meta[name="robots"]', "content", meta.robots);
  setAttr('meta[property="og:type"]', "content", meta.ogType);
  setAttr('meta[property="og:title"]', "content", meta.title);
  setAttr('meta[property="og:description"]', "content", meta.description);
  setAttr('meta[name="twitter:title"]', "content", meta.title);
  setAttr('meta[name="twitter:description"]', "content", meta.description);

  setOrRemove('link[rel="canonical"]', "href", indexable ? url : null, () => {
    const link = document.createElement("link");
    link.rel = "canonical";
    return link;
  });
  setOrRemove('meta[property="og:url"]', "content", indexable ? url : null, () => {
    const tag = document.createElement("meta");
    tag.setAttribute("property", "og:url");
    return tag;
  });
  setOrRemove(
    'link[rel="alternate"][type="text/markdown"]',
    "href",
    meta.markdownPath ? abs(meta.markdownPath) : null,
    () => {
      const link = document.createElement("link");
      link.rel = "alternate";
      link.type = "text/markdown";
      link.title = "Markdown version";
      return link;
    },
  );

  const structured = document.getElementById("structured-data");
  if (structured) structured.textContent = JSON.stringify(jsonLdFor(path)).replace(/</g, "\\u003c");
};
