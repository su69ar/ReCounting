"use client";

import { useRef, useCallback } from "react";
import { gsap } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";

type MagneticConfig = {
  strength?: number;
  duration?: number;
};

export function useMagneticButton<T extends HTMLElement>({
  strength = 0.3,
  duration = 0.4,
}: MagneticConfig = {}) {
  const ref = useRef<T | null>(null);
  const rectRef = useRef<DOMRect | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent | MouseEvent) => {
    if (!ref.current || !rectRef.current || prefersReducedMotion()) return;

    const rect = rectRef.current;
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(ref.current, {
      x: x * strength,
      y: y * strength,
      duration: duration * 0.5,
      ease: "power2.out",
    });
  }, [strength, duration]);

  const handleMouseEnter = useCallback(() => {
    if (!ref.current) return;
    rectRef.current = ref.current.getBoundingClientRect();
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!ref.current || prefersReducedMotion()) return;

    gsap.to(ref.current, {
      x: 0,
      y: 0,
      duration,
      ease: "elastic.out(1, 0.3)",
    });
  }, [duration]);

  return {
    ref,
    onMouseMove: handleMouseMove,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };
}
