import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { profile } from "../../data";
import { usePath } from "../../lib/router";
import { Link } from "../../lib/Link";

const navItems = [
  { href: "/", label: "Home", section: "home" },
  { href: "/#open-source", label: "Open Source", section: "open-source" },
  { href: "/projects", label: "Projects" },
  { href: "/#services", label: "Services", section: "services" },
  { href: "/about", label: "About" },
];

const Header = () => {
  const path = usePath();
  const [section, setSection] = useState("home");
  const [open, setOpen] = useState(false);

  // On the home page, highlight the nav item for the section in view.
  useEffect(() => {
    if (path !== "/") return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setSection(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    document.querySelectorAll("main section[id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [path]);

  const isActive = (item: (typeof navItems)[number]) => {
    if (path !== "/") return item.href === path;
    if (!item.section) return false;
    // Sections without a nav item of their own (projects, skills...) keep the last match.
    return item.section === section || (item.section === "home" && !navItems.some((n) => n.section === section));
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-lg font-semibold tracking-tight">
          {profile.shortName}
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item) ? "page" : undefined}
              className={`rounded-full px-3.5 py-2 text-sm transition-colors ${
                isActive(item)
                  ? "border border-line bg-white text-ink shadow-sm"
                  : "border border-transparent text-muted hover:text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="group hidden items-center gap-3 rounded-full bg-ink py-2 pr-2 pl-5 text-sm font-medium text-white sm:inline-flex"
          >
            Contact
            <span className="grid size-7 place-items-center rounded-full bg-white text-ink transition-transform duration-300 group-hover:-rotate-45">
              <ArrowRight size={14} />
            </span>
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="grid size-10 place-items-center rounded-full border border-line md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-line bg-white md:hidden"
          >
            <div className="container-page flex flex-col py-4">
              {[...navItems, { href: "#contact", label: "Contact" }].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="display py-2 text-3xl font-medium"
                >
                  {label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
