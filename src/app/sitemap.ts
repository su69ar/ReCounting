import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

type SitemapEntry = {
  route: string;
  priority: number;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
};

// Define routes with explicit SEO priorities
const sitemapRoutes: SitemapEntry[] = [
  // Homepage - highest priority
  { route: "", priority: 1.0, changeFrequency: "weekly" },

  // Core service pages - high priority
  { route: "/services", priority: 0.9, changeFrequency: "weekly" },
  { route: "/services/bookkeeping", priority: 0.9, changeFrequency: "weekly" },
  { route: "/services/tax-compliance", priority: 0.9, changeFrequency: "weekly" },
  { route: "/free-consultation", priority: 0.9, changeFrequency: "weekly" },

  // Secondary service pages
  { route: "/services/payroll", priority: 0.8, changeFrequency: "monthly" },
  { route: "/services/initial-setup", priority: 0.8, changeFrequency: "monthly" },

  // About & Contact - important for trust
  { route: "/about", priority: 0.8, changeFrequency: "monthly" },
  { route: "/contact", priority: 0.8, changeFrequency: "monthly" },

  // Blog posts - medium priority, good for long-tail SEO
  { route: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { route: "/blog/tax-deadlines-indonesia-2024", priority: 0.6, changeFrequency: "monthly" },
  { route: "/blog/ppn-pph-explained", priority: 0.6, changeFrequency: "monthly" },
  { route: "/blog/bookkeeping-best-practices", priority: 0.6, changeFrequency: "monthly" },

  // Legal pages - lower priority
  { route: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { route: "/terms", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const lastModified = new Date();

  return sitemapRoutes.map(({ route, priority, changeFrequency }) => ({
    url: `${base}${route}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}

