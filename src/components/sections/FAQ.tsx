import { Plus } from "lucide-react";
import { Reveal, PillLink } from "../ui";
import { faqs, profile } from "../../data";

const FAQ = () => {
  return (
    <section id="faq" className="py-24 md:py-36">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <h2 className="display text-6xl font-medium md:text-7xl">FAQ</h2>
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted">
            The questions people ask before we start. Something else on your mind? Email me.
          </p>
          <div className="mt-8">
            <PillLink href={`mailto:${profile.email}`}>Ask a question</PillLink>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="border-t border-line">
          {faqs.map((f, i) => (
            <details key={f.q} className="border-b border-line" {...(i === 0 ? { open: true } : {})}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left font-semibold [&::-webkit-details-marker]:hidden">
                {f.q}
                <Plus size={18} className="faq-plus shrink-0 text-muted transition-transform duration-300" />
              </summary>
              <p className="pr-10 pb-6 text-[15px] leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default FAQ;
