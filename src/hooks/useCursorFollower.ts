"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";

type CursorConfig = {
  size?: number;
  duration?: number;
};

export function useCursorFollower({
  size = 24,
  duration = 0.2,
}: CursorConfig = {}) {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const xTo = useRef<gsap.QuickToFunc | null>(null);
  const yTo = useRef<gsap.QuickToFunc | null>(null);

  useEffect(() => {
    if (!cursorRef.current || prefersReducedMotion()) return;

    xTo.current = gsap.quickTo(cursorRef.current, "x", {
      duration,
      ease: "power3",
    });
    yTo.current = gsap.quickTo(cursorRef.current, "y", {
      duration,
      ease: "power3",
    });

    const handleMouseMove = (e: MouseEvent) => {
      xTo.current?.(e.clientX - size / 2);
      yTo.current?.(e.clientY - size / 2);
    };

    window.addEventListener("pointermove", handleMouseMove);

    return () => {
      window.removeEventListener("pointermove", handleMouseMove);
    };
  }, [size, duration]);

  return cursorRef;
}
