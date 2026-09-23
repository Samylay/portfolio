"use client";

import type { ComponentProps, MouseEvent } from "react";
import { useEffect, useState } from "react";
import { Link } from "@nextui-org/link";
import { usePathname } from "next/navigation";
import posthog from "posthog-js";

const CONSENT_KEY = "portfolio-analytics-consent";
const CONSENT_EVENT = "portfolio-analytics-settings";
// PostHog project tokens are write-only browser keys, intended to be public.
const DEFAULT_POSTHOG_PROJECT_TOKEN =
  "phc_AGmGw4SP4w3Qr4zybTgAnY9oETVKDCPVJinbYr4Nc";

type Consent = "accepted" | "rejected" | null;

function openConsentSettings() {
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

export function trackOutboundClick(destination: string) {
  if (typeof window === "undefined" || !posthog.__loaded) return;
  posthog.capture("outbound_link_clicked", {
    destination,
    page_path: window.location.pathname,
  });
}

type TrackedLinkProps = ComponentProps<typeof Link>;

export function TrackedExternalLink({
  href,
  onClick,
  ...props
}: TrackedLinkProps) {
  const destination =
    typeof href === "string" && href.includes("linkedin.com")
      ? "linkedin"
      : typeof href === "string" && href.includes("github.com")
        ? "github"
        : "external_site";

  return (
    <Link
      isExternal
      {...props}
      href={href}
      onClick={(event: MouseEvent<HTMLAnchorElement>) => {
        trackOutboundClick(destination);
        onClick?.(event);
      }}
    />
  );
}

export function Analytics() {
  const pathname = usePathname();
  const [consent, setConsent] = useState<Consent>(null);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(CONSENT_KEY);
    setConsent(stored === "accepted" || stored === "rejected" ? stored : null);

    const showSettings = () => setSettingsOpen(true);
    window.addEventListener(CONSENT_EVENT, showSettings);
    return () => window.removeEventListener(CONSENT_EVENT, showSettings);
  }, []);

  useEffect(() => {
    if (consent !== "accepted") return;

    const token =
      process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN ||
      DEFAULT_POSTHOG_PROJECT_TOKEN;

    if (!posthog.__loaded) {
      posthog.init(token, {
        api_host:
          process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://eu.i.posthog.com",
        capture_pageview: false,
        capture_pageleave: false,
        autocapture: false,
        disable_session_recording: true,
        person_profiles: "identified_only",
        ip: false,
      });
    } else {
      posthog.opt_in_capturing();
    }
  }, [consent]);

  useEffect(() => {
    if (consent === "accepted" && posthog.__loaded) {
      posthog.capture("$pageview", {
        $current_url: window.location.origin + pathname,
      });
    }
  }, [consent, pathname]);

  function chooseConsent(choice: Exclude<Consent, null>) {
    window.localStorage.setItem(CONSENT_KEY, choice);
    setConsent(choice);
    setSettingsOpen(false);
    if (choice === "rejected" && posthog.__loaded) {
      posthog.opt_out_capturing();
      posthog.reset();
    }
  }

  if (
    !settingsOpen &&
    consent !== null
  ) {
    return null;
  }

  return (
    <aside
      aria-label="Analytics preferences"
      aria-modal="false"
      className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-3xl rounded-2xl border border-default-200 bg-background p-5 shadow-xl"
      role="dialog"
    >
      <p className="text-sm text-foreground">
        May I collect pseudonymous page views and clicks on external links to
        understand how this site is used? Session replay and automatic click
        tracking are off. You can change this choice on the privacy page.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          className="rounded-full bg-primary px-4 py-2 text-sm text-white"
          onClick={() => chooseConsent("accepted")}
        >
          Allow analytics
        </button>
        <button
          className="rounded-full border border-default-300 px-4 py-2 text-sm text-foreground"
          onClick={() => chooseConsent("rejected")}
        >
          Reject
        </button>
        {settingsOpen && (
          <button
            className="px-3 py-2 text-sm text-default-500"
            onClick={() => setSettingsOpen(false)}
          >
            Close
          </button>
        )}
      </div>
    </aside>
  );
}

export function AnalyticsSettings() {
  return (
    <button
      className="text-primary underline underline-offset-4"
      type="button"
      onClick={openConsentSettings}
    >
      Change analytics preferences
    </button>
  );
}
