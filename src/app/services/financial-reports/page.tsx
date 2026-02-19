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
  title: "Financial Reports for Bali Businesses | P&L, Balance Sheet & Cash Flow",
  description:
    "Professional financial reporting for SMEs and expats in Bali. Profit & Loss statements, balance sheets, cash flow reports, and compliance-ready financials prepared by experienced accountants.",
  alternates: { canonical: "/services/financial-reports" },
};

const reportTypes = [
  {
    title: "Profit & Loss Statement",
    description:
      "Detailed income and expense breakdown showing your business performance over a specific period. Track revenue trends, cost of goods, operating expenses, and net profit.",
    color: "primary",
    icon: "trending",
  },
  {
    title: "Balance Sheet",
    description:
      "A snapshot of your company's financial position — assets, liabilities, and equity — at any given point. Essential for investors, banks, and compliance.",
    color: "accent",
    icon: "scale",
  },
  {
    title: "Cash Flow Statement",
    description:
      "Track how cash moves in and out of your business across operating, investing, and financing activities. Understand your liquidity and plan ahead.",
    color: "secondary",
    icon: "flow",
  },
  {
    title: "General Ledger & Trial Balance",
    description:
      "Complete record of all financial transactions organized by account. The foundation for accurate reporting and audit readiness.",
    color: "primary",
    icon: "ledger",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Data collection",
    description:
      "We gather your transaction records, bank statements, invoices, and receipts for the reporting period.",
    color: "primary",
  },
  {
    step: "02",
    title: "Reconciliation & review",
    description:
      "Every transaction is verified, categorized, and reconciled against your bank statements to ensure accuracy.",
    color: "accent",
  },
  {
    step: "03",
    title: "Report preparation",
    description:
      "Financial statements are prepared following Indonesian accounting standards (SAK) and formatted for clarity.",
    color: "secondary",
  },
  {
    step: "04",
    title: "Delivery & consultation",
    description:
      "Reports are delivered with a brief consultation to walk you through the numbers and answer questions.",
    color: "primary",
  },
];

const faqItems = [
  {
    question: "How often will I receive financial reports?",
    answer:
      "Financial reports are delivered monthly as part of our bookkeeping service. We can also prepare quarterly and annual reports for tax filing, investor reporting, or internal planning purposes.",
  },
  {
    question: "Are the reports compliant with Indonesian standards?",
    answer:
      "Yes. All financial statements are prepared following SAK (Standar Akuntansi Keuangan) and are formatted to meet the requirements of the Indonesian tax authority (DJP), banks, and investors.",
  },
  {
    question: "Can I get reports in both Indonesian and English?",
    answer:
      "Absolutely. We routinely prepare bilingual reports for businesses with foreign ownership or international stakeholders. Both versions maintain the same level of detail and accuracy.",
  },
  {
    question: "Do I need a bookkeeping service to get financial reports?",
    answer:
      "Financial reports are included as part of our monthly bookkeeping packages. If you manage your own bookkeeping, our Consultation & Report Review service can review and validate your financial statements.",
  },
  {
    question: "What format are the reports delivered in?",
    answer:
      "Reports are delivered as PDF documents and can also be exported from your accounting application. We use professional formatting that is easy to read and share with stakeholders.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services` },
    { "@type": "ListItem", position: 3, name: "Financial Reports", item: `${siteConfig.url}/services/financial-reports` },
  ],
};

