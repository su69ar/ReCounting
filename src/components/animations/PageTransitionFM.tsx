"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { transitions } from "@/lib/framer";

export function PageTransitionFM({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={transitions.easeFast}
                className="w-full"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
