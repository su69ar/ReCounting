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
  title: "2026 Tax Preparation Checklist for Bali SMEs and PT PMA",
  description:
    "A 2026 tax preparation checklist for Bali SMEs and PT PMA companies. Prepare financial statements, reconcile tax records, confirm Coretax access, and plan annual filing before March and April deadlines.",
  alternates: { canonical: "/blog/tax-preparation-indonesia-2026" },
};

const checklistItems = [
  {
    title: "Close your books early",
    description:
      "Finish bookkeeping, bank reconciliations, and year-end journal review before filing season becomes crowded.",
  },
  {
    title: "Reconcile monthly tax records",
    description:
      "Match PPh, PPN, and annual working papers against monthly returns, payment proofs, and withholding evidence.",
  },
  {
    title: "Confirm Coretax access and roles",
    description:
      "Before filing windows get busy, make sure the team can log in, use the right role, and obtain the approvals needed inside Coretax.",
  },
  {
    title: "Prepare financial statements and supporting schedules",
    description:
      "Annual SPT becomes far easier when your management accounts, tax adjustments, and supporting schedules are already organized.",
  },
  {
    title: "Decide early if extension is necessary",
    description:
      "If your annual corporate return cannot be finalized on time, decide early and prepare the supporting package before the original deadline.",
  },
  {
    title: "Assign owners and review dates",
    description:
      "Give each filing task a clear owner: bookkeeping, payroll, approvals, tax review, and final submission.",
  },
];

const faqItems = [
  {
    question: "What does tax preparation 2026 usually mean for businesses?",
    answer:
      "For most businesses, it means preparing the annual tax return filing season that happens in 2026 for tax year 2025, while also keeping recurring monthly tax work clean during 2026.",
  },
  {
    question: "Why should I prepare before March or April 2026?",
    answer:
      "Because annual filing quality depends on what happened before the deadline week. If books, reconciliations, and access rights are messy in March, the filing process becomes slower, riskier, and more expensive.",
  },
  {
    question: "Does Coretax matter for 2026 tax preparation?",
    answer:
      "Yes. DJP stated that annual filing in 2026 starts through Coretax DJP, so account readiness, role access, and supporting approvals are now part of preparation, not just filing-day tasks.",
  },
  {
    question: "Can I file an extension for annual corporate SPT?",
    answer:
      "Yes. Corporate taxpayers can generally submit an extension notice for up to two months, but they still need to prepare the required supporting information and handle the estimated underpayment before the original deadline.",
  },
  {
    question: "What is the biggest mistake businesses make in tax preparation?",
    answer:
      "Waiting until the filing month to start gathering documents. The best results come from preparing books, reconciliations, and internal approvals weeks earlier.",
  },
];

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: siteConfig.url },
  { name: "Blog", url: `${siteConfig.url}/blog` },
  {
    name: "2026 Tax Preparation Checklist",
    url: `${siteConfig.url}/blog/tax-preparation-indonesia-2026`,
  },
]);

const articleSchema = generateArticleSchema({
  title: "2026 Tax Preparation Checklist for Bali SMEs and PT PMA",
  description:
    "A 2026 tax preparation checklist for Bali SMEs and PT PMA companies. Prepare books, tax records, Coretax access, and annual filing support before the deadline window.",
  url: `${siteConfig.url}/blog/tax-preparation-indonesia-2026`,
  datePublished: "2026-03-17",
  dateModified: "2026-03-17",
});

const faqSchema = generateFAQSchema(faqItems);

