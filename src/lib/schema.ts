import { siteConfig } from "./site";

// =============================================================================
// CORE BUSINESS SCHEMAS
// =============================================================================

// Organization Schema — branding signal across SERP
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.url}#organization`,
  name: siteConfig.name,
  alternateName: ["ReCounting Bali", "ReCounting Asia"],
  url: siteConfig.url,
  logo: {
    "@type": "ImageObject",
    url: `${siteConfig.url}/assets/logo/ReCounting_Accounting_Tax_Services_Bali.png`,
    width: 512,
    height: 512,
  },
  image: `${siteConfig.url}/assets/logo/ReCounting_Accounting_Tax_Services_Bali.png`,
  description: siteConfig.description,
  email: siteConfig.email,
  telephone: siteConfig.phoneIntl,
  foundingDate: "2024",
  knowsAbout: [
    "Bali accounting services",
    "Bali tax services",
    "Indonesia accounting services",
    "Indonesia tax services",
    "Bookkeeping services",
    "Payroll services",
    "PT PMA accounting support",
    "Indonesian tax compliance",
    "PPh and PPN filing",
    "NPWP registration",
    "Expat tax in Indonesia",
    "DJP Online and CoreTax",
  ],
  knowsLanguage: ["en", "id"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jalan Sedap Malam No 9A",
    addressLocality: "Sanur Kaja, Denpasar",
    addressRegion: "Bali",
    postalCode: "80228",
    addressCountry: "ID",
  },
  sameAs: [
    siteConfig.socials.instagram,
    siteConfig.socials.linkedin,
    siteConfig.socials.facebook,
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: siteConfig.phoneIntl,
      contactType: "customer service",
      areaServed: ["ID"],
      availableLanguage: ["English", "Indonesian"],
    },
    {
      "@type": "ContactPoint",
      telephone: siteConfig.phoneIntl,
      contactType: "sales",
      areaServed: ["ID"],
      availableLanguage: ["English", "Indonesian"],
    },
  ],
};

// LocalBusiness / AccountingService Schema — Local SEO + Map Pack signal
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "@id": `${siteConfig.url}#localbusiness`,
  name: siteConfig.name,
  url: siteConfig.url,
  image: `${siteConfig.url}/assets/logo/ReCounting_Accounting_Tax_Services_Bali.png`,
  description: siteConfig.description,
  telephone: siteConfig.phoneIntl,
  email: siteConfig.email,
  priceRange: "$$",
  currenciesAccepted: ["IDR", "USD"],
  paymentAccepted: ["Bank Transfer", "Invoice"],
  serviceType: [
    "Bali accounting services",
    "Bali tax services",
    "Indonesia accounting services",
    "Indonesia tax services",
    "Bookkeeping services",
    "Payroll services",
    "Tax compliance services",
    "Financial reporting services",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jalan Sedap Malam No 9A",
    addressLocality: "Sanur Kaja, Denpasar",
    addressRegion: "Bali",
    postalCode: "80228",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -8.692,
    longitude: 115.2567,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Denpasar" },
    { "@type": "City", name: "Canggu" },
    { "@type": "City", name: "Ubud" },
    { "@type": "City", name: "Seminyak" },
    { "@type": "City", name: "Sanur" },
    { "@type": "City", name: "Kuta" },
    { "@type": "City", name: "Jimbaran" },
    { "@type": "City", name: "Nusa Dua" },
    { "@type": "State", name: "Bali" },
    { "@type": "Country", name: "Indonesia" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Accounting and Tax Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Monthly Bookkeeping",
          description:
            "Monthly bookkeeping with bank reconciliation, transaction entry, and financial reports for SMEs, PT PMA, and expat-owned businesses in Bali.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Indonesian Tax Compliance",
          description:
            "PPh, PPN, and annual SPT filing for Indonesian tax compliance with English-first support for foreign-owned companies.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Payroll Services",
          description:
            "Complete payroll management including PPh 21, BPJS Ketenagakerjaan, BPJS Kesehatan, and payslip generation.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Financial Reports",
          description:
            "Monthly and annual financial statements in formats accepted by banks, tax office, and foreign stakeholders.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "PT PMA Accounting Setup",
          description:
            "Initial accounting setup, NPWP registration support, and ongoing compliance for foreign-owned PT PMA companies in Bali.",
        },
      },
    ],
  },
  // NOTE: aggregateRating intentionally not included — no verified review corpus yet.
  // Add when Google Business Profile has 10+ verified reviews.
  sameAs: [
    siteConfig.socials.instagram,
    siteConfig.socials.linkedin,
    siteConfig.socials.facebook,
  ],
};

// WebSite Schema — sitelinks search box + brand identity
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}#website`,
  name: siteConfig.name,
  alternateName: "ReCounting Bali",
  url: siteConfig.url,
  description: siteConfig.description,
  inLanguage: ["en", "id"],
  publisher: {
    "@id": `${siteConfig.url}#organization`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteConfig.url}/blog?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

// =============================================================================
// SCHEMA GENERATORS
// =============================================================================

