import type { MetadataRoute } from "next";

// Define all site routes with SEO metadata
interface RouteConfig {
  path: string;
  priority: number;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  lastModified?: Date;
}

const routes: RouteConfig[] = [
  // Core pages - high priority
  { path: "", priority: 1.0, changeFrequency: "daily", lastModified: new Date("2026-02-08") },
  { path: "/services", priority: 0.9, changeFrequency: "weekly" },
  { path: "/free-consultation", priority: 0.9, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },

  // Service pages
  { path: "/services/bookkeeping", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/financial-reports", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/tax-compliance", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/payroll", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/initial-setup", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/consultation", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/training", priority: 0.7, changeFrequency: "monthly" },

  // Blog pages
  { path: "/blog", priority: 0.9, changeFrequency: "weekly" },
  { path: "/blog/tax-deadlines-indonesia-2024", priority: 0.7, changeFrequency: "yearly", lastModified: new Date("2026-02-01") },
  { path: "/blog/ppn-pph-explained", priority: 0.7, changeFrequency: "yearly", lastModified: new Date("2026-02-01") },
  { path: "/blog/bookkeeping-best-practices", priority: 0.7, changeFrequency: "yearly", lastModified: new Date("2026-02-01") },

  // Legal pages - low priority
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://recounting.my.id";

  return routes.map((route) => ({
    url: route.path ? `${baseUrl}${route.path}/` : `${baseUrl}/`,
    lastModified: route.lastModified || new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}

