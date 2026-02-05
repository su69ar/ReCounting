"use client";

import { useState, useEffect, useCallback } from "react";

type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

const breakpointValues: Record<Breakpoint, number> = {
    xs: 0,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
};

type UseBreakpointAnimationConfig<T> = {
    default: T;
    xs?: T;
    sm?: T;
    md?: T;
    lg?: T;
    xl?: T;
    "2xl"?: T;
};

export function useBreakpointAnimation<T>(config: UseBreakpointAnimationConfig<T>): T {
    const [currentBreakpoint, setCurrentBreakpoint] = useState<Breakpoint>("lg");

    const updateBreakpoint = useCallback(() => {
        const width = window.innerWidth;

        if (width >= breakpointValues["2xl"]) {
            setCurrentBreakpoint("2xl");
        } else if (width >= breakpointValues.xl) {
            setCurrentBreakpoint("xl");
        } else if (width >= breakpointValues.lg) {
            setCurrentBreakpoint("lg");
        } else if (width >= breakpointValues.md) {
            setCurrentBreakpoint("md");
        } else if (width >= breakpointValues.sm) {
            setCurrentBreakpoint("sm");
        } else {
            setCurrentBreakpoint("xs");
        }
    }, []);

    useEffect(() => {
        updateBreakpoint();
        window.addEventListener("resize", updateBreakpoint);
        return () => window.removeEventListener("resize", updateBreakpoint);
    }, [updateBreakpoint]);

    // Find the appropriate value for current breakpoint
    const breakpointOrder: Breakpoint[] = ["2xl", "xl", "lg", "md", "sm", "xs"];
    const currentIndex = breakpointOrder.indexOf(currentBreakpoint);

    for (let i = currentIndex; i < breakpointOrder.length; i++) {
        const bp = breakpointOrder[i];
        if (config[bp] !== undefined) {
            return config[bp] as T;
        }
    }

    return config.default;
}

// Convenience hook for simple enable/disable animations per breakpoint
export function useAnimationsEnabled(config: {
    enabledAbove?: Breakpoint;
    enabledBelow?: Breakpoint;
} = {}): boolean {
    const [isEnabled, setIsEnabled] = useState(true);

    useEffect(() => {
        const checkEnabled = () => {
            const width = window.innerWidth;
            let enabled = true;

            if (config.enabledAbove) {
                enabled = enabled && width >= breakpointValues[config.enabledAbove];
            }

            if (config.enabledBelow) {
                enabled = enabled && width < breakpointValues[config.enabledBelow];
            }

            setIsEnabled(enabled);
        };

        checkEnabled();
        window.addEventListener("resize", checkEnabled);
        return () => window.removeEventListener("resize", checkEnabled);
    }, [config.enabledAbove, config.enabledBelow]);

    return isEnabled;
}
