import { buildSitemapXml } from "@/lib/sitemap-routes";

export const dynamic = "force-static";

export async function GET(): Promise<Response> {
  return new Response(buildSitemapXml(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
