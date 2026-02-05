"use client";

import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";

type ParallaxLayersProps = {
  children: React.ReactNode;
  className?: string;
};

type ParallaxLayerProps = {
  children: React.ReactNode;
  speed?: number; 
  className?: string;
};

export function ParallaxLayer({ children, speed = 0, className }: ParallaxLayerProps) {
  const layerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!layerRef.current || prefersReducedMotion() || speed === 0) return;

    gsap.to(layerRef.current, {
      yPercent: speed * 50,
      ease: "none",
      scrollTrigger: {
        trigger: layerRef.current.parentElement,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, { scope: layerRef });

  return (
    <div ref={layerRef} className={className}>
      {children}
    </div>
  );
}

export function ParallaxLayers({ children, className }: ParallaxLayersProps) {
  return (
    <div className={`relative ${className}`}>
      {children}
    </div>
  );
}
