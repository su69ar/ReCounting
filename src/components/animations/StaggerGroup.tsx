"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motionDefaults, prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

type StaggerGroupProps = {
  children: React.ReactNode;
  className?: string;
  selector?: string;
};

export function StaggerGroup({
  children,
  className,
  selector = ".stagger-item",
}: StaggerGroupProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      const items = Array.from(
        ref.current.querySelectorAll<HTMLElement>(selector)
      );

      if (!items.length) return;

      const prefersReduced = prefersReducedMotion();

      if (prefersReduced) {
        gsap.set(items, { autoAlpha: 1, y: 0 });
        return;
      }

      ScrollTrigger.batch(items, {
        start: "top 85%",
        onEnter: (batch) =>
          gsap.fromTo(
            batch,
            { y: motionDefaults.distance, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: motionDefaults.duration,
              ease: motionDefaults.ease,
              stagger: motionDefaults.stagger,
              overwrite: true,
              onStart: () => {
                (batch as HTMLElement[]).forEach((el) => {
                  el.style.willChange = "transform, opacity";
                });
              },
              onComplete: () => {
                (batch as HTMLElement[]).forEach((el) => {
                  el.style.willChange = "auto";
                });
              },
            }
          ),
        onLeaveBack: (batch) =>
          gsap.set(batch, { autoAlpha: 0, y: 26, overwrite: true }),
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
