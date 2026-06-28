"use client";

import { motion } from "framer-motion";
import { HiArrowDown } from "react-icons/hi";
import Magnetic from "./Magnetic";
import ShinyText from "./ShinyText";
import Aurora from "./Aurora";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-16"
    >
      <div className="absolute inset-0">
        <Aurora
          colorStops={["#C9A84C", "#A8882E", "#0A0A0A"]}
          speed={0.5}
          blend={0.3}
          amplitude={0.8}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.03] to-transparent pointer-events-none" />

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
          <ShinyText
            text="Carlos"
            color="#C9A84C"
            shineColor="#F0DFA0"
            speed={3}
            spread={80}
            direction="left"
          />
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
