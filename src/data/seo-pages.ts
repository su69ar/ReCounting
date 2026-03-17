import type { ColorKey } from "@/lib/color-map";

export interface SeoLinkCard {
  href: string;
  title: string;
  description: string;
}

export interface SeoFaqItem {
  question: string;
  answer: string;
}

export interface CommercialLandingPageConfig {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  intro: string;
  priceNote: string;
  serviceName: string;
  serviceDescription: string;
  includedTitle: string;
  includedItems: { text: string; color: ColorKey }[];
  processTitle: string;
  processItems: {
    step: string;
    title: string;
    description: string;
    color: ColorKey;
  }[];
  audienceTitle: string;
  audienceIntro: string;
  audienceItems: { text: string; color: ColorKey }[];
  faqs: SeoFaqItem[];
  relatedLinks: SeoLinkCard[];
}

export const strategicSeoLinks: SeoLinkCard[] = [
  {
    href: "/bali-accounting-services",
    title: "Bali Accounting Services",
    description:
      "A commercial landing page for Bali-based bookkeeping, reporting, and finance support.",
  },
  {
    href: "/bali-tax-services",
    title: "Bali Tax Services",
    description:
      "Focused tax support for PPh, PPN, SPT filing, and practical Bali business compliance.",
  },
  {
    href: "/indonesia-accounting-services",
    title: "Indonesia Accounting Services",
    description:
      "Accounting support for businesses operating across Bali and wider Indonesia.",
  },
  {
    href: "/indonesia-tax-services",
    title: "Indonesia Tax Services",
    description:
      "Nationwide tax support for SMEs, PT PMA companies, and remote finance teams.",
  },
  {
    href: "/blog/best-bali-accounting-service",
    title: "How to Choose the Best Bali Accounting Service",
    description:
      "A buyer guide designed to rank for best or top Bali accounting queries.",
  },
];

