"use client";

import { PageTransitionFM } from "@/components/animations/PageTransitionFM";

export default function Template({ children }: { children: React.ReactNode }) {
    return <PageTransitionFM>{children}</PageTransitionFM>;
}
