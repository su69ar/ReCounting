import type { Metadata } from "next";
import { LocationLandingPage } from "@/components/seo/LocationLandingPage";
import type { LocationSlug } from "@/data/locations";
import {
  generateLocationMetadata,
  generateLocationStaticParams,
  resolveLocationPage,
} from "@/lib/seo-location-page";

const restaurantCities: LocationSlug[] = ["canggu", "seminyak"];

export function generateStaticParams() {
  return generateLocationStaticParams(restaurantCities);
}

type Params = Promise<{ city: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { city } = await params;
  return generateLocationMetadata("restaurant-accounting-services-bali", city);
}

export const dynamicParams = false;

export default async function Page({ params }: { params: Params }) {
  const { city } = await params;
  const data = resolveLocationPage(
    "restaurant-accounting-services-bali",
    city,
    restaurantCities
  );
  return <LocationLandingPage {...data} />;
}
