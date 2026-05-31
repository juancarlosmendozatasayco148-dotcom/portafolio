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
    id: "task-management",
    title: "Task Manager",
    description:
      "Aplicación de gestión de tareas con tablero Kanban, colaboración en tiempo real y notificaciones.",
    longDescription:
      "Un gestor de tareas inspirado en Trello con funcionalidades de arrastrar y soltar, colaboración en tiempo real usando WebSockets, notificaciones push, y un sistema de etiquetas y filtros avanzados.",
    image: "/projects/taskmanager.jpg",
    tags: ["React", "Socket.io", "Node.js", "MongoDB", "Docker"],
    githubUrl: "https://github.com/tuusuario/taskmanager",
    liveUrl: "https://taskmanager-demo.vercel.app",
    featured: true,
  },
  {
    id: "ai-chatbot",
    title: "AI Chatbot",
    description:
      "Chatbot inteligente con procesamiento de lenguaje natural y respuestas contextuales.",
    longDescription:
      "Un chatbot impulsado por IA que utiliza modelos de lenguaje avanzados para mantener conversaciones contextuales. Integra APIs de OpenAI, tiene memoria conversacional, y puede realizar acciones como buscar información o gestionar tareas.",
    image: "/projects/chatbot.jpg",
    tags: ["Python", "FastAPI", "OpenAI", "React", "WebSockets"],
    githubUrl: "https://github.com/tuusuario/chatbot",
    featured: true,
  },
  {
    id: "weather-app",
    title: "Weather Dashboard",
    description:
      "Dashboard del clima con pronósticos, mapas interactivos y alertas personalizadas.",
    longDescription:
      "Una aplicación del clima que muestra pronósticos detallados, mapas meteorológicos interactivos usando Leaflet, alertas personalizadas por ubicación, y visualizaciones de datos históricos con gráficos Chart.js.",
    image: "/projects/weather.jpg",
    tags: ["JavaScript", "API REST", "Leaflet", "Chart.js", "CSS Modules"],
    githubUrl: "https://github.com/tuusuario/weather",
    liveUrl: "https://weather-demo.vercel.app",
    featured: false,
  },
  {
    id: "social-media",
    title: "Social Media Dashboard",
    description:
      "Panel de análisis para redes sociales con métricas en tiempo real y reportes.",
    longDescription:
      "Un dashboard analítico para redes sociales que consolida métricas de múltiples plataformas (Twitter, Instagram, LinkedIn). Incluye gráficos interactivos, exportación de reportes en PDF, y alertas de rendimiento.",
    image: "/projects/social.jpg",
    tags: ["React", "D3.js", "Node.js", "PostgreSQL", "Tailwind"],
    githubUrl: "https://github.com/tuusuario/social-dashboard",
    featured: false,
  },
  {
    id: "portfolio-generator",
    title: "Portfolio Generator",
    description:
      "Generador dinámico de portafolios con plantillas personalizables y despliegue automático.",
    longDescription:
      "Una herramienta que permite crear portafolios profesionales a partir de plantillas configurables. Incluye editor visual, integración con GitHub para proyectos, y despliegue automatizado en Vercel.",
    image: "/projects/portfolio.jpg",
    tags: ["Next.js", "MDX", "GitHub API", "Vercel", "TypeScript"],
    githubUrl: "https://github.com/tuusuario/portfolio-gen",
    liveUrl: "https://portfolio-gen.vercel.app",
    featured: false,
  },
];
