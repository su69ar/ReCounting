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
    if (!containerRef.current || prefersReducedMotion()) {
      gsap.set(containerRef.current, { autoAlpha: 1 });
      return;
    }

    gsap.from(containerRef.current?.children || [], {
      y: 20,
      autoAlpha: 0,
      duration: 0.6,
      stagger: 0.15,
      delay: 1.5,
      ease: "back.out(1.4)",
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="flex flex-wrap gap-4">
      <Link
        href={primaryHref}
        className="btn-primary-new group relative overflow-hidden"
        {...primaryMagnetic}
      >
        <span className="relative z-10">{primaryLabel}</span>
        
        <span 
          className="absolute inset-0 -translate-x-full bg-gradient-to-r 
                     from-transparent via-white/20 to-transparent 
                     group-hover:translate-x-full transition-transform 
                     duration-700 ease-out"
        />
      </Link>
      
      <a
        href={secondaryHref}
        target="_blank"
        rel="noreferrer"
        className="btn-secondary-new"
        {...secondaryMagnetic}
      >
        {secondaryLabel}
      </a>
    </div>
  );
}
