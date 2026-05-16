import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/animations/Reveal";
import { StaggerGroup } from "@/components/animations/StaggerGroup";
import { SplitTextHeading } from "@/components/animations/SplitTextHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/lib/schema";
import { primaryCta, secondaryCta, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Bali Tax Deadline Calendar 2026 | Monthly and Annual Filings",
  description:
    "A practical Bali tax deadline calendar for SMEs, PT PMA, and foreign-owned businesses. Monthly PPh, PPN, PB1, and annual SPT filing dates with planning notes for 2026.",
  alternates: { canonical: "/bali-tax-deadline-calendar" },
};

const recurringDeadlines = [
  {
    name: "PPh Pasal 21 (Employee withholding)",
    due: "10th of the following month",
    detail:
      "Monthly. Withholding on salaries, bonuses, and benefits. Payment to bank by the 10th, reporting by the 20th.",
  },
  {
    name: "PPh Pasal 23 / 26 (Services, royalties, foreign payments)",
    due: "10th of the following month",
    detail:
      "Monthly. Withholding on professional services, rent, royalties, and payments to foreign principals (PPh 26 at 20% unless treaty-reduced).",
  },
  {
    name: "PPh Pasal 25 (Corporate income-tax instalment)",
    due: "15th of the following month",
    detail:
      "Monthly. Corporate income-tax instalment based on prior-year SPT or scaled to current revenue if no prior year.",
  },
  {
    name: "PPh Pasal 4(2) (Final tax — rent, certain interest, etc.)",
    due: "10th of the following month",
    detail:
      "Monthly when applicable. Final tax on rent income, certain interest, and some specific transactions.",
  },
  {
    name: "PPh Final UMKM 0.5%",
    due: "15th of the following month",
    detail:
      "Monthly for businesses qualifying under the 0.5% UMKM scheme (gross revenue under IDR 4.8 billion annually).",
  },
  {
    name: "PPN (Value-Added Tax)",
    due: "End of the following month",
    detail:
      "Monthly. SPT Masa PPN reports input and output VAT. Faktur Pajak must be issued and uploaded to the DJP system.",
  },
  {
    name: "PB1 / PHR (Pajak Hotel & Restoran)",
    due: "Varies by regency (typically 10th or 15th)",
    detail:
      "Monthly local-government tax on hotel and restaurant revenue. Badung, Denpasar, and Gianyar each have their own filing portal.",
  },
  {
    name: "BPJS Ketenagakerjaan & Kesehatan",
    due: "10th of the following month",
    detail:
      "Monthly. Employee social security and health-insurance contributions. Late payment triggers fines and benefit suspensions.",
  },
];

const annualDeadlines = [
  {
    name: "SPT Tahunan Badan (Annual Corporate Tax Return)",
    due: "April 30, 2026 (for fiscal year 2025)",
    detail:
      "Annual. Corporate income-tax return for all PT, PT PMA, and CV entities. Audited financials required where applicable.",
  },
  {
    name: "SPT Tahunan Orang Pribadi (Annual Personal Tax Return)",
    due: "March 31, 2026 (for fiscal year 2025)",
    detail:
      "Annual. Personal income-tax return for individual taxpayers, including KITAS holders qualifying as tax residents (183-day test).",
  },
  {
    name: "LKPM (Investment Realisation Report)",
    due: "Quarterly (April 10, July 10, October 10, January 10)",
    detail:
      "Quarterly for PT PMA entities, filed via OSS RBA portal. Reports cumulative investment realisation.",
  },
  {
    name: "Bukti Potong 1721-A1 (Annual employee tax certificate)",
    due: "End of January 2026 (for FY 2025)",
    detail:
      "Annual. PPh 21 reconciliation certificate issued to every Indonesian-tax-resident employee.",
  },
];

const faqs = [
  {
    question: "What happens if I miss a Bali tax deadline?",
    answer:
      "Late filing typically triggers IDR 100,000 administrative fines per month per filing, plus 2% per month on unpaid tax. Repeat or severe non-compliance can escalate to audit, NPWP suspension, or criminal-tax investigation.",
  },
  {
    question: "Are local Bali taxes different from national taxes?",
    answer:
      "Yes. PB1 / PHR is collected by regency governments (Badung, Denpasar, Gianyar, Klungkung, etc.) and is separate from national taxes administered by DJP (PPh, PPN). Each regency has its own portal and rates.",
  },
  {
    question: "How is Coretax DJP Online affecting deadlines?",
    answer:
      "Filing dates have not changed, but the platform for submission has shifted from DJP Online to Coretax for many filing types. Migration timelines depend on filing category. We monitor and migrate clients as the rollout progresses.",
  },
  {
    question: "Does this calendar apply to expats with personal SPT?",
    answer:
      "Yes. Indonesian-tax-resident expats must file SPT 1770 / 1770S by March 31, 2026 for the 2025 fiscal year. The 183-day residency test determines tax-resident status.",
  },
  {
    question: "Do you handle these filings for clients?",
    answer:
      "Yes. End-to-end Indonesian tax compliance is a core ReCounting service. We file monthly and annual returns on schedule, manage Coretax accounts, and handle KPP correspondence in both English and Indonesian.",
  },
];

const breadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: siteConfig.url },
  {
    name: "Bali Tax Deadline Calendar",
    url: `${siteConfig.url}/bali-tax-deadline-calendar`,
  },
]);
const faqSchema = generateFAQSchema(faqs);

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={faqSchema} />

      <section className="section-space">
        <div className="container-grid">
          <Breadcrumbs
            className="mb-6"
            items={[
              { name: "Home", href: "/" },
              { name: "Bali tax deadline calendar" },
            ]}
          />
          <Reveal>
            <div className="max-w-3xl space-y-5">
              <p className="badge-pill">2026 Tax Calendar</p>
              <SplitTextHeading
                text="Bali tax deadline calendar 2026"
                as="h1"
                className="text-4xl font-bold tracking-tight text-[color:var(--color-slate-dark)]"
              />
              <p className="section-subtitle">
                Recurring monthly, quarterly, and annual Indonesian tax
                filings that apply to Bali businesses. Use this as a planning
                reference, not legal advice — your actual obligations depend
                on entity type, revenue, and registration scope.
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
          </Reveal>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-grid">
          <Reveal>
            <div className="max-w-2xl">
              <p className="badge-gradient inline-flex mb-3">Monthly filings</p>
              <SplitTextHeading
                text="Recurring monthly Bali tax filings"
                as="h2"
                className="section-title"
              />
            </div>
          </Reveal>
          <StaggerGroup className="mt-8 grid gap-4 md:grid-cols-2">
            {recurringDeadlines.map((item) => (
              <div key={item.name} className="card-glow stagger-item p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-primary)]">
                  Due: {item.due}
                </p>
                <h3 className="mt-2 text-base font-semibold text-[color:var(--color-slate-dark)]">
                  {item.name}
                </h3>
                <p className="mt-3 text-sm text-[color:var(--color-slate-light)]">
                  {item.detail}
                </p>
              </div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="section-space">
        <div className="container-grid">
          <Reveal>
            <div className="max-w-2xl">
              <p className="badge-gradient inline-flex mb-3">
                Annual + quarterly
              </p>
              <SplitTextHeading
                text="Annual and quarterly filings"
                as="h2"
                className="section-title"
              />
            </div>
          </Reveal>
          <StaggerGroup className="mt-8 grid gap-4 md:grid-cols-2">
            {annualDeadlines.map((item) => (
              <div key={item.name} className="card-glow stagger-item p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-primary)]">
                  Due: {item.due}
                </p>
                <h3 className="mt-2 text-base font-semibold text-[color:var(--color-slate-dark)]">
                  {item.name}
                </h3>
                <p className="mt-3 text-sm text-[color:var(--color-slate-light)]">
                  {item.detail}
                </p>
              </div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-grid">
          <Reveal>
            <div className="max-w-2xl">
              <p className="badge-gradient inline-flex mb-3">FAQ</p>
              <SplitTextHeading
                text="Common questions about Bali tax deadlines"
                as="h2"
                className="section-title"
              />
            </div>
          </Reveal>
          <StaggerGroup className="mt-8 grid gap-4 md:grid-cols-2">
            {faqs.map((item) => (
              <div key={item.question} className="card-glow stagger-item p-6">
                <h3 className="text-base font-semibold text-[color:var(--color-slate-dark)]">
                  {item.question}
                </h3>
                <p className="mt-3 text-sm text-[color:var(--color-slate-light)]">
                  {item.answer}
                </p>
              </div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="section-space">
        <div className="container-grid">
          <Reveal>
            <div className="card-glass rounded-3xl p-8 lg:p-10 text-center">
              <p className="badge-gradient inline-flex mb-3">
                Stay deadline-clean
              </p>
              <SplitTextHeading
                text="Want us to handle these filings for you?"
                as="h2"
                className="text-2xl font-semibold"
              />
              <p className="mt-3 text-sm text-[color:var(--color-slate-light)] max-w-2xl mx-auto">
                ReCounting prepares and files PPh, PPN, PB1, BPJS, and annual
                SPT for Bali SMEs and PT PMA companies. Book a free consult to
                see if we are a fit.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Link href={primaryCta.href} className="btn-primary">
                  {primaryCta.label}
                </Link>
                <Link
                  href="/blog/tax-deadlines-indonesia-2026"
                  className="btn-secondary"
                >
                  Read the 2026 deadlines article
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
