"use client";

import { cn } from "@/lib/utils";

type SkeletonProps = {
  className?: string;
  variant?: "text" | "circular" | "rectangular";
  width?: string | number;
  height?: string | number;
  animate?: boolean;
};

export function Skeleton({
  className,
  variant = "rectangular",
  width,
  height,
  animate = true,
}: SkeletonProps) {
  const variantClasses = {
    text: "rounded",
    circular: "rounded-full",
    rectangular: "rounded-lg",
  };

  return (
    <div
      className={cn(
        "bg-neutral-200",
        variantClasses[variant],
        animate && "animate-pulse",
        className
      )}
      style={{
        width: width,
        height: height || (variant === "text" ? "1em" : undefined),
      }}
    />
  );
}

export function SkeletonCard() {
  return (
    <div className="p-6 rounded-2xl border border-neutral-200 space-y-4">
      <Skeleton className="h-12 w-12" />
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
    </div>
  );
}
