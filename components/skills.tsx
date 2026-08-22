import { SectionHeading, Reveal } from "@/components/section";

const skills = [
  {
    category: "Frontend",
    items: ["TypeScript", "React", "Next.js", "Angular", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "PHP / Symfony", "PostgreSQL", "MongoDB", "SQLite"],
  },
  {
    category: "Infra & Tooling",
    items: [
      "Docker",
      "Self-hosting",
      "Cloudflare",
      "Prometheus + Grafana",
      "Git",
    ],
  },
];

const Skills = () => {
  return (
    <section className="pt-24 sm:pt-28" id="stack">
      <SectionHeading eyebrow="Stack" title="What I build with" />
      <Reveal>
        <dl className="divide-y divide-default-200 rounded-2xl border border-default-200 bg-default-50/50 px-6">
          {skills.map((group) => (
            <div
              key={group.category}
              className="grid gap-2 py-5 sm:grid-cols-[140px_1fr] sm:gap-6"
            >
              <dt className="font-mono text-xs uppercase tracking-[0.14em] text-default-500 sm:pt-1">
                {group.category}
              </dt>
              <dd className="text-default-700">
                {group.items.join(" · ")}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
};

export default Skills;
