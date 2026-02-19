"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { motionDefaults, prefersReducedMotion } from "@/lib/motion";

// Icon components for each step
const StepIcons = {
  search: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  ),
  build: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  trending: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  ),
};

// Illustration components for each step
const StepIllustrations = {
  assess: (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Document stack */}
      <rect x="40" y="60" width="80" height="100" rx="4" fill="#f8f5f2" stroke="#1e4d6b" strokeWidth="1.5" />
      <rect x="50" y="50" width="80" height="100" rx="4" fill="#fff" stroke="#1e4d6b" strokeWidth="1.5" />
      <rect x="60" y="40" width="80" height="100" rx="4" fill="#fff" stroke="#1e4d6b" strokeWidth="1.5" />
      {/* Lines on document */}
      <line x1="75" y1="65" x2="125" y2="65" stroke="#c67b5c" strokeWidth="2" strokeLinecap="round" />
      <line x1="75" y1="80" x2="115" y2="80" stroke="#d9cfc4" strokeWidth="2" strokeLinecap="round" />
      <line x1="75" y1="95" x2="120" y2="95" stroke="#d9cfc4" strokeWidth="2" strokeLinecap="round" />
      <line x1="75" y1="110" x2="110" y2="110" stroke="#d9cfc4" strokeWidth="2" strokeLinecap="round" />
      {/* Magnifying glass */}
      <circle cx="145" cy="115" r="25" stroke="#1e4d6b" strokeWidth="3" fill="none" />
      <line x1="163" y1="133" x2="180" y2="150" stroke="#1e4d6b" strokeWidth="4" strokeLinecap="round" />
      {/* Checkmark */}
      <circle cx="145" cy="115" r="12" fill="#5a8a6e" fillOpacity="0.2" />
      <path d="M138 115l5 5 10-10" stroke="#5a8a6e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  implement: (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Gear/cog */}
      <circle cx="100" cy="80" r="45" fill="#f0e8e0" stroke="#c67b5c" strokeWidth="2" />
      <circle cx="100" cy="80" r="25" fill="#fff" stroke="#c67b5c" strokeWidth="2" />
      {/* Gear teeth */}
      <rect x="95" y="20" width="10" height="15" rx="2" fill="#c67b5c" />
      <rect x="95" y="125" width="10" height="15" rx="2" fill="#c67b5c" />
      <rect x="140" y="75" width="15" height="10" rx="2" fill="#c67b5c" />
      <rect x="45" y="75" width="15" height="10" rx="2" fill="#c67b5c" />
      {/* Checklist items */}
      <rect x="130" y="45" width="50" height="8" rx="2" fill="#e3ebe6" />
      <circle cx="140" cy="49" r="3" fill="#5a8a6e" />
      <rect x="130" y="65" width="40" height="8" rx="2" fill="#e3ebe6" />
      <circle cx="140" cy="69" r="3" fill="#5a8a6e" />
      <rect x="130" y="85" width="55" height="8" rx="2" fill="#e3ebe6" />
      <circle cx="140" cy="89" r="3" fill="#5a8a6e" />
    </svg>
  ),
  monitor: (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Shield */}
      <path d="M100 20L150 40v50c0 35-50 50-50 50s-50-15-50-50V40l50-20z" fill="#f4f8f6" stroke="#5a8a6e" strokeWidth="2" />
      {/* Checkmark in shield */}
      <path d="M80 75l15 15 30-30" stroke="#5a8a6e" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Chart bars */}
      <rect x="155" y="70" width="15" height="60" rx="2" fill="#e3ebe6" />
      <rect x="155" y="90" width="15" height="40" rx="2" fill="#5a8a6e" fillOpacity="0.3" />
      <rect x="175" y="50" width="15" height="80" rx="2" fill="#e3ebe6" />
      <rect x="175" y="70" width="15" height="60" rx="2" fill="#1e4d6b" fillOpacity="0.3" />
      {/* Alert dots */}
      <circle cx="30" cy="50" r="4" fill="#c67b5c" fillOpacity="0.4" />
      <circle cx="40" cy="65" r="4" fill="#c67b5c" fillOpacity="0.4" />
      <circle cx="25" cy="80" r="4" fill="#c67b5c" fillOpacity="0.4" />
    </svg>
  ),
  scale: (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Growing bar chart */}
      <rect x="30" y="120" width="25" height="30" rx="2" fill="#d9e6f0" />
      <rect x="65" y="100" width="25" height="50" rx="2" fill="#b3d0e1" />
      <rect x="100" y="70" width="25" height="80" rx="2" fill="#5a9ab8" />
      <rect x="135" y="40" width="25" height="110" rx="2" fill="#1e4d6b" />
      {/* Trend line */}
      <path d="M42 105l33-20 35-10 35-20" stroke="#c67b5c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Arrow head */}
      <path d="M170 55l5-5v10l-5-5z" fill="#c67b5c" />
      {/* Stars/sparkles */}
      <circle cx="170" cy="30" r="4" fill="#c67b5c" fillOpacity="0.3" />
      <circle cx="185" cy="45" r="3" fill="#c67b5c" fillOpacity="0.2" />
      <circle cx="160" cy="35" r="2" fill="#c67b5c" fillOpacity="0.2" />
    </svg>
  ),
};

