"use client";

// import { HeroBackground } from "./HeroBackgroundNew"; // New image bg
import { HeroBackground } from "./HeroBackground"; // Rollback: uncomment this
import { HeroHeadline } from "./HeroHeadline";
import { HeroStats } from "./HeroStats";
import { HeroCTA } from "./HeroCTA";
import { HeroFloatingCard } from "./HeroFloatingCard";

type HeroProps = {
  headline: string;
  subtitle: string;
  stats: Array<{ value: string; label: string; numericValue?: number; suffix?: string }>;
  primaryCta: { href: string; label: string };
  secondaryCta: { href: string; label: string };
  cardContent: {
    tagline: string;
    title: string;
    description: string;
    features: string[];
  };
};

export function Hero({
  headline,
  subtitle,
  stats,
  primaryCta,
  secondaryCta,
  cardContent,
}: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <HeroBackground />

      <div className="container-grid relative z-10 py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-10">
            <span className="badge-new">Available for new clients</span>

            <HeroHeadline text={headline} subtitle={subtitle} />

            <HeroCTA
              primaryHref={primaryCta.href}
              primaryLabel={primaryCta.label}
              secondaryHref={secondaryCta.href}
              secondaryLabel={secondaryCta.label}
            />

            <HeroStats stats={stats} />
          </div>

          <div className="lg:pl-8">
            <HeroFloatingCard {...cardContent} />
          </div>
        </div>
      </div>
    </section>
  );
}
