import Hero from "@/components/Hero";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Writing from "@/components/writing";
import Contact from "@/components/contact";
import BackToTopButton from "@/components/BackToTopButton";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 pb-16">
      <Hero />
      <Skills />
      <Projects />
      <Writing />
      <Contact />
      <BackToTopButton />
    </div>
  );
}
