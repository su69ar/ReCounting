"use client";

import { motion } from "framer-motion";
import { transitions, variants } from "@/lib/framer";
import { cn } from "@/lib/utils";

type FadeInProps = {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
};

export function FadeIn({
    children,
    className,
    delay = 0,
    duration
}: FadeInProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={variants.fadeIn}
            transition={{
                ...(duration ? { duration, type: "tween" } : transitions.ease),
                delay
            }}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
}
