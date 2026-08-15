import { Metadata } from "next";
import { Link } from "@nextui-org/link";

import { Prose } from "@/components/prose";
import { Reveal } from "@/components/section";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How LifeOS, a single-user self-hosted application, handles personal and bank account data.",
};

// Last substantive change. Update when the policy text changes, not on redeploy.
const UPDATED = "15 August 2026";

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
        <p className="mt-4 text-sm text-default-500">
          Last updated {UPDATED}
        </p>
      </header>

      <div className="mt-10">
        <Reveal>
          <Prose>
            <p className="lead">
              LifeOS is a personal application with exactly one user: me, Samy
              Layaida. It is not a product, it is not offered to anyone else,
              and there is no sign-up. This page exists because services I
              connect to my own accounts reasonably ask for it.
            </p>

            <h2>Who is responsible</h2>
            <p>
              Samy Layaida, Arcueil, France. Contact:{" "}
              <Link href="mailto:layaida.samy@gmail.com">
                layaida.samy@gmail.com
              </Link>
              .
            </p>

            <h2>What data is processed</h2>
            <ul>
              <li>
                <strong>Bank account data</strong> — account details, balances
                and transaction history for accounts I own, retrieved through a
                licensed account information service provider that I authorise
                myself at my own bank.
              </li>
              <li>
                <strong>Personal productivity data</strong> — notes, tasks,
                habits, training and health figures that I enter myself or sync
                from services I already use.
              </li>
            </ul>
            <p>
              No data belonging to any other person is collected, because no
              other person has an account.
            </p>

            <h2>Why</h2>
            <p>
              To see my own subscriptions and spending in one place. The lawful
              basis is consent, which I give myself at my own bank and can
              withdraw at any time.
            </p>

            <h2>Where it is stored</h2>
            <p>
              On hardware I own and administer, in a local database, reachable
              only over a private network. It is not hosted with a cloud
              provider, not shared with third parties, not sold, not used for
              advertising, and not used to train anything.
            </p>

            <h2>How long</h2>
            <p>
              Bank data is kept while I keep using the application and is
              deleted when I stop. Bank access consent expires automatically
              after 180 days under EEA rules and has to be renewed deliberately
              — access is not open-ended.
            </p>

            <h2>Sub-processors</h2>
            <p>
              Only the account information service provider that performs the
              bank connection. It is the licensed party in the arrangement and
              handles the bank authorisation on my behalf.
            </p>

            <h2>Rights</h2>
            <p>
              Access, rectification, erasure, portability and withdrawal of
              consent apply. As the only data subject and the only controller, I
              exercise them directly against my own database, and I can revoke
              bank access at my bank at any time.
            </p>
          </Prose>
        </Reveal>
      </div>
    </div>
  );
}
