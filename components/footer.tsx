import { Link } from "@nextui-org/link";

import { siteConfig } from "@/config/site";
import { GithubIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-default-200/60">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 px-6 py-10 sm:flex-row sm:items-center">
        <div>
          <p className="font-mono text-sm text-foreground">Samy Layaida</p>
          <p className="mt-1 text-sm text-default-500">
            Software engineer · Paris · building &amp; self-hosting
          </p>
        </div>
        <div className="flex items-center gap-5 text-sm text-default-500">
          <Link
            isExternal
            className="text-default-500 hover:text-primary"
            href={siteConfig.links.github}
          >
            <span className="flex items-center gap-1.5">
              <GithubIcon size={18} /> GitHub
            </span>
          </Link>
          <Link
            isExternal
            className="text-default-500 hover:text-primary"
            href={siteConfig.links.linkedin}
          >
            LinkedIn
          </Link>
          <Link
            className="text-default-500 hover:text-primary"
            href={siteConfig.links.email}
          >
            Email
          </Link>
        </div>
      </div>
      <div className="mx-auto max-w-5xl px-6 pb-8">
        <p className="font-mono text-xs text-default-400">
          © {new Date().getFullYear()} Samy Layaida — built with Next.js,
          deployed on Vercel.
        </p>
      </div>
    </footer>
  );
}
