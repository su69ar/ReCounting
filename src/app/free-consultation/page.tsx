import type { Metadata } from "next";
import Link from "next/link";
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
              <div className="card p-6 text-sm text-[color:var(--color-slate-light)]">
                <p className="font-semibold text-[color:var(--color-slate-dark)]">
                  What to expect
                </p>
                <ul className="mt-3 space-y-2">
                  <li>30-minute discovery call with our senior accountant</li>
                  <li>Compliance review for PPh/PPN/SPT</li>
                  <li>Transparent pricing recommendation</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={secondaryCta.href}
                  className="btn-secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat on WhatsApp instead
                </a>
                <Link href="/services" className="text-sm font-semibold text-[color:var(--color-primary)]">
                  Explore services
                </Link>
              </div>
            </div>

            <MaskReveal className="card p-6">
              <SplitTextHeading
                text="Request a consultation"
                as="h2"
                className="text-lg font-semibold"
              />
              <form className="mt-4 grid gap-4" action="/api/lead" method="POST">
                <input type="hidden" name="source" value="free-consultation" />
                <label className="text-sm font-medium">
                  Full name
                  <input
                    type="text"
                    name="name"
                    className="mt-2 w-full rounded-lg border border-[color:var(--color-border)] px-4 py-3 text-sm"
                    placeholder="Jane Smith"
                    required
                  />
                </label>
                <label className="text-sm font-medium">
                  Email address
                  <input
                    type="email"
                    name="email"
                    className="mt-2 w-full rounded-lg border border-[color:var(--color-border)] px-4 py-3 text-sm"
                    placeholder="you@company.com"
                    required
                  />
                </label>
                <label className="text-sm font-medium">
                  WhatsApp number
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
                  Monthly transaction volume
                  <select
                    name="transaction_volume"
                    className="mt-2 w-full rounded-lg border border-[color:var(--color-border)] px-4 py-3 text-sm"
                  >
                    <option value="Below 100">Below 100</option>
                    <option value="100-300">100–300</option>
                    <option value="300-600">300–600</option>
                    <option value="600+">600+</option>
                  </select>
                </label>
                <label className="text-sm font-medium">
                  What do you need help with?
                  <textarea
                    name="message"
                    className="mt-2 min-h-[120px] w-full rounded-lg border border-[color:var(--color-border)] px-4 py-3 text-sm"
                    placeholder="Tell us about your business and goals..."
                  />
                </label>
                <button type="submit" className="btn-primary w-full">
                  Submit request
                </button>
                <p className="text-xs text-[color:var(--color-slate-light)]">
                  By submitting, you agree to be contacted by the ReCounting team
                  within 2 hours during business days.
                </p>
              </form>
            </MaskReveal>
          </div>
        </Reveal>

        <Reveal>
          <MaskReveal className="mt-12 card card-hover bg-white p-6">
            <SplitTextHeading
              text="Need help right away?"
              as="h2"
              className="text-lg font-semibold"
            />
            <p className="mt-2 text-sm text-[color:var(--color-slate-light)]">
              WhatsApp is the fastest way to reach us. Our team is available
              Monday–Friday, 08:00–17:00 WITA.
            </p>
            <div className="mt-4 text-sm text-[color:var(--color-slate-light)]">
              <p>{siteConfig.phone}</p>
              <p>{siteConfig.email}</p>
            </div>
          </MaskReveal>
        </Reveal>
      </div>
    </section>
  );
}
