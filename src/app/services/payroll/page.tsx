import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payroll Services (Coming Soon)",
  description:
    "Payroll services for Bali businesses are launching soon. Join the waitlist for updates.",
  alternates: { canonical: "/services/payroll" },
};

export default function PayrollPage() {
  return (
    <section className="section-space">
      <div className="container-grid max-w-3xl space-y-4 text-sm text-[color:var(--color-slate-light)]">
        <h1 className="text-3xl font-semibold text-[color:var(--color-slate-dark)]">
          Payroll Services (Coming Soon)
        </h1>
        <p>
          Payroll support is in progress. Contact us to be notified when this
          service launches.
        </p>
      </div>
    </section>
  );
}
