import type { Metadata } from "next";
import { LocationLandingPage } from "@/components/seo/LocationLandingPage";
import { tierALocations } from "@/data/locations";
import {
  generateLocationMetadata,
  generateLocationStaticParams,
  resolveLocationPage,
} from "@/lib/seo-location-page";

export function generateStaticParams() {
  return generateLocationStaticParams(tierALocations);
}

type Params = Promise<{ city: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { city } = await params;
  return generateLocationMetadata("bali-tax-services", city);
}

export const dynamicParams = false;

export default async function Page({ params }: { params: Params }) {
  const { city } = await params;
  const data = resolveLocationPage(
    "bali-tax-services",
    city,
    tierALocations
  );
  return <LocationLandingPage {...data} />;
}
