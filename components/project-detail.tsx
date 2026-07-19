"use client";

import { Link } from "@nextui-org/link";
import { motion, useReducedMotion } from "framer-motion";
import { FaGithub, FaArrowLeft } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import { type Project } from "@/config/projects";

export function ProjectDetail({ project }: { project: Project }) {
  const reduce = useReducedMotion();
  const cardLayoutId = reduce ? undefined : `project-card-${project.slug}`;
  const titleLayoutId = reduce ? undefined : `project-title-${project.slug}`;

  return (
    <article className="mx-auto max-w-2xl">
      <Link
        className="group inline-flex items-center gap-2 font-mono text-sm text-default-500 hover:text-primary"
        href="/#work"
      >
        <FaArrowLeft
          className="transition-transform group-hover:-translate-x-1"
          size={12}
        />
        Work
      </Link>

      <motion.div
        className="mt-8 rounded-3xl border border-default-200 bg-gradient-to-br from-default-50 to-default-100/40 p-8 sm:p-10"
        layoutId={cardLayoutId}
      >
        <div className="flex items-center gap-3 font-mono text-xs text-default-400">
          <span className="rounded-full border border-default-300 bg-default-100 px-2.5 py-0.5 uppercase tracking-wide">
            {project.status}
          </span>
          <span>{project.year}</span>
        </div>
        <motion.h1
          className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl"
          layoutId={titleLayoutId}
        >
          {project.title}
        </motion.h1>
        <p className="mt-2 text-lg text-primary">{project.tagline}</p>
        <p className="mt-5 text-default-600">{project.description}</p>

        {project.highlights.length > 0 && (
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
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
        )}

        {project.tech.length > 0 && (
          <div className="mt-7 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-md border border-default-200 bg-default-100/60 px-2.5 py-1 font-mono text-xs text-default-600"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {(project.github || project.live) && (
          <div className="mt-7 flex items-center gap-4 text-sm">
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
        )}
      </motion.div>
    </article>
  );
}
