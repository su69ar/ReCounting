import Link from "next/link";
import { Reveal } from "@/components/animations/Reveal";
import { StaggerGroup } from "@/components/animations/StaggerGroup";
import { SplitTextHeading } from "@/components/animations/SplitTextHeading";
import { MaskReveal } from "@/components/animations/MaskReveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { colorClasses, type ColorKey } from "@/lib/color-map";
import { generateBreadcrumbSchema, generateFAQSchema, generateServiceSchema } from "@/lib/schema";
import { primaryCta, secondaryCta, siteConfig } from "@/lib/site";
import type { CommercialLandingPageConfig } from "@/data/seo-pages";

const sectionColors: ColorKey[] = ["primary", "accent", "secondary"];

export function CommercialLandingPage({
  page,
}: {
  page: CommercialLandingPageConfig;
}) {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: page.eyebrow, url: `${siteConfig.url}/${page.slug}` },
  ]);

  const faqSchema = generateFAQSchema(page.faqs);

  const serviceSchema = generateServiceSchema({
    name: page.serviceName,
    description: page.serviceDescription,
    url: `${siteConfig.url}/${page.slug}`,
  });

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={serviceSchema} />

      <section className="section-space">
        <div className="container-grid">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-5">
                <p className="badge-pill">{page.eyebrow}</p>
                <SplitTextHeading
                  text={page.heading}
                  as="h1"
                  className="text-4xl font-bold tracking-tight text-[color:var(--color-slate-dark)]"
                />
                <p className="section-subtitle">{page.intro}</p>
                <p className="text-sm font-medium text-[color:var(--color-primary)]">
                  {page.priceNote}
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
                <h2 className="text-lg font-semibold relative z-10">{page.includedTitle}</h2>
                <ul className="mt-4 space-y-3 text-sm text-[color:var(--color-slate-light)] relative z-10">
                  {page.includedItems.map((item) => (
                    <li key={item.text} className="stagger-item flex items-center gap-3">
                      <span
                        className={`check-glow ${colorClasses[item.color].bg} ${colorClasses[item.color].text}`}
                      >
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
                      {item.text}
                    </li>
                  ))}
                </ul>
              </StaggerGroup>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-[color:var(--color-primary)]/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-[color:var(--color-accent)]/5 rounded-full blur-3xl -translate-y-1/2" />

        <div className="container-grid relative z-10">
          <Reveal>
            <div className="text-center mb-8">
              <p className="badge-gradient inline-flex mb-3">Process</p>
              <h2 className="section-title">{page.processTitle}</h2>
            </div>
          </Reveal>
          <StaggerGroup className="grid gap-8 md:grid-cols-3">
            {page.processItems.map((item) => (
              <div
                key={item.title}
                className={`group card-glow ${colorClasses[item.color].glow} stagger-item p-6 relative overflow-hidden`}
              >
                <span className={`step-number ${colorClasses[item.color].text}`}>{item.step}</span>
                <div
                  className={`icon-glow ${colorClasses[item.color].bg} ${colorClasses[item.color].text} mb-4 relative z-10`}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 6v6l4 2" />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold relative z-10">{item.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--color-slate-light)] relative z-10">
                  {item.description}
                </p>
                <div
                  className={`mt-4 h-[2px] w-0 rounded-full bg-gradient-to-r ${colorClasses[item.color].from} ${colorClasses[item.color].to} group-hover:w-16 transition-all duration-500`}
                />
              </div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="section-space relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[color:var(--color-primary)]/5 rounded-full blur-3xl" />

        <div className="container-grid relative z-10">
          <MaskReveal className="relative rounded-3xl overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-[color:var(--color-primary)]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[color:var(--color-accent)]/10 rounded-full blur-3xl" />

            <div className="relative card-glass border border-white/50 rounded-3xl p-8 lg:p-10 backdrop-blur-xl">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <p className="badge-gradient inline-flex mb-3">Audience</p>
                  <SplitTextHeading
                    text={page.audienceTitle}
                    as="h2"
                    className="text-2xl font-semibold"
                  />
                  <p className="mt-3 text-sm text-[color:var(--color-slate-light)]">
                    {page.audienceIntro}
                  </p>
                  <div className="mt-4 glow-bar glow-bar-md" />
                </div>

                <StaggerGroup className="grid gap-3">
                  {page.audienceItems.map((item) => (
                    <div
                      key={item.text}
                      className={`group card-glow ${colorClasses[item.color].glow} stagger-item flex items-center gap-4 p-4`}
                    >
                      <span
                        className={`check-glow ${colorClasses[item.color].bg} ${colorClasses[item.color].text}`}
                      >
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
                      <p className="text-sm text-[color:var(--color-slate-light)]">{item.text}</p>
                    </div>
                  ))}
                </StaggerGroup>
              </div>
            </div>
          </MaskReveal>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-grid">
          <Reveal>
            <div className="max-w-2xl">
              <p className="badge-gradient inline-flex mb-3">FAQ</p>
              <SplitTextHeading
                text={`Questions about ${page.eyebrow.toLowerCase()}`}
                as="h2"
                className="section-title"
              />
            </div>
          </Reveal>
          <StaggerGroup className="mt-8 grid gap-4 md:grid-cols-3">
            {page.faqs.map((item, index) => {
              const color = sectionColors[index % sectionColors.length];
              return (
                <div
                  key={item.question}
                  className={`card-glow ${colorClasses[color].glow} stagger-item p-6`}
                >
                  <h3 className="text-base font-semibold text-[color:var(--color-slate-dark)]">
                    {item.question}
                  </h3>
                  <p className="mt-3 text-sm text-[color:var(--color-slate-light)]">
                    {item.answer}
                  </p>
                </div>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      <section className="section-space">
        <div className="container-grid">
          <Reveal>
            <div className="max-w-2xl">
              <p className="badge-gradient inline-flex mb-3">Related resources</p>
              <SplitTextHeading
                text="Keep exploring this topic"
                as="h2"
                className="section-title"
              />
              <p className="section-subtitle mt-3">
                We link the most relevant services and resources so Google and AI search
                systems can understand this topic cluster clearly.
              </p>
            </div>
          </Reveal>
          <StaggerGroup className="mt-8 grid gap-6 md:grid-cols-3">
            {page.relatedLinks.map((item, index) => {
              const color = sectionColors[index % sectionColors.length];
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group card-glow ${colorClasses[color].glow} stagger-item h-full p-6`}
                >
                  <p className={`text-xs font-semibold uppercase tracking-wide ${colorClasses[color].text}`}>
                    Related page
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-[color:var(--color-slate-dark)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-[color:var(--color-slate-light)]">
                    {item.description}
                  </p>
                  <div
                    className={`mt-4 h-[2px] w-0 rounded-full bg-gradient-to-r ${colorClasses[color].from} ${colorClasses[color].to} group-hover:w-16 transition-all duration-500`}
                  />
                </Link>
              );
            })}
          </StaggerGroup>
        </div>
      </section>
    </>
  );
}
