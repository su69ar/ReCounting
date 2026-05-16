import type { Metadata } from "next";
import { ServiceHubPage } from "@/components/seo/ServiceHubPage";
import { tierALocations } from "@/data/locations";

export const metadata: Metadata = {
  title: "Bali Bookkeeping Services | Monthly Books for SMEs and PT PMA",
  description:
    "Monthly bookkeeping in Bali with bank reconciliation, transaction entry, and reports for SMEs, PT PMA, villas, and restaurants. Bilingual support and free consultation.",
  alternates: { canonical: "/bali-bookkeeping-services" },
};

export default function Page() {
  return (
    <ServiceHubPage
      service="bali-bookkeeping-services"
      cities={tierALocations}
    />
  );
}
