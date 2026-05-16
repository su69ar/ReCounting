import type { Metadata } from "next";
import { LocationLandingPage } from "@/components/seo/LocationLandingPage";
import { tierBLocations } from "@/data/locations";
import {
  generateLocationMetadata,
  generateLocationStaticParams,
  resolveLocationPage,
} from "@/lib/seo-location-page";

export function generateStaticParams() {
  return generateLocationStaticParams(tierBLocations);
}

type Params = Promise<{ city: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { city } = await params;
  return generateLocationMetadata("villa-accounting-services-bali", city);
}

export const dynamicParams = false;

export default async function Page({ params }: { params: Params }) {
  const { city } = await params;
  const data = resolveLocationPage(
    "villa-accounting-services-bali",
    city,
    tierBLocations
  );
  return <LocationLandingPage {...data} />;
}
