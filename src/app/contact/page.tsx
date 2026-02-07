import type { Metadata } from "next";
import { Reveal } from "@/components/animations/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { SplitTextHeading } from "@/components/animations/SplitTextHeading";
import { MaskReveal } from "@/components/animations/MaskReveal";
import { secondaryCta, siteConfig } from "@/lib/site";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Contact", item: `${siteConfig.url}/contact` },
  ],
};

export const metadata: Metadata = {
  title: "Contact ReCounting | Get in Touch Today",
  description:
    "Chat on WhatsApp, email, or call ReCounting. Available Monday–Friday. Response in less than 2 hours.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="section-space">
      <div className="container-grid">
        <JsonLd data={breadcrumbSchema} />
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="space-y-5">
              <p className="badge-pill">Contact</p>
              <SplitTextHeading
                text="Get in touch with ReCounting"
                as="h1"
                className="text-4xl font-bold tracking-tight text-[color:var(--color-slate-dark)]"
              />
              <p className="section-subtitle">
                Reach us via WhatsApp, email, or phone. We respond within 2
                hours during business days.
              </p>
              <div className="card p-6 text-sm text-[color:var(--color-slate-light)]">
                <p className="font-semibold text-[color:var(--color-slate-dark)]">
                  Office details
                </p>
                <p className="mt-2">{siteConfig.address}</p>
                <p>{siteConfig.hours}</p>
                <p>
                  <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
                </p>
                <p>
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </p>
              </div>
              <a
                href={secondaryCta.href}
                className="btn-secondary"
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp
              </a>
            </div>

            <MaskReveal className="relative rounded-2xl overflow-hidden">
              {/* Background glow orb */}
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-[color:var(--color-accent)]/15 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative card-glass rounded-2xl border border-white/40 backdrop-blur-xl p-6 shadow-2xl overflow-hidden">
                <SplitTextHeading
                  text="Send us a message"
                  as="h2"
                  className="text-lg font-semibold relative z-10"
                />
                <form className="mt-4 grid gap-4 relative z-10" action="/api/lead" method="POST">
                  <input type="hidden" name="source" value="contact" />
                  <label className="text-sm font-medium">
                    Name
                    <input
                      type="text"
                      name="name"
                      className="mt-2 w-full rounded-lg border border-[color:var(--color-border)] px-4 py-3 text-sm input-glow"
                      placeholder="Your name"
                      required
                    />
                  </label>
                  <label className="text-sm font-medium">
                    Email
                    <input
                      type="email"
                      name="email"
                      className="mt-2 w-full rounded-lg border border-[color:var(--color-border)] px-4 py-3 text-sm input-glow"
                      placeholder="you@company.com"
                      required
                    />
                  </label>
                  <label className="text-sm font-medium">
                    Phone / WhatsApp
                    <input
                      type="tel"
                      name="phone"
                      className="mt-2 w-full rounded-lg border border-[color:var(--color-border)] px-4 py-3 text-sm input-glow"
                      placeholder="+62"
                    />
                  </label>
                  <label className="text-sm font-medium">
                    Service interest
                    <select
                      name="service"
                      className="mt-2 w-full rounded-lg border border-[color:var(--color-border)] px-4 py-3 text-sm input-glow bg-white"
                    >
                      <option value="Bookkeeping">Bookkeeping</option>
                      <option value="Tax compliance">Tax compliance</option>
                      <option value="Payroll">Payroll (coming soon)</option>
                      <option value="Business setup">Business setup (coming soon)</option>
                    </select>
                  </label>
                  <label className="text-sm font-medium">
                    Message
                    <textarea
                      name="message"
                      className="mt-2 min-h-[120px] w-full rounded-lg border border-[color:var(--color-border)] px-4 py-3 text-sm input-glow resize-none"
                      placeholder="Tell us about your needs..."
                    />
                  </label>
                  <button type="submit" className="btn-primary w-full shimmer relative overflow-hidden">
                    Send message
                  </button>
                </form>
              </div>
            </MaskReveal>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <MaskReveal>
              <div className="card-glow card-glow-secondary p-6 relative overflow-hidden group">
                {/* Glow orb */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-secondary-500/20 rounded-full blur-2xl group-hover:bg-secondary-500/30 transition-colors" />
                
                <div className="icon-glow bg-secondary-500/10 text-secondary-500 mb-4">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <SplitTextHeading
                  text="Fast response guarantee"
                  as="h3"
                  className="text-lg font-semibold"
                />
                <p className="mt-2 text-sm text-[color:var(--color-slate-light)]">
                  We respond to new inquiries in less than 2 hours during business days.
                </p>
                <div className="mt-4 h-[2px] w-0 rounded-full bg-gradient-to-r from-secondary-500 to-secondary-400 group-hover:w-16 transition-all duration-500" />
              </div>
            </MaskReveal>
            <MaskReveal>
              <div className="card-glow card-glow-accent p-6 relative overflow-hidden group">
                {/* Glow orb */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-accent-500/20 rounded-full blur-2xl group-hover:bg-accent-500/30 transition-colors" />
                
                <div className="icon-glow bg-accent-500/10 text-accent-500 mb-4">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7A8.38 8.38 0 0 1 4 11.5a8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                </div>
                <SplitTextHeading
                  text="WhatsApp-first support"
                  as="h3"
                  className="text-lg font-semibold"
                />
                <p className="mt-2 text-sm text-[color:var(--color-slate-light)]">
                  Get quick answers, send files, and keep conversations organized
                  with our team.
                </p>
                <div className="mt-4 h-[2px] w-0 rounded-full bg-gradient-to-r from-accent-500 to-accent-400 group-hover:w-16 transition-all duration-500" />
              </div>
            </MaskReveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
