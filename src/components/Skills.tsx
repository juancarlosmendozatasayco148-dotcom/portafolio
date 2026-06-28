"use client";

import { useRef, memo } from "react";
import { useInView, motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import AnimatedSection from "./AnimatedSection";
import RadarChart from "./RadarChart";
import SplitText from "./SplitText";

const SkillBar = memo(function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref}>
      <div className="flex justify-between text-sm mb-1.5">
        <span className="text-gray-300 font-mono text-xs tracking-wide">
          {name}
        </span>
      </div>
      <div className="h-1.5 bg-border rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gold/70"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{
            duration: 1,
            delay: index * 0.1,
            ease: [0.25, 0.4, 0.25, 1],
          }}
        />
      </div>
    </div>
  );
});

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold/60" />
              <span className="text-xs font-semibold tracking-widest uppercase text-gold">
                Tecnologías
              </span>
              <span className="h-px w-8 bg-gradient-to-l from-transparent to-gold/60" />
            </div>
            <SplitText
              text="Skills"
              tag="h2"
              splitType="words"
              className="text-3xl sm:text-4xl font-serif text-balance mb-4 block"
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
              delay={80}
              duration={1}
              textAlign="center"
            />
            <div className="w-16 h-0.5 bg-gold/40 mx-auto" />
          </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <AnimatedSection delay={0.1} className="flex justify-center">
            <RadarChart />
          </AnimatedSection>

          <div className="space-y-8">
            {skillCategories.map((category, ci) => (
              <AnimatedSection key={category.title} delay={ci * 0.15}>
                <div className="p-5 rounded-lg bg-surface border border-border hover:border-gold/20 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="size-8 rounded-md bg-gold/15 flex items-center justify-center text-gold text-xs font-mono font-bold">
                      {ci + 1}
                    </div>
                    <h3 className="text-base font-medium text-foreground tracking-wide">
                      {category.title}
                    </h3>
                  </div>
                  <div className="space-y-3.5">
                    {category.skills.map((skill, si) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        index={si}
                      />
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
