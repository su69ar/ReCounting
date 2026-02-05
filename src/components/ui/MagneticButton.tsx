"use client";

import { useRef, useCallback, forwardRef } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  strength?: number;
  external?: boolean;
  variant?: "primary" | "secondary" | "ghost";
};

export const MagneticButton = forwardRef<HTMLElement, MagneticButtonProps>(({
  children,
  className,
  href,
  onClick,
  strength = 0.3,
  external = false,
  variant = "primary",
}, ref) => {
  const buttonRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLSpanElement>(null);
  const rippleRef = useRef<HTMLSpanElement>(null);
  const rectRef = useRef<DOMRect | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!buttonRef.current || !rectRef.current || prefersReducedMotion()) return;

    const rect = rectRef.current;
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(buttonRef.current, {
      x: x * strength,
      y: y * strength,
      duration: 0.3,
      ease: "power2.out",
    });

    if (contentRef.current) {
      gsap.to(contentRef.current, {
        x: x * strength * 0.5,
        y: y * strength * 0.5,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [strength]);

  const handleMouseEnter = useCallback((e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    rectRef.current = buttonRef.current.getBoundingClientRect();

    gsap.to(buttonRef.current, {
      scale: 1.02,
      duration: 0.3,
      ease: "power2.out",
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!buttonRef.current || prefersReducedMotion()) return;

    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)",
    });

    if (contentRef.current) {
      gsap.to(contentRef.current, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)",
      });
    }
  }, []);

  const handleClick = useCallback((e: React.MouseEvent) => {
    if (!buttonRef.current || !rippleRef.current || prefersReducedMotion()) {
      onClick?.();
      return;
    }

    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.set(rippleRef.current, {
      x: x - 75,
      y: y - 75,
      scale: 0,
      opacity: 1,
    });

    gsap.to(rippleRef.current, {
      scale: 3,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    });

    onClick?.();
  }, [onClick]);

  const variantClasses = {
    primary: "btn-primary-new",
    secondary: "btn-secondary-new",
    ghost: "bg-transparent hover:bg-neutral-100 text-neutral-700",
  };

  const Component: any = href ? (external ? "a" : Link) : "button";
  // Explicitly cast href to string when Component is Link to satisfy TS
  const linkProps = href 
    ? { href: href as string, ...(external && { target: "_blank", rel: "noreferrer" }) } 
    : {};

  return (
    <Component
      ref={buttonRef as any}
      className={cn(
        "relative btn",
        variantClasses[variant],
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      {...linkProps}
    >
      <span className="absolute inset-0 overflow-hidden rounded-[inherit]">
        <span
          ref={rippleRef}
          className="absolute w-[150px] h-[150px] rounded-full bg-white/30 pointer-events-none"
          style={{ opacity: 0 }}
        />
        
        <span 
          className="absolute inset-0 -translate-x-full bg-gradient-to-r 
                     from-transparent via-white/10 to-transparent 
                     group-hover:translate-x-full transition-transform 
                     duration-700 ease-out pointer-events-none"
        />
      </span>
      
      <span ref={contentRef} className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </Component>
  );
});

MagneticButton.displayName = "MagneticButton";
