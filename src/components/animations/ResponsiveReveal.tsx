"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { motionTokens, prefersReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

type RevealVariant = "fade" | "slide-up" | "slide-left" | "slide-right" | "scale";

type ResponsiveRevealProps = {
    children: React.ReactNode;
    className?: string;
    desktop?: {
        variant?: RevealVariant;
        delay?: number;
        distance?: number;
    };
    mobile?: {
        variant?: RevealVariant;
        delay?: number;
        distance?: number;
    };
    once?: boolean;
    start?: string;
};

export function ResponsiveReveal({
    children,
    className,
    desktop = { variant: "slide-up", delay: 0, distance: motionTokens.distance.md },
    mobile = { variant: "fade", delay: 0, distance: motionTokens.distance.sm },
    once = false,
    start = "top 85%",
}: ResponsiveRevealProps) {
    const ref = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (!ref.current) return;
            const prefers = prefersReducedMotion();

            if (prefers) {
                gsap.set(ref.current, { autoAlpha: 1, y: 0, x: 0, scale: 1 });
                return;
            }

            const mm = gsap.matchMedia();

            // Desktop animations
            mm.add("(min-width: 768px)", () => {
                const fromVars: gsap.TweenVars = { autoAlpha: 0 };

                switch (desktop.variant) {
                    case "slide-up":
                        fromVars.y = desktop.distance;
                        break;
                    case "slide-left":
                        fromVars.x = desktop.distance;
                        break;
                    case "slide-right":
                        fromVars.x = -(desktop.distance ?? 0);
                        break;
                    case "scale":
                        fromVars.scale = 0.9;
                        break;
                }

                const toVars: gsap.TweenVars = {
                    autoAlpha: 1,
                    x: 0,
                    y: 0,
                    scale: 1,
                    duration: motionTokens.duration.slow,
                    ease: motionTokens.ease.enter,
                    delay: desktop.delay,
                    scrollTrigger: {
                        trigger: ref.current,
                        start,
                        toggleActions: once ? "play none none none" : "play none none reverse",
                    },
                };

                gsap.fromTo(ref.current, fromVars, toVars);
            });

            // Mobile animations (simpler)
            mm.add("(max-width: 767px)", () => {
                const fromVars: gsap.TweenVars = { autoAlpha: 0 };

                switch (mobile.variant) {
                    case "slide-up":
                        fromVars.y = mobile.distance;
                        break;
                    case "fade":
                        // Just fade, no movement
                        break;
                }

                const toVars: gsap.TweenVars = {
                    autoAlpha: 1,
                    y: 0,
                    duration: motionTokens.duration.medium,
                    ease: motionTokens.ease.enterSmooth,
                    delay: mobile.delay,
                    scrollTrigger: {
                        trigger: ref.current,
                        start,
                        toggleActions: once ? "play none none none" : "play none none reverse",
                    },
                };

                gsap.fromTo(ref.current, fromVars, toVars);
            });

            return () => mm.revert();
        },
        { scope: ref }
    );

    return (
        <div ref={ref} className={cn(className)}>
            {children}
        </div>
    );
}
