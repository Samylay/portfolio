export type Project = {
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
    title: "Strava Dashboard",
    tagline: "Training performance, read the way an athlete thinks",
    description:
      "A training-performance dashboard on top of the Strava API, plus a companion MCP server that exposes the same data to AI tools. Turns raw activity streams into trends that actually inform the next session.",
    year: "2026",
    status: "Active",
    tech: ["TypeScript", "Strava API", "MCP", "Charts"],
    highlights: [
      "Activity trends and load from the Strava API",
      "Companion MCP server for AI-assisted analysis",
      "Focus on signal over vanity metrics",
    ],
    github: "https://github.com/Samylay/strava-dashboard",
  },
];
