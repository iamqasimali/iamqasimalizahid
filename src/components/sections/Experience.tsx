import { Reveal, SectionHeading, PillLink, TechIcon } from "../ui";
import { experiences, profile } from "../../data";

// Compact on the home page; `detailed` lists every achievement (About page).
const Experience = ({ detailed = false }: { detailed?: boolean }) => (
  <section id="experience" className="py-24 md:py-36">
    <div className="container-page">
      <SectionHeading title="Experience" subtitle="Four roles, seven years, mostly Rails and React." />

      <div className="border-t border-line">
        {experiences.map((e, i) => (
          <Reveal key={e.company}>
            <div className="grid gap-3 border-b border-line py-8 md:grid-cols-[3rem_1.2fr_1.6fr_auto] md:gap-8">
              <span className="grid size-10 place-items-center rounded-lg border border-line text-xs">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-xl font-semibold tracking-tight">{e.company}</h3>
                <p className="text-sm text-muted">
                  {e.position} · {e.location}
                </p>
              </div>
              <div>
                {detailed ? (
                  <ul className="space-y-2 text-[15px] leading-relaxed text-muted">
                    {e.achievements.map((a) => (
                      <li key={a}>{a}.</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-[15px] leading-relaxed text-muted">{e.summary}</p>
                )}
                <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5 text-xs text-muted">
                  {e.tech.map((t) => (
                    <li key={t} className="inline-flex items-center gap-1.5">
                      <TechIcon name={t} size={12} />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="inline-flex items-start gap-2 text-sm whitespace-nowrap">
                {e.duration}
                {i === 0 && <span className="mt-1.5 size-2 rounded-full bg-mint" />}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-8 flex flex-col justify-between gap-6 md:flex-row md:items-center">
        <p className="text-sm text-muted">
          <span className="font-semibold text-ink">{profile.education.degree}</span> ·{" "}
          {profile.education.institution} · {profile.education.duration}
        </p>
        {detailed ? (
          <PillLink href="/resume.pdf" variant="light" download>
            Download resume
          </PillLink>
        ) : (
          <PillLink href="/about" variant="light">
            Full story
          </PillLink>
        )}
      </div>
    </div>
  </section>
);

export default Experience;
