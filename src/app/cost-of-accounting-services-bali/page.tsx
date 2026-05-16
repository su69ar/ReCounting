import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/animations/Reveal";
import { StaggerGroup } from "@/components/animations/StaggerGroup";
import { SplitTextHeading } from "@/components/animations/SplitTextHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/lib/schema";
import { primaryCta, secondaryCta, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cost of Accounting Services in Bali (2026) | ReCounting",
  description:
    "How much do Bali accounting services cost in 2026? A practical guide to monthly fee ranges for bookkeeping, tax filings, and PT PMA support, plus what drives pricing.",
  alternates: { canonical: "/cost-of-accounting-services-bali" },
};

const faqs = [
  {
    question: "Is there a standard rate card for Bali accounting services?",
    answer:
      "No. Most Bali accounting firms scope monthly fees based on transaction volume, entity type, and reporting language. A fixed rate-card price often means the firm doesn't yet know what your business actually needs.",
  },
  {
    question: "Does PT PMA accounting cost more than CV or UD accounting?",
    answer:
      "Usually yes. PT PMA carries LKPM (Investment Realisation Reports), foreign-stakeholder reporting expectations, and often PPh 26 withholding on payments to foreign principals — all of which add scope versus a local CV or UD with simpler filings.",
  },
  {
    question: "How does English-first reporting affect the price?",
    answer:
      "English-first reporting requires either bilingual practitioners or duplicate work, so it typically commands a 10-20% premium over Indonesian-only reporting. The premium is usually worth it for foreign directors who need to actually use the reports.",
  },
  {
    question: "What is the cheapest legitimate option?",
    answer:
      "A part-time bookkeeper plus periodic tax-consultant engagements is often the cheapest legitimate option for very small businesses, but it requires the owner to coordinate the two — which is itself a cost.",
  },
  {
    question: "Why would the cheapest option not always be best?",
    answer:
      "If accounting is unreliable, tax filings will be too. The downstream cost of bad books — clean-up engagements, late-filing penalties, lost management visibility — usually exceeds the savings from undercutting on monthly fees.",
  },
];

const breadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: siteConfig.url },
  {
    name: "Cost of Accounting Services in Bali",
    url: `${siteConfig.url}/cost-of-accounting-services-bali`,
  },
]);
const faqSchema = generateFAQSchema(faqs);

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={faqSchema} />

      <section className="section-space">
        <div className="container-grid">
          <Breadcrumbs
            className="mb-6"
            items={[
              { name: "Home", href: "/" },
              { name: "Cost of accounting services in Bali" },
            ]}
          />
          <Reveal>
            <div className="max-w-3xl space-y-5">
              <p className="badge-pill">Pricing Guide 2026</p>
              <SplitTextHeading
                text="How much do Bali accounting services cost?"
                as="h1"
                className="text-4xl font-bold tracking-tight text-[color:var(--color-slate-dark)]"
              />
              <p className="section-subtitle">
                A practical 2026 guide to what drives Bali accounting pricing,
                typical monthly fee ranges, and how to tell whether a quote is
                realistic for your business.
              </p>
              <p className="text-sm text-[color:var(--color-slate-light)]">
                The numbers below reflect general market ranges in Bali and
                Denpasar in early 2026. They are not a quote — every
                engagement is scoped after a short call. Treat them as a
                sanity-check on quotes you already received.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href={primaryCta.href} className="btn-primary">
                  {primaryCta.label}
                </Link>
                <a
                  href={secondaryCta.href}
                  className="btn-secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  {secondaryCta.label}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-grid">
          <Reveal>
            <div className="max-w-3xl">
              <p className="badge-gradient inline-flex mb-3">Price drivers</p>
              <SplitTextHeading
                text="What actually drives Bali accounting pricing"
                as="h2"
                className="section-title"
              />
              <p className="section-subtitle mt-3">
                Five variables explain most of the price spread between
                Bali-based accounting quotes.
              </p>
            </div>
          </Reveal>
          <StaggerGroup className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Entity type",
                body: "PT PMA carries more compliance than CV, UD, or yayasan. LKPM filings, PPh 26 on foreign-principal payments, and dividend planning are the usual extras.",
              },
              {
                title: "Transaction volume",
                body: "Bookkeeping fees scale with the number of monthly transactions, bank lines, and supporting documents you process.",
              },
              {
                title: "Reporting language and format",
                body: "English-first reporting, IFRS-aligned formats, or dual-currency disclosure all add scope vs Indonesian-only PSAK reports.",
              },
              {
                title: "Filing scope",
                body: "PPh 21, 23, 25, 4(2), PPN, PB1, BPJS, and annual SPT are separate filings. Fees scale with how many of these you must file.",
              },
              {
                title: "Communication cadence",
                body: "Monthly close, weekly check-ins, and same-day WhatsApp response cost more than quarterly batch delivery.",
              },
              {
                title: "Catch-up work",
                body: "If prior books are messy or filings are missing, expect a one-off clean-up fee before monthly engagement starts.",
              },
            ].map((item) => (
              <div key={item.title} className="card-glow stagger-item p-6">
                <h3 className="text-base font-semibold text-[color:var(--color-slate-dark)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-[color:var(--color-slate-light)]">
                  {item.body}
                </p>
              </div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="section-space">
        <div className="container-grid">
          <Reveal>
            <div className="max-w-3xl">
              <p className="badge-gradient inline-flex mb-3">Typical ranges</p>
              <SplitTextHeading
                text="Indicative monthly fee ranges in Bali (2026)"
                as="h2"
                className="section-title"
              />
              <p className="section-subtitle mt-3">
                These are general market ranges, not ReCounting quotes. We
                share them so you can sanity-check what you're being offered.
              </p>
            </div>
          </Reveal>
          <StaggerGroup className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                tier: "Small SME or sole proprietor",
                range: "IDR 2 – 5 million / month",
                detail:
                  "Light bookkeeping, monthly PPh, basic reports, Indonesian-language correspondence.",
              },
              {
                tier: "Growing PT or PT PMA",
                range: "IDR 5 – 12 million / month",
                detail:
                  "Monthly close, English reporting, PPh + PPN filings, payroll for a small team, KPP correspondence.",
              },
              {
                tier: "Multi-entity or hospitality group",
                range: "IDR 12 – 30+ million / month",
                detail:
                  "Multi-outlet POS reconciliation, group reporting, intercompany eliminations, multiple BPJS payrolls, weekly cadence.",
              },
            ].map((item) => (
              <div key={item.tier} className="card-glow stagger-item p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-primary)]">
                  {item.tier}
                </p>
                <p className="mt-2 text-lg font-semibold text-[color:var(--color-slate-dark)]">
                  {item.range}
                </p>
                <p className="mt-3 text-sm text-[color:var(--color-slate-light)]">
                  {item.detail}
                </p>
              </div>
            ))}
          </StaggerGroup>
          <Reveal>
            <p className="mt-8 text-xs text-[color:var(--color-slate-light)] max-w-3xl">
              One-off setup work (initial chart-of-accounts, opening trial
              balance, prior-period catch-up) is typically priced separately
              and ranges from IDR 5 – 25 million depending on the state of
              existing records.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-grid">
          <Reveal>
            <div className="max-w-2xl">
              <p className="badge-gradient inline-flex mb-3">FAQ</p>
              <SplitTextHeading
                text="Pricing questions we get"
                as="h2"
                className="section-title"
              />
            </div>
          </Reveal>
          <StaggerGroup className="mt-8 grid gap-4 md:grid-cols-2">
            {faqs.map((item) => (
              <div key={item.question} className="card-glow stagger-item p-6">
                <h3 className="text-base font-semibold text-[color:var(--color-slate-dark)]">
                  {item.question}
                </h3>
                <p className="mt-3 text-sm text-[color:var(--color-slate-light)]">
                  {item.answer}
                </p>
              </div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="section-space">
        <div className="container-grid">
          <Reveal>
            <div className="card-glass rounded-3xl p-8 lg:p-10 text-center">
              <p className="badge-gradient inline-flex mb-3">
                Get a real quote
              </p>
              <SplitTextHeading
                text="Want a Bali accounting quote for your specific business?"
                as="h2"
                className="text-2xl font-semibold"
              />
              <p className="mt-3 text-sm text-[color:var(--color-slate-light)] max-w-2xl mx-auto">
                Book a free consultation. We'll review your entity, volume,
                and reporting needs, then quote within 48 hours of the call.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Link href={primaryCta.href} className="btn-primary">
                  {primaryCta.label}
                </Link>
                <a
                  href={secondaryCta.href}
                  className="btn-secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  {secondaryCta.label}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
