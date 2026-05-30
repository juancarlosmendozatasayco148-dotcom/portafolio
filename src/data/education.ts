export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export const educationList: Education[] = [
  {
    id: "edu-1",
    institution: "Universidad Nacional de Ingeniería",
    degree: "Ingeniería en Computación",
    field: "Ciencias de la Computación",
    startDate: "2016",
    endDate: "2021",
    description:
      "Especialización en desarrollo de software, algoritmos y estructuras de datos.",
  },
  {
    id: "edu-2",
    institution: "Platzi",
    degree: "Escuela de Desarrollo Web",
    field: "Desarrollo Web Full Stack",
    startDate: "2020",
    endDate: "2022",
    description:
      "Cursos avanzados en React, Node.js, bases de datos y cloud computing.",
  },
  {
    id: "edu-3",
    institution: "AWS Certification",
    degree: "AWS Certified Developer – Associate",
    field: "Cloud Computing",
    startDate: "2023",
    endDate: "2023",
    description:
      "Certificación en desarrollo y despliegue de aplicaciones en AWS.",
  },
];
