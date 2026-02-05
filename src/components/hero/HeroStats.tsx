"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { motionTokens, prefersReducedMotion } from "@/lib/motion";

type Stat = {
  value: string;
  label: string;
  numericValue?: number;
  suffix?: string;
};

type HeroStatsProps = {
  stats: Stat[];
};

export function HeroStats({ stats }: HeroStatsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const statRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    if (!containerRef.current || prefersReducedMotion()) {
      gsap.set(containerRef.current, { autoAlpha: 1 });
      return;
    }

    const tl = gsap.timeline({
      delay: 1.2,
    });

    tl.from(containerRef.current, {
      y: 30,
      autoAlpha: 0,
      duration: 0.6,
      ease: motionTokens.ease.enter,
    });

    statRefs.current.forEach((statEl, index) => {
      if (!statEl) return;

      const valueEl = statEl.querySelector(".stat-value");
      const labelEl = statEl.querySelector(".stat-label");
      const stat = stats[index];

      if (stat.numericValue !== undefined && valueEl) {
        const counter = { value: 0 };
        
        tl.to(counter, {
          value: stat.numericValue,
          duration: 1.5,
          ease: "power2.out",
          onUpdate: () => {
            valueEl.textContent = Math.round(counter.value) + (stat.suffix || "");
          },
        }, `-=${index === 0 ? 0 : 0.3}`);
      } else if (valueEl) {
        tl.from(valueEl, {
          textContent: 0,
          duration: 0.5,
        }, `-=${index === 0 ? 0 : 0.3}`);
      }

      tl.from(labelEl, {
        autoAlpha: 0,
        y: 10,
        duration: 0.4,
      }, "<0.2");
    });
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl 
                 border border-neutral-200/50 bg-white/60 backdrop-blur-lg 
                 shadow-lg"
    >
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          ref={(el) => { statRefs.current[index] = el; }}
          className="space-y-1"
        >
          <p className="stat-value text-2xl font-bold text-primary-500">
            {stat.value}
          </p>
          <p className="stat-label text-xs font-semibold uppercase tracking-wide text-neutral-500">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
