import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Server, Layout, Database, Cloud, Wrench, Sparkles } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import { skillCategories } from "../../data";

const iconMap: Record<string, any> = {
  Server,
  Layout,
  Database,
  Cloud,
  Wrench,
  Sparkles,
};

const colorMap: Record<string, { bg: string; text: string; bar: string }> = {
  blue: {
    bg: "from-blue-500/20 to-blue-600/20",
    text: "text-blue-400",
    bar: "from-blue-500 to-blue-600",
  },
  purple: {
    bg: "from-purple-500/20 to-purple-600/20",
    text: "text-purple-400",
    bar: "from-purple-500 to-purple-600",
  },
  cyan: {
    bg: "from-cyan-500/20 to-cyan-600/20",
    text: "text-cyan-400",
    bar: "from-cyan-500 to-cyan-600",
  },
  green: {
    bg: "from-green-500/20 to-green-600/20",
    text: "text-green-400",
    bar: "from-green-500 to-green-600",
  },
  orange: {
    bg: "from-orange-500/20 to-orange-600/20",
    text: "text-orange-400",
    bar: "from-orange-500 to-orange-600",
  },
  pink: {
    bg: "from-pink-500/20 to-pink-600/20",
    text: "text-pink-400",
    bar: "from-pink-500 to-pink-600",
  },
};

const SkillBar = ({
  name,
  level,
  years,
  color,
  delay,
}: {
  name: string;
  level: number;
  years: number;
  color: string;
  delay: number;
}) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const colors = colorMap[color];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.3 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">
          {name}
        </span>
        <span className="text-slate-500 text-xs">
          {years} {years === 1 ? "year" : "years"}
        </span>
      </div>
      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ delay: delay + 0.2, duration: 0.8, ease: "easeOut" }}
          className={`h-full rounded-full bg-gradient-to-r ${colors.bar}`}
        />
      </div>
    </motion.div>
  );
};

const SkillCategory = ({
  category,
  index,
}: {
  category: (typeof skillCategories)[0];
  index: number;
}) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const Icon = iconMap[category.icon];
  const colors = colorMap[category.color];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group"
    >
      <div className="glass rounded-2xl p-6 h-full hover:border-slate-700 transition-all duration-300">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div
            className={`p-3 rounded-xl bg-gradient-to-br ${colors.bg} group-hover:scale-110 transition-transform duration-300`}
          >
            <Icon className={`w-6 h-6 ${colors.text}`} />
          </div>
          <h3 className="text-xl font-bold text-white">{category.title}</h3>
        </div>

        {/* Skills */}
        <div className="space-y-4">
          {category.skills.map((skill, skillIndex) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
              years={skill.years}
              color={category.color}
              delay={index * 0.1 + skillIndex * 0.05}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="Skills & Expertise"
          subtitle="Technologies and tools I've mastered over 7+ years of development"
        />

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory key={category.title} category={category} index={index} />
          ))}
        </div>

        {/* Tech cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold text-white mb-6">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Ruby",
              "Python",
              "JavaScript",
              "TypeScript",
              "Ruby on Rails",
              "React",
              "Next.js",
              "Node.js",
              "FastAPI",
              "OpenAI API",
              "LangChain",
              "Claude API",
              "GPT-4",
              "RAG",
              "Vector DBs",
              "PostgreSQL",
              "MongoDB",
              "Redis",
              "Pinecone",
              "AWS",
              "Docker",
              "Kubernetes",
              "Vercel",
              "GitHub Actions",
              "Git",
              "RSpec",
              "Jest",
              "Stripe",
              "GraphQL",
              "REST APIs",
              "WebSockets",
              "Tailwind CSS",
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 rounded-full glass text-slate-300 text-sm hover:text-white hover:border-blue-500/50 cursor-default transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
