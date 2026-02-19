"use client";

import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";

export function ScrollProgress() {
  const progressRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const progress = progressRef.current;
    if (!progress || prefersReducedMotion()) return;

    // Use quickSetter for maximum performance during scroll
    const setScaleX = gsap.quickSetter(progress, "scaleX");

    // Set initial state
    gsap.set(progress, { scaleX: 0, transformOrigin: "0% 50%" });

    ScrollTrigger.create({
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => setScaleX(self.progress),
    });
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 right-0 h-1 z-[1000] pointer-events-none"
    >
      <div className="absolute inset-0 bg-neutral-200/50" />

      <div
        ref={progressRef}
        className="absolute inset-0 origin-left"
        style={{
          background: "linear-gradient(90deg, var(--color-primary-500), var(--color-accent-500))",
        }}
      />
    </div>
  );
}
