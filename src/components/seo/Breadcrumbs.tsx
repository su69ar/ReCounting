import Link from "next/link";
import type { ReactNode } from "react";

export type BreadcrumbItem = {
  name: string;
  href?: string;
};

export function Breadcrumbs({
  items,
  className = "",
}: {
  items: BreadcrumbItem[];
  className?: string;
}): ReactNode {
  if (!items.length) return null;
  return (
    <nav
      aria-label="Breadcrumb"
      className={`text-sm text-[color:var(--color-slate-light)] ${className}`}
    >
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li
              key={`${item.name}-${idx}`}
              className="flex items-center gap-2"
            >
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-[color:var(--color-slate-dark)] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary)]"
                >
                  {item.name}
                </Link>
              ) : (
                <span
                  className="text-[color:var(--color-slate-dark)] font-medium"
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.name}
                </span>
              )}
              {!isLast && <span aria-hidden="true">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
