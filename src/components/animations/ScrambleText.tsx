"use client";

import { useRef, useEffect, useCallback } from "react";
import { prefersReducedMotion } from "@/lib/motion";

type ScrambleTextProps = {
  text: string;
  className?: string;
  duration?: number;
  scrambleChars?: string;
  trigger?: "load" | "hover" | "scroll";
};

export function ScrambleText({
  text,
  className,
  duration = 1000,
  scrambleChars = "!<>-_\\/[]{}—=+*^?#________",
  trigger = "load",
}: ScrambleTextProps) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const isAnimatingRef = useRef(false);
  const frameRef = useRef<number>(0);

  const scramble = useCallback(() => {
    if (isAnimatingRef.current || prefersReducedMotion() || !elementRef.current) return;

    isAnimatingRef.current = true;
    const length = text.length;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      if (!elementRef.current) return;

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Calculate how many characters should be revealed based on progress
      const revealedCount = Math.floor(progress * length);

      const scrambledText = text
        .split("")
        .map((char, index) => {
          if (index < revealedCount) {
            return char;
          }
          // Random character for unrevealed positions
          return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
        })
        .join("");

      elementRef.current.textContent = scrambledText;

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        isAnimatingRef.current = false;
        elementRef.current.textContent = text;
      }
    };

    frameRef.current = requestAnimationFrame(animate);
  }, [text, duration, scrambleChars]);

  useEffect(() => {
    if (prefersReducedMotion()) {
      if (elementRef.current) elementRef.current.textContent = text;
      return;
    }

    if (trigger === "load") {
      scramble();
    } else if (trigger === "scroll") {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            scramble();
            observer.disconnect();
          }
        },
        { threshold: 0.5 }
      );

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }

      return () => observer.disconnect();
    }
  }, [trigger, text, scramble]);

  // Clean up animation frame on unmount
  useEffect(() => {
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <span
      ref={elementRef}
      className={className}
      onMouseEnter={trigger === "hover" ? scramble : undefined}
    >
      {text}
    </span>
  );
}
