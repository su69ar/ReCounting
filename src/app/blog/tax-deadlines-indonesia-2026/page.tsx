import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/animations/Reveal";
import { SplitTextHeading } from "@/components/animations/SplitTextHeading";
import { MaskReveal } from "@/components/animations/MaskReveal";
import { StaggerGroup } from "@/components/animations/StaggerGroup";
import { JsonLd } from "@/components/seo/JsonLd";
import { primaryCta, secondaryCta, siteConfig } from "@/lib/site";
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Indonesia Tax Deadlines 2026 | Monthly and Annual Filing Dates",
  description:
    "Indonesia tax deadlines 2026 for Bali SMEs, PT PMA companies, and finance teams. See the recurring due dates for PPh, PPN, and annual SPT filings plus practical planning notes for 2026.",
  alternates: { canonical: "/blog/tax-deadlines-indonesia-2026" },
};

const monthlyDeadlines = [
  {
    taxType: "PPh 21",
    paymentDeadline: "10th of the following month",
    filingDeadline: "20th of the following month",
    note: "Employee withholding tax.",
  },
  {
    taxType: "PPh 23 / 26",
    paymentDeadline: "10th of the following month",
    filingDeadline: "20th of the following month",
    note: "Common for service fees, royalties, and cross-border cases.",
  },
  {
    taxType: "PPh 25",
    paymentDeadline: "15th of the following month",
    filingDeadline: "20th of the following month",
    note: "Monthly corporate income-tax installment.",
  },
  {
    taxType: "PPh Final Article 4(2)",
    paymentDeadline: "15th of the following month",
    filingDeadline: "20th of the following month",
    note: "Applies when your regime or transaction type falls under final tax rules.",
  },
  {
    taxType: "PPN / VAT",
    paymentDeadline: "End of the following month",
    filingDeadline: "End of the following month",
    note: "Payment is made before or together with the monthly VAT return workflow.",
  },
];

const annualDeadlines = [
  {
    obligation: "Annual individual income-tax return",
    dueDate: "March 31, 2026",
    appliesTo: "Calendar-year individual taxpayers",
  },
  {
    obligation: "Annual corporate income-tax return",
    dueDate: "April 30, 2026",
    appliesTo: "Calendar-year corporate taxpayers",
  },
  {
    obligation: "Corporate annual-return extension notice",
    dueDate: "Before April 30, 2026",
    appliesTo: "Companies that need up to 2 extra months",
  },
];

const penaltyItems = [
  "Late filing of monthly SPT Masa other than VAT generally triggers an administrative penalty of Rp 100,000 per return.",
  "Late filing of monthly SPT Masa PPN generally triggers an administrative penalty of Rp 500,000 per return.",
  "Late filing of annual SPT Orang Pribadi generally triggers Rp 100,000.",
  "Late filing of annual SPT Badan generally triggers Rp 1,000,000.",
  "Late-payment interest is not a fixed number forever. DJP publishes administrative interest tariffs periodically, so check the current official rate for the relevant period.",
];

const faqItems = [
  {
    question: "What do people usually mean by Indonesia tax deadlines 2026?",
    answer:
      "In practice, they usually mean the recurring monthly PPh and PPN deadlines during 2026 plus the annual filing deadlines in March and April 2026 for tax year 2025, assuming a calendar-year taxpayer.",
  },
  {
    question: "Are monthly tax deadlines the same every month in 2026?",
    answer:
      "The recurring pattern is generally the same each month, but you should still check for public-holiday shifts, technical announcements, and system-specific updates before filing.",
  },
  {
    question: "When is annual corporate SPT due in 2026?",
    answer:
      "For calendar-year companies, annual corporate SPT is generally due by April 30, 2026 because the rule is four months after the end of the tax year.",
  },
  {
    question: "Can a company request more time to file annual SPT in 2026?",
    answer:
      "Yes. Corporate taxpayers can submit a notification for an extension of up to two months, but supporting documents and estimated tax payment requirements still need to be handled before the original deadline.",
  },
  {
    question: "Should I rely only on this article for filing decisions?",
    answer:
      "No. Use this page as a planning guide, then verify the latest official DJP announcements, especially if your filing month includes a holiday, a system transition, or a special relief policy.",
  },
];

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: siteConfig.url },
  { name: "Blog", url: `${siteConfig.url}/blog` },
  {
    name: "Indonesia Tax Deadlines 2026",
    url: `${siteConfig.url}/blog/tax-deadlines-indonesia-2026`,
  },
]);

