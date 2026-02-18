import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { Reveal } from "@/components/animations/Reveal";
import { StaggerGroup } from "@/components/animations/StaggerGroup";
import { SplitTextHeading } from "@/components/animations/SplitTextHeading";
import { MaskReveal } from "@/components/animations/MaskReveal";
import { primaryCta, secondaryCta, siteConfig } from "@/lib/site";
import { generateServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Accounting Initial Setup for Bali Businesses | Chart of Accounts, Opening Balances & Data Migration",
  description:
    "Professional accounting setup services for businesses in Bali. Chart of accounts, opening balances, fixed assets, inventory, AP/AR setup, and data migration into your accounting application.",
  alternates: { canonical: "/services/initial-setup" },
};

const setupServices = [
  {
    title: "Chart of Accounts Setup",
    description:
      "We create a customized chart of accounts tailored to your business. This framework organizes all financial transactions, ensuring clarity and accuracy in tracking income, expenses, assets, and liabilities.",
    color: "primary",
    icon: "ledger",
  },
  {
    title: "Opening Balance Setup",
    description:
      "Your financial books begin with accurate opening balances including initial assets, liabilities, and equity. Starting with the correct numbers is critical for maintaining accurate financial statements going forward.",
    color: "accent",
    icon: "balance",
  },
  {
    title: "Fixed Assets Management",
    description:
      "We handle the setup of your fixed assets including asset categorization, acquisition dates, and depreciation schedules. Every asset is properly tracked and accounted for in your financial system.",
    color: "secondary",
    icon: "asset",
  },
  {
    title: "Inventory & Product Setup",
    description:
      "If your business deals with inventory, we organize and configure your inventory management system. From tracking product quantities to managing stock levels and cost of goods, everything is set up for efficiency.",
    color: "primary",
    icon: "inventory",
  },
  {
    title: "Accounts Payable & Receivable",
    description:
      "We establish a reliable system for managing your outstanding bills (AP) and outstanding invoices (AR). This includes organizing all vendor and customer records to ensure timely payments and collections.",
    color: "accent",
    icon: "transfer",
  },
  {
    title: "Training & Handover",
    description:
      "After setup, we train you and your team on how to use your accounting application for day-to-day tasks. We walk you through transaction entry, reconciliation, and report generation so your team is confident and self-sufficient.",
    color: "secondary",
    icon: "training",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & assessment",
    description:
      "We review your current financial records, understand your business structure, and determine the scope of data migration needed.",
    color: "primary",
  },
  {
    step: "02",
    title: "Data collection",
    description:
      "We gather your existing financial data — bank statements, invoices, asset lists, inventory records, and vendor/customer information.",
    color: "accent",
  },
  {
    step: "03",
    title: "System configuration",
    description:
      "We set up your accounting application with a customized chart of accounts, configure modules, and migrate all data with verified opening balances.",
    color: "secondary",
  },
  {
    step: "04",
    title: "Verification & training",
    description:
      "We verify all balances, run trial reports to ensure accuracy, and train your team on daily workflows. Includes 3 months of post-setup consultation support.",
    color: "primary",
  },
];

const faqItems = [
  {
    question: "What accounting software do you set up?",
    answer:
      "We work with popular accounting applications used in Indonesia including Jurnal.id, Accurate, Xero, QuickBooks, and others. The setup process is tailored to your specific platform and business requirements.",
  },
  {
    question: "How long does the initial setup take?",
    answer:
      "The timeline depends on the complexity of your data. A simple setup with under 50 items can be completed in 3 to 5 business days. More complex migrations with 100+ items typically take 1 to 2 weeks. We provide a timeline estimate during the discovery phase.",
  },
  {
    question: "What if I am starting a brand new business with no existing data?",
    answer:
      "We handle that too. For new businesses, we set up your chart of accounts, configure your accounting application, and prepare the structure so you are ready to start recording transactions from day one. The Package A tier is designed for this scenario.",
  },
  {
    question: "Do I need to provide all my data at once?",
    answer:
      "Ideally, yes. Having all data available upfront allows us to complete the setup efficiently and ensure accurate opening balances. However, we can work in phases if needed — we will prioritize the most critical data first.",
  },
  {
    question: "What happens after the setup is complete?",
    answer:
      "All packages include 3 months of consultation support after setup. During this period, you can reach out via WhatsApp for guidance on accounting treatment, transaction entry questions, or software usage. Many clients transition to our monthly bookkeeping service after this period.",
  },
  {
    question: "Can you migrate data from my old accounting system?",
    answer:
      "Yes. We regularly migrate data from spreadsheets, legacy accounting software, and other platforms into modern accounting applications. We verify all migrated data against your source records to ensure nothing is lost or miscategorized.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: `${siteConfig.url}/services`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Initial Setup",
      item: `${siteConfig.url}/services/initial-setup`,
    },
  ],
};

