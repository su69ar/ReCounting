"use client";

import { useRef, useEffect } from "react";
import { Observer } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";

type ScrollObserverConfig = {
  onUp?: () => void;
  onDown?: () => void;
  onLeft?: () => void;
  onRight?: () => void;
  tolerance?: number;
  preventDefault?: boolean;
};

export function useScrollObserver({
  onUp,
  onDown,
  onLeft,
  onRight,
  tolerance = 50,
  preventDefault = false,
}: ScrollObserverConfig) {
  const observerRef = useRef<Observer | null>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    observerRef.current = Observer.create({
      target: window,
      type: "wheel,touch,pointer",
      onUp,
      onDown,
      onLeft,
      onRight,
      tolerance,
      preventDefault,
    });

    return () => {
      observerRef.current?.kill();
    };
  }, [onUp, onDown, onLeft, onRight, tolerance, preventDefault]);

  return {
    enable: () => observerRef.current?.enable(),
    disable: () => observerRef.current?.disable(),
  };
}
