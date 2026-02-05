"use client";

import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";

type DrawSVGIconProps = {
  children: React.ReactNode; 
  className?: string;
  duration?: number;
  delay?: number;
  triggerOnScroll?: boolean;
  stagger?: number;
};

export function DrawSVGIcon({
  children,
  className,
  duration = 1.5,
  delay = 0,
  triggerOnScroll = true,
  stagger = 0.1,
}: DrawSVGIconProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || prefersReducedMotion()) return;

    const paths = containerRef.current.querySelectorAll("path, line, polyline, polygon, rect, circle, ellipse");
    
    if (paths.length === 0) return;

    try {
      gsap.set(paths, { drawSVG: "0%" });
    } catch (e) {
      gsap.set(paths, { opacity: 0 });
    }

    const vars: gsap.TweenVars = {
      duration,
      delay,
      stagger,
      ease: "power2.inOut",
    };

    try {
      vars.drawSVG = "100%";
    } catch (e) {
      vars.opacity = 1;
    }

    const animation = gsap.to(paths, vars);

    if (triggerOnScroll) {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 80%",
        animation,
        toggleActions: "play none none reverse",
      });
    }
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
