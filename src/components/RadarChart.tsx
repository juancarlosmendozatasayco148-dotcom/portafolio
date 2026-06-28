"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { skillCategories } from "@/data/skills";

const skills = skillCategories.flatMap((cat) => cat.skills);

const SIZE = 280;
const CENTER = SIZE / 2;
const RADIUS = 110;
const LEVELS = 5;

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const angleRad = (angleDeg - 90) * (Math.PI / 180);
  return {
    x: cx + r * Math.cos(angleRad),
    y: cy + r * Math.sin(angleRad),
  };
}

export default function RadarChart() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const angleStep = 360 / skills.length;

  return (
    <div ref={ref} className="flex justify-center items-center">
      <svg width={SIZE} height={SIZE} className="drop-shadow-lg" viewBox={`0 0 ${SIZE} ${SIZE}`}>
        {Array.from({ length: LEVELS }, (_, i) => {
          const r = (RADIUS / LEVELS) * (i + 1);
          const points = skills
            .map((_, j) => {
              const p = polarToCartesian(CENTER, CENTER, r, angleStep * j);
              return `${p.x},${p.y}`;
            })
            .join(" ");
          return (
            <polygon
              key={i}
              points={points}
              fill="none"
              stroke="#1E1E1E"
              strokeWidth={1}
            />
          );
        })}

        {skills.map((_, i) => {
          const p = polarToCartesian(CENTER, CENTER, RADIUS, angleStep * i);
          return (
            <line
              key={i}
              x1={CENTER}
              y1={CENTER}
              x2={p.x}
              y2={p.y}
              stroke="#1E1E1E"
              strokeWidth={1}
            />
          );
        })}

        <motion.polygon
          points={skills
            .map((skill, i) => {
              const p = polarToCartesian(CENTER, CENTER, (RADIUS * skill.level) / 100, angleStep * i);
              return `${p.x},${p.y}`;
            })
            .join(" ")}
          fill="rgba(201, 168, 76, 0.12)"
          stroke="#C9A84C"
          strokeWidth={2}
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ transformOrigin: "center" }}
        />

        {skills.map((skill, i) => {
          const p = polarToCartesian(CENTER, CENTER, (RADIUS * skill.level) / 100, angleStep * i);
          return (
            <motion.circle
              key={i}
              cx={p.x}
              cy={p.y}
              r={3.5}
              fill="#C9A84C"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 + i * 0.1 }}
            />
          );
        })}

        {skills.map((skill, i) => {
          const p = polarToCartesian(CENTER, CENTER, RADIUS + 22, angleStep * i);
          return (
            <text
              key={i}
              x={p.x}
              y={p.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#888883"
              fontSize={10}
              fontFamily="var(--font-mono)"
            >
              {skill.name}
            </text>
          );
        })}
      </svg>
    </div>
  );
}
