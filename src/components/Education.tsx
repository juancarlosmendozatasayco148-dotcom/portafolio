"use client";

import { useRef, memo } from "react";
import { useInView, motion } from "framer-motion";
import { educationList } from "@/data/education";
import { HiAcademicCap, HiCalendar } from "react-icons/hi";
import AnimatedSection from "./AnimatedSection";

const EducationCard = memo(function EducationCard({
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
      <div className="group p-5 rounded-lg bg-surface border border-border flex gap-4 hover:border-gold/30 transition-all duration-300 hover:shadow-lg hover:shadow-gold/5">
        <div className="size-12 rounded-lg bg-gold/15 flex items-center justify-center shrink-0 shadow-lg shadow-gold/10 group-hover:scale-110 group-hover:shadow-gold/20 transition-all duration-300">
          <HiAcademicCap className="text-gold" size={22} />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-foreground group-hover:text-gold transition-colors">
            {edu.degree}
          </h3>
          <p className="text-gold text-sm font-medium mb-1">
            {edu.institution}
          </p>
          <p className="text-sm text-gray-500 mb-2">
            {edu.field}
          </p>
          {edu.description && (
            <p className="text-sm text-gray-500 mb-2 text-pretty">
              {edu.description}
            </p>
          )}
          <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-border text-gray-400">
            <HiCalendar size={12} />
            {edu.startDate} - {edu.endDate}
          </span>
        </div>
      </div>
    </motion.div>
  );
});

export default function Education() {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold/60" />
              <span className="text-xs font-semibold tracking-widest uppercase text-gold">
                Formación
              </span>
              <span className="h-px w-8 bg-gradient-to-l from-transparent to-gold/60" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-balance mb-4">
              Educación
            </h2>
            <div className="w-16 h-0.5 bg-gold/40 mx-auto" />
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
