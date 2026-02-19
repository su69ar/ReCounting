"use client";

import { MotionConfig } from "framer-motion";
import { transitions } from "@/lib/framer";

type MotionConfigProviderProps = {
    children: React.ReactNode;
};

export function MotionConfigProvider({ children }: MotionConfigProviderProps) {
    return (
        <MotionConfig
            transition={transitions.spring}
            reducedMotion="user"
        >
            {children}
        </MotionConfig>
    );
}
