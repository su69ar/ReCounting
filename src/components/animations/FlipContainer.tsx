"use client";

import { useRef, useCallback } from "react";
import { Flip } from "@/lib/gsap";
import { motionTokens } from "@/lib/motion";

type FlipContainerProps = {
  children: React.ReactNode;
  className?: string;
  layoutId?: string;
};

export function FlipContainer({ children, className, layoutId }: FlipContainerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const captureState = useCallback((selector?: string) => {
    if (!containerRef.current) return null;
    const targets = selector 
      ? containerRef.current.querySelectorAll(selector)
      : containerRef.current.children;
    return Flip.getState(targets);
  }, []);

  const animateFrom = useCallback((
    state: Flip.FlipState | null,
    options?: Flip.FromToVars
  ) => {
    if (!state) return;

    Flip.from(state, {
      duration: motionTokens.duration.medium,
      ease: motionTokens.ease.enter,
      stagger: motionTokens.stagger.tight,
      absolute: true,
      ...options,
    });
  }, []);

  return (
    <div ref={containerRef} className={className} data-flip-id={layoutId}>
      {children}
    </div>
  );
}