const serviceSchema = generateServiceSchema({
  name: "Financial Reports",
  description:
    "Professional financial reporting for SMEs and expats in Bali. Profit & Loss, balance sheet, cash flow, and compliance-ready financials.",
  url: `${siteConfig.url}/services/financial-reports`,
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function FinancialReportsPage() {
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
                <p className="badge-pill">Financial Reports</p>
                <SplitTextHeading
                  text="Clear, Accurate Financial Reports for Your Business"
                  as="h1"
                  className="text-4xl font-bold tracking-tight text-[color:var(--color-slate-dark)]"
                />
                <p className="section-subtitle">
                  From monthly P&L statements to annual balance sheets, we
                  prepare compliance-ready financial reports that give you a
                  clear picture of your business performance. Designed for Bali
                  SMEs, expat-owned companies, and growing enterprises.
                </p>
                <p className="text-sm font-medium text-[color:var(--color-primary)]">
                  Included with bookkeeping packages
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
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[color:var(--color-accent)]/20 rounded-full blur-3xl pointer-events-none" />
                <h2 className="text-lg font-semibold relative z-10">
                  Reports we deliver
                </h2>
                <ul className="mt-4 space-y-3 text-sm text-[color:var(--color-slate-light)] relative z-10">
                  {[
                    { text: "Profit & Loss (Income Statement)", color: "primary" },
                    { text: "Balance Sheet (Statement of Financial Position)", color: "accent" },
                    { text: "Cash Flow Statement", color: "secondary" },
                    { text: "General Ledger & Trial Balance", color: "primary" },
                    { text: "Accounts Receivable & Payable Aging", color: "accent" },
                    { text: "Custom management reports", color: "secondary" },
                  ].map((item) => (
                    <li
                      key={item.text}
                      className="stagger-item flex items-center gap-3 group"
                    >
                      <span
                        className={`check-glow ${colorClasses[item.color as ColorKey].bg} ${colorClasses[item.color as ColorKey].text}`}
                      >
                        <svg
                          className="w-3.5 h-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                        >
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

      {/* Report Types */}
      <section className="section-space bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-[color:var(--color-primary)]/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-[color:var(--color-accent)]/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="container-grid relative z-10">
          <Reveal>
            <div className="text-center mb-8">
              <p className="badge-gradient inline-flex mb-3">Report types</p>
              <h2 className="section-title">
                Financial statements we prepare
              </h2>
              <p className="section-subtitle mt-3 max-w-2xl mx-auto">
                Each report is prepared with accuracy and formatted for
                readability — whether you need them for internal decisions, tax
                filing, or investor presentations.
              </p>
            </div>
          </Reveal>
          <StaggerGroup className="grid gap-6 md:grid-cols-2">
            {reportTypes.map((report) => (
              <div
                key={report.title}
                className={`group card-glow card-glow-${report.color} stagger-item p-6 relative overflow-hidden`}
              >
                <div
                  className={`icon-glow ${colorClasses[report.color as ColorKey].bg} ${colorClasses[report.color as ColorKey].text} mb-4 relative z-10`}
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    {report.icon === "trending" && (
                      <path
                        d="M23 6l-9.5 9.5-5-5L1 18M23 6h-6M23 6v6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    )}
                    {report.icon === "scale" && (
                      <>
                        <path
                          d="M12 3v18M3 7l9-4 9 4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3 7l3 9h0a5 5 0 0 0 0-9zM21 7l-3 9h0a5 5 0 0 1 0-9z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </>
                    )}
                    {report.icon === "flow" && (
                      <path
                        d="M12 2v20M2 12h20M7 7l5-5 5 5M17 17l-5 5-5-5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    )}
                    {report.icon === "ledger" && (
                      <>
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M7 7h10M7 12h10M7 17h6"
                          strokeLinecap="round"
                        />
                      </>
                    )}
                  </svg>
                </div>
                <h3 className="text-base font-semibold relative z-10">
                  {report.title}
                </h3>
                <p className="mt-2 text-sm text-[color:var(--color-slate-light)] relative z-10">
                  {report.description}
                </p>
                <div
                  className={`mt-4 h-[2px] w-0 rounded-full bg-gradient-to-r ${colorClasses[report.color as ColorKey].from} ${colorClasses[report.color as ColorKey].to} group-hover:w-16 transition-all duration-500`}
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
              <p className="badge-gradient inline-flex mb-3">Our process</p>
              <h2 className="section-title">How we prepare your reports</h2>
            </div>
          </Reveal>
          <StaggerGroup className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item) => (
              <div
                key={item.step}
                className={`group card-glow card-glow-${item.color} stagger-item p-6 relative overflow-hidden`}
              >
                <span className={`step-number ${colorClasses[item.color as ColorKey].text}`}>
                  {item.step}
                </span>
                <div
                  className={`icon-glow ${colorClasses[item.color as ColorKey].bg} ${colorClasses[item.color as ColorKey].text} mb-4 relative z-10`}
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    {item.step === "01" && (
                      <>
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </>
                    )}
                    {item.step === "02" && (
                      <>
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </>
                    )}
                    {item.step === "03" && (
                      <>
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                      </>
                    )}
                    {item.step === "04" && (
                      <>
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7A8.38 8.38 0 0 1 4 11.5a8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                      </>
                    )}
                  </svg>
                </div>
                <h3 className="text-base font-semibold relative z-10">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[color:var(--color-slate-light)] relative z-10">
                  {item.description}
                </p>
                <div
                  className={`mt-4 h-[2px] w-0 rounded-full bg-gradient-to-r ${colorClasses[item.color as ColorKey].from} ${colorClasses[item.color as ColorKey].to} group-hover:w-16 transition-all duration-500`}
                />
              </div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Pricing note */}
      <section className="section-space relative overflow-hidden">
        <div className="container-grid relative z-10">
          <MaskReveal className="relative rounded-3xl overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-[color:var(--color-primary)]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[color:var(--color-accent)]/10 rounded-full blur-3xl" />
            <Reveal>
              <div className="relative card-glass border border-white/50 rounded-3xl p-8 backdrop-blur-xl">
                <div className="text-center max-w-2xl mx-auto">
                  <p className="badge-gradient inline-flex mb-3">Pricing</p>
                  <SplitTextHeading
                    text="Included with bookkeeping"
                    as="h2"
                    className="text-2xl font-semibold"
                  />
                  <p className="mt-3 text-sm text-[color:var(--color-slate-light)]">
                    Financial reports are included as part of all monthly
                    bookkeeping packages. Each package delivers monthly financial
                    statements as the final output — no additional cost for
                    standard reports.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-4 justify-center">
                    <Link href="/services/bookkeeping" className="btn-primary">
                      View Bookkeeping Packages
                    </Link>
                    <Link href={primaryCta.href} className="btn-secondary">
                      {primaryCta.label}
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </MaskReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-space bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[color:var(--color-neutral-50)] to-[color:var(--color-neutral-100)]" />
        <div className="container-grid relative z-10">
          <Reveal>
            <div className="text-center mb-8">
              <p className="badge-gradient inline-flex mb-3">FAQ</p>
              <h2 className="section-title">Financial Reports FAQs</h2>
            </div>
          </Reveal>
          <div className="mt-6 grid gap-4 max-w-3xl mx-auto">
            {faqItems.map((item, index) => {
              const colors = ["primary", "accent", "secondary"];
              const color = colors[index % colors.length] as ColorKey;
              return (
                <Reveal key={item.question}>
                  <details className="faq-glow group bg-white/80 backdrop-blur-sm">
                    <div className="faq-glow-bg" />
                    <summary className="relative flex items-center justify-between p-6 cursor-pointer list-none">
                      <span className="text-sm font-semibold pr-4">
                        {item.question}
                      </span>
                      <span
                        className={`w-8 h-8 rounded-full ${colorClasses[color].bg} flex items-center justify-center ${colorClasses[color].text} transition-all duration-300 flex-shrink-0`}
                      >
                        <svg
                          className="w-4 h-4 transition-transform duration-300 group-open:rotate-45"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </span>
                    </summary>
                    <div className="relative px-6 pb-6">
                      <p className="text-sm text-[color:var(--color-slate-light)]">
                        {item.answer}
                      </p>
                      <div
                        className={`mt-4 h-[2px] w-16 rounded-full bg-gradient-to-r ${colorClasses[color].from} ${colorClasses[color].to}`}
                      />
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
              <div className="relative card-glass border border-white/60 rounded-3xl p-8 lg:p-10 backdrop-blur-xl">
                <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                  <div>
                    <p className="badge-gradient inline-flex mb-3">
                      Get started
                    </p>
                    <SplitTextHeading
                      text="Need reliable financial reports?"
                      as="h2"
                      className="text-2xl font-semibold"
                    />
                    <p className="mt-3 text-sm text-[color:var(--color-slate-light)]">
                      Book a free consultation and we will discuss your reporting
                      needs, compliance requirements, and recommend the right
                      bookkeeping package for your business.
                    </p>
                    <div className="mt-4 glow-bar glow-bar-md" />
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={primaryCta.href}
                      className="btn-primary shimmer"
                    >
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
