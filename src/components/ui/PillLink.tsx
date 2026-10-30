import { ArrowRight, Download } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "../../lib/Link";

interface PillLinkProps {
  href: string;
  children: ReactNode;
  variant?: "dark" | "light";
  external?: boolean;
  download?: boolean;
  /** Show the circled icon (on by default for dark pills). */
  icon?: boolean;
}

// Rounded pill button with the circled arrow used across the site.
const PillLink = ({ href, children, variant = "dark", external, download, icon }: PillLinkProps) => {
  const dark = variant === "dark";
  const showIcon = icon ?? true;
  return (
    <Link
      href={href}
      download={download}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group inline-flex items-center gap-3 rounded-full py-2 text-sm font-medium transition-colors ${
        showIcon ? "pr-2 pl-5" : "px-5 py-3"
      } ${dark ? "bg-ink text-white hover:bg-ink-line" : "border border-line bg-white text-ink hover:border-ink"}`}
    >
      {children}
      {showIcon && (
        <span
          className={`grid size-7 place-items-center rounded-full transition-transform duration-300 ${
            download ? "group-hover:translate-y-0.5" : "group-hover:-rotate-45"
          } ${dark ? "bg-white text-ink" : "bg-ink text-white"}`}
        >
          {download ? <Download size={14} /> : <ArrowRight size={14} />}
        </span>
      )}
    </Link>
  );
};

export default PillLink;
