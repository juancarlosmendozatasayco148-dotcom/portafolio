"use client";

import { useRef, memo } from "react";
import { useInView, motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { HiBriefcase, HiCalendar } from "react-icons/hi";
import SplitText from "./SplitText";

const TimelineItem = memo(function TimelineItem({
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
      className="relative pl-16"
    >
      <div className="absolute left-4 top-1 size-8 rounded-full bg-surface border border-gold/40 flex items-center justify-center shadow-lg shadow-gold/10 z-10">
        <HiBriefcase className="text-gold" size={14} />
      </div>

      <div className="group p-5 rounded-lg bg-surface border border-border hover:border-gold/30 transition-all duration-300 hover:shadow-lg hover:shadow-gold/5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
          <h3 className="text-base font-semibold text-foreground group-hover:text-gold transition-colors">
            {exp.position}
          </h3>
          <span className="flex items-center gap-1 text-xs text-gray-500 mt-1 sm:mt-0">
            <HiCalendar size={12} />
            {exp.startDate} - {exp.endDate || "Actualidad"}
          </span>
        </div>

        <p className="text-gold font-medium text-sm mb-3">
          {exp.company} · {exp.location}
        </p>

        <ul className="space-y-2 mb-4">
          {exp.description.map((item, i) => (
            <li
              key={i}
              className="text-sm text-gray-400 flex gap-2"
            >
              <span className="text-gold mt-1.5 shrink-0">
                <svg width="5" height="5" viewBox="0 0 5 5" fill="currentColor">
                  <circle cx="2.5" cy="2.5" r="2.5" />
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
              className="text-xs px-2 py-0.5 rounded-md bg-gold/10 text-gold border border-gold/15"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
});

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold/60" />
              <span className="text-xs font-semibold tracking-widest uppercase text-gold">
                Trayectoria
              </span>
              <span className="h-px w-8 bg-gradient-to-l from-transparent to-gold/60" />
            </div>
            <SplitText
              text="Experiencia"
              tag="h2"
              splitType="words"
              className="text-3xl sm:text-4xl font-serif text-balance mb-4"
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
              delay={80}
              duration={1}
              textAlign="center"
            />
            <div className="w-16 h-0.5 bg-gold/40 mx-auto" />
          </div>

        <div className="relative">
          <motion.div
            className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent"
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
