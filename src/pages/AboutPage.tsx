import { Reveal, PillLink, TechIcon } from "../components/ui";
import { Experience } from "../components/sections";
import { mainSkills, profile, skillGroups, spokenLanguages, stats } from "../data";
import portrait from "../assets/images/qasim-portrait.jpg";

const AboutPage = () => (
  <>
    <section className="container-page grid gap-12 pt-16 pb-12 md:pt-24 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
      <Reveal>
        <h1 className="display text-5xl font-medium md:text-7xl">
          I build the backend,
          <br />
          and wire in the AI.
        </h1>
        <div className="mt-10 max-w-2xl space-y-5 text-[17px] leading-relaxed text-ink/80">
          <p>
            I'm {profile.name}, a full stack engineer in {profile.location}, working remotely. For
            the last 7+ years I have built web apps and APIs in Ruby on Rails, React and TypeScript.
          </p>
          <p>
            Today I lead a small team at {profile.company.name}, owning architecture decisions,
            building Rails APIs and React front ends, and mentoring developers. Recent work includes
            EduHealth, a multi-tenant healthcare platform with video consultations, and ROAVI, a
            marketplace that connects travellers with local guides.
          </p>
          <p>
            Before that I migrated legacy Rails apps and built APIs for Healthwire, one of
            Pakistan's leading digital healthcare platforms, and shipped payment, SMS and email
            integrations at Techcreatix. On the side I build MCP servers and AI tools, like a
            collection of MCP servers for full stack work and BeaverGuard, a malware scanner for
            developers.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <PillLink href="/resume.pdf" download>
            Download resume
          </PillLink>
          <PillLink href={`mailto:${profile.email}`} variant="light" icon={false}>
            Get in touch
          </PillLink>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <img
          src={portrait}
          alt={`Portrait of ${profile.name}`}
          className="aspect-[832/1150] w-full rounded-card object-cover object-top"
        />
      </Reveal>
    </section>

    <section className="container-page py-12">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-card border border-line bg-line md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-white p-6 md:p-8">
            <p className="display text-5xl font-medium">{s.value}</p>
            <p className="mt-2 text-sm text-muted">{s.label}</p>
          </div>
        ))}
      </div>
    </section>

    <Experience detailed />

    <section className="py-24 md:py-36">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_2fr]">
        <Reveal>
          <h2 className="display text-6xl font-medium md:text-7xl">Skills</h2>
          <p className="mt-4 text-[15px] text-muted">My main stack first, then everything else I work with.</p>
        </Reveal>
        <Reveal delay={0.1} className="overflow-hidden rounded-card border border-line">
          <div className="border-b border-line p-6">
            <p className="text-[11px] tracking-[0.15em] text-muted uppercase">Main skills</p>
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
              {mainSkills.map((s) => (
                <li key={s.name} className="inline-flex items-center gap-2 text-lg">
                  <TechIcon name={s.name} size={18} />
                  {s.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid sm:grid-cols-2">
            {skillGroups.map((g) => (
              <div key={g.title} className="border-b border-line p-6 sm:odd:border-r">
                <p className="text-[11px] tracking-[0.15em] text-muted uppercase">{g.title}</p>
                <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2.5">
                  {g.items.map((item) => (
                    <li key={item} className="inline-flex items-center gap-1.5">
                      <TechIcon name={item} size={14} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="p-6">
            <p className="text-[11px] tracking-[0.15em] text-muted uppercase">Spoken languages</p>
            <p className="mt-3 text-lg">{spokenLanguages}</p>
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default AboutPage;
