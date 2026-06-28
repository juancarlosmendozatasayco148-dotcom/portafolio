"use client";

import { HiCode, HiCube, HiLightningBolt } from "react-icons/hi";
import AnimatedSection from "./AnimatedSection";

const highlights = [
  {
    icon: HiCode,
    title: "Código Limpio",
    description:
      "Escribo código mantenible y bien documentado siguiendo las mejores prácticas.",
  },
  {
    icon: HiCube,
    title: "Arquitectura Escalable",
    description:
      "Diseño sistemas que crecen con tu negocio, desde MVP hasta escala enterprise.",
  },
  {
    icon: HiLightningBolt,
    title: "Rendimiento",
    description:
      "Optimizo cada aspecto para ofrecer experiencias rápidas y fluidas.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold/60" />
            <span className="text-xs font-semibold tracking-widest uppercase text-gold">
              Acerca de
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-gold/60" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-balance mb-4">
            Sobre Mí
          </h2>
          <div className="w-16 h-0.5 bg-gold/40 mx-auto" />
        </div>

        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-4">
              <p className="text-gray-400 leading-relaxed text-lg text-pretty font-light">
                <span className="float-left text-5xl font-serif text-gold leading-none mr-3 mt-1">
                  D
                </span>
                esarrollador Full Stack en formación con experiencia en la
                creación y mantenimiento de sitios web. Cuento con conocimientos
                en Next.js, React, JavaScript, PHP, HTML, CSS y MySQL,
                participando tanto en el desarrollo de interfaces de usuario
                como en la implementación de funcionalidades del lado del
                servidor y la gestión de bases de datos.
              </p>
              <p className="text-gray-400 leading-relaxed text-pretty font-light">
                Destaco por mi capacidad de aprendizaje, resolución de problemas
                y trabajo en equipo. Mi objetivo es seguir creciendo
                profesionalmente y aportar al desarrollo de soluciones web
                modernas, eficientes y escalables.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 text-sm text-gold-light border border-gold/20">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  2 años experiencia
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 text-sm text-gold-light border border-gold/20">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  6 proyectos
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 text-sm text-gold-light border border-gold/20">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  Remoto
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="group relative p-6 rounded-lg bg-surface border border-border hover:border-gold/40 transition-all duration-300 hover:shadow-lg hover:shadow-gold/5 hover:-translate-y-1 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="size-10 rounded-lg bg-gold/20 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-gold/20 transition-all duration-300">
                    <item.icon className="text-gold" size={20} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1 relative z-10">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 relative z-10">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
