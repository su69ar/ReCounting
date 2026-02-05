"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";

type ParallaxConfig = {
  speed?: number;
  direction?: "vertical" | "horizontal";
  scrub?: boolean | number;
};

export function useParallax<T extends HTMLElement>({
  speed = 0.5,
  direction = "vertical",
  scrub = true,
}: ParallaxConfig = {}) {
  const ref = useRef<T | null>(null);

  useGSAP(() => {
    if (!ref.current || prefersReducedMotion()) return;

    const property = direction === "vertical" ? "yPercent" : "xPercent";
    const distance = speed * 100;

    gsap.to(ref.current, {
      [property]: distance,
      ease: "none",
      scrollTrigger: {
        trigger: ref.current,
        start: "top bottom",
        end: "bottom top",
        scrub,
      },
    });
  }, { scope: ref });

  return ref;
}
