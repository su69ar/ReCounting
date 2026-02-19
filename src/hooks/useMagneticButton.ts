"use client";

import { useRef, useCallback, useEffect } from "react";
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
  const xTo = useRef<gsap.QuickToFunc | null>(null);
  const yTo = useRef<gsap.QuickToFunc | null>(null);

  // Initialize quickTo instance
  useEffect(() => {
    if (!ref.current || prefersReducedMotion()) return;

    xTo.current = gsap.quickTo(ref.current, "x", { duration: duration, ease: "power3" });
    yTo.current = gsap.quickTo(ref.current, "y", { duration: duration, ease: "power3" });

    return () => {
      // clean up if needed
    };
  }, [duration]);

  const handleMouseMove = useCallback((e: React.MouseEvent | MouseEvent) => {
    if (!ref.current || !rectRef.current || prefersReducedMotion()) return;

    const rect = rectRef.current;
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    xTo.current?.(x * strength);
    yTo.current?.(y * strength);
  }, [strength]);

  const handleMouseEnter = useCallback(() => {
    if (!ref.current) return;
    rectRef.current = ref.current.getBoundingClientRect();
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!ref.current || prefersReducedMotion()) return;

    xTo.current?.(0);
    yTo.current?.(0);
  }, []);

  return {
    ref,
    onMouseMove: handleMouseMove,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };
}
