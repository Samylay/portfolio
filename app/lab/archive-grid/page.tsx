import { projects } from "@/config/projects";
import { Reveal } from "@/components/section";

export default function ArchiveGridPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 pb-24 pt-16">
      <header className="mb-16 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
          Lab
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Archive grid — one grid, two tempos
        </h1>
        <p className="mt-3 text-default-600">
          Same three-column grid, same projects, two different rhythms: a
          uniform tile collection, then a full-width narrative pass.
        </p>
      </header>

      <section className="mb-24">
        <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-default-500">
          Collection
        </h2>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-default-200 bg-default-200 sm:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal
              key={project.slug}
              className="bg-background"
              delay={i * 0.04}
            >
              <div className="flex h-full flex-col gap-4 p-6">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-default-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-default-600">
                    {project.tagline}
                  </p>
                </div>
                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[0.68rem] uppercase tracking-wide text-default-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-default-500">
          Narrative
        </h2>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-default-200 bg-default-200 sm:grid-cols-3">
          {projects.map((project, i) => {
            const alignRight = i % 2 === 1;

            return (
              <Reveal
                key={project.slug}
                className="col-span-1 bg-background sm:col-span-3"
                delay={i * 0.04}
              >
                <div className="grid grid-cols-1 gap-6 p-8 sm:grid-cols-3">
                  <div
                    className={
                      alignRight
                        ? "sm:col-start-3 sm:col-span-1 sm:text-right"
                        : "sm:col-start-1 sm:col-span-1"
                    }
                  >
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-default-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-default-600">
                      {project.tagline}
                    </p>
                    <div
                      className={`mt-4 flex flex-wrap gap-2 ${alignRight ? "sm:justify-end" : ""}`}
                    >
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[0.68rem] uppercase tracking-wide text-default-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}
