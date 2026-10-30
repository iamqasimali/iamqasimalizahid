import { motion } from "framer-motion";
import { FitText, Reveal } from "../ui";
import { profile, stats } from "../../data";
import portrait from "../../assets/images/Qasim_sitting_on_chair.png";

const Hero = () => {
  return (
    <section id="home">
      <div className="container-page pt-10 md:pt-14">
        {/* Giant name, sized to span the container */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <FitText as="h1" text={profile.name} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 grid grid-cols-2 gap-y-4 border-t border-line pt-6 text-sm md:mt-8 md:grid-cols-3"
        >
          <div>
            <p>{profile.role}</p>
            <p className="text-muted">{profile.roleSub}</p>
          </div>
          <div className="text-right md:text-center">
            <p>Based in</p>
            <p className="text-muted">{profile.location}</p>
          </div>
          <div className="col-span-2 md:col-span-1 md:text-right">
            <p>Working</p>
            <p className="inline-flex items-center gap-2 text-muted">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-mint opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-mint" />
              </span>
              Remotely
            </p>
          </div>
        </motion.div>

        <Reveal className="mt-16 md:ml-[32%] md:mt-24" delay={0.5}>
          <p className="display text-3xl font-medium leading-[1.1] md:text-5xl md:leading-[1.08]">
            [{profile.statement}]
          </p>
        </Reveal>
      </div>

      {/* Studio panel with portrait */}
      <div className="relative mt-16 overflow-hidden bg-studio md:mt-24">
        <div className="speckle pointer-events-none absolute inset-x-0 top-[12%] h-40" />
        <div className="container-page relative grid items-end gap-10 py-12 md:grid-cols-[1fr_auto_1fr] md:py-16">
          <Reveal className="order-2 md:order-1">
            <p className="max-w-xs text-sm leading-relaxed text-muted">{profile.about}</p>
          </Reveal>

          {/* Cropped to 832:1150 so the corner watermark stays out of frame */}
          <img
            src={portrait}
            alt={`Portrait of ${profile.name}`}
            className="order-1 mx-auto aspect-[832/1150] w-64 rounded-panel object-cover object-top shadow-2xl shadow-ink/20 md:order-2 md:w-80 lg:w-[22rem]"
          />

          <Reveal className="order-3 grid grid-cols-2 gap-x-6 gap-y-6" delay={0.1}>
            {stats.map((s) => (
              <div key={s.label} className="md:text-right">
                <p className="display text-4xl font-medium md:text-5xl">{s.value}</p>
                <p className="mt-1 text-xs text-muted">{s.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
