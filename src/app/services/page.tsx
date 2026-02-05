import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { Reveal } from "@/components/animations/Reveal";
import { StaggerGroup } from "@/components/animations/StaggerGroup";
import { SplitTextHeading } from "@/components/animations/SplitTextHeading";
import { MaskReveal } from "@/components/animations/MaskReveal";
import { services } from "@/data/content";
import { primaryCta, secondaryCta, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Accounting Services",
  description:
    "Explore bookkeeping, tax compliance, payroll, and business setup services built for Bali SMEs and expats.",
  alternates: { canonical: "/services" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services` },
  ],
};

export default function ServicesPage() {
  return (
    <section className="section-space">
      <div className="container-grid">
        <JsonLd data={breadcrumbSchema} />
        <Reveal>
          <div className="max-w-2xl">
            <p className="badge-pill">Services</p>
            <SplitTextHeading
              text="Accounting services tailored to Bali SMEs & expats"
              as="h1"
              className="mt-4 text-4xl font-bold tracking-tight text-[color:var(--color-slate-dark)]"
            />
            <p className="section-subtitle mt-4">
              Bookkeeping, tax compliance, and reporting that keep you compliant
              with Indonesian regulations while freeing up your time.
            </p>
          </div>
        </Reveal>
        <StaggerGroup className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className={`card card-hover stagger-item h-full p-6 ${
                service.disabled ? "opacity-60" : ""
              }`}
            >
              {service.badge && (
                <span className="mb-3 inline-flex rounded-full bg-[color:var(--color-primary)]/10 px-3 py-1 text-xs font-semibold text-[color:var(--color-primary)]">
                  {service.badge}
                </span>
              )}
              <h3 className="text-xl font-semibold text-[color:var(--color-slate-dark)]">
                {service.title}
              </h3>
              <p className="mt-3 text-sm text-[color:var(--color-slate-light)]">
                {service.description}
              </p>
              <div className="mt-6">
                <Link
                  href={service.href}
                  className="text-sm font-semibold text-[color:var(--color-primary)]"
                >
                  {service.disabled ? "Notify me" : "Learn more"}
                </Link>
              </div>
            </div>
          ))}
        </StaggerGroup>

        <MaskReveal className="mt-12 rounded-3xl border border-[color:var(--color-border)] bg-white p-8">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <SplitTextHeading
                  text="Why ReCounting"
                  as="h2"
                  className="text-2xl font-semibold"
                />
                <p className="mt-3 text-sm text-[color:var(--color-slate-light)]">
                  We are a Bali-based accounting team focused on clarity,
                  compliance, and fast communication. Ideal for founders who want
                  clean books without the stress.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
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
              <StaggerGroup className="grid gap-4">
                {[
                  "English-first communication",
                  "Compliance-ready monthly reporting",
                  "Fast response via WhatsApp",
                  "Transparent scope & deliverables",
                ].map((item) => (
                  <div
                    key={item}
                    className="card stagger-item flex items-start gap-3 p-4"
                  >
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[color:var(--color-teal)]" />
                    <p className="text-sm text-[color:var(--color-slate-light)]">
                      {item}
                    </p>
                  </div>
                ))}
              </StaggerGroup>
            </div>
          </Reveal>
        </MaskReveal>
      </div>
    </section>
  );
}
