"use client";

import { useCallback } from "react";
import { Flip } from "@/lib/gsap";
import { motionTokens } from "@/lib/motion";

export function useFlip() {
  const captureState = useCallback((targets: Element | Element[] | string) => {
    return Flip.getState(targets);
  }, []);

  const animateFrom = useCallback((
    state: Flip.FlipState,
    options?: Flip.FromToVars
  ) => {
    return Flip.from(state, {
      duration: motionTokens.duration.medium,
      ease: motionTokens.ease.enter,
      stagger: motionTokens.stagger.tight,
      ...options,
    });
  }, []);

  return { captureState, animateFrom };
}
