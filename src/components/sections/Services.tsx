import { Reveal, SectionHeading, TechIcon } from "../ui";
import { services } from "../../data";

const Services = () => (
  <section id="services" className="py-24 md:py-36">
    <div className="container-page">
      <SectionHeading
        title="Best Services"
        subtitle="Freelance and contract work, scoped up front and built in small steps you can review."
      />

      <div className="border-t border-line">
        {services.map((s, i) => (
          <Reveal key={s.title}>
            <div className="grid gap-4 border-b border-line py-8 md:grid-cols-[3rem_1fr_1fr] md:items-center md:gap-8">
              <span className="grid size-9 place-items-center rounded-full bg-sand text-xs text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 max-w-md text-[15px] leading-relaxed text-muted">{s.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 md:justify-end">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-2 rounded-full border border-line py-1.5 pr-3.5 pl-2 text-xs"
                  >
                    <TechIcon name={t} size={13} />
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
