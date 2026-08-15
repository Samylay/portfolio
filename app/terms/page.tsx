import { Metadata } from "next";
import { Link } from "@nextui-org/link";

import { Prose } from "@/components/prose";
import { Reveal } from "@/components/section";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "Terms of use for LifeOS, a single-user self-hosted personal application.",
};

// Last substantive change. Update when the terms text changes, not on redeploy.
const UPDATED = "15 August 2026";

export default function TermsPage() {
  return (
    <div>
      <header className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
          Terms
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Terms of use
        </h1>
        <p className="mt-4 text-sm text-default-500">
          Last updated {UPDATED}
        </p>
      </header>

      <div className="mt-10">
        <Reveal>
          <Prose>
            <p className="lead">
              LifeOS is a private application built and run by Samy Layaida for
              his own use. It is not a service offered to the public, there is
              no registration, and there are no other users.
            </p>

            <h2>Scope</h2>
            <p>
              These terms cover my own use of the application and any account I
              connect to it. Because the application has a single user who is
              also its author, they are a statement of how it operates rather
              than an agreement with a third party.
            </p>

            <h2>Account connections</h2>
            <p>
              Bank accounts are connected only with my explicit authorisation,
              given at my own bank, and only for accounts I own. Access is
              read-only: the application retrieves balances and transactions and
              cannot move money, initiate a payment, or change anything at the
              bank. Authorisation expires after 180 days and must be renewed
              deliberately.
            </p>

            <h2>No warranty</h2>
            <p>
              The application is provided as-is, with no warranty. Figures it
              shows are for personal orientation and are not accounting, tax or
              financial advice. The bank remains the authoritative record of any
              balance or transaction.
            </p>

            <h2>Availability</h2>
            <p>
              It runs on hardware I own, with no uptime commitment to anyone. It
              may be changed, taken offline, or discontinued at any time without
              notice.
            </p>

            <h2>Contact</h2>
            <p>
              <Link href="mailto:layaida.samy@gmail.com">
                layaida.samy@gmail.com
              </Link>
            </p>
          </Prose>
        </Reveal>
      </div>
    </div>
  );
}
