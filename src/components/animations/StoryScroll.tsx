"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motionDefaults, prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

type StoryStep = {
  label: string;
  title: string;
  description: string;
};

type StoryScrollProps = {
  steps: StoryStep[];
};

export function StoryScroll({ steps }: StoryScrollProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!rootRef.current) return;
      const panels = Array.from(
        rootRef.current.querySelectorAll<HTMLElement>(".story-panel")
      );
      const pin = rootRef.current.querySelector<HTMLElement>(".story-pin");
      const progress = progressRef.current;

      if (!panels.length || !pin) return;

      const mm = gsap.matchMedia();
      const totalScroll = panels.length * 420;

      mm.add(
        "(min-width: 900px) and (prefers-reduced-motion: no-preference)",
        () => {
          rootRef.current?.classList.remove("story-static");

          gsap.set(panels, { autoAlpha: 0, y: motionDefaults.distance });
          gsap.set(panels[0], { autoAlpha: 1, y: 0 });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: rootRef.current,
              start: "top top",
              end: `+=${totalScroll}`,
              scrub: 1,
              pin,
              anticipatePin: 1,
            },
          });

          panels.forEach((panel, index) => {
            const start = index * 1;
            tl.to(
              panel,
              {
                autoAlpha: 1,
                y: 0,
                duration: motionDefaults.duration,
              },
              start
            ).to(
              panel,
              {
                autoAlpha: 0,
                y: -motionDefaults.distance,
                duration: motionDefaults.duration * 0.9,
              },
              start + 0.8
            );
          });

          tl.to(
            panels[panels.length - 1],
            { autoAlpha: 1, y: 0, duration: 0.4 },
            (panels.length - 1) * 1
          );

          if (progress) {
            gsap.fromTo(
              progress,
              { scaleY: 0 },
              {
                scaleY: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: rootRef.current,
                  start: "top top",
                  end: `+=${totalScroll}`,
                  scrub: true,
                },
              }
            );
          }
        }
      );

      mm.add("(max-width: 899px), (prefers-reduced-motion: reduce)", () => {
        rootRef.current?.classList.add("story-static");
        gsap.set(panels, { autoAlpha: 1, y: 0, clearProps: "all" });
        if (progress) {
          gsap.set(progress, { scaleY: 1 });
        }
      });

      return () => mm.revert();
    },
    { scope: rootRef }
  );

  const reduced = prefersReducedMotion();

  return (
    <div ref={rootRef} className="story-root">
      <div className="story-frame">
        <div className="story-rail">
          <div className="story-rail-track" />
          <div ref={progressRef} className="story-rail-progress" />
        </div>
        <div className="story-pin">
          {steps.map((step) => (
            <div key={step.title} className="story-panel">
              <p className="story-label">{step.label}</p>
              <h3 className="story-title">{step.title}</h3>
              <p className="story-description">{step.description}</p>
              {!reduced && <div className="story-glow" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
