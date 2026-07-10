import { Metadata } from "next";
import { Link } from "@nextui-org/link";

import { Prose } from "@/components/prose";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Samy Layaida — full-stack software engineer in Paris who builds web products and self-hosts the infrastructure behind them.",
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
        <Prose>
          <p className="lead">
            I&apos;m a full-stack software engineer based in Paris. I like
            taking an idea all the way from an empty repo to something people
            actually use — and then owning the boring parts that keep it
            running.
          </p>
          <p>
            Most of my work lives in the TypeScript / React / Next.js world,
            with Node, PHP/Symfony and a few SQL and NoSQL databases behind it.
            Lately a lot of my energy goes into <strong>LifeOS</strong>, a
            self-hosted hub that pulls health, habits, work and finances into
            one place I fully control.
          </p>
          <p>
            Outside of app code, I run a <strong>homelab</strong>: a stack of
            self-hosted services behind a Cloudflare tunnel, with Prometheus and
            Grafana watching over it and a good amount of Docker holding it all
            together. It&apos;s where I learn the infrastructure side of the
            craft by breaking and fixing real things.
          </p>
          <p>
            This site is also where I write — mostly debugging stories and
            self-hosting notes, the kind of thing I wish I&apos;d found when I
            hit the problem myself.
          </p>
          <p>
            Want to build something, or just compare homelab notes?{" "}
            <Link className="text-primary" href={siteConfig.links.contact}>
              Get in touch
            </Link>
            .
          </p>
        </Prose>
      </div>
    </div>
  );
}
