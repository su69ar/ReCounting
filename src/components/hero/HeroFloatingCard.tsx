"use client";

import { useRef, useCallback } from "react";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";

type HeroFloatingCardProps = {
  features: string[];
  tagline: string;
  title: string;
  description: string;
};

export function HeroFloatingCard({
  features,
  tagline,
  title,
  description,
}: HeroFloatingCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current || prefersReducedMotion()) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    gsap.to(cardRef.current, {
      rotateX,
      rotateY,
      duration: 0.3,
      ease: "power2.out",
    });

    if (glowRef.current) {
      gsap.to(glowRef.current, {
        x: x - rect.width / 2,
        y: y - rect.height / 2,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current || prefersReducedMotion()) return;

    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.3)",
    });
  }, []);

  useGSAP(() => {
    if (!cardRef.current || prefersReducedMotion()) {
      gsap.set(cardRef.current, { autoAlpha: 1 });
      return;
    }

    gsap.from(cardRef.current, {
      y: 60,
      rotateY: 15,
      autoAlpha: 0,
      duration: 1,
      delay: 0.8,
      ease: "back.out(1.2)",
    });

    gsap.to(cardRef.current, {
      y: 15,
      duration: 4,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.from(".floating-card-feature", {
      x: -20,
      autoAlpha: 0,
      duration: 0.5,
      stagger: 0.1,
      delay: 1.3,
      ease: "power2.out",
    });
  }, { scope: cardRef });

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative card-glass p-8 rounded-3xl space-y-6"
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      <div
        ref={glowRef}
        className="absolute w-32 h-32 rounded-full pointer-events-none
                   bg-primary-400/20 blur-2xl"
        style={{ transform: "translate(-50%, -50%)" }}
      />

      <div className="relative z-10 space-y-2">
        <p className="text-sm font-semibold text-accent-500">{tagline}</p>
        <h2 className="text-2xl font-bold text-neutral-900">{title}</h2>
        <p className="text-sm text-neutral-500">{description}</p>
      </div>

      <div className="relative z-10 space-y-3">
        {features.map((feature) => (
          <div
            key={feature}
            className="floating-card-feature flex items-start gap-3"
          >
            <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-accent-500 flex-shrink-0" />
            <p className="text-sm text-neutral-600">{feature}</p>
          </div>
        ))}
      </div>

      <Link
        href="/services"
        className="relative z-10 block w-full text-center btn-secondary-new"
      >
        Explore Services
      </Link>
    </div>
  );
}
