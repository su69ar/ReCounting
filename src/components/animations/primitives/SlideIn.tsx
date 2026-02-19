"use client";

import { motion } from "framer-motion";
import { transitions } from "@/lib/framer";
import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right";

type SlideInProps = {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: Direction;
    distance?: number;
};

export function SlideIn({
    children,
    className,
    delay = 0,
    direction = "up",
    distance = 16,
}: SlideInProps) {
    const getInitial = () => {
        switch (direction) {
            case "up": return { opacity: 0, y: distance };
            case "down": return { opacity: 0, y: -distance };
            case "left": return { opacity: 0, x: distance };
            case "right": return { opacity: 0, x: -distance };
        }
    };

    return (
        <motion.div
            initial={getInitial()}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ ...transitions.spring, delay }}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
}
