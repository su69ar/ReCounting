"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motionDefaults, prefersReducedMotion } from "@/lib/motion";

type HeroMotionProps = {
  children: React.ReactNode;
};

export function HeroMotion({ children }: HeroMotionProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!ref.current) return;

      gsap.registerPlugin(ScrollTrigger);

      const prefersReduced = prefersReducedMotion();

      if (prefersReduced) {
        gsap.set(".hero-item", { autoAlpha: 1, y: 0 });
        gsap.set(".hero-parallax", { y: 0 });
        return;
      }

      gsap.set(".hero-item", { willChange: "transform, opacity" });

      const tl = gsap.timeline({ defaults: { ease: motionDefaults.ease } });
      tl.from(".hero-item", {
        y: motionDefaults.distance,
        autoAlpha: 0,
        duration: motionDefaults.duration,
        stagger: motionDefaults.stagger,
        onComplete: () => {
          gsap.set(".hero-item", { clearProps: "willChange" });
        },
      });

      gsap.to(".hero-float", {
        y: 12,
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

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
