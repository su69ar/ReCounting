import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { Reveal } from "@/components/animations/Reveal";
import { SplitTextHeading } from "@/components/animations/SplitTextHeading";
import { MaskReveal } from "@/components/animations/MaskReveal";
import { primaryCta, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About ReCounting | Accounting Experts in Bali",
  description:
    "Meet our team of licensed accountants serving Bali businesses. English-speaking, compliance-first, and trusted by SMEs.",
  alternates: { canonical: "/about" },
};

const team = [
  { name: "Lead Accountant", role: "Primary point of contact", credential: "Add credentials" },
  { name: "Tax Compliance Lead", role: "PPh, PPN, SPT guidance", credential: "Add credentials" },
  { name: "Client Success", role: "English-first support", credential: "Add credentials" },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "About", item: `${siteConfig.url}/about` },
  ],
};

export default function AboutPage() {
  return (
    <section className="section-space">
      <div className="container-grid">
        <JsonLd data={breadcrumbSchema} />
        <Reveal>
          <div className="max-w-2xl">
            <p className="badge-pill">About us</p>
            <SplitTextHeading
              text="Meet the ReCounting team"
              as="h1"
              className="mt-4 text-4xl font-bold tracking-tight text-[color:var(--color-slate-dark)]"
            />
            <p className="section-subtitle mt-4">
              We are a Bali-based accounting firm helping SMEs, startups, and
              expat-owned companies stay compliant with Indonesian tax
              regulations.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {team.map((member) => (
            <MaskReveal key={member.name} className="card card-hover p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--color-primary)]/10 text-[color:var(--color-primary)]">
                {member.name.slice(0, 1)}
              </div>
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-[color:var(--color-slate-light)]">
                {member.role}
              </p>
              <p className="mt-3 text-xs text-[color:var(--color-slate-light)]">
                {member.credential}
              </p>
            </MaskReveal>
          ))}
        </div>

        <MaskReveal className="mt-12 card card-hover p-8">
          <SplitTextHeading
            text="Why businesses choose us"
            as="h2"
            className="text-2xl font-semibold"
          />
          <ul className="mt-4 grid gap-4 text-sm text-[color:var(--color-slate-light)] md:grid-cols-2">
            <li>English-speaking, locally licensed accountants</li>
            <li>Transparent pricing and clear deliverables</li>
            <li>Compliance-first, audit-ready reporting</li>
            <li>Fast response time (under 2 hours)</li>
          </ul>
        </MaskReveal>

        <MaskReveal className="mt-12 rounded-3xl border border-[color:var(--color-border)] bg-white p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <SplitTextHeading
                text="Ready to work with us?"
                as="h3"
                className="text-lg font-semibold"
              />
              <p className="text-sm text-[color:var(--color-slate-light)]">
                Book a free consultation or explore our service packages.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href={primaryCta.href} className="btn-primary">
                {primaryCta.label}
              </Link>
              <Link href="/services" className="btn-secondary">
                View services
              </Link>
            </div>
          </div>
        </MaskReveal>
      </div>
    </section>
  );
}
