import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/animations/Reveal";
import { StaggerGroup } from "@/components/animations/StaggerGroup";
import { SplitTextHeading } from "@/components/animations/SplitTextHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import {
  generateBreadcrumbSchema,
  generatePersonSchema,
} from "@/lib/schema";
import { primaryCta, siteConfig } from "@/lib/site";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "Our Team | ReCounting Bali Accounting and Tax Services",
  description:
    "Meet the ReCounting team — Indonesian accountants and tax practitioners supporting SMEs, PT PMA, and expat-owned businesses in Bali with English-first communication.",
  alternates: { canonical: "/team" },
  // Robots noindex until real names + credentials are filled in.
  robots: {
    index: false,
    follow: true,
  },
};

const breadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: siteConfig.url },
  { name: "Our Team", url: `${siteConfig.url}/team` },
]);

export default function TeamPage() {
  const hasRealData =
    team.length > 0 && !team[0].name.startsWith("TODO");

  return (
    <>
      <JsonLd data={breadcrumb} />
      {hasRealData &&
        team.map((member) => (
          <JsonLd
            key={member.slug}
            data={generatePersonSchema({
              name: member.name,
              jobTitle: member.jobTitle,
              url: `${siteConfig.url}/team#${member.slug}`,
              image: member.image
                ? `${siteConfig.url}${member.image}`
                : undefined,
              description: member.bio,
              email: member.email,
              knowsAbout: member.expertise,
              hasCredential: member.credentials.map((c) => ({
                name: c,
                type: "Professional certification",
              })),
              sameAs: member.linkedin ? [member.linkedin] : undefined,
            })}
          />
        ))}

      <section className="section-space">
        <div className="container-grid">
          <Breadcrumbs
            className="mb-6"
            items={[{ name: "Home", href: "/" }, { name: "Our Team" }]}
          />
          <Reveal>
            <div className="max-w-3xl space-y-5">
              <p className="badge-pill">Our Team</p>
              <SplitTextHeading
                text="Indonesian accountants and tax practitioners who run your books"
                as="h1"
                className="text-4xl font-bold tracking-tight text-[color:var(--color-slate-dark)]"
              />
              <p className="section-subtitle">
                Accounting is a YMYL discipline (Your Money or Your Life). We
                think clients deserve to know who actually does the work. This
                page lists the practitioners on the ReCounting team, their
                credentials, and what they focus on.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href={primaryCta.href} className="btn-primary">
                  {primaryCta.label}
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Contact us
                </Link>
              </div>
            </div>
          </Reveal>

          {!hasRealData && (
            <Reveal>
              <div className="mt-8 card-glow p-6">
                <p className="text-sm text-[color:var(--color-slate-light)]">
                  This page is currently <code>noindex</code>. Once team
                  members, credentials, and photos are confirmed in{" "}
                  <code>src/data/team.ts</code>, remove the noindex flag from{" "}
                  <code>src/app/team/page.tsx</code> and ship.
                </p>
              </div>
            </Reveal>
          )}

          {hasRealData && (
            <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-2">
              {team.map((member) => (
                <article
                  key={member.slug}
                  id={member.slug}
                  className="card-glow stagger-item p-6"
                >
                  <h2 className="text-lg font-semibold text-[color:var(--color-slate-dark)]">
                    {member.name}
                  </h2>
                  <p className="text-sm text-[color:var(--color-primary)] font-medium">
                    {member.jobTitle}
                  </p>
                  <p className="mt-3 text-sm text-[color:var(--color-slate-light)]">
                    {member.bio}
                  </p>
                  {member.credentials.length > 0 && (
                    <div className="mt-4">
                      <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-slate-light)]">
                        Credentials
                      </p>
                      <ul className="mt-1 space-y-1 text-sm text-[color:var(--color-slate-light)]">
                        {member.credentials.map((c) => (
                          <li key={c}>{c}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {member.expertise.length > 0 && (
                    <div className="mt-3">
                      <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-slate-light)]">
                        Areas of focus
                      </p>
                      <p className="mt-1 text-sm text-[color:var(--color-slate-light)]">
                        {member.expertise.join(" · ")}
                      </p>
                    </div>
                  )}
                </article>
              ))}
            </StaggerGroup>
          )}
        </div>
      </section>
    </>
  );
}
