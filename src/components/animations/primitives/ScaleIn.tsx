"use client";

import { motion } from "framer-motion";
import { transitions } from "@/lib/framer";
import { cn } from "@/lib/utils";

type ScaleInProps = {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    from?: number;
};

export function ScaleIn({
    children,
    className,
    delay = 0,
    from = 0.95
}: ScaleInProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: from }}
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={{
                visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { ...transitions.spring, delay }
                }
            }}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
}
