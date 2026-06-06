export interface Skill {
  name: string;
  level: number;
  icon?: string;
}

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 80 },
      { name: "Next.js", level: 75 },
      { name: "JavaScript", level: 85 },
      { name: "HTML/CSS", level: 90 },
      { name: "Tailwind CSS", level: 70 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "PHP", level: 70 },
      { name: "MySQL", level: 75 },
      { name: "Node.js", level: 60 },
    ],
  },
  {
    title: "Herramientas",
    skills: [
      { name: "Git", level: 70 },
      { name: "Postman", level: 65 },
    ],
  },
];
