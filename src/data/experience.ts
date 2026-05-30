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
    company: "TechCorp Inc.",
    position: "Desarrollador Full Stack Senior",
    location: "Lima, Perú",
    startDate: "Ene 2023",
    endDate: null,
    description: [
      "Lideré el desarrollo de una plataforma SaaS que generó $2M en ingresos anuales.",
      "Arquitecté e implementé microservicios escalables con Node.js y PostgreSQL.",
      "Mentoreé a 4 desarrolladores junior, mejorando la productividad del equipo en un 30%.",
      "Implementé CI/CD con GitHub Actions reduciendo el tiempo de despliegue en un 60%.",
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Docker", "AWS"],
  },
  {
    id: "exp-2",
    company: "StartupXYZ",
    position: "Desarrollador Full Stack",
    location: "Remoto",
    startDate: "Jun 2021",
    endDate: "Dic 2022",
    description: [
      "Construí desde cero una aplicación web utilizada por más de 10,000 usuarios.",
      "Desarrollé APIs RESTful y GraphQL con autenticación OAuth2 y JWT.",
      "Optimicé el rendimiento frontend logrando un Lighthouse score de 98.",
      "Colaboré en la migración de una arquitectura monolítica a microservicios.",
    ],
    technologies: ["React", "GraphQL", "MongoDB", "Redis", "TypeScript"],
  },
  {
    id: "exp-3",
    company: "WebAgency",
    position: "Desarrollador Frontend",
    location: "Guadalajara, MX",
    startDate: "Mar 2020",
    endDate: "May 2021",
    description: [
      "Desarrollé interfaces responsivas y accesibles para más de 15 proyectos cliente.",
      "Implementé un sistema de diseño reutilizable que redujo el tiempo de desarrollo en un 40%.",
      "Integré animaciones complejas con Framer Motion y animaciones CSS.",
    ],
    technologies: ["React", "Sass", "Framer Motion", "Figma", "Storybook"],
  },
];