export const commercialLandingPages: CommercialLandingPageConfig[] = [
  {
    slug: "bali-accounting-services",
    title: "Bali Accounting Services for SMEs & PT PMA | ReCounting",
    description:
      "Bali accounting services for SMEs, PT PMA companies, and expat-owned businesses. Get monthly bookkeeping, reconciliations, management reporting, and compliance-ready support from a Bali-based team.",
    eyebrow: "Bali Accounting Services",
    heading: "Bali accounting services built for growing businesses and expat-owned companies",
    intro:
      "If you need a Bali accounting team that can keep your books clean, explain reports in clear English, and coordinate with tax deadlines, ReCounting is built for that exact role.",
    priceNote: "Book a consultation for scope and pricing",
    serviceName: "Bali Accounting Services",
    serviceDescription:
      "Bali accounting services for SMEs, PT PMA companies, and expat-owned businesses including monthly bookkeeping, reconciliations, management reporting, and compliance support.",
    includedTitle: "What our Bali accounting services include",
    includedItems: [
      { text: "Monthly bookkeeping and transaction categorization", color: "primary" },
      { text: "Bank, cash, and balance sheet reconciliations", color: "accent" },
      { text: "Monthly P&L, balance sheet, and cash flow reporting", color: "secondary" },
      { text: "Management reporting for owners and partners", color: "primary" },
      { text: "Tax-ready records prepared for filing support", color: "accent" },
    ],
    processTitle: "How our Bali accounting engagement works",
    processItems: [
      {
        step: "01",
        title: "Review your current records",
        description:
          "We assess your accounting setup, transaction volume, reporting needs, and current compliance gaps.",
        color: "primary",
      },
      {
        step: "02",
        title: "Build a monthly workflow",
        description:
          "We map receipt collection, reconciliations, reporting deadlines, and communication rhythm.",
        color: "accent",
      },
      {
        step: "03",
        title: "Deliver reporting and support",
        description:
          "You receive clear monthly reports, practical insights, and fast answers to accounting questions.",
        color: "secondary",
      },
    ],
    audienceTitle: "Best fit for",
    audienceIntro:
      "This page is designed for founders who searched Bali accounting services because they need more than a bookkeeper. They need a responsive finance partner on the ground.",
    audienceItems: [
      { text: "SMEs that need monthly financial visibility", color: "primary" },
      { text: "PT PMA companies with investor or partner reporting needs", color: "accent" },
      { text: "Expat-owned businesses that need English-first support", color: "secondary" },
      { text: "Hospitality, F&B, agency, villa, and service businesses in Bali", color: "primary" },
    ],
    faqs: [
      {
        question: "What is included in your Bali accounting services?",
        answer:
          "Our Bali accounting services typically include bookkeeping, reconciliations, monthly reporting, report review, and coordination with tax filing requirements based on your business setup.",
      },
      {
        question: "Do you work with PT PMA and foreign-owned companies?",
        answer:
          "Yes. We support PT PMA and expat-owned companies that need clear communication, management reporting, and local Indonesian compliance support.",
      },
      {
        question: "Can you work remotely if our owners are outside Bali?",
        answer:
          "Yes. Many clients operate in Bali while directors or owners are based elsewhere, so we structure reporting and communication to work remotely.",
      },
    ],
    relatedLinks: [
      {
        href: "/services/bookkeeping",
        title: "Bookkeeping Services",
        description: "See the detailed monthly bookkeeping scope and deliverables.",
      },
      {
        href: "/services/financial-reports",
        title: "Financial Reports",
        description: "Explore how we prepare management-ready and compliance-ready reports.",
      },
      {
        href: "/blog/best-bali-accounting-service",
        title: "Best Bali Accounting Service Guide",
        description: "A buyer guide for choosing the right accountant in Bali.",
      },
    ],
  },
  {
    slug: "bali-tax-services",
    title: "Bali Tax Services for SMEs & PT PMA | ReCounting",
    description:
      "Bali tax services for SMEs, PT PMA companies, and expat-owned businesses. Get support for PPh, PPN, SPT filing, tax calendars, and practical compliance guidance in Bali.",
    eyebrow: "Bali Tax Services",
    heading: "Bali tax services with clear filing timelines and English-first guidance",
    intro:
      "Businesses in Bali often need practical tax help rather than abstract advice. This page is built for founders who want filing support, reminders, and clean documentation without tax-season chaos.",
    priceNote: "Pricing depends on filing scope and business complexity",
    serviceName: "Bali Tax Services",
    serviceDescription:
      "Bali tax services for SMEs, PT PMA companies, and expat-owned businesses including PPh, PPN, SPT filing, tax calendars, and practical compliance support.",
    includedTitle: "What our Bali tax services cover",
    includedItems: [
      { text: "Monthly PPh filing workflows", color: "primary" },
      { text: "PPN review, calculation, and submission support", color: "accent" },
      { text: "Annual SPT preparation and filing coordination", color: "secondary" },
      { text: "Compliance calendars and document reminders", color: "primary" },
      { text: "English explanations for local tax obligations", color: "accent" },
    ],
    processTitle: "How we keep your Bali tax work on track",
    processItems: [
      {
        step: "01",
        title: "Map your obligations",
        description:
          "We review which taxes apply to your business, what has been filed already, and where deadlines are exposed.",
        color: "primary",
      },
      {
        step: "02",
        title: "Set a filing cadence",
        description:
          "We organize monthly, quarterly, and annual submissions around your reporting cycle and source documents.",
        color: "accent",
      },
      {
        step: "03",
        title: "Maintain compliance",
        description:
          "We coordinate supporting records and communicate upcoming actions before deadlines become penalties.",
        color: "secondary",
      },
    ],
    audienceTitle: "Who usually needs this page",
    audienceIntro:
      "This landing page targets Bali tax services searches from owners who need direct action, not generic theory.",
    audienceItems: [
      { text: "Service businesses filing recurring PPh and PPN", color: "primary" },
      { text: "PT PMA companies with local tax complexity", color: "accent" },
      { text: "Expat founders who need tax concepts explained in plain English", color: "secondary" },
      { text: "Teams that already have bookkeeping but need stronger filing discipline", color: "primary" },
    ],
    faqs: [
      {
        question: "Do your Bali tax services include PPh and PPN support?",
        answer:
          "Yes. We support common Indonesian tax workflows including PPh and PPN filing requirements based on the business model and tax status of the company.",
      },
      {
        question: "Can you help if our previous filings were inconsistent?",
        answer:
          "Yes. We can review prior periods, identify missing information, and help you create a cleaner filing process going forward.",
      },
      {
        question: "Do you explain Indonesian tax rules in English?",
        answer:
          "Yes. English-first communication is one of the main reasons expat-owned businesses choose ReCounting for Bali tax support.",
      },
    ],
    relatedLinks: [
      {
        href: "/services/tax-compliance",
        title: "Tax Compliance Service",
        description: "See the detailed tax-compliance scope for Indonesia filings.",
      },
      {
        href: "/indonesia-tax-services",
        title: "Indonesia Tax Services",
        description: "Explore nationwide tax support beyond Bali-only operations.",
      },
      {
        href: "/blog/tax-deadlines-indonesia-2024",
        title: "Indonesia Tax Deadlines Guide",
        description: "Use our current deadlines article as a filing reference point.",
      },
    ],
  },
  {
    slug: "indonesia-accounting-services",
    title: "Indonesia Accounting Services for SMEs & PT PMA | ReCounting",
    description:
      "Indonesia accounting services for SMEs, PT PMA companies, and remote owners who need bookkeeping, reconciliations, monthly reporting, and finance support across Indonesia.",
    eyebrow: "Indonesia Accounting Services",
    heading: "Indonesia accounting services for teams that need clean reporting across Bali and beyond",
    intro:
      "Not every business searching Indonesia accounting services needs a Jakarta mega-firm. Many need a responsive accounting partner that understands Indonesian compliance and can support remote founders with clear monthly numbers.",
    priceNote: "Scope depends on transaction volume and reporting needs",
    serviceName: "Indonesia Accounting Services",
    serviceDescription:
      "Indonesia accounting services for SMEs, PT PMA companies, and remote owners who need bookkeeping, reconciliations, monthly reporting, and finance support across Indonesia.",
    includedTitle: "What our Indonesia accounting support covers",
    includedItems: [
      { text: "Bookkeeping and account maintenance", color: "primary" },
      { text: "Monthly management reporting for owners and finance leads", color: "accent" },
      { text: "Cross-checking records before tax filings", color: "secondary" },
      { text: "English-first communication for remote stakeholders", color: "primary" },
      { text: "Operational support for Bali-based and Indonesia-wide teams", color: "accent" },
    ],
    processTitle: "How we support accounting across Indonesia",
    processItems: [
      {
        step: "01",
        title: "Align on structure",
        description:
          "We confirm your entity, reporting expectations, chart-of-accounts setup, and source of transaction data.",
        color: "primary",
      },
      {
        step: "02",
        title: "Standardize monthly close",
        description:
          "We build a consistent reporting cycle so finance data arrives in the same clean format every month.",
        color: "accent",
      },
      {
        step: "03",
        title: "Support owners and operators",
        description:
          "We answer finance questions quickly and keep management reporting usable for decision-making.",
        color: "secondary",
      },
    ],
    audienceTitle: "Typical clients for this page",
    audienceIntro:
      "These searches usually come from owners who need Indonesia accounting services but still want hands-on communication and practical speed.",
    audienceItems: [
      { text: "Founders living outside Indonesia who run local operations", color: "primary" },
      { text: "PT PMA companies that need investor-friendly reporting", color: "accent" },
      { text: "Bali-based businesses expanding to a wider Indonesia footprint", color: "secondary" },
      { text: "Companies with in-house ops teams but no reliable accounting lead", color: "primary" },
    ],
    faqs: [
      {
        question: "Do you only serve Bali companies?",
        answer:
          "No. We are Bali-based, but we also support Indonesia-wide accounting engagements for founders and finance teams that need remote-friendly reporting and local compliance awareness.",
      },
      {
        question: "Can you coordinate with our tax filing process?",
        answer:
          "Yes. Clean accounting and tax filing should not live in separate silos, so we structure accounting output to support tax work efficiently.",
      },
      {
        question: "Is this suitable for remote owners?",
        answer:
          "Yes. We regularly support owners and directors who need monthly visibility without being physically present in Indonesia.",
      },
    ],
    relatedLinks: [
      {
        href: "/bali-accounting-services",
        title: "Bali Accounting Services",
        description: "See the Bali-focused version of this service intent.",
      },
      {
        href: "/services/financial-reports",
        title: "Financial Reports",
        description: "Review our reporting-focused service page for management visibility.",
      },
      {
        href: "/blog/bookkeeping-best-practices",
        title: "Bookkeeping Best Practices",
        description: "Strengthen your monthly close and records workflow.",
      },
    ],
  },
  {
    slug: "indonesia-tax-services",
    title: "Indonesia Tax Services for SMEs & PT PMA | ReCounting",
    description:
      "Indonesia tax services for SMEs, PT PMA companies, and growing businesses that need support for PPh, PPN, annual SPT filing, and a cleaner tax calendar across Indonesia.",
    eyebrow: "Indonesia Tax Services",
    heading: "Indonesia tax services for businesses that need cleaner filings and less compliance risk",
    intro:
      "If your team is searching Indonesia tax services, the real need is usually simpler filing workflows, fewer surprises, and a partner who can translate obligations into an action plan.",
    priceNote: "Tax support is scoped after an initial review",
    serviceName: "Indonesia Tax Services",
    serviceDescription:
      "Indonesia tax services for SMEs, PT PMA companies, and growing businesses that need support for PPh, PPN, annual SPT filing, and a cleaner tax calendar across Indonesia.",
    includedTitle: "What our Indonesia tax services include",
    includedItems: [
      { text: "Review of recurring filing obligations", color: "primary" },
      { text: "Support for PPh, PPN, and annual SPT workflows", color: "accent" },
      { text: "Tax calendars and deadline coordination", color: "secondary" },
      { text: "Documentation support for cleaner compliance files", color: "primary" },
      { text: "Practical communication for founders and finance teams", color: "accent" },
    ],
    processTitle: "How we run Indonesia tax support",
    processItems: [
      {
        step: "01",
        title: "Review tax exposure",
        description:
          "We identify what taxes apply, what is overdue, and what documentation is still missing.",
        color: "primary",
      },
      {
        step: "02",
        title: "Organize data and deadlines",
        description:
          "We align bookkeeping output, payroll inputs, invoices, and filing dates into one workable cadence.",
        color: "accent",
      },
      {
        step: "03",
        title: "Keep the cycle clean",
        description:
          "We reduce last-minute pressure by maintaining a repeatable tax process with clearer responsibilities.",
        color: "secondary",
      },
    ],
    audienceTitle: "Strong fit for",
    audienceIntro:
      "This page is aimed at companies that need Indonesian tax support in a way that is operationally clear, not just technically correct.",
    audienceItems: [
      { text: "SMEs with recurring monthly filing obligations", color: "primary" },
      { text: "PT PMA companies that need stronger tax process discipline", color: "accent" },
      { text: "Founder-led teams without an internal tax specialist", color: "secondary" },
      { text: "Remote finance stakeholders who need regular visibility", color: "primary" },
    ],
    faqs: [
      {
        question: "What taxes do you usually help with in Indonesia?",
        answer:
          "Most businesses come to us for recurring support around PPh, PPN, and annual SPT workflows, plus document organization and filing preparation.",
      },
      {
        question: "Can you help nationwide or only in Bali?",
        answer:
          "We are Bali-based, but our Indonesia tax service positioning is built for companies operating beyond Bali as well.",
      },
      {
        question: "Can you coordinate with our existing bookkeeper?",
        answer:
          "Yes. In many cases we work alongside an internal admin or bookkeeper and strengthen the tax filing process around their records.",
      },
    ],
    relatedLinks: [
      {
        href: "/bali-tax-services",
        title: "Bali Tax Services",
        description: "Review the Bali-focused tax landing page for local intent queries.",
      },
      {
        href: "/services/tax-compliance",
        title: "Tax Compliance Service",
        description: "See the detailed tax service scope and process.",
      },
      {
        href: "/blog/ppn-pph-explained",
        title: "PPh vs PPN Explained",
        description: "A plain-English guide to the two taxes most founders confuse.",
      },
    ],
  },
];

export function getCommercialLandingPage(slug: string) {
  const page = commercialLandingPages.find((item) => item.slug === slug);

  if (!page) {
    throw new Error(`Unknown commercial landing page: ${slug}`);
  }

  return page;
}
