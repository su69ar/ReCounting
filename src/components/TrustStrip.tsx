"use client";

import { Reveal } from "@/components/animations/Reveal";

interface TrustItem {
  label: string;
  icon?: "dot" | "check" | "star";
}

interface TrustStripProps {
  items?: TrustItem[];
}

const defaultItems: TrustItem[] = [
  { label: "Trusted by 50+ Bali businesses", icon: "dot" },
  { label: "PKF Certified Partner", icon: "dot" },
  { label: "Registered Indonesian Tax Consultant", icon: "dot" },
];

export function TrustStrip({ items = defaultItems }: TrustStripProps) {
  return (
    <section className="trust-strip py-5">
      <div className="container-grid">
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {items.map((item, index) => (
              <div key={index} className="trust-strip-item">
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
