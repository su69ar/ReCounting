"use client";

import { createContext, useContext, useEffect, useState, useCallback, ReactNode } from "react";

type ReducedMotionContextType = {
    prefersReducedMotion: boolean;
    animationsEnabled: boolean;
    toggleAnimations: () => void;
};

const ReducedMotionContext = createContext<ReducedMotionContextType>({
    prefersReducedMotion: false,
    animationsEnabled: true,
    toggleAnimations: () => { },
});

export function useReducedMotion() {
    return useContext(ReducedMotionContext);
}

type ReducedMotionProviderProps = {
    children: ReactNode;
};

export function ReducedMotionProvider({ children }: ReducedMotionProviderProps) {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
        if (typeof window === "undefined") return false;
        return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    });
    const [manualOverride, setManualOverride] = useState<boolean | null>(() => {
        if (typeof window === "undefined") return null;
        const stored = localStorage.getItem("animations-enabled");
        return stored !== null ? stored === "true" : null;
    });

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        const handleChange = (e: MediaQueryListEvent) => {
            setPrefersReducedMotion(e.matches);
        };

        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    const toggleAnimations = useCallback(() => {
        setManualOverride((prev) => {
            const newValue = prev === null ? !(!prefersReducedMotion) : !prev;
            localStorage.setItem("animations-enabled", String(newValue));
            return newValue;
        });
    }, [prefersReducedMotion]);

    const animationsEnabled = manualOverride ?? !prefersReducedMotion;

    return (
        <ReducedMotionContext.Provider
            value={{ prefersReducedMotion, animationsEnabled, toggleAnimations }}
        >
            {children}
        </ReducedMotionContext.Provider>
    );
}
