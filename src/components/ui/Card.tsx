"use client";

import { useRef, useCallback } from "react";
import { gsap } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

type CardVariant = "default" | "glass" | "gradient-border" | "elevated" | "feature";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  variant?: CardVariant;
  hover3D?: boolean;
  hoverGlow?: boolean;
  as?: React.ElementType;
};

export function Card({
  children,
  className,
  variant = "default",
  hover3D = false,
  hoverGlow = false,
  as: Component = "div",
}: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current || prefersReducedMotion()) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (hover3D) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      gsap.to(cardRef.current, {
        rotateX,
        rotateY,
        duration: 0.3,
        ease: "power2.out",
      });
    }

    if (hoverGlow && glowRef.current) {
      gsap.to(glowRef.current, {
        x: x - rect.width / 2,
        y: y - rect.height / 2,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [hover3D, hoverGlow]);

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current || prefersReducedMotion()) return;

    if (hover3D) {
      gsap.to(cardRef.current, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.5)",
      });
    }

    if (hoverGlow && glowRef.current) {
      gsap.to(glowRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [hover3D, hoverGlow]);

  const variantClasses = {
    default: "bg-white border border-neutral-200 shadow-sm",
    glass: "bg-white/70 backdrop-blur-lg border border-white/50 shadow-lg",
    "gradient-border": "card-gradient-border bg-white",
    elevated: "bg-white border border-neutral-200 shadow-lg hover:shadow-xl",
    feature: "bg-gradient-to-br from-white to-neutral-50 border border-neutral-200 shadow-md",
  };

  return (
    <Component
      ref={cardRef}
      className={cn(
        "relative rounded-2xl p-6 transition-all duration-300",
        variantClasses[variant],
        hover3D && "transform-gpu",
        className
      )}
      style={hover3D ? { transformStyle: "preserve-3d", perspective: "1000px" } : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {hoverGlow && (
        <div
          ref={glowRef}
          className="absolute w-40 h-40 rounded-full pointer-events-none
                     bg-primary-400/20 blur-2xl opacity-0"
          style={{ transform: "translate(-50%, -50%)" }}
        />
      )}

      <div className="relative z-10">{children}</div>
    </Component>
  );
}
