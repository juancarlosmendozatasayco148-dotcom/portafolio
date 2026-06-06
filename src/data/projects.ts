export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "ecommerce-tech",
    title: "E-Commerce de Tecnología",
    description:
      "Desarrollo de interfaz de usuario para e-commerce del sector tecnológico. Implementación de componentes reutilizables y experiencia de compra optimizada.",
    longDescription:
      "Trabajé como Frontend Developer freelance en un proyecto de e-commerce del sector tecnológico, desarrollando la interfaz de usuario con React y Next.js. Implementé componentes reutilizables, diseño responsive y optimización de rendimiento para mejorar la experiencia del usuario. Integré servicios y APIs REST para la gestión de productos, autenticación de usuarios y procesos de compra.",
    image: "/projects/ecommerce.jpg",
    tags: ["React", "Next.js", "JavaScript", "REST APIs", "Tailwind CSS"],
    featured: true,
  },
];
