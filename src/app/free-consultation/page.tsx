import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/animations/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { SplitTextHeading } from "@/components/animations/SplitTextHeading";
import { MaskReveal } from "@/components/animations/MaskReveal";
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
