"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useMagneticButton } from "@/hooks/useMagneticButton";
import { prefersReducedMotion } from "@/lib/motion";

type HeroCTAProps = {
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
};

export function HeroCTA({
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: HeroCTAProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const primaryMagnetic = useMagneticButton<HTMLAnchorElement>({ strength: 0.2 });
  const secondaryMagnetic = useMagneticButton<HTMLAnchorElement>({ strength: 0.15 });

  useGSAP(() => {
    if (!containerRef.current) return;
    
    const prefersReduced = prefersReducedMotion();
    const children = containerRef.current.children;

    // Always ensure visibility first
    gsap.set(children, { opacity: 1, y: 0, visibility: "visible" });

    if (prefersReduced) return;

    // Animate from initial state - ensure smooth entrance
    gsap.fromTo(
      children,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.08,
        delay: 0.1,
        ease: "power3.out",
        overwrite: "auto",
      }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="flex flex-wrap gap-4" style={{ opacity: 1, visibility: "visible" }}>
      <Link
        href={primaryHref}
        className="btn-primary group relative overflow-hidden"
        {...primaryMagnetic}
      >
        <span className="relative z-10">{primaryLabel}</span>

        <span
          className="absolute inset-0 -translate-x-full bg-gradient-to-r 
                     from-transparent via-white/20 to-transparent 
                     group-hover:translate-x-full transition-transform 
                     duration-500 ease-out"
        />
      </Link>

      {/* Secondary Button - Removed as per request */}
      {/* <a
        href={secondaryHref}
        target="_blank"
        rel="noreferrer"
        className="px-6 py-3.5 rounded-full font-semibold text-primary-700 bg-blue-50 border border-blue-200 hover:bg-blue-100 hover:border-blue-300 transition-all duration-300 shadow-sm"
        {...secondaryMagnetic}
      >
        {secondaryLabel}
      </a> */}
    </div>
  );
}

