import { Link } from "../../lib/Link";

export type Crumb = { href?: string; label: string };

const Breadcrumb = ({ items, className = "" }: { items: Crumb[]; className?: string }) => (
  <nav aria-label="Breadcrumb" className={`text-sm text-muted ${className}`}>
    <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
      {items.map((item, index) => (
        <li key={item.label} className="inline-flex items-center gap-2">
          {index > 0 && <span aria-hidden="true">/</span>}
          {item.href ? (
            <Link href={item.href} className="hover:text-ink">
              {item.label}
            </Link>
          ) : (
            <span aria-current="page" className="text-ink">
              {item.label}
            </span>
          )}
        </li>
      ))}
    </ol>
  </nav>
);

export default Breadcrumb;
