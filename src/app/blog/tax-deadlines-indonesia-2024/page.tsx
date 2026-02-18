import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/animations/Reveal";
import { SplitTextHeading } from "@/components/animations/SplitTextHeading";
import { MaskReveal } from "@/components/animations/MaskReveal";
import { StaggerGroup } from "@/components/animations/StaggerGroup";
import { JsonLd } from "@/components/seo/JsonLd";
import { primaryCta, secondaryCta, siteConfig } from "@/lib/site";
import { generateArticleSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Indonesia Tax Deadlines 2024–2025 | Key Dates for Bali SMEs",
  description:
    "Complete guide to Indonesian tax deadlines for 2024–2025. Monthly PPh & PPN filing dates, annual SPT deadlines, penalties, and a printable compliance checklist for Bali businesses.",
  alternates: { canonical: "/blog/tax-deadlines-indonesia-2024" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: `${siteConfig.url}/blog`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Indonesia Tax Deadlines 2024–2025",
      item: `${siteConfig.url}/blog/tax-deadlines-indonesia-2024`,
    },
  ],
};

const articleSchema = generateArticleSchema({
  title: "Indonesia Tax Deadlines 2024–2025: Key Dates for Bali SMEs",
  description:
    "Complete guide to Indonesian tax deadlines for 2024–2025. Monthly PPh & PPN filing dates, annual SPT deadlines, penalties, and compliance checklist.",
  url: `${siteConfig.url}/blog/tax-deadlines-indonesia-2024`,
  datePublished: "2025-01-10",
  dateModified: "2025-02-15",
});

const faqItems = [
  {
    question: "What happens if I miss a monthly tax deadline in Indonesia?",
    answer:
      "Missing a monthly PPh filing deadline incurs an automatic penalty of Rp 100,000 per late report. Missing a PPN filing deadline costs Rp 500,000 per late report. Late tax payments also accrue interest at 2% per month on the unpaid amount, compounding until settled.",
  },
  {
    question: "Can I file for an extension on my annual SPT?",
    answer:
      "Yes, but only for the corporate SPT Tahunan. You can submit a notification of extension (pemberitahuan perpanjangan) to DJP before the April 30 deadline. Extensions can be granted for up to 2 months, but the estimated tax due must still be paid by the original deadline.",
  },
  {
    question: "Do I need to file monthly returns even if I have no revenue?",
    answer:
      "Yes. Even if your business had zero transactions in a given month, you are still required to file nil returns (SPT Nihil) for all applicable tax types. Failing to file nil returns triggers the same penalties as late filing.",
  },
  {
    question: "Which tax deadlines apply to small businesses under PPh Final?",
    answer:
      "Small businesses using the 0.5% PPh Final regime must pay the tax by the 15th of the following month and file SPT Masa PPh Final by the 20th. If you also have employees, PPh 21 filing and payment deadlines still apply separately.",
  },
  {
    question: "How do I track all these deadlines effectively?",
    answer:
      "Set up recurring calendar reminders for the 10th (payment), 15th (PPh Final payment), and 20th (filing) of each month. Add annual SPT deadlines in March and April. Better yet, work with an accounting firm that manages your compliance calendar proactively.",
  },
];

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