const serviceSchema = generateServiceSchema({
  name: "Accounting Initial Setup",
  description:
    "Professional accounting setup services. Chart of accounts, opening balances, fixed assets, inventory, AP/AR setup, and data migration into your accounting application.",
  url: `${siteConfig.url}/services/initial-setup`,
});

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

export default function InitialSetupPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section className="section-space">
        <div className="container-grid">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-5">
                <p className="badge-pill">Initial Setup</p>
                <SplitTextHeading
                  text="Accounting Setup Done Right From Day One"
                  as="h1"
                  className="text-4xl font-bold tracking-tight text-[color:var(--color-slate-dark)]"
                />
                <p className="section-subtitle">
                  Starting a business or transitioning to a new accounting system?
                  We handle everything from chart of accounts configuration to
                  data migration and opening balances, so your financial
                  infrastructure is established correctly from the start.
                </p>
                <p className="text-sm font-medium text-[color:var(--color-primary)]">
                  From Rp 2,500,000 one-time
                </p>
                <div className="flex flex-wrap gap-4">
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
              <StaggerGroup className="card-glow p-6 relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[color:var(--color-secondary)]/20 rounded-full blur-3xl pointer-events-none" />
                <h2 className="text-lg font-semibold relative z-10">
                  What we set up
                </h2>
                <ul className="mt-4 space-y-3 text-sm text-[color:var(--color-slate-light)] relative z-10">
                  {[
                    { text: "Chart of Accounts customized to your business", color: "primary" },
                    { text: "Opening balances with verified accuracy", color: "accent" },
                    { text: "Fixed assets with depreciation schedules", color: "secondary" },
                    { text: "Inventory & product catalog configuration", color: "primary" },
                    { text: "Accounts payable & receivable records", color: "accent" },
                    { text: "Team training on your accounting application", color: "secondary" },
                  ].map((item) => (
                    <li key={item.text} className="stagger-item flex items-center gap-3 group">
                      <span className={`check-glow bg-${item.color}-500/10 text-${item.color}-500`}>
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </StaggerGroup>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Setup Services Detail */}
      <section className="section-space bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-[color:var(--color-primary)]/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-[color:var(--color-accent)]/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="container-grid relative z-10">
          <Reveal>
            <div className="text-center mb-8">
              <p className="badge-gradient inline-flex mb-3">What we offer</p>
              <h2 className="section-title">Comprehensive setup services</h2>
              <p className="section-subtitle mt-3 max-w-2xl mx-auto">
                Every component of your accounting system is configured with
                precision, ensuring a solid foundation for accurate financial
                management and compliance.
              </p>
            </div>
          </Reveal>
          <StaggerGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {setupServices.map((service) => (
              <div
                key={service.title}
                className={`group card-glow card-glow-${service.color} stagger-item p-6 relative overflow-hidden`}
              >
                <div
                  className={`icon-glow bg-${service.color}-500/10 text-${service.color}-500 mb-4 relative z-10`}
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    {service.icon === "ledger" && (
                      <>
                        <rect x="3" y="3" width="18" height="18" rx="2" strokeLinecap="round" />
                        <path d="M7 7h10M7 12h10M7 17h6" strokeLinecap="round" />
                      </>
                    )}
                    {service.icon === "balance" && (
                      <>
                        <path d="M12 3v18M3 7l9-4 9 4" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="6" cy="16" r="3" />
                        <circle cx="18" cy="16" r="3" />
                      </>
                    )}
                    {service.icon === "asset" && (
                      <>
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      </>
                    )}
                    {service.icon === "inventory" && (
                      <>
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                        <line x1="12" y1="22.08" x2="12" y2="12" />
                      </>
                    )}
                    {service.icon === "transfer" && (
                      <>
                        <path d="M17 1l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3 11V9a4 4 0 0 1 4-4h14" strokeLinecap="round" />
                        <path d="M7 23l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21 13v2a4 4 0 0 1-4 4H3" strokeLinecap="round" />
                      </>
                    )}
                    {service.icon === "training" && (
                      <>
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeLinecap="round" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" />
                      </>
                    )}
                  </svg>
                </div>
                <h3 className="text-base font-semibold relative z-10">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-[color:var(--color-slate-light)] relative z-10">
                  {service.description}
                </p>
                <div
                  className={`mt-4 h-[2px] w-0 rounded-full bg-gradient-to-r from-${service.color}-500 to-${service.color}-400 group-hover:w-16 transition-all duration-500`}
                />
              </div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Process */}
      <section className="section-space relative overflow-hidden">
        <div className="container-grid relative z-10">
          <Reveal>
            <div className="text-center mb-8">
              <p className="badge-gradient inline-flex mb-3">The process</p>
              <h2 className="section-title">How accounting setup works</h2>
            </div>
            <StaggerGroup className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((item) => (
                <div key={item.title} className={`group card-glow card-glow-${item.color} stagger-item p-6 relative overflow-hidden`}>
                  <span className={`step-number text-${item.color}-500`}>{item.step}</span>
                  <div className={`icon-glow bg-${item.color}-500/10 text-${item.color}-500 mb-4 relative z-10`}>
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      {item.step === "01" && <><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" strokeLinecap="round" /></>}
                      {item.step === "02" && <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></>}
                      {item.step === "03" && <><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></>}
                      {item.step === "04" && <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></>}
                    </svg>
                  </div>
                  <h3 className="text-base font-semibold relative z-10">{item.title}</h3>
                  <p className="mt-2 text-sm text-[color:var(--color-slate-light)] relative z-10">
                    {item.description}
                  </p>
                  <div className={`mt-4 h-[2px] w-0 rounded-full bg-gradient-to-r from-${item.color}-500 to-${item.color}-400 group-hover:w-16 transition-all duration-500`} />
                </div>
              ))}
            </StaggerGroup>
          </Reveal>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-space relative overflow-hidden">
        <div className="container-grid relative z-10">
          <MaskReveal className="relative rounded-3xl overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-[color:var(--color-primary)]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[color:var(--color-accent)]/10 rounded-full blur-3xl" />
            <Reveal>
              <div className="relative card-glass border border-white/50 rounded-3xl p-8 backdrop-blur-xl">
                <div className="mb-6">
                  <p className="badge-gradient inline-flex mb-3">Pricing</p>
                  <SplitTextHeading
                    text="Initial setup packages"
                    as="h2"
                    className="text-2xl font-semibold"
                  />
                  <p className="mt-3 text-sm text-[color:var(--color-slate-light)]">
                    One-time setup fee based on the complexity of your data
                    migration. All packages include 3 months of consultation
                    support after setup completion.
                  </p>
                </div>
                <StaggerGroup className="grid gap-4 md:grid-cols-3">
                  {[
                    {
                      name: "Package A",
                      price: "Rp 2,500,000",
                      features: [
                        "Chart of Accounts setup",
                        "Opening Balance",
                        "Fixed Assets (max 50 items)",
                        "Inventory (max 50 items)",
                        "Products & Services (max 50 items)",
                        "Accounts Payable & Receivable",
                      ],
                      color: "primary",
                    },
                    {
                      name: "Package B",
                      price: "Rp 4,000,000",
                      features: [
                        "Chart of Accounts setup",
                        "Opening Balance",
                        "Fixed Assets (max 100 items)",
                        "Inventory (max 100 items)",
                        "Products & Services (max 100 items)",
                        "Accounts Payable & Receivable",
                      ],
                      color: "accent",
                      popular: true,
                    },
                    {
                      name: "Package C",
                      price: "Rp 6,000,000",
                      features: [
                        "Chart of Accounts setup",
                        "Opening Balance",
                        "Fixed Assets (100+ items)",
                        "Inventory (100+ items)",
                        "Products & Services (100+ items)",
                        "Accounts Payable & Receivable",
                      ],
                      color: "secondary",
                    },
                  ].map((tier) => (
                    <div
                      key={tier.name}
                      className="group stagger-item relative"
                    >
                      <div className={`absolute -inset-[1px] rounded-xl bg-gradient-to-r 
                          from-${tier.color}-500/0 via-${tier.color}-500/40 to-${tier.color}-500/0 
                          ${tier.popular ? "opacity-100" : "opacity-0 group-hover:opacity-100"} transition-opacity duration-500 blur-[1px]`} />
                      <div className={`relative card-glow card-glow-${tier.color} p-5 h-full flex flex-col`}>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-[color:var(--color-slate-dark)]">{tier.name}</span>
                          {tier.popular && (
                            <span className="badge-gradient text-[10px]">Popular</span>
                          )}
                        </div>
                        <p className={`mt-2 text-xl font-bold text-${tier.color}-600`}>
                          {tier.price}
                        </p>
                        <p className="text-xs text-[color:var(--color-slate-light)]">one-time</p>
                        <ul className="mt-3 space-y-2 text-xs text-[color:var(--color-slate-light)] flex-1">
                          {tier.features.map((f) => (
                            <li key={f} className="flex items-center gap-2">
                              <span className={`w-1.5 h-1.5 rounded-full bg-${tier.color}-500 flex-shrink-0`} />
                              {f}
                            </li>
                          ))}
                        </ul>
                        <div className={`mt-4 h-[2px] w-0 rounded-full bg-gradient-to-r from-${tier.color}-500 to-${tier.color}-400 group-hover:w-full transition-all duration-500`} />
                      </div>
                    </div>
                  ))}
                </StaggerGroup>
                <p className="mt-4 text-xs text-[color:var(--color-slate-light)] text-center">
                  Client data migration into your selected accounting application to determine opening balances.
                  Includes consultation services for 3 months after setup completion.
                </p>
              </div>
            </Reveal>
          </MaskReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-space bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[color:var(--color-neutral-50)] to-[color:var(--color-neutral-100)]" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[color:var(--color-primary)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[color:var(--color-accent)]/5 rounded-full blur-3xl" />
        <div className="container-grid relative z-10">
          <Reveal>
            <div className="text-center mb-8">
              <p className="badge-gradient inline-flex mb-3">FAQ</p>
              <h2 className="section-title">Initial setup FAQs</h2>
            </div>
          </Reveal>
          <div className="mt-6 grid gap-4 max-w-3xl mx-auto">
            {faqItems.map((item, index) => {
              const colors = ['primary', 'accent', 'secondary'];
              const color = colors[index % colors.length];
              return (
                <Reveal key={item.question}>
                  <details className="faq-glow group bg-white/80 backdrop-blur-sm">
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
                      <div className={`mt-4 h-[2px] w-16 rounded-full bg-gradient-to-r from-${color}-500 to-${color}-400`} />
                    </div>
                  </details>
                </Reveal>
              );
            })}
          </div>

          {/* CTA */}
          <Reveal>
            <div className="mt-12 relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-primary)]/10 via-[color:var(--color-accent)]/10 to-[color:var(--color-secondary)]/10" />
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[color:var(--color-primary)]/20 rounded-full blur-3xl animate-pulse-slow" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[color:var(--color-accent)]/20 rounded-full blur-3xl animate-pulse-slow-delayed" />
              </div>
              <div className="relative card-glass border border-white/60 rounded-3xl p-8 lg:p-10 backdrop-blur-xl">
                <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                  <div>
                    <p className="badge-gradient inline-flex mb-3">Get started</p>
                    <SplitTextHeading
                      text="Ready to set up your accounting system?"
                      as="h2"
                      className="text-2xl font-semibold"
                    />
                    <p className="mt-3 text-sm text-[color:var(--color-slate-light)]">
                      Book a free consultation and we will assess your data,
                      recommend the right package, and give you a clear timeline
                      for setup completion.
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
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
