import type { AnchorHTMLAttributes } from "react";
import { navigate } from "./router";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export const Link = ({ href, onClick, ...rest }: LinkProps) => {
  const internal = href.startsWith("/") && !href.endsWith(".pdf");
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
