"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motionDefaults, prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

type MaskRevealProps = {
  children: React.ReactNode;
  className?: string;
  radius?: number;
};

export function MaskReveal({ children, className, radius = 24 }: MaskRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      const prefersReduced = prefersReducedMotion();

      if (prefersReduced) {
        gsap.set(ref.current, { clipPath: "inset(0 0 0 0 round 0px)" });
        return;
      }

      gsap.fromTo(
        ref.current,
        { clipPath: `inset(0 0 100% 0 round ${radius}px)` },
        {
          clipPath: `inset(0 0 0 0 round ${radius}px)`,
          duration: motionDefaults.duration,
          ease: motionDefaults.ease,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
