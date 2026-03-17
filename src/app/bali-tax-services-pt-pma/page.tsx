import type { Metadata } from "next";
import { CommercialLandingPage } from "@/components/seo/CommercialLandingPage";
import { getCommercialLandingPage } from "@/data/seo-pages";

const page = getCommercialLandingPage("bali-tax-services-pt-pma");

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: `/${page.slug}` },
};

export default function BaliTaxServicesPtPmaPage() {
  return <CommercialLandingPage page={page} />;
}
