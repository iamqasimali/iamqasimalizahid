import type { AnchorHTMLAttributes } from "react";
import { navigate } from "./router";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export const Link = ({ href, onClick, ...rest }: LinkProps) => {
  const pathOnly = href.split(/[?#]/)[0];
  // Files such as /resume.pdf, /llms.txt and /about.md must load from the server.
  const internal = pathOnly.startsWith("/") && !pathOnly.includes(".");
  return (
    <a
      href={href}
      onClick={(e) => {
        onClick?.(e);
        if (!internal || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        e.preventDefault();
        navigate(href);
      }}
      {...rest}
    />
  );
};
