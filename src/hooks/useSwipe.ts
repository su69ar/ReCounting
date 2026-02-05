"use client";

import { useRef, useCallback, useEffect } from "react";

type SwipeDirection = "left" | "right" | "up" | "down";

type SwipeConfig = {
    threshold?: number;
    onSwipe?: (direction: SwipeDirection) => void;
    onSwipeLeft?: () => void;
    onSwipeRight?: () => void;
    onSwipeUp?: () => void;
    onSwipeDown?: () => void;
};

export function useSwipe<T extends HTMLElement>({
    threshold = 50,
    onSwipe,
    onSwipeLeft,
    onSwipeRight,
    onSwipeUp,
    onSwipeDown,
}: SwipeConfig = {}) {
    const ref = useRef<T>(null);
    const startX = useRef<number>(0);
    const startY = useRef<number>(0);

    const handleTouchStart = useCallback((e: TouchEvent) => {
        startX.current = e.touches[0].clientX;
        startY.current = e.touches[0].clientY;
    }, []);

    const handleTouchEnd = useCallback(
        (e: TouchEvent) => {
            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;

            const diffX = endX - startX.current;
            const diffY = endY - startY.current;
            const absX = Math.abs(diffX);
            const absY = Math.abs(diffY);

            // Determine if horizontal or vertical swipe
            if (absX > absY && absX > threshold) {
                const direction: SwipeDirection = diffX > 0 ? "right" : "left";
                onSwipe?.(direction);
                if (direction === "left") onSwipeLeft?.();
                if (direction === "right") onSwipeRight?.();
            } else if (absY > absX && absY > threshold) {
                const direction: SwipeDirection = diffY > 0 ? "down" : "up";
                onSwipe?.(direction);
                if (direction === "up") onSwipeUp?.();
                if (direction === "down") onSwipeDown?.();
            }
        },
        [threshold, onSwipe, onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown]
    );

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        element.addEventListener("touchstart", handleTouchStart, { passive: true });
        element.addEventListener("touchend", handleTouchEnd, { passive: true });

        return () => {
            element.removeEventListener("touchstart", handleTouchStart);
            element.removeEventListener("touchend", handleTouchEnd);
        };
    }, [handleTouchStart, handleTouchEnd]);

    return ref;
}
