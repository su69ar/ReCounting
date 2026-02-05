"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";

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

  useGSAP(() => {
    if (!containerRef.current || prefersReducedMotion()) {
      return;
    }

    // Simple fade in for the list
    gsap.from(containerRef.current.children, {
      y: 10,
      opacity: 0,
      duration: 0.5,
      stagger: 0.05,
      delay: 0.2,
      ease: "power2.out",
    });
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-2 lg:flex lg:flex-wrap gap-x-8 gap-y-3 pt-4"
    >
      {stats.map((stat) => (
        <div
          key={stat.value}
          className="flex items-center gap-2.5 text-sm md:text-base group cursor-default"
        >
          {/* Accent Dot */}
          <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] shrink-0 group-hover:scale-125 transition-transform duration-300" />

          <div className="flex flex-wrap items-baseline gap-1.5">
            <span className="font-bold text-slate-800 tracking-tight leading-none group-hover:text-primary-700 transition-colors">
              {stat.value}
            </span>
            <span className="text-primary-300 font-bold">·</span>
            <span className="text-slate-500 text-sm font-medium leading-none">
              {stat.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
