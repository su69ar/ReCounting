import type { LocationSlug } from "./locations";

export type ServiceSlug =
  | "bali-accounting-services"
  | "bali-tax-services"
  | "bali-bookkeeping-services"
  | "pt-pma-accounting-bali"
  | "expat-tax-services-bali"
  | "villa-accounting-services-bali"
  | "restaurant-accounting-services-bali";

export type ServiceProfile = {
  slug: ServiceSlug;
  shortName: string;
  longName: string;
  metaTitleTemplate: string;
  metaDescriptionTemplate: string;
  h1Template: string;
  intro: string;
  deliverables: string[];
  audience: string[];
  audienceLabel: string;
};

export const services: Record<ServiceSlug, ServiceProfile> = {
  "bali-accounting-services": {
    slug: "bali-accounting-services",
    shortName: "Accounting",
    longName: "Accounting Services",
    metaTitleTemplate: "Accounting Services in {City}, Bali | ReCounting",
    metaDescriptionTemplate:
      "Monthly accounting and bookkeeping services for businesses in {City}. Bilingual support for SMEs, PT PMA, and expat-owned companies. Free consultation.",
    h1Template: "Accounting Services in {City}, Bali",
    intro:
      "Monthly bookkeeping, financial reporting, and accounting support tailored to {City}'s business mix. We work with SMEs, PT PMA, and expat-owned businesses with English-first communication and Indonesian regulatory expertise.",
    deliverables: [
      "Monthly bookkeeping with bank reconciliation",
      "Monthly profit and loss statement",
      "Monthly balance sheet",
      "Cash-flow snapshot",
      "Tax-ready ledger for PPh, PPN, and annual SPT",
      "WhatsApp-first communication, response within 2 hours on business days",
    ],
    audience: ["sme", "pt-pma", "expat", "startup"],
    audienceLabel: "SMEs, PT PMA, and expat-owned businesses",
  },
  "bali-tax-services": {
    slug: "bali-tax-services",
    shortName: "Tax",
    longName: "Tax Services",
    metaTitleTemplate: "Tax Services in {City}, Bali | Indonesia Tax Compliance",
    metaDescriptionTemplate:
      "Indonesian tax filing and compliance in {City} — PPh, PPN, annual SPT, NPWP support. Bilingual team. Free consultation.",
    h1Template: "Tax Services in {City}, Bali",
    intro:
      "End-to-end Indonesian tax compliance for businesses operating in {City}. PPh 21, 23, 25, 4(2), PPN, annual SPT, and KPP correspondence support — with English-first communication for foreign principals.",
    deliverables: [
      "Monthly PPh and PPN preparation and filing",
      "Annual SPT preparation and submission",
      "NPWP registration and Coretax onboarding support",
      "PPh withholding bukti potong issuance",
      "PPN faktur pajak management",
      "KPP correspondence in English with Indonesian-language documentation",
    ],
    audience: ["sme", "pt-pma", "expat", "startup"],
    audienceLabel: "SMEs, PT PMA, and expat-owned businesses",
  },
  "bali-bookkeeping-services": {
    slug: "bali-bookkeeping-services",
    shortName: "Bookkeeping",
    longName: "Bookkeeping Services",
    metaTitleTemplate: "Bookkeeping Services in {City}, Bali | Monthly Books",
    metaDescriptionTemplate:
      "Monthly bookkeeping in {City} with bank reconciliation, transaction entry, and reports. Bilingual support for Bali businesses.",
    h1Template: "Bookkeeping Services in {City}, Bali",
    intro:
      "Clean, audit-ready bookkeeping for {City} businesses — every transaction categorised, every bank line reconciled, every month closed on a predictable cadence so management decisions and tax filings rest on the same numbers.",
    deliverables: [
      "Daily or weekly transaction entry from bank statements and POS exports",
      "Monthly bank reconciliation across all IDR and foreign-currency accounts",
      "Accounts payable and accounts receivable tracking",
      "Inventory and cost-of-goods journals where applicable",
      "Month-end close with reviewed trial balance",
      "Reports delivered in your accounting tool of choice (Accurate, Xero, Wave, Zoho)",
    ],
    audience: ["sme", "pt-pma", "expat", "villa", "restaurant"],
    audienceLabel: "SMEs, villas, restaurants, and PT PMA companies",
  },
  "pt-pma-accounting-bali": {
    slug: "pt-pma-accounting-bali",
    shortName: "PT PMA Accounting",
    longName: "PT PMA Accounting",
    metaTitleTemplate: "PT PMA Accounting in {City}, Bali | Foreign-Owned Company Support",
    metaDescriptionTemplate:
      "Accounting and tax compliance for PT PMA companies in {City}. Foreign-owned business support with English-first reporting. Free consultation.",
    h1Template: "PT PMA Accounting in {City}, Bali",
    intro:
      "Accounting and tax compliance designed for PT PMA foreign-owned companies operating in {City}. We handle Indonesian compliance while delivering reports in formats expected by foreign principals and offshore stakeholders.",
    deliverables: [
      "PT PMA-grade monthly accounting and reconciliation",
      "Foreign-stakeholder reporting in IDR plus USD / EUR equivalents",
      "PPh 26 withholding on foreign-principal payments",
      "Royalty, management-fee, and dividend tax structuring",
      "Annual SPT plus LKPM (Investment Realisation Report) preparation",
      "Coretax DJP Online filing with bilingual documentation",
    ],
    audience: ["pt-pma", "expat"],
    audienceLabel: "PT PMA foreign-owned companies",
  },
  "expat-tax-services-bali": {
    slug: "expat-tax-services-bali",
    shortName: "Expat Tax",
    longName: "Expat Tax Services",
    metaTitleTemplate: "Expat Tax Services in {City}, Bali | Personal Tax for Foreigners",
    metaDescriptionTemplate:
      "Personal tax for expats in {City}: KITAS NPWP, annual SPT 1770, dual-resident planning, English-first support.",
    h1Template: "Expat Tax Services in {City}, Bali",
    intro:
      "Personal Indonesian tax for expats living and working in {City}. We help KITAS holders register an NPWP, file annual SPT 1770 / 1770S, and navigate dual-resident situations under Indonesian tax-residency rules.",
    deliverables: [
      "Personal NPWP registration for KITAS holders",
      "Annual SPT 1770 / 1770S preparation",
      "Worldwide-income disclosure for Indonesian tax residents",
      "Tax-treaty analysis for dual-resident situations",
      "Foreign-asset reporting where applicable",
      "Coordination with employer or PT PMA payroll team",
    ],
    audience: ["expat"],
    audienceLabel: "Expats and foreign individuals on KITAS",
  },
  "villa-accounting-services-bali": {
    slug: "villa-accounting-services-bali",
    shortName: "Villa Accounting",
    longName: "Villa and Short-Term Rental Accounting",
    metaTitleTemplate: "Villa Accounting in {City}, Bali | OTA Reconciliation + PB1",
    metaDescriptionTemplate:
      "Accounting for villa rentals and short-term hospitality in {City}: OTA payouts, PB1, foreign-currency, English-first support.",
    h1Template: "Villa and Short-Term Rental Accounting in {City}, Bali",
    intro:
      "Accounting built for villa operators in {City}. We handle OTA-platform payout reconciliation (Airbnb, Booking.com, Vrbo), PB1 / PHR compliance, foreign-currency invoicing, and seasonal-staffing payroll in one workflow.",
    deliverables: [
      "Multi-platform OTA payout reconciliation",
      "PB1 / PHR (Pajak Hotel & Restoran) preparation",
      "Foreign-currency invoicing and cash-flow tracking",
      "Maintenance and capex categorisation for property assets",
      "Seasonal-staff payroll with rolling contracts",
      "Owner-payout statements in IDR and USD equivalents",
    ],
    audience: ["villa", "pt-pma", "expat"],
    audienceLabel: "Villa operators and short-term-rental hosts",
  },
  "restaurant-accounting-services-bali": {
    slug: "restaurant-accounting-services-bali",
    shortName: "Restaurant Accounting",
    longName: "Restaurant and F&B Accounting",
    metaTitleTemplate: "Restaurant Accounting in {City}, Bali | F&B + PB1 Specialists",
    metaDescriptionTemplate:
      "Restaurant and F&B accounting in {City}: daily POS reconciliation, inventory, PB1, service-charge handling.",
    h1Template: "Restaurant and F&B Accounting in {City}, Bali",
    intro:
      "F&B-specific accounting for restaurants and beach clubs in {City}. We reconcile daily POS sales, track inventory and food-cost ratios against menu margins, manage service-charge accounting, and prepare PB1 / PPN filings on Indonesian timelines.",
    deliverables: [
      "Daily POS reconciliation with cash, card, and platform breakdown",
      "Inventory and cost-of-goods tracking with monthly food-cost ratio",
      "Service-charge accounting and BPJS treatment for tipped staff",
      "PB1 monthly preparation and filing",
      "Outlet-level profit and loss for multi-venue operators",
      "Daily cash-handling controls and audit trail",
    ],
    audience: ["restaurant"],
    audienceLabel: "Restaurants, cafes, and beach clubs",
  },
};

