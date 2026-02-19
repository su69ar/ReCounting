"use client";

import { useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";

export function TransitionOverlay() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useGSAP(() => {
    if (!overlayRef.current || prefersReducedMotion()) return;

    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const tl = gsap.timeline();

    tl.set(overlayRef.current, { display: "block" })
      .fromTo(
        overlayRef.current,
        { scaleY: 0, transformOrigin: "bottom" },
        { scaleY: 1, duration: 0.2, ease: "power2.inOut" }
      )
      .to(overlayRef.current, {
        scaleY: 0,
        transformOrigin: "top",
        duration: 0.2,
        ease: "power2.inOut",
        delay: 0.05,
      })
      .set(overlayRef.current, { display: "none" });

  }, { dependencies: [pathname], scope: overlayRef });

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] bg-gradient-to-br from-primary-500 to-accent-500 pointer-events-none"
      style={{ display: "none" }}
    />
  );
}
