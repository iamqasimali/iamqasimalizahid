import seo from "../data/seo.json";

type RoutePath = keyof typeof seo.routes;

const setMeta = (selector: string, attr: "content" | "href", value: string) => {
  document.head.querySelector(selector)?.setAttribute(attr, value);
};

// Keep title, description, canonical and social tags in sync with the current page.
export const applyRouteMeta = (path: string) => {
  const route = seo.routes[(path in seo.routes ? path : "/") as RoutePath];
  const url = seo.siteUrl + (path === "/" ? "/" : path);

  document.title = route.title;
  setMeta('meta[name="description"]', "content", route.description);
  setMeta('link[rel="canonical"]', "href", url);
  setMeta('meta[property="og:url"]', "content", url);
  setMeta('meta[property="og:title"]', "content", route.title);
  setMeta('meta[property="og:description"]', "content", route.description);
  setMeta('meta[name="twitter:title"]', "content", route.title);
  setMeta('meta[name="twitter:description"]', "content", route.description);
};
