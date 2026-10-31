import { ArrowUpRight } from "lucide-react";
import { PillLink, Reveal, SectionHeading, TechIcon } from "../ui";
import { projects } from "../../data";
import type { Project } from "../../data";
import { Link } from "../../lib/Link";

// Alternating panel styles stand in for screenshots.
const panels = ["bg-ink text-white", "bg-studio text-ink", "bg-sand text-ink", "bg-ink-line text-white"];

const Cover = ({ project, index }: { project: Project; index: number }) => {
  const [cover] = project.images ?? [];

  if (cover) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden rounded-card border border-line bg-sand">
        <img
          src={cover}
          alt={`${project.name} home page`}
          loading="lazy"
          className="size-full object-cover object-top transition-transform duration-700 ease-out-soft group-hover:scale-[1.03]"
        />
        {project.url && (
          <span className="absolute right-4 bottom-4 grid size-10 place-items-center rounded-full bg-white text-ink opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
            <ArrowUpRight size={18} />
          </span>
        )}
      </div>
    );
  }

  return (
    <div
      className={`relative flex aspect-[16/10] flex-col justify-between overflow-hidden rounded-card p-6 md:p-8 ${panels[index % panels.length]}`}
    >
      <div className="flex justify-between text-xs opacity-60">
        <span>{project.category}</span>
        <span>{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="transition-transform duration-700 ease-out-soft group-hover:-translate-y-2">
        <p className="display text-5xl font-medium md:text-7xl">{project.name}</p>
        <p className="mt-3 max-w-sm text-sm opacity-70">{project.tagline}</p>
      </div>
    </div>
  );
};

export const ProjectCard = ({ project: p, index }: { project: Project; index: number }) => {
  const extraShots = p.images?.slice(1) ?? [];
  const detail = `/projects/${p.id}`;
  const external = Boolean(p.url);

  return (
    <article>
      <a
        href={p.url ?? detail}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="group block"
      >
        <Cover project={p} index={index} />
      </a>
      <div className="mt-5 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <h3 className="text-lg font-semibold">
          <Link href={detail} className="hover:text-muted">
            {p.name}
          </Link>
          {p.url && (
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-xs font-normal text-muted hover:text-ink"
            >
              {new URL(p.url).hostname}
            </a>
          )}
        </h3>
          <ul className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted">
            {p.techStack.slice(0, 4).map((t) => (
              <li key={t} className="inline-flex items-center gap-1.5">
                <TechIcon name={t} size={12} />
                {t}
              </li>
            ))}
          </ul>
        </div>
      <p className="mt-2 text-[15px] leading-relaxed text-muted">
        <span className="text-ink">{p.role}:</span> {p.description}
      </p>
      {extraShots.length > 0 && (
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {extraShots.map((src, n) => (
            <img
              key={src}
              src={src}
              alt={`${p.name} screenshot ${n + 2}`}
              loading="lazy"
              className="aspect-[16/10] w-full rounded-lg border border-line object-cover object-top"
            />
          ))}
        </div>
      )}
    </article>
  );
};

export const ProjectGrid = ({ items }: { items: Project[] }) => (
  <div className="grid gap-x-6 gap-y-16 md:grid-cols-2">
    {items.map((p, i) => (
      <Reveal key={p.id} delay={(i % 2) * 0.08}>
        <ProjectCard project={p} index={i} />
      </Reveal>
    ))}
  </div>
);

// Home page preview: the first few projects plus a link to the full list.
const Projects = ({ limit = 4 }: { limit?: number }) => (
  <section id="projects" className="py-24 md:py-36">
    <div className="container-page">
      <SectionHeading
        title="Selected Works"
        subtitle="Products I've built for clients in healthcare, travel, data, fintech and logistics."
      />
      <ProjectGrid items={projects.slice(0, limit)} />
      {projects.length > limit && (
        <div className="mt-16 flex justify-center">
          <PillLink href="/projects">View all {projects.length} projects</PillLink>
        </div>
      )}
    </div>
  </section>
);

export default Projects;
