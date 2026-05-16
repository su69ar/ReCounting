import type { Metadata } from "next";
import { ServiceHubPage } from "@/components/seo/ServiceHubPage";
import { tierBLocations } from "@/data/locations";

export const metadata: Metadata = {
  title: "Expat Tax Services in Bali | Personal Tax for Foreigners",
  description:
    "Personal Indonesian tax for expats in Bali: NPWP for KITAS holders, annual SPT 1770, dual-resident planning, and English-first support. Free consultation.",
  alternates: { canonical: "/expat-tax-services-bali" },
};

export default function Page() {
  return (
    <ServiceHubPage
      service="expat-tax-services-bali"
      cities={tierBLocations}
    />
  );
}
