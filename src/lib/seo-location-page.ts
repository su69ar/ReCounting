import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  locations,
  type LocationSlug,
  locationSlugs,
} from "@/data/locations";
import {
  services,
  type ServiceSlug,
  getLocationServiceFaqs,
} from "@/data/location-services";

export type GeneratedLocationParams = { city: string };

export type ResolvedLocationPage = {
  location: ReturnType<typeof getLocation>;
  service: (typeof services)[ServiceSlug];
  faqs: ReturnType<typeof getLocationServiceFaqs>;
  nearbyLinks: { name: string; href: string }[];
  hubHref: string;
};

function getLocation(slug: LocationSlug) {
  return locations[slug];
}

function isLocationSlug(slug: string): slug is LocationSlug {
  return locationSlugs.includes(slug as LocationSlug);
}

export function generateLocationStaticParams(
  whitelist?: LocationSlug[]
): GeneratedLocationParams[] {
  const list = whitelist ?? locationSlugs;
  return list.map((city) => ({ city }));
}

export function resolveLocationPage(
  service: ServiceSlug,
  citySlug: string,
  whitelist?: LocationSlug[]
): ResolvedLocationPage {
  if (!isLocationSlug(citySlug)) notFound();
  if (whitelist && !whitelist.includes(citySlug)) notFound();

  const location = getLocation(citySlug);
  const serviceProfile = services[service];
  const faqs = getLocationServiceFaqs(service, citySlug);

  const nearbyLinks = location.nearby
    .filter((slug) => !whitelist || whitelist.includes(slug))
    .slice(0, 3)
    .map((slug) => ({
      name: locations[slug].displayName,
      href: `/${service}/${slug}/`,
    }));

  const hubHref = `/${service}`;

  return {
    location,
    service: serviceProfile,
    faqs,
    nearbyLinks,
    hubHref,
  };
}

export function generateLocationMetadata(
  service: ServiceSlug,
  citySlug: string
): Metadata {
  if (!isLocationSlug(citySlug)) return { title: "Not found" };
  const location = getLocation(citySlug);
  const serviceProfile = services[service];
  const title = serviceProfile.metaTitleTemplate.replace(
    "{City}",
    location.displayName
  );
  const description = serviceProfile.metaDescriptionTemplate.replace(
    "{City}",
    location.displayName
  );

  return {
    title,
    description,
    alternates: {
      canonical: `/${service}/${citySlug}/`,
    },
    openGraph: {
      title,
      description,
      url: `/${service}/${citySlug}/`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
