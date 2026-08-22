export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  year: string;
  status: "Live" | "Self-hosted" | "Active" | "Archived";
  tech: string[];
  highlights: string[];
  github?: string;
  live?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "lifeos",
    title: "LifeOS",
    tagline:
      "A single hub for health, fitness, work, and everything in between",
    description:
      "A personal operating system that pulls the scattered parts of daily life — training, habits, tasks, notes, finances — into one self-hosted dashboard. Built to replace a dozen apps with one surface I actually control, running on my own homelab.",
    year: "2026",
    status: "Self-hosted",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Docker", "Tailwind"],
    highlights: [
      "Unified dashboard aggregating health, tasks and finances",
      "Self-hosted on a homelab behind a Cloudflare tunnel",
      "Containerised deploy with Postgres persistence",
    ],
    github: "https://github.com/Samylay/LifeOS",
    featured: true,
  },
  {
    slug: "layaida-ecole",
    title: "Layaida — École",
    tagline: "An e-learning platform for a growing school",
    description:
      "A full e-learning MVP: courses, lessons and student progress, shipped as a Next.js app with a lightweight SQLite backend and deployed to production behind a tunnel. Fast to iterate, cheap to run.",
    year: "2026",
    status: "Live",
    tech: ["Next.js", "TypeScript", "SQLite", "Tailwind"],
    highlights: [
      "Course and lesson management with student progress",
      "Server-rendered Next.js with an embedded SQLite store",
      "Running in production at ecole.samylayaida.com",
    ],
    github: "https://github.com/Samylay/Ecole",
    live: "https://ecole.samylayaida.com",
  },
  {
    slug: "trackit",
    title: "TrackIt",
    tagline: "A habit tracker built on a floor you can always hit",
    description:
      "A habit tracker built on the atomic-habits idea that every habit needs a minimum floor you can hit no matter how tired or busy you are. Tap once to log it; if you have more in you, keep going and unlock the next milestone.",
    year: "2026",
    status: "Active",
    tech: ["React", "TypeScript", "Tailwind"],
    highlights: [
      "One-tap logging with an always-achievable minimum",
      "Milestone tiers that reward doing more than the floor",
      "Designed around consistency over intensity",
    ],
    github: "https://github.com/Samylay/trackit",
  },
  {
    slug: "strava-dashboard",
    title: "Strava Dashboard & MCP Server",
    tagline: "Training data my AI tools can actually reason about",
    description:
      "A training-performance dashboard on top of the Strava API, with a companion MCP server that exposes the same data to Claude and other AI tools. The MCP layer is the interesting half: a typed interface that turns raw activity streams into something a model can query and reason over.",
    year: "2026",
    status: "Active",
    tech: ["TypeScript", "Strava API", "MCP", "Claude"],
    highlights: [
      "MCP server exposing training data to AI tools",
      "Typed tool interface over raw activity streams",
      "Signal over vanity metrics",
    ],
    github: "https://github.com/Samylay/strava-dashboard",
  },

  {
    slug: "agent-skills",
    title: "Agent Skills at Work",
    tagline: "Teaching coding agents the parts of our codebase they can't guess",
    description:
      "I write skills and agent workflows for my day job: structured knowledge files and tool definitions that let coding agents work productively in a large production codebase. Mostly about learning what an agent needs to know, and what it will confidently get wrong if you don't tell it.",
    year: "2026",
    status: "Active",
    tech: ["Claude Code", "Agents", "Prompt design"],
    highlights: [
      "Skill authoring for production codebases",
      "Agent workflows with human checkpoints",
      "Ongoing: what agents actually need vs. what people assume they need",
    ],
  },
  {
    slug: "homelab-knowledge-base",
    title: "Homelab Knowledge Base",
    tagline: "Everything I know, in a form I can query",
    description:
      "A self-hosted knowledge base on my homelab: notes, docs and runbooks indexed so that both I and my AI tools can search them. Doubles as my test bed for retrieval and grounding — when I want to learn how RAG behaves on real data, this is where I do it.",
    year: "2026",
    status: "Self-hosted",
    tech: ["Python", "Retrieval", "Self-hosted"],
    highlights: [
      "Personal notes and runbooks, indexed for humans and models",
      "Playground for retrieval and grounding experiments",
    ],
  },
];
