"use client";

import { useGSAP } from "@gsap/react";
import {
  gsap,
  ScrollTrigger,
  ScrollSmoother,
  ScrollToPlugin,
  Flip,
  Observer,
  SplitText,
  DrawSVGPlugin,
  MorphSVGPlugin,
  MotionPathPlugin,
  CustomEase,
} from "gsap/all";

if (typeof window !== "undefined") {
  gsap.registerPlugin(
    ScrollTrigger,
    ScrollToPlugin,
    Flip,
    Observer,
    ScrollSmoother,
    SplitText,
    DrawSVGPlugin,
    MorphSVGPlugin,
    MotionPathPlugin,
    CustomEase
  );
  
  try {
    CustomEase.create("smooth", "M0,0 C0.25,0.1 0.25,1 1,1");
    CustomEase.create("snappy", "M0,0 C0.2,1 0.4,1 1,1");
    CustomEase.create("gentle", "M0,0 C0.4,0 0.2,1 1,1");
    CustomEase.create("dramatic", "M0,0 C0.7,0 0.2,1 1,1");

    CustomEase.create("recounting-enter", "M0,0 C0.22,1 0.36,1 1,1");
    CustomEase.create("recounting-exit", "M0,0 C0.64,0 0.78,0 1,1");
  } catch (e) {
    console.warn("CustomEase could not be initialized", e);
  }
}

export {
  gsap,
  useGSAP,
  ScrollTrigger,
  ScrollSmoother,
  ScrollToPlugin,
  Flip,
  Observer,
  SplitText,
  DrawSVGPlugin,
  MorphSVGPlugin,
  MotionPathPlugin,
  CustomEase,
};
