"use client";

import Image from "next/image";

export function HeroBackground() {
    return (
        <div className="absolute inset-0 z-0 select-none overflow-hidden">
            {/* Background Image */}
            <Image
                src="/assets/hero-bg-geo.png"
                alt="ReCounting Hero Background"
                fill
                className="object-cover object-center"
                priority
                quality={90}
            />

            {/* Overlay for text readability */}
            <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]" />

            {/* Subtle Gradient to fade bottom into white */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </div>
    );
}
