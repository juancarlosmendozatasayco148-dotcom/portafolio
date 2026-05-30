export interface Skill {
  name: string;
  level: number;
  icon?: string;
}

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "JavaScript", level: 95 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "Python", level: 75 },
      { name: "PostgreSQL", level: 78 },
      { name: "MongoDB", level: 72 },
      { name: "REST APIs", level: 88 },
    ],
  },
  {
    title: "Herramientas",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 70 },
      { name: "AWS", level: 65 },
      { name: "CI/CD", level: 75 },
      { name: "Figma", level: 60 },
      { name: "Linux", level: 80 },
    ],
  },
];
