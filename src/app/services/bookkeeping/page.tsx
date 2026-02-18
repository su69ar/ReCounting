import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { Reveal } from "@/components/animations/Reveal";
import { StaggerGroup } from "@/components/animations/StaggerGroup";
import { SplitTextHeading } from "@/components/animations/SplitTextHeading";
import { MaskReveal } from "@/components/animations/MaskReveal";
import { primaryCta, secondaryCta, siteConfig } from "@/lib/site";
import { generateServiceSchema } from "@/lib/schema";

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
      "Pricing is tailored to your business and scales with transaction volume and reporting complexity. Book a free consultation to get a custom quote.",
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

const serviceSchema = generateServiceSchema({
  name: "Bookkeeping Services in Bali",
  description:
    "Professional bookkeeping services for SMEs and expats in Bali. Monthly transaction entry, bank reconciliation, financial reporting, and compliance-ready records.",
  url: `${siteConfig.url}/services/bookkeeping`,
});

export default function BookkeepingPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={serviceSchema} />
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
                <p className="text-sm font-medium text-[color:var(--color-primary)]">
                  From Rp 3,500,000/month
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
              <StaggerGroup className="card-glow p-6 relative overflow-hidden">
                {/* Glow orb background */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[color:var(--color-secondary)]/20 rounded-full blur-3xl pointer-events-none" />

                <h2 className="text-lg font-semibold relative z-10">What&apos;s included</h2>
                <ul className="mt-4 space-y-3 text-sm text-[color:var(--color-slate-light)] relative z-10">
                  {[
                    { text: "Monthly transaction entry & categorization", color: "primary" },
                    { text: "Bank & cash reconciliation", color: "accent" },
                    { text: "Receipt and invoice organization", color: "secondary" },
                    { text: "Monthly profit & loss and balance sheet", color: "primary" },
                    { text: "Compliance-ready reports for tax filing", color: "accent" },
                  ].map((item) => (
                    <li key={item.text} className="stagger-item flex items-center gap-3 group">
                      <span className={`check-glow bg-${item.color}-500/10 text-${item.color}-500`}>
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </StaggerGroup>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space bg-white relative overflow-hidden">
        {/* Background glow orbs */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-[color:var(--color-primary)]/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-[color:var(--color-accent)]/5 rounded-full blur-3xl -translate-y-1/2" />

        <div className="container-grid relative z-10">
          <Reveal>
            <div className="text-center mb-8">
              <p className="badge-gradient inline-flex mb-3">How it works</p>
              <h2 className="section-title">Your bookkeeping journey</h2>
            </div>
            <StaggerGroup className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Setup & onboarding",
                  desc: "We collect your existing records, bank statements, and workflows.",
                  color: "primary",
                  icon: "setup",
                  step: "01",
                },
                {
                  title: "Monthly delivery",
                  desc: "Receive clear reports and compliance updates every month.",
                  color: "accent",
                  icon: "calendar",
                  step: "02",
                },
                {
                  title: "Ongoing support",
                  desc: "Ask questions anytime via WhatsApp or email.",
                  color: "secondary",
                  icon: "support",
                  step: "03",
                },
              ].map((item) => (
                <div key={item.title} className={`group card-glow card-glow-${item.color} stagger-item p-6 relative overflow-hidden`}>
                  {/* Step number background */}
                  <span className={`step-number text-${item.color}-500`}>{item.step}</span>

                  {/* Icon */}
                  <div className={`icon-glow bg-${item.color}-500/10 text-${item.color}-500 mb-4 relative z-10`}>
                    {item.icon === "setup" && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                      </svg>
                    )}
                    {item.icon === "calendar" && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                    )}
                    {item.icon === "support" && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7A8.38 8.38 0 0 1 4 11.5a8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                      </svg>
                    )}
                  </div>

                  <h3 className="text-base font-semibold relative z-10">{item.title}</h3>
                  <p className="mt-2 text-sm text-[color:var(--color-slate-light)] relative z-10">
                    {item.desc}
                  </p>

                  {/* Glow bar */}
                  <div className={`mt-4 h-[2px] w-0 rounded-full bg-gradient-to-r from-${item.color}-500 to-${item.color}-400 group-hover:w-16 transition-all duration-500`} />
                </div>
              ))}
            </StaggerGroup>
          </Reveal>
        </div>
      </section>

      <section className="section-space relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[color:var(--color-primary)]/5 rounded-full blur-3xl" />

        <div className="container-grid relative z-10">
          <Reveal>
            <div className="card-glow card-glow-primary grid gap-8 p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center relative overflow-hidden">
              {/* Decorative orb */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[color:var(--color-accent)]/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <p className="badge-gradient inline-flex mb-3">Target clients</p>
                <h2 className="text-2xl font-semibold">Who this is for</h2>
                <p className="mt-3 text-sm text-[color:var(--color-slate-light)]">
                  Perfect for Bali business owners who want bookkeeping clarity,
                  reliable tax-ready reports, and a responsive accounting team.
                </p>
                <div className="mt-4 glow-bar glow-bar-md" />
              </div>
              <StaggerGroup className="grid gap-3 relative z-10">
                {[
                  { text: "SMEs needing monthly bookkeeping", color: "primary" },
                  { text: "Expat founders who want English-first support", color: "accent" },
                  { text: "Growing teams preparing for tax season", color: "secondary" },
                ].map((item) => (
                  <div
                    key={item.text}
                    className={`group card-glow card-glow-${item.color} stagger-item flex items-center gap-4 p-4`}
                  >
                    <span className={`check-glow bg-${item.color}-500/10 text-${item.color}-500`}>
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <p className="text-sm text-[color:var(--color-slate-light)]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </StaggerGroup>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space relative overflow-hidden">
        <div className="container-grid relative z-10">
          <MaskReveal className="relative rounded-3xl overflow-hidden">
            {/* Background glow orbs */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-[color:var(--color-primary)]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[color:var(--color-accent)]/10 rounded-full blur-3xl" />

            <Reveal>
              <div className="relative card-glass border border-white/50 rounded-3xl p-8 backdrop-blur-xl">
                <div className="mb-6">
                  <p className="badge-gradient inline-flex mb-3">Pricing</p>
                  <SplitTextHeading
                    text="Transparent monthly pricing"
                    as="h2"
                    className="text-2xl font-semibold"
                  />
                  <p className="mt-3 text-sm text-[color:var(--color-slate-light)]">
                    Choose a plan based on your monthly transaction volume.
                    All plans include monthly financial statements. Need something
                    custom? Book a free consultation.
                  </p>
                </div>
                <StaggerGroup className="grid gap-4 md:grid-cols-3">
                  {[
                    {
                      name: "Package A",
                      price: "Rp 3,500,000",
                      unit: "/month",
                      features: ["Up to 200 transactions/month", "Monthly financial statements"],
                      color: "primary",
                    },
                    {
                      name: "Package B",
                      price: "Rp 4,500,000",
                      unit: "/month",
                      features: ["201 to 400 transactions/month", "Monthly financial statements"],
                      color: "accent",
                      popular: true,
                    },
                    {
                      name: "Package C",
                      price: "Rp 5,500,000",
                      unit: "/month",
                      features: ["401 to 600 transactions/month", "Monthly financial statements"],
                      color: "secondary",
                    },
                  ].map((tier) => (
                    <div
                      key={tier.name}
                      className="group stagger-item relative"
                    >
                      <div className={`absolute -inset-[1px] rounded-xl bg-gradient-to-r 
                          from-${tier.color}-500/0 via-${tier.color}-500/40 to-${tier.color}-500/0 
                          ${tier.popular ? "opacity-100" : "opacity-0 group-hover:opacity-100"} transition-opacity duration-500 blur-[1px]`} />
                      <div className={`relative card-glow card-glow-${tier.color} p-5 h-full flex flex-col`}>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-[color:var(--color-slate-dark)]">{tier.name}</span>
                          {tier.popular && (
                            <span className="badge-gradient text-[10px]">Popular</span>
                          )}
                        </div>
                        <p className={`mt-2 text-xl font-bold text-${tier.color}-600`}>
                          {tier.price}
                          <span className="text-xs font-normal text-[color:var(--color-slate-light)]">{tier.unit}</span>
                        </p>
                        <ul className="mt-3 space-y-2 text-xs text-[color:var(--color-slate-light)] flex-1">
                          {tier.features.map((f) => (
                            <li key={f} className="flex items-center gap-2">
                              <span className={`w-1.5 h-1.5 rounded-full bg-${tier.color}-500`} />
                              {f}
                            </li>
                          ))}
                        </ul>
                        <div className={`mt-4 h-[2px] w-0 rounded-full bg-gradient-to-r from-${tier.color}-500 to-${tier.color}-400 group-hover:w-full transition-all duration-500`} />
                      </div>
                    </div>
                  ))}
                </StaggerGroup>
                <p className="mt-4 text-xs text-[color:var(--color-slate-light)] text-center">
                  Monthly bookkeeping services with final output in the form of monthly financial statements.
                  For transactions above 600/month, contact us for a custom quote.
                </p>
              </div>
            </Reveal>
          </MaskReveal>
        </div>
      </section>

      <section className="section-space bg-white relative overflow-hidden">
        {/* Continuous subtle gradient background untuk FAQ + CTA */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[color:var(--color-neutral-50)] to-[color:var(--color-neutral-100)]" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[color:var(--color-primary)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[color:var(--color-accent)]/5 rounded-full blur-3xl" />

        <div className="container-grid relative z-10">
          {/* FAQ Section */}
          <Reveal>
            <div className="text-center mb-8">
              <p className="badge-gradient inline-flex mb-3">FAQ</p>
              <h2 className="section-title">Bookkeeping FAQs</h2>
            </div>
          </Reveal>
          <div className="mt-6 grid gap-4 max-w-3xl mx-auto">
            {faqItems.map((item, index) => {
              const colors = ['primary', 'accent', 'secondary'];
              const color = colors[index % colors.length];
              return (
                <Reveal key={item.question}>
                  <details className="faq-glow group bg-white/80 backdrop-blur-sm">
                    {/* Background glow when open */}
                    <div className="faq-glow-bg" />
                    <summary className="relative flex items-center justify-between p-6 cursor-pointer list-none">
                      <span className="text-sm font-semibold pr-4">{item.question}</span>
                      <span className={`w-8 h-8 rounded-full bg-${color}-500/10 flex items-center justify-center text-${color}-500 transition-all duration-300 flex-shrink-0`}>
                        <svg className="w-4 h-4 transition-transform duration-300 group-open:rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </span>
                    </summary>
                    <div className="relative px-6 pb-6">
                      <p className="text-sm text-[color:var(--color-slate-light)]">
                        {item.answer}
                      </p>
                      {/* Glow bar */}
                      <div className={`mt-4 h-[2px] w-16 rounded-full bg-gradient-to-r from-${color}-500 to-${color}-400`} />
                    </div>
                  </details>
                </Reveal>
              );
            })}
          </div>

          {/* CTA Section - menyatu dengan FAQ dalam satu section */}
          <Reveal>
            <div className="mt-12 relative rounded-3xl overflow-hidden">
              {/* Background gradient - continuous dengan FAQ */}
              <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-primary)]/10 via-[color:var(--color-accent)]/10 to-[color:var(--color-secondary)]/10" />

              {/* Animated background orbs */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[color:var(--color-primary)]/20 rounded-full blur-3xl animate-pulse-slow" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[color:var(--color-accent)]/20 rounded-full blur-3xl animate-pulse-slow-delayed" />
              </div>

              <div className="relative card-glass border border-white/60 rounded-3xl p-8 lg:p-10 backdrop-blur-xl">
                <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                  <div>
                    <p className="badge-gradient inline-flex mb-3">Get started</p>
                    <SplitTextHeading
                      text="Get clean books within 30 days"
                      as="h2"
                      className="text-2xl font-semibold"
                    />
                    <p className="mt-3 text-sm text-[color:var(--color-slate-light)]">
                      Start with a free consultation and we will map a monthly
                      bookkeeping plan tailored to your business size.
                    </p>
                    <div className="mt-4 glow-bar glow-bar-md" />
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link href={primaryCta.href} className="btn-primary shimmer">
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
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
