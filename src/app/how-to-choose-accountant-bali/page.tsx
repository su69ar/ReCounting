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
  title: "How to Choose an Accountant in Bali (2026 Buyer Guide) | ReCounting",
  description:
    "A practical buyer guide for choosing an accountant in Bali — what credentials matter, what questions to ask, and what to avoid. Built for SME and PT PMA founders.",
  alternates: { canonical: "/how-to-choose-accountant-bali" },
};

const steps = [
  {
    title: "Decide what you actually need",
    text: "Bookkeeping is data entry. Tax compliance is filing. Advisory is decisions. They are different services even when delivered by the same firm — and the cheapest provider for one is rarely the best for all three.",
  },
  {
    title: "Verify credentials and registrations",
    text: "Tax practitioners in Indonesia hold Brevet A / B / C qualifications and may register as BKP (Bersertifikat Konsultan Pajak). Accountants who file audit-grade reports register with IAPI (Institut Akuntan Publik Indonesia). Ask for these credentials by name.",
  },
  {
    title: "Check language fit",
    text: "If your reports need to be read by foreign directors or stakeholders, English-first communication is not optional — and it usually carries a 10-20% premium. Pretending otherwise leads to misread reports.",
  },
  {
    title: "Ask about response time and cadence",
    text: "Some firms work on quarterly batches. Others respond within hours. Match the cadence to how your business actually operates — fast-moving F&B and villa operations usually need same-day responsiveness.",
  },
  {
    title: "Test with a discovery scope",
    text: "Before signing a 12-month engagement, ask the firm to scope a small discrete piece of work — last month's reconciliation, a clean-up of one tax period, a single SPT review. The quality of that small piece reveals the rest.",
  },
  {
    title: "Confirm data ownership and exit terms",
    text: "Your accounting data belongs to you. Confirm in writing how you get full export access (Accurate file, Xero history, raw CSV) and the handover process if you ever switch providers. Avoid firms that lock data behind their access.",
  },
];

const redFlags = [
  "Rate-card pricing without scoping your transaction volume",
  "No named practitioner — you'll always be passed to whoever is on shift",
  "Cannot show a sample report layout in their actual format",
  "No clear position on Coretax DJP Online migration",
  "Vague answers when you ask about PPh 26, LKPM, or PB1",
  "Demands signed NDA before any technical conversation",
  "Insists on accepting paper records only — no digital workflow",
];

const faqs = [
  {
    question: "Is the cheapest accountant in Bali the worst?",
    answer:
      "Not always, but the correlation is strong. Cheap engagements often skip reconciliation, batch transactions sloppily, or omit lesser-known filings (PPh 4(2), PPh 26, PB1). The downstream clean-up usually costs more than the savings.",
  },
  {
    question: "Should I use my registration agent's accounting service?",
    answer:
      "Registration agents typically focus on setup paperwork (PT PMA establishment, KITAS, NPWP). Many also offer bundled accounting, but quality varies. Ask the same credentials questions you would ask any specialist firm.",
  },
  {
    question: "Do I need a Bali-based accountant?",
    answer:
      "For Bali-specific tax matters (PB1, regency-level PHR, KPP Pratama correspondence), local presence helps. For pure bookkeeping with no Bali compliance angle, remote-Indonesia accountants are equally workable.",
  },
  {
    question: "How long does a typical engagement take to start?",
    answer:
      "A clean onboarding is 1-2 weeks from contract signature: chart-of-accounts agreement, opening trial balance, prior-period catch-up if needed, then first monthly close on the new cadence.",
  },
];

const breadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: siteConfig.url },
  {
    name: "How to choose an accountant in Bali",
    url: `${siteConfig.url}/how-to-choose-accountant-bali`,
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
              { name: "How to choose an accountant in Bali" },
            ]}
          />
          <Reveal>
            <div className="max-w-3xl space-y-5">
              <p className="badge-pill">Buyer Guide</p>
              <SplitTextHeading
                text="How to choose an accountant in Bali"
                as="h1"
                className="text-4xl font-bold tracking-tight text-[color:var(--color-slate-dark)]"
              />
              <p className="section-subtitle">
                A practical guide for SME founders, PT PMA directors, and
                expat business owners evaluating Bali accounting providers in
                2026. Written by ReCounting, but applicable whether or not we
                are on your shortlist.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-grid">
          <Reveal>
            <div className="max-w-2xl">
              <p className="badge-gradient inline-flex mb-3">
                Six steps
              </p>
              <SplitTextHeading
                text="A six-step evaluation framework"
                as="h2"
                className="section-title"
              />
            </div>
          </Reveal>
          <StaggerGroup className="mt-8 grid gap-4 md:grid-cols-2">
            {steps.map((s, i) => (
              <div key={s.title} className="card-glow stagger-item p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-primary)]">
                  Step {i + 1}
                </p>
                <h3 className="mt-2 text-base font-semibold text-[color:var(--color-slate-dark)]">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-[color:var(--color-slate-light)]">
                  {s.text}
                </p>
              </div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="section-space">
        <div className="container-grid">
          <Reveal>
            <div className="max-w-2xl">
              <p className="badge-gradient inline-flex mb-3">Red flags</p>
              <SplitTextHeading
                text="Red flags to watch for"
                as="h2"
                className="section-title"
              />
              <p className="section-subtitle mt-3">
                None of these are deal-breakers on their own. Two or more
                together usually means you'll need to switch providers within
                the first year.
              </p>
            </div>
          </Reveal>
          <StaggerGroup className="mt-8 grid gap-4 md:grid-cols-2">
            {redFlags.map((flag) => (
              <div
                key={flag}
                className="card-glow stagger-item flex items-start gap-4 p-4"
              >
                <span className="check-glow bg-[color:var(--color-accent)]/10 text-[color:var(--color-accent)] shrink-0">
                  <svg
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                </span>
                <p className="text-sm text-[color:var(--color-slate-light)]">
                  {flag}
                </p>
              </div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-grid">
          <Reveal>
            <div className="max-w-2xl">
              <p className="badge-gradient inline-flex mb-3">FAQ</p>
              <SplitTextHeading
                text="Questions founders ask us"
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
              <p className="badge-gradient inline-flex mb-3">Talk to us</p>
              <SplitTextHeading
                text="Want to see how ReCounting answers each of these?"
                as="h2"
                className="text-2xl font-semibold"
              />
              <p className="mt-3 text-sm text-[color:var(--color-slate-light)] max-w-2xl mx-auto">
                Book a free 30-minute consult. We'll walk through your
                business, the filings you need, and how we'd run the
                engagement. No obligation — and we'll happily refer you
                elsewhere if we are not the right fit.
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
