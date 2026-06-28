"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { HiArrowDown } from "react-icons/hi";
import Magnetic from "./Magnetic";

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

const particles = Array.from({ length: 20 }, (_, i) => {
  const rng = seededRandom(i * 7 + 13);
  return {
    id: i,
    x: rng() * 100,
    y: rng() * 100,
    size: rng() * 2 + 1,
    duration: rng() * 10 + 12,
    delay: rng() * 8,
    driftX: (rng() - 0.5) * 30,
    driftY: (rng() - 0.5) * 30 - 10,
  };
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.02] to-transparent pointer-events-none" />

      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-gold/20"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size * 2,
              height: p.size * 2,
            }}
            animate={{
              y: [0, p.driftY],
              x: [0, p.driftX],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-gold/10 text-gold-light border border-gold/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            Disponible para trabajar
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm font-mono tracking-widest uppercase text-gold/60 mb-4"
        >
          Desarrollador Full Stack
        </motion.p>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif text-balance mb-6 leading-[1.1]">
          <span className="text-foreground">Juan</span>{" "}
          <span className="text-gold">Carlos</span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg text-gray-400 max-w-xl mx-auto mb-10 text-pretty font-light leading-relaxed"
        >
          Construyo aplicaciones web modernas con Next.js, React y Node.js.
          Apasionado por crear soluciones funcionales y escalables.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Magnetic>
            <a
              href="#projects"
              className="group relative px-8 py-3 rounded-lg bg-gold text-[#0A0A0A] font-medium overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-gold/25 active:scale-[0.96]"
            >
              <span className="relative z-10">Ver Proyectos</span>
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg border border-gold/40 text-gold-light font-medium hover:bg-gold/10 transition-all duration-300 active:scale-[0.96]"
            >
              Contactar
            </a>
          </Magnetic>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-gold transition-colors"
      >
        <HiArrowDown size={24} />
      </motion.a>
    </section>
  );
}
