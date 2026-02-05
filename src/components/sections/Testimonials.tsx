"use client";

import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import { motionTokens, prefersReducedMotion } from "@/lib/motion";
import { Card } from "@/components/ui/Card";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company?: string;
  avatar?: string;
};

type TestimonialsProps = {
  items: Testimonial[];
};

export function Testimonials({ items }: TestimonialsProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!gridRef.current || prefersReducedMotion()) return;

    const cards = gridRef.current.querySelectorAll(".testimonial-card");

    ScrollTrigger.batch(cards, {
      start: "top 85%",
      onEnter: (batch) => {
        gsap.fromTo(
          batch,
          {
            y: motionTokens.distance.md,
            autoAlpha: 0,
            rotateY: 15,
          },
          {
            y: 0,
            autoAlpha: 1,
            rotateY: 0,
            duration: motionTokens.duration.slow,
            stagger: motionTokens.stagger.relaxed,
            ease: motionTokens.ease.enter,
          }
        );
      },
    });
  }, { scope: gridRef });

  return (
    <div ref={gridRef} className="grid gap-6 md:grid-cols-3">
      {items.map((testimonial) => (
        <Card
          key={testimonial.name}
          variant="glass"
          hover3D
          className="testimonial-card h-full flex flex-col"
        >
          <div className="mb-4 text-primary-300">
            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          <p className="text-sm text-neutral-600 leading-relaxed flex-grow">
            "{testimonial.quote}"
          </p>

          <div className="mt-6 pt-4 border-t border-neutral-200 flex items-center gap-3">
            {testimonial.avatar ? (
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="h-10 w-10 rounded-full object-cover"
              />
            ) : (
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 
                            flex items-center justify-center text-white font-semibold">
                {testimonial.name[0]}
              </div>
            )}
            <div>
              <p className="text-sm font-semibold text-neutral-900">{testimonial.name}</p>
              <p className="text-xs text-neutral-500">{testimonial.role}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
