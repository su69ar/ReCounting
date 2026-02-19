"use client";

import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import { motionTokens } from "@/lib/motion";

export function MotionProvider() {
  useGSAP(() => {
    gsap.defaults({
      ease: motionTokens.ease.enter,
      duration: motionTokens.duration.medium,
    });

    gsap.config({
      force3D: true,
      nullTargetWarn: false,
    });

    ScrollTrigger.defaults({
      markers: false,
    });

    // Handle route changes
    const handleRouteChange = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("popstate", handleRouteChange);

    // Refresh on font load to prevent layout shifts breaking start/end positions
    document.fonts.ready.then(() => {
      ScrollTrigger.refresh();
    });

    // Debounced resize handler
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 200);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  return null;
}
