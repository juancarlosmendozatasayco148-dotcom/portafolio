"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { HiBriefcase, HiCalendar } from "react-icons/hi";
import AnimatedSection from "./AnimatedSection";

function TimelineItem({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative pl-20"
    >
      <div className="absolute left-4 top-1 w-10 h-10 rounded-full bg-white dark:bg-gray-900 border-2 border-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/20 z-10">
        <HiBriefcase className="text-cyan-500" size={16} />
      </div>

      <div className="group p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5 hover:-translate-y-0.5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
            {exp.position}
          </h3>
          <span className="flex items-center gap-1 text-sm text-gray-400 mt-1 sm:mt-0">
            <HiCalendar size={14} />
            {exp.startDate} - {exp.endDate || "Actualidad"}
          </span>
        </div>

        <p className="text-cyan-600 dark:text-cyan-400 font-medium text-sm mb-3">
          {exp.company} · {exp.location}
        </p>

        <ul className="space-y-2 mb-4">
          {exp.description.map((item, i) => (
            <li
              key={i}
              className="text-sm text-gray-600 dark:text-gray-400 flex gap-2"
            >
              <span className="text-cyan-500 mt-1.5 shrink-0">
                <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                  <circle cx="3" cy="3" r="3" />
                </svg>
              </span>
              {item}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5">
          {exp.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-0.5 rounded-md bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-500" />
              <span className="text-xs font-semibold tracking-widest uppercase text-cyan-600 dark:text-cyan-400">
                Trayectoria
              </span>
              <span className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Experiencia
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
          </div>
        </AnimatedSection>

        <div className="relative">
          <motion.div
            className="absolute left-9 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: [0.25, 0.4, 0.25, 1] }}
            style={{ originY: 0 }}
          />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <TimelineItem key={exp.id} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
