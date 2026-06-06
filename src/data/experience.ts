export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "Visual Creativa Producciones",
    position: "Frontend Developer",
    location: "",
    startDate: "Ene 2025",
    endDate: "Jun 2025",
    description: [
      "Desarrollé funcionalidades utilizando PHP, HTML, CSS, JavaScript y MySQL, contribuyendo a la optimización de procesos y gestión de información.",
      "Diseñé e implementé interfaces web funcionales y adaptables, enfocadas en mejorar la experiencia del usuario.",
      "Participé en la implementación de nuevas funcionalidades, corrección de errores y mejora continua de los sitios web según los requerimientos del negocio.",
    ],
    technologies: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
  },
  {
    id: "exp-2",
    company: "Práctica Profesional",
    position: "Practicante Full Stack",
    location: "",
    startDate: "2024",
    endDate: "2025",
    description: [
      "Participé en el desarrollo de aplicaciones web Full Stack utilizando Next.js, JavaScript y MySQL.",
      "Diseñé e implementé interfaces de usuario dinámicas y responsivas, enfocadas en la experiencia del usuario.",
      "Desarrollé funcionalidades backend para la gestión de datos, integración con bases de datos y lógica de negocio.",
      "Colaboré en el mantenimiento, optimización y despliegue de aplicaciones web para diferentes necesidades empresariales.",
    ],
    technologies: ["Next.js", "JavaScript", "MySQL", "React"],
  },
];
