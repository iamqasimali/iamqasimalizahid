import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, X, Layers, Code2 } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import { projects } from "../../data";

const ProjectCard = ({
  project,
  index,
  onClick,
}: {
  project: (typeof projects)[0];
  index: number;
  onClick: () => void;
}) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="relative h-full glass rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500">
        {/* Gradient background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
        />

        {/* Content */}
        <div className="relative p-6 h-full flex flex-col">
          {/* Category badge */}
          <div className="flex items-center justify-between mb-4">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.color} bg-clip-text text-transparent border border-current`}
              style={{
                borderColor: "currentColor",
                borderImage: `linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to)) 1`,
              }}
            >
              {project.category}
            </span>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="p-2 rounded-lg bg-white/5 text-slate-400 group-hover:text-white transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </motion.div>
          </div>

          {/* Project name */}
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gradient transition-colors">
            {project.name}
          </h3>

          {/* Tagline */}
          <p className="text-slate-400 mb-4">{project.tagline}</p>

          {/* Description */}
          <p className="text-slate-500 text-sm mb-6 flex-grow line-clamp-3">
            {project.description}
          </p>

          {/* Role */}
          <div className="flex items-center gap-2 mb-4 text-sm">
            <Layers className="w-4 h-4 text-blue-400" />
            <span className="text-slate-400">Role:</span>
            <span className="text-white">{project.role}</span>
          </div>

          {/* Tech stack preview */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 rounded-md bg-slate-800/50 text-slate-400 text-xs border border-slate-700/50"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="px-2 py-1 rounded-md bg-slate-800/50 text-slate-500 text-xs">
                +{project.techStack.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </motion.div>
  );
};

const ProjectModal = ({
  project,
  onClose,
}: {
  project: (typeof projects)[0];
  onClose: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with gradient */}
        <div
          className={`relative h-32 bg-gradient-to-r ${project.color} rounded-t-2xl`}
        >
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-900 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative -mt-12 px-8 pb-8">
          {/* Category badge */}
          <span className="inline-block px-4 py-2 rounded-full bg-slate-800 text-white text-sm font-semibold mb-4">
            {project.category}
          </span>

          <h2 className="text-3xl font-bold text-white mb-2">{project.name}</h2>
          <p className="text-xl text-slate-400 mb-6">{project.tagline}</p>

          <p className="text-slate-300 mb-8 leading-relaxed">
            {project.description}
          </p>

          {/* Role */}
          <div className="flex items-center gap-3 mb-6 p-4 rounded-xl bg-slate-800/50">
            <Code2 className="w-5 h-5 text-blue-400" />
            <span className="text-slate-400">My Role:</span>
            <span className="text-white font-semibold">{project.role}</span>
          </div>

          {/* Highlights */}
          <h3 className="text-lg font-semibold text-white mb-4">
            Key Highlights
          </h3>
          <ul className="space-y-3 mb-8">
            {project.highlights.map((highlight, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3"
              >
                <span
                  className={`w-2 h-2 mt-2 rounded-full bg-gradient-to-r ${project.color}`}
                />
                <span className="text-slate-300">{highlight}</span>
              </motion.li>
            ))}
          </ul>

          {/* Tech stack */}
          <h3 className="text-lg font-semibold text-white mb-4">
            Technologies Used
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.03 }}
                className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 text-sm border border-slate-700 hover:border-blue-500/50 transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="projects" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      <div className="absolute top-1/3 -left-64 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -right-64 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="Featured Projects"
          subtitle="A showcase of my work across various industries and technologies"
        />

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayedProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Show more button */}
        {projects.length > 6 && !showAll && (
          <div className="text-center">
            <Button variant="outline" onClick={() => setShowAll(true)}>
              View All Projects
            </Button>
          </div>
        )}
      </div>

      {/* Project modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
