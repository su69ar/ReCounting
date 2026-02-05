"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { prefersReducedMotion } from "@/lib/motion";

export function HoverInteractions() {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const selector = ".card-hover, .btn-primary, .btn-secondary";
    const elements = Array.from(document.querySelectorAll<HTMLElement>(selector));

    const handlers = new Map<
      HTMLElement,
      { enter: () => void; leave: () => void }
    >();

    elements.forEach((el) => {
      const enter = () => {
        gsap.to(el, {
          y: -6,
          scale: 1.01,
          duration: 0.2,
          ease: "power2.out",
          overwrite: "auto",
        });
      };
      const leave = () => {
        gsap.to(el, {
          y: 0,
          scale: 1,
          duration: 0.25,
          ease: "power2.out",
          overwrite: "auto",
        });
      };
      el.addEventListener("pointerenter", enter);
      el.addEventListener("pointerleave", leave);
      handlers.set(el, { enter, leave });
    });

    return () => {
      handlers.forEach((handler, el) => {
        el.removeEventListener("pointerenter", handler.enter);
        el.removeEventListener("pointerleave", handler.leave);
      });
    };
  }, []);

  return null;
}
