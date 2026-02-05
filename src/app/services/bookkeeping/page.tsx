import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { Reveal } from "@/components/animations/Reveal";
import { StaggerGroup } from "@/components/animations/StaggerGroup";
import { SplitTextHeading } from "@/components/animations/SplitTextHeading";
import { MaskReveal } from "@/components/animations/MaskReveal";
import { primaryCta, secondaryCta, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Expert Bookkeeping Services in Bali",
  description:
    "Professional bookkeeping services in Bali. Monthly accounting, transaction entry, bank reconciliation, and reporting. English-speaking, compliance-ready team.",
  alternates: { canonical: "/services/bookkeeping" },
};

const faqItems = [
  {
    question: "What's included in monthly bookkeeping?",
    answer:
      "Transaction entry, bank reconciliation, receipt organization, and monthly financial reporting.",
  },
  {
    question: "How is pricing calculated?",
    answer:
      "Pricing starts at Rp 1,500,000/month and scales with transaction volume and reporting complexity.",
  },
  {
    question: "Can you work with foreign-owned companies?",
    answer:
      "Yes. Our team is English-speaking and experienced with expat-owned and foreign businesses in Bali.",
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
      name: "Bookkeeping",
      item: `${siteConfig.url}/services/bookkeeping`,
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

export default function BookkeepingPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <section className="section-space">
        <div className="container-grid">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-5">
                <p className="badge-pill">Bookkeeping</p>
                <SplitTextHeading
                  text="Professional Bookkeeping Services in Bali"
                  as="h1"
                  className="text-4xl font-bold tracking-tight text-[color:var(--color-slate-dark)]"
                />
                <p className="section-subtitle">
                  Monthly accounting, reconciliations, and reporting to keep your
                  books clean, compliant, and audit-ready. Ideal for SMEs,
                  startups, and expat-owned businesses.
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
              <StaggerGroup className="card p-6">
                <h2 className="text-lg font-semibold">What&apos;s included</h2>
                <ul className="mt-4 space-y-3 text-sm text-[color:var(--color-slate-light)]">
                  {[
                    "Monthly transaction entry & categorization",
                    "Bank & cash reconciliation",
                    "Receipt and invoice organization",
                    "Monthly profit & loss and balance sheet",
                    "Compliance-ready reports for tax filing",
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
                  title: "Setup & onboarding",
                  desc: "We collect your existing records, bank statements, and workflows.",
                },
                {
                  title: "Monthly delivery",
                  desc: "Receive clear reports and compliance updates every month.",
                },
                {
                  title: "Ongoing support",
                  desc: "Ask questions anytime via WhatsApp or email.",
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
          <Reveal>
            <div className="card card-hover grid gap-8 bg-white p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <h2 className="text-2xl font-semibold">Who this is for</h2>
                <p className="mt-3 text-sm text-[color:var(--color-slate-light)]">
                  Perfect for Bali business owners who want bookkeeping clarity,
                  reliable tax-ready reports, and a responsive accounting team.
                </p>
              </div>
              <StaggerGroup className="grid gap-3">
                {[
                  "SMEs needing monthly bookkeeping",
                  "Expat founders who want English-first support",
                  "Growing teams preparing for tax season",
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
        </div>
      </section>

      <section className="section-space">
        <div className="container-grid">
          <MaskReveal className="rounded-3xl border border-[color:var(--color-border)] bg-white p-8">
            <Reveal>
              <div>
                <SplitTextHeading
                  text="Pricing snapshot"
                  as="h2"
                  className="text-2xl font-semibold"
                />
                <p className="mt-3 text-sm text-[color:var(--color-slate-light)]">
                  Transparent monthly pricing based on transaction volume and
                  reporting complexity. Request a tailored quote for your business.
                </p>
                <StaggerGroup className="mt-6 grid gap-4 md:grid-cols-2">
                  {[
                    "Starter: Monthly bookkeeping essentials",
                    "Growth: Expanded transaction volume",
                    "Enterprise: Custom reporting & multi-entity",
                    "Add-ons: Inventory tracking, payroll",
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

      <section className="section-space bg-white">
        <div className="container-grid">
          <Reveal>
            <h2 className="section-title">Bookkeeping FAQs</h2>
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
                    text="Get clean books within 30 days"
                    as="h2"
                    className="text-2xl font-semibold"
                  />
                  <p className="mt-3 text-sm text-[color:var(--color-slate-light)]">
                    Start with a free consultation and we will map a monthly
                    bookkeeping plan tailored to your business size.
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
