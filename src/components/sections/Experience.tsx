import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, MapPin, Calendar, ChevronDown, ChevronUp } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import { experiences } from "../../data";

const ExperienceCard = ({
  experience,
  index,
  isExpanded,
  onToggle,
}: {
  experience: (typeof experiences)[0];
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`flex items-center gap-8 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      {/* Content */}
      <div className={`flex-1 ${isLeft ? "md:text-right" : "md:text-left"}`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="glass rounded-2xl p-6 cursor-pointer group hover:border-blue-500/50 transition-all duration-300"
          onClick={onToggle}
        >
          {/* Header */}
          <div className={`flex items-start gap-4 mb-4 ${isLeft ? "md:flex-row-reverse" : ""}`}>
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-colors">
              <Briefcase className="w-6 h-6 text-blue-400" />
            </div>
            <div className={`flex-1 ${isLeft ? "md:text-right" : ""}`}>
              <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                {experience.position}
              </h3>
              <p className="text-purple-400 font-semibold">{experience.company}</p>
            </div>
          </div>

          {/* Meta */}
          <div
            className={`flex flex-wrap gap-4 text-sm text-slate-400 mb-4 ${
              isLeft ? "md:justify-end" : ""
            }`}
          >
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {experience.location}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {experience.duration}
            </span>
            <span className="px-2 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs">
              {experience.type}
            </span>
          </div>

          {/* Expand toggle */}
          <button
            className={`flex items-center gap-2 text-slate-400 hover:text-white transition-colors ${
              isLeft ? "md:ml-auto" : ""
            }`}
          >
            <span className="text-sm">{isExpanded ? "Show less" : "Show more"}</span>
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {/* Expanded content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-4 mt-4 border-t border-slate-800">
                  {/* Achievements */}
                  <h4
                    className={`text-sm font-semibold text-slate-300 mb-3 ${
                      isLeft ? "md:text-right" : ""
                    }`}
                  >
                    Key Achievements
                  </h4>
                  <ul className={`space-y-2 ${isLeft ? "md:text-right" : ""}`}>
                    {experience.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: isLeft ? 20 : -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="text-slate-400 text-sm flex items-start gap-2"
                        style={{ flexDirection: isLeft ? "row-reverse" : "row" }}
                      >
                        <span className="text-blue-400 mt-1">•</span>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="mt-4">
                    <h4
                      className={`text-sm font-semibold text-slate-300 mb-3 ${
                        isLeft ? "md:text-right" : ""
                      }`}
                    >
                      Technologies Used
                    </h4>
                    <div
                      className={`flex flex-wrap gap-2 ${isLeft ? "md:justify-end" : ""}`}
                    >
                      {experience.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs border border-slate-700 hover:border-blue-500/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Timeline dot */}
      <div className="hidden md:flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
          className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 ring-4 ring-slate-950 ring-offset-2 ring-offset-blue-500/20"
        />
      </div>

      {/* Spacer */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
};

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="Experience"
          subtitle="My professional journey building software solutions"
        />

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-blue-500/50" />

          {/* Experience cards */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.company}
                experience={experience}
                index={index}
                isExpanded={expandedIndex === index}
                onToggle={() => toggleExpand(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
