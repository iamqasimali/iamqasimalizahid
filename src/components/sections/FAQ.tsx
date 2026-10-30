import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal, PillLink } from "../ui";
import { faqs, profile } from "../../data";

const FAQ = () => {
  const [open, setOpen] = useState(0);

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
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-line">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left font-semibold"
                >
                  {f.q}
                  <Plus
                    size={18}
                    className={`shrink-0 text-muted transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-500 ease-out-soft ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <p className="overflow-hidden pr-10 text-[15px] leading-relaxed text-muted">
                    <span className="block pb-6">{f.a}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
};

export default FAQ;
