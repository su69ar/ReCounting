"use client";

import { useRef, useCallback, useState } from "react";
import { gsap } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Card3DProps = {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  glare?: boolean;
  perspective?: number;
};

export function Card3D({
  children,
  className,
  intensity = 15,
  glare = true,
  perspective = 1000,
}: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current || prefersReducedMotion()) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -intensity;
    const rotateY = ((x - centerX) / centerX) * intensity;

    gsap.to(cardRef.current, {
      rotateX,
      rotateY,
      duration: 0.3,
      ease: "power2.out",
    });

    if (glare && glareRef.current) {
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      
      gsap.to(glareRef.current, {
        background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.3) 0%, transparent 60%)`,
        duration: 0.3,
      });
    }
  }, [intensity, glare]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    
    if (!cardRef.current || prefersReducedMotion()) return;

    gsap.to(cardRef.current, {
      scale: 1.02,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
      duration: 0.3,
      ease: "power2.out",
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    
    if (!cardRef.current || prefersReducedMotion()) return;

    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      duration: 0.5,
      ease: "elastic.out(1, 0.5)",
    });
  }, []);

  return (
    <div
      className="relative"
      style={{ perspective: `${perspective}px` }}
    >
      <div
        ref={cardRef}
        className={cn(
          "relative bg-white rounded-2xl shadow-md transition-shadow",
          className
        )}
        style={{ transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {glare && (
          <div
            ref={glareRef}
            className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 transition-opacity"
            style={{ opacity: isHovered ? 1 : 0 }}
          />
        )}
        
        <div style={{ transform: "translateZ(20px)" }}>
          {children}
        </div>
      </div>
    </div>
  );
}
