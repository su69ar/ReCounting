import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/animations/Reveal";
import { SplitTextHeading } from "@/components/animations/SplitTextHeading";
import { MaskReveal } from "@/components/animations/MaskReveal";
import { StaggerGroup } from "@/components/animations/StaggerGroup";
import { JsonLd } from "@/components/seo/JsonLd";
import { primaryCta, secondaryCta, siteConfig } from "@/lib/site";
import { generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "How to Choose the Best Bali Accounting Service for Your Business",
  description:
    "A practical guide to choosing the best Bali accounting service for SMEs, PT PMA companies, and expat-owned businesses. Learn what to compare, what to avoid, and what good reporting should look like.",
  alternates: { canonical: "/blog/best-bali-accounting-service" },
};

const faqItems = [
  {
    question: "What should I look for in a Bali accounting service?",
    answer:
      "Look for clear monthly deliverables, strong communication, Indonesian tax awareness, and reporting that business owners can actually use. Fast response times and English-first communication also matter for expat-owned businesses.",
  },
  {
    question: "Is a cheap Bali accountant always a good option?",
    answer:
      "Not necessarily. The cheapest option often becomes the most expensive when books need to be cleaned up, filings are late, or management reports are unusable. Compare clarity and process, not just fees.",
  },
  {
    question: "Do PT PMA companies need a different level of accounting support?",
    answer:
      "Yes. PT PMA companies usually need stronger documentation, cleaner monthly reporting, and better coordination between bookkeeping, tax work, and management visibility.",
  },
];

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: siteConfig.url },
  { name: "Blog", url: `${siteConfig.url}/blog` },
  {
    name: "Best Bali Accounting Service",
    url: `${siteConfig.url}/blog/best-bali-accounting-service`,
  },
]);

const articleSchema = generateArticleSchema({
  title: "How to Choose the Best Bali Accounting Service for Your Business",
  description:
    "A practical guide to choosing the best Bali accounting service for SMEs, PT PMA companies, and expat-owned businesses.",
  url: `${siteConfig.url}/blog/best-bali-accounting-service`,
  datePublished: "2026-03-17",
  dateModified: "2026-03-17",
});

const faqSchema = generateFAQSchema(faqItems);

