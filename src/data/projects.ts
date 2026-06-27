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
    id: "lumina",
    title: "Lumina Festival",
    description:
      "Landing page para festival de arte, luz y sonido. Diseño inmersivo con experiencia visual impactante y contenido dinámico.",
    longDescription:
      "Sitio web para Lumina, un festival de arte, luz y sonido que ofrece una experiencia inmersiva única. La landing page presenta un diseño visual impactante con animaciones sutiles, tipografía moderna y una paleta de colores vibrante que refleja la energía del festival. Incluye secciones de lineup, experiencias, galería y formulario de contacto.",
    image: "/projects/lumina.jpg",
    tags: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS", "Responsive Design"],
    liveUrl: "https://lumina-alpha-gilt.vercel.app/",
    featured: true,
  },
  {
    id: "cafe",
    title: "Café Aroma",
    description:
      "Landing page acogedora para cafetería artesanal. Diseño cálido con menú, galería y ubicación.",
    longDescription:
      "Sitio web para cafetería artesanal Café Aroma. Incluye menú digital con categorías, galería de imágenes del local, información de contacto y ubicación con mapa interactivo. Desarrollado con Next.js y Tailwind CSS con una estética cálida y minimalista.",
    image: "/projects/cafe.jpg",
    tags: ["Next.js", "Tailwind CSS", "JavaScript", "Responsive Design"],
    liveUrl: "https://cafe-landing-liard.vercel.app/",
    featured: true,
  },
  {
    id: "ferreo-gym",
    title: "Férreo Gym & Box",
    description:
      "Landing page para gimnasio con boxeo, cross training y pesa libre. Diseño moderno con planes, horarios, staff y testimonios.",
    longDescription:
      "Sitio web completo para Férreo Gym & Box. Incluye secciones de clases, horarios semanales, staff de entrenadores, planes de membresía sin permanencia, testimonios y formulario de contacto. Desarrollado con Next.js y Tailwind CSS con un diseño oscuro y agresivo acorde a la marca.",
    image: "/projects/ferreo-gym.jpg",
    tags: ["Next.js", "Tailwind CSS", "JavaScript", "Responsive Design"],
    liveUrl: "https://ferreo-gym.vercel.app/",
    featured: true,
  },
  {
    id: "veterinaria",
    title: "NaturaVet",
    description:
      "Landing page para clínica veterinaria con enfoque natural. Diseño moderno y cálido con servicios, equipo, testimonios y galería.",
    longDescription:
      "Sitio web completo para clínica veterinaria NaturaVet. Incluye diseño responsivo, galería de imágenes, sistema de testimonios, sección de preguntas frecuentes y formulario de contacto con integración WhatsApp. Desarrollado con Next.js y Tailwind CSS.",
    image: "/projects/veterinaria.jpg",
    tags: ["Next.js", "Tailwind CSS", "JavaScript", "Responsive Design"],
    liveUrl: "https://veterinaria-rouge.vercel.app/",
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
    liveUrl: "https://ecommerce-electronics-pearl.vercel.app/",
    featured: true,
  },
  {
    id: "lune",
    title: "LUNE",
    description:
      "Landing page para marca de moda minimalista. Diseño elegante con colección, esencia y voces de clientes.",
    longDescription:
      "Sitio web para LUNE, una marca de ropa que combina minimalismo atemporal con artesanía de calidad. La landing page presenta un diseño sofisticado con tipografía limpia, paleta neutra y animaciones sutiles. Incluye secciones de colección destacada, esencia de la marca (materiales nobles, confección artesanal, diseño atemporal), voces de clientes y formulario de suscripción.",
    image: "/projects/lune.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Responsive Design"],
    liveUrl: "https://lune-dusky-six.vercel.app/",
    featured: true,
  },
];