const articleSchema = generateArticleSchema({
  title: "Indonesia Tax Deadlines 2026 | Monthly and Annual Filing Dates",
  description:
    "Indonesia tax deadlines 2026 for Bali SMEs, PT PMA companies, and finance teams. A practical guide to recurring PPh, PPN, and annual SPT filing dates.",
  url: `${siteConfig.url}/blog/tax-deadlines-indonesia-2026`,
  datePublished: "2026-03-17",
  dateModified: "2026-03-17",
});

const faqSchema = generateFAQSchema(faqItems);

export default function TaxDeadlines2026Page() {
  return (
    <article>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />

      <section className="section-space">
        <div className="container-grid">
          <Reveal>
            <div className="max-w-3xl space-y-4 relative">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-[color:var(--color-accent)]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[color:var(--color-secondary)]/10 rounded-full blur-3xl pointer-events-none" />
              <p className="badge-pill">2026 Tax Calendar</p>
              <SplitTextHeading
                text="Indonesia tax deadlines 2026 for Bali businesses and finance teams"
                as="h1"
                className="text-4xl font-bold tracking-tight text-[color:var(--color-slate-dark)]"
              />
              <p className="section-subtitle">
                A practical 2026 guide to recurring PPh and PPN deadlines plus annual
                SPT filing dates. Built for Bali SMEs, PT PMA companies, and operators
                who need a cleaner tax calendar.
              </p>
              <div className="flex items-center gap-4 text-xs text-[color:var(--color-slate-light)]">
                <time dateTime="2026-03-17">March 17, 2026</time>
                <span>·</span>
                <span>9 min read</span>
              </div>
              <div className="glow-bar glow-bar-md" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space">
        <div className="container-grid">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <Reveal>
              <div className="space-y-8 text-sm text-[color:var(--color-slate-light)]">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)]">
                    What this 2026 deadline guide actually covers
                  </h2>
                  <p>
                    When owners search for Indonesia tax deadlines 2026, they are usually
                    trying to manage two things at once: the recurring monthly filing cycle
                    during 2026 and the annual filing season in March and April 2026 for tax
                    year 2025.
                  </p>
                  <p>
                    For business teams using a calendar-year tax period, the main annual dates
                    are straightforward. Individual annual returns are generally due within
                    three months after year-end, while corporate annual returns are due within
                    four months after year-end. That means March 31, 2026 for individuals and
                    April 30, 2026 for companies, unless a specific administrative change is
                    announced.
                  </p>
                  <p>
                    The recurring monthly cycle is equally important because late monthly work
                    creates a backlog that makes annual filing harder. If your bookkeeping,
                    payments, and reporting are not aligned by month, annual SPT season becomes
                    a clean-up project instead of a filing project.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)]">
                    Monthly tax deadlines for 2026
                  </h2>
                  <p>
                    The table below is the recurring pattern most Bali SMEs and PT PMA finance
                    teams work from. It gives you a stable monthly framework for planning, even
                    though you should still check official announcements for holiday shifts and
                    system updates.
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="border-b border-[color:var(--color-neutral-200)]">
                          <th className="py-3 pr-4 text-left font-semibold text-[color:var(--color-slate-dark)]">
                            Tax type
                          </th>
                          <th className="py-3 px-4 text-left font-semibold text-[color:var(--color-slate-dark)]">
                            Payment deadline
                          </th>
                          <th className="py-3 px-4 text-left font-semibold text-[color:var(--color-slate-dark)]">
                            Filing deadline
                          </th>
                          <th className="py-3 pl-4 text-left font-semibold text-[color:var(--color-slate-dark)]">
                            Notes
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {monthlyDeadlines.map((item) => (
                          <tr
                            key={item.taxType}
                            className="border-b border-[color:var(--color-neutral-100)]"
                          >
                            <td className="py-3 pr-4 font-medium text-[color:var(--color-slate-dark)]">
                              {item.taxType}
                            </td>
                            <td className="py-3 px-4">{item.paymentDeadline}</td>
                            <td className="py-3 px-4">{item.filingDeadline}</td>
                            <td className="py-3 pl-4">{item.note}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p>
                    If your business relies on monthly admin staff or part-time finance support,
                    this is the section to turn into calendar reminders. Do not wait until the
                    filing week to request missing invoices, payroll data, or withholding
                    evidence. The better pattern is to prepare records in the first week after
                    month-end, then move into payment and filing.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)]">
                    Annual filing deadlines in 2026
                  </h2>
                  <p>
                    The annual-return season is where many businesses slip because they assume
                    the monthly work was enough. In reality, annual SPT filing usually requires
                    cleaner reconciliations, complete financial statements, and a final review
                    of taxes already paid through the year.
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="border-b border-[color:var(--color-neutral-200)]">
                          <th className="py-3 pr-4 text-left font-semibold text-[color:var(--color-slate-dark)]">
                            Obligation
                          </th>
                          <th className="py-3 px-4 text-left font-semibold text-[color:var(--color-slate-dark)]">
                            Due date
                          </th>
                          <th className="py-3 pl-4 text-left font-semibold text-[color:var(--color-slate-dark)]">
                            Applies to
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {annualDeadlines.map((item) => (
                          <tr
                            key={item.obligation}
                            className="border-b border-[color:var(--color-neutral-100)]"
                          >
                            <td className="py-3 pr-4 font-medium text-[color:var(--color-slate-dark)]">
                              {item.obligation}
                            </td>
                            <td className="py-3 px-4">{item.dueDate}</td>
                            <td className="py-3 pl-4">{item.appliesTo}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p>
                    DJP also announced that annual-return reporting for 2026 begins through
                    Coretax DJP from January 1, 2026. That makes early access setup and role
                    permissions part of deadline planning, not just a technical afterthought.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)]">
                    Penalties and risk points to watch
                  </h2>
                  <p>
                    Filing dates matter because Indonesian tax administration is structured
                    around automatic consequences. The easiest way to reduce penalty risk is
                    not to memorize every sanction, but to keep each monthly filing cycle clean
                    enough that deadlines stay routine.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    {penaltyItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p>
                    If your business is already late or unsure about prior filings, handle the
                    review before peak filing weeks. A short remediation review in January or
                    February is far cheaper than scrambling after a notice or discovering
                    mismatched balances during annual filing.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)]">
                    Should you prepare early for 2026 annual filing?
                  </h2>
                  <p>
                    Yes. The strongest way to handle Indonesia tax deadlines 2026 is to treat
                    annual filing as a preparation project, not a one-week event. That means
                    closing books earlier, reconciling monthly payments, checking Coretax access,
                    and deciding early whether a corporate extension might be needed.
                  </p>
                  <p>
                    If you want a practical filing-season checklist rather than a deadline list,
                    read our related guide:
                  </p>
                  <p>
                    <Link
                      href="/blog/tax-preparation-indonesia-2026"
                      className="text-[color:var(--color-primary)] hover:underline"
                    >
                      2026 Tax Preparation Checklist for Bali SMEs and PT PMA
                    </Link>
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <aside className="card-glow card-glow-accent p-6 lg:sticky lg:top-24 relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[color:var(--color-primary)]/20 rounded-full blur-3xl pointer-events-none" />
                <p className="badge-gradient inline-flex mb-3">2026 snapshot</p>
                <h3 className="text-lg font-semibold relative z-10">
                  Key dates to remember
                </h3>
                <StaggerGroup className="mt-4 space-y-3 text-sm text-[color:var(--color-slate-light)] relative z-10">
                  {[
                    "10th: common PPh withholding payments",
                    "15th: PPh 25 and common final-tax payments",
                    "20th: common monthly PPh filings",
                    "End of following month: PPN payment and filing",
                    "March 31, 2026: annual individual return",
                    "April 30, 2026: annual corporate return",
                  ].map((item) => (
                    <li key={item} className="stagger-item flex items-center gap-3 list-none">
                      <span className="check-glow bg-primary-500/10 text-primary-500">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </StaggerGroup>
                <div className="mt-6 glow-bar glow-bar-md" />
              </aside>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-space bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[color:var(--color-neutral-50)] to-[color:var(--color-neutral-100)]" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[color:var(--color-accent)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[color:var(--color-primary)]/5 rounded-full blur-3xl" />

        <div className="container-grid relative z-10">
          <Reveal>
            <div className="text-center mb-8">
              <p className="badge-gradient inline-flex mb-3">FAQ</p>
              <h2 className="section-title">2026 deadline questions</h2>
            </div>
          </Reveal>
          <div className="mt-6 grid gap-4 max-w-3xl mx-auto">
            {faqItems.map((item, index) => {
              const colors = ["primary", "accent", "secondary"];
              const color = colors[index % colors.length];
              return (
                <Reveal key={item.question}>
                  <details className="faq-glow group bg-white/80 backdrop-blur-sm">
                    <div className="faq-glow-bg" />
                    <summary className="relative flex items-center justify-between p-6 cursor-pointer list-none">
                      <span className="text-sm font-semibold pr-4">{item.question}</span>
                      <span
                        className={`w-8 h-8 rounded-full bg-${color}-500/10 flex items-center justify-center text-${color}-500 transition-all duration-300 flex-shrink-0`}
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
                      <p className="text-sm text-[color:var(--color-slate-light)]">{item.answer}</p>
                      <div className={`mt-4 h-[2px] w-16 rounded-full bg-gradient-to-r from-${color}-500 to-${color}-400`} />
                    </div>
                  </details>
                </Reveal>
              );
            })}
          </div>

          <Reveal>
            <div className="mt-12 relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-accent)]/10 via-[color:var(--color-primary)]/10 to-[color:var(--color-secondary)]/10" />
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[color:var(--color-accent)]/20 rounded-full blur-3xl animate-pulse-slow" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[color:var(--color-primary)]/20 rounded-full blur-3xl animate-pulse-slow-delayed" />
              </div>
              <MaskReveal className="relative">
                <div className="relative card-glass border border-white/60 rounded-3xl p-8 lg:p-10 backdrop-blur-xl">
                  <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                    <div>
                      <p className="badge-gradient inline-flex mb-3">Need a cleaner tax calendar?</p>
                      <SplitTextHeading
                        text="Build a 2026 compliance workflow before deadlines pile up"
                        as="h2"
                        className="text-2xl font-semibold"
                      />
                      <p className="mt-3 text-sm text-[color:var(--color-slate-light)]">
                        We help Bali SMEs and PT PMA companies align bookkeeping, tax records,
                        and filing timelines so 2026 reporting becomes predictable.
                      </p>
                      <div className="mt-4 glow-bar glow-bar-md" />
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Link href={primaryCta.href} className="btn-primary shimmer">
                        {primaryCta.label}
                      </Link>
                      <a href={secondaryCta.href} className="btn-secondary" target="_blank" rel="noreferrer">
                        {secondaryCta.label}
                      </a>
                    </div>
                  </div>
                </div>
              </MaskReveal>
            </div>
          </Reveal>
        </div>
      </section>
    </article>
  );
}
