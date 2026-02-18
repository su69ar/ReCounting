import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/animations/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { SplitTextHeading } from "@/components/animations/SplitTextHeading";
import { MaskReveal } from "@/components/animations/MaskReveal";
import { StaggerGroup } from "@/components/animations/StaggerGroup";
import { secondaryCta, siteConfig } from "@/lib/site";
import { ContactForm } from "@/components/forms/ContactForm";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Free Consultation",
      item: `${siteConfig.url}/free-consultation`,
    },
  ],
};

const faqItems = [
  {
    question: "Is the consultation really free?",
    answer:
      "Yes. The initial consultation is a free 30-minute session with no obligation. It's designed to understand your business needs and how we can help.",
  },
  {
    question: "What should I prepare for the consultation?",
    answer:
      "Basic information about your business type, approximate monthly transaction volume, and your current accounting setup. No documents required upfront.",
  },
  {
    question: "How quickly will I get a response?",
    answer:
      "Within 24 hours on business days. Most enquiries receive a same-day response via WhatsApp.",
  },
  {
    question: "Can you help foreign-owned businesses?",
    answer:
      "Yes. We are experienced with PT PMA structures and provide English-first communication throughout.",
  },
  {
    question: "What happens after the consultation?",
    answer:
      "You receive a written summary with tailored recommendations and transparent pricing options. There is no pressure to commit.",
  },
];

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

export const metadata: Metadata = {
  title: "Free Accounting Consultation for Bali Businesses",
  description:
    "Get personalized bookkeeping & tax advice from our experts. 30-min free consultation. No obligation. Book now.",
  alternates: { canonical: "/free-consultation" },
};

