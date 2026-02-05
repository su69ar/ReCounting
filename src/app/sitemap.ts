import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const lastModified = new Date();

  const routes = [
    "",
    "/services",
    "/services/bookkeeping",
    "/services/tax-compliance",
    "/services/payroll",
    "/services/initial-setup",
    "/about",
    "/contact",
    "/free-consultation",
    "/blog",
    "/blog/tax-deadlines-indonesia-2024",
    "/blog/ppn-pph-explained",
    "/blog/bookkeeping-best-practices",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified,
    changeFrequency: route.startsWith("/blog") ? "monthly" : "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
