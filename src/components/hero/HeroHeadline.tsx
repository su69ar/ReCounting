"use client";

import { useRef } from "react";
import { gsap, useGSAP, SplitText } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";

type HeroHeadlineProps = {
  text: string;
  subtitle?: string;
};

export function HeroHeadline({ text, subtitle }: HeroHeadlineProps) {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    if (prefersReducedMotion()) {
      gsap.set([headlineRef.current, subtitleRef.current], { autoAlpha: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      let headlineSplit: SplitText | null = null;

      try {
        headlineSplit = new SplitText(headlineRef.current, {
          type: "chars,words",
          charsClass: "hero-char",
          wordsClass: "hero-word",
        });
      } catch (e) {
        console.warn("SplitText not available", e);
        gsap.to(headlineRef.current, { autoAlpha: 1, duration: 0.8 });
        if (subtitleRef.current) {
          gsap.to(subtitleRef.current, { autoAlpha: 1, duration: 0.8, delay: 0.2 });
        }
        return;
      }

      const tl = gsap.timeline({
        defaults: { ease: "recounting-enter" },
      });

      tl.from(headlineSplit.chars, {
        y: 80,
        rotationX: -90,
        autoAlpha: 0,
        duration: 0.8,
        stagger: {
          amount: 0.6,
          from: "start",
        },
        transformOrigin: "top center",
        onStart: () => {
          headlineSplit?.chars.forEach((char) => {
            (char as HTMLElement).style.willChange = "transform, opacity";
          });
        },
        onComplete: () => {
          headlineSplit?.chars.forEach((char) => {
            (char as HTMLElement).style.willChange = "auto";
          });
        },
      });

      if (subtitleRef.current) {
        let subtitleSplit: SplitText | null = null;
        try {
          subtitleSplit = new SplitText(subtitleRef.current, { type: "words" });

          tl.from(subtitleSplit.words, {
            y: 30,
            autoAlpha: 0,
            duration: 0.6,
            stagger: 0.03,
          }, "-=0.4");
        } catch (e) {
          console.warn("SplitText not available for subtitle", e);
          tl.from(subtitleRef.current, {
            y: 30,
            autoAlpha: 0,
            duration: 0.6,
          }, "-=0.4");
        }
      }

      return () => {
        headlineSplit?.revert();
      };
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="space-y-6">
      <h1
        ref={headlineRef}
        className="heading-hero text-neutral-900"
        style={{ perspective: "1000px" }}
      >
        {text}
      </h1>
      {subtitle && (
        <p
          ref={subtitleRef}
          className="text-lg sm:text-xl text-neutral-600 max-w-2xl"
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
