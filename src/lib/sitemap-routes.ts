import { siteConfig } from "@/lib/site";

export interface SitemapRoute {
  path: string;
  lastModified: string;
}

const defaultLastModified = "2026-03-17";

export const sitemapRoutes: SitemapRoute[] = [
  { path: "", lastModified: defaultLastModified },
  { path: "/services", lastModified: defaultLastModified },
  { path: "/free-consultation", lastModified: defaultLastModified },
  { path: "/about", lastModified: defaultLastModified },
  { path: "/contact", lastModified: defaultLastModified },
  { path: "/accounting-services-faq-help-center", lastModified: defaultLastModified },
  { path: "/bali-accounting-services", lastModified: defaultLastModified },
  { path: "/bali-accounting-services-pt-pma", lastModified: defaultLastModified },
  { path: "/bali-tax-services", lastModified: defaultLastModified },
  { path: "/bali-tax-services-pt-pma", lastModified: defaultLastModified },
  { path: "/indonesia-accounting-services", lastModified: defaultLastModified },
  { path: "/indonesia-tax-services", lastModified: defaultLastModified },
  { path: "/indonesia-tax-services-foreign-owned-companies", lastModified: defaultLastModified },
  { path: "/services/bookkeeping", lastModified: defaultLastModified },
  { path: "/services/financial-reports", lastModified: defaultLastModified },
  { path: "/services/tax-compliance", lastModified: defaultLastModified },
  { path: "/services/payroll", lastModified: defaultLastModified },
  { path: "/services/initial-setup", lastModified: defaultLastModified },
  { path: "/services/consultation", lastModified: defaultLastModified },
  { path: "/services/training", lastModified: defaultLastModified },
  { path: "/blog", lastModified: defaultLastModified },
  { path: "/blog/best-bali-accounting-service", lastModified: defaultLastModified },
  { path: "/blog/tax-deadlines-indonesia-2026", lastModified: defaultLastModified },
  { path: "/blog/tax-preparation-indonesia-2026", lastModified: defaultLastModified },
  { path: "/blog/ppn-pph-explained", lastModified: "2026-02-01" },
  { path: "/blog/bookkeeping-best-practices", lastModified: "2026-02-01" },
  { path: "/privacy", lastModified: defaultLastModified },
  { path: "/terms", lastModified: defaultLastModified },
];

export function getSitemapUrl(path: string): string {
  if (!path) {
    return `${siteConfig.url}/`;
  }

  return `${siteConfig.url}${path}/`;
}

export function buildSitemapXml(): string {
  const urls = sitemapRoutes
    .map((route) => {
      return [
        "  <url>",
        `    <loc>${getSitemapUrl(route.path)}</loc>`,
        `    <lastmod>${route.lastModified}</lastmod>`,
        "  </url>",
      ].join("\n");
    })
    .join("\n");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    "</urlset>",
    "",
  ].join("\n");
}
