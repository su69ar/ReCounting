import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { Reveal } from "@/components/animations/Reveal";
import { StaggerGroup } from "@/components/animations/StaggerGroup";
import { SplitTextHeading } from "@/components/animations/SplitTextHeading";
import { MaskReveal } from "@/components/animations/MaskReveal";
import { StoryScroll } from "@/components/animations/StoryScroll";
import { FAQ } from "@/components/sections/FAQ";
import { InstagramFeed } from "@/components/sections/InstagramFeed";
import { ClientMarquee } from "@/components/sections/ClientMarquee";
import { JsonLd } from "@/components/seo/JsonLd";
import { TrustStrip } from "@/components/TrustStrip";
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
  title: "Bali Accounting Services & Bali Tax Services | ReCounting",
  description:
    "Bali accounting services and Bali tax services for SMEs, PT PMA, and foreign-owned companies. Get bookkeeping, payroll, reporting, and practical compliance support.",
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

const homepageAudiencePaths = [
  {
    href: "/bali-accounting-services",
    label: "For Bali businesses",
    title: "Accounting and bookkeeping support in Bali",
    description:
      "Monthly bookkeeping, reconciliations, and reporting for businesses that need cleaner numbers and less admin stress.",
  },
  {
    href: "/bali-tax-services",
    label: "For tax and filing",
    title: "Tax support with clear deadlines and practical guidance",
    description:
      "PPh, PPN, and annual SPT workflows for founders who want filings handled properly and explained clearly.",
  },
  {
    href: "/bali-accounting-services-pt-pma",
    label: "For PT PMA",
    title: "English-first support for PT PMA and foreign-owned companies",
    description:
      "A better fit for directors and owners who need local execution, English communication, and reliable monthly reporting.",
  },
  {
    href: "/indonesia-tax-services",
    label: "For Indonesia-wide operations",
    title: "Accounting and tax support beyond Bali-only operations",
    description:
      "For businesses with remote owners, multi-location workflows, or a wider Indonesia footprint that needs dependable support.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={professionalServiceSchema} />
      <JsonLd data={faqSchema} />

      <Hero
        headline="Stress-Free Bali Accounting Services for Your Business"
        subtitle="Get Bali accounting services, Bali tax services, bookkeeping, payroll, and Indonesia compliance support so you can focus on growth. Free consultation included."
        stats={stats}
        primaryCta={primaryCta}
        secondaryCta={secondaryCta}
        cardContent={{
          tagline: "Built for SMEs & expats",
          title: "Your finance partner on the ground in Bali",
          description: "Local compliance expertise, transparent pricing, and a team that responds in less than 2 hours.",
          features: [
            "Monthly bookkeeping & reconciliation",
            "Tax filing for PPh, PPN, SPT",
            "English-first, jargon-free reporting",
            "Proactive compliance reminders",
          ],
        }}
      />

      <TrustStrip />

      <section className="bg-white border-y border-[color:var(--color-border)]">
        <div className="container-grid py-14 md:py-20 lg:py-24">
          {/* Top Section */}
          <div className="mb-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="max-w-3xl pr-4 md:pr-8">
              <p className="text-[0.8rem] font-bold uppercase tracking-[0.15em] text-[color:var(--color-primary)]">
                Bali accounting and tax support
              </p>
              <p className="mt-4 text-base leading-relaxed text-[color:var(--color-slate-dark)] md:text-lg md:leading-[1.8]">
                ReCounting helps Bali SMEs, PT PMA companies, and foreign-owned
                businesses stay on top of bookkeeping, monthly reporting,
                payroll support, and Indonesian tax compliance with clear
                communication and practical follow-through.
              </p>
            </div>
            <div className="rounded-[1.25rem] border border-[color:var(--color-border)]/80 bg-white p-7 md:p-8 shadow-sm">
              <p className="text-[0.95rem] font-bold text-[color:var(--color-slate-dark)]">
                Best fit for businesses that need:
              </p>
              <ul className="mt-5 space-y-4 text-[0.95rem] text-[color:var(--color-slate-light)] font-medium">
                <li className="flex items-start gap-3">
                  <span className="mt-[0.45rem] h-[5px] w-[5px] rounded-full bg-[color:var(--color-slate-light)] flex-shrink-0" />
                  <span>Clean monthly books and reconciliations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-[0.45rem] h-[5px] w-[5px] rounded-full bg-[color:var(--color-slate-light)] flex-shrink-0" />
                  <span>PPh, PPN, and annual filing support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-[0.45rem] h-[5px] w-[5px] rounded-full bg-[color:var(--color-slate-light)] flex-shrink-0" />
                  <span>English-first guidance for founders and directors</span>
                </li>
              </ul>
            </div>
          </div>

          <StaggerGroup className="grid gap-6 md:gap-8 md:grid-cols-3">
            {valueProps.map((prop) => (
              <div
                key={prop.title}
                className="rounded-[1.25rem] border border-[color:var(--color-border)]/80 bg-white p-7 md:p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-6 flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-[#f2f6f8] text-[color:var(--color-primary)] transition-transform duration-300 hover:scale-105">
                  {prop.icon === "clock" && (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path strokeLinecap="round" d="M12 7v5l3 3" />
                    </svg>
                  )}
                  {prop.icon === "shield" && (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
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
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        d="M21 12a8 8 0 1 1-3.3-6.4L21 5v7z"
                      />
                    </svg>
                  )}
                </div>
                <h3 className="text-[1.15rem] font-bold text-[color:var(--color-slate-dark)]">
                  {prop.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-[color:var(--color-slate-light)]">
                  {prop.description}
                </p>
              </div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section id="services" className="section-space">
        <div className="container-grid">
          <div className="mb-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal>
              <div className="relative w-full aspect-square md:aspect-[4/5] lg:aspect-[3.5/4] overflow-hidden rounded-[2rem] border border-[color:var(--color-border)] shadow-sm">
                <img 
                  src="/team/ReCounting_Bali_Accounting_Services.png" 
                  alt="ReCounting Bali Accounting Services Team" 
                  className="absolute inset-0 w-full h-full object-cover object-[center_15%]"
                />
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-col items-start justify-center py-4 md:py-8 lg:px-6">
                <SplitTextHeading
                  text="Services built for Bali businesses"
                  as="h2"
                  className="section-title"
                />
                <p className="mt-5 text-base leading-relaxed text-[color:var(--color-slate-dark)] md:text-[1.1rem] md:leading-[1.8] max-w-2xl">
                  Looking for Bali accounting services or Bali tax services?
                  Our bookkeeping, payroll, and compliance support combine clear
                  deliverables, local expertise, and English-first communication
                  for businesses operating in Bali and across Indonesia.
                </p>
                <div className="mt-10">
                  <Link
                    href="/services"
                    className="btn-secondary inline-flex items-center justify-center whitespace-nowrap"
                  >
                    View all services
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>

          <StaggerGroup className="mt-4 grid gap-6 md:grid-cols-2">
            {services.slice(0, 4).map((service) => (
              <div
                key={service.title}
                className={`rounded-[1.25rem] border border-[color:var(--color-border)]/80 bg-white p-7 md:p-8 flex flex-col shadow-sm transition-all hover:shadow-md hover:border-[color:var(--color-primary)]/20 ${"disabled" in service && service.disabled ? "opacity-60" : ""
                  }`}
              >
                {service.badge && (
                  <div className="mb-4">
                    <span className="inline-flex items-center rounded-full bg-[#f2f6f8] px-3.5 py-1 text-xs font-bold tracking-wide text-[color:var(--color-primary)]">
                      {service.badge}
                    </span>
                  </div>
                )}
                <h3 className="text-[1.3rem] font-bold tracking-tight text-[color:var(--color-slate-dark)]">
                  {service.title}
                </h3>
                <p className="mt-3 leading-relaxed text-[0.95rem] text-[color:var(--color-slate-light)] flex-grow font-medium">
                  {service.description}
                </p>
                
                <div className="mt-8">
                  <Link
                    href={service.href}
                    className="font-bold text-[0.9rem] text-[color:var(--color-slate-dark)] hover:text-[color:var(--color-primary)] transition-colors inline-block"
                  >
                    {"disabled" in service && service.disabled ? "Notify me" : `View ${service.title}`}
                  </Link>
                </div>
              </div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-grid">
          <div className="mb-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <Reveal>
              <div className="flex flex-col items-start justify-center py-4 md:py-8 lg:pr-6">
                <p className="badge-gradient inline-flex mb-3">Popular solutions</p>
                <SplitTextHeading
                  text="Find the right support for your business"
                  as="h2"
                  className="section-title"
                />
                <p className="mt-5 text-base leading-relaxed text-[color:var(--color-slate-dark)] md:text-[1.1rem] md:leading-[1.8] max-w-2xl">
                  Whether you need bookkeeping, tax filing, PT PMA support, or
                  a partner who can work across Indonesia, start with the path
                  that best matches your business.
                </p>
                <div className="mt-10">
                  <Link
                    href="/services"
                    className="btn-secondary inline-flex items-center justify-center whitespace-nowrap"
                  >
                    Explore all services
                  </Link>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="w-full h-full overflow-hidden rounded-[2rem] border border-[color:var(--color-border)] shadow-sm">
                <img 
                  src="/team/ReCounting_Bali_Accounting_Tax_Services.png" 
                  alt="ReCounting Bali Accounting and Tax Services Team" 
                  className="w-full h-full object-cover min-h-[300px] lg:min-h-[420px] object-[center_30%]"
                />
              </div>
            </Reveal>
          </div>
          <StaggerGroup className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {homepageAudiencePaths.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="card card-hover stagger-item h-full p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-primary)]">
                  {item.label}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-[color:var(--color-slate-dark)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-[color:var(--color-slate-light)]">
                  {item.description}
                </p>
              </Link>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-grid">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
              <div className="flex flex-col gap-8 md:gap-10 h-full">
                <div className="space-y-4">
                  <SplitTextHeading
                    text="A clear, compliant accounting workflow"
                    as="h2"
                    className="section-title"
                  />
                  <p className="mt-5 text-base leading-relaxed text-[color:var(--color-slate-dark)] md:text-[1.1rem] md:leading-[1.8] max-w-lg">
                    We design a workflow around your business so you always know
                    your numbers, deadlines, and next steps.
                  </p>
                </div>
                {/* The image is allowed to define its natural height without forced aspect ratio crops */}
                <div className="w-full mt-auto overflow-hidden rounded-[2rem] border border-[color:var(--color-border)] shadow-[0_4px_24px_rgba(33,28,24,0.02)]">
                  <img 
                    src="/team/Bali_Accounting_Tax_Services_ReCounting_Team.png" 
                    alt="ReCounting Bali Accounting and Tax Workflow Team" 
                    className="w-full h-auto block"
                  />
                </div>
              </div>
              <StaggerGroup className="grid gap-4 md:gap-5">
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
                  <div 
                    key={step.title} 
                    className="stagger-item flex flex-col justify-center rounded-[1.25rem] border border-[color:var(--color-border)]/80 bg-white p-6 md:p-8 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <p className="text-[0.85rem] font-bold text-[#446b9e]">
                      Step {index + 1}
                    </p>
                    <h3 className="mt-2 text-[1.15rem] font-bold text-[color:var(--color-slate-dark)]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[0.95rem] text-[color:var(--color-slate-light)] font-medium">
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
                  text="What our clients say"
                  as="h2"
                  className="section-title"
                />
                <p className="section-subtitle mt-3">
                  Trusted by businesses across Bali, from startups to established companies.
                </p>
              </div>
              <Link href={primaryCta.href} className="btn-primary">
                Start with a free consult
              </Link>
            </div>
          </Reveal>
          <StaggerGroup className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.slice(0, 3).map((testimonial) => (
              <div
                key={testimonial.name}
                className="card card-hover stagger-item h-full p-6"
              >
                <p
                  data-nosnippet
                  className="text-sm text-[color:var(--color-slate-light)]"
                >
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
          <ClientMarquee />
        </div>
      </section>

      <section className="section-space">
        <div className="container-grid">
          <Reveal>
            <div className="mb-10 text-center">
              <p className="badge-pill mb-3">Follow us</p>
              <SplitTextHeading
                text="ReCounting on Instagram"
                as="h2"
                className="section-title"
              />
              <p className="section-subtitle mt-3">
                Follow <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-[color:var(--color-primary)] font-medium hover:underline">@recountingasia</a> for accounting, bookkeeping, tax tips and updates.
              </p>
            </div>
          </Reveal>
          <InstagramFeed limit={6} />
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

      <section className="section-space relative">
        <div className="container-grid">
          <MaskReveal className="relative rounded-3xl overflow-hidden">
            {/* Background gradient - full bleed dalam card */}
            <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-primary)]/5 via-[color:var(--color-accent)]/5 to-[color:var(--color-secondary)]/5" />

            {/* Animated background orbs - dalam card */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[color:var(--color-primary)]/20 rounded-full blur-3xl animate-pulse-slow" />
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[color:var(--color-accent)]/20 rounded-full blur-3xl animate-pulse-slow-delayed" />
            </div>

            <Reveal>
              <div className="relative card-glass border border-white/50 rounded-3xl p-8 lg:p-10 backdrop-blur-xl">
                <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                  <div>
                    <p className="badge-gradient inline-flex mb-3">Get started</p>
                    <SplitTextHeading
                      text="Ready for stress-free accounting?"
                      as="h2"
                      className="text-3xl font-semibold text-[color:var(--color-slate-dark)]"
                    />
                    <p className="mt-3 text-sm text-[color:var(--color-slate-light)]">
                      Book a free consultation and get a tailored compliance plan
                      for your Bali business within 24 hours.
                    </p>
                    <div className="mt-4 glow-bar glow-bar-md" />
                  </div>
                  <div className="flex flex-wrap gap-3">
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
              </div>
            </Reveal>
          </MaskReveal>
        </div>
      </section>
    </>
  );
}
