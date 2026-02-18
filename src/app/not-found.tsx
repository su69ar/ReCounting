import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <section className="section-space">
      <div className="container-grid flex flex-col items-center justify-center text-center">
        <p className="text-6xl font-bold text-[color:var(--color-primary)]">
          404
        </p>
        <h1 className="mt-4 text-3xl font-semibold text-[color:var(--color-slate-dark)]">
          Page not found
        </h1>
        <p className="mt-3 text-sm text-[color:var(--color-slate-light)] max-w-md">
          The page you are looking for might have been moved, removed, or does
          not exist. Let us help you find what you need.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <Link href="/" className="btn-primary">
            Go to homepage
          </Link>
          <Link href="/services" className="btn-secondary">
            View services
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
