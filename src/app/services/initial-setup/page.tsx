import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Setup (Coming Soon)",
  description:
    "Business setup services for Bali are launching soon. Contact us for early access.",
  alternates: { canonical: "/services/initial-setup" },
};

export default function InitialSetupPage() {
  return (
    <section className="section-space">
      <div className="container-grid max-w-3xl space-y-4 text-sm text-[color:var(--color-slate-light)]">
        <h1 className="text-3xl font-semibold text-[color:var(--color-slate-dark)]">
          Business Setup (Coming Soon)
        </h1>
        <p>
          We are preparing a full business setup service for new companies in
          Indonesia. Reach out to be notified.
        </p>
      </div>
    </section>
  );
}
