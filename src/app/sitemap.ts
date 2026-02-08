import type { MetadataRoute } from "next";

// Define all site routes
const routes = [
  "",
  "/services",
  "/services/bookkeeping",
  "/services/tax-compliance",
  "/services/payroll",
  "/services/initial-setup",
  "/free-consultation",
  "/about",
  "/contact",
  "/blog",
  "/blog/tax-deadlines-indonesia-2024",
  "/blog/ppn-pph-explained",
  "/blog/bookkeeping-best-practices",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://recounting.my.id";

  return routes.map((route) => ({
    url: route ? `${baseUrl}${route}/` : `${baseUrl}/`,
    lastModified: new Date(),
  }));
}

