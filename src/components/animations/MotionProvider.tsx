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

    const handleRouteChange = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  return null;
}