// Service schema generator with optional priceSpecification + areaServed override
export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  image?: string;
  serviceType?: string;
  areaServed?: { type: "City" | "State" | "Country"; name: string }[];
  offers?: {
    priceCurrency?: string;
    priceFrom?: string;
    priceTo?: string;
    availability?: string;
  };
}) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: service.url,
    image:
      service.image ||
      `${siteConfig.url}/assets/logo/ReCounting_Accounting_Tax_Services_Bali.png`,
    provider: { "@id": `${siteConfig.url}#organization` },
    serviceType: service.serviceType || "Accounting service",
    areaServed: (
      service.areaServed || [
        { type: "State", name: "Bali" },
        { type: "Country", name: "Indonesia" },
      ]
    ).map((a) => ({ "@type": a.type, name: a.name })),
  };

  if (service.offers) {
    const offer: Record<string, unknown> = {
      "@type": "Offer",
      availability:
        service.offers.availability || "https://schema.org/InStock",
    };
    if (service.offers.priceFrom) {
      offer.priceSpecification = {
        "@type": "PriceSpecification",
        priceCurrency: service.offers.priceCurrency || "IDR",
        minPrice: service.offers.priceFrom,
        ...(service.offers.priceTo
          ? { maxPrice: service.offers.priceTo }
          : {}),
      };
    }
    schema.offers = offer;
  }

  return schema;
}

// Article schema with author Person reference and inLanguage
export function generateArticleSchema(article: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  authorUrl?: string;
  authorJobTitle?: string;
  inLanguage?: string;
  wordCount?: number;
  keywords?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: article.url,
    image:
      article.image ||
      `${siteConfig.url}/assets/logo/ReCounting_Accounting_Tax_Services_Bali.png`,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    inLanguage: article.inLanguage || "en-ID",
    ...(article.wordCount ? { wordCount: article.wordCount } : {}),
    ...(article.keywords && article.keywords.length
      ? { keywords: article.keywords.join(", ") }
      : {}),
    author: {
      "@type": "Person",
      name: article.author || "ReCounting Team",
      ...(article.authorUrl ? { url: article.authorUrl } : {}),
      ...(article.authorJobTitle ? { jobTitle: article.authorJobTitle } : {}),
    },
    publisher: { "@id": `${siteConfig.url}#organization` },
    mainEntityOfPage: { "@type": "WebPage", "@id": article.url },
  };
}

// FAQ schema generator
export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

// Breadcrumb schema generator
export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Person schema for team members (E-E-A-T signal)
export function generatePersonSchema(person: {
  name: string;
  jobTitle: string;
  url: string;
  image?: string;
  description?: string;
  email?: string;
  worksFor?: string;
  knowsAbout?: string[];
  hasCredential?: { name: string; type?: string }[];
  sameAs?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.jobTitle,
    url: person.url,
    ...(person.image ? { image: person.image } : {}),
    ...(person.description ? { description: person.description } : {}),
    ...(person.email ? { email: person.email } : {}),
    worksFor: { "@id": `${siteConfig.url}#organization` },
    ...(person.knowsAbout ? { knowsAbout: person.knowsAbout } : {}),
    ...(person.hasCredential && person.hasCredential.length
      ? {
          hasCredential: person.hasCredential.map((c) => ({
            "@type": "EducationalOccupationalCredential",
            name: c.name,
            ...(c.type ? { credentialCategory: c.type } : {}),
          })),
        }
      : {}),
    ...(person.sameAs ? { sameAs: person.sameAs } : {}),
  };
}

// LocalBusiness schema for location-specific landing pages (used by programmatic pages)
export function generateLocationLocalBusinessSchema(location: {
  city: string;
  url: string;
  description: string;
  serviceType: string;
  geo?: { lat: number; lng: number };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "@id": `${location.url}#service`,
    name: `${siteConfig.name} — ${location.city}`,
    url: location.url,
    description: location.description,
    image: `${siteConfig.url}/assets/logo/ReCounting_Accounting_Tax_Services_Bali.png`,
    telephone: siteConfig.phoneIntl,
    email: siteConfig.email,
    priceRange: "$$",
    serviceType: location.serviceType,
    parentOrganization: { "@id": `${siteConfig.url}#organization` },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jalan Sedap Malam No 9A",
      addressLocality: "Sanur Kaja, Denpasar",
      addressRegion: "Bali",
      postalCode: "80228",
      addressCountry: "ID",
    },
    ...(location.geo
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: location.geo.lat,
            longitude: location.geo.lng,
          },
        }
      : {}),
    areaServed: {
      "@type": "City",
      name: location.city,
      containedInPlace: { "@type": "State", name: "Bali" },
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
  };
}

// HowTo schema for procedural guides (PT PMA setup, NPWP registration, etc.)
export function generateHowToSchema(howTo: {
  name: string;
  description: string;
  totalTime?: string;
  steps: { name: string; text: string; url?: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: howTo.name,
    description: howTo.description,
    ...(howTo.totalTime ? { totalTime: howTo.totalTime } : {}),
    step: howTo.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
      ...(s.url ? { url: s.url } : {}),
    })),
  };
}

// ItemList schema for hub pages listing services or locations
export function generateItemListSchema(items: {
  name: string;
  description: string;
  url: string;
}[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      description: item.description,
      url: item.url,
    })),
  };
}
