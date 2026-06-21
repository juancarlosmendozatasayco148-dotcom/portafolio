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
    <AnimatedSection>
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-500" />
              <span className="text-xs font-semibold tracking-widest uppercase text-cyan-600 dark:text-cyan-400">
                Acerca de
              </span>
              <span className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-balance">
              Sobre Mí
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg text-pretty">
                Desarrollador Full Stack en formación con experiencia en la
                creación y mantenimiento de sitios web. Cuento con conocimientos
                en Next.js, React, JavaScript, PHP, HTML, CSS y MySQL,
                participando tanto en el desarrollo de interfaces de usuario
                como en la implementación de funcionalidades del lado del
                servidor y la gestión de bases de datos.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-pretty">
                Destaco por mi capacidad de aprendizaje, resolución de problemas
                y trabajo en equipo. Mi objetivo es seguir creciendo
                profesionalmente y aportar al desarrollo de soluciones web
                modernas, eficientes y escalables.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 dark:bg-green-900/20 text-sm text-gray-600 dark:text-gray-400 border border-green-200 dark:border-green-800">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  2 años experiencia
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-sm text-gray-600 dark:text-gray-400 border border-blue-200 dark:border-blue-800">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  5 proyectos
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-50 dark:bg-cyan-900/20 text-sm text-gray-600 dark:text-gray-400 border border-cyan-200 dark:border-cyan-800">
                  <span className="w-2 h-2 rounded-full bg-cyan-500" />
                  Remoto
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="group relative p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="size-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-300">
                    <item.icon className="text-white" size={20} />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1 relative z-10">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 relative z-10">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
