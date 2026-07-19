"use client";

import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import { projects, type Project } from "@/config/projects";
import { SectionHeading, Reveal } from "@/components/section";

function StatusPill({ status }: { status: Project["status"] }) {
  const tone =
    status === "Live"
      ? "text-emerald-500 border-emerald-500/30 bg-emerald-500/10"
      : status === "Self-hosted"
        ? "text-primary border-primary/30 bg-primary/10"
        : status === "Archived"
          ? "text-default-500 border-default-300 bg-default-100"
          : "text-amber-500 border-amber-500/30 bg-amber-500/10";

  return (
    <span
      className={`rounded-full border px-2.5 py-0.5 font-mono text-[0.68rem] uppercase tracking-wide ${tone}`}
    >
      {status}
    </span>
  );
}

function Tech({ tech }: { tech: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tech.map((t) => (
        <span
          key={t}
          className="rounded-md border border-default-200 bg-default-100/60 px-2.5 py-1 font-mono text-xs text-default-600"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex items-center gap-4 text-sm">
      {project.github && (
        <Link
          isExternal
          className="flex items-center gap-1.5 text-default-600 hover:text-primary"
          href={project.github}
        >
          <FaGithub size={16} /> Code
        </Link>
      )}
      {project.live && (
        <Link
          isExternal
          className="flex items-center gap-1.5 text-default-600 hover:text-primary"
          href={project.live}
        >
          <FiExternalLink size={16} /> Live
        </Link>
      )}
    </div>
  );
}

function FeaturedCard({ project }: { project: Project }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="group relative overflow-hidden rounded-3xl border border-default-200 bg-gradient-to-br from-default-50 to-default-100/40 p-8 transition-[border-color,transform,box-shadow] duration-200 ease-[var(--ease-out-custom)] hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg active:scale-[0.97] sm:p-10"
      layoutId={reduce ? undefined : `project-card-${project.slug}`}
    >
      <NextLink
        aria-label={project.title}
        className="absolute inset-0 z-0"
        href={`/projects/${project.slug}`}
      />
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/10 blur-3xl transition-opacity group-hover:opacity-80" />
      <div className="relative">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.16em] text-primary">
            Featured
          </span>
          <StatusPill status={project.status} />
          <span className="font-mono text-xs text-default-400">
            {project.year}
          </span>
        </div>
        <motion.h3
          className="mt-4 text-3xl font-semibold tracking-tight text-foreground"
          layoutId={reduce ? undefined : `project-title-${project.slug}`}
        >
          {project.title}
        </motion.h3>
        <p className="mt-1 text-lg text-primary">{project.tagline}</p>
        <p className="mt-4 max-w-2xl text-default-600">{project.description}</p>
        <ul className="mt-5 grid gap-2 sm:grid-cols-3">
          {project.highlights.map((h) => (
            <li
              key={h}
              className="flex items-start gap-2 text-sm text-default-600"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {h}
            </li>
          ))}
        </ul>
        <div className="relative z-10 mt-7 flex flex-wrap items-center justify-between gap-4">
          <Tech tech={project.tech} />
          <ProjectLinks project={project} />
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="group relative flex h-full flex-col rounded-2xl border border-default-200 bg-default-50/50 p-6 transition-[border-color,transform,box-shadow] duration-200 ease-[var(--ease-out-custom)] hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg active:scale-[0.97]"
      layoutId={reduce ? undefined : `project-card-${project.slug}`}
    >
      <NextLink
        aria-label={project.title}
        className="absolute inset-0 z-0"
        href={`/projects/${project.slug}`}
      />
      <div className="flex items-center justify-between">
        <StatusPill status={project.status} />
        <span className="font-mono text-xs text-default-400">
          {project.year}
        </span>
      </div>
      <motion.h3
        className="mt-4 text-xl font-semibold text-foreground"
        layoutId={reduce ? undefined : `project-title-${project.slug}`}
      >
        {project.title}
      </motion.h3>
      <p className="mt-1 text-sm text-primary">{project.tagline}</p>
      <p className="mt-3 flex-grow text-sm text-default-600">
        {project.description}
      </p>
      <div className="relative z-10 mt-5 space-y-4">
        <Tech tech={project.tech} />
        <ProjectLinks project={project} />
      </div>
    </motion.div>
  );
}

const Projects = () => {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section className="pt-24 sm:pt-28" id="work">
      <SectionHeading eyebrow="Work" index="02" title="Selected projects" />
      <div className="space-y-6">
        {featured && (
          <Reveal>
            <FeaturedCard project={featured} />
          </Reveal>
        )}
        <div className="grid gap-6 md:grid-cols-3">
          {rest.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <Link
          isExternal
          className="link-underline group inline-flex items-center gap-2 font-mono text-sm text-default-600 hover:text-primary"
          href="https://github.com/Samylay?tab=repositories"
        >
          More on GitHub
          <FaArrowRight
            className="transition-transform group-hover:translate-x-1"
            size={13}
          />
        </Link>
      </div>
    </section>
  );
};

export default Projects;
