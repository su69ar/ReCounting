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
  title: "Business Setup Services in Bali & Indonesia",
  description:
    "Start your business in Indonesia with confidence. PT PMA registration, NPWP setup, bank account opening, and initial compliance for foreign and local entrepreneurs in Bali.",
  alternates: { canonical: "/services/initial-setup" },
};

const faqItems = [
  {
    question: "What is a PT PMA and do I need one?",
    answer:
      "A PT PMA (Penanaman Modal Asing) is a foreign-owned limited liability company in Indonesia. If you are a foreign national wanting to own and operate a business in Indonesia, you generally need a PT PMA. The minimum investment requirement varies by business sector and is regulated through the OSS (Online Single Submission) system.",
  },
  {
    question: "How long does company registration take?",
    answer:
      "The timeline depends on the business type and sector. A standard PT PMA registration through OSS typically takes 2 to 4 weeks for the NIB (Nomor Induk Berusaha) and business licenses. NPWP registration can be completed within a few days once the company is established.",
  },
  {
    question: "What is an NPWP and why do I need it?",
    answer:
      "NPWP (Nomor Pokok Wajib Pajak) is your tax identification number in Indonesia. Every business entity and individual with income above the threshold must have one. It is required for tax filing, opening business bank accounts, and most government transactions.",
  },
  {
    question: "Can you help with opening a business bank account?",
    answer:
      "Yes. We guide you through the bank account opening process at major Indonesian banks (BCA, Mandiri, BNI). We help prepare the required documents including company deed, NPWP, NIB, and director identification.",
  },
  {
    question: "Do you handle ongoing compliance after setup?",
    answer:
      "Yes. After initial setup, we can continue with monthly bookkeeping, tax compliance, and payroll services. Many clients start with business setup and transition to our ongoing accounting packages.",
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
      name: "Business Setup",
      item: `${siteConfig.url}/services/initial-setup`,
    },
  ],
};

const serviceSchema = generateServiceSchema({
  name: "Business Setup Services",
  description:
    "Company registration, NPWP setup, bank account opening, and initial compliance for new businesses in Indonesia.",
  url: `${siteConfig.url}/services/initial-setup`,
});

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