// Per-location custom FAQs for each service combination.
// Generated thoughtfully — not lorem-ipsum'd — to pass uniqueness guardrails.
// Format: `{serviceSlug}|{locationSlug}` => 4-6 FAQs.
export const locationServiceFaqs: Record<
  string,
  { question: string; answer: string }[]
> = {
  "bali-accounting-services|canggu": [
    {
      question: "Do you handle OTA payouts from Airbnb and Booking.com?",
      answer:
        "Yes. We reconcile OTA payouts against booking ledgers, separate platform fees, taxes withheld at source, and net IDR landings, then book each booking-night to the right revenue and tax period.",
    },
    {
      question: "Many Canggu businesses invoice in USD — can you support that?",
      answer:
        "Yes. We record foreign-currency invoices with exchange-rate documentation suitable for KPP, and convert to IDR at the rate that applies on the transaction date or settlement date, depending on the accounting policy.",
    },
    {
      question: "Do you cover PB1 for restaurants and beach clubs?",
      answer:
        "Yes. PB1 (Pajak Pembangunan I) applies to most Canggu F&B venues at 10% of food and beverage revenue, filed monthly to the local government. We prepare the filing and reconcile against POS daily sales.",
    },
    {
      question: "How do you handle our rotating freelance staff?",
      answer:
        "We categorise freelance fees correctly for PPh 21 withholding, issue bukti potong where required, and track BPJS coverage windows for staff on short rotations.",
    },
  ],
  "bali-tax-services|canggu": [
    {
      question: "Which KPP handles Canggu businesses?",
      answer:
        "Most Canggu businesses register with KPP Pratama Badung Utara. We handle correspondence and filings directly with that office.",
    },
    {
      question: "How does PB1 differ from PPN for Canggu restaurants?",
      answer:
        "Restaurants generally apply PB1 (local government tax) at 10% on food and beverage. PPN is the national VAT — typically applied to non-restaurant goods and services, with a registration threshold of IDR 4.8 billion in annual gross revenue.",
    },
    {
      question: "We're a villa management company — do we need PPN?",
      answer:
        "If your villa-management gross revenue crosses IDR 4.8 billion in a 12-month rolling period, you must register as a PKP and charge PPN. We monitor the threshold and prepare the registration ahead of the trigger.",
    },
    {
      question: "Can you support Coretax migration?",
      answer:
        "Yes. We are familiar with the DJP Online to Coretax transition and can migrate filings, payment confirmations, and historical SPT records.",
    },
  ],
  "bali-bookkeeping-services|canggu": [
    {
      question: "Which accounting tools do you support for Canggu businesses?",
      answer:
        "We work with Accurate, Xero, Wave, and Zoho Books. Most Canggu operators prefer Xero for OTA-friendly integrations and Accurate for native IDR + KPP-aligned reporting.",
    },
    {
      question: "Can you reconcile a high transaction volume?",
      answer:
        "Yes. We handle high-frequency POS, OTA, and bank transactions with daily or weekly entry cadence, depending on operational complexity.",
    },
    {
      question: "Do you provide owner-style management reports?",
      answer:
        "Yes. We deliver a monthly P&L, balance sheet, and cash-flow snapshot, plus operator-friendly KPI dashboards (food-cost percentage, occupancy, ADR, etc.) on request.",
    },
  ],
  "bali-accounting-services|ubud": [
    {
      question: "We're a yayasan — do you support non-profit accounting?",
      answer:
        "Yes. Yayasan accounting requires careful donor-fund tracking, restricted vs unrestricted income, and disclosure in line with PSAK 45. We have experience with Ubud-based wellness yayasan and CSR-aligned operators.",
    },
    {
      question: "Can you handle online retreat revenue?",
      answer:
        "Yes. We track online retreat revenue separately from in-person, apply the right Indonesian tax treatment based on participant residence and platform, and document evidence for both Indonesian and stakeholder reporting.",
    },
    {
      question: "How do you treat freelance facilitators and instructors?",
      answer:
        "Freelance instructors paid by Ubud studios typically trigger PPh 21 withholding (Indonesian residents) or PPh 26 (non-residents). We issue bukti potong and reconcile to the studio's payroll workflow.",
    },
    {
      question: "Do you support consignment inventory for galleries?",
      answer:
        "Yes. Consignment stock stays off the balance sheet until sold, with a parallel inventory record for the artist. We document the agreement and settlement workflow.",
    },
  ],
  "bali-tax-services|ubud": [
    {
      question: "Which KPP serves Ubud?",
      answer:
        "Ubud businesses generally register with KPP Pratama Gianyar. We handle correspondence and filings directly with that office.",
    },
    {
      question: "Are workshop and retreat fees subject to PPN?",
      answer:
        "If your PT PMA crosses IDR 4.8 billion gross revenue, you must register as a PKP and charge PPN on services consumed in Indonesia. Online services to overseas participants may qualify for zero-rate treatment under specific conditions.",
    },
    {
      question: "Do we need to withhold PPh on foreign instructors?",
      answer:
        "Yes — PPh 26 generally applies to non-resident instructor fees at 20%, subject to applicable tax treaties. We calculate the correct rate and issue documentation.",
    },
  ],
  "bali-bookkeeping-services|ubud": [
    {
      question: "Do you support multi-currency for international retreats?",
      answer:
        "Yes. We track revenue in the currency of receipt and convert to IDR using documented exchange rates suitable for Indonesian filings.",
    },
    {
      question: "Can you set up class-based reporting for separate programs?",
      answer:
        "Yes. We tag transactions by program or retreat to allow operator-level profitability by offering.",
    },
    {
      question: "How do you handle pre-paid deposits?",
      answer:
        "Deposits are booked as deferred revenue until the retreat or workshop date. We unwind to revenue on the delivery date and document the cancellation accounting.",
    },
  ],
  "bali-accounting-services|seminyak": [
    {
      question: "Do you handle multi-outlet F&B operations?",
      answer:
        "Yes. We deliver outlet-level P&Ls, consolidated group-level reporting, and intercompany eliminations where venues share a holding entity.",
    },
    {
      question: "Can you track food-cost and beverage-cost percentages?",
      answer:
        "Yes. We track COGS by category, deliver monthly food-cost and beverage-cost ratios, and flag variances against menu targets.",
    },
    {
      question: "How do you handle high-volume daily POS reconciliation?",
      answer:
        "We integrate POS exports (Loyverse, Square, MokaPOS, etc.) with the accounting ledger and reconcile cash, card, and platform receipts on a daily cadence.",
    },
    {
      question: "Do you cover service-charge distribution?",
      answer:
        "Yes. We handle service-charge collection, calculate distribution under the venue's policy, and ensure BPJS and PPh 21 implications for tipped staff are correctly treated.",
    },
  ],
  "bali-tax-services|seminyak": [
    {
      question: "Which KPP serves Seminyak?",
      answer:
        "Seminyak businesses typically register with KPP Pratama Badung Selatan or KPP Pratama Badung Utara depending on exact address.",
    },
    {
      question: "We run multiple venues under different entities — how do you file taxes?",
      answer:
        "Each PT files its own returns. For groups, we coordinate filings, intercompany invoicing, and PPh 23 withholding where management fees flow between entities.",
    },
    {
      question: "Do you handle KITAS withholding for foreign chefs?",
      answer:
        "Yes. Foreign chefs on KITAS are Indonesian tax residents from the moment they meet the residence test. We apply PPh 21 progressive rates and handle the personal NPWP filings if needed.",
    },
  ],
  "bali-bookkeeping-services|seminyak": [
    {
      question: "Can you integrate with our POS platform?",
      answer:
        "Yes. We work with Loyverse, Square, MokaPOS, Cashier Berkah, and most major POS systems. We import daily sales, payments, and tax breakdowns straight into the ledger.",
    },
    {
      question: "How do you track inventory shrinkage?",
      answer:
        "We reconcile period-end stock counts against theoretical inventory, calculate shrinkage as a percentage of revenue, and flag categories with unusual variance.",
    },
    {
      question: "Do you support menu engineering inputs?",
      answer:
        "Yes. We deliver monthly cost-of-sales by menu category and flag low-margin items so the kitchen can refine pricing or recipe.",
    },
  ],
  "bali-accounting-services|sanur": [
    {
      question: "We're expats living in Sanur — can you do both personal and business?",
      answer:
        "Yes. We commonly support expat clients with both personal SPT 1770 / 1770S filings and PT PMA-level accounting under one engagement.",
    },
    {
      question: "Do you cover property income from foreign-owned villas?",
      answer:
        "We help structure property-income reporting through the PT PMA or nominee arrangement, ensuring the income is correctly treated under Indonesian tax law.",
    },
    {
      question: "Can you support clients who travel often?",
      answer:
        "Yes. We work asynchronously over email and WhatsApp, schedule calls in your time zone, and handle KPP correspondence on your behalf.",
    },
    {
      question: "Is your office actually in Sanur?",
      answer:
        "Yes. Our head office is on Jalan Sedap Malam No 9A in Sanur Kaja, Denpasar, so in-person meetings are easy for Sanur-based clients.",
    },
  ],
  "bali-tax-services|sanur": [
    {
      question: "Which KPP serves Sanur?",
      answer:
        "Sanur falls under South Denpasar and is typically served by KPP Pratama Denpasar Timur. We handle correspondence directly with that office.",
    },
    {
      question: "I'm a KITAS holder — do I need an NPWP?",
      answer:
        "If you stay in Indonesia for more than 183 days in any 12-month period, you become an Indonesian tax resident and must register an NPWP and file an annual SPT.",
    },
    {
      question: "Will my foreign income be taxed?",
      answer:
        "Yes — Indonesian tax residents are taxed on worldwide income, subject to tax-treaty relief. We help analyse your specific treaty position and report correctly.",
    },
  ],
  "bali-bookkeeping-services|sanur": [
    {
      question: "Can we hand over messy historical books for clean-up?",
      answer:
        "Yes. We do clean-up engagements for prior periods, including bank-statement re-reconciliation, missing-document chase-down, and chart-of-accounts rebuild.",
    },
    {
      question: "Do you support clients with USD-denominated revenue?",
      answer:
        "Yes. We book USD revenue in dual currency and convert to IDR for reporting using KMK exchange rates or documented daily mid-rates.",
    },
    {
      question: "How long does monthly close typically take?",
      answer:
        "Standard monthly close is delivered by day 10 of the following month for most Sanur clients, faster for businesses with clean POS and bank integrations.",
    },
  ],
  "bali-accounting-services|denpasar": [
    {
      question: "Are you familiar with PPh Final UMKM 0.5%?",
      answer:
        "Yes. PPh Final UMKM applies at 0.5% of monthly gross turnover for small Indonesian businesses below IDR 4.8 billion annual revenue. We monitor the threshold and handle the transition to the regular regime.",
    },
    {
      question: "Do you handle KPP correspondence in Bahasa Indonesia?",
      answer:
        "Yes. Our Indonesian team handles all KPP correspondence in Bahasa Indonesia, with English-language summaries delivered to the client.",
    },
    {
      question: "Can you help with audit preparation?",
      answer:
        "Yes. We prepare the trial balance, supporting documents, and reconciliations needed for tax-audit or financial-audit engagements.",
    },
    {
      question: "Do you work with Indonesian-owned SMEs?",
      answer:
        "Absolutely. About half our Denpasar engagements are Indonesian-owned SMEs across trading, retail, and professional services.",
    },
  ],
  "bali-tax-services|denpasar": [
    {
      question: "Which KPP serves Denpasar businesses?",
      answer:
        "Denpasar businesses register with KPP Pratama Denpasar Barat or KPP Pratama Denpasar Timur, depending on the exact sub-district. We confirm assignment during onboarding.",
    },
    {
      question: "Can you migrate us from DJP Online to Coretax?",
      answer:
        "Yes. We support the Coretax migration, including historical SPT continuity, NPWP linkage, and bukti potong import where the data exists.",
    },
    {
      question: "How do you handle PPh 23 withholding on rent and services?",
      answer:
        "We calculate PPh 23 at the correct rate (2% for services, rent, royalties; 15% for dividends, interest, prize income), issue bukti potong, and remit monthly.",
    },
  ],
  "bali-bookkeeping-services|denpasar": [
    {
      question: "We use Accurate — can you continue with that?",
      answer:
        "Yes. Accurate is one of the most common platforms among Denpasar SMEs, especially trading and distribution. We pick up existing Accurate setups without forcing a tool change.",
    },
    {
      question: "Can you track receivables for B2B clients?",
      answer:
        "Yes. We track AR ageing, send statement reminders if delegated, and reconcile collections against invoices.",
    },
    {
      question: "Do you cover inventory for trading companies?",
      answer:
        "Yes. We support perpetual or periodic inventory, with COGS calculation methods aligned to Indonesian tax requirements.",
    },
  ],
  // PT PMA Tier-B per location
  "pt-pma-accounting-bali|canggu": [
    {
      question: "Do you handle LKPM filings for PT PMA in Canggu?",
      answer:
        "Yes. LKPM (Investment Realisation Report) is filed quarterly via OSS for PT PMA. We prepare the data and submit on schedule.",
    },
    {
      question: "Can you bill in USD for foreign investors?",
      answer:
        "Yes. We deliver reporting in both IDR and USD equivalents at documented exchange rates suitable for foreign-stakeholder reporting.",
    },
    {
      question: "How do you handle PPh 26 on foreign-principal payments?",
      answer:
        "PPh 26 generally applies at 20% on services or royalties paid to foreign principals, reduced where a tax treaty applies. We calculate the right rate per recipient country.",
    },
  ],
  "pt-pma-accounting-bali|ubud": [
    {
      question: "Can you handle PT PMA with both online and in-person revenue?",
      answer:
        "Yes. We separate online and in-person revenue streams, apply the correct VAT treatment, and document for both Indonesian and foreign stakeholder reporting.",
    },
    {
      question: "Do you support Ubud wellness PT PMA companies with global staff?",
      answer:
        "Yes. We handle multi-country payroll considerations, PPh 26 withholding on foreign instructors, and BPJS for Indonesian staff in one workflow.",
    },
    {
      question: "How do you treat retreat deposits in PT PMA accounting?",
      answer:
        "Deposits are deferred revenue until the retreat or workshop date. We unwind to revenue on delivery and document cancellation policy in books.",
    },
  ],
  "pt-pma-accounting-bali|seminyak": [
    {
      question: "We have multiple PT PMA entities — do you support group accounting?",
      answer:
        "Yes. We deliver entity-level books plus consolidated group reporting, with intercompany eliminations and management-fee structuring.",
    },
    {
      question: "Can you handle high-volume F&B PT PMA filings?",
      answer:
        "Yes. We support high-transaction-volume F&B PT PMA entities with daily POS reconciliation and monthly PB1 + PPN filings.",
    },
    {
      question: "Do you align reports with international audit standards?",
      answer:
        "Yes. We prepare reports compatible with IFRS for-stakeholder use while maintaining Indonesian PSAK for regulatory filings.",
    },
  ],
  "pt-pma-accounting-bali|sanur": [
    {
      question: "Can you support owner-operator PT PMA companies in Sanur?",
      answer:
        "Yes. Many Sanur PT PMA entities are foreign-founder owned. We handle both the PT PMA-level accounting and the owner's personal SPT 1770 in coordination.",
    },
    {
      question: "How do you handle dividend payments to foreign shareholders?",
      answer:
        "Dividends paid to foreign shareholders trigger PPh 26 at 20% unless a tax treaty reduces the rate. We calculate the right rate, issue documentation, and remit.",
    },
    {
      question: "Do you do meeting-room sessions for clients in Sanur?",
      answer:
        "Yes. Our head office is on Jalan Sedap Malam in Sanur Kaja, so in-person meetings are straightforward.",
    },
  ],
  // Expat Tier-B per location
  "expat-tax-services-bali|canggu": [
    {
      question: "Do I need an NPWP if I'm a digital nomad on a B211A visa?",
      answer:
        "A B211A is short-term and does not by itself trigger Indonesian tax residency. If you cross 183 days in any 12-month period across all your stays, you become a tax resident and need to register an NPWP regardless of visa class.",
    },
    {
      question: "Can you file SPT 1770 if my income comes from outside Indonesia?",
      answer:
        "Yes. Tax-resident expats report worldwide income on SPT 1770, with foreign-tax credits or tax-treaty relief applied where eligible.",
    },
    {
      question: "Do you support remote workers paid by US or EU employers?",
      answer:
        "Yes. We document the foreign-employer relationship, foreign-source income, and tax-treaty position for clients paid by US or EU employers while resident in Bali.",
    },
  ],
  "expat-tax-services-bali|ubud": [
    {
      question: "Can you file my SPT if I run a yayasan in Ubud?",
      answer:
        "Yes. We file your personal SPT alongside the yayasan-level filings, ensuring the personal stipend or salary is correctly disclosed.",
    },
    {
      question: "How do retreat-instructor fees affect my personal tax?",
      answer:
        "Income from facilitating retreats is treated as professional services for tax purposes. We help structure the income stream so PPh treatment is clean.",
    },
    {
      question: "Do you handle clients with non-typical income sources?",
      answer:
        "Yes. We support clients with online-course revenue, donation-funded sabbatical income, and royalty income from books or courses.",
    },
  ],
  "expat-tax-services-bali|seminyak": [
    {
      question: "I run a Seminyak restaurant — do I need both personal and PT PMA filings?",
      answer:
        "Usually yes. The PT PMA files company tax; you as the owner-resident file personal SPT covering your salary, dividends, and any non-PT PMA income.",
    },
    {
      question: "Can you handle KITAS-based payroll for me?",
      answer:
        "Yes. KITAS holders working in their own PT PMA appear on the payroll like Indonesian employees. We handle PPh 21 progressive withholding and personal SPT.",
    },
    {
      question: "Do you advise on tax-treaty relief?",
      answer:
        "Yes. We analyse the relevant tax treaty for your home country (US, AU, UK, etc.) and apply relief where allowable.",
    },
  ],
  "expat-tax-services-bali|sanur": [
    {
      question: "Are you familiar with retiree expat tax in Sanur?",
      answer:
        "Yes. Many of our Sanur clients are retirees on KITAS Lansia. We handle their annual SPT 1770, foreign-pension reporting, and tax-treaty positions.",
    },
    {
      question: "How is foreign pension income treated?",
      answer:
        "Indonesian tax residents disclose foreign pension on SPT 1770, applying tax-treaty relief where the home country has primary taxing rights.",
    },
    {
      question: "Can you support my SPT filing if I split time between Bali and home country?",
      answer:
        "Yes. We help determine residency under the 183-day test, document the position, and file accordingly.",
    },
  ],
  // Villa Tier-B per location
  "villa-accounting-services-bali|canggu": [
    {
      question: "Can you reconcile Airbnb and Booking.com payouts?",
      answer:
        "Yes. Both Airbnb and Booking.com payouts come net of platform fees and any tax withheld at source. We reconcile the gross booking, platform fee, withholding, and net IDR landing for every transaction.",
    },
    {
      question: "How do you handle the management fee to the local operator?",
      answer:
        "We book the management fee as a service-fee deduction from owner-payout statements and ensure PPh 23 withholding is applied where applicable.",
    },
    {
      question: "Do you cover PB1 on short-term villa rentals?",
      answer:
        "Yes. Most short-term villa rentals in Canggu trigger PB1 at 10%, filed monthly. We prepare and file directly.",
    },
  ],
  "villa-accounting-services-bali|ubud": [
    {
      question: "Do you support hybrid villa + wellness retreat operators?",
      answer:
        "Yes. We separate villa-rental revenue from retreat-program revenue, apply correct tax treatment to each, and consolidate at owner-level reporting.",
    },
    {
      question: "Can you track capital expenditure on property assets?",
      answer:
        "Yes. We maintain a fixed-asset register, apply Indonesian depreciation schedules, and flag major capex impact on cash flow.",
    },
    {
      question: "Do you handle non-resident villa owners?",
      answer:
        "Yes. Non-resident villa owners using a nominee or PT PMA structure are common. We design the accounting to fit the legal structure.",
    },
  ],
  "villa-accounting-services-bali|seminyak": [
    {
      question: "Can you support large-villa estates with multiple staff?",
      answer:
        "Yes. Larger Seminyak villa estates with full-time staff need both BPJS Ketenagakerjaan and Kesehatan, plus monthly PPh 21 withholding. We handle both.",
    },
    {
      question: "How do you handle wedding-event income?",
      answer:
        "Wedding-event income is booked when the event is delivered, with deposits as deferred revenue. We document cancellation policy and refund accounting.",
    },
    {
      question: "Do you handle owner-self-use accounting?",
      answer:
        "Yes. We document the self-use period, exclude from revenue, and ensure no inadvertent PPN or PB1 implications.",
    },
  ],
  "villa-accounting-services-bali|sanur": [
    {
      question: "Are most Sanur villas long-stay or short-stay?",
      answer:
        "Sanur skews longer-stay (monthly or seasonal) compared to Canggu's short-stay mix. Accounting differs — longer stays often look more like residential lease than hospitality.",
    },
    {
      question: "Can you support owner-resident villas?",
      answer:
        "Yes. Owner-resident villas with occasional rental need careful split between personal-use and rental periods, with correct revenue allocation.",
    },
    {
      question: "Do you cover property-tax (PBB) reporting?",
      answer:
        "Yes. We track annual PBB payments and integrate into ownership-level cash-flow planning.",
    },
  ],
  // Restaurant Tier-B per location (only Canggu + Seminyak in scope)
  "restaurant-accounting-services-bali|canggu": [
    {
      question: "How quickly can you onboard a Canggu restaurant?",
      answer:
        "Typical onboarding is 5-10 business days, covering POS integration, opening trial balance, prior-period catch-up, and first monthly close on the new cadence.",
    },
    {
      question: "Do you handle Loyverse and MokaPOS integrations?",
      answer:
        "Yes. We have integration playbooks for both, plus other major POS platforms used in Canggu F&B.",
    },
    {
      question: "Can you handle PB1 filings monthly?",
      answer:
        "Yes. PB1 at 10% on food and beverage revenue is filed monthly with the Badung local government office.",
    },
    {
      question: "Do you support beach-club operations?",
      answer:
        "Yes. Beach clubs have mixed F&B, day-bed, and event revenue — we account for each separately with appropriate tax treatment.",
    },
  ],
  "restaurant-accounting-services-bali|seminyak": [
    {
      question: "Can you do multi-outlet consolidation?",
      answer:
        "Yes. We deliver outlet-level P&Ls plus consolidated group reporting, common for Seminyak F&B operators with sister venues.",
    },
    {
      question: "How do you handle imported wine and beverage costs?",
      answer:
        "Imported alcohol has additional excise (Cukai) on top of PPN. We book the full landed cost and ensure the tax treatment is correct.",
    },
    {
      question: "Do you cover sommelier and head-chef KITAS payroll?",
      answer:
        "Yes. Foreign sommeliers and chefs on KITAS appear on payroll like Indonesian employees once tax-resident. We handle PPh 21 and personal SPT.",
    },
  ],
};

export function getLocationServiceFaqs(
  service: ServiceSlug,
  location: LocationSlug
): { question: string; answer: string }[] {
  return locationServiceFaqs[`${service}|${location}`] || [];
}
