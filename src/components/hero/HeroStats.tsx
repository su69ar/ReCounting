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

    const tl = gsap.timeline({ delay: 0.2 });

    // Floating entrance
    tl.from(containerRef.current, {
      y: 30,
      duration: 0.8,
      ease: "power3.out",
    });

    // Stagger items inside
    tl.from(".stat-pill", {
      scale: 0.9,
      duration: 0.5,
      stagger: 0.1,
      ease: "back.out(1.5)",
    }, "<0.3");

    // Continuous floating animation
    gsap.to(containerRef.current, {
      y: 5,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="inline-flex md:mx-auto max-w-[95vw] overflow-x-auto no-scrollbar
                 items-center gap-4 p-4 rounded-[2.5rem]
                 bg-slate-50/90 backdrop-blur-xl border border-slate-200/60
                 shadow-[0_20px_40px_rgba(0,0,0,0.06),inset_0_0_0_1px_rgba(255,255,255,0.8)]"
    >
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="stat-pill shrink-0 group flex items-center gap-4 px-6 py-4 
                     bg-white rounded-[1.8rem] border border-slate-100
                     shadow-[0_2px_8px_rgba(0,0,0,0.04)] 
                     hover:shadow-[0_8px_24px_rgba(0,102,204,0.12)] 
                     hover:scale-105 hover:-translate-y-0.5
                     transition-all duration-300 cursor-default"
        >
          <div className="flex flex-col text-left">
            <span className="text-xl font-extrabold text-slate-800 leading-none tracking-tight group-hover:text-primary-600 transition-colors">
              {stat.value}
            </span>
            <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 leading-none mt-1.5">
              {stat.label}
            </span>
          </div>

          {/* Decorative dot */}
          <div className="h-2 w-2 rounded-full bg-slate-200 group-hover:bg-primary-500 transition-colors duration-300" />
        </div>
      ))}
    </div>
  );
}
