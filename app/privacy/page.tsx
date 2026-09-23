import { Metadata } from "next";
import { Link } from "@nextui-org/link";

import { Prose } from "@/components/prose";
import { Reveal } from "@/components/section";
import { AnalyticsSettings } from "@/components/analytics";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How this portfolio site uses analytics and handles contact messages.",
};

const UPDATED = "23 September 2026";

export default function PrivacyPage() {
  return (
    <div>
      <header className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
          Privacy
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Privacy policy
        </h1>
        <p className="mt-4 text-sm text-default-500">Last updated {UPDATED}</p>
      </header>

      <div className="mt-10">
        <Reveal>
          <Prose>
            <p className="lead">
              This website is the personal portfolio of Samy Layaida. This
              policy explains the limited analytics used on the site and what
              happens when you contact me.
            </p>

            <h2>Who is responsible</h2>
            <p>
              Samy Layaida, Arcueil, France. Contact:{" "}
              <Link href="mailto:layaida.samy@gmail.com">
                layaida.samy@gmail.com
              </Link>
              .
            </p>

            <h2>Analytics</h2>
            <p>
              If you allow analytics, this site uses PostHog to count page views
              and clicks on external links. Click events record the destination
              category (GitHub, LinkedIn, or another external site) and the page
              path. PostHog may also receive standard browser and referral
              information. The site does not ask PostHog to collect IP-based
              location, identify you by name or email, record sessions, or
              automatically capture clicks or form contents.
            </p>
            <p>
              Analytics are optional. Choose “Allow analytics” or “Reject” in
              the site prompt. You can change your choice here at any time. If
              you allow analytics, a pseudonymous browser identifier may be used
              to group that browser’s events. PostHog Cloud processes the data;
              the site is configured for its EU endpoint by default. The
              project’s retention settings control how long event data is kept.
            </p>
            <p>
              <AnalyticsSettings />
            </p>

            <h2>Contact messages</h2>
            <p>
              The contact form opens your email application with the message you
              entered. This site does not submit or store the form contents. If
              you email me, I use your message and address to reply and keep the
              correspondence as needed.
            </p>

            <h2>Hosting</h2>
            <p>
              Vercel hosts this website and may process technical connection
              data in order to deliver and secure it. Analytics events are sent
              separately to PostHog only after you allow them.
            </p>

            <h2>Your choices and rights</h2>
            <p>
              You can reject or withdraw analytics permission using the
              preference control above. You can also contact me to ask about
              personal data related to correspondence or to exercise applicable
              data protection rights.
            </p>
          </Prose>
        </Reveal>
      </div>
    </div>
  );
}
