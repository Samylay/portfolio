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
      <SectionHeading eyebrow="Stack" index="01" title="What I build with" />
      <div className="grid gap-4 sm:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.08}>
            <div className="h-full rounded-2xl border border-default-200 bg-default-50/50 p-6 transition-colors hover:border-primary/40">
              <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-default-500">
                {group.category}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-default-700"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Skills;
