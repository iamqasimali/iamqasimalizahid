import { ArrowUpRight, Github, Star } from "lucide-react";
import { Reveal, SectionHeading, PillLink } from "../ui";
import { moreRepos, profile, repos } from "../../data";
import type { Repo } from "../../data";

const toneClasses: Record<Repo["tone"], string> = {
  ink: "bg-ink text-white",
  studio: "bg-studio text-ink",
  mint: "bg-mint/25 text-ink",
};

// Featured repo cards plus a list of smaller repos. Reused on the Projects page.
export const RepoGrid = () => (
  <>
      <div className="grid gap-x-6 gap-y-12 md:grid-cols-3">
        {repos.map((repo, i) => (
          <Reveal key={repo.name} delay={i * 0.08}>
            <a href={repo.url} target="_blank" rel="noopener noreferrer" className="group block">
              <div
                className={`relative flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-card p-6 transition-transform duration-500 ease-out-soft group-hover:-translate-y-1 ${toneClasses[repo.tone]}`}
              >
                <div className="flex items-center justify-between text-xs opacity-70">
                  <span className="inline-flex items-center gap-1.5">
                    <Github size={14} /> iamqasimali
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Star size={12} /> {repo.stars}
                  </span>
                </div>
                <p className="display text-5xl font-medium lg:text-6xl">{repo.name}</p>
                <ArrowUpRight
                  size={22}
                  className="absolute bottom-6 right-6 opacity-0 transition-opacity group-hover:opacity-100"
                />
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2">
                <h3 className="text-lg font-semibold">{repo.name}</h3>
                <span className="rounded-full bg-sand px-2.5 py-0.5 text-xs text-muted">
                  {repo.label}
                </span>
              </div>
              <p className="mt-1 text-xs text-muted">{repo.stack}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{repo.description}</p>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16 border-t border-line">
        {moreRepos.map((r) => (
          <a
            key={r.name}
            href={r.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid items-baseline gap-1 border-b border-line py-5 md:grid-cols-[14rem_1fr_auto] md:gap-6"
          >
            <span className="font-semibold">{r.name}</span>
            <span className="text-sm text-muted">{r.description}</span>
            <span className="inline-flex items-center gap-2 text-xs text-subtle group-hover:text-ink">
              {r.stack} <ArrowUpRight size={14} />
            </span>
          </a>
        ))}
      </Reveal>
  </>
);

const OpenSource = () => (
  <section id="open-source" className="py-24 md:py-36">
    <div className="container-page">
      <SectionHeading
        title="Things I Build"
        subtitle="Open-source tools from my GitHub: AI servers, automation and security tooling other developers use."
      />

      <RepoGrid />

      <div className="mt-12 flex justify-center">
        <PillLink href={profile.github} external>
          All repositories on GitHub
        </PillLink>
      </div>
    </div>
  </section>
);

export default OpenSource;
