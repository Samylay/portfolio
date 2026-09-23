import { Link } from "@nextui-org/link";

import { siteConfig } from "@/config/site";
import { BrandLogo } from "@/components/brand-logo";
import { GithubIcon } from "@/components/icons";
import { TrackedExternalLink } from "@/components/analytics";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-default-200/60">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 px-6 py-10 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <BrandLogo size={28} />
          <div>
            <p className="font-mono text-sm text-foreground">Samy Layaida</p>
            <p className="mt-1 text-sm text-default-500">
              Software engineer · Paris · building &amp; self-hosting
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5 text-sm text-default-500">
          <TrackedExternalLink
            className="link-underline text-default-500 hover:text-primary"
            href={siteConfig.links.github}
          >
            <span className="flex items-center gap-1.5">
              <GithubIcon size={18} /> GitHub
            </span>
          </TrackedExternalLink>
          <TrackedExternalLink
            className="link-underline text-default-500 hover:text-primary"
            href={siteConfig.links.linkedin}
          >
            LinkedIn
          </TrackedExternalLink>
          <Link
            className="link-underline text-default-500 hover:text-primary"
            href={siteConfig.links.email}
          >
            Email
          </Link>
          <Link
            className="link-underline text-default-500 hover:text-primary"
            href="/privacy"
          >
            Privacy
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
