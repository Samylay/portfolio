export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  year: string;
  status: "Live" | "Self-hosted" | "Active" | "Evolving" | "Archived";
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
    tagline: "Training analytics my agents can read",
    description:
      "Training analytics plus an MCP server, so my agents can read my training load as typed tools instead of a JSON dump. Started as a way for my agents to track my workouts and progress; the official Strava MCP has since covered part of that ground, so this one is evolving.",
    year: "2026",
    status: "Evolving",
    tech: ["TypeScript", "Strava API", "MCP"],
    highlights: [
      "MCP server exposing training data as typed tools",
      "Originally built so agents could track workout progress",
    ],
    github: "https://github.com/Samylay/strava-dashboard",
  },

  {
    slug: "agent-skills",
    title: "Agent Skills at Work",
    tagline: "Teaching coding agents the parts of our codebase they can't guess",
    description:
      "I write skills for coding agents for different needs at work. Turns out the hard part is figuring out what an agent needs to know, and what it'll confidently get wrong if you don't tell it.",
    year: "2026",
    status: "Active",
    tech: ["Claude Code", "Agents", "Prompt design"],
    highlights: [
      "Skills for coding agents across different needs",
      "Learning what agents actually need vs. what people assume",
    ],
  },
  {
    slug: "homelab-knowledge-base",
    title: "Homelab Knowledge Base",
    tagline: "Everything I know, in a form I can query",
    description:
      "Everything I know, indexed where both I and my models can reach it. Doubles as my RAG test bed.",
    year: "2026",
    status: "Self-hosted",
    tech: ["Python", "Retrieval", "Self-hosted"],
    highlights: [
      "Notes, docs and runbooks indexed for humans and models",
      "Test bed for retrieval experiments",
    ],
  },
];
