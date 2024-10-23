"use client";
import Contact from "@/components/contact";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-3xl text-center justify-center">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
