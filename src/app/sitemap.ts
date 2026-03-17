import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

// Define all site routes with SEO metadata
interface RouteConfig {
  path: string;
  priority: number;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  lastModified?: Date;
}

const siteLastUpdated = new Date("2026-03-17");

const routes: RouteConfig[] = [
  // Core pages - high priority
  { path: "", priority: 1.0, changeFrequency: "weekly", lastModified: siteLastUpdated },
  { path: "/services", priority: 0.9, changeFrequency: "weekly", lastModified: siteLastUpdated },
  { path: "/free-consultation", priority: 0.9, changeFrequency: "weekly", lastModified: siteLastUpdated },
  { path: "/about", priority: 0.8, changeFrequency: "monthly", lastModified: siteLastUpdated },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly", lastModified: siteLastUpdated },
  { path: "/accounting-services-faq-help-center", priority: 0.8, changeFrequency: "monthly", lastModified: siteLastUpdated },
  { path: "/bali-accounting-services", priority: 0.9, changeFrequency: "weekly", lastModified: siteLastUpdated },
  { path: "/bali-accounting-services-pt-pma", priority: 0.8, changeFrequency: "weekly", lastModified: siteLastUpdated },
  { path: "/bali-tax-services", priority: 0.9, changeFrequency: "weekly", lastModified: siteLastUpdated },
  { path: "/bali-tax-services-pt-pma", priority: 0.8, changeFrequency: "weekly", lastModified: siteLastUpdated },
  { path: "/indonesia-accounting-services", priority: 0.9, changeFrequency: "weekly", lastModified: siteLastUpdated },
  { path: "/indonesia-tax-services", priority: 0.9, changeFrequency: "weekly", lastModified: siteLastUpdated },
  { path: "/indonesia-tax-services-foreign-owned-companies", priority: 0.8, changeFrequency: "weekly", lastModified: siteLastUpdated },

  // Service pages
  { path: "/services/bookkeeping", priority: 0.8, changeFrequency: "monthly", lastModified: siteLastUpdated },
  { path: "/services/financial-reports", priority: 0.8, changeFrequency: "monthly", lastModified: siteLastUpdated },
  { path: "/services/tax-compliance", priority: 0.8, changeFrequency: "monthly", lastModified: siteLastUpdated },
  { path: "/services/payroll", priority: 0.8, changeFrequency: "monthly", lastModified: siteLastUpdated },
  { path: "/services/initial-setup", priority: 0.8, changeFrequency: "monthly", lastModified: siteLastUpdated },
  { path: "/services/consultation", priority: 0.7, changeFrequency: "monthly", lastModified: siteLastUpdated },
  { path: "/services/training", priority: 0.7, changeFrequency: "monthly", lastModified: siteLastUpdated },

  // Blog pages
  { path: "/blog", priority: 0.9, changeFrequency: "weekly", lastModified: siteLastUpdated },
  { path: "/blog/best-bali-accounting-service", priority: 0.8, changeFrequency: "monthly", lastModified: siteLastUpdated },
  { path: "/blog/tax-deadlines-indonesia-2026", priority: 0.8, changeFrequency: "monthly", lastModified: siteLastUpdated },
  { path: "/blog/tax-preparation-indonesia-2026", priority: 0.8, changeFrequency: "monthly", lastModified: siteLastUpdated },
  { path: "/blog/ppn-pph-explained", priority: 0.7, changeFrequency: "yearly", lastModified: new Date("2026-02-01") },
  { path: "/blog/bookkeeping-best-practices", priority: 0.7, changeFrequency: "yearly", lastModified: new Date("2026-02-01") },

  // Legal pages - low priority
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly", lastModified: siteLastUpdated },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly", lastModified: siteLastUpdated },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: route.path ? `${siteConfig.url}${route.path}/` : `${siteConfig.url}/`,
    lastModified: route.lastModified || siteLastUpdated,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
