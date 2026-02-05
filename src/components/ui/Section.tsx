"use client";

import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import { motionTokens, prefersReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "default" | "white" | "cream" | "gradient";
  container?: boolean;
  animate?: boolean;
};

export function Section({
  children,
  className,
  id,
  background = "default",
  container = true,
  animate = true,
}: SectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current || !animate || prefersReducedMotion()) return;

    const children = sectionRef.current.querySelectorAll(".section-animate");
    
    if (children.length === 0) return;

    gsap.from(children, {
      y: motionTokens.distance.md,
      autoAlpha: 0,
      duration: motionTokens.duration.slow,
      stagger: motionTokens.stagger.relaxed,
      ease: motionTokens.ease.enter,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, { scope: sectionRef });

  const bgClasses = {
    default: "",
    white: "bg-white",
    cream: "bg-bg-cream",
    gradient: "bg-mesh",
  };

  return (
    <section
      ref={sectionRef}
      id={id}
      className={cn("section-space", bgClasses[background], className)}
    >
      {container ? (
        <div className="container-grid">{children}</div>
      ) : (
        children
      )}
    </section>
  );
}
