import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/animations/Reveal";
import { primaryCta, secondaryCta } from "@/lib/site";

export const metadata: Metadata = {
  title: "Indonesia Tax Deadlines 2024–2025 | Key Dates for SMEs",
  description:
    "Don't miss critical tax deadlines in Indonesia. SPT, PPh, PPN dates + tips for compliance. Free checklist.",
  alternates: { canonical: "/blog/tax-deadlines-indonesia-2024" },
};

export default function TaxDeadlinesArticle() {
  return (
    <article className="section-space">
      <div className="container-grid">
        <Reveal>
          <div className="max-w-3xl space-y-4">
            <p className="badge-pill">Tax deadlines</p>
            <h1 className="text-4xl font-bold tracking-tight text-[color:var(--color-slate-dark)]">
              Indonesia Tax Deadlines 2024–2025: Don&apos;t Miss These Dates
            </h1>
            <p className="section-subtitle">
              A quick overview of key filing deadlines for SPT, PPh, and PPN to
              keep your Bali business compliant.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <div className="space-y-6 text-sm text-[color:var(--color-slate-light)]">
              <p>
                Staying compliant in Indonesia means tracking monthly and annual
                tax deadlines. Missing a filing can lead to penalties and extra
                administrative work.
              </p>
              <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)]">
                Key monthly deadlines
              </h2>
              <ul className="list-disc space-y-2 pl-5">
                <li>PPh 21/23/25 payments and reporting</li>
                <li>PPN VAT monthly submission</li>
                <li>Employer withholding reporting</li>
              </ul>
              <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)]">
                Annual deadlines
              </h2>
              <ul className="list-disc space-y-2 pl-5">
                <li>SPT annual corporate filing</li>
                <li>Personal income tax reporting for owners</li>
              </ul>
              <p>
                Need a tailored compliance calendar? Our team can build a
                timeline and reminder system for your business.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href={primaryCta.href} className="btn-primary">
                  Schedule a tax review
                </Link>
                <a
                  href={secondaryCta.href}
                  className="btn-secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ask on WhatsApp
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <aside className="card p-6">
              <h3 className="text-lg font-semibold">Compliance checklist</h3>
              <ul className="mt-4 space-y-2 text-sm text-[color:var(--color-slate-light)]">
                <li>Maintain updated transaction records</li>
                <li>Reconcile monthly bank statements</li>
                <li>Prepare PPh and PPN documents early</li>
                <li>Review deadlines monthly</li>
              </ul>
            </aside>
          </Reveal>
        </div>
      </div>
    </article>
  );
}
