"use client";

import { useRef, useEffect, useState } from "react";
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
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);

  const scramble = () => {
    if (isAnimating || prefersReducedMotion()) return;

    setIsAnimating(true);
    const originalText = text;
    const length = originalText.length;
    const intervalTime = duration / (length * 3);
    let iteration = 0;

    const interval = setInterval(() => {
      setDisplayText(
        originalText
          .split("")
          .map((char, index) => {
            if (index < iteration / 3) {
              return originalText[index];
            }
            return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
          })
          .join("")
      );

      if (iteration >= length * 3) {
        clearInterval(interval);
        setDisplayText(originalText);
        setIsAnimating(false);
      }

      iteration++;
    }, intervalTime);
  };

  useEffect(() => {
    if (trigger === "load" && !prefersReducedMotion()) {
      scramble();
    }
  }, []);

  useEffect(() => {
    if (trigger !== "scroll" || prefersReducedMotion()) return;

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
  }, [trigger]);

  return (
    <span
      ref={elementRef}
      className={className}
      onMouseEnter={trigger === "hover" ? scramble : undefined}
    >
      {displayText}
    </span>
  );
}
