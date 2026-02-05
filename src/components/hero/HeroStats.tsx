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

    // Faster entrance - reduced delay from 1.2 to 0.4
    const tl = gsap.timeline({
      delay: 0.4,
    });

    tl.from(containerRef.current, {
      y: 20,
      autoAlpha: 0,
      duration: 0.5,
      ease: "power3.out",
    });

    statRefs.current.forEach((statEl, index) => {
      if (!statEl) return;

      const valueEl = statEl.querySelector(".stat-value");
      const labelEl = statEl.querySelector(".stat-label");
      const stat = stats[index];

      // Counter animation - faster
      if (stat.numericValue !== undefined && valueEl) {
        const counter = { value: 0 };

        tl.to(counter, {
          value: stat.numericValue,
          duration: 0.8,
          ease: "power2.out",
          onUpdate: () => {
            valueEl.textContent = Math.round(counter.value) + (stat.suffix || "");
          },
        }, `-=${index === 0 ? 0 : 0.6}`);
      }

      tl.from(labelEl, {
        autoAlpha: 0,
        y: 5,
        duration: 0.3,
      }, "<0.1");
    });
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0
                 px-6 py-5 lg:px-8 rounded-2xl lg:rounded-full
                 border border-neutral-200/60 bg-white/80 backdrop-blur-xl 
                 shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
    >
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          ref={(el) => { statRefs.current[index] = el; }}
          className={`flex flex-col lg:flex-row items-center lg:items-center gap-1 lg:gap-3 
                      text-center lg:text-left px-2 lg:px-6
                      ${index !== stats.length - 1 ? 'lg:border-r lg:border-neutral-200/60' : ''}`}
        >
          <p className="stat-value text-2xl lg:text-3xl font-bold text-[color:var(--color-slate-dark)]">
            {stat.value}
          </p>
          <p className="stat-label text-[10px] lg:text-xs font-semibold uppercase tracking-wider text-neutral-400 lg:max-w-[80px] leading-tight">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}

