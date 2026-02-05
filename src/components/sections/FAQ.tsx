"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import { motionTokens, prefersReducedMotion } from "@/lib/motion";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  items: FAQItem[];
};

function FAQItem({ item, isOpen, onToggle }: { 
  item: FAQItem; 
  isOpen: boolean; 
  onToggle: () => void 
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    if (!contentRef.current || prefersReducedMotion()) {
      if (contentRef.current) {
        contentRef.current.style.height = isOpen ? "auto" : "0px";
      }
      return;
    }

    if (isOpen) {
      gsap.to(contentRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      });
      gsap.to(iconRef.current, {
        rotation: 45,
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
      gsap.to(iconRef.current, {
        rotation: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [isOpen]);

  return (
    <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-sm font-semibold text-neutral-900 pr-4">
          {item.question}
        </span>
        <span
          ref={iconRef}
          className="flex-shrink-0 text-xl text-neutral-400"
        >
          +
        </span>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden"
        style={{ height: 0, opacity: 0 }}
      >
        <p className="px-6 pb-6 text-sm text-neutral-500 leading-relaxed">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || prefersReducedMotion()) return;

    const faqItems = containerRef.current.querySelectorAll(".faq-item-wrapper");

    gsap.from(faqItems, {
      y: motionTokens.distance.sm,
      autoAlpha: 0,
      duration: motionTokens.duration.medium,
      stagger: motionTokens.stagger.tight,
      ease: motionTokens.ease.enter,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="space-y-3">
      {items.map((item, index) => (
        <div key={item.question} className="faq-item-wrapper">
          <FAQItem
            item={item}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        </div>
      ))}
    </div>
  );
}
