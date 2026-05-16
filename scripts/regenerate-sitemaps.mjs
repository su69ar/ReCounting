#!/usr/bin/env node
// Regenerate the static sitemap XML files in /public from src/lib/sitemap-data.ts.
// Run with: node scripts/regenerate-sitemaps.mjs (or `npm run sitemap`).

import { writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { register } from "node:module";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Use ts-node-style loader for TypeScript source — fall back to tsx if available.
// Simpler: read the TS file as a string, extract the entries via a minimal parser.
// To avoid runtime TS deps, we duplicate the entry generation in pure JS below
// matching the structure of `src/data/locations.ts` and the URL conventions.

const tierA = ["canggu", "ubud", "seminyak", "sanur", "denpasar"];
const tierB = ["canggu", "ubud", "seminyak", "sanur"];
const restaurantCities = ["canggu", "seminyak"];
const today = "2026-05-16";

const ROOT = "https://recounting.my.id";

function url(path, opts = {}) {
  return {
    loc: `${ROOT}${path}`,
    lastmod: opts.lastmod || today,
    changefreq: opts.changefreq || "monthly",
    priority: opts.priority ?? 0.7,
  };
}

function loc(service, city, priority = 0.8) {
  return url(`/${service}/${city}/`, { priority });
}

const entries = [
  url("/", { changefreq: "weekly", priority: 1.0 }),
  url("/services/", { priority: 0.9 }),
  url("/free-consultation/", { priority: 0.9 }),
  url("/about/", { priority: 0.7 }),
  url("/contact/", { priority: 0.7 }),
  url("/accounting-services-faq-help-center/", { priority: 0.7 }),

  url("/bali-accounting-services/", { priority: 0.9 }),
  url("/bali-accounting-services-pt-pma/", { priority: 0.9 }),
  url("/bali-tax-services/", { priority: 0.9 }),
  url("/bali-tax-services-pt-pma/", { priority: 0.9 }),
  url("/indonesia-accounting-services/", { priority: 0.9 }),
  url("/indonesia-tax-services/", { priority: 0.9 }),
  url("/indonesia-tax-services-foreign-owned-companies/", { priority: 0.9 }),

  url("/bali-bookkeeping-services/", { priority: 0.9 }),
  url("/pt-pma-accounting-bali/", { priority: 0.9 }),
  url("/expat-tax-services-bali/", { priority: 0.9 }),
  url("/villa-accounting-services-bali/", { priority: 0.9 }),
  url("/restaurant-accounting-services-bali/", { priority: 0.9 }),

  ...tierA.map((c) => loc("bali-accounting-services", c)),
  ...tierA.map((c) => loc("bali-tax-services", c)),
  ...tierA.map((c) => loc("bali-bookkeeping-services", c)),

  ...tierB.map((c) => loc("pt-pma-accounting-bali", c, 0.75)),
  ...tierB.map((c) => loc("expat-tax-services-bali", c, 0.75)),
  ...tierB.map((c) => loc("villa-accounting-services-bali", c, 0.75)),
  ...restaurantCities.map((c) => loc("restaurant-accounting-services-bali", c, 0.75)),

  url("/cost-of-accounting-services-bali/", { priority: 0.8 }),
  url("/bali-tax-deadline-calendar/", { priority: 0.8 }),
  url("/how-to-choose-accountant-bali/", { priority: 0.8 }),

  url("/services/bookkeeping/", { priority: 0.7 }),
  url("/services/financial-reports/", { priority: 0.7 }),
  url("/services/tax-compliance/", { priority: 0.7 }),
  url("/services/payroll/", { priority: 0.7 }),
  url("/services/initial-setup/", { priority: 0.7 }),
  url("/services/consultation/", { priority: 0.7 }),
  url("/services/training/", { priority: 0.7 }),

  url("/blog/", { changefreq: "weekly", priority: 0.8 }),
  url("/blog/best-bali-accounting-service/", { priority: 0.7 }),
  url("/blog/tax-deadlines-indonesia-2026/", { priority: 0.7 }),
  url("/blog/tax-preparation-indonesia-2026/", { priority: 0.7 }),
  url("/blog/ppn-pph-explained/", { lastmod: "2026-02-01", priority: 0.6 }),
  url("/blog/bookkeeping-best-practices/", { lastmod: "2026-02-01", priority: 0.6 }),

  url("/privacy/", { changefreq: "yearly", priority: 0.3 }),
  url("/terms/", { changefreq: "yearly", priority: 0.3 }),
];

function toXml(entries) {
  const items = entries
    .map((e) => {
      const lines = [
        `    <loc>${e.loc}</loc>`,
        `    <lastmod>${e.lastmod}</lastmod>`,
      ];
      if (e.changefreq) lines.push(`    <changefreq>${e.changefreq}</changefreq>`);
      if (e.priority !== undefined)
        lines.push(`    <priority>${e.priority.toFixed(1)}</priority>`);
      return `  <url>\n${lines.join("\n")}\n  </url>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</urlset>\n`;
}

function toTxt(entries) {
  return entries.map((e) => e.loc).join("\n") + "\n";
}

const publicDir = join(__dirname, "..", "public");
const xml = toXml(entries);
const txt = toTxt(entries);

const files = [
  ["sitemap.xml", xml],
  ["sitemap-main.xml", xml],
  ["recounting-index.xml", xml],
  ["sitemap-basic.xml", xml],
  ["sitemap.txt", txt],
];

for (const [filename, content] of files) {
  writeFileSync(join(publicDir, filename), content);
  console.log(`Wrote ${filename} (${entries.length} URLs)`);
}

console.log("\nAll sitemaps regenerated.");
