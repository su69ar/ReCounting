import type { MetadataRoute } from "next";
import { sitemapEntries } from "@/lib/sitemap-data";

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapEntries.map((e) => ({
    url: e.loc,
    lastModified: new Date(e.lastmod),
    changeFrequency: e.changefreq,
    priority: e.priority,
  }));
}
