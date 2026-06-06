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
    id: "insightpdf",
    title: "InsightPDF",
    description:
      "Analiza documentos PDF con inteligencia artificial. Sube tu PDF y obtén resúmenes inteligentes, extracción de insights y un chat contextual.",
    longDescription:
      "InsightPDF es una aplicación web que permite analizar documentos PDF de hasta 10MB utilizando Google Gemini AI. Ofrece resúmenes en tres niveles de detalle (corto, medio y detallado), extracción automática de conceptos clave, conexiones entre ideas, datos relevantes y un chat contextual inteligente para hacer preguntas sobre el contenido del documento. Sin necesidad de registro, completamente gratuito y con procesamiento en segundos.",
    image: "/projects/insightpdf.jpg",
    tags: ["Next.js", "TypeScript", "Google Gemini", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/juancarlosmendozatasayco148-dotcom/insightpdf",
    liveUrl: "https://insightpdf-swart.vercel.app/",
    featured: true,
  },
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
