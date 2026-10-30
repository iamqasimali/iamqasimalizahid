import { Reveal, PillLink } from "../components/ui";
import { ProjectGrid } from "../components/sections/Projects";
import { RepoGrid } from "../components/sections/OpenSource";
import { profile, projects, repos, moreRepos } from "../data";

const withScreens = projects.filter((p) => p.images?.length);
const others = projects.filter((p) => !p.images?.length);

const Block = ({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) => (
  <section className="border-t border-line py-20 first:border-t-0 md:py-28">
    <div className="container-page">
      <Reveal className="mb-12 md:mb-16">
        <h2 className="display text-4xl font-medium md:text-5xl">{title}</h2>
        <p className="mt-3 text-[15px] text-muted">{subtitle}</p>
      </Reveal>
      {children}
    </div>
  </section>
);

const ProjectsPage = () => (
  <>
    <div className="container-page pt-20 pb-8 text-center md:pt-28">
      <Reveal>
        <h1 className="display text-6xl font-medium md:text-8xl">All Projects</h1>
        <p className="mx-auto mt-6 max-w-xl text-base text-muted">
          {withScreens.length} live products, {others.length} more client platforms and{" "}
          {repos.length + moreRepos.length} open-source tools.
        </p>
      </Reveal>
    </div>

    <Block title="Live products" subtitle="Platforms I built that you can open today. Every card links to the live site.">
      <ProjectGrid items={withScreens} />
    </Block>

    <Block title="Client work" subtitle="Platforms for clients in healthcare, data, fintech, DevOps and logistics.">
      <ProjectGrid items={others} />
    </Block>

    <Block title="Open source" subtitle="Tools I publish on GitHub for other developers.">
      <RepoGrid />
      <div className="mt-12 flex justify-center">
        <PillLink href={profile.github} external>
          All repositories on GitHub
        </PillLink>
      </div>
    </Block>
  </>
);

export default ProjectsPage;
