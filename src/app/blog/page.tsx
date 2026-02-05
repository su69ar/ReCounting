import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { Reveal } from "@/components/animations/Reveal";
import { blogPosts } from "@/data/content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "ReCounting Blog | Accounting Tips for Bali Businesses",
  description:
    "Expert guides on Indonesian tax, bookkeeping, payroll, and compliance. Tips for SMEs and expats.",
  alternates: { canonical: "/blog" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/blog` },
  ],
};

export default function BlogPage() {
  return (
    <section className="section-space">
      <div className="container-grid">
        <JsonLd data={breadcrumbSchema} />
        <Reveal>
          <div className="max-w-2xl">
            <p className="badge-pill">Blog</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-[color:var(--color-slate-dark)]">
              ReCounting insights & tax updates
            </h1>
            <p className="section-subtitle mt-4">
              Practical guidance for Bali business owners, expats, and SMEs.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <Reveal key={post.title}>
              <article className="card card-hover flex h-full flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-primary)]">
                  {post.category}
                </p>
                <h2 className="mt-3 text-lg font-semibold">
                  <Link href={post.href} className="link-underline">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 text-sm text-[color:var(--color-slate-light)]">
                  {post.description}
                </p>
                <div className="mt-auto pt-4 text-xs text-[color:var(--color-slate-light)]">
                  {post.readTime} · {post.date}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
