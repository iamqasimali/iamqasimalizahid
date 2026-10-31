import { Breadcrumb, PillLink, TechIcon } from "../components/ui";
import { projects, type Project } from "../data";
import { Link } from "../lib/Link";

const ProjectPage = ({ project }: { project: Project }) => {
  const index = projects.findIndex((item) => item.id === project.id);
  const more = [1, 2, 3].map((step) => projects[(index + step) % projects.length]);
  const shots = project.images ?? [];

  return (
    <article className="container-page pt-12 pb-24 md:pt-16 md:pb-32">
      <Breadcrumb
        className="mb-8"
        items={[
          { href: "/", label: "Home" },
          { href: "/projects", label: "Projects" },
          { label: project.name },
        ]}
      />

      <p className="text-[11px] tracking-[0.15em] text-muted uppercase">{project.category}</p>
      <h1 className="display mt-4 max-w-4xl text-5xl font-medium md:text-7xl">{project.name}</h1>
      <p className="mt-6 max-w-2xl text-2xl leading-snug text-ink/80 md:text-3xl">{project.tagline}</p>
      <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted">{project.description}</p>
      <p className="mt-4 text-sm text-muted">
        Role: <span className="text-ink">{project.role}</span>
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {project.url && (
          <PillLink href={project.url} external>
            Visit live site
          </PillLink>
        )}
        <PillLink href="/projects" variant="light">
          All projects
        </PillLink>
      </div>

      {shots.length > 0 && (
        <div className="mt-12">
          <img
            src={shots[0]}
            alt={`${project.name} home page`}
            fetchPriority="high"
            className="aspect-[16/10] w-full rounded-card border border-line object-cover object-top"
          />
          {shots.length > 1 && (
            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {shots.slice(1).map((src, shot) => (
                <img
                  key={src}
                  src={src}
                  alt={`${project.name} screenshot ${shot + 2}`}
                  loading="lazy"
                  className="aspect-[16/10] w-full rounded-lg border border-line object-cover object-top"
                />
              ))}
            </div>
          )}
        </div>
      )}

      <div className="mt-16 grid gap-12 lg:grid-cols-2">
        <section>
          <h2 className="display text-4xl font-medium">What I did</h2>
          <ul className="mt-6 space-y-3 text-[15px] leading-relaxed text-muted">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="display text-4xl font-medium">Stack</h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <li
                key={tech}
                className="inline-flex items-center gap-2 rounded-full border border-line py-1.5 pr-3.5 pl-2 text-sm"
              >
                <TechIcon name={tech} size={14} />
                {tech}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mt-20 border-t border-line pt-10">
        <h2 className="text-sm text-muted">More projects</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-3">
          {more.map((item) => (
            <li key={item.id}>
              <Link href={`/projects/${item.id}`} className="text-lg font-semibold hover:text-muted">
                {item.name}
              </Link>
              <p className="mt-1 text-sm text-muted">{item.tagline}</p>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default ProjectPage;
