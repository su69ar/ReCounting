import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { Reveal } from "@/components/animations/Reveal";
import { StaggerGroup } from "@/components/animations/StaggerGroup";
import { SplitTextHeading } from "@/components/animations/SplitTextHeading";
import { MaskReveal } from "@/components/animations/MaskReveal";
import { StoryScroll } from "@/components/animations/StoryScroll";
import { FAQ } from "@/components/sections/FAQ";
import { JsonLd } from "@/components/seo/JsonLd";
import { primaryCta, secondaryCta, siteConfig } from "@/lib/site";
import Link from "next/link";
import {
  faqs,
  services,
  stats,
  storySteps,
  testimonials,
  valueProps,
} from "@/data/content";

export const metadata: Metadata = {
  title: "Accounting & Bookkeeping Services for Bali",
  description:
    "Stress-free accounting for SMEs & expats in Bali. Tax compliance, bookkeeping, payroll. Book a free consultation today.",
  alternates: {
    canonical: "/",
  },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "ReCounting",
  url: siteConfig.url,
  description: siteConfig.description,
  areaServed: {
    "@type": "City",
    name: "Bali",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address,
    addressLocality: "Denpasar",
    addressRegion: "Bali",
    addressCountry: "ID",
  },
  telephone: siteConfig.phoneIntl,
  email: siteConfig.email,
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ],
    opens: "08:00",
    closes: "17:00",
    description: "Monday to Friday, 8 AM – 5 PM WITA",
  },
  sameAs: [
    siteConfig.socials.facebook,
    siteConfig.socials.instagram,
    siteConfig.socials.linkedin,
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <JsonLd data={professionalServiceSchema} />
      <JsonLd data={faqSchema} />

      <Hero
        headline="Stress-Free Accounting for Your Bali Business"
        subtitle="Get professional bookkeeping, tax compliance, and payroll support so you can focus on growth. Free consultation included."
        stats={stats}
        primaryCta={primaryCta}
        secondaryCta={secondaryCta}
        cardContent={{
          tagline: "Built for SMEs & expats",
          title: "Your finance partner on the ground in Bali",
          description: "Local compliance expertise, transparent pricing, and a team that responds in under 2 hours.",
          features: [
            "Monthly bookkeeping & reconciliation",
            "Tax filing for PPh, PPN, SPT",
            "English-first, jargon-free reporting",
            "Proactive compliance reminders",
          ],
        }}
      />

      <section className="border-y border-[color:var(--color-border)] bg-white">
        <div className="container-grid section-space">
          <StaggerGroup className="grid gap-8 md:grid-cols-3">
            {valueProps.map((prop) => (
              <div
                key={prop.title}
                className="card card-hover stagger-item p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--color-primary)]/10 text-[color:var(--color-primary)]">
                  {prop.icon === "clock" && (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path strokeLinecap="round" d="M12 7v5l3 3" />
                    </svg>
                  )}
                  {prop.icon === "shield" && (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6l7-3z"
                      />
                    </svg>
                  )}
                  {prop.icon === "chat" && (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        d="M21 12a8 8 0 1 1-3.3-6.4L21 5v7z"
                      />
                    </svg>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-[color:var(--color-slate-dark)]">
                  {prop.title}
                </h3>
                <p className="mt-2 text-sm text-[color:var(--color-slate-light)]">
                  {prop.description}
                </p>
              </div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section id="services" className="section-space">
        <div className="container-grid">
          <Reveal>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <SplitTextHeading
                  text="Services built for Bali businesses"
                  as="h2"
                  className="section-title"
                />
                <p className="section-subtitle mt-3">
                  Looking for a bookkeeper in Bali? Our accounting services
                  combine clear deliverables, local compliance expertise, and a
                  team that works at your pace.
                </p>
              </div>
              <Link href="/services" className="btn-secondary">
                View all services
              </Link>
            </div>
          </Reveal>
          <StaggerGroup className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className={`card card-hover stagger-item h-full p-6 ${service.disabled ? "opacity-60" : ""
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
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-grid">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div className="space-y-4">
                <SplitTextHeading
                  text="A clear, compliant accounting workflow"
                  as="h2"
                  className="section-title"
                />
                <p className="section-subtitle">
                  We design a workflow around your business so you always know
                  your numbers, deadlines, and next steps.
                </p>
              </div>
              <StaggerGroup className="grid gap-4">
                {[
                  {
                    title: "Discovery & setup",
                    desc: "We map your current records, systems, and business goals.",
                  },
                  {
                    title: "Monthly reporting",
                    desc: "Clean books, reconciled accounts, and clear monthly summaries.",
                  },
                  {
                    title: "Tax compliance",
                    desc: "Proactive filing reminders and preparation for PPh, PPN, SPT.",
                  },
                  {
                    title: "Always-on support",
                    desc: "Fast WhatsApp responses and English-first guidance.",
                  },
                ].map((step, index) => (
                  <div key={step.title} className="card stagger-item p-5">
                    <p className="text-xs font-bold text-[color:var(--color-primary)]">
                      Step {index + 1}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-[color:var(--color-slate-light)]">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </StaggerGroup>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space">
        <div className="container-grid">
          <Reveal>
            <div className="max-w-2xl">
              <p className="badge-pill">Our workflow</p>
              <SplitTextHeading
                text="A guided journey from messy books to compliance"
                as="h2"
                className="section-title"
              />
              <p className="section-subtitle mt-3">
                Scroll to see how we turn accounting complexity into a clear,
                repeatable system built for Bali businesses.
              </p>
            </div>
          </Reveal>
          <StoryScroll steps={storySteps} />
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-grid">
          <MaskReveal className="rounded-3xl border border-[color:var(--color-border)] bg-white p-8">
            <Reveal>
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                <div className="space-y-4">
                  <p className="badge-pill">Compliance checklist</p>
                  <SplitTextHeading
                    text="Tax compliance in Bali, without the stress"
                    as="h2"
                    className="section-title"
                  />
                  <p className="section-subtitle">
                    Our team keeps your bookkeeping and tax compliance aligned
                    with Indonesian regulations. Ideal for SMEs and expat-owned
                    businesses who need clarity and speed.
                  </p>
                  <Link
                    href="/services/tax-compliance"
                    className="btn-secondary"
                  >
                    Explore tax compliance
                  </Link>
                </div>
                <StaggerGroup className="grid gap-4">
                  {[
                    "Monthly PPh & PPN preparation",
                    "SPT annual filing timeline",
                    "Audit-ready documentation",
                    "Compliance reminders & follow-up",
                  ].map((item) => (
                    <div
                      key={item}
                      className="card stagger-item flex items-start gap-3 p-5"
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

      <section className="section-space">
        <div className="container-grid">
          <Reveal>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <SplitTextHeading
                  text="Outcomes we deliver"
                  as="h2"
                  className="section-title"
                />
                <p className="section-subtitle mt-3">
                  Focused on clarity, compliance, and fast communication.
                </p>
              </div>
              <Link href={primaryCta.href} className="btn-primary">
                Start with a free consult
              </Link>
            </div>
          </Reveal>
          <StaggerGroup className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="card card-hover stagger-item h-full p-6"
              >
                <p className="text-sm text-[color:var(--color-slate-light)]">
                  {testimonial.quote}
                </p>
                <div className="mt-6">
                  <p className="text-sm font-semibold text-[color:var(--color-slate-dark)]">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-[color:var(--color-slate-light)]">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section id="faq" className="section-space bg-white">
        <div className="container-grid">
          <Reveal>
            <div className="max-w-2xl">
              <SplitTextHeading
                text="Frequently asked questions"
                as="h2"
                className="section-title"
              />
              <p className="section-subtitle mt-3">
                Everything you need to know before booking a consultation.
              </p>
            </div>
          </Reveal>
          <div className="mt-8">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-grid">
          <MaskReveal className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-primary)]/10 p-8">
            <Reveal>
              <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                <div>
                  <SplitTextHeading
                    text="Ready for stress-free accounting?"
                    as="h2"
                    className="text-3xl font-semibold text-[color:var(--color-slate-dark)]"
                  />
                  <p className="mt-3 text-sm text-[color:var(--color-slate-light)]">
                    Book a free consultation and get a tailored compliance plan
                    for your Bali business within 24 hours.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
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
            </Reveal>
          </MaskReveal>
        </div>
      </section>
    </>
  );
}
