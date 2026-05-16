// Bali location data for programmatic SEO landing pages.
// Each entry must have enough uniqueness payload to pass thin-content guardrails:
// 1. business mix (intro paragraph anchor)
// 2. local pain points (specific tax/accounting challenges in that area)
// 3. faqs (location × service specific)
// 4. nearby (hub-spoke linking)

export type LocationSlug =
  | "canggu"
  | "ubud"
  | "seminyak"
  | "sanur"
  | "denpasar"
  | "kuta"
  | "uluwatu"
  | "nusa-dua"
  | "jimbaran";

export type LocationProfile = {
  slug: LocationSlug;
  name: string;
  displayName: string;
  region: string;
  subDistricts: string[];
  geo: { lat: number; lng: number };
  businessMix: string[];
  intro: string;
  painPoints: string[];
  nearby: LocationSlug[];
  audienceFit: ("sme" | "pt-pma" | "expat" | "villa" | "restaurant" | "startup")[];
};

export const locations: Record<LocationSlug, LocationProfile> = {
  canggu: {
    slug: "canggu",
    name: "Canggu",
    displayName: "Canggu",
    region: "North Kuta, Badung",
    subDistricts: ["Berawa", "Echo Beach", "Batu Bolong", "Pererenan", "Tibubeneng"],
    geo: { lat: -8.6478, lng: 115.1385 },
    businessMix: [
      "boutique villas and short-term rentals",
      "beach clubs and restaurants",
      "co-working and digital-nomad hubs",
      "surf and lifestyle retail",
      "wellness and fitness studios",
    ],
    intro:
      "Canggu is one of Bali's fastest-growing commercial corridors, with a heavy mix of villa rentals, F&B venues, co-working spaces, and lifestyle retail. Most businesses here serve a mixed expat and tourist customer base, which means foreign-currency invoicing, OTA payouts, and seasonal staffing all need to be reflected accurately in books and tax filings.",
    painPoints: [
      "PB1 (Pajak Pembangunan I) on short-term villa rentals and restaurant sales — often filed late or at the wrong rate",
      "Bank reconciliation across IDR, USD, and OTA platforms (Airbnb, Booking.com) with separate payout cycles",
      "BPJS and PPh 21 for seasonal staff with rotating contracts",
      "VAT (PPN) registration thresholds being crossed mid-year as revenue scales",
      "Cash transactions in beach-front venues that need defensible documentation",
    ],
    nearby: ["seminyak", "ubud", "kuta", "denpasar"],
    audienceFit: ["villa", "restaurant", "pt-pma", "startup", "expat"],
  },
  ubud: {
    slug: "ubud",
    name: "Ubud",
    displayName: "Ubud",
    region: "Gianyar",
    subDistricts: ["Ubud Central", "Penestanan", "Sayan", "Tegallalang", "Pengosekan"],
    geo: { lat: -8.5069, lng: 115.2625 },
    businessMix: [
      "wellness retreats and yoga studios",
      "art galleries and craft workshops",
      "boutique hotels and homestays",
      "vegan and health-focused restaurants",
      "education and training centres",
    ],
    intro:
      "Ubud's economy revolves around wellness, art, and longer-stay tourism. Many businesses operate as PT PMA or yayasan (foundation) structures, with revenue split between in-person workshops, retreat programs, and online classes. Indonesian tax treatment of those revenue streams varies, and reporting needs to satisfy both Indonesian compliance and foreign-stakeholder expectations.",
    painPoints: [
      "Mixed Indonesian and foreign tax treatment for online retreat participants",
      "Yayasan vs PT PMA structure choices for socially-driven businesses",
      "Inventory accounting for galleries and craft retailers with consignment stock",
      "PPh 23 withholding on workshop instructors and freelance facilitators",
      "Donation accounting for non-profit and CSR-aligned businesses",
    ],
    nearby: ["denpasar", "sanur", "canggu", "jimbaran"],
    audienceFit: ["pt-pma", "sme", "expat", "startup"],
  },
  seminyak: {
    slug: "seminyak",
    name: "Seminyak",
    displayName: "Seminyak",
    region: "Kuta, Badung",
    subDistricts: ["Petitenget", "Oberoi", "Kerobokan"],
    geo: { lat: -8.6905, lng: 115.1729 },
    businessMix: [
      "fine-dining restaurants and beach clubs",
      "boutique fashion and homeware retail",
      "luxury villas and five-star hotels",
      "spa and beauty businesses",
      "event and wedding services",
    ],
    intro:
      "Seminyak is Bali's premium F&B, retail, and hospitality hub. High customer volume means daily POS reconciliation, tight inventory cycles, and frequent VAT (PPN) and PB1 filings. Many operators run multiple legal entities for separate venues, which makes consolidated reporting essential before tax season.",
    painPoints: [
      "Daily POS-to-books reconciliation across multiple outlets",
      "Inventory shrinkage and food-cost tracking against menu margins",
      "PB1 vs PPN choice depending on venue licensing",
      "Service-charge distribution and BPJS implications for tipped staff",
      "Consolidated reporting across sister entities",
    ],
    nearby: ["canggu", "kuta", "denpasar", "jimbaran"],
    audienceFit: ["restaurant", "villa", "pt-pma", "sme"],
  },
  sanur: {
    slug: "sanur",
    name: "Sanur",
    displayName: "Sanur",
    region: "South Denpasar",
    subDistricts: ["Sanur Kaja", "Sanur Kauh", "Sanur Centre", "Renon adjacent"],
    geo: { lat: -8.6878, lng: 115.262 },
    businessMix: [
      "expat-oriented family hotels and condos",
      "long-stay retiree services",
      "professional services and legal consultancies",
      "boat operators and dive shops",
      "neighbourhood F&B and bakeries",
    ],
    intro:
      "Sanur skews towards longer-stay expat residents and family-oriented hospitality, with a strong professional-services cluster. Many clients here are foreign individuals on KITAS who need both personal NPWP filings and PT PMA-side accounting for their businesses. ReCounting's head office is in Sanur Kaja, making this our home base for in-person support.",
    painPoints: [
      "Dual filing for KITAS holders — personal NPWP plus PT PMA compliance",
      "Cross-border income treatment under Indonesia tax-resident rules",
      "Annual SPT 1770 / 1770S for expat individuals",
      "Property income reporting for foreign-owned villas via nominee structures",
      "Currency conversion records for foreign-sourced income remittance",
    ],
    nearby: ["denpasar", "ubud", "canggu", "nusa-dua"],
    audienceFit: ["expat", "pt-pma", "sme", "startup"],
  },
  denpasar: {
    slug: "denpasar",
    name: "Denpasar",
    displayName: "Denpasar",
    region: "Bali capital",
    subDistricts: ["West Denpasar", "East Denpasar", "South Denpasar", "North Denpasar"],
    geo: { lat: -8.6705, lng: 115.2126 },
    businessMix: [
      "Indonesian SMEs and trading companies",
      "government-adjacent and professional services",
      "education and training providers",
      "manufacturing and distribution",
      "retail and wholesale",
    ],
    intro:
      "Denpasar is Bali's administrative and commercial capital, with a higher concentration of Indonesian-owned SMEs and traditional industries than the tourist-facing southern coast. Tax filings here often involve PPh Final UMKM (0.5% scheme), PPh 23, and PPN, with KPP (tax office) interactions typically handled at KPP Pratama Denpasar Barat or Timur.",
    painPoints: [
      "PPh Final UMKM 0.5% threshold management when revenue approaches IDR 4.8 billion",
      "PPh 23 withholding on rent, professional fees, and royalties",
      "Inventory and cost-of-goods reporting for trading and distribution",
      "Direct KPP correspondence for tax disputes and clarifications",
      "Coretax migration support for legacy DJP Online users",
    ],
    nearby: ["sanur", "canggu", "ubud", "jimbaran"],
    audienceFit: ["sme", "pt-pma", "startup", "restaurant"],
  },
  kuta: {
    slug: "kuta",
    name: "Kuta",
    displayName: "Kuta",
    region: "Badung",
    subDistricts: ["Legian", "Tuban", "Kuta Centre"],
    geo: { lat: -8.7187, lng: 115.1686 },
    businessMix: [
      "mass-market hotels and budget accommodation",
      "tourist retail and beach concessions",
      "tour operators and surf schools",
      "F&B and entertainment venues",
      "airport-adjacent logistics",
    ],
    intro:
      "Kuta is Bali's longest-established tourism strip, with a mix of mid-scale hotels, retail, and tour operators. Operations here run on tight margins with high transaction volumes, which means cash-handling controls and daily reconciliation matter more than at lower-volume venues.",
    painPoints: [
      "Cash-handling controls across multi-shift tourist-facing operations",
      "PB1 and PPN compliance for hotel + restaurant combined operations",
      "Tour-package revenue recognition with deposit and balance components",
      "Foreign-currency cash receipts and exchange-rate documentation",
      "Seasonal-workforce BPJS coverage windows",
    ],
    nearby: ["seminyak", "jimbaran", "canggu", "denpasar"],
    audienceFit: ["sme", "restaurant", "villa", "startup"],
  },
  uluwatu: {
    slug: "uluwatu",
    name: "Uluwatu",
    displayName: "Uluwatu",
    region: "South Kuta, Badung",
    subDistricts: ["Pecatu", "Ungasan", "Bingin"],
    geo: { lat: -8.8294, lng: 115.085 },
    businessMix: [
      "premium villas and clifftop properties",
      "destination beach clubs and resorts",
      "surf-tourism businesses",
      "fine-dining and event venues",
      "wedding and elopement services",
    ],
    intro:
      "Uluwatu's economy is built around premium villa rentals, clifftop venues, and high-end tourism. Most operators here are PT PMA structures with foreign principals, and accounting needs to support both Indonesian compliance and offshore-stakeholder reporting.",
    painPoints: [
      "Premium-rate villa income with mixed agency and direct bookings",
      "Wedding and event income with deposit timing and cancellation accounting",
      "Foreign-stakeholder reporting in USD or EUR equivalents",
      "Long-tail receivables for corporate retreat clients",
      "Capital-expenditure depreciation for high-value property assets",
    ],
    nearby: ["jimbaran", "nusa-dua", "seminyak", "kuta"],
    audienceFit: ["villa", "pt-pma", "expat", "restaurant"],
  },
  "nusa-dua": {
    slug: "nusa-dua",
    name: "Nusa Dua",
    displayName: "Nusa Dua",
    region: "South Kuta, Badung",
    subDistricts: ["BTDC area", "Tanjung Benoa", "Bualu"],
    geo: { lat: -8.795, lng: 115.231 },
    businessMix: [
      "five-star resorts and conference hotels",
      "MICE and event venues",
      "watersports and marine tourism",
      "destination retail",
      "fine dining within hotel groups",
    ],
    intro:
      "Nusa Dua is Bali's planned-resort district, dominated by international hotel groups and large-scale MICE operations. Accounting here usually plugs into group-level reporting standards, with intercompany transactions, management fees, and royalty payments common.",
    painPoints: [
      "Intercompany pricing and transfer-pricing documentation",
      "Management-fee and royalty PPh 26 withholding for foreign principals",
      "Group reporting alignment with IFRS or US GAAP requirements",
      "Large-event revenue recognition over multi-night programmes",
      "Customs and import accounting for hospitality equipment",
    ],
    nearby: ["jimbaran", "uluwatu", "sanur", "denpasar"],
    audienceFit: ["pt-pma", "villa", "restaurant"],
  },
  jimbaran: {
    slug: "jimbaran",
    name: "Jimbaran",
    displayName: "Jimbaran",
    region: "South Kuta, Badung",
    subDistricts: ["Jimbaran Bay", "Ungasan-Jimbaran", "Four Seasons area"],
    geo: { lat: -8.7903, lng: 115.1622 },
    businessMix: [
      "beachfront seafood restaurants",
      "luxury villas and resorts",
      "fishing and marine commerce",
      "campus and education (Udayana University adjacency)",
      "F&B supply and distribution",
    ],
    intro:
      "Jimbaran combines a luxury-resort cluster with traditional fishing-village economics and a major university campus. Businesses range from beachfront seafood operators to PT PMA villa rentals, with very different compliance needs across that spectrum.",
    painPoints: [
      "Seafood-supply cost-of-goods tracking with variable daily wholesale prices",
      "Restaurant employee turnover and BPJS continuity",
      "Mixed cash and POS payment reconciliation",
      "Resort-villa hybrid revenue between own-account and managed-rental",
      "PPh 23 withholding on local-fisher supplier payments",
    ],
    nearby: ["nusa-dua", "uluwatu", "kuta", "denpasar"],
    audienceFit: ["restaurant", "villa", "sme", "pt-pma"],
  },
};

export const locationSlugs = Object.keys(locations) as LocationSlug[];

export function getLocation(slug: LocationSlug): LocationProfile {
  return locations[slug];
}

// Locations included in Tier-A programmatic generation.
export const tierALocations: LocationSlug[] = [
  "canggu",
  "ubud",
  "seminyak",
  "sanur",
  "denpasar",
];

// Locations included in Tier-B (audience-cross) programmatic generation.
export const tierBLocations: LocationSlug[] = [
  "canggu",
  "ubud",
  "seminyak",
  "sanur",
];
