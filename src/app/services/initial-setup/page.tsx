import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { Reveal } from "@/components/animations/Reveal";
import { StaggerGroup } from "@/components/animations/StaggerGroup";
import { SplitTextHeading } from "@/components/animations/SplitTextHeading";
import { MaskReveal } from "@/components/animations/MaskReveal";
import { primaryCta, secondaryCta, siteConfig } from "@/lib/site";
import { colorClasses, type ColorKey } from "@/lib/color-map";
import { generateServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Accounting Setup Services in Bali | Chart of Accounts, Opening Balances & Data Migration",
  description:
    "Get your accounting system set up correctly from the start. We configure your chart of accounts, opening balances, fixed assets, inventory, and AP/AR — so your books are accurate from day one. Serving businesses across Bali.",
  alternates: { canonical: "/services/initial-setup" },
};

const setupServices = [
  {
    title: "Chart of Accounts Setup",
    description:
      "We build a chart of accounts structured around how your business actually operates — so every transaction lands in the right category from the start. No generic templates. Your income, expenses, assets, and liabilities are organized for clarity and faster reporting.",
    color: "primary",
    icon: "ledger",
  },
  {
    title: "Opening Balance Setup",
    description:
      "Accurate opening balances are the foundation of reliable financial statements. We verify and enter your starting assets, liabilities, and equity so your books reflect reality from day one — no guesswork, no corrections later.",
    color: "accent",
    icon: "balance",
  },
  {
    title: "Fixed Assets Management",
    description:
      "We categorize every fixed asset, record acquisition details, and configure depreciation schedules in your accounting system. Whether you have 10 assets or 250+, each one is tracked and accounted for correctly.",
    color: "secondary",
    icon: "asset",
  },
  {
    title: "Inventory & Product Setup",
    description:
      "We configure your inventory management so you can track stock levels, monitor cost of goods, and manage product quantities with confidence. Your inventory data goes in clean and structured — ready for daily operations.",
    color: "primary",
    icon: "inventory",
  },
  {
    title: "Accounts Payable & Receivable Setup",
    description:
      "We organize all outstanding bills (AP) and invoices (AR) with complete vendor and customer records. The result: a clear view of what you owe and what is owed to you, so you can manage cash flow from the start.",
    color: "accent",
    icon: "transfer",
  },
  {
    title: "Training & Ongoing Support",
    description:
      "Setup is only valuable if your team knows how to use it. We walk you through transaction entry, bank reconciliation, and report generation — then provide 3 months of post-setup support so you are never stuck.",
    color: "secondary",
    icon: "training",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & assessment",
    description:
      "We review your current financial records, understand your business structure, and scope out exactly what data needs to be migrated into your new system.",
    color: "primary",
  },
  {
    step: "02",
    title: "Data collection",
    description:
      "We collect your bank statements, invoices, asset registers, inventory records, and vendor/customer lists — everything needed to build an accurate starting point.",
    color: "accent",
  },
  {
    step: "03",
    title: "System configuration & migration",
    description:
      "We configure your accounting application with a customized chart of accounts, import all data, set up modules, and verify every opening balance for accuracy.",
    color: "secondary",
  },
  {
    step: "04",
    title: "Verification & team training",
    description:
      "We run trial balance reports, verify all figures against source records, and train your team on daily workflows. Includes 3 months of post-setup consultation support.",
    color: "primary",
  },
];