export default function BestBaliAccountingServicePage() {
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
              <p className="badge-pill">Buyer Guide</p>
              <SplitTextHeading
                text="How to choose the best Bali accounting service for your business"
                as="h1"
                className="text-4xl font-bold tracking-tight text-[color:var(--color-slate-dark)]"
              />
              <p className="section-subtitle">
                If you are comparing Bali accounting services, this guide will help you
                separate clear, reliable operators from generic firms that look good on a
                website but create confusion once the work starts.
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
                    Why this decision matters more than most founders expect
                  </h2>
                  <p>
                    The best Bali accounting service is not the firm with the biggest
                    claims or the flashiest website. It is the team that can keep your books
                    accurate, make your reporting understandable, and stop compliance work from
                    becoming a last-minute fire every month.
                  </p>
                  <p>
                    This matters because most business owners do not feel the pain of a weak
                    accountant immediately. The real cost appears later: reports arrive too
                    late to make decisions, tax filings depend on rushed data, and no one can
                    explain why margins changed or where cash went. By the time the problem is
                    obvious, the cleanup is expensive.
                  </p>
                  <p>
                    For Bali businesses, the stakes are often higher because many companies
                    are founder-led, operate with lean admin teams, or have owners based
                    overseas. That means the accountant is not just a vendor. They become part
                    of the operating system of the business.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)]">
                    Compare deliverables, not vague promises
                  </h2>
                  <p>
                    When you shortlist Bali accounting services, ask each provider to explain
                    exactly what you receive every month. A serious accounting team should be
                    able to describe the reporting package, timeline, and review process in
                    plain language.
                  </p>
                  <p>
                    At minimum, you should know whether the service includes bookkeeping,
                    reconciliations, monthly P&amp;L, balance sheet, cash flow visibility, and
                    support for tax-ready records. If the answer sounds fuzzy, it usually means
                    the process behind it is fuzzy too.
                  </p>
                  <p>
                    Good providers make it easy to answer simple questions. When will reports
                    arrive? Who asks for missing documents? What happens if records are late?
                    How do they handle corrections? The best Bali accounting service will have
                    a clear answer to all of those before you sign anything.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)]">
                    Look for accounting and tax coordination, not isolated tasks
                  </h2>
                  <p>
                    Many businesses think accounting and tax can be handled as separate
                    islands. In practice, poor bookkeeping almost always creates poor tax work.
                    If the numbers are messy, filings become reactive, documentation becomes
                    inconsistent, and every deadline gets harder than it should be.
                  </p>
                  <p>
                    That is why the top Bali accounting providers usually do more than post
                    transactions. They make sure bookkeeping output supports the next layer of
                    work, whether that is PPh, PPN, annual SPT, payroll coordination, or
                    internal reporting for owners and partners.
                  </p>
                  <p>
                    If you are still comparing options, review both of these pages before you
                    decide:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <Link href="/bali-accounting-services" className="text-[color:var(--color-primary)] hover:underline">
                        Bali Accounting Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/bali-tax-services" className="text-[color:var(--color-primary)] hover:underline">
                        Bali Tax Services
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)]">
                    The best Bali accounting service should reduce founder friction
                  </h2>
                  <p>
                    Founders rarely leave an accounting provider because journal entries are
                    technically wrong on day one. They leave because the day-to-day experience
                    is exhausting. Documents need to be chased repeatedly. Questions take too
                    long to answer. Reports come without context. Nobody feels confident that
                    the system is under control.
                  </p>
                  <p>
                    A strong accounting partner reduces friction. They make communication
                    predictable, explain issues clearly, and keep momentum moving even when
                    operations are messy. For expat-owned businesses in particular, this
                    English-first clarity is often the deciding factor.
                  </p>
                  <p>
                    Ask yourself a blunt question: when something goes wrong, does this team
                    make the business feel calmer or more confused? The best providers will
                    lower noise, not add to it.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)]">
                    Red flags when choosing a top Bali accounting partner
                  </h2>
                  <p>
                    Be careful if a provider cannot show a clear monthly workflow, avoids
                    concrete deliverables, or relies heavily on generic claims like full
                    service support without explaining what that means operationally.
                  </p>
                  <p>
                    Another red flag is a provider that treats every business the same. A PT
                    PMA with multiple stakeholders has very different reporting needs from a
                    local service business or a growing hospitality group. Good accounting
                    support adapts the workflow to the business, not the other way around.
                  </p>
                  <p>
                    Finally, do not ignore response quality. Speed matters, but clarity matters
                    more. A fast reply that creates more ambiguity is still a bad reply.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)]">
                    A simple shortlist framework you can use today
                  </h2>
                  <p>
                    When comparing firms, score each provider on four things: reporting
                    clarity, process discipline, communication quality, and Indonesian
                    compliance understanding. The provider that is strongest across all four
                    usually becomes the best long-term fit.
                  </p>
                  <p>
                    If you are searching for the best or top Bali accounting service, you are
                    really searching for confidence. Confidence comes from clean monthly
                    numbers, usable reporting, and a team that knows what needs to happen next.
                    That is the standard we recommend using.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <aside className="space-y-6">
                <div className="card-glow p-6">
                  <h2 className="text-lg font-semibold text-[color:var(--color-slate-dark)]">
                    Quick shortlist checklist
                  </h2>
                  <ul className="mt-4 space-y-3 text-sm text-[color:var(--color-slate-light)]">
                    {[
                      "Clear monthly deliverables",
                      "English-first communication",
                      "Tax-aware bookkeeping workflow",
                      "Fast and practical responses",
                      "Reporting owners can actually understand",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="check-glow bg-primary-500/10 text-primary-500">
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <MaskReveal className="relative rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-primary)]/10 via-[color:var(--color-accent)]/10 to-[color:var(--color-secondary)]/10" />
                  <div className="relative card-glass border border-white/50 rounded-3xl p-6 backdrop-blur-xl">
                    <p className="badge-gradient inline-flex mb-3">Need help deciding?</p>
                    <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)]">
                      Talk to a Bali-based accounting team
                    </h2>
                    <p className="mt-3 text-sm text-[color:var(--color-slate-light)]">
                      We will review your setup and show you what clear monthly support should
                      actually look like.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      <Link href={primaryCta.href} className="btn-primary">
                        {primaryCta.label}
                      </Link>
                      <a href={secondaryCta.href} className="btn-secondary" target="_blank" rel="noreferrer">
                        {secondaryCta.label}
                      </a>
                    </div>
                  </div>
                </MaskReveal>

                <div className="card-glow p-6">
                  <h2 className="text-lg font-semibold text-[color:var(--color-slate-dark)]">
                    Related pages
                  </h2>
                  <StaggerGroup className="mt-4 grid gap-3">
                    {[
                      {
                        href: "/indonesia-accounting-services",
                        label: "Indonesia Accounting Services",
                      },
                      {
                        href: "/services/bookkeeping",
                        label: "Bookkeeping Services",
                      },
                      {
                        href: "/services/tax-compliance",
                        label: "Tax Compliance",
                      },
                    ].map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="stagger-item rounded-2xl border border-[color:var(--color-border)] px-4 py-3 text-sm text-[color:var(--color-slate-light)] transition-colors hover:border-[color:var(--color-primary)] hover:text-[color:var(--color-primary)]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </StaggerGroup>
                </div>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>
    </article>
  );
}
