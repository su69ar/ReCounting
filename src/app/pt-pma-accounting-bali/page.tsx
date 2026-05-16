import type { Metadata } from "next";
import { ServiceHubPage } from "@/components/seo/ServiceHubPage";
import { tierBLocations } from "@/data/locations";

export const metadata: Metadata = {
  title: "PT PMA Accounting in Bali | Foreign-Owned Company Support",
  description:
    "Accounting and tax compliance for PT PMA foreign-owned companies in Bali. English-first reporting, LKPM filings, and Coretax DJP Online support. Free consultation.",
  alternates: { canonical: "/pt-pma-accounting-bali" },
};

export default function Page() {
  return (
    <ServiceHubPage
      service="pt-pma-accounting-bali"
      cities={tierBLocations}
    />
  );
}
