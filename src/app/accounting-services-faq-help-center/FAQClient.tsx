"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { FAQ } from "@/components/sections/FAQ";
import { Reveal } from "@/components/animations/Reveal";
import { MaskReveal } from "@/components/animations/MaskReveal";
import { StaggerGroup } from "@/components/animations/StaggerGroup";
import { SplitTextHeading } from "@/components/animations/SplitTextHeading";
import { primaryCta, secondaryCta } from "@/lib/site";
import { categorization, FAQCategory } from "./faqData";

export function FAQClient() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState(categorization[0].id);

    // Filter logic
    const filteredCategories = useMemo(() => {
        if (!searchQuery.trim()) return categorization;

        const query = searchQuery.toLowerCase();

        return categorization.map((category: FAQCategory) => {
            const filteredFaqs = category.data.filter(
                (faq: any) => faq.question.toLowerCase().includes(query) || faq.answer.toLowerCase().includes(query)
            );

            return {
                ...category,
                data: filteredFaqs
            };
        }).filter((category: FAQCategory) => category.data.length > 0);
    }, [searchQuery]);

    return (
        <>
            {/* Hero Header */}
            <section className="section-space pb-12 pt-24 md:pt-36 relative overflow-hidden bg-[color:var(--color-primary-900)] text-white">
                <div className="absolute inset-0 bg-[url('/assets/images/noise.png')] opacity-10 mix-blend-overlay"></div>
                <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-[color:var(--color-primary)]/20 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-[color:var(--color-accent)]/20 rounded-full blur-[120px] pointer-events-none" />

                <div className="container-grid relative z-10">
                    <Reveal>
                        <div className="max-w-3xl mx-auto text-center">
                            <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 text-white border border-white/20 text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-md">
                                Knowledge Base
                            </span>
                            <SplitTextHeading
                                text="FAQ & Help Center"
                                as="h1"
                                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
                            />
                            <p className="text-lg md:text-xl text-neutral-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                                Everything you need to know about accounting, taxation, and running a compliant business in Bali, Indonesia.
                            </p>

                            {/* Search Bar */}
                            <div className="relative max-w-xl mx-auto group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-neutral-400 group-focus-within:text-[color:var(--color-primary)] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search for answers (e.g. 'PPN', 'Payroll', 'Audit')..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 md:py-5 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)] focus:bg-white/15 backdrop-blur-md transition-all shadow-xl"
                                />
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Main Content Layout */}
            <section className="py-16 md:py-24 bg-[#fefefe] relative">
                <div className="container-grid">

                    <div className="flex flex-col lg:flex-row gap-12 items-start">

                        {/* Sticky Sidebar */}
                        <div className="w-full lg:w-1/4 lg:sticky lg:top-28 shrink-0">
                            <div className="bg-[#fefefe] rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-neutral-100">
                                <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-4 pl-2">Categories</h3>
                                <nav className="flex flex-col gap-1.5">
                                    {categorization.map((category: FAQCategory) => (
                                        <button
                                            key={category.id}
                                            onClick={() => {
                                                setActiveCategory(category.id);
                                                setSearchQuery("");
                                                const el = document.getElementById(category.id);
                                                if (el) {
                                                    const y = el.getBoundingClientRect().top + window.scrollY - 100;
                                                    window.scrollTo({ top: y, behavior: 'smooth' });
                                                }
                                            }}
                                            className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl transition-all duration-200 ${activeCategory === category.id && !searchQuery
                                                ? "bg-[color:var(--color-primary)]/10 text-[color:var(--color-primary)] font-medium"
                                                : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
                                                }`}
                                        >
                                            <span className={activeCategory === category.id && !searchQuery ? "text-[color:var(--color-primary)]" : "text-neutral-400"}>
                                                {category.icon}
                                            </span>
                                            <span className="text-sm">{category.label}</span>
                                        </button>
                                    ))}
                                </nav>

                                <div className="mt-8 pt-6 border-t border-neutral-100">
                                    <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-100/50 text-center">
                                        <p className="text-sm font-medium text-neutral-800 mb-2">Can't find an answer?</p>
                                        <p className="text-xs text-neutral-500 mb-4">Our compliance team is ready to help you directly.</p>
                                        <a href={secondaryCta.href} className="w-full py-2.5 px-4 bg-white border border-neutral-200 text-neutral-700 text-xs font-semibold rounded-lg hover:border-[color:var(--color-primary)] hover:text-[color:var(--color-primary)] transition-colors flex items-center justify-center gap-2">
                                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7A8.38 8.38 0 0 1 4 11.5a8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" strokeLinecap="round" /></svg>
                                            Chat on WhatsApp
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Main FAQ Content Area */}
                        <div className="w-full lg:w-3/4">
                            {filteredCategories.length === 0 ? (
                                <div className="bg-[#fefefe] rounded-3xl p-12 text-center border border-neutral-100 shadow-sm">
                                    <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4 text-neutral-400">
                                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-bold text-neutral-900 mb-2">No results found for "{searchQuery}"</h3>
                                    <p className="text-neutral-500 text-sm max-w-sm mx-auto">We couldn't find any FAQs matching your search. Please try different keywords or contact us directly.</p>
                                    <button
                                        onClick={() => setSearchQuery("")}
                                        className="mt-6 text-[color:var(--color-primary)] text-sm font-medium hover:underline"
                                    >
                                        Clear search
                                    </button>
                                </div>
                            ) : (
                                <div className="space-y-16">
                                    {filteredCategories.map((category: FAQCategory) => (
                                        <div key={category.id} id={category.id}>
                                            <Reveal>
                                                <div className="mb-6 flex items-center gap-4">
                                                    <div className="w-10 h-10 rounded-xl bg-[color:var(--color-primary)]/10 text-[color:var(--color-primary)] flex items-center justify-center shrink-0">
                                                        {category.icon}
                                                    </div>
                                                    <h2 className="text-2xl font-bold text-[color:var(--color-slate-dark)]">
                                                        {category.label}
                                                    </h2>
                                                </div>
                                            </Reveal>

                                            <StaggerGroup>
                                                <div className="mt-4">
                                                    <FAQ items={category.data} />
                                                </div>
                                            </StaggerGroup>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </section>

            {/* Extra Support CTA / Footer Hook */}
            <section className="section-space relative">
                <div className="container-grid">
                    <MaskReveal className="relative rounded-3xl overflow-hidden">
                        {/* Background gradient - full bleed dalam card */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-primary)]/5 via-[color:var(--color-accent)]/5 to-[color:var(--color-secondary)]/5" />

                        {/* Animated background orbs - dalam card */}
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[color:var(--color-primary)]/20 rounded-full blur-3xl animate-pulse-slow" />
                            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[color:var(--color-accent)]/20 rounded-full blur-3xl animate-pulse-slow-delayed" />
                        </div>

                        <Reveal>
                            <div className="relative card-glass border border-white/50 rounded-3xl p-8 lg:p-10 backdrop-blur-xl">
                                <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                                    <div>
                                        <p className="badge-gradient inline-flex mb-3">Get started</p>
                                        <SplitTextHeading
                                            text="Complex accounting? Clear answers."
                                            as="h2"
                                            className="text-3xl font-semibold text-[color:var(--color-slate-dark)]"
                                        />
                                        <p className="mt-3 text-sm text-[color:var(--color-slate-light)]">
                                            Stop guessing about your Indonesian tax obligations. Get a definitive roadmap from our certified accountants and business advisors.
                                        </p>
                                        <div className="mt-4 glow-bar glow-bar-md" />
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        <Link href={primaryCta.href} className="btn-primary shimmer">
                                            {primaryCta.label}
                                        </Link>
                                        <a
                                            href={secondaryCta.href}
                                            className="btn-secondary"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {secondaryCta.label}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </MaskReveal>
                </div>
            </section>
        </>
    );
}
