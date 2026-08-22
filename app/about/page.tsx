import { Metadata } from "next";
import { Link } from "@nextui-org/link";

import { Prose } from "@/components/prose";
import { Reveal } from "@/components/section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Samy Layaida — full-stack engineer in Paris working with AI. Web apps by trade; agents, MCP servers and LLM tooling by obsession.",
};

export default function AboutPage() {
  return (
    <div>
      <header className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
          About
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Hi, I&apos;m Samy.
        </h1>
      </header>

      <div className="mt-10">
        <Reveal>
          <Prose>
            <p className="lead">
              Full-stack engineer in Paris. I build web apps for a living and
              spend most of my free time figuring out what AI tools can
              actually do — beyond the demos.
            </p>
            <p>
              My day job is TypeScript / React / Next.js, with Node,
              PHP/Symfony and a few SQL and NoSQL databases behind it. My
              current obsession is the AI tooling layer: writing agent skills
              at work, building MCP servers, and running retrieval experiments
              on my own knowledge base. I&apos;m deliberately steering my
              career toward AI engineering without pretending the switch is
              done.
            </p>
            <p>
              Outside of app code, I run a <strong>homelab</strong>: a stack of
              self-hosted services behind a Cloudflare tunnel, with Prometheus
              and Grafana watching over it and a good amount of Docker holding
              it all together. It&apos;s where I learn the infrastructure side
              of the craft by breaking and fixing real things.
            </p>
            <p>
              This site is also where I write — mostly debugging stories and
              self-hosting notes, the kind of thing I wish I&apos;d found when I
              hit the problem myself.
            </p>
            <p>
              Want to build something, or just compare homelab notes?{" "}
              <Link
                className="link-underline text-primary"
                href={siteConfig.links.contact}
              >
                Get in touch
              </Link>
              .
            </p>
          </Prose>
        </Reveal>
      </div>
    </div>
  );
}
