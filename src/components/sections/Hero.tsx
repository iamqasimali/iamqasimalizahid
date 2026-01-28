import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ChevronDown, Github, Linkedin, Mail, Download, MessageCircle } from "lucide-react";
import Button from "../ui/Button";
import { profile } from "../../data";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-950 to-blue-900/30" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full glass text-blue-400 font-mono text-sm mb-6"
            >
              {"<Hello World />"}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold text-white mb-4"
            >
              {profile.name.split(" ")[0]}{" "}
              <span className="text-gradient">{profile.name.split(" ").slice(1).join(" ")}</span>
            </motion.h1>

            <div className="h-16 md:h-20 mb-6">
              <TypeAnimation
                sequence={[
                  "Senior Full Stack Developer",
                  2000,
                  "AI Integration Specialist",
                  2000,
                  "Ruby on Rails Expert",
                  2000,
                  "React/Next.js Developer",
                  2000,
                  "Python & LangChain Dev",
                  2000,
                ]}
                wrapper="h2"
                className="text-2xl md:text-4xl text-blue-400 font-semibold"
                repeat={Infinity}
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-slate-400 mb-8 max-w-lg"
            >
              Building scalable web applications and AI-powered solutions for 7+ years.
              Specialized in Ruby on Rails, React, Python, and Generative AI integration.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
              >
                Let's Connect
              </Button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-4"
            >
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg glass text-slate-400 hover:text-blue-400 hover:border-blue-400/50 transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg glass text-slate-400 hover:text-white hover:border-white/50 transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="p-3 rounded-lg glass text-slate-400 hover:text-purple-400 hover:border-purple-400/50 transition-all duration-300"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://wa.me/923035570992"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg glass text-slate-400 hover:text-green-500 hover:border-green-500/50 transition-all duration-300"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 px-4 py-3 rounded-lg glass text-slate-400 hover:text-green-400 hover:border-green-400/50 transition-all duration-300"
              >
                <Download size={18} />
                <span className="text-sm font-medium">Resume</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Visual element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Code window mockup */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl" />
              <div className="relative glass rounded-2xl p-6 font-mono text-sm">
                {/* Window controls */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-4 text-slate-500 text-xs">developer.rb</span>
                </div>

                {/* Code content */}
                <div className="space-y-2">
                  <p>
                    <span className="text-purple-400">class</span>{" "}
                    <span className="text-yellow-400">Developer</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-purple-400">def</span>{" "}
                    <span className="text-blue-400">initialize</span>
                  </p>
                  <p className="pl-8">
                    <span className="text-slate-400">@name</span>{" "}
                    <span className="text-white">=</span>{" "}
                    <span className="text-green-400">"Qasim Ali Zahid"</span>
                  </p>
                  <p className="pl-8">
                    <span className="text-slate-400">@role</span>{" "}
                    <span className="text-white">=</span>{" "}
                    <span className="text-green-400">"Senior Full Stack Developer"</span>
                  </p>
                  <p className="pl-8">
                    <span className="text-slate-400">@skills</span>{" "}
                    <span className="text-white">=</span>{" "}
                    <span className="text-white">[</span>
                  </p>
                  <p className="pl-12">
                    <span className="text-green-400">"Ruby on Rails"</span>
                    <span className="text-white">,</span>
                  </p>
                  <p className="pl-12">
                    <span className="text-green-400">"React"</span>
                    <span className="text-white">,</span>
                  </p>
                  <p className="pl-12">
                    <span className="text-green-400">"PostgreSQL"</span>
                  </p>
                  <p className="pl-8">
                    <span className="text-white">]</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-purple-400">end</span>
                  </p>
                  <p>
                    <span className="text-purple-400">end</span>
                  </p>
                  <p className="mt-4">
                    <span className="text-slate-400"># Ready to build something amazing?</span>
                  </p>
                  <p>
                    <span className="text-yellow-400">Developer</span>
                    <span className="text-white">.new.</span>
                    <span className="text-blue-400">hire!</span>
                    <span className="animate-pulse text-white">|</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Floating tech badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 text-sm font-semibold"
            >
              Ruby on Rails
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
              className="absolute -bottom-4 -left-4 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-sm font-semibold"
            >
              React
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute top-1/2 -right-8 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-semibold"
            >
              PostgreSQL
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection("about")}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-slate-500 hover:text-white transition-colors"
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <ChevronDown size={20} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
