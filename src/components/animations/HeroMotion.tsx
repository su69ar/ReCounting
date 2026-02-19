"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { motionDefaults, prefersReducedMotion } from "@/lib/motion";

type HeroMotionProps = {
  children: React.ReactNode;
};

export function HeroMotion({ children }: HeroMotionProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!ref.current) return;

      const items = ref.current.querySelectorAll(".hero-item");
      const floats = ref.current.querySelectorAll(".hero-float");

      if (prefersReducedMotion()) {
        gsap.set(items, { autoAlpha: 1, y: 0 });
        gsap.set(floats, { y: 0 });
        gsap.set(".hero-parallax", { y: 0 });
        return;
      }

      // Initial set
      gsap.set(items, { autoAlpha: 0, y: motionDefaults.distance });

      const tl = gsap.timeline({
        defaults: { ease: "recounting-enter" } // Use custom ease
      });

      tl.to(items, {
        y: 0,
        autoAlpha: 1,
        duration: 0.5, // Snappier duration
        stagger: 0.06, // Tighter stagger
        onStart: () => {
          items.forEach((el) => {
            (el as HTMLElement).style.willChange = "transform, opacity";
          });
        },
        onComplete: () => {
          items.forEach((el) => {
            (el as HTMLElement).style.willChange = "auto";
          });
        },
      });

      // Float animation — scoped and using context for auto-cleanup
      if (floats.length) {
        gsap.to(floats, {
          y: 8,
          duration: 3,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      }

      gsap.to(".hero-parallax", {
        y: 60,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: ref }
  );

  return <div ref={ref}>{children}</div>;
}
