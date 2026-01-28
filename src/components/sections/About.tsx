import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Calendar,
  Rocket,
  Zap,
  Users,
  CheckCircle,
  GraduationCap,
  MapPin,
} from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import { profile, stats } from "../../data";

const iconMap: Record<string, any> = {
  Calendar,
  Rocket,
  Zap,
  Users,
};

const StatCard = ({
  stat,
  index,
}: {
  stat: (typeof stats)[0];
  index: number;
}) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const Icon = iconMap[stat.icon];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative glass rounded-2xl p-6 text-center hover:border-blue-500/50 transition-all duration-300">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 mb-4">
          <Icon className="w-7 h-7 text-blue-400" />
        </div>
        <motion.h3
          className="text-4xl font-bold text-white mb-2"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.1 + 0.3 }}
        >
          {stat.value}
        </motion.h3>
        <p className="text-slate-400 text-sm">{stat.label}</p>
      </div>
    </motion.div>
  );
};

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      <div className="absolute top-1/2 -right-64 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-64 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="About Me"
          subtitle="Passionate about building scalable solutions and leading development teams"
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: About text */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p>
                I'm a <span className="text-white font-semibold">Senior Full Stack Developer</span> with{" "}
                <span className="text-blue-400 font-semibold">7+ years</span> of experience building
                scalable web applications and APIs. Currently working at{" "}
                <span className="text-purple-400 font-semibold">QuickGemSolutions</span>, I
                specialize in Ruby on Rails backend development and React frontend engineering.
              </p>
              <p>
                My journey in software development started in 2019, and since then, I've had the
                privilege of working with startups and enterprises across{" "}
                <span className="text-white">healthcare, fintech, e-commerce, and logistics</span>{" "}
                sectors.
              </p>
            </div>

            {/* Education */}
            <div className="glass rounded-xl p-4 mt-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-500/20">
                  <GraduationCap className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">{profile.education.degree}</h4>
                  <p className="text-slate-400 text-sm">{profile.education.institution}</p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {profile.education.duration}
                    </span>
                    <span>CGPA: {profile.education.cgpa}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-slate-400">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span>{profile.location}</span>
            </div>
          </motion.div>

          {/* Right: What I do */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">What I Do Best</h3>
            <div className="space-y-4">
              {profile.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3 group"
                >
                  <div className="mt-1 p-1 rounded-full bg-green-500/20 group-hover:bg-green-500/30 transition-colors">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <p className="text-slate-300 group-hover:text-white transition-colors">
                    {highlight}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
