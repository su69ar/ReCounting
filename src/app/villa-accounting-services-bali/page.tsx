import type { Metadata } from "next";
import { ServiceHubPage } from "@/components/seo/ServiceHubPage";
import { tierBLocations } from "@/data/locations";

export const metadata: Metadata = {
  title: "Villa Accounting Services in Bali | OTA Reconciliation + PB1",
  description:
    "Accounting for villa rentals and short-term hospitality in Bali: Airbnb and Booking.com payout reconciliation, PB1 / PHR compliance, multi-currency reporting.",
  alternates: { canonical: "/villa-accounting-services-bali" },
};

export default function Page() {
  return (
    <ServiceHubPage
      service="villa-accounting-services-bali"
      cities={tierBLocations}
    />
  );
}
