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
          {services.map((service, index) => {
            const colors = ['primary', 'accent', 'secondary', 'primary'];
            const color = colors[index % colors.length];
            return (
              <div
                key={service.title}
                className={`group relative stagger-item h-full ${"disabled" in service && service.disabled ? "opacity-60" : ""
                  }`}
              >
                {/* Animated gradient border */}
                <div className={`absolute -inset-[1px] rounded-[1.25rem] bg-gradient-to-r 
                    from-${color}-500/0 via-${color}-500/40 to-${color}-500/0 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]`} />
                <div className={`relative card-glow card-glow-${color} h-full p-6`}>
                  {service.badge && (
                    <span className={`badge-gradient mb-3 inline-flex`}>
                      {service.badge}
                    </span>
                  )}
                  <h3 className="text-xl font-semibold text-[color:var(--color-slate-dark)]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-[color:var(--color-slate-light)]">
                    {service.description}
                  </p>
                  {"price" in service && service.price && (
                    <p className="mt-2 text-xs font-semibold text-[color:var(--color-primary)]">
                      {service.price}
                    </p>
                  )}
                  {/* Glow bar */}
                  <div className={`mt-4 h-[2px] w-0 rounded-full bg-gradient-to-r 
                      from-${color}-500 to-${color}-400 
                      group-hover:w-16 transition-all duration-500`} />
                  <div className="mt-6">
                    <Link
                      href={service.href}
                      className="link-glow text-sm font-semibold text-[color:var(--color-primary)]"
                    >
                      {"disabled" in service && service.disabled ? "Notify me" : "Learn more"}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </StaggerGroup>

        <MaskReveal className="mt-12 relative rounded-3xl overflow-hidden">
          {/* Background glow orbs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[color:var(--color-primary)]/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[color:var(--color-accent)]/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow-delayed" />

          <Reveal>
            <div className="relative card-glass border border-white/50 rounded-3xl p-8 lg:p-10 backdrop-blur-xl">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <p className="badge-gradient mb-3 inline-flex">Why choose us</p>
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
                <StaggerGroup className="grid gap-4">
                  {[
                    { text: "English-first communication", color: "primary", icon: "globe" },
                    { text: "Compliance-ready monthly reporting", color: "accent", icon: "clipboard" },
                    { text: "Fast response via WhatsApp", color: "secondary", icon: "message" },
                    { text: "Transparent scope & deliverables", color: "primary", icon: "check" },
                  ].map((item, index) => (
                    <div
                      key={item.text}
                      className={`group card-glow card-glow-${item.color} stagger-item flex items-center gap-4 p-4`}
                    >
                      <div className={`icon-glow bg-${item.color}-500/10 text-${item.color}-500`}>
                        {item.icon === "globe" && (
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                          </svg>
                        )}
                        {item.icon === "clipboard" && (
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                            <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                          </svg>
                        )}
                        {item.icon === "message" && (
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7A8.38 8.38 0 0 1 4 11.5a8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                          </svg>
                        )}
                        {item.icon === "check" && (
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        )}
                      </div>
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
  );
}