export default function InitialSetupPage() {
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
                <p className="badge-pill">Business Setup</p>
                <SplitTextHeading
                  text="Start Your Business in Bali the Right Way"
                  as="h1"
                  className="text-4xl font-bold tracking-tight text-[color:var(--color-slate-dark)]"
                />
                <p className="section-subtitle">
                  From company registration to NPWP and your first bank account,
                  we handle the paperwork so you can launch with confidence.
                  Designed for foreign entrepreneurs and local founders starting
                  in Indonesia.
                </p>
                <p className="text-sm font-medium text-[color:var(--color-primary)]">
                  Pricing based on consultation
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
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[color:var(--color-secondary)]/20 rounded-full blur-3xl pointer-events-none" />
                <h2 className="text-lg font-semibold relative z-10">
                  What we cover
                </h2>
                <ul className="mt-4 space-y-3 text-sm text-[color:var(--color-slate-light)] relative z-10">
                  {[
                    { text: "PT PMA or PT PMDN company registration", color: "primary" },
                    { text: "NIB & business license via OSS", color: "accent" },
                    { text: "NPWP (tax ID) registration", color: "secondary" },
                    { text: "Business bank account setup guidance", color: "primary" },
                    { text: "Initial compliance framework & tax calendar", color: "accent" },
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
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-[color:var(--color-primary)]/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-[color:var(--color-accent)]/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="container-grid relative z-10">
          <Reveal>
            <div className="text-center mb-8">
              <p className="badge-gradient inline-flex mb-3">The process</p>
              <h2 className="section-title">How business setup works</h2>
            </div>
            <StaggerGroup className="grid gap-8 md:grid-cols-4">
              {[
                {
                  title: "Discovery call",
                  desc: "We discuss your business plan, ownership structure, and target sector to determine the right entity type.",
                  color: "primary",
                  step: "01",
                },
                {
                  title: "Document preparation",
                  desc: "We prepare company deeds, articles of association, and registration documents for notarization.",
                  color: "accent",
                  step: "02",
                },
                {
                  title: "Registration & licensing",
                  desc: "Company registration through AHU Online, NIB issuance via OSS, and NPWP registration with DJP.",
                  color: "secondary",
                  step: "03",
                },
                {
                  title: "Bank & compliance setup",
                  desc: "Business bank account opening, initial chart of accounts, and your first compliance calendar.",
                  color: "primary",
                  step: "04",
                },
              ].map((item) => (
                <div key={item.title} className={`group card-glow card-glow-${item.color} stagger-item p-6 relative overflow-hidden`}>
                  <span className={`step-number text-${item.color}-500`}>{item.step}</span>
                  <div className={`icon-glow bg-${item.color}-500/10 text-${item.color}-500 mb-4 relative z-10`}>
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      {item.step === "01" && <><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7A8.38 8.38 0 0 1 4 11.5a8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></>}
                      {item.step === "02" && <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></>}
                      {item.step === "03" && <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" /></>}
                      {item.step === "04" && <><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></>}
                    </svg>
                  </div>
                  <h3 className="text-base font-semibold relative z-10">{item.title}</h3>
                  <p className="mt-2 text-sm text-[color:var(--color-slate-light)] relative z-10">
                    {item.desc}
                  </p>
                  <div className={`mt-4 h-[2px] w-0 rounded-full bg-gradient-to-r from-${item.color}-500 to-${item.color}-400 group-hover:w-16 transition-all duration-500`} />
                </div>
              ))}
            </StaggerGroup>
          </Reveal>
        </div>
      </section>

      <section className="section-space relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[color:var(--color-accent)]/5 rounded-full blur-3xl" />
        <div className="container-grid relative z-10">
          <MaskReveal className="relative rounded-3xl overflow-hidden">
            <Reveal>
              <div className="relative card-glow card-glow-accent border border-white/50 rounded-3xl p-8 lg:p-10 backdrop-blur-xl overflow-hidden">
                <div className="absolute -top-20 -right-20 w-48 h-48 bg-[color:var(--color-primary)]/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-[color:var(--color-secondary)]/10 rounded-full blur-3xl" />
                <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                  <div className="relative z-10">
                    <p className="badge-gradient inline-flex mb-3">Entity types</p>
                    <SplitTextHeading
                      text="Choosing the right business structure"
                      as="h2"
                      className="text-2xl font-semibold"
                    />
                    <p className="mt-3 text-sm text-[color:var(--color-slate-light)]">
                      The right entity type depends on your ownership, investment
                      size, and business activities. We help you navigate Indonesian
                      regulations to choose the structure that fits.
                    </p>
                    <div className="mt-4 glow-bar glow-bar-md" />
                  </div>
                  <StaggerGroup className="grid gap-3 relative z-10">
                    {[
                      { text: "PT PMA: foreign-owned company for international investors", color: "primary" },
                      { text: "PT PMDN: locally owned company for Indonesian citizens", color: "accent" },
                      { text: "CV: partnership structure for smaller operations", color: "secondary" },
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
              </div>
            </Reveal>
          </MaskReveal>
        </div>
      </section>

      <section className="section-space bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[color:var(--color-neutral-50)] to-[color:var(--color-neutral-100)]" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[color:var(--color-primary)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[color:var(--color-accent)]/5 rounded-full blur-3xl" />
        <div className="container-grid relative z-10">
          <Reveal>
            <div className="text-center mb-8">
              <p className="badge-gradient inline-flex mb-3">FAQ</p>
              <h2 className="section-title">Business setup FAQs</h2>
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
                      <p className="text-sm text-[color:var(--color-slate-light)]">
                        {item.answer}
                      </p>
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
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[color:var(--color-primary)]/20 rounded-full blur-3xl animate-pulse-slow" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[color:var(--color-accent)]/20 rounded-full blur-3xl animate-pulse-slow-delayed" />
              </div>
              <div className="relative card-glass border border-white/60 rounded-3xl p-8 lg:p-10 backdrop-blur-xl">
                <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                  <div>
                    <p className="badge-gradient inline-flex mb-3">Get started</p>
                    <SplitTextHeading
                      text="Ready to launch your business in Bali?"
                      as="h2"
                      className="text-2xl font-semibold"
                    />
                    <p className="mt-3 text-sm text-[color:var(--color-slate-light)]">
                      Book a free consultation and we will walk you through entity
                      selection, registration requirements, and your first
                      compliance steps.
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
