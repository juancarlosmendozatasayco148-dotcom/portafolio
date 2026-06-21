"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { educationList } from "@/data/education";
import { HiAcademicCap, HiCalendar } from "react-icons/hi";
import AnimatedSection from "./AnimatedSection";

function EducationCard({
  edu,
  index,
}: {
  edu: (typeof educationList)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <div className="group p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex gap-4 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5 hover:-translate-y-0.5">
        <div className="size-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shrink-0 shadow-lg shadow-cyan-500/20 group-hover:scale-110 group-hover:shadow-cyan-500/30 transition-all duration-300">
          <HiAcademicCap className="text-white" size={22} />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
            {edu.degree}
          </h3>
          <p className="text-cyan-600 dark:text-cyan-400 text-sm font-medium mb-1">
            {edu.institution}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            {edu.field}
          </p>
             {edu.description && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 text-pretty">
              {edu.description}
            </p>
          )}
          <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
            <HiCalendar size={12} />
            {edu.startDate} - {edu.endDate}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Education() {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-500" />
              <span className="text-xs font-semibold tracking-widest uppercase text-cyan-600 dark:text-cyan-400">
                Formación
              </span>
              <span className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-balance">
              Educación
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
          </div>
        </AnimatedSection>

        <div className="space-y-6">
          {educationList.map((edu, i) => (
            <EducationCard key={edu.id} edu={edu} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
