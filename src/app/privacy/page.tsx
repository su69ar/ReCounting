import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "ReCounting privacy policy and data handling practices.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="section-space">
      <div className="container-grid max-w-3xl space-y-4 text-sm text-[color:var(--color-slate-light)]">
        <h1 className="text-3xl font-semibold text-[color:var(--color-slate-dark)]">
          Privacy Policy
        </h1>
        <p>
          This is a placeholder privacy policy. Replace with your legal
          template outlining data collection, usage, and retention practices
          under Indonesia PDP Law and GDPR.
        </p>
      </div>
    </section>
  );
}
