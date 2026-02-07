"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { motionTokens, prefersReducedMotion } from "@/lib/motion";

type RevealVariant = "fade" | "slide-up" | "slide-left" | "slide-right" | "scale" | "mask";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  start?: string;
};

export function Reveal({
  children,
  className,
  variant = "slide-up",
  delay = 0,
  duration = motionTokens.duration.slow,
  distance = motionTokens.distance.md,
  once = false,
  start = motionTokens.scrollTrigger.start,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      const prefersReduced = prefersReducedMotion();

      // Always ensure visibility first
      gsap.set(ref.current, { opacity: 1, y: 0, x: 0, scale: 1, visibility: "visible" });

      if (prefersReduced) return;

      const fromVars: gsap.TweenVars = { opacity: 0 };
      
      switch (variant) {
        case "fade":
          break;
        case "slide-up":
          fromVars.y = distance;
          break;
        case "slide-left":
          fromVars.x = distance;
          break;
        case "slide-right":
          fromVars.x = -distance;
          break;
        case "scale":
          fromVars.scale = 0.9;
          break;
        case "mask":
          break;
      }

      gsap.fromTo(
        ref.current,
        fromVars,
        {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          duration,
          ease: motionTokens.ease.enter,
          delay,
          onStart: () => {
            if (!ref.current) return;
            ref.current.style.willChange = "transform, opacity";
          },
          onComplete: () => {
            if (!ref.current) return;
            ref.current.style.willChange = "auto";
          },
          scrollTrigger: {
            trigger: ref.current,
            start,
            toggleActions: once ? "play none none none" : "play none none reverse",
          },
          overwrite: "auto",
        }
      );
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className} style={{ opacity: 1, visibility: "visible" }}>
      {children}
    </div>
  );
}