type StoryStep = {
  step: string;
  label: string;
  title: string;
  description: string;
  icon: "search" | "build" | "shield" | "trending";
  color: "primary" | "accent" | "secondary";
  illustration: "assess" | "implement" | "monitor" | "scale";
};

type StoryScrollProps = {
  steps: StoryStep[];
};

const colorClasses = {
  primary: {
    iconBg: "bg-[color:var(--color-primary-500)]/10",
    iconColor: "text-[color:var(--color-primary-500)]",
    stepNumber: "text-[color:var(--color-primary-500)]",
    glow: "from-[color:var(--color-primary-500)]/60 to-[color:var(--color-primary-600)]/40",
  },
  accent: {
    iconBg: "bg-[color:var(--color-accent-500)]/10",
    iconColor: "text-[color:var(--color-accent-500)]",
    stepNumber: "text-[color:var(--color-accent-500)]",
    glow: "from-[color:var(--color-accent-500)]/60 to-[color:var(--color-accent-600)]/40",
  },
  secondary: {
    iconBg: "bg-[color:var(--color-secondary-500)]/10",
    iconColor: "text-[color:var(--color-secondary-500)]",
    stepNumber: "text-[color:var(--color-secondary-500)]",
    glow: "from-[color:var(--color-secondary-500)]/60 to-[color:var(--color-secondary-600)]/40",
  },
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
      const totalScroll = panels.length * 480;

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
        {/* Enhanced progress rail with step indicators */}
        <div className="story-rail">
          <div className="story-rail-track" />
          <div ref={progressRef} className="story-rail-progress" />
          {/* Step markers on rail */}
          <div className="story-rail-markers">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className="story-rail-marker"
                style={{ top: `${(index / (steps.length - 1)) * 100}%` }}
              >
                <span className="story-rail-marker-dot" data-color={step.color} />
              </div>
            ))}
          </div>
        </div>

        <div className="story-pin">
          {steps.map((step, index) => {
            const colors = colorClasses[step.color];
            const Icon = StepIcons[step.icon];
            const Illustration = StepIllustrations[step.illustration];

            return (
              <div key={step.title} className="story-panel">
                {/* Decorative background blob */}
                <div
                  className="story-panel-blob"
                  style={{
                    background: `radial-gradient(circle at 100% 0%, ${step.color === 'primary' ? 'rgba(30, 77, 107, 0.06)' :
                      step.color === 'accent' ? 'rgba(198, 123, 92, 0.06)' :
                        'rgba(90, 138, 110, 0.06)'
                      } 0%, transparent 60%)`,
                  }}
                />

                <div className="story-panel-content">
                  {/* Left: Text content */}
                  <div className="story-panel-text">
                    {/* Enhanced header with icon and step number */}
                    <div className="story-panel-header">
                      <div className={`story-icon-wrapper ${colors.iconBg} ${colors.iconColor}`}>
                        {Icon}
                      </div>
                      <div className="story-step-info">
                        <span className={`story-step-number ${colors.stepNumber}`}>
                          {step.step}
                        </span>
                        <span className="story-label">{step.label}</span>
                      </div>
                    </div>

                    <h3 className="story-title">{step.title}</h3>
                    <p className="story-description">{step.description}</p>

                    {/* Step indicator dots */}
                    <div className="story-step-dots">
                      {steps.map((_, dotIndex) => (
                        <span
                          key={dotIndex}
                          className={`story-step-dot ${dotIndex === index ? 'active' : ''}`}
                        />
                      ))}
                    </div>

                    {/* Enhanced glow with color */}
                    {!reduced && (
                      <div
                        className="story-glow"
                        style={{
                          background: `linear-gradient(90deg, ${step.color === 'primary' ? 'rgba(30, 77, 107, 0.6)' :
                            step.color === 'accent' ? 'rgba(198, 123, 92, 0.6)' :
                              'rgba(90, 138, 110, 0.6)'
                            }, transparent)`,
                        }}
                      />
                    )}
                  </div>

                  {/* Right: Illustration */}
                  <div className="story-panel-illustration">
                    {Illustration}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
