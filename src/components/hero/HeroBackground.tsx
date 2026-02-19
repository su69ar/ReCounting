"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";

export function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || prefersReducedMotion()) return;

    gsap.to(".hero-orb", {
      y: "random(-20, 20)",
      x: "random(-15, 15)",
      duration: "random(4, 8)",
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      stagger: {
        each: 0.5,
        from: "random",
      },
    });

    gsap.to(".hero-orb", {
      rotation: "random(-5, 5)",
      duration: "random(6, 10)",
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Warm mesh gradient - Bali-inspired */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background: `
            radial-gradient(at 40% 20%, rgba(198, 123, 92, 0.1) 0px, transparent 50%),
            radial-gradient(at 80% 0%, rgba(90, 138, 110, 0.08) 0px, transparent 50%),
            radial-gradient(at 0% 50%, rgba(30, 77, 107, 0.06) 0px, transparent 50%),
            radial-gradient(at 80% 50%, rgba(198, 123, 92, 0.06) 0px, transparent 50%)
          `,
        }}
      />

      {/* Subtle ikat-inspired pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30h60M30 0v60' stroke='%23c67b5c' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Warm navy orb - deep ocean */}
      <div
        className="hero-orb hero-parallax absolute w-[500px] h-[500px] -top-32 -right-48 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(30, 77, 107, 0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        data-speed="0.5"
      />

      {/* Terracotta orb - Balinese architecture */}
      <div
        className="hero-orb hero-parallax absolute w-[400px] h-[400px] -bottom-32 -left-32 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(198, 123, 92, 0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        data-speed="0.3"
      />

      {/* Sage orb - tropical foliage */}
      <div
        className="hero-orb absolute w-[200px] h-[200px] top-1/3 right-1/4 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(90, 138, 110, 0.10) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        data-speed="0.8"
      />

      {/* Subtle grain texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
