import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { Reveal } from "@/components/animations/Reveal";
import { StaggerGroup } from "@/components/animations/StaggerGroup";
import { SplitTextHeading } from "@/components/animations/SplitTextHeading";
import { MaskReveal } from "@/components/animations/MaskReveal";
import { primaryCta, secondaryCta, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tax Compliance & Filing Services in Indonesia",
  description:
    "PPh, PPN, SPT filing made simple. Expert tax compliance for Bali businesses. English-speaking support with clear timelines.",
  alternates: { canonical: "/services/tax-compliance" },
};

const faqItems = [
  {
    question: "Do you handle PPh, PPN, and SPT filing?",
    answer:
      "Yes. We manage monthly and annual filings for PPh, PPN, and SPT based on your business requirements.",
  },
  {
    question: "Can you help expats understand Indonesian tax obligations?",
    answer:
      "Absolutely. We provide English-first guidance and clear compliance timelines for expat owners.",
  },
  {
    question: "What documents do you need?",
    answer:
      "We collect transaction summaries, invoices, payroll data, and previous filings where available.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: `${siteConfig.url}/services`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Tax Compliance",
      item: `${siteConfig.url}/services/tax-compliance`,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function TaxCompliancePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <section className="section-space">
        <div className="container-grid">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-5">
                <p className="badge-pill">Tax Compliance</p>
                <SplitTextHeading
                  text="Indonesian Tax Compliance Made Simple"
                  as="h1"
                  className="text-4xl font-bold tracking-tight text-[color:var(--color-slate-dark)]"
                />
                <p className="section-subtitle">
                  We handle PPh, PPN, and SPT filings with clear timelines and
                  documentation so you stay compliant year-round. Ideal for
                  Bali SMEs and expat-owned businesses.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href={primaryCta.href} className="btn-primary">
                    Schedule Tax Review
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
              <StaggerGroup className="card p-6">
                <h2 className="text-lg font-semibold">Compliance coverage</h2>
                <ul className="mt-4 space-y-3 text-sm text-[color:var(--color-slate-light)]">
                  {[
                    "PPh 21, 23, 25, and final taxes",
                    "PPN calculation and monthly submissions",
                    "SPT annual reporting and documentation",
                    "NPWP registration and updates",
                    "Audit-ready compliance files",
                  ].map((item) => (
                    <li key={item} className="stagger-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </StaggerGroup>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-grid">
          <Reveal>
            <StaggerGroup className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Tax health check",
                  desc: "We review your current filings and identify risk areas.",
                },
                {
                  title: "Filing calendar",
                  desc: "A clear, proactive timeline so deadlines are never missed.",
                },
                {
                  title: "Ongoing guidance",
                  desc: "We explain obligations in English and keep you updated on law changes.",
                },
              ].map((item) => (
                <div key={item.title} className="card stagger-item p-6">
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-[color:var(--color-slate-light)]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </StaggerGroup>
          </Reveal>
        </div>
      </section>

      <section className="section-space">
        <div className="container-grid">
          <MaskReveal className="rounded-3xl border border-[color:var(--color-border)] bg-white p-8">
            <Reveal>
              <div>
                <SplitTextHeading
                  text="Compliance timeline snapshot"
                  as="h2"
                  className="text-2xl font-semibold"
                />
                <p className="mt-3 text-sm text-[color:var(--color-slate-light)]">
                  Monthly PPh and PPN deadlines plus annual SPT filing. We deliver a
                  custom timeline after your initial review.
                </p>
                <StaggerGroup className="mt-6 grid gap-4 md:grid-cols-2">
                  {[
                    "Monthly: PPh & PPN filings",
                    "Quarterly: Compliance check-ins",
                    "Annual: SPT filing & documentation",
                    "Ongoing: Regulatory updates",
                  ].map((item) => (
                    <div
                      key={item}
                      className="stagger-item rounded-xl border border-[color:var(--color-border)] bg-white p-4 text-sm"
                    >
                      {item}
                    </div>
                  ))}
                </StaggerGroup>
              </div>
            </Reveal>
          </MaskReveal>
        </div>
      </section>

      <section className="section-space">
        <div className="container-grid">
          <MaskReveal className="rounded-3xl border border-[color:var(--color-border)] bg-white p-8">
            <Reveal>
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <SplitTextHeading
                    text="Designed for expats & SMEs"
                    as="h2"
                    className="text-2xl font-semibold"
                  />
                  <p className="mt-3 text-sm text-[color:var(--color-slate-light)]">
                    We translate Indonesian tax compliance into plain English and
                    keep your team on schedule with proactive reminders.
                  </p>
                </div>
                <StaggerGroup className="grid gap-3">
                  {[
                    "English-first reporting and documentation",
                    "Clear calendar for PPh, PPN, SPT",
                    "Fast WhatsApp communication",
                  ].map((item) => (
                    <div
                      key={item}
                      className="card stagger-item flex items-start gap-3 p-4"
                    >
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[color:var(--color-primary)]" />
                      <p className="text-sm text-[color:var(--color-slate-light)]">
                        {item}
                      </p>
                    </div>
                  ))}
                </StaggerGroup>
              </div>
            </Reveal>
          </MaskReveal>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-grid">
          <Reveal>
            <h2 className="section-title">Tax compliance FAQs</h2>
          </Reveal>
          <div className="mt-6 grid gap-4">
            {faqItems.map((item) => (
              <Reveal key={item.question}>
                <details className="faq-item card p-6">
                  <summary className="flex items-center justify-between text-sm font-semibold">
                    {item.question}
                    <span className="text-[color:var(--color-slate-light)]">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-[color:var(--color-slate-light)]">
                    {item.answer}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-grid">
          <MaskReveal className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-primary)]/10 p-8">
            <Reveal>
              <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                <div>
                  <SplitTextHeading
                    text="Reduce tax risk with a free compliance review"
                    as="h2"
                    className="text-2xl font-semibold"
                  />
                  <p className="mt-3 text-sm text-[color:var(--color-slate-light)]">
                    We analyze your filings and provide a clear plan for staying
                    compliant all year.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
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
          </MaskReveal>
        </div>
      </section>
    </>
  );
}