export default function FreeConsultationPage() {
  return (
    <section className="section-space">
      <div className="container-grid">
        <JsonLd data={breadcrumbSchema} />
        <JsonLd data={faqSchema} />
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="space-y-5">
              <p className="badge-pill">Free Consultation</p>
              <SplitTextHeading
                text="Book Your Free Accounting Consultation"
                as="h1"
                className="text-4xl font-bold tracking-tight text-[color:var(--color-slate-dark)]"
              />
              <p className="section-subtitle">
                Share your business details and we&apos;ll provide a tailored
                bookkeeping & tax compliance plan with fast follow-up.
              </p>
              <div className="card-glow p-6 text-sm text-[color:var(--color-slate-light)] relative overflow-hidden">
                {/* Glow orb */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[color:var(--color-secondary)]/15 rounded-full blur-2xl" />
                
                <p className="badge-gradient inline-flex mb-3">
                  What to expect
                </p>
                <ul className="mt-3 space-y-3 relative z-10">
                  {[
                    { text: "30-minute discovery call with our senior accountant", color: "primary", step: "1" },
                    { text: "Compliance review for PPh/PPN/SPT", color: "accent", step: "2" },
                    { text: "Transparent pricing recommendation", color: "secondary", step: "3" },
                  ].map((item) => (
                    <li key={item.text} className="flex items-center gap-3">
                      <span className={`w-6 h-6 rounded-full bg-${item.color}-500/10 text-${item.color}-500 flex items-center justify-center text-xs font-bold flex-shrink-0`}>
                        {item.step}
                      </span>
                      {item.text}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 glow-bar glow-bar-sm" />
              </div>
              <div className="flex flex-wrap gap-3">
                <Link 
                  href="/services" 
                  className="btn-secondary"
                >
                  Explore services
                </Link>
              </div>
            </div>

            <MaskReveal className="relative rounded-2xl overflow-hidden">
              {/* Background glow orb */}
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-[color:var(--color-primary)]/15 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative card-glass rounded-2xl border border-white/40 backdrop-blur-xl p-6 shadow-2xl overflow-hidden">
                <SplitTextHeading
                  text="Request a consultation"
                  as="h2"
                  className="text-lg font-semibold relative z-10"
                />
                <ContactForm source="free-consultation" showTransactionVolume />
              </div>
            </MaskReveal>
          </div>
        </Reveal>

        {/* Trust Badges Section */}
        <Reveal>
          <div className="mt-12 relative overflow-hidden">
            <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  label: "PKF Network Member",
                  desc: "International quality standards",
                  color: "primary",
                  icon: "network",
                },
                {
                  label: "English & Bahasa",
                  desc: "Bilingual communication",
                  color: "accent",
                  icon: "language",
                },
                {
                  label: "100+ Businesses Served",
                  desc: "Trusted across Bali",
                  color: "secondary",
                  icon: "businesses",
                },
                {
                  label: "Mon–Fri, 08:00–17:00 WITA",
                  desc: "Reliable availability",
                  color: "primary",
                  icon: "clock",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`group card-glow card-glow-${item.color} stagger-item p-5 text-center relative overflow-hidden`}
                >
                  <div className={`icon-glow bg-${item.color}-500/10 text-${item.color}-500 mx-auto mb-3 relative z-10`}>
                    {item.icon === "network" && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    )}
                    {item.icon === "language" && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M2 12h20" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10" />
                      </svg>
                    )}
                    {item.icon === "businesses" && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    )}
                    {item.icon === "clock" && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-sm font-semibold relative z-10">{item.label}</h3>
                  <p className="mt-1 text-xs text-[color:var(--color-slate-light)] relative z-10">
                    {item.desc}
                  </p>
                  {/* Glow bar */}
                  <div className={`mt-3 mx-auto h-[2px] w-0 rounded-full bg-gradient-to-r from-${item.color}-500 to-${item.color}-400 group-hover:w-12 transition-all duration-500`} />
                </div>
              ))}
            </StaggerGroup>
          </div>
        </Reveal>

        {/* Social Proof Section */}
        <Reveal>
          <div className="mt-12 relative overflow-hidden">
            <div className="text-center mb-8">
              <p className="badge-gradient inline-flex mb-3">Client outcomes</p>
              <h2 className="section-title">What clients say</h2>
            </div>
            <StaggerGroup className="grid gap-6 md:grid-cols-3">
              {[
                {
                  quote: "Went from shoebox receipts to clean monthly reports in 30 days",
                  color: "primary",
                },
                {
                  quote: "Finally understand my PPh and PPN obligations as a PT PMA owner",
                  color: "accent",
                },
                {
                  quote: "Saved over Rp 15 million in penalties by getting compliant on time",
                  color: "secondary",
                },
              ].map((item) => (
                <div
                  key={item.quote}
                  className={`group card-glow card-glow-${item.color} stagger-item p-6 relative overflow-hidden`}
                >
                  {/* Quote icon */}
                  <div className={`icon-glow bg-${item.color}-500/10 text-${item.color}-500 mb-4 relative z-10`}>
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.3 2.6C6 5.1 2.8 9.7 2.8 15v5.2h7V15H6c0-3.2 2.1-6 5.3-7.4L11.3 2.6zm11 0C17 5.1 13.8 9.7 13.8 15v5.2h7V15H17c0-3.2 2.1-6 5.3-7.4L22.3 2.6z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-[color:var(--color-slate-dark)] relative z-10">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div className="mt-4 relative z-10">
                    <span className="badge-gradient inline-flex text-xs">
                      Verified client
                    </span>
                  </div>
                  {/* Glow bar */}
                  <div className={`mt-4 h-[2px] w-0 rounded-full bg-gradient-to-r from-${item.color}-500 to-${item.color}-400 group-hover:w-16 transition-all duration-500`} />
                </div>
              ))}
            </StaggerGroup>
          </div>
        </Reveal>

        {/* FAQ Section */}
        <Reveal>
          <div className="mt-12 relative overflow-hidden">
            <div className="text-center mb-8">
              <p className="badge-gradient inline-flex mb-3">FAQ</p>
              <h2 className="section-title">Consultation FAQs</h2>
            </div>
          </div>
        </Reveal>
        <div className="mt-6 grid gap-4 max-w-3xl mx-auto">
          {faqItems.map((item, index) => {
            const colors = ["primary", "accent", "secondary"];
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

        {/* CTA Section - Same style as service pages */}
        <Reveal>
          <div className="mt-12 relative rounded-3xl overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-primary)]/5 via-[color:var(--color-accent)]/5 to-[color:var(--color-secondary)]/5" />
            
            {/* Animated background orbs */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[color:var(--color-primary)]/20 rounded-full blur-3xl animate-pulse-slow" />
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[color:var(--color-accent)]/20 rounded-full blur-3xl animate-pulse-slow-delayed" />
            </div>
            
            <div className="relative card-glass border border-white/50 rounded-3xl p-8 lg:p-10 backdrop-blur-xl">
              <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                <div>
                  <p className="badge-gradient inline-flex mb-3">Get started</p>
                  <SplitTextHeading
                    text="Need help right away?"
                    as="h2"
                    className="text-2xl font-semibold"
                  />
                  <p className="mt-3 text-sm text-[color:var(--color-slate-light)]">
                    WhatsApp is the fastest way to reach us. Our team is available
                    Monday–Friday, 08:00–17:00 WITA.
                  </p>
                  <div className="mt-4 glow-bar glow-bar-md" />
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={secondaryCta.href}
                    className="btn-primary shimmer"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Chat on WhatsApp
                  </a>
                  <Link href="/contact" className="btn-secondary">
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