export default function TaxPreparation2026Page() {
  return (
    <article>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />

      <section className="section-space">
        <div className="container-grid">
          <Reveal>
            <div className="max-w-3xl space-y-4 relative">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-[color:var(--color-primary)]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[color:var(--color-accent)]/10 rounded-full blur-3xl pointer-events-none" />
              <p className="badge-pill">2026 Tax Prep</p>
              <SplitTextHeading
                text="2026 tax preparation checklist for Bali SMEs and PT PMA"
                as="h1"
                className="text-4xl font-bold tracking-tight text-[color:var(--color-slate-dark)]"
              />
              <p className="section-subtitle">
                A practical checklist for founders and finance teams preparing annual filing
                work in 2026. Use it to clean books, organize tax records, confirm Coretax
                readiness, and avoid last-minute filing stress.
              </p>
              <div className="flex items-center gap-4 text-xs text-[color:var(--color-slate-light)]">
                <time dateTime="2026-03-17">March 17, 2026</time>
                <span>·</span>
                <span>8 min read</span>
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
                    What “tax preparation 2026” really means
                  </h2>
                  <p>
                    For most Bali SMEs and PT PMA companies, tax preparation 2026 is really
                    about preparing the annual filing cycle that happens in 2026 for tax year
                    2025 while keeping monthly tax work clean enough that annual filing is not
                    derailed by unresolved issues.
                  </p>
                  <p>
                    In practical terms, that means you should already be asking a few blunt
                    questions. Are the books closed? Do monthly tax returns reconcile to the
                    ledger? Can the right people access Coretax? Are approvals and signatures
                    going to be available before the filing deadline?
                  </p>
                  <p>
                    If those questions are still open in the final week before filing, the
                    process becomes reactive. The goal of this checklist is to move the work
                    earlier, when there is still time to fix errors calmly.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)]">
                    The preparation checklist
                  </h2>
                  <p>
                    Use this checklist as a working sequence, not a random list. Each step
                    reduces friction for the step that follows.
                  </p>
                  <StaggerGroup className="grid gap-4">
                    {checklistItems.map((item, index) => {
                      const colors = ["primary", "accent", "secondary"];
                      const color = colors[index % colors.length];
                      return (
                        <div
                          key={item.title}
                          className={`group card-glow card-glow-${color} stagger-item p-6`}
                        >
                          <div className="flex items-start gap-4">
                            <span className={`check-glow bg-${color}-500/10 text-${color}-500 mt-0.5`}>
                              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </span>
                            <div>
                              <h3 className="text-base font-semibold text-[color:var(--color-slate-dark)]">
                                {item.title}
                              </h3>
                              <p className="mt-2 text-sm text-[color:var(--color-slate-light)]">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </StaggerGroup>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)]">
                    Coretax readiness is part of tax prep now
                  </h2>
                  <p>
                    For 2026, access readiness is no longer a separate technical issue. DJP has
                    positioned annual filing through Coretax DJP from January 1, 2026, which
                    means your team should confirm account activation, role access, and any
                    internal approval flow before the filing window gets busy.
                  </p>
                  <p>
                    For businesses with directors outside Bali or outside Indonesia, this point
                    matters even more. If logins, approvals, or internal authority are unclear,
                    the filing process slows down even when the tax numbers are already ready.
                  </p>
                  <p>
                    A practical rule: do not wait until the return is ready to discover that the
                    submitting user lacks the correct role or the internal sign-off path is
                    incomplete.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)]">
                    When to consider an extension
                  </h2>
                  <p>
                    A corporate extension is useful when the business genuinely needs more time
                    to finalize financial statements and supporting calculations. It is not a
                    license to postpone preparation until later.
                  </p>
                  <p>
                    If you suspect an extension may be required, decide early. DJP requires the
                    extension notice to be submitted before the original annual deadline, and the
                    supporting package can include temporary financial statements, an estimate of
                    tax payable, proof of payment, and in some cases a statement from the public
                    accountant when the return is being audited.
                  </p>
                  <p>
                    This is one reason we recommend preparing filing documents in stages. The
                    earlier you identify delay risk, the cleaner your extension process will be.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)]">
                    PT PMA and expat-owned businesses should start even earlier
                  </h2>
                  <p>
                    PT PMA and expat-owned businesses often have one extra challenge: decision
                    makers are not always sitting next to the finance team. That can slow down
                    questions about ownership costs, shareholder transactions, intercompany items,
                    or sign-off on year-end adjustments.
                  </p>
                  <p>
                    The best response is not to create more meetings. It is to create a clean
                    preparation pack early: draft financial statements, tax adjustment notes,
                    payment recaps, open issues, and a deadline calendar with named owners.
                  </p>
                  <p>
                    If your team still needs a sharper deadline view, pair this checklist with
                    our calendar guide:
                  </p>
                  <p>
                    <Link
                      href="/blog/tax-deadlines-indonesia-2026"
                      className="text-[color:var(--color-primary)] hover:underline"
                    >
                      Indonesia Tax Deadlines 2026: Monthly and Annual Filing Dates
                    </Link>
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <aside className="card-glow card-glow-primary p-6 lg:sticky lg:top-24 relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[color:var(--color-accent)]/20 rounded-full blur-3xl pointer-events-none" />
                <p className="badge-gradient inline-flex mb-3">Preparation window</p>
                <h3 className="text-lg font-semibold relative z-10">
                  Suggested timeline
                </h3>
                <StaggerGroup className="mt-4 space-y-3 text-sm text-[color:var(--color-slate-light)] relative z-10">
                  {[
                    "January: confirm access, roles, and books-in-progress",
                    "February: reconcile monthly taxes and finalize working papers",
                    "March: file individual returns and finish corporate draft review",
                    "Before April 30: submit corporate return or extension package",
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
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[color:var(--color-primary)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[color:var(--color-accent)]/5 rounded-full blur-3xl" />

        <div className="container-grid relative z-10">
          <Reveal>
            <div className="text-center mb-8">
              <p className="badge-gradient inline-flex mb-3">FAQ</p>
              <h2 className="section-title">2026 tax-preparation questions</h2>
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
              <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-primary)]/10 via-[color:var(--color-accent)]/10 to-[color:var(--color-secondary)]/10" />
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[color:var(--color-primary)]/20 rounded-full blur-3xl animate-pulse-slow" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[color:var(--color-accent)]/20 rounded-full blur-3xl animate-pulse-slow-delayed" />
              </div>
              <MaskReveal className="relative">
                <div className="relative card-glass border border-white/60 rounded-3xl p-8 lg:p-10 backdrop-blur-xl">
                  <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                    <div>
                      <p className="badge-gradient inline-flex mb-3">Need a filing plan?</p>
                      <SplitTextHeading
                        text="Turn this checklist into a real 2026 filing workflow"
                        as="h2"
                        className="text-2xl font-semibold"
                      />
                      <p className="mt-3 text-sm text-[color:var(--color-slate-light)]">
                        We help Bali SMEs and PT PMA companies organize books, tax support,
                        and annual filing preparation before the deadline window gets crowded.
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
