import { Reveal, TechIcon } from "../ui";
import { mainSkills, skillGroups } from "../../data";

const Skills = () => (
  <section id="skills" className="py-24 md:py-36">
    <div className="container-page grid gap-14 lg:grid-cols-[1fr_2fr] lg:gap-16">
      <Reveal>
        <h2 className="display text-6xl font-medium md:text-7xl">
          5000+ APIs
          <br />
          Shipped
        </h2>
        <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-muted">
          Built for startups and enterprises in Pakistan, the UK and the US with the same small,
          dependable set of tools.
        </p>
      </Reveal>

      <div>
        <Reveal>
          <p className="mb-4 text-sm text-muted">Main skills</p>
          <div className="grid grid-cols-2 border-t border-l border-line sm:grid-cols-4">
            {mainSkills.map((s) => (
              <div
                key={s.name}
                className="flex aspect-square flex-col justify-between border-r border-b border-line p-5 transition-colors hover:bg-sand sm:aspect-auto sm:min-h-48"
              >
                <TechIcon name={s.name} size={34} />
                <div>
                  <p className="text-lg font-semibold">{s.name}</p>
                  <p className="text-sm text-muted">{s.note}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <p className="mb-2 text-sm text-muted">Also work with</p>
          <div className="border-t border-line">
            {skillGroups.map((g) => (
              <div
                key={g.title}
                className="grid items-center gap-3 border-b border-line py-5 sm:grid-cols-[10rem_1fr]"
              >
                <span className="text-sm text-muted">{g.title}</span>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2.5 rounded-full border border-line py-1.5 pr-4 pl-1.5 text-sm"
                    >
                      <span className="grid size-7 place-items-center rounded-full bg-sand">
                        <TechIcon name={item} size={14} />
                      </span>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default Skills;
