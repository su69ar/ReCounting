import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { Reveal } from "@/components/animations/Reveal";
import { SplitTextHeading } from "@/components/animations/SplitTextHeading";
import { MaskReveal } from "@/components/animations/MaskReveal";
import { InstagramFeed } from "@/components/sections/InstagramFeed";
import { primaryCta, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About ReCounting | Accounting Experts in Bali",
  description:
    "Meet our team of licensed accountants serving Bali businesses. English-speaking, compliance-first, and trusted by SMEs.",
  alternates: { canonical: "/about" },
};

const team: { name: string; role: string; credential: string; image?: string }[] = [
  { name: "Rikotama", role: "Head Accountant & Advisor", credential: "Xero Certified Advisor. 8+ years of experience in accounting", image: "/team/rikotama.png" },
  { name: "Toni Artana", role: "Tax Compliance Lead", credential: "10+ years of experience in Indonesian tax compliance, PPh, PPN, and SPT filing", image: "/team/ReCounting_Toni_.png" },
  { name: "Medita", role: "Client Success Manager", credential: "English-first client support and onboarding for expat and local businesses", image: "/team/ReCounting_Medita.png" },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "About", item: `${siteConfig.url}/about` },
  ],
};

export default function AboutPage() {
  return (
    <section className="section-space">
      <div className="container-grid">
        <JsonLd data={breadcrumbSchema} />
        <Reveal>
          <div className="max-w-2xl">
            <p className="badge-pill">About us</p>
            <SplitTextHeading
              text="Meet the ReCounting team"
              as="h1"
              className="mt-4 text-4xl font-bold tracking-tight text-[color:var(--color-slate-dark)]"
            />
            <p className="section-subtitle mt-4">
              We are a Bali-based accounting firm helping SMEs, startups, and
              expat-owned companies stay compliant with Indonesian tax
              regulations. With a combined 18+ years of experience, our team
              serves businesses across hospitality, retail, technology, and
              professional services throughout Bali.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {team.map((member, index) => {
            const colors = ['primary', 'accent', 'secondary'];
            const color = colors[index % colors.length];
            return (
              <MaskReveal key={member.name}>
                <div className={`group card-glow card-glow-${color} p-6 relative overflow-hidden`}>
                  {/* Glow orb background */}
                  <div className={`absolute -top-10 -right-10 w-32 h-32 bg-${color}-500/20 rounded-full blur-2xl group-hover:bg-${color}-500/30 transition-colors pointer-events-none`} />

                  {/* Avatar */}
                  <div className="mb-6 avatar-gradient w-24 h-24 group-hover:scale-105 transition-transform">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={96}
                        height={96}
                        className="rounded-full object-cover w-full h-full"
                      />
                    ) : (
                      <div className="avatar-gradient-inner text-lg font-bold text-[color:var(--color-primary)]">
                        {member.name.slice(0, 1)}
                      </div>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold relative z-10">{member.name}</h3>

                  {/* Role badge dengan glow */}
                  <span className={`mt-2 inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-${color}-500/10 text-${color}-500 border border-${color}-500/20`}>
                    {member.role}
                  </span>

                  <p className="mt-3 text-xs text-[color:var(--color-slate-light)] relative z-10">
                    {member.credential}
                  </p>

                  {/* Glow bar */}
                  <div className={`mt-4 h-[2px] w-0 rounded-full bg-gradient-to-r from-${color}-500 to-${color}-400 group-hover:w-16 transition-all duration-500`} />
                </div>
              </MaskReveal>
            );
          })}
        </div>

        <MaskReveal className="mt-12 relative rounded-2xl overflow-hidden">
          {/* Background glow orbs */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[color:var(--color-primary)]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[color:var(--color-accent)]/10 rounded-full blur-3xl" />

          <div className="relative card-glow card-glow-primary p-8 overflow-hidden">
            <p className="badge-gradient inline-flex mb-3">Why us</p>
            <SplitTextHeading
              text="Why businesses choose us"
              as="h2"
              className="text-2xl font-semibold"
            />

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                { text: "English-speaking, locally licensed accountants", color: "primary", icon: "badge" },
                { text: "Transparent pricing and clear deliverables", color: "accent", icon: "receipt" },
                { text: "Compliance-first, audit-ready reporting", color: "secondary", icon: "shield" },
                { text: "Fast response time (less than 2 hours)", color: "primary", icon: "zap" },
              ].map((item) => (
                <div key={item.text} className={`group card-glow card-glow-${item.color} flex items-center gap-4 p-4`}>
                  <div className={`icon-glow bg-${item.color}-500/10 text-${item.color}-500`}>
                    {item.icon === "badge" && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3Z" />
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                        <line x1="12" y1="19" x2="12" y2="23" />
                        <line x1="8" y1="23" x2="16" y2="23" />
                      </svg>
                    )}
                    {item.icon === "receipt" && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
                        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                        <line x1="12" y1="17" x2="12" y2="17" />
                      </svg>
                    )}
                    {item.icon === "shield" && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    )}
                    {item.icon === "zap" && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                      </svg>
                    )}
                  </div>
                  <span className="text-sm text-[color:var(--color-slate-light)]">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 glow-bar glow-bar-md" />
          </div>
        </MaskReveal>

        <section className="mt-20 md:mt-32">
          <Reveal>
            <div className="mb-10 text-center">
              <p className="badge-pill mb-3">Culture</p>
              <SplitTextHeading
                text="ReCounting on Instagram"
                as="h2"
                className="section-title"
              />
              <p className="section-subtitle mt-3">
                See how we help Bali businesses thrive with practical accounting and tax insights. Follow <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-[color:var(--color-primary)] font-medium hover:underline">@recountingasia</a>
              </p>
            </div>
          </Reveal>
          <InstagramFeed limit={6} />
        </section>

        <MaskReveal className="mt-12 relative rounded-3xl overflow-hidden">
          {/* Background gradient - full bleed dalam card */}
          <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-primary)]/5 via-[color:var(--color-accent)]/5 to-[color:var(--color-secondary)]/5" />

          {/* Animated background orbs - dalam card */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[color:var(--color-primary)]/15 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[color:var(--color-accent)]/15 rounded-full blur-3xl animate-pulse-slow-delayed" />
          </div>

          <div className="relative card-glass border border-white/50 rounded-3xl p-8 backdrop-blur-xl">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="badge-gradient inline-flex mb-2">Get started</p>
                <SplitTextHeading
                  text="Ready to work with us?"
                  as="h3"
                  className="text-lg font-semibold"
                />
                <p className="text-sm text-[color:var(--color-slate-light)]">
                  Book a free consultation or explore our service packages.
                </p>
                <div className="mt-3 glow-bar glow-bar-sm" />
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href={primaryCta.href} className="btn-primary shimmer">
                  {primaryCta.label}
                </Link>
                <Link href="/services" className="btn-secondary">
                  View services
                </Link>
              </div>
            </div>
          </div>
        </MaskReveal>
      </div>
    </section>
  );
}
