import { useEffect, useSyncExternalStore } from "react";

// Tiny client-side router: three pages don't need a routing library.
const listeners = new Set<() => void>();
const subscribe = (fn: () => void) => {
  listeners.add(fn);
  window.addEventListener("popstate", fn);
  return () => {
    listeners.delete(fn);
    window.removeEventListener("popstate", fn);
  };
};
const getPath = () => window.location.pathname.replace(/\/+$/, "") || "/";

export const usePath = () => useSyncExternalStore(subscribe, getPath);

export const navigate = (to: string) => {
  const url = new URL(to, window.location.origin);
  if (url.pathname === getPath() && url.hash) {
    document.getElementById(url.hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
    history.replaceState(null, "", url.pathname + url.hash);
    return;
  }
  history.pushState(null, "", url.pathname + url.hash);
  listeners.forEach((fn) => fn());
};

// After a page change, jump to the #hash target or the top.
export const useScrollOnNavigate = (path: string) => {
  useEffect(() => {
    const id = window.location.hash.slice(1);
    requestAnimationFrame(() => {
      const el = id ? document.getElementById(id) : null;
      if (el) el.scrollIntoView();
      else window.scrollTo({ top: 0 });
    });
  }, [path]);
};
