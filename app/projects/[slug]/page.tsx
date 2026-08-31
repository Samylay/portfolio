import { Metadata } from "next";
import { notFound } from "next/navigation";

import { projects } from "@/config/projects";
import { ProjectDetail } from "@/components/project-detail";
import { SpotlessProjectDetail } from "@/components/spotless-portfolio";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
    },
  };
}

export default function ProjectPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { param?: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) notFound();

  if (searchParams?.param === "toto")
    return <SpotlessProjectDetail project={project} />;

  return <ProjectDetail project={project} />;
}
