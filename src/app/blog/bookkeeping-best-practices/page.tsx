import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bookkeeping Best Practices for Bali SMEs",
  description:
    "How to keep your books clean, reduce stress, and prepare for tax season.",
  alternates: { canonical: "/blog/bookkeeping-best-practices" },
};

export default function BookkeepingBestPracticesPage() {
  return (
    <section className="section-space">
      <div className="container-grid max-w-3xl space-y-4 text-sm text-[color:var(--color-slate-light)]">
        <h1 className="text-3xl font-semibold text-[color:var(--color-slate-dark)]">
          Bookkeeping Best Practices for Bali SMEs
        </h1>
        <p>
          This article is a placeholder. Replace with your final content when
          ready.
        </p>
      </div>
    </section>
  );
}
