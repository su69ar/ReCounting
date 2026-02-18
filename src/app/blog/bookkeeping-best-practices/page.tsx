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
  title: "Bookkeeping Best Practices for Bali SMEs",
  description:
    "Practical bookkeeping tips for small businesses in Bali. Learn how to organize records, reconcile accounts, and prepare for Indonesian tax compliance.",
  alternates: { canonical: "/blog/bookkeeping-best-practices" },
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
      name: "Bookkeeping Best Practices",
      item: `${siteConfig.url}/blog/bookkeeping-best-practices`,
    },
  ],
};

const articleSchema = generateArticleSchema({
  title: "Bookkeeping Best Practices for Bali SMEs",
  description:
    "Practical bookkeeping tips for small businesses in Bali. Learn how to organize records, reconcile accounts, and prepare for Indonesian tax compliance.",
  url: `${siteConfig.url}/blog/bookkeeping-best-practices`,
  datePublished: "2025-02-15",
  dateModified: "2025-02-15",
});

const faqItems = [
  {
    question: "How often should I update my bookkeeping records?",
    answer:
      "Daily updates are ideal, especially if your business handles cash transactions. At minimum, reconcile your records weekly to avoid a backlog that becomes difficult to untangle at month-end. Restaurants, retail shops, and service providers in Bali typically process dozens of transactions per day, so staying current prevents costly errors.",
  },
  {
    question:
      "Do I need accounting software, or can I use spreadsheets?",
    answer:
      "Spreadsheets work for very small operations with fewer than 50 transactions per month. Once you grow beyond that, dedicated software like Jurnal.id, Accurate Online, or Xero reduces manual errors and saves significant time. These platforms also generate the reports your accountant or tax consultant needs for compliance filings.",
  },
  {
    question:
      "What records does DJP require me to keep?",
    answer:
      "The Direktorat Jenderal Pajak requires businesses to maintain sales invoices, purchase receipts, bank statements, payroll records, and general ledgers. These must be stored for at least 10 years. For PT PMA companies, additional documentation such as shareholder records and foreign investment reports may also be required.",
  },
  {
    question:
      "How much does professional bookkeeping cost in Bali?",
    answer:
      "Monthly bookkeeping services in Bali typically range from Rp 1,500,000 to Rp 5,000,000 depending on transaction volume and reporting complexity. This is significantly less than the cost of fixing compliance issues or paying late-filing penalties, which can reach 2% per month on unpaid taxes.",
  },
  {
    question:
      "Can a foreign-owned company (PT PMA) handle its own bookkeeping?",
    answer:
      "Technically yes, but it is not recommended. PT PMA companies face additional reporting requirements including foreign investment activity reports (LKPM) and specific tax obligations. An experienced bookkeeper familiar with Indonesian regulations will ensure nothing is missed and help you avoid penalties from BKPM or DJP.",
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

export default function BookkeepingBestPracticesPage() {
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
              <p className="badge-pill">Bookkeeping</p>
              <SplitTextHeading
                text="Bookkeeping Best Practices for Bali SMEs"
                as="h1"
                className="text-4xl font-bold tracking-tight text-[color:var(--color-slate-dark)]"
              />
              <p className="section-subtitle">
                Practical bookkeeping tips for small businesses in Bali. Learn
                how to organize records, reconcile accounts, and prepare for
                Indonesian tax compliance.
              </p>
              <div className="flex items-center gap-4 text-xs text-[color:var(--color-slate-light)]">
                <time dateTime="2025-02-15">February 15, 2025</time>
                <span>·</span>
                <span>8 min read</span>
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
                    Why Bookkeeping Matters for Bali Businesses
                  </h2>
                  <p>
                    If you run a business in Bali, whether it&apos;s a villa
                    management company in Seminyak, a surf school in Canggu, or a
                    restaurant in Ubud, your bookkeeping is the foundation of
                    everything financial. Without organized records, you cannot
                    accurately file taxes, secure financing, or even understand
                    whether your business is profitable.
                  </p>
                  <p>
                    The Direktorat Jenderal Pajak (DJP) requires all registered
                    businesses to maintain proper financial records. This is not
                    optional. Failing to keep adequate books can result in
                    penalties, audits, and in serious cases, the suspension of your
                    business license. Yet many SMEs in Bali still rely on informal
                    records: a notebook behind the counter, a WhatsApp thread with
                    the owner, or a shoebox of crumpled receipts.
                  </p>
                  <p>
                    The problem with informal records is not just compliance risk.
                    It is the inability to make informed decisions. When you do not
                    know your actual expenses, margins, or cash flow position, you
                    are flying blind. Good bookkeeping transforms raw transaction
                    data into clarity, and clarity is what separates businesses that
                    grow from those that struggle.
                  </p>
                </div>

                {/* Section 2 */}
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)]">
                    Separate Business and Personal Finances
                  </h2>
                  <p>
                    This is the single most important step for any Bali business
                    owner, and it is the one most frequently skipped. Mixing
                    personal and business expenses makes accurate bookkeeping
                    nearly impossible. Every transaction becomes a guessing game:
                    was that transfer for inventory or a family dinner?
                  </p>
                  <p>
                    Open a dedicated business bank account. BCA, Mandiri, and BNI
                    all offer business accounts with reasonable fees and solid
                    online banking platforms. If you operate a PT PMA (foreign
                    owned company), you will need your company&apos;s NPWP, NIB,
                    and articles of association to open the account. Local PT
                    companies have a simpler process but still require proper
                    documentation.
                  </p>
                  <p>
                    Once you have a separate account, commit to using it
                    exclusively for business transactions. Pay yourself a salary
                    from the business account into your personal account, and treat
                    that as an expense. This creates a clean paper trail that your
                    bookkeeper can follow and that DJP can verify during an audit.
                  </p>
                  <p>
                    For businesses that handle significant cash, such as
                    restaurants and retail shops, establish a daily cash deposit
                    routine. Count the register at closing, record the amount, and
                    deposit it the next morning. Cash that sits in a drawer is cash
                    that disappears from your records.
                  </p>
                </div>

                {/* Section 3 */}
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)]">
                    Track Every Transaction Daily
                  </h2>
                  <p>
                    Consistency beats perfection in bookkeeping. It is far better to
                    record transactions daily in a simple system than to attempt a
                    perfect setup that you abandon after two weeks. The goal is
                    a complete record of money coming in and going out.
                  </p>
                  <p>
                    For software, several platforms work well in the Indonesian
                    context. Jurnal.id is popular among local businesses because it
                    integrates with Indonesian tax reporting and generates e-Faktur
                    compatible invoices. Accurate Online is another strong choice
                    with deep support for Indonesian accounting standards (PSAK).
                    International businesses often prefer Xero for its multi-currency
                    capabilities, which is particularly useful if you invoice clients
                    in USD, AUD, or EUR while paying local expenses in Rupiah.
                  </p>
                  <p>
                    Whichever tool you choose, establish a routine. Set aside 15 to
                    20 minutes at the end of each business day to enter
                    transactions, attach receipt photos, and categorize expenses.
                    This daily habit eliminates the painful end-of-month scramble
                    that causes most bookkeeping breakdowns.
                  </p>
                  <p>
                    A practical tip for Bali specifically: the humidity here
                    destroys paper receipts within weeks. Thermal paper fades,
                    ink smudges, and mold grows on anything stored in a drawer.
                    Photograph every receipt on the day you receive it, and store
                    the image in your accounting software or a dedicated Google
                    Drive folder organized by month. Your future self (and your
                    accountant) will thank you.
                  </p>
                </div>

                {/* Section 4 */}
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)]">
                    Reconcile Bank Statements Monthly
                  </h2>
                  <p>
                    Bank reconciliation is the process of matching your internal
                    records against your bank statement to ensure everything lines
                    up. Think of it as a health check for your books. If the
                    numbers match, you know your records are accurate. If they do
                    not, you have caught an error before it compounds into a bigger
                    problem.
                  </p>
                  <p>
                    Here is how to do it: at the beginning of each month, download
                    your bank statement for the previous month. Compare each
                    transaction on the statement against your accounting records.
                    Mark items that match and investigate any discrepancies.
                  </p>
                  <p>
                    Common discrepancies in Bali businesses include bank fees that
                    were not recorded, transfer charges from interbank transactions
                    (BCA to Mandiri transfers, for example), automatic debits for
                    subscriptions or insurance, and timing differences where a
                    payment was recorded on one date but cleared on another.
                  </p>
                  <p>
                    If you use accounting software, most platforms have a built-in
                    reconciliation feature that makes this process much faster. You
                    import the bank statement, and the software suggests matches
                    automatically. You simply confirm or correct each one.
                  </p>
                  <p>
                    Do not skip this step. Businesses that reconcile monthly catch
                    fraud early, identify billing errors, and maintain the
                    accuracy that DJP expects during an inspection.
                  </p>
                </div>

                {/* Section 5 */}
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)]">
                    Understand Indonesian Accounting Standards
                  </h2>
                  <p>
                    Indonesian businesses follow PSAK (Pernyataan Standar Akuntansi
                    Keuangan), which is the local adaptation of International
                    Financial Reporting Standards (IFRS). For small and medium
                    enterprises, there is a simplified version called SAK EMKM
                    (Standar Akuntansi Keuangan Entitas Mikro, Kecil, dan
                    Menengah) that reduces the reporting burden while still meeting
                    regulatory requirements.
                  </p>
                  <p>
                    At minimum, your bookkeeping system should produce a proper
                    chart of accounts organized by asset, liability, equity,
                    revenue, and expense categories. This structure is not just an
                    accounting formality. It determines how your financial
                    statements are generated and whether they will be accepted by
                    DJP, banks, and potential investors.
                  </p>
                  <p>
                    If you are setting up your chart of accounts for the first
                    time, work with an accountant who understands both Indonesian
                    standards and your specific industry. A restaurant in Sanur has
                    very different account categories than a digital marketing
                    agency in Denpasar. Getting this right at the start saves
                    significant rework later.
                  </p>
                </div>

                {/* Section 6 */}
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)]">
                    Prepare for Tax Season Year-Round
                  </h2>
                  <p>
                    In Indonesia, tax compliance is not a once-a-year event. It is
                    a monthly obligation. Businesses must calculate and remit PPh
                    (income tax) and PPN (value-added tax) every month, with
                    payments due by the 10th and reporting due by the 20th of the
                    following month. Miss these deadlines and you face automatic
                    penalties.
                  </p>
                  <p>
                    The annual SPT (Surat Pemberitahuan Tahunan) filing has its own
                    deadlines: March 31 for individual taxpayers and April 30 for
                    corporate entities. These are firm dates. Extensions are
                    possible in limited circumstances, but they require advance
                    application and are not guaranteed.
                  </p>
                  <p>
                    The best way to prepare for tax season is to treat every month
                    as tax season. When your books are current and accurate, monthly
                    tax calculations take minutes instead of days. Your accountant
                    can pull the numbers directly from your system, calculate the
                    obligations, and file on time without a last-minute scramble.
                  </p>
                  <p>
                    Keep a tax calendar visible in your office or set recurring
                    reminders on your phone. Mark the 10th of each month for
                    payment deadlines and the 20th for reporting deadlines. Add the
                    annual SPT dates well in advance so your accountant has time to
                    prepare the filing properly.
                  </p>
                </div>

                {/* Section 7 */}
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)]">
                    When to Hire a Professional Bookkeeper
                  </h2>
                  <p>
                    Many Bali business owners start by handling their own books,
                    and that is perfectly fine in the early stages. But there comes
                    a point where doing it yourself costs more than hiring someone.
                    Not just in money, but in time, accuracy, and peace of mind.
                  </p>
                  <p>
                    Consider hiring a professional bookkeeper if you recognize any
                    of these signs: you are consistently behind on recording
                    transactions, your bank reconciliation has not been done in
                    months, you dread tax filing deadlines, you have received a
                    warning or penalty from DJP, or you simply do not have
                    confidence that your numbers are correct.
                  </p>
                  <p>
                    The cost of professional bookkeeping in Bali ranges from
                    Rp 1,500,000 to Rp 5,000,000 per month depending on your
                    transaction volume and the complexity of your operations.
                    Compare that to the cost of a single DJP penalty, which can be
                    Rp 1,000,000 per late report plus 2% per month on unpaid
                    taxes. The math usually favors professional help.
                  </p>
                  <p>
                    When selecting a bookkeeper or accounting firm, look for
                    experience with your business type, familiarity with Indonesian
                    tax regulations, the ability to communicate in your preferred
                    language (English or Indonesian), and a clear service agreement
                    that specifies what is included. Ask for references from other
                    Bali-based businesses, and verify that they use reputable
                    accounting software rather than manual spreadsheets.
                  </p>
                  <p>
                    A good bookkeeper does more than enter numbers. They become a
                    partner who helps you understand your financial position, plan
                    for growth, and stay compliant without the stress of managing
                    it alone.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Sidebar */}
            <Reveal>
              <aside className="card-glow card-glow-primary p-6 lg:sticky lg:top-24 relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[color:var(--color-secondary)]/20 rounded-full blur-3xl pointer-events-none" />
                <p className="badge-gradient inline-flex mb-3">Checklist</p>
                <h3 className="text-lg font-semibold relative z-10">
                  Quick Bookkeeping Checklist
                </h3>
                <StaggerGroup className="mt-4 space-y-3 text-sm text-[color:var(--color-slate-light)] relative z-10">
                  {[
                    { text: "Open a dedicated business bank account", color: "primary" },
                    { text: "Record transactions daily, not monthly", color: "accent" },
                    { text: "Photograph receipts before they fade", color: "secondary" },
                    { text: "Reconcile bank statements every month", color: "primary" },
                    { text: "Set up a proper chart of accounts (PSAK)", color: "accent" },
                    { text: "Track PPh and PPN obligations monthly", color: "secondary" },
                    { text: "File SPT before March 31 or April 30", color: "primary" },
                    { text: "Review your books with a professional quarterly", color: "accent" },
                  ].map((item) => (
                    <li key={item.text} className="stagger-item flex items-center gap-3 group list-none">
                      <span className={`check-glow bg-${item.color}-500/10 text-${item.color}-500`}>
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12"/>
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
              <h2 className="section-title">Bookkeeping Questions</h2>
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
                        text="Let us handle the books so you can focus on your business"
                        as="h2"
                        className="text-2xl font-semibold"
                      />
                      <p className="mt-3 text-sm text-[color:var(--color-slate-light)]">
                        Book a free consultation and we will review your current
                        bookkeeping setup, identify gaps, and build a plan that
                        keeps you compliant and in control.
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
