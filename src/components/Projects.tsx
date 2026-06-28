"use client";

import { useState, useRef, memo, useMemo } from "react";
import { projects } from "@/data/projects";
import { HiExternalLink, HiCode, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection, { childVariants } from "./AnimatedSection";

const ProjectCard = memo(function ProjectCard({ project, onClick }: { project: { id: string; title: string; description: string; image: string; tags: string[]; featured: boolean }; onClick: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotateX((y - centerY) / centerY * -8);
    setRotateY((x - centerX) / centerX * 8);
  }

  function handleMouseLeave() {
    setRotateX(0);
    setRotateY(0);
  }

  return (
    <motion.div
      ref={ref}
      variants={childVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className="group relative rounded-lg bg-surface border border-border hover:border-gold/40 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-gold/5"
      style={{ perspective: "800px" }}
    >
      <motion.div
        animate={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute -inset-0.5 bg-gradient-to-br from-gold/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
        <div className="relative h-48 bg-surface flex items-center justify-center overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-70 group-hover:opacity-100"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/40 to-[#0A0A0A]/80" />
          <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <span className="text-xs px-2 py-1 rounded-md bg-gold/20 text-gold-light backdrop-blur-sm border border-gold/20">
              Ver detalle →
            </span>
          </div>
        </div>
        <div className="relative p-5 bg-surface">
          <div className="flex items-center gap-2 mb-2">
            {project.featured && (
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gold/15 text-gold border border-gold/20">
                Destacado
              </span>
            )}
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-gold transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-gray-400 mb-4 line-clamp-2 text-pretty">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-md bg-border text-gray-400"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="text-xs px-2 py-0.5 rounded-md bg-border text-gray-400">
                +{project.tags.length - 4}
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
});

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projectMap = useMemo(() => new Map(projects.map(p => [p.id, p])), []);
  const project = selectedProject ? projectMap.get(selectedProject) ?? null : null;

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold/60" />
              <span className="text-xs font-semibold tracking-widest uppercase text-gold">
                Trabajo
              </span>
              <span className="h-px w-8 bg-gradient-to-l from-transparent to-gold/60" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-balance mb-4">
              Proyectos
            </h2>
            <div className="w-16 h-0.5 bg-gold/40 mx-auto" />
            <p className="mt-4 text-gray-400">
              Algunos de los proyectos en los que he trabajado
            </p>
          </div>

        <AnimatedSection stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project.id)}
            />
          ))}
        </AnimatedSection>
      </div>

      <AnimatePresence initial={false}>
        {project && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A0A0A]/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="max-w-lg w-full bg-surface rounded-2xl p-6 relative shadow-2xl border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Cerrar"
                className="absolute top-4 right-4 p-1.5 rounded-lg text-gray-500 hover:text-gold-light hover:bg-gold/10 transition-colors z-10"
              >
                <HiX size={20} />
              </button>

              <div className="relative h-40 rounded-lg bg-surface overflow-hidden mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface/60" />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                {project.longDescription}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-md bg-border text-gray-400"
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
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium text-gray-300 hover:bg-gold/10 hover:border-gold/40 hover:text-gold-light transition-all"
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
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gold text-[#0A0A0A] text-sm font-medium hover:opacity-90 transition-opacity"
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
