import { ArrowUpRight, Github, Linkedin, MessageCircle } from "lucide-react";
import { FitText, PillLink, Reveal } from "../ui";
import { profile, projects } from "../../data";
import { Link } from "../../lib/Link";

const XIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const columns = [
  {
    title: "Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "Projects", href: "/projects" },
      { label: "Services", href: "/#services" },
      { label: "About", href: "/about" },
    ],
  },
  {
    title: "Elsewhere",
    links: [
      { label: "GitHub", href: profile.github },
      { label: "LinkedIn", href: profile.linkedin },
      { label: "X", href: profile.twitter },
      { label: "Resume (PDF)", href: "/resume.pdf" },
    ],
  },
  {
    title: "Case studies",
    links: projects.filter((p) => p.url).map((p) => ({ label: p.name, href: `/projects/${p.id}` })),
  },
  {
    title: "Company",
    links: [{ label: profile.company.name, href: profile.company.url }],
  },
];

const socials = [
  { label: "GitHub", href: profile.github, icon: <Github size={16} /> },
  { label: "LinkedIn", href: profile.linkedin, icon: <Linkedin size={16} /> },
  { label: "X", href: profile.twitter, icon: <XIcon /> },
  { label: "WhatsApp", href: profile.whatsapp, icon: <MessageCircle size={16} /> },
];

const isExternal = (href: string) => href.startsWith("http");

const Footer = () => (
  <footer id="contact" className="overflow-hidden bg-sand">
    <div className="container-page pt-20 md:pt-28">
      <Reveal className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start">
        <div>
          <h2 className="display text-5xl font-medium md:text-6xl">
            Have any project
            <br />
            idea in mind?
          </h2>
          <div className="mt-8">
            <PillLink href={`mailto:${profile.email}`}>Start a project</PillLink>
          </div>
        </div>
        <div className="lg:text-right">
          <a
            href={`mailto:${profile.email}`}
            className="display group inline-flex items-start gap-2 text-[6.4vw] font-medium break-all hover:opacity-70 lg:text-5xl xl:text-6xl"
          >
            {profile.email}
            <ArrowUpRight className="mt-1 hidden shrink-0 sm:block" size={28} />
          </a>
          <p className="mt-3 text-sm text-muted">
            <a href={`tel:${profile.phone}`} className="hover:text-ink">
              {profile.phone}
            </a>{" "}
            · Replies within one working day
          </p>
        </div>
      </Reveal>

      <div className="mt-20 grid gap-12 lg:grid-cols-[1fr_2fr]">
        <div className="flex gap-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="me noopener noreferrer"
              aria-label={s.label}
              className="grid size-10 place-items-center rounded-full border border-line bg-white transition-colors hover:bg-ink hover:text-white"
            >
              {s.icon}
            </a>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-xs text-muted">{c.title}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      {...(isExternal(l.href) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="text-sm hover:text-muted"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 flex flex-col gap-2 border-t border-line pt-6 text-xs text-muted md:flex-row md:justify-between">
        <p>
          Designed and built by {profile.name}
          {" · "}
          <a href="/llms.txt" className="hover:text-ink">
            AI index
          </a>
        </p>
        <p>© {new Date().getFullYear()} All rights reserved</p>
        <p>{profile.location} · UTC+5</p>
      </div>

      <div className="mt-8 -mb-[0.18em] select-none">
        <FitText text={profile.name} ariaHidden />
      </div>
    </div>
  </footer>
);

export default Footer;
