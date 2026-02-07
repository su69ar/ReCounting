"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import { motionTokens, prefersReducedMotion } from "@/lib/motion";
import { useMagneticButton } from "@/hooks/useMagneticButton";
import { SplitTextHeading } from "@/components/animations/SplitTextHeading";

type CTASectionProps = {
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  variant?: "default" | "gradient" | "minimal";
};

export function CTASection({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  variant = "default",
}: CTASectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const primaryMagnetic = useMagneticButton<HTMLAnchorElement>({ strength: 0.2 });
  const secondaryMagnetic = useMagneticButton<HTMLAnchorElement>({ strength: 0.15 });

  useGSAP(() => {
    if (!sectionRef.current) return;
    
    const prefersReduced = prefersReducedMotion();
    const buttons = sectionRef.current.querySelectorAll(".cta-button");
    
    // Always ensure visibility first
    gsap.set(buttons, { opacity: 1, y: 0, visibility: "visible" });
    
    if (prefersReduced || buttons.length === 0) return;

    gsap.fromTo(
      buttons,
      { y: motionTokens.distance.sm, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: motionTokens.duration.medium,
        stagger: 0.12,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        overwrite: "auto",
      }
    );
  }, { scope: sectionRef });

  const bgClasses = {
    default: "rounded-3xl border border-neutral-200 bg-white p-8 lg:p-12",
    gradient: "rounded-3xl bg-gradient-to-br from-primary-500/10 to-accent-500/10 p-8 lg:p-12 border border-primary-200/50",
    minimal: "py-12 border-t border-neutral-200",
  };

  return (
    <div ref={sectionRef} className={bgClasses[variant]}>
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-3">
          <SplitTextHeading
            text={title}
            as="h2"
            className="text-2xl lg:text-3xl font-semibold text-neutral-900"
            splitType="words"
            animationType="cascade"
          />
          <p className="text-sm lg:text-base text-neutral-500">{subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-4 lg:justify-end">
          <Link
            href={primaryCta.href}
            className="cta-button btn-primary-new"
            {...primaryMagnetic}
          >
            {primaryCta.label}
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="cta-button btn-secondary-new"
              {...secondaryMagnetic}
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
