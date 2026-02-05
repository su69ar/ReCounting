"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";

type CursorState = "default" | "hover" | "click" | "text" | "hidden";

export function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [cursorState, setCursorState] = useState<CursorState>("default");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const hasPointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasPointer) return;

    const cursor = cursorRef.current;
    const dot = cursorDotRef.current;
    if (!cursor || !dot) return;

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.3, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.3, ease: "power3" });
    const dotXTo = gsap.quickTo(dot, "x", { duration: 0.1, ease: "power2" });
    const dotYTo = gsap.quickTo(dot, "y", { duration: 0.1, ease: "power2" });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      dotXTo(e.clientX);
      dotYTo(e.clientY);
      
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.closest("a, button, [role='button'], .cursor-hover")) {
        setCursorState("hover");
      } else if (target.closest("p, span, h1, h2, h3, h4, h5, h6")) {
        setCursorState("text");
      } else {
        setCursorState("default");
      }
    };

    const handleMouseDown = () => setCursorState("click");
    const handleMouseUp = () => setCursorState(cursorState === "click" ? "default" : cursorState);

    window.addEventListener("pointermove", handleMouseMove);
    window.addEventListener("pointerover", handleElementHover);
    window.addEventListener("pointerdown", handleMouseDown);
    window.addEventListener("pointerup", handleMouseUp);
    document.addEventListener("pointerenter", handleMouseEnter);
    document.addEventListener("pointerleave", handleMouseLeave);

    return () => {
      window.removeEventListener("pointermove", handleMouseMove);
      window.removeEventListener("pointerover", handleElementHover);
      window.removeEventListener("pointerdown", handleMouseDown);
      window.removeEventListener("pointerup", handleMouseUp);
      document.removeEventListener("pointerenter", handleMouseEnter);
      document.removeEventListener("pointerleave", handleMouseLeave);
    };
  }, [isVisible, cursorState]);

  useEffect(() => {
    if (!cursorRef.current || prefersReducedMotion()) return;

    const animations: Record<CursorState, gsap.TweenVars> = {
      default: { scale: 1, backgroundColor: "rgba(10, 124, 255, 0.1)", borderColor: "rgba(10, 124, 255, 0.3)" },
      hover: { scale: 1.5, backgroundColor: "rgba(10, 124, 255, 0.2)", borderColor: "rgba(10, 124, 255, 0.5)" },
      click: { scale: 0.8, backgroundColor: "rgba(10, 124, 255, 0.3)" },
      text: { scale: 0.5, backgroundColor: "rgba(10, 124, 255, 0.05)" },
      hidden: { scale: 0, opacity: 0 },
    };

    gsap.to(cursorRef.current, {
      ...animations[cursorState],
      duration: 0.3,
      ease: "power2.out",
    });
  }, [cursorState]);

  if (prefersReducedMotion()) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-10 h-10 pointer-events-none z-[9999]
                   rounded-full border-2 border-primary-400/30 bg-primary-500/10
                   -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />
      
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-[9999]
                   rounded-full bg-primary-500 -translate-x-1/2 -translate-y-1/2"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />
    </>
  );
}
