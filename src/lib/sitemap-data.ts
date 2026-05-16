// Single source of truth for sitemap URLs.
// Consumed by both `src/app/sitemap.ts` (Next.js) and the static
// `public/recounting-index.xml` regeneration script.

import { tierALocations, tierBLocations } from "@/data/locations";
import type { LocationSlug } from "@/data/locations";

export type SitemapEntry = {
  loc: string;
  lastmod: string;
  changefreq?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
};

const today = "2026-05-16";
const restaurantCities: LocationSlug[] = ["canggu", "seminyak"];

// Cross-product helper for location pages.
function locationUrls(
  service: string,
  cities: LocationSlug[],
  priority = 0.8
): SitemapEntry[] {
  return cities.map((c) => ({
    loc: `https://recounting.my.id/${service}/${c}/`,
    lastmod: today,
    changefreq: "monthly",
    priority,
  }));
}

export const sitemapEntries: SitemapEntry[] = [
  // Core pages
  { loc: "https://recounting.my.id/", lastmod: today, changefreq: "weekly", priority: 1.0 },
  { loc: "https://recounting.my.id/services/", lastmod: today, changefreq: "monthly", priority: 0.9 },
  { loc: "https://recounting.my.id/free-consultation/", lastmod: today, changefreq: "monthly", priority: 0.9 },
  { loc: "https://recounting.my.id/about/", lastmod: today, changefreq: "monthly", priority: 0.7 },
  { loc: "https://recounting.my.id/contact/", lastmod: today, changefreq: "monthly", priority: 0.7 },
  { loc: "https://recounting.my.id/accounting-services-faq-help-center/", lastmod: today, changefreq: "monthly", priority: 0.7 },

  // Commercial hubs (existing)
  { loc: "https://recounting.my.id/bali-accounting-services/", lastmod: today, changefreq: "monthly", priority: 0.9 },
  { loc: "https://recounting.my.id/bali-accounting-services-pt-pma/", lastmod: today, changefreq: "monthly", priority: 0.9 },
  { loc: "https://recounting.my.id/bali-tax-services/", lastmod: today, changefreq: "monthly", priority: 0.9 },
  { loc: "https://recounting.my.id/bali-tax-services-pt-pma/", lastmod: today, changefreq: "monthly", priority: 0.9 },
  { loc: "https://recounting.my.id/indonesia-accounting-services/", lastmod: today, changefreq: "monthly", priority: 0.9 },
  { loc: "https://recounting.my.id/indonesia-tax-services/", lastmod: today, changefreq: "monthly", priority: 0.9 },
  { loc: "https://recounting.my.id/indonesia-tax-services-foreign-owned-companies/", lastmod: today, changefreq: "monthly", priority: 0.9 },

  // New commercial hubs (Tier-A bookkeeping + Tier-B services)
  { loc: "https://recounting.my.id/bali-bookkeeping-services/", lastmod: today, changefreq: "monthly", priority: 0.9 },
  { loc: "https://recounting.my.id/pt-pma-accounting-bali/", lastmod: today, changefreq: "monthly", priority: 0.9 },
  { loc: "https://recounting.my.id/expat-tax-services-bali/", lastmod: today, changefreq: "monthly", priority: 0.9 },
  { loc: "https://recounting.my.id/villa-accounting-services-bali/", lastmod: today, changefreq: "monthly", priority: 0.9 },
  { loc: "https://recounting.my.id/restaurant-accounting-services-bali/", lastmod: today, changefreq: "monthly", priority: 0.9 },

  // Tier-A location pages (15)
  ...locationUrls("bali-accounting-services", tierALocations),
  ...locationUrls("bali-tax-services", tierALocations),
  ...locationUrls("bali-bookkeeping-services", tierALocations),

  // Tier-B location pages
  ...locationUrls("pt-pma-accounting-bali", tierBLocations, 0.75),
  ...locationUrls("expat-tax-services-bali", tierBLocations, 0.75),
  ...locationUrls("villa-accounting-services-bali", tierBLocations, 0.75),
  ...locationUrls("restaurant-accounting-services-bali", restaurantCities, 0.75),

  // Tier-C info pages
  { loc: "https://recounting.my.id/cost-of-accounting-services-bali/", lastmod: today, changefreq: "monthly", priority: 0.8 },
  { loc: "https://recounting.my.id/bali-tax-deadline-calendar/", lastmod: today, changefreq: "monthly", priority: 0.8 },
  { loc: "https://recounting.my.id/how-to-choose-accountant-bali/", lastmod: today, changefreq: "monthly", priority: 0.8 },

  // Service detail pages
  { loc: "https://recounting.my.id/services/bookkeeping/", lastmod: today, changefreq: "monthly", priority: 0.7 },
  { loc: "https://recounting.my.id/services/financial-reports/", lastmod: today, changefreq: "monthly", priority: 0.7 },
  { loc: "https://recounting.my.id/services/tax-compliance/", lastmod: today, changefreq: "monthly", priority: 0.7 },
  { loc: "https://recounting.my.id/services/payroll/", lastmod: today, changefreq: "monthly", priority: 0.7 },
  { loc: "https://recounting.my.id/services/initial-setup/", lastmod: today, changefreq: "monthly", priority: 0.7 },
  { loc: "https://recounting.my.id/services/consultation/", lastmod: today, changefreq: "monthly", priority: 0.7 },
  { loc: "https://recounting.my.id/services/training/", lastmod: today, changefreq: "monthly", priority: 0.7 },

  // Blog
  { loc: "https://recounting.my.id/blog/", lastmod: today, changefreq: "weekly", priority: 0.8 },
  { loc: "https://recounting.my.id/blog/best-bali-accounting-service/", lastmod: today, changefreq: "monthly", priority: 0.7 },
  { loc: "https://recounting.my.id/blog/tax-deadlines-indonesia-2026/", lastmod: today, changefreq: "monthly", priority: 0.7 },
  { loc: "https://recounting.my.id/blog/tax-preparation-indonesia-2026/", lastmod: today, changefreq: "monthly", priority: 0.7 },
  { loc: "https://recounting.my.id/blog/ppn-pph-explained/", lastmod: "2026-02-01", changefreq: "monthly", priority: 0.6 },
  { loc: "https://recounting.my.id/blog/bookkeeping-best-practices/", lastmod: "2026-02-01", changefreq: "monthly", priority: 0.6 },

  // Legal
  { loc: "https://recounting.my.id/privacy/", lastmod: today, changefreq: "yearly", priority: 0.3 },
  { loc: "https://recounting.my.id/terms/", lastmod: today, changefreq: "yearly", priority: 0.3 },
];

// Helper to render entries as XML.
export function entriesToXml(entries: SitemapEntry[]): string {
  const items = entries
    .map((e) => {
      const parts = [
        `    <loc>${e.loc}</loc>`,
        `    <lastmod>${e.lastmod}</lastmod>`,
      ];
      if (e.changefreq) parts.push(`    <changefreq>${e.changefreq}</changefreq>`);
      if (e.priority !== undefined) parts.push(`    <priority>${e.priority.toFixed(1)}</priority>`);
      return `  <url>\n${parts.join("\n")}\n  </url>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</urlset>\n`;
}
