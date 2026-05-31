"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { HiExternalLink, HiCode, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection, { childVariants } from "./AnimatedSection";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const project = selectedProject
    ? projects.find((p) => p.id === selectedProject)
    : null;

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-500" />
              <span className="text-xs font-semibold tracking-widest uppercase text-cyan-600 dark:text-cyan-400">
                Trabajo
              </span>
              <span className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Proyectos
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Algunos de los proyectos en los que he trabajado
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={childVariants}
              className="group relative rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 overflow-hidden cursor-pointer hover:-translate-y-1 transition-all duration-300"
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
              <div className="relative h-48 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-600/20 flex items-center justify-center overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-cyan-500/20 to-transparent" />
                <span className="text-5xl font-bold text-gray-300 dark:text-gray-700 select-none group-hover:scale-110 transition-transform duration-300">
                  {project.title.charAt(0)}
                </span>
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <span className="text-xs px-2 py-1 rounded-md bg-white/90 dark:bg-gray-900/90 text-gray-700 dark:text-gray-300 backdrop-blur-sm">
                    Ver detalle →
                  </span>
                </div>
              </div>
              <div className="relative p-5 bg-white dark:bg-gray-900">
                <div className="flex items-center gap-2 mb-2">
                  {project.featured && (
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                      Destacado
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="text-xs px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatedSection>
      </div>

      <AnimatePresence>
        {project && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="max-w-lg w-full bg-white dark:bg-gray-900 rounded-2xl p-6 relative shadow-2xl border border-gray-200 dark:border-gray-800"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <HiX size={20} />
              </button>

              <div className="relative h-40 rounded-xl bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-600/20 flex items-center justify-center mb-4 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <span className="text-4xl font-bold text-gray-300 dark:text-gray-700 select-none">
                  {project.title.charAt(0)}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                {project.longDescription}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <HiCode size={16} />
                    Código
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white dark:bg-white dark:text-gray-900 text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    <HiExternalLink size={16} />
                    Demo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
