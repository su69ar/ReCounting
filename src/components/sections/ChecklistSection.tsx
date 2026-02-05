"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import { motionTokens, prefersReducedMotion } from "@/lib/motion";
import { SplitTextHeading } from "@/components/animations/SplitTextHeading";

type ChecklistSectionProps = {
  badge?: string;
  title: string;
  subtitle: string;
  items: string[];
  action?: { label: string; href: string };
};

export function ChecklistSection({
  badge,
  title,
  subtitle,
  items,
  action,
}: ChecklistSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || prefersReducedMotion()) return;

    const checkItems = containerRef.current.querySelectorAll(".check-item");

    gsap.from(checkItems, {
      x: -20,
      autoAlpha: 0,
      duration: motionTokens.duration.medium,
      stagger: motionTokens.stagger.tight,
      ease: motionTokens.ease.enter,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });

    const checkIcons = containerRef.current.querySelectorAll(".check-icon");
    gsap.from(checkIcons, {
      scale: 0,
      duration: 0.4,
      stagger: motionTokens.stagger.tight,
      ease: "back.out(3)",
      delay: 0.3,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="rounded-3xl border border-neutral-200 bg-white p-8 lg:p-12"
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="space-y-4">
          {badge && <p className="badge-new">{badge}</p>}
          <SplitTextHeading
            text={title}
            as="h2"
            className="section-title"
            splitType="words"
          />
          <p className="section-subtitle">{subtitle}</p>
          {action && (
            <Link href={action.href} className="btn-secondary-new inline-flex mt-4">
              {action.label}
            </Link>
          )}
        </div>

        <div className="grid gap-4">
          {items.map((item) => (
            <div
              key={item}
              className="check-item flex items-center gap-4 p-4 rounded-xl 
                       bg-neutral-50 border border-neutral-100"
            >
              <span className="check-icon flex h-6 w-6 items-center justify-center 
                             rounded-full bg-accent-500 text-white flex-shrink-0">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <p className="text-sm text-neutral-600">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
