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
    institution: "Instituto Federico Villa Real",
    degree: "Desarrollador de Software",
    field: "Desarrollo de Software",
    startDate: "2016",
    endDate: "2021",
    description:
      "Formación en desarrollo de software, algoritmos, estructuras de datos y programación.",
  },
];
