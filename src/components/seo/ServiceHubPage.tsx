import Link from "next/link";
import { Reveal } from "@/components/animations/Reveal";
import { StaggerGroup } from "@/components/animations/StaggerGroup";
import { SplitTextHeading } from "@/components/animations/SplitTextHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import {
  generateBreadcrumbSchema,
  generateItemListSchema,
  generateServiceSchema,
} from "@/lib/schema";
import { primaryCta, secondaryCta, siteConfig } from "@/lib/site";
import {
  services,
  type ServiceSlug,
} from "@/data/location-services";
import {
  locations,
  type LocationSlug,
} from "@/data/locations";

export type ServiceHubPageProps = {
  service: ServiceSlug;
  cities: LocationSlug[];
};

export function ServiceHubPage({ service, cities }: ServiceHubPageProps) {
  const profile = services[service];
  const hubUrl = `${siteConfig.url}/${service}/`;
  const heading = profile.longName.replace("Services", `Services in Bali`);
  const intro = profile.intro.replace("{City}", "Bali");

  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: profile.longName, url: hubUrl },
  ]);

  const itemList = generateItemListSchema(
    cities.map((c) => ({
      name: `${profile.shortName} in ${locations[c].displayName}, Bali`,
      description: profile.intro.replace("{City}", locations[c].displayName),
      url: `${hubUrl}${c}/`,
    }))
  );

  const serviceSchema = generateServiceSchema({
    name: profile.longName,
    description: intro,
    url: hubUrl,
    serviceType: profile.longName,
  });

  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={itemList} />
      <JsonLd data={serviceSchema} />

      <section className="section-space">
        <div className="container-grid">
          <Breadcrumbs
            className="mb-6"
            items={[{ name: "Home", href: "/" }, { name: profile.longName }]}
          />
          <Reveal>
            <div className="max-w-3xl space-y-5">
              <p className="badge-pill">{profile.shortName} in Bali</p>
              <SplitTextHeading
                text={heading}
                as="h1"
                className="text-4xl font-bold tracking-tight text-[color:var(--color-slate-dark)]"
              />
              <p className="section-subtitle">{intro}</p>
              <p className="text-sm text-[color:var(--color-slate-light)]">
                Built for {profile.audienceLabel}. Pick the Bali area closest
                to your operation below — each page covers the local business
                mix, common compliance issues, and how we typically run the
                engagement.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href={primaryCta.href} className="btn-primary">
                  {primaryCta.label}
                </Link>
                <a
                  href={secondaryCta.href}
                  className="btn-secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  {secondaryCta.label}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-grid">
          <Reveal>
            <div className="max-w-2xl">
              <p className="badge-gradient inline-flex mb-3">Service areas</p>
              <SplitTextHeading
                text={`${profile.shortName} pages by Bali area`}
                as="h2"
                className="section-title"
              />
              <p className="section-subtitle mt-3">
                We currently maintain location-specific pages for the
                following Bali areas. Each page is written for the local
                business mix and common compliance questions.
              </p>
            </div>
          </Reveal>
          <StaggerGroup className="mt-8 grid gap-6 md:grid-cols-3">
            {cities.map((c) => {
              const loc = locations[c];
              return (
                <Link
                  key={c}
                  href={`/${service}/${c}/`}
                  className="group card-glow stagger-item h-full p-6"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-primary)]">
                    {loc.region}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-[color:var(--color-slate-dark)]">
                    {profile.shortName} in {loc.displayName}
                  </h3>
                  <p className="mt-3 text-sm text-[color:var(--color-slate-light)]">
                    {loc.businessMix.slice(0, 3).join(", ")}
                    {loc.businessMix.length > 3 ? ", and more." : "."}
                  </p>
                </Link>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      <section className="section-space">
        <div className="container-grid">
          <Reveal>
            <div className="max-w-3xl">
              <p className="badge-gradient inline-flex mb-3">
                What we deliver
              </p>
              <SplitTextHeading
                text={`What you get with our ${profile.shortName.toLowerCase()} engagement`}
                as="h2"
                className="section-title"
              />
            </div>
          </Reveal>
          <StaggerGroup className="mt-8 grid gap-4 md:grid-cols-2">
            {profile.deliverables.map((d) => (
              <div
                key={d}
                className="card-glow stagger-item flex items-start gap-4 p-4"
              >
                <span className="check-glow bg-[color:var(--color-primary)]/10 text-[color:var(--color-primary)]">
                  <svg
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <p className="text-sm text-[color:var(--color-slate-light)]">
                  {d}
                </p>
              </div>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </>
  );
}