const faqItems = [
  {
    question: "What accounting software do you set up?",
    answer:
      "We work with popular accounting applications used in Indonesia including Jurnal.id, Accurate, Xero, QuickBooks, and others. We tailor the setup to your specific platform so your chart of accounts, modules, and workflows match how your business operates.",
  },
  {
    question: "How long does the accounting setup take?",
    answer:
      "A straightforward setup with under 50 items can be completed in 3 to 5 business days. More complex data migrations with 100+ items typically take 1 to 2 weeks. We provide a clear timeline estimate during the initial discovery phase so there are no surprises.",
  },
  {
    question: "I am starting a new business with no existing data — can you still help?",
    answer:
      "Yes. For new businesses, we configure your chart of accounts and accounting application from scratch so you are ready to record transactions from day one. Package A is designed exactly for this scenario — no prior data needed.",
  },
  {
    question: "Do I need to provide all my data at once?",
    answer:
      "Ideally, yes — having everything upfront allows us to complete the setup efficiently and ensure accurate opening balances. However, we can work in phases if needed, prioritizing the most critical data first.",
  },
  {
    question: "What happens after the setup is complete?",
    answer:
      "All packages include 3 months of consultation support. During this period, you can reach out for guidance on accounting treatment, transaction entry, or software usage. Many clients transition to our monthly bookkeeping service after this period for ongoing support.",
  },
  {
    question: "Can you migrate data from my old accounting system or spreadsheets?",
    answer:
      "Yes. We regularly migrate data from spreadsheets, legacy accounting software, and other platforms into modern accounting applications. Every data point is verified against your source records to ensure nothing is lost or miscategorized.",
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
  name: "Accounting Setup Services in Bali",
  description:
    "Professional accounting system setup for businesses in Bali. Chart of accounts configuration, opening balance verification, fixed assets, inventory management, AP/AR setup, and data migration into your accounting application.",
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
                <p className="badge-pill">Accounting Setup</p>
                <SplitTextHeading
                  text="Your Books, Set Up Right From Day One"
                  as="h1"
                  className="text-4xl font-bold tracking-tight text-[color:var(--color-slate-dark)]"
                />
                <p className="section-subtitle">
                  Starting a business or moving to a new accounting system? We
                  handle the entire setup — chart of accounts, opening balances,
                  fixed assets, inventory, and AP/AR — so your financial records
                  are accurate and ready for operations from the start.
                  Stop guessing. Start with numbers you can trust.
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
                  What gets set up
                </h2>
                <ul className="mt-4 space-y-3 text-sm text-[color:var(--color-slate-light)] relative z-10">
                  {[
                    { text: "Chart of Accounts built for your business", color: "primary" },
                    { text: "Opening balances verified for accuracy", color: "accent" },
                    { text: "Fixed assets with depreciation schedules", color: "secondary" },
                    { text: "Inventory & product catalog configured", color: "primary" },
                    { text: "Accounts payable & receivable organized", color: "accent" },
                    { text: "Team training + 3 months support included", color: "secondary" },
                  ].map((item) => (
                    <li key={item.text} className="stagger-item flex items-center gap-3 group">
                      <span className={`check-glow ${colorClasses[item.color as ColorKey].bg} ${colorClasses[item.color as ColorKey].text}`}>
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
              <h2 className="section-title">Everything your accounting system needs</h2>
              <p className="section-subtitle mt-3 max-w-2xl mx-auto">
                Every component of your accounting system is configured with
                precision — from your chart of accounts to your last inventory
                item — so your financial data is reliable from the first
                transaction.
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
                  className={`icon-glow ${colorClasses[service.color as ColorKey].bg} ${colorClasses[service.color as ColorKey].text} mb-4 relative z-10`}
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
                  className={`mt-4 h-[2px] w-0 rounded-full bg-gradient-to-r ${colorClasses[service.color as ColorKey].from} ${colorClasses[service.color as ColorKey].to} group-hover:w-16 transition-all duration-500`}
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
              <h2 className="section-title">How your accounting setup works</h2>
            </div>
            <StaggerGroup className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((item) => (
                <div key={item.title} className={`group card-glow card-glow-${item.color} stagger-item p-6 relative overflow-hidden`}>
                  <span className={`step-number ${colorClasses[item.color as ColorKey].text}`}>{item.step}</span>
                  <div className={`icon-glow ${colorClasses[item.color as ColorKey].bg} ${colorClasses[item.color as ColorKey].text} mb-4 relative z-10`}>
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
                  <div className={`mt-4 h-[2px] w-0 rounded-full bg-gradient-to-r ${colorClasses[item.color as ColorKey].from} ${colorClasses[item.color as ColorKey].to} group-hover:w-16 transition-all duration-500`} />
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
                    text="Accounting setup packages"
                    as="h2"
                    className="text-2xl font-semibold"
                  />
                  <p className="mt-3 text-sm text-[color:var(--color-slate-light)]">
                    One-time setup fee based on the volume and complexity of your
                    data. All packages include 3 months of post-setup
                    consultation support and team training.
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
                        "Fixed Assets (100–250 items)",
                        "Inventory (100–250 items)",
                        "Products & Services (100–250 items)",
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
                          ${colorClasses[tier.color as ColorKey].fromTransparent} ${colorClasses[tier.color as ColorKey].viaMid} ${colorClasses[tier.color as ColorKey].toTransparent} 
                          ${tier.popular ? "opacity-100" : "opacity-0 group-hover:opacity-100"} transition-opacity duration-500 blur-[1px]`} />
                      <div className={`relative card-glow card-glow-${tier.color} p-5 h-full flex flex-col`}>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-[color:var(--color-slate-dark)]">{tier.name}</span>
                          {tier.popular && (
                            <span className="badge-gradient text-[10px]">Popular</span>
                          )}
                        </div>
                        <p className={`mt-2 text-xl font-bold ${colorClasses[tier.color as ColorKey].textDark}`}>
                          {tier.price}
                        </p>
                        <p className="text-xs text-[color:var(--color-slate-light)]">one-time</p>
                        <ul className="mt-3 space-y-2 text-xs text-[color:var(--color-slate-light)] flex-1">
                          {tier.features.map((f) => (
                            <li key={f} className="flex items-center gap-2">
                              <span className={`w-1.5 h-1.5 rounded-full ${colorClasses[tier.color as ColorKey].bgSolid} flex-shrink-0`} />
                              {f}
                            </li>
                          ))}
                        </ul>
                        <div className={`mt-4 h-[2px] w-0 rounded-full bg-gradient-to-r ${colorClasses[tier.color as ColorKey].from} ${colorClasses[tier.color as ColorKey].to} group-hover:w-full transition-all duration-500`} />
                      </div>
                    </div>
                  ))}
                </StaggerGroup>
                <p className="mt-4 text-xs text-[color:var(--color-slate-light)] text-center">
                  We migrate your existing data into your accounting application and verify all opening balances.
                  Every package includes team training and 3 months of consultation support after setup.
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
              <h2 className="section-title">Accounting setup FAQs</h2>
            </div>
          </Reveal>
          <div className="mt-6 grid gap-4 max-w-3xl mx-auto">
            {faqItems.map((item, index) => {
              const colors = ['primary', 'accent', 'secondary'];
              const color = colors[index % colors.length] as ColorKey;
              return (
                <Reveal key={item.question}>
                  <details className="faq-glow group bg-white/80 backdrop-blur-sm">
                    <div className="faq-glow-bg" />
                    <summary className="relative flex items-center justify-between p-6 cursor-pointer list-none">
                      <span className="text-sm font-semibold pr-4">{item.question}</span>
                      <span className={`w-8 h-8 rounded-full ${colorClasses[color].bg} flex items-center justify-center ${colorClasses[color].text} transition-all duration-300 flex-shrink-0`}>
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
                      <div className={`mt-4 h-[2px] w-16 rounded-full bg-gradient-to-r ${colorClasses[color].from} ${colorClasses[color].to}`} />
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
                      text="Ready to get your accounting system set up?"
                      as="h2"
                      className="text-2xl font-semibold"
                    />
                    <p className="mt-3 text-sm text-[color:var(--color-slate-light)]">
                      Book a free consultation. We will review your data,
                      recommend the right package, and give you a clear timeline
                      — so you know exactly what to expect before we start.
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
