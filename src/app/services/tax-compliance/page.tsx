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
              <StaggerGroup className="card-glow p-6 relative overflow-hidden">
                {/* Glow orb background */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[color:var(--color-primary)]/20 rounded-full blur-3xl pointer-events-none" />
                
                <h2 className="text-lg font-semibold relative z-10">Compliance coverage</h2>
                <ul className="mt-4 space-y-3 text-sm text-[color:var(--color-slate-light)] relative z-10">
                  {[
                    { text: "PPh 21, 23, 25, and final taxes", color: "primary" },
                    { text: "PPN calculation and monthly submissions", color: "accent" },
                    { text: "SPT annual reporting and documentation", color: "secondary" },
                    { text: "NPWP registration and updates", color: "primary" },
                    { text: "Audit-ready compliance files", color: "accent" },
                  ].map((item) => (
                    <li key={item.text} className="stagger-item flex items-center gap-3 group">
                      <span className={`check-glow bg-${item.color}-500/10 text-${item.color}-500`}>
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12"/>
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
              <p className="badge-gradient inline-flex mb-3">Our process</p>
              <h2 className="section-title">How we handle your taxes</h2>
            </div>
            <StaggerGroup className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Tax health check",
                  desc: "We review your current filings and identify risk areas.",
                  color: "primary",
                  icon: "search",
                  step: "01",
                },
                {
                  title: "Filing calendar",
                  desc: "A clear, proactive timeline so deadlines are never missed.",
                  color: "accent",
                  icon: "calendar",
                  step: "02",
                },
                {
                  title: "Ongoing guidance",
                  desc: "We explain obligations in English and keep you updated on law changes.",
                  color: "secondary",
                  icon: "guide",
                  step: "03",
                },
              ].map((item) => (
                <div key={item.title} className={`group card-glow card-glow-${item.color} stagger-item p-6 relative overflow-hidden`}>
                  {/* Step number background */}
                  <span className={`step-number text-${item.color}-500`}>{item.step}</span>
                  
                  {/* Icon */}
                  <div className={`icon-glow bg-${item.color}-500/10 text-${item.color}-500 mb-4 relative z-10`}>
                    {item.icon === "search" && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8"/>
                        <path d="m21 21-4.3-4.3"/>
                      </svg>
                    )}
                    {item.icon === "calendar" && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                        <line x1="16" y1="2" x2="16" y2="6"/>
                        <line x1="8" y1="2" x2="8" y2="6"/>
                        <line x1="3" y1="10" x2="21" y2="10"/>
                      </svg>
                    )}
                    {item.icon === "guide" && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
                        <path d="m9 12 2 2 4-4"/>
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
        {/* Timeline connector visualization */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[color:var(--color-primary)]/20 to-transparent" />
        
        <div className="container-grid relative z-10">
          <MaskReveal className="relative rounded-3xl overflow-hidden">
            {/* Background glow orbs */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-[color:var(--color-primary)]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[color:var(--color-accent)]/10 rounded-full blur-3xl" />
            
            <Reveal>
              <div className="relative card-glass border border-white/50 rounded-3xl p-8 backdrop-blur-xl">
                <div className="mb-6">
                  <p className="badge-gradient inline-flex mb-3">Timeline</p>
                  <SplitTextHeading
                    text="Compliance timeline snapshot"
                    as="h2"
                    className="text-2xl font-semibold"
                  />
                  <p className="mt-3 text-sm text-[color:var(--color-slate-light)]">
                    Monthly PPh and PPN deadlines plus annual SPT filing. We deliver a
                    custom timeline after your initial review.
                  </p>
                </div>
                <StaggerGroup className="grid gap-4 md:grid-cols-2">
                  {[
                    { text: "Monthly: PPh & PPN filings", color: "primary", freq: "Monthly" },
                    { text: "Quarterly: Compliance check-ins", color: "accent", freq: "Quarterly" },
                    { text: "Annual: SPT filing & documentation", color: "secondary", freq: "Annual" },
                    { text: "Ongoing: Regulatory updates", color: "primary", freq: "Ongoing" },
                  ].map((item) => (
                    <div
                      key={item.text}
                      className={`group stagger-item relative`}
                    >
                      {/* Animated gradient border */}
                      <div className={`absolute -inset-[1px] rounded-xl bg-gradient-to-r 
                          from-${item.color}-500/0 via-${item.color}-500/40 to-${item.color}-500/0 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]`} />
                      <div className={`relative card-glow card-glow-${item.color} p-4 h-full flex items-center gap-4`}>
                        {/* Frequency badge */}
                        <span className={`px-2 py-1 rounded-md text-xs font-semibold bg-${item.color}-500/10 text-${item.color}-500`}>
                          {item.freq}
                        </span>
                        <span className="text-sm">{item.text}</span>
                      </div>
                    </div>
                  ))}
                </StaggerGroup>
                
                {/* Visual timeline bar */}
                <div className="mt-8 relative h-2 bg-[color:var(--color-neutral-200)] rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--color-primary)] via-[color:var(--color-accent)] to-[color:var(--color-secondary)] rounded-full" />
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--color-primary)] via-[color:var(--color-accent)] to-[color:var(--color-secondary)] rounded-full blur-sm opacity-50" />
                </div>
                <div className="mt-2 flex justify-between text-xs text-[color:var(--color-slate-light)]">
                  <span>Monthly</span>
                  <span>Quarterly</span>
                  <span>Annual</span>
                </div>
              </div>
            </Reveal>
          </MaskReveal>
        </div>
      </section>

      <section className="section-space relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[color:var(--color-accent)]/5 rounded-full blur-3xl" />
        
        <div className="container-grid relative z-10">
          <MaskReveal className="relative rounded-3xl overflow-hidden">
            <Reveal>
              <div className="relative card-glow card-glow-accent border border-white/50 rounded-3xl p-8 lg:p-10 backdrop-blur-xl overflow-hidden">
              {/* Decorative orb */}
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-[color:var(--color-primary)]/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-[color:var(--color-secondary)]/10 rounded-full blur-3xl" />
                
                <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                  <div className="relative z-10">
                    <p className="badge-gradient inline-flex mb-3">For you</p>
                    <SplitTextHeading
                      text="Designed for expats & SMEs"
                      as="h2"
                      className="text-2xl font-semibold"
                    />
                    <p className="mt-3 text-sm text-[color:var(--color-slate-light)]">
                      We translate Indonesian tax compliance into plain English and
                      keep your team on schedule with proactive reminders.
                    </p>
                    <div className="mt-4 glow-bar glow-bar-md" />
                  </div>
                  <StaggerGroup className="grid gap-3 relative z-10">
                    {[
                      { text: "English-first reporting and documentation", color: "primary" },
                      { text: "Clear calendar for PPh, PPN, SPT", color: "accent" },
                      { text: "Fast WhatsApp communication", color: "secondary" },
                    ].map((item) => (
                      <div
                        key={item.text}
                        className={`group card-glow card-glow-${item.color} stagger-item flex items-center gap-4 p-4`}
                      >
                        <span className={`check-glow bg-${item.color}-500/10 text-${item.color}-500`}>
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                        </span>
                        <p className="text-sm text-[color:var(--color-slate-light)]">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </StaggerGroup>
                </div>
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
              <h2 className="section-title">Tax compliance FAQs</h2>
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
                          <line x1="12" y1="5" x2="12" y2="19"/>
                          <line x1="5" y1="12" x2="19" y2="12"/>
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
                      text="Reduce tax risk with a free compliance review"
                      as="h2"
                      className="text-2xl font-semibold"
                    />
                    <p className="mt-3 text-sm text-[color:var(--color-slate-light)]">
                      We analyze your filings and provide a clear plan for staying
                      compliant all year.
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
