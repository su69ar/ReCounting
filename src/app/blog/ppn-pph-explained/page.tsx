import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PPh vs PPN Explained",
  description:
    "A plain-English guide to the two core taxes every Bali business needs to understand.",
  alternates: { canonical: "/blog/ppn-pph-explained" },
};

export default function PpnPphPage() {
  return (
    <section className="section-space">
      <div className="container-grid max-w-3xl space-y-4 text-sm text-[color:var(--color-slate-light)]">
        <h1 className="text-3xl font-semibold text-[color:var(--color-slate-dark)]">
          PPh vs PPN: What&apos;s the Difference?
        </h1>
        <p>
          This article is a placeholder. Replace with the final content from
          your editorial team or copy deck.
        </p>
      </div>
    </section>
  );
}
