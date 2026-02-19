"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";

type CursorState = "default" | "hover" | "click" | "text" | "hidden";

export function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  // Use refs for state accessed inside event listeners to avoid re-binding
  const isVisibleRef = useRef(false);
  const cursorStateRef = useRef<CursorState>("default");

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const hasPointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasPointer) return;

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    // Use quickTo for high-performance mouse following
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.3, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.3, ease: "power3" });
    const dotXTo = gsap.quickTo(dot, "x", { duration: 0.1, ease: "power2" });
    const dotYTo = gsap.quickTo(dot, "y", { duration: 0.1, ease: "power2" });

    // Shared animation state
    const updateCursorStyle = (state: CursorState) => {
      if (cursorStateRef.current === state) return;
      cursorStateRef.current = state;

      const config = {
        default: { scale: 1, backgroundColor: "rgba(10, 124, 255, 0.1)", borderColor: "rgba(10, 124, 255, 0.3)" },
        hover: { scale: 1.5, backgroundColor: "rgba(10, 124, 255, 0.2)", borderColor: "rgba(10, 124, 255, 0.5)" },
        click: { scale: 0.8, backgroundColor: "rgba(10, 124, 255, 0.3)" },
        text: { scale: 0.5, backgroundColor: "rgba(10, 124, 255, 0.05)" },
        hidden: { scale: 0, opacity: 0 },
      };

      gsap.to(cursor, {
        ...config[state],
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto"
      });
    };

    const setVisible = (visible: boolean) => {
      if (isVisibleRef.current === visible) return;
      isVisibleRef.current = visible;

      gsap.to([cursor, dot], {
        opacity: visible ? 1 : 0,
        duration: 0.3,
        overwrite: "auto"
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisibleRef.current) setVisible(true);
      xTo(e.clientX);
      yTo(e.clientY);
      dotXTo(e.clientX);
      dotYTo(e.clientY);
    };

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (target.closest("a, button, [role='button'], .cursor-hover")) {
        updateCursorStyle("hover");
      } else if (target.closest("p, span, h1, h2, h3, h4, h5, h6")) {
        updateCursorStyle("text");
      } else {
        updateCursorStyle("default");
      }
    };

    const handleMouseDown = () => updateCursorStyle("click");
    const handleMouseUp = () => updateCursorStyle(cursorStateRef.current === "click" ? "default" : cursorStateRef.current);

    // Bind listeners ONCE
    window.addEventListener("mousemove", handleMouseMove); // Use mousemove instead of pointermove for better desktop support
    window.addEventListener("mouseover", handleElementHover);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseenter", () => setVisible(true));
    document.addEventListener("mouseleave", () => setVisible(false));

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleElementHover);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      // Clean up other listeners if added
    };
  }, []); // Empty dependency array = No thrashing

  if (prefersReducedMotion()) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-10 h-10 pointer-events-none z-[9999]
                   rounded-full border-2 border-primary-400/30 bg-primary-500/10
                   -translate-x-1/2 -translate-y-1/2 mix-blend-difference opacity-0"
      />

      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-[9999]
                   rounded-full bg-primary-500 -translate-x-1/2 -translate-y-1/2 opacity-0"
      />
    </>
  );
}
