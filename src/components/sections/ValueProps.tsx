"use client";

import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import { motionTokens, prefersReducedMotion } from "@/lib/motion";
import { Card } from "@/components/ui/Card";

type ValueProp = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type ValuePropsProps = {
  items: ValueProp[];
};

export function ValueProps({ items }: ValuePropsProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!gridRef.current || prefersReducedMotion()) return;

    const cards = gridRef.current.querySelectorAll(".value-card");

    ScrollTrigger.batch(cards, {
      start: "top 85%",
      onEnter: (batch) => {
        gsap.fromTo(
          batch,
          {
            y: motionTokens.distance.lg,
            autoAlpha: 0,
            scale: 0.95,
          },
          {
            y: 0,
            autoAlpha: 1,
            scale: 1,
            duration: motionTokens.duration.medium,
            stagger: motionTokens.stagger.normal,
            ease: "back.out(1.4)",
          }
        );
      },
      onLeaveBack: (batch) => {
        gsap.set(batch, { autoAlpha: 0, y: motionTokens.distance.lg });
      },
    });
  }, { scope: gridRef });

  return (
    <div
      ref={gridRef}
      className="grid gap-6 md:grid-cols-3"
    >
      {items.map((prop) => (
        <Card
          key={prop.title}
          variant="feature"
          hover3D
          className="value-card"
        >
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl 
                        bg-gradient-to-br from-primary-500 to-accent-500 text-white">
            {prop.icon}
          </div>
          <h3 className="text-lg font-semibold text-neutral-900">{prop.title}</h3>
          <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
            {prop.description}
          </p>
        </Card>
      ))}
    </div>
  );
}
