import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { Reveal } from "@/components/animations/Reveal";
import { SplitTextHeading } from "@/components/animations/SplitTextHeading";
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
          <div className="max-w-2xl relative">
            {/* Decorative glow */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-[color:var(--color-primary)]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[color:var(--color-accent)]/10 rounded-full blur-3xl pointer-events-none" />

            <p className="badge-gradient inline-flex mb-3">Blog</p>
            <SplitTextHeading
              text="ReCounting insights & tax updates"
              as="h1"
              className="mt-4 text-4xl font-bold tracking-tight text-[color:var(--color-slate-dark)]"
            />
            <p className="section-subtitle mt-4">
              Practical guidance for Bali business owners, expats, and SMEs.
            </p>
            <div className="mt-4 glow-bar glow-bar-md" />
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {blogPosts.map((post, index) => {
            const colors = ['primary', 'accent', 'secondary'];
            const color = colors[index % colors.length];
            return (
              <Reveal key={post.title}>
                <article className={`group card-glow card-glow-${color} flex h-full flex-col p-6 relative overflow-hidden`}>
                  {/* Background glow orb */}
                  <div className={`absolute -top-20 -right-20 w-40 h-40 bg-${color}-500/10 rounded-full blur-3xl group-hover:bg-${color}-500/15 transition-colors pointer-events-none`} />

                  {/* Category badge dengan gradient */}
                  <span className={`badge-gradient mb-3 inline-flex group-hover:shadow-glow-${color} transition-shadow`}>
                    {post.category}
                  </span>

                  <h2 className="mt-3 text-lg font-semibold relative z-10">
                    <Link href={post.href} className="link-glow group-hover:text-[color:var(--color-primary)] transition-colors">
                      {post.title}
                    </Link>
                  </h2>

                  <p className="mt-3 text-sm text-[color:var(--color-slate-light)] relative z-10 flex-grow">
                    {post.description}
                  </p>

                  {/* Bottom dengan glow bar */}
                  <div className="mt-auto pt-4 flex items-center justify-between relative z-10">
                    <span className="text-xs text-[color:var(--color-slate-light)]">
                      {post.readTime} · {post.date}
                    </span>
                    {/* Glow bar seperti StoryScroll */}
                    <div className={`h-[2px] w-0 rounded-full bg-gradient-to-r from-${color}-500 to-${color}-400 group-hover:w-12 transition-all duration-500`} />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
