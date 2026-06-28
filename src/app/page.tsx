import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/Hero"));
const About = dynamic(() => import("@/components/About"));
const Skills = dynamic(() => import("@/components/Skills"));
const Projects = dynamic(() => import("@/components/Projects"));
const Experience = dynamic(() => import("@/components/Experience"));
const Education = dynamic(() => import("@/components/Education"));
const Contact = dynamic(() => import("@/components/Contact"));

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </>
  );
}
