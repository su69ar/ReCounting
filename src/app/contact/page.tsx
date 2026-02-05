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
    "Chat on WhatsApp, email, or call ReCounting. Available Monday–Friday. Response within 2 hours.",
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

            <MaskReveal className="card p-6">
              <SplitTextHeading
                text="Send us a message"
                as="h2"
                className="text-lg font-semibold"
              />
              <form className="mt-4 grid gap-4" action="/api/lead" method="POST">
                <input type="hidden" name="source" value="contact" />
                <label className="text-sm font-medium">
                  Name
                  <input
                    type="text"
                    name="name"
                    className="mt-2 w-full rounded-lg border border-[color:var(--color-border)] px-4 py-3 text-sm"
                    placeholder="Your name"
                    required
                  />
                </label>
                <label className="text-sm font-medium">
                  Email
                  <input
                    type="email"
                    name="email"
                    className="mt-2 w-full rounded-lg border border-[color:var(--color-border)] px-4 py-3 text-sm"
                    placeholder="you@company.com"
                    required
                  />
                </label>
                <label className="text-sm font-medium">
                  Phone / WhatsApp
                  <input
                    type="tel"
                    name="phone"
                    className="mt-2 w-full rounded-lg border border-[color:var(--color-border)] px-4 py-3 text-sm"
                    placeholder="+62"
                  />
                </label>
                <label className="text-sm font-medium">
                  Service interest
                  <select
                    name="service"
                    className="mt-2 w-full rounded-lg border border-[color:var(--color-border)] px-4 py-3 text-sm"
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
                    className="mt-2 min-h-[120px] w-full rounded-lg border border-[color:var(--color-border)] px-4 py-3 text-sm"
                    placeholder="Tell us about your needs..."
                  />
                </label>
                <button type="submit" className="btn-primary w-full">
                  Send message
                </button>
              </form>
            </MaskReveal>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <MaskReveal className="card p-6">
              <SplitTextHeading
                text="Fast response guarantee"
                as="h3"
                className="text-lg font-semibold"
              />
              <p className="mt-2 text-sm text-[color:var(--color-slate-light)]">
                We respond to new inquiries within 2 hours during business days.
              </p>
            </MaskReveal>
            <MaskReveal className="card p-6">
              <SplitTextHeading
                text="WhatsApp-first support"
                as="h3"
                className="text-lg font-semibold"
              />
              <p className="mt-2 text-sm text-[color:var(--color-slate-light)]">
                Get quick answers, send files, and keep conversations organized
                with our team.
              </p>
            </MaskReveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
