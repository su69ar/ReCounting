import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "ReCounting terms of service and legal disclaimer.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <section className="section-space">
      <div className="container-grid max-w-3xl space-y-4 text-sm text-[color:var(--color-slate-light)]">
        <h1 className="text-3xl font-semibold text-[color:var(--color-slate-dark)]">
          Terms of Service
        </h1>
        <p>
          This is a placeholder terms of service. Replace with your legal
          template outlining service scope, disclaimers, and liability
          limitations.
        </p>
      </div>
    </section>
  );
}
