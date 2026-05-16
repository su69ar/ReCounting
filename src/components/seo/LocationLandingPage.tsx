import Link from "next/link";
import { Reveal } from "@/components/animations/Reveal";
import { StaggerGroup } from "@/components/animations/StaggerGroup";
import { SplitTextHeading } from "@/components/animations/SplitTextHeading";
import { MaskReveal } from "@/components/animations/MaskReveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateLocationLocalBusinessSchema,
  generateServiceSchema,
} from "@/lib/schema";
import { primaryCta, secondaryCta, siteConfig } from "@/lib/site";
import type { LocationProfile } from "@/data/locations";
import type { ServiceProfile } from "@/data/location-services";

export type LocationLandingPageProps = {
  location: LocationProfile;
  service: ServiceProfile;
  faqs: { question: string; answer: string }[];
  nearbyLinks: { name: string; href: string }[];
  hubHref: string;
};

export function LocationLandingPage({
  location,
  service,
  faqs,
  nearbyLinks,
  hubHref,
}: LocationLandingPageProps) {
  const pageUrl = `${siteConfig.url}/${service.slug}/${location.slug}/`;
  const heading = service.h1Template.replace("{City}", location.displayName);
  const intro = service.intro.replace("{City}", location.displayName);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: service.longName, url: `${siteConfig.url}/${service.slug}/` },
    { name: location.displayName, url: pageUrl },
  ]);

  const faqSchema = generateFAQSchema(faqs);

  const serviceSchema = generateServiceSchema({
    name: `${service.longName} in ${location.displayName}, Bali`,
    description: intro,
    url: pageUrl,
    serviceType: service.longName,
    areaServed: [
      { type: "City", name: location.displayName },
      { type: "State", name: "Bali" },
      { type: "Country", name: "Indonesia" },
    ],
  });

  const localBusinessSchema = generateLocationLocalBusinessSchema({
    city: `${location.displayName}, Bali`,
    url: pageUrl,
    description: intro,
    serviceType: service.longName,
    geo: location.geo,
  });

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={localBusinessSchema} />

      <section className="section-space">
        <div className="container-grid">
          <Breadcrumbs
            className="mb-6"
            items={[
              { name: "Home", href: "/" },
              { name: service.longName, href: hubHref },
              { name: location.displayName },
            ]}
          />

          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-5">
                <p className="badge-pill">
                  {service.shortName} in {location.displayName}
                </p>
                <SplitTextHeading
                  text={heading}
                  as="h1"
                  className="text-4xl font-bold tracking-tight text-[color:var(--color-slate-dark)]"
                />
                <p className="section-subtitle">{intro}</p>
                <p className="text-sm text-[color:var(--color-slate-light)]">
                  Built for {service.audienceLabel}.{" "}
                  {location.displayName} sits in {location.region}
                  {location.subDistricts.length > 0
                    ? ` (covering ${location.subDistricts.slice(0, 3).join(", ")}${location.subDistricts.length > 3 ? " and nearby" : ""})`
                    : ""}
                  .
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

              <StaggerGroup className="card-glow p-6 relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[color:var(--color-primary)]/20 rounded-full blur-3xl pointer-events-none" />
                <h2 className="text-lg font-semibold relative z-10">
                  Business mix we typically support in {location.displayName}
                </h2>
                <ul className="mt-4 space-y-3 text-sm text-[color:var(--color-slate-light)] relative z-10">
                  {location.businessMix.map((item) => (
                    <li
                      key={item}
                      className="stagger-item flex items-start gap-3"
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
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </StaggerGroup>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space bg-white relative overflow-hidden">
        <div className="container-grid relative z-10">
          <Reveal>
            <div className="max-w-3xl">
              <p className="badge-gradient inline-flex mb-3">
                Local pain points
              </p>
              <SplitTextHeading
                text={`What ${location.displayName} businesses ask us about`}
                as="h2"
                className="section-title"
              />
              <p className="section-subtitle mt-3">
                These are the specific accounting and tax issues we encounter
                most often with {location.displayName}-based clients. Whether
                yours matches or not, it gives a sense of how we approach
                problems in the area.
              </p>
            </div>
          </Reveal>
          <StaggerGroup className="mt-8 grid gap-4 md:grid-cols-2">
            {location.painPoints.map((point) => (
              <div
                key={point}
                className="card-glow stagger-item p-6 flex items-start gap-4"
              >
                <span className="check-glow bg-[color:var(--color-accent)]/10 text-[color:var(--color-accent)] shrink-0">
                  <svg
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path d="M12 9v4" />
                    <path d="M12 17h.01" />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                </span>
                <p className="text-sm text-[color:var(--color-slate-light)]">
                  {point}
                </p>
              </div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="section-space">
        <div className="container-grid">
          <MaskReveal className="relative rounded-3xl overflow-hidden">
            <div className="relative card-glass border border-white/50 rounded-3xl p-8 lg:p-10 backdrop-blur-xl">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                <div>
                  <p className="badge-gradient inline-flex mb-3">
                    What is included
                  </p>
                  <SplitTextHeading
                    text={`Our ${service.shortName.toLowerCase()} engagement in ${location.displayName}`}
                    as="h2"
                    className="text-2xl font-semibold"
                  />
                  <p className="mt-3 text-sm text-[color:var(--color-slate-light)]">
                    Every {service.shortName.toLowerCase()} engagement in{" "}
                    {location.displayName} is scoped to the operating
                    complexity of the business — these deliverables form the
                    foundation.
                  </p>
                </div>

                <StaggerGroup className="grid gap-3">
                  {service.deliverables.map((d) => (
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
            </div>
          </MaskReveal>
        </div>
      </section>

      {faqs.length > 0 && (
        <section className="section-space bg-white">
          <div className="container-grid">
            <Reveal>
              <div className="max-w-2xl">
                <p className="badge-gradient inline-flex mb-3">FAQ</p>
                <SplitTextHeading
                  text={`${service.shortName} questions from ${location.displayName} businesses`}
                  as="h2"
                  className="section-title"
                />
              </div>
            </Reveal>
            <StaggerGroup className="mt-8 grid gap-4 md:grid-cols-2">
              {faqs.map((item) => (
                <div
                  key={item.question}
                  className="card-glow stagger-item p-6"
                >
                  <h3 className="text-base font-semibold text-[color:var(--color-slate-dark)]">
                    {item.question}
                  </h3>
                  <p className="mt-3 text-sm text-[color:var(--color-slate-light)]">
                    {item.answer}
                  </p>
                </div>
              ))}
            </StaggerGroup>
          </div>
        </section>
      )}

      {nearbyLinks.length > 0 && (
        <section className="section-space">
          <div className="container-grid">
            <Reveal>
              <div className="max-w-2xl">
                <p className="badge-gradient inline-flex mb-3">
                  Nearby areas we serve
                </p>
                <SplitTextHeading
                  text={`${service.shortName} in nearby Bali areas`}
                  as="h2"
                  className="section-title"
                />
                <p className="section-subtitle mt-3">
                  We work with {service.audienceLabel} across Bali. Explore
                  the dedicated pages for nearby areas.
                </p>
              </div>
            </Reveal>
            <StaggerGroup className="mt-8 grid gap-6 md:grid-cols-3">
              {nearbyLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group card-glow stagger-item h-full p-6"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-primary)]">
                    Nearby area
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-[color:var(--color-slate-dark)]">
                    {service.shortName} in {item.name}
                  </h3>
                  <p className="mt-3 text-sm text-[color:var(--color-slate-light)]">
                    See how we support {service.shortName.toLowerCase()} for
                    businesses in {item.name}.
                  </p>
                </Link>
              ))}
            </StaggerGroup>
          </div>
        </section>
      )}

      <section className="section-space">
        <div className="container-grid">
          <Reveal>
            <div className="card-glass rounded-3xl p-8 lg:p-10 text-center">
              <p className="badge-gradient inline-flex mb-3">Next step</p>
              <SplitTextHeading
                text={`Talk to a Bali accountant about your ${location.displayName} business`}
                as="h2"
                className="text-2xl font-semibold"
              />
              <p className="mt-3 text-sm text-[color:var(--color-slate-light)] max-w-2xl mx-auto">
                Book a free consultation. We respond on WhatsApp within 2 hours
                on business days and can usually quote within 48 hours of an
                introductory call.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
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
    </>
  );
}
