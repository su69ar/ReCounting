"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { prefersReducedMotion } from "@/lib/motion";

export function HoverInteractions() {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const handleEnter = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(".card-hover, .btn-primary, .btn-secondary");
      if (!target) return;

      gsap.to(target, {
        y: -4,
        scale: 1.01,
        duration: 0.25,
        ease: "back.out(1.4)", // Bouncy enter
        overwrite: "auto",
      });
    };

    const handleLeave = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(".card-hover, .btn-primary, .btn-secondary");
      if (!target) return;

      gsap.to(target, {
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: "power2.out", // Smooth exit
        overwrite: "auto",
      });
    };

    // Use event delegation on document body
    document.body.addEventListener("mouseover", handleEnter); // mouseover bubbles
    document.body.addEventListener("mouseout", handleLeave);  // mouseout bubbles

    return () => {
      document.body.removeEventListener("mouseover", handleEnter);
      document.body.removeEventListener("mouseout", handleLeave);
    };
  }, []);

  return null;
}
