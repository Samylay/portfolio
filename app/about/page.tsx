import { Metadata } from "next";
import { Link } from "@nextui-org/link";

import { Prose } from "@/components/prose";
import { Reveal } from "@/components/section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Samy Layaida — software engineer in Paris. Web apps by day; agents, MCP servers and self-hosted tools the rest of the time.",
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
              Hey, I&apos;m Samy. Software engineer in Paris.
            </p>
            <p>
              I got into AI early — not the research side, the &ldquo;wait,
              I can build with this&rdquo; side. Most of what I know about
              agents, MCP and LLM tooling comes from breaking real things on
              my own servers, then writing down why they broke.
            </p>
            <p>
              My day job is full-stack development. My nights go to{" "}
              <strong>LifeOS</strong> (the dashboard my daily life runs on), a
              school&apos;s e-learning platform, and an ever-growing pile of
              homelab services that mostly stay up. Next up on my own time: the
              AWS Solutions Architect Associate certification.
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
