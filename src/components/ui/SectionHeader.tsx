"use client";

import Link from "next/link";
import { SplitTextHeading } from "@/components/animations/SplitTextHeading";

type SectionHeaderProps = {
  badge?: string;
  title: string;
  subtitle?: string;
  action?: {
    label: string;
    href: string;
  };
  centered?: boolean;
};

export function SectionHeader({
  badge,
  title,
  subtitle,
  action,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div
      className={`section-animate ${
        centered
          ? "max-w-2xl mx-auto text-center"
          : "flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
      }`}
    >
      <div className={centered ? "" : "max-w-2xl"}>
        {badge && <p className="badge-new mb-4">{badge}</p>}
        <SplitTextHeading
          text={title}
          as="h2"
          className="section-title"
          splitType="words"
          animationType="cascade"
        />
        {subtitle && (
          <p className="section-subtitle mt-3">{subtitle}</p>
        )}
      </div>
      {action && (
        <Link href={action.href} className="btn-secondary-new shrink-0">
          {action.label}
        </Link>
      )}
    </div>
  );
}
