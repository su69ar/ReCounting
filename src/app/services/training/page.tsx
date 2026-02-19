import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { Reveal } from "@/components/animations/Reveal";
import { StaggerGroup } from "@/components/animations/StaggerGroup";
import { SplitTextHeading } from "@/components/animations/SplitTextHeading";
import { MaskReveal } from "@/components/animations/MaskReveal";
import { primaryCta, secondaryCta, siteConfig } from "@/lib/site";
import { colorClasses, type ColorKey } from "@/lib/color-map";
import { generateServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Accounting Software Training for Bali Businesses",
  description:
    "Hands-on training for your team on accounting applications. Learn to use your bookkeeping software effectively with personalized sessions from our experts.",
  alternates: { canonical: "/services/training" },
};

const faqItems = [
  {
    question: "What accounting software do you provide training for?",
    answer:
      "We provide training for popular accounting applications used in Indonesia including Jurnal.id, Accurate, Xero, and other platforms. The training is tailored to your specific software.",
  },
  {
    question: "How long is a typical training session?",
    answer:
      "Sessions are flexible and billed per hour. Most clients book 2 to 4 hour sessions depending on the complexity of their needs. We recommend starting with a 2-hour session to cover the fundamentals.",
  },
  {
    question: "Can training be done remotely?",
    answer:
      "Yes. We offer both in-person training in Bali and remote sessions via video call. Remote sessions are equally effective and allow for screen sharing and hands-on practice.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services` },
    { "@type": "ListItem", position: 3, name: "Training", item: `${siteConfig.url}/services/training` },
  ],
};

const serviceSchema = generateServiceSchema({
  name: "Accounting Software Training",
  description: "Hands-on training for teams on accounting application usage and best practices.",
  url: `${siteConfig.url}/services/training`,
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

export default function TrainingPage() {
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
                <p className="badge-pill">Training</p>
                <SplitTextHeading
                  text="Accounting Software Training"
                  as="h1"
                  className="text-4xl font-bold tracking-tight text-[color:var(--color-slate-dark)]"
                />
                <p className="section-subtitle">
                  Hands-on training for your team on how to use your accounting
                  application effectively. We teach you the workflows, shortcuts,
                  and best practices so your team can manage day-to-day entries
                  with confidence.
                </p>
                <p className="text-sm font-medium text-[color:var(--color-primary)]">
                  Rp 200,000/hour
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
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[color:var(--color-secondary)]/20 rounded-full blur-3xl pointer-events-none" />
                <h2 className="text-lg font-semibold relative z-10">What you&apos;ll learn</h2>
                <ul className="mt-4 space-y-3 text-sm text-[color:var(--color-slate-light)] relative z-10">
                  {[
                    { text: "Software setup and navigation", color: "primary" },
                    { text: "Transaction entry and categorization", color: "accent" },
                    { text: "Bank reconciliation workflows", color: "secondary" },
                    { text: "Report generation and interpretation", color: "primary" },
                    { text: "Common mistakes and how to avoid them", color: "accent" },
                  ].map((item) => (
                    <li key={item.text} className="stagger-item flex items-center gap-3 group">
                      <span className={`check-glow ${colorClasses[item.color as ColorKey].bg} ${colorClasses[item.color as ColorKey].text}`}>
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
              <p className="badge-gradient inline-flex mb-3">How it works</p>
              <h2 className="section-title">Training process</h2>
            </div>
            <StaggerGroup className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Assess your needs",
                  desc: "We review your current software, team skill level, and specific areas where training is needed.",
                  color: "primary",
                  step: "01",
                },
                {
                  title: "Hands-on sessions",
                  desc: "Interactive training using your actual data and workflows. In-person in Bali or remote via video call.",
                  color: "accent",
                  step: "02",
                },
                {
                  title: "Follow-up support",
                  desc: "After training, we remain available for quick questions via WhatsApp to reinforce what was learned.",
                  color: "secondary",
                  step: "03",
                },
              ].map((item) => (
                <div key={item.title} className={`group card-glow card-glow-${item.color} stagger-item p-6 relative overflow-hidden`}>
                  <span className={`step-number ${colorClasses[item.color as ColorKey].text}`}>{item.step}</span>
                  <div className={`icon-glow ${colorClasses[item.color as ColorKey].bg} ${colorClasses[item.color as ColorKey].text} mb-4 relative z-10`}>
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      {item.step === "01" && <><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></>}
                      {item.step === "02" && <><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></>}
                      {item.step === "03" && <><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7A8.38 8.38 0 0 1 4 11.5a8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></>}
                    </svg>
                  </div>
                  <h3 className="text-base font-semibold relative z-10">{item.title}</h3>
                  <p className="mt-2 text-sm text-[color:var(--color-slate-light)] relative z-10">{item.desc}</p>
                  <div className={`mt-4 h-[2px] w-0 rounded-full bg-gradient-to-r ${colorClasses[item.color as ColorKey].from} ${colorClasses[item.color as ColorKey].to} group-hover:w-16 transition-all duration-500`} />
                </div>
              ))}
            </StaggerGroup>
          </Reveal>
        </div>
      </section>

      <section className="section-space bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[color:var(--color-neutral-50)] to-[color:var(--color-neutral-100)]" />
        <div className="container-grid relative z-10">
          <Reveal>
            <div className="text-center mb-8">
              <p className="badge-gradient inline-flex mb-3">FAQ</p>
              <h2 className="section-title">Training FAQs</h2>
            </div>
          </Reveal>
          <div className="mt-6 grid gap-4 max-w-3xl mx-auto">
            {faqItems.map((item, index) => {
              const colors = ['primary', 'accent', 'secondary'];
              const color = colors[index % colors.length] as ColorKey;
              return (
                <Reveal key={item.question}>
                  <details className="faq-glow group bg-white/80 backdrop-blur-sm">
                    <div className="faq-glow-bg" />
                    <summary className="relative flex items-center justify-between p-6 cursor-pointer list-none">
                      <span className="text-sm font-semibold pr-4">{item.question}</span>
                      <span className={`w-8 h-8 rounded-full ${colorClasses[color].bg} flex items-center justify-center ${colorClasses[color].text} transition-all duration-300 flex-shrink-0`}>
                        <svg className="w-4 h-4 transition-transform duration-300 group-open:rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </span>
                    </summary>
                    <div className="relative px-6 pb-6">
                      <p className="text-sm text-[color:var(--color-slate-light)]">{item.answer}</p>
                      <div className={`mt-4 h-[2px] w-16 rounded-full bg-gradient-to-r ${colorClasses[color].from} ${colorClasses[color].to}`} />
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
                    <SplitTextHeading text="Ready to train your team?" as="h2" className="text-2xl font-semibold" />
                    <p className="mt-3 text-sm text-[color:var(--color-slate-light)]">
                      Book a free consultation and we will assess your team&apos;s
                      needs and recommend the right training plan.
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
