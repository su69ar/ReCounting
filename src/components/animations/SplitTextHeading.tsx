"use client";

import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger, SplitText } from "@/lib/gsap";
import { motionTokens, prefersReducedMotion } from "@/lib/motion";

type SplitType = "chars" | "words" | "lines" | "chars,words" | "words,lines" | "chars,words,lines";
type AnimationType = "stagger" | "wave" | "cascade" | "random";

type SplitTextHeadingProps = {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "span" | "p";
  className?: string;
  splitType?: SplitType;
  animationType?: AnimationType;
  animateOnScroll?: boolean;
  delay?: number;
  duration?: number;
  stagger?: number;
};

export function SplitTextHeading({
  text,
  as = "h2",
  className,
  splitType = "words",
  animationType = "stagger",
  animateOnScroll = true,
  delay = 0,
  duration = motionTokens.duration.slow,
  stagger = motionTokens.stagger.tight,
}: SplitTextHeadingProps) {
  const ref = useRef<HTMLElement | null>(null);
  const Tag = as;

  useGSAP(
    () => {
      if (!ref.current) return;
      const prefersReduced = prefersReducedMotion();

      // Always ensure visibility first
      gsap.set(ref.current, { opacity: 1, visibility: "visible" });

      if (prefersReduced) return;

      let split: SplitText | null = null;
      try {
        split = new SplitText(ref.current, { type: splitType });
      } catch (e) {
        console.warn("SplitText plugin not available", e);
        gsap.to(ref.current, { opacity: 1, duration: 0.5 });
        return;
      }
      
      const targets = splitType.includes("chars") ? split.chars : 
                      splitType.includes("words") ? split.words : 
                      split.lines;

      // Ensure targets are visible before animating
      gsap.set(targets, { opacity: 1 });

      let staggerConfig: gsap.NumberValue | gsap.StaggerVars = stagger;
      
      switch (animationType) {
        case "wave":
          staggerConfig = {
            each: stagger,
            from: "center",
            grid: "auto",
          };
          break;
        case "cascade":
          staggerConfig = {
            each: stagger * 0.5,
            from: "start",
          };
          break;
        case "random":
          staggerConfig = {
            each: stagger,
            from: "random",
          };
          break;
      }

      const animation = gsap.fromTo(
        targets,
        { y: motionTokens.distance.sm, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration,
          ease: motionTokens.ease.enter,
          stagger: staggerConfig,
          delay,
          overwrite: "auto",
          onStart: () => {
            targets.forEach((el: Element) => {
              (el as HTMLElement).style.willChange = "transform, opacity";
            });
          },
          onComplete: () => {
            targets.forEach((el: Element) => {
              (el as HTMLElement).style.willChange = "auto";
            });
          },
        }
      );

      if (animateOnScroll) {
        ScrollTrigger.create({
          trigger: ref.current,
          start: motionTokens.scrollTrigger.start,
          animation,
          toggleActions: "play none none reverse",
        });
      }

      return () => {
        split?.revert();
      };
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref} className={className}>
      {text}
    </Tag>
  );
}
