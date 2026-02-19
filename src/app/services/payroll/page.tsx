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
  title: "Payroll Services in Bali for SMEs & Expat Businesses",
  description:
    "Complete payroll management for Bali businesses. Salary processing, BPJS registration, PPh 21 withholding, and employee tax reporting. English-speaking support.",
  alternates: { canonical: "/services/payroll" },
};

const faqItems = [
  {
    question: "What is included in your payroll service?",
    answer:
      "We handle monthly salary calculations, PPh 21 withholding and reporting, BPJS Ketenagakerjaan and Kesehatan contributions, payslip generation, and annual employee tax reconciliation (1721-A1).",
  },
  {
    question: "Do you handle BPJS registration for new employees?",
    answer:
      "Yes. We manage BPJS Ketenagakerjaan and BPJS Kesehatan registration for new employees, as well as updates for changes in salary or employment status.",
  },
  {
    question: "How do you calculate PPh 21 for employees?",
    answer:
      "We apply the current progressive tax rates (5% to 35%) based on each employee's taxable income (PKP) after deducting PTKP allowances. We also account for non-regular income such as bonuses and THR.",
  },
  {
    question: "Can you handle payroll for foreign employees?",
    answer:
      "Yes. We manage payroll for both local and foreign employees, including PPh 21 or PPh 26 calculations, KITAS-related tax obligations, and reporting in English.",
  },
  {
    question: "When do you deliver monthly payroll reports?",
    answer:
      "We deliver payroll reports, payslips, and tax withholding summaries by the 25th of each month, giving you time to review before salary disbursement.",
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
      name: "Payroll",
      item: `${siteConfig.url}/services/payroll`,
    },
  ],
};

const serviceSchema = generateServiceSchema({
  name: "Payroll Services",
  description:
    "Complete payroll management for businesses in Bali including salary processing, BPJS, PPh 21 withholding, and employee tax reporting.",
  url: `${siteConfig.url}/services/payroll`,
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

export default function PayrollPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      <section className="section-space">
        <div className="container-grid">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-5">
                <p className="badge-pill">Payroll</p>
                <SplitTextHeading
                  text="Payroll Services for Bali Businesses"
                  as="h1"
                  className="text-4xl font-bold tracking-tight text-[color:var(--color-slate-dark)]"
                />
                <p className="section-subtitle">
                  Employee salary processing, PPh 21 withholding, BPJS
                  contributions, and monthly payroll reporting. We handle the
                  complexity so you can focus on your team.
                </p>
                <p className="text-sm font-medium text-[color:var(--color-primary)]">
                  Pricing based on consultation
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
                  What&apos;s included
                </h2>
                <ul className="mt-4 space-y-3 text-sm text-[color:var(--color-slate-light)] relative z-10">
                  {[
                    { text: "Monthly salary calculation & payslip generation", color: "primary" },
                    { text: "PPh 21 withholding, payment & reporting", color: "accent" },
                    { text: "BPJS Ketenagakerjaan & Kesehatan management", color: "secondary" },
                    { text: "THR & bonus tax calculations", color: "primary" },
                    { text: "Annual 1721-A1 reconciliation & Bukti Potong", color: "accent" },
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

      <section className="section-space bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-[color:var(--color-primary)]/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-[color:var(--color-accent)]/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="container-grid relative z-10">
          <Reveal>
            <div className="text-center mb-8">
              <p className="badge-gradient inline-flex mb-3">Our process</p>
              <h2 className="section-title">How payroll works with us</h2>
            </div>
            <StaggerGroup className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Setup & employee data",
                  desc: "We collect employee contracts, salary structures, BPJS details, and PTKP status for each team member.",
                  color: "primary",
                  step: "01",
                },
                {
                  title: "Monthly processing",
                  desc: "Every month we calculate salaries, deductions, PPh 21 withholding, and BPJS contributions. Payslips delivered by the 25th.",
                  color: "accent",
                  step: "02",
                },
                {
                  title: "Filing & reporting",
                  desc: "We file PPh 21 monthly returns, manage BPJS payments, and handle the annual reconciliation with Bukti Potong issuance.",
                  color: "secondary",
                  step: "03",
                },
              ].map((item) => (
                <div key={item.title} className={`group card-glow card-glow-${item.color} stagger-item p-6 relative overflow-hidden`}>
                  <span className={`step-number ${colorClasses[item.color as ColorKey].text}`}>{item.step}</span>
                  <div className={`icon-glow ${colorClasses[item.color as ColorKey].bg} ${colorClasses[item.color as ColorKey].text} mb-4 relative z-10`}>
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      {item.step === "01" && <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>}
                      {item.step === "02" && <><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></>}
                      {item.step === "03" && <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></>}
                    </svg>
                  </div>
                  <h3 className="text-base font-semibold relative z-10">{item.title}</h3>
                  <p className="mt-2 text-sm text-[color:var(--color-slate-light)] relative z-10">
                    {item.desc}
                  </p>
                  <div className={`mt-4 h-[2px] w-0 rounded-full bg-gradient-to-r ${colorClasses[item.color as ColorKey].from} ${colorClasses[item.color as ColorKey].to} group-hover:w-16 transition-all duration-500`} />
                </div>
              ))}
            </StaggerGroup>
          </Reveal>
        </div>
      </section>

      <section className="section-space relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[color:var(--color-primary)]/5 rounded-full blur-3xl" />
        <div className="container-grid relative z-10">
          <Reveal>
            <div className="card-glow card-glow-primary grid gap-8 p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[color:var(--color-accent)]/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <p className="badge-gradient inline-flex mb-3">Compliance</p>
                <h2 className="text-2xl font-semibold">BPJS and employee obligations</h2>
                <p className="mt-3 text-sm text-[color:var(--color-slate-light)]">
                  Indonesian labor law requires employers to register all
                  employees for BPJS Ketenagakerjaan (social security) and BPJS
                  Kesehatan (health insurance). We manage registration, monthly
                  contributions, and reporting to keep your business compliant.
                </p>
                <div className="mt-4 glow-bar glow-bar-md" />
              </div>
              <StaggerGroup className="grid gap-3 relative z-10">
                {[
                  { text: "BPJS Ketenagakerjaan: JKK, JKM, JHT, JP contributions", color: "primary" },
                  { text: "BPJS Kesehatan: employer and employee shares", color: "accent" },
                  { text: "New employee registration and status changes", color: "secondary" },
                ].map((item) => (
                  <div
                    key={item.text}
                    className={`group card-glow card-glow-${item.color} stagger-item flex items-center gap-4 p-4`}
                  >
                    <span className={`check-glow ${colorClasses[item.color as ColorKey].bg} ${colorClasses[item.color as ColorKey].text}`}>
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <p className="text-sm text-[color:var(--color-slate-light)]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </StaggerGroup>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[color:var(--color-neutral-50)] to-[color:var(--color-neutral-100)]" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[color:var(--color-primary)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[color:var(--color-accent)]/5 rounded-full blur-3xl" />
        <div className="container-grid relative z-10">
          <Reveal>
            <div className="text-center mb-8">
              <p className="badge-gradient inline-flex mb-3">FAQ</p>
              <h2 className="section-title">Payroll FAQs</h2>
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
                      text="Simplify your payroll today"
                      as="h2"
                      className="text-2xl font-semibold"
                    />
                    <p className="mt-3 text-sm text-[color:var(--color-slate-light)]">
                      Book a free consultation and we will review your current
                      payroll setup, employee structure, and compliance needs.
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
