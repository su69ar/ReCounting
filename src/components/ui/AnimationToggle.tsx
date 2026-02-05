"use client";

import { useReducedMotion } from "@/components/providers/ReducedMotionProvider";
import { cn } from "@/lib/utils";

type AnimationToggleProps = {
    className?: string;
    showLabel?: boolean;
};

export function AnimationToggle({ className, showLabel = true }: AnimationToggleProps) {
    const { animationsEnabled, toggleAnimations, prefersReducedMotion } = useReducedMotion();

    return (
        <button
            onClick={toggleAnimations}
            className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-lg",
                "text-sm font-medium transition-colors",
                "bg-neutral-100 hover:bg-neutral-200 text-neutral-700",
                className
            )}
            aria-label={animationsEnabled ? "Disable animations" : "Enable animations"}
            title={
                prefersReducedMotion
                    ? "System prefers reduced motion"
                    : animationsEnabled
                        ? "Click to disable animations"
                        : "Click to enable animations"
            }
        >
            <span className="relative w-5 h-5">
                {animationsEnabled ? (
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                ) : (
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                )}
            </span>
            {showLabel && (
                <span className="hidden sm:inline">
                    {animationsEnabled ? "Animations On" : "Animations Off"}
                </span>
            )}
        </button>
    );
}
