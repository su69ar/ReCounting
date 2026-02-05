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
      <div className="absolute inset-0 bg-mesh opacity-80" />
      
      <div className="absolute inset-0 bg-dots opacity-30" />
      
      <div 
        className="hero-orb hero-parallax absolute w-[500px] h-[500px] -top-32 -right-48 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(10, 124, 255, 0.25) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        data-speed="0.5"
      />
      
      <div 
        className="hero-orb hero-parallax absolute w-[400px] h-[400px] -bottom-32 -left-32 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(20, 184, 166, 0.25) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        data-speed="0.3"
      />
      
      <div 
        className="hero-orb absolute w-[200px] h-[200px] top-1/3 right-1/4 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(10, 124, 255, 0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        data-speed="0.8"
      />
      
      <div className="absolute inset-0 bg-noise opacity-[0.02]" />
    </div>
  );
}
