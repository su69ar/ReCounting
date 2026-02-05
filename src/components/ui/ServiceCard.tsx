"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";
import { Card } from "./Card";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  badge?: string;
  disabled?: boolean;
};

export function ServiceCard({
  title,
  description,
  href,
  icon,
  badge,
  disabled,
}: ServiceCardProps) {
  const iconRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    if (prefersReducedMotion()) return;

    const card = iconRef.current?.closest(".service-card");
    if (!card) return;

    card.addEventListener("mouseenter", () => {
      gsap.to(iconRef.current, {
        scale: 1.1,
        rotation: 5,
        duration: 0.4,
        ease: "back.out(2)",
      });
      gsap.to(arrowRef.current, {
        x: 4,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(iconRef.current, {
        scale: 1,
        rotation: 0,
        duration: 0.4,
        ease: "power2.out",
      });
      gsap.to(arrowRef.current, {
        x: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  }, { scope: iconRef });

  return (
    <Card
      variant="elevated"
      hover3D
      hoverGlow
      className={`service-card h-full ${disabled ? "opacity-60 pointer-events-none" : ""}`}
    >
      {badge && (
        <span className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full 
                       bg-primary-100 text-primary-700 font-semibold">
          {badge}
        </span>
      )}

      <div
        ref={iconRef}
        className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl 
                   bg-gradient-to-br from-primary-500/10 to-accent-500/10 
                   text-primary-500"
      >
        {icon}
      </div>

      <h3 className="text-xl font-semibold text-neutral-900">{title}</h3>
      <p className="mt-3 text-sm text-neutral-500 leading-relaxed">{description}</p>

      <Link
        href={href}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold 
                   text-primary-600 group-hover:text-primary-700"
      >
        {disabled ? "Notify me" : "Learn more"}
        <span ref={arrowRef} className="text-lg">→</span>
      </Link>
    </Card>
  );
}
