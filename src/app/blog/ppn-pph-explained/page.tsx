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
  title: "PPh vs PPN Explained: Income Tax & VAT Guide for Bali Businesses",
  description:
    "Understand the difference between PPh (income tax) and PPN (value-added tax) in Indonesia. Rates, deadlines, filing tips, and common mistakes for SMEs and expats in Bali.",
  alternates: { canonical: "/blog/ppn-pph-explained" },
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
      name: "PPh vs PPN Explained",
      item: `${siteConfig.url}/blog/ppn-pph-explained`,
    },
  ],
};

const articleSchema = generateArticleSchema({
  title: "PPh vs PPN Explained: Income Tax & VAT Guide for Bali Businesses",
  description:
    "Understand the difference between PPh (income tax) and PPN (value-added tax) in Indonesia. Rates, deadlines, filing tips, and common mistakes for SMEs and expats in Bali.",
  url: `${siteConfig.url}/blog/ppn-pph-explained`,
  datePublished: "2025-02-20",
  dateModified: "2025-02-20",
});

const faqItems = [
  {
    question: "What is the difference between PPh and PPN?",
    answer:
      "PPh (Pajak Penghasilan) is income tax charged on earnings, profits, and salaries. PPN (Pajak Pertambahan Nilai) is value-added tax charged on the sale of goods and services. PPh taxes what you earn; PPN taxes what you sell.",
  },
  {
    question: "Does every business in Bali need to pay PPN?",
    answer:
      "Not necessarily. PPN registration is required once your annual gross revenue exceeds Rp 4.8 billion. Below that threshold you may be eligible for the 0.5% PPh Final regime instead. However, certain industries and transaction types may trigger PPN obligations regardless of revenue.",
  },
  {
    question: "What are the current PPh rates for Indonesian companies?",
    answer:
      "The standard corporate PPh rate is 22%. Small and medium enterprises with annual gross turnover below Rp 4.8 billion can use the PPh Final rate of 0.5% of gross revenue. Individual income tax uses progressive rates from 5% to 35% depending on income bracket.",
  },
  {
    question: "When are PPh and PPN payments due each month?",
    answer:
      "Monthly PPh payments (PPh 21, 23, 25, and Final) are due by the 10th of the following month. Monthly PPN payments are also due by the end of the following month. SPT reporting for both is due by the 20th of the following month.",
  },
  {
    question: "What happens if I file PPh or PPN late?",
    answer:
      "Late filing of monthly PPh SPT incurs a penalty of Rp 100,000 per report. Late filing of monthly PPN SPT incurs Rp 500,000 per report. Additionally, late tax payments accrue interest at 2% per month on the unpaid amount. These penalties compound quickly.",
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

export default function PpnPphPage() {
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
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-[color:var(--color-primary)]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[color:var(--color-accent)]/10 rounded-full blur-3xl pointer-events-none" />
              <p className="badge-pill">Tax Guide</p>
              <SplitTextHeading
                text="PPh vs PPN: What Every Bali Business Needs to Know"
                as="h1"
                className="text-4xl font-bold tracking-tight text-[color:var(--color-slate-dark)]"
              />
              <p className="section-subtitle">
                A plain-English guide to Indonesia&apos;s two core taxes:
                income tax (PPh) and value-added tax (PPN). Understand the
                rates, deadlines, and filing requirements so your business
                stays compliant.
              </p>
              <div className="flex items-center gap-4 text-xs text-[color:var(--color-slate-light)]">
                <time dateTime="2025-02-20">February 20, 2025</time>
                <span>·</span>
                <span>10 min read</span>
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
                    Understanding Indonesia&apos;s Two Main Taxes
                  </h2>
                  <p>
                    If you run a business in Bali, you will encounter two taxes
                    almost immediately: PPh and PPN. They sound similar and are
                    often confused, but they work in fundamentally different ways.
                    Getting them mixed up leads to incorrect filings, unexpected
                    penalties, and unnecessary stress.
                  </p>
                  <p>
                    <strong>PPh (Pajak Penghasilan)</strong> is income tax. It
                    applies to money you earn, whether that is company profits,
                    employee salaries, freelancer payments, or investment returns.
                    The government taxes your income at various rates depending on
                    who is earning it and how much they earn.
                  </p>
                  <p>
                    <strong>PPN (Pajak Pertambahan Nilai)</strong> is value-added
                    tax, similar to VAT in Europe or GST in Australia. It is
                    charged on the sale of goods and services at each stage of the
                    supply chain. The current standard PPN rate is 11%, introduced
                    under the Harmonization of Tax Regulations Law (UU HPP) in
                    2022.
                  </p>
                  <p>
                    The simplest way to remember: PPh taxes what you <em>earn</em>,
                    PPN taxes what you <em>sell</em>.
                  </p>
                </div>

                {/* Section 2 */}
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)]">
                    PPh: Income Tax Types You Need to Know
                  </h2>
                  <p>
                    PPh is not a single tax. It is a family of taxes, each with its
                    own rules, rates, and filing deadlines. Here are the ones that
                    matter most for Bali businesses:
                  </p>
                  <p>
                    <strong>PPh 21</strong> is the withholding tax on employee
                    salaries and benefits. As an employer, you are required to
                    calculate, withhold, and remit this tax on behalf of your
                    employees every month. The rates follow Indonesia&apos;s
                    progressive income tax brackets: 5% on the first Rp 60 million,
                    15% on Rp 60–250 million, 25% on Rp 250–500 million, 30% on
                    Rp 500 million–5 billion, and 35% above Rp 5 billion annually.
                  </p>
                  <p>
                    <strong>PPh 23</strong> covers withholding tax on payments to
                    third parties for services, royalties, dividends, and interest.
                    If you hire a freelance designer, pay rent for equipment, or
                    receive dividends from another Indonesian company, PPh 23
                    applies. The rate is typically 2% for services and 15% for
                    dividends and royalties.
                  </p>
                  <p>
                    <strong>PPh 25</strong> is the monthly installment of your
                    annual corporate income tax. Rather than paying your entire
                    corporate tax bill at year-end, DJP requires businesses to
                    estimate and pay in monthly installments. The amount is
                    calculated based on the previous year&apos;s tax liability
                    divided by twelve.
                  </p>
                  <p>
                    <strong>PPh Final (PP 55/2022)</strong> is the simplified tax
                    regime for small businesses. If your annual gross revenue is
                    below Rp 4.8 billion, you can opt to pay a flat 0.5% of gross
                    revenue each month instead of calculating net profit and
                    applying the standard 22% corporate rate. This regime is
                    available for a limited period: 7 years for individuals, 4 years
                    for PT companies, and 3 years for CV entities.
                  </p>
                </div>

                {/* Section 3 */}
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)]">
                    PPN: Value-Added Tax Essentials
                  </h2>
                  <p>
                    PPN works differently from PPh. Rather than taxing income, it
                    taxes consumption. Every time goods or services change hands in
                    a commercial transaction, PPN is added to the price. The
                    current rate is 11%.
                  </p>
                  <p>
                    <strong>Who must register for PPN?</strong> Any business
                    (individual or entity) whose annual gross revenue exceeds
                    Rp 4.8 billion must register as a PKP (Pengusaha Kena Pajak,
                    or Taxable Entrepreneur) and begin charging, collecting, and
                    remitting PPN. Businesses below this threshold can voluntarily
                    register as PKP if it benefits their operations, for example
                    when working with larger corporate clients who require tax
                    invoices.
                  </p>
                  <p>
                    <strong>How PPN works in practice:</strong> When you sell a
                    service for Rp 10,000,000, you add 11% PPN (Rp 1,100,000),
                    making the total invoice Rp 11,100,000. This PPN collected is
                    called PPN Keluaran (output PPN). Meanwhile, PPN you pay on
                    business purchases is called PPN Masukan (input PPN). Each
                    month, you calculate: PPN Keluaran minus PPN Masukan. If the
                    result is positive, you owe that amount to DJP. If negative,
                    you have a PPN credit to carry forward or request a refund.
                  </p>
                  <p>
                    <strong>Tax invoices (e-Faktur)</strong> are mandatory for all
                    PPN transactions. PKP businesses must issue electronic tax
                    invoices through the DJP e-Faktur system for every sale. These
                    invoices carry unique serial numbers and are reported monthly.
                    Failure to issue proper e-Faktur can result in penalties equal
                    to 1% of the transaction value.
                  </p>
                </div>

                {/* Section 4 */}
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)]">
                    PPh vs PPN: Side-by-Side Comparison
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="border-b border-[color:var(--color-neutral-200)]">
                          <th className="py-3 pr-4 text-left font-semibold text-[color:var(--color-slate-dark)]">
                            Aspect
                          </th>
                          <th className="py-3 px-4 text-left font-semibold text-[color:var(--color-slate-dark)]">
                            PPh (Income Tax)
                          </th>
                          <th className="py-3 pl-4 text-left font-semibold text-[color:var(--color-slate-dark)]">
                            PPN (VAT)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["What it taxes", "Income, profits, earnings", "Sale of goods & services"],
                          ["Standard rate", "22% corporate; 5–35% personal", "11%"],
                          ["Who pays", "The earner (withheld by payer)", "The buyer (collected by seller)"],
                          ["Filing frequency", "Monthly + annual SPT", "Monthly"],
                          ["PKP required?", "No", "Yes, if revenue > Rp 4.8B"],
                          ["Penalty (late SPT)", "Rp 100,000/report", "Rp 500,000/report"],
                          ["Key system", "DJP Online / e-Filing", "e-Faktur"],
                        ].map((row) => (
                          <tr
                            key={row[0]}
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
                </div>

                {/* Section 5 */}
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)]">
                    Monthly Filing Deadlines
                  </h2>
                  <p>
                    Both PPh and PPN have strict monthly deadlines. Missing them
                    triggers automatic penalties with no grace period.
                  </p>
                  <p>
                    <strong>By the 10th of each month:</strong> Payment of PPh 21,
                    PPh 23, PPh 25, PPh Final, and PPN for the previous month.
                    Use the e-Billing system to generate payment codes and pay
                    through your bank or designated payment channels.
                  </p>
                  <p>
                    <strong>By the 20th of each month:</strong> Filing of monthly
                    SPT (tax returns) for PPh. This includes SPT Masa PPh 21,
                    SPT Masa PPh 23, and SPT Masa PPh 25/29.
                  </p>
                  <p>
                    <strong>By the end of the following month:</strong> Filing of
                    SPT Masa PPN through the e-Faktur system.
                  </p>
                  <p>
                    <strong>Annual deadlines:</strong> Individual SPT Tahunan is
                    due by March 31. Corporate SPT Tahunan is due by April 30.
                    These are the comprehensive annual returns that reconcile
                    all monthly payments against your actual tax liability for
                    the year.
                  </p>
                </div>

                {/* Section 6 */}
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)]">
                    Common Mistakes Bali Businesses Make
                  </h2>
                  <p>
                    After working with hundreds of SMEs and expat-owned businesses
                    in Bali, we see the same mistakes repeatedly:
                  </p>
                  <p>
                    <strong>Confusing PPh Final with PPN.</strong> Many small
                    business owners assume the 0.5% PPh Final payment covers all
                    their tax obligations. It does not. If your revenue exceeds
                    Rp 4.8 billion, you still need to register for PPN and handle
                    it separately. Even below that threshold, other PPh obligations
                    like PPh 21 for employees still apply.
                  </p>
                  <p>
                    <strong>Not withholding PPh 21 properly.</strong> Employers
                    are legally required to withhold income tax from employee
                    salaries. Paying employees their gross salary and ignoring
                    PPh 21 creates a liability that compounds every month and
                    becomes very expensive to correct retroactively.
                  </p>
                  <p>
                    <strong>Ignoring PPh 23 on service payments.</strong> When
                    you pay a local contractor, consultant, or service provider,
                    you are legally required to withhold 2% PPh 23 and remit it
                    to DJP. Many businesses skip this, creating risk for both
                    parties if audited.
                  </p>
                  <p>
                    <strong>Missing the PKP registration trigger.</strong> Once
                    your gross revenue crosses Rp 4.8 billion, you have a legal
                    obligation to register as PKP and begin charging PPN. DJP
                    can retroactively assess PPN on all transactions from the
                    date you should have registered, plus penalties.
                  </p>
                  <p>
                    <strong>Poor record keeping for PPN credits.</strong> To
                    claim input PPN credits, you need valid e-Faktur from your
                    suppliers. If your suppliers are not PKP or do not issue
                    proper tax invoices, you lose the ability to offset that PPN
                    against your output PPN liability.
                  </p>
                </div>

                {/* Section 7 */}
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)]">
                    How to Stay Compliant
                  </h2>
                  <p>
                    Tax compliance in Indonesia is a monthly discipline, not an
                    annual event. Here is what we recommend to every Bali business:
                  </p>
                  <p>
                    <strong>Set up a tax calendar.</strong> Mark the 10th
                    (payment deadline) and 20th (filing deadline) of every month.
                    Add the annual SPT deadlines in March and April. Never rely
                    on memory alone.
                  </p>
                  <p>
                    <strong>Keep your bookkeeping current.</strong> Monthly tax
                    calculations require accurate financial records. If your books
                    are three months behind, your tax filings will be too. Daily
                    or weekly transaction recording eliminates the deadline panic.
                  </p>
                  <p>
                    <strong>Work with a qualified tax consultant.</strong>{" "}
                    Indonesian tax law changes frequently. The Harmonization of Tax
                    Regulations Law (UU HPP) introduced significant changes in 2022,
                    and Government Regulation PP 55/2022 revised the PPh Final
                    regime. A professional who tracks these changes will save you
                    from costly errors.
                  </p>
                  <p>
                    <strong>Separate PPh and PPN in your accounting.</strong> Your
                    bookkeeping system should clearly distinguish between PPh
                    withholding obligations and PPN input/output tracking. This
                    separation makes monthly filing straightforward and audit
                    preparation painless.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Sidebar */}
            <Reveal>
              <aside className="card-glow card-glow-primary p-6 lg:sticky lg:top-24 relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[color:var(--color-secondary)]/20 rounded-full blur-3xl pointer-events-none" />
                <p className="badge-gradient inline-flex mb-3">Quick Reference</p>
                <h3 className="text-lg font-semibold relative z-10">
                  PPh vs PPN at a Glance
                </h3>
                <StaggerGroup className="mt-4 space-y-3 text-sm text-[color:var(--color-slate-light)] relative z-10">
                  {[
                    { text: "PPh = tax on income & profits", color: "primary" },
                    { text: "PPN = tax on goods & services sold (11%)", color: "accent" },
                    { text: "PPh Final: 0.5% if revenue < Rp 4.8B", color: "secondary" },
                    { text: "Corporate PPh rate: 22%", color: "primary" },
                    { text: "PPh payment due: 10th monthly", color: "accent" },
                    { text: "SPT filing due: 20th monthly", color: "secondary" },
                    { text: "PKP required if revenue > Rp 4.8B", color: "primary" },
                    { text: "Late PPN SPT penalty: Rp 500,000", color: "accent" },
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
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[color:var(--color-primary)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[color:var(--color-accent)]/5 rounded-full blur-3xl" />

        <div className="container-grid relative z-10">
          {/* FAQ */}
          <Reveal>
            <div className="text-center mb-8">
              <p className="badge-gradient inline-flex mb-3">FAQ</p>
              <h2 className="section-title">PPh &amp; PPN Questions</h2>
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
              <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-primary)]/10 via-[color:var(--color-accent)]/10 to-[color:var(--color-secondary)]/10" />
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[color:var(--color-primary)]/20 rounded-full blur-3xl animate-pulse-slow" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[color:var(--color-accent)]/20 rounded-full blur-3xl animate-pulse-slow-delayed" />
              </div>
              <MaskReveal className="relative">
                <div className="relative card-glass border border-white/60 rounded-3xl p-8 lg:p-10 backdrop-blur-xl">
                  <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                    <div>
                      <p className="badge-gradient inline-flex mb-3">
                        Get started
                      </p>
                      <SplitTextHeading
                        text="Confused about PPh and PPN? Let us sort it out"
                        as="h2"
                        className="text-2xl font-semibold"
                      />
                      <p className="mt-3 text-sm text-[color:var(--color-slate-light)]">
                        Book a free consultation and our tax team will review
                        your current obligations, identify gaps, and create a
                        compliance plan.
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
