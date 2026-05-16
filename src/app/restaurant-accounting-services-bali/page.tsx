import type { Metadata } from "next";
import { ServiceHubPage } from "@/components/seo/ServiceHubPage";
import type { LocationSlug } from "@/data/locations";

const restaurantCities: LocationSlug[] = ["canggu", "seminyak"];

export const metadata: Metadata = {
  title: "Restaurant Accounting in Bali | F&B + PB1 Specialists",
  description:
    "Restaurant and F&B accounting in Bali: daily POS reconciliation, food and beverage cost tracking, PB1 compliance, service-charge handling. Bilingual support.",
  alternates: { canonical: "/restaurant-accounting-services-bali" },
};

export default function Page() {
  return (
    <ServiceHubPage
      service="restaurant-accounting-services-bali"
      cities={restaurantCities}
    />
  );
}
