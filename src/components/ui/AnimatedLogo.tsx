"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";

type AnimatedLogoProps = {
  className?: string;
  animate?: boolean;
};

export function AnimatedLogo({ className, animate = true }: AnimatedLogoProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useGSAP(() => {
    if (!svgRef.current || !animate || prefersReducedMotion()) return;

    const paths = svgRef.current.querySelectorAll("path");
    
    try {
      gsap.set(paths, { drawSVG: "0%" });
    } catch (e) {
      gsap.set(paths, { opacity: 0 });
    }

    const tl = gsap.timeline({ delay: 0.3 });
    
    const drawVars: gsap.TweenVars = {
      duration: 1,
      stagger: 0.15,
      ease: "power2.inOut",
    };

    const fillVars: gsap.TweenVars = {
      fill: "currentColor",
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
    };

    try {
      drawVars.drawSVG = "100%";
    } catch (e) {
      drawVars.opacity = 1;
    }

    tl.to(paths, drawVars);
    tl.to(paths, fillVars, "-=0.3");
  }, { scope: svgRef });

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    >
      <path d="M6 4.5h9.5a2 2 0 0 1 2 2V8" />
      <path d="M6 4.5h8.5a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2z" />
      <path d="M7.5 9.2h6.5M7.5 12.2h4.2" />
      <path d="m17 13.8 1.6 1.6 3.1-3.4" strokeLinejoin="round" />
    </svg>
  );
}
