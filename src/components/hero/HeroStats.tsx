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
      gsap.set(containerRef.current, { autoAlpha: 1 });
      return;
    }

    const tl = gsap.timeline({ delay: 0.2 });

    // Floating entrance
    tl.from(containerRef.current, {
      y: 40,
      autoAlpha: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Stagger items inside
    tl.from(".stat-pill", {
      scale: 0.8,
      autoAlpha: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "back.out(1.5)",
    }, "<0.2");

    // Continuous floating animation
    gsap.to(containerRef.current, {
      y: 10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="inline-flex md:mx-auto max-w-[90vw] overflow-x-auto no-scrollbar
                 items-center gap-3 p-3 rounded-[2rem]
                 bg-white/40 backdrop-blur-2xl border border-white/60
                 shadow-[0_20px_40px_rgba(0,0,0,0.05),inset_0_0_0_1px_rgba(255,255,255,0.5)]"
    >
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="stat-pill shrink-0 group flex items-center gap-3 px-5 py-3 
                     bg-white/60 rounded-[1.5rem] border border-white/40
                     shadow-sm hover:shadow-md hover:scale-105 hover:bg-white/80
                     transition-all duration-300 cursor-default"
        >
          <div className="flex flex-col text-left">
            <span className="text-lg font-bold text-neutral-800 leading-tight group-hover:text-primary-600 transition-colors">
              {stat.value}
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500 leading-none mt-1">
              {stat.label}
            </span>
          </div>

          {/* Decorative dot */}
          {index < stats.length - 1 && (
            <div className="h-1.5 w-1.5 rounded-full bg-primary-400/40 group-hover:bg-primary-500 transition-colors" />
          )}
        </div>
      ))}
    </div>
  );
}
