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
  title: "Accounting Consultation & Report Review",
  description:
    "Monthly accounting consultation and financial statement review for Bali businesses managing their own bookkeeping. Expert guidance on accounting treatment and compliance.",
  alternates: { canonical: "/services/consultation" },
};

const faqItems = [
  {
    question: "Who is this service for?",
    answer:
      "This service is designed for businesses that handle their own bookkeeping but want professional guidance on accounting treatment, compliance, and financial statement accuracy.",
  },
  {
    question: "What does the monthly review include?",
    answer:
      "We review your financial statements for accuracy, proper account classification, and compliance with Indonesian accounting standards. We also provide guidance on any accounting treatment questions you have.",
  },
  {
    question: "Can I upgrade to full bookkeeping later?",
    answer:
      "Yes. Many clients start with consultation and report review, then transition to our full bookkeeping service as their business grows. We make the transition seamless.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services` },
    { "@type": "ListItem", position: 3, name: "Consultation", item: `${siteConfig.url}/services/consultation` },
  ],
};

const serviceSchema = generateServiceSchema({
  name: "Accounting Consultation & Report Review",
  description: "Monthly accounting consultation and financial statement review for businesses managing their own bookkeeping.",
  url: `${siteConfig.url}/services/consultation`,
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function ConsultationPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      <section className="section-space">
        <div className="container-grid">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-5">
                <p className="badge-pill">Consultation</p>
                <SplitTextHeading
                  text="Accounting Consultation & Report Review"
                  as="h1"
                  className="text-4xl font-bold tracking-tight text-[color:var(--color-slate-dark)]"
                />
                <p className="section-subtitle">
                  Expert guidance on accounting treatment and financial statement
                  review for businesses that manage their own bookkeeping. Get
                  professional oversight without outsourcing your entire process.
                </p>
                <p className="text-sm font-medium text-[color:var(--color-primary)]">
                  Rp 1,500,000/month
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href={primaryCta.href} className="btn-primary">
                    {primaryCta.label}
                  </Link>
                  <a href={secondaryCta.href} className="btn-secondary" target="_blank" rel="noreferrer">
                    {secondaryCta.label}
                  </a>
                </div>
              </div>
              <StaggerGroup className="card-glow p-6 relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[color:var(--color-accent)]/20 rounded-full blur-3xl pointer-events-none" />
                <h2 className="text-lg font-semibold relative z-10">What&apos;s included</h2>
                <ul className="mt-4 space-y-3 text-sm text-[color:var(--color-slate-light)] relative z-10">
                  {[
                    { text: "Monthly financial statement review", color: "primary" },
                    { text: "Accounting treatment consultation", color: "accent" },
                    { text: "Compliance guidance for Indonesian standards", color: "secondary" },
                    { text: "WhatsApp support for accounting questions", color: "primary" },
                    { text: "Recommendations for process improvement", color: "accent" },
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
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[color:var(--color-neutral-50)] to-[color:var(--color-neutral-100)]" />
        <div className="container-grid relative z-10">
          <Reveal>
            <div className="text-center mb-8">
              <p className="badge-gradient inline-flex mb-3">FAQ</p>
              <h2 className="section-title">Consultation FAQs</h2>
            </div>
          </Reveal>
          <div className="mt-6 grid gap-4 max-w-3xl mx-auto">
            {faqItems.map((item, index) => {
              const colors = ['primary', 'accent', 'secondary'];
              const color = colors[index % colors.length];
              return (
                <Reveal key={item.question}>
                  <details className="faq-glow group bg-white/80 backdrop-blur-sm">
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
                      <p className="text-sm text-[color:var(--color-slate-light)]">{item.answer}</p>
                      <div className={`mt-4 h-[2px] w-16 rounded-full bg-gradient-to-r from-${color}-500 to-${color}-400`} />
                    </div>
                  </details>
                </Reveal>
              );
            })}
          </div>

          <Reveal>
            <div className="mt-12 relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-primary)]/10 via-[color:var(--color-accent)]/10 to-[color:var(--color-secondary)]/10" />
              <div className="relative card-glass border border-white/60 rounded-3xl p-8 lg:p-10 backdrop-blur-xl">
                <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                  <div>
                    <p className="badge-gradient inline-flex mb-3">Get started</p>
                    <SplitTextHeading text="Need expert eyes on your books?" as="h2" className="text-2xl font-semibold" />
                    <p className="mt-3 text-sm text-[color:var(--color-slate-light)]">
                      Book a free consultation and we will review your current
                      bookkeeping process and recommend the right level of support.
                    </p>
                    <div className="mt-4 glow-bar glow-bar-md" />
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link href={primaryCta.href} className="btn-primary shimmer">{primaryCta.label}</Link>
                    <a href={secondaryCta.href} className="btn-secondary" target="_blank" rel="noreferrer">{secondaryCta.label}</a>
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