export default function TaxDeadlinesArticle() {
  return (
    <article>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero Section */}
      <section className="section-space">
        <div className="container-grid">
          <Reveal>
            <div className="max-w-3xl space-y-4 relative">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-[color:var(--color-accent)]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[color:var(--color-secondary)]/10 rounded-full blur-3xl pointer-events-none" />
              <p className="badge-pill">Tax Deadlines</p>
              <SplitTextHeading
                text="Indonesia Tax Deadlines 2024–2025: Don't Miss These Dates"
                as="h1"
                className="text-4xl font-bold tracking-tight text-[color:var(--color-slate-dark)]"
              />
              <p className="section-subtitle">
                A complete calendar of monthly and annual tax deadlines for
                businesses in Indonesia. Know when to pay, when to file, and
                what the penalties are for missing each one.
              </p>
              <div className="flex items-center gap-4 text-xs text-[color:var(--color-slate-light)]">
                <time dateTime="2025-01-10">January 10, 2025</time>
                <span>·</span>
                <span>Updated February 2025</span>
                <span>·</span>
                <span>7 min read</span>
              </div>
              <div className="glow-bar glow-bar-md" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Article Content + Sidebar */}
      <section className="section-space">
        <div className="container-grid">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            {/* Main Article Content */}
            <Reveal>
              <div className="space-y-8 text-sm text-[color:var(--color-slate-light)]">
                {/* Section 1 */}
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)]">
                    Why Tax Deadlines Matter in Indonesia
                  </h2>
                  <p>
                    Indonesia&apos;s tax system does not offer grace periods. When
                    a deadline passes, the penalty is automatic. There is no
                    warning letter, no courtesy call from DJP, and no discretion
                    from your local tax office. The system generates penalties
                    digitally, and they appear on your tax account immediately.
                  </p>
                  <p>
                    For Bali businesses, this is particularly dangerous because
                    most owners are juggling day-to-day operations. A missed
                    deadline that costs Rp 500,000 may not seem significant, but
                    multiply that by several tax types over several months, add
                    interest on unpaid amounts, and the total becomes substantial
                    quickly.
                  </p>
                  <p>
                    The good news: if you know the calendar and build reminders
                    into your workflow, compliance is straightforward. This guide
                    covers every deadline that matters for SMEs and expat-owned
                    businesses in Indonesia.
                  </p>
                </div>

                {/* Section 2 - Monthly Deadlines */}
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)]">
                    Monthly Tax Deadlines
                  </h2>
                  <p>
                    Every month, your business has two obligations for each
                    applicable tax type: <strong>payment</strong> and{" "}
                    <strong>reporting</strong>. Here is the monthly cycle:
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="border-b border-[color:var(--color-neutral-200)]">
                          <th className="py-3 pr-4 text-left font-semibold text-[color:var(--color-slate-dark)]">
                            Deadline
                          </th>
                          <th className="py-3 px-4 text-left font-semibold text-[color:var(--color-slate-dark)]">
                            Obligation
                          </th>
                          <th className="py-3 pl-4 text-left font-semibold text-[color:var(--color-slate-dark)]">
                            Penalty if Late
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["10th", "PPh 21 payment (employee withholding)", "2% interest/month"],
                          ["10th", "PPh 23 payment (service withholding)", "2% interest/month"],
                          ["15th", "PPh 25 installment payment", "2% interest/month"],
                          ["15th", "PPh Final payment (0.5% regime)", "2% interest/month"],
                          ["20th", "SPT Masa PPh 21 filing", "Rp 100,000"],
                          ["20th", "SPT Masa PPh 23 filing", "Rp 100,000"],
                          ["20th", "SPT Masa PPh 25 filing", "Rp 100,000"],
                          ["End of month", "PPN payment + SPT Masa PPN filing", "Rp 500,000"],
                        ].map((row) => (
                          <tr
                            key={`${row[0]}-${row[1]}`}
                            className="border-b border-[color:var(--color-neutral-100)]"
                          >
                            <td className="py-3 pr-4 font-medium text-[color:var(--color-slate-dark)]">
                              {row[0]}
                            </td>
                            <td className="py-3 px-4">{row[1]}</td>
                            <td className="py-3 pl-4">{row[2]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p>
                    Note: If the deadline falls on a weekend or public holiday, the
                    due date moves to the next business day. However, do not rely
                    on this — file early whenever possible.
                  </p>
                </div>

                {/* Section 3 - Annual Deadlines */}
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)]">
                    Annual Tax Deadlines
                  </h2>
                  <p>
                    The annual SPT (Surat Pemberitahuan Tahunan) is your
                    comprehensive year-end tax return. It reconciles all monthly
                    payments against your actual liability for the year.
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="border-b border-[color:var(--color-neutral-200)]">
                          <th className="py-3 pr-4 text-left font-semibold text-[color:var(--color-slate-dark)]">
                            Deadline
                          </th>
                          <th className="py-3 px-4 text-left font-semibold text-[color:var(--color-slate-dark)]">
                            Obligation
                          </th>
                          <th className="py-3 pl-4 text-left font-semibold text-[color:var(--color-slate-dark)]">
                            Who It Applies To
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["January 31", "Annual PPh 21 summary (Form 1721-A1)", "All employers"],
                          ["March 31", "SPT Tahunan PPh Orang Pribadi", "Individual taxpayers"],
                          ["April 30", "SPT Tahunan PPh Badan", "Corporate entities (PT, CV)"],
                          ["April 30", "Annual financial statements submission", "Corporate entities"],
                        ].map((row) => (
                          <tr
                            key={row[1]}
                            className="border-b border-[color:var(--color-neutral-100)]"
                          >
                            <td className="py-3 pr-4 font-medium text-[color:var(--color-slate-dark)]">
                              {row[0]}
                            </td>
                            <td className="py-3 px-4">{row[1]}</td>
                            <td className="py-3 pl-4">{row[2]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p>
                    <strong>Penalties for late annual filing:</strong> Rp 100,000
                    for individual SPT and Rp 1,000,000 for corporate SPT. If
                    additional tax is owed, interest of 2% per month accrues on
                    the unpaid balance.
                  </p>
                </div>

                {/* Section 4 */}
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)]">
                    Special Deadlines for PT PMA Companies
                  </h2>
                  <p>
                    Foreign-owned companies (PT PMA) in Bali have additional
                    reporting obligations beyond standard tax deadlines:
                  </p>
                  <p>
                    <strong>LKPM (Laporan Kegiatan Penanaman Modal)</strong> is
                    the investment activity report filed with BKPM (now part of
                    the Ministry of Investment). This quarterly report covers
                    your company&apos;s investment realization, employment data,
                    and production/revenue figures. Deadlines are the 10th of the
                    month following each quarter.
                  </p>
                  <p>
                    <strong>Transfer Pricing Documentation</strong> may be
                    required if your PT PMA conducts related-party transactions
                    with entities in other countries. This documentation must be
                    available by the time you file your annual SPT.
                  </p>
                  <p>
                    <strong>Country-by-Country Reporting</strong> applies to
                    multinational groups with consolidated revenues above a
                    certain threshold. While most Bali SMEs will not meet this
                    threshold, it is worth being aware of if your parent company
                    is part of a larger group.
                  </p>
                </div>

                {/* Section 5 */}
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)]">
                    Building Your Compliance Calendar
                  </h2>
                  <p>
                    The most effective approach is to build a recurring calendar
                    that covers every month of the year. Here is our recommended
                    setup:
                  </p>
                  <p>
                    <strong>Week 1 of each month (1st–10th):</strong> Calculate
                    and pay PPh 21 and PPh 23 for the previous month. Generate
                    payment codes through e-Billing and process payments through
                    your bank.
                  </p>
                  <p>
                    <strong>Week 2 (10th–15th):</strong> Pay PPh 25 installments
                    and PPh Final. Review PPN calculations and prepare e-Faktur
                    submissions.
                  </p>
                  <p>
                    <strong>Week 3 (15th–20th):</strong> File all SPT Masa
                    reports through DJP Online. Verify that all monthly
                    reportings are submitted and confirmed.
                  </p>
                  <p>
                    <strong>End of month:</strong> Complete PPN filing and
                    payment. Reconcile the month&apos;s tax payments against your
                    accounting records. Archive all documentation.
                  </p>
                  <p>
                    <strong>Quarterly (Q1, Q2, Q3, Q4):</strong> For PT PMA
                    companies, prepare and submit LKPM reports by the 10th of the
                    month following each quarter.
                  </p>
                  <p>
                    <strong>January–April annually:</strong> Prepare annual SPT
                    Tahunan. January for employee PPh 21 summaries, March for
                    individual returns, April for corporate returns and financial
                    statements.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Sidebar */}
            <Reveal>
              <aside className="card-glow card-glow-accent p-6 lg:sticky lg:top-24 relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[color:var(--color-primary)]/20 rounded-full blur-3xl pointer-events-none" />
                <p className="badge-gradient inline-flex mb-3">Monthly Reminders</p>
                <h3 className="text-lg font-semibold relative z-10">
                  Never-Miss Checklist
                </h3>
                <StaggerGroup className="mt-4 space-y-3 text-sm text-[color:var(--color-slate-light)] relative z-10">
                  {[
                    { text: "10th: Pay PPh 21 & PPh 23", color: "primary" },
                    { text: "15th: Pay PPh 25 & PPh Final", color: "accent" },
                    { text: "20th: File all SPT Masa PPh", color: "secondary" },
                    { text: "End of month: PPN payment & filing", color: "primary" },
                    { text: "Jan 31: Annual PPh 21 summary", color: "accent" },
                    { text: "Mar 31: Individual SPT Tahunan", color: "secondary" },
                    { text: "Apr 30: Corporate SPT Tahunan", color: "primary" },
                    { text: "Quarterly: LKPM for PT PMA", color: "accent" },
                  ].map((item) => (
                    <li key={item.text} className="stagger-item flex items-center gap-3 group list-none">
                      <span className={`check-glow bg-${item.color}-500/10 text-${item.color}-500`}>
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      {item.text}
                    </li>
                  ))}
                </StaggerGroup>
                <div className="mt-6 glow-bar glow-bar-md" />
              </aside>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ + CTA Section */}
      <section className="section-space bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[color:var(--color-neutral-50)] to-[color:var(--color-neutral-100)]" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[color:var(--color-accent)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[color:var(--color-primary)]/5 rounded-full blur-3xl" />

        <div className="container-grid relative z-10">
          {/* FAQ */}
          <Reveal>
            <div className="text-center mb-8">
              <p className="badge-gradient inline-flex mb-3">FAQ</p>
              <h2 className="section-title">Tax Deadline Questions</h2>
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
                      <span className="text-sm font-semibold pr-4">
                        {item.question}
                      </span>
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
                      <p className="text-sm text-[color:var(--color-slate-light)]">
                        {item.answer}
                      </p>
                      <div
                        className={`mt-4 h-[2px] w-16 rounded-full bg-gradient-to-r from-${color}-500 to-${color}-400`}
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
              <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-accent)]/10 via-[color:var(--color-primary)]/10 to-[color:var(--color-secondary)]/10" />
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[color:var(--color-accent)]/20 rounded-full blur-3xl animate-pulse-slow" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[color:var(--color-primary)]/20 rounded-full blur-3xl animate-pulse-slow-delayed" />
              </div>
              <MaskReveal className="relative">
                <div className="relative card-glass border border-white/60 rounded-3xl p-8 lg:p-10 backdrop-blur-xl">
                  <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                    <div>
                      <p className="badge-gradient inline-flex mb-3">
                        Stay compliant
                      </p>
                      <SplitTextHeading
                        text="Never miss a tax deadline again"
                        as="h2"
                        className="text-2xl font-semibold"
                      />
                      <p className="mt-3 text-sm text-[color:var(--color-slate-light)]">
                        Book a free consultation and we will build a personalized
                        compliance calendar and reminder system for your business.
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
              </MaskReveal>
            </div>
          </Reveal>
        </div>
      </section>
    </article>
  );
}
