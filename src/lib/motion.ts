"use client";

export const motionTokens = {
  duration: {
    instant: 0,
    fast: 0.15,
    normal: 0.3,
    medium: 0.5,
    slow: 0.8,
    slower: 1.2,
    slowest: 2,
  },

  stagger: {
    tight: 0.03,
    normal: 0.08,
    relaxed: 0.12,
    slow: 0.2,
  },

  distance: {
    xs: 8,
    sm: 16,
    md: 24,
    lg: 40,
    xl: 60,
    xxl: 100,
  },

  ease: {
    enter: "power3.out",
    enterSmooth: "power2.out",
    enterBounce: "back.out(1.4)",
    
    exit: "power2.in",
    exitSmooth: "power1.in",
    
    hover: "power2.out",
    click: "power3.out",
    
    scroll: "power1.inOut",
    scrub: "none",
    
    elastic: "elastic.out(1, 0.3)",
    bounce: "bounce.out",
    spring: "back.out(1.7)",
  },

  scrollTrigger: {
    start: "top 85%",
    end: "bottom 15%",
    toggleActions: "play none none reverse",
  },

  transform: {
    scale: {
      up: 1.02,
      down: 0.98,
      hover: 1.05,
    },
    rotate: {
      subtle: 3,
      medium: 15,
      full: 360,
    },
  },
} as const;

export const motionDefaults = {
  ease: motionTokens.ease.enter,
  duration: motionTokens.duration.slow,
  stagger: motionTokens.stagger.relaxed,
  distance: motionTokens.distance.md,
};

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
