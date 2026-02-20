import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { FAQClient } from "./FAQClient";
import { categorization } from "./faqData";

export const metadata: Metadata = {
    title: "FAQ & Help Center | ReCounting Bali Accounting",
    description:
        "Find comprehensive answers to common questions about accounting, bookkeeping, tax compliance (PPN, PPh, SPT), and our services for your Bali-based business. English-first expert support.",
    alternates: {
        canonical: "/accounting-services-faq-help-center",
    },
};

export default function FAQPage() {
    const allCurrentFaqs = categorization.flatMap(cat => cat.data);

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: allCurrentFaqs.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
            },
        })),
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
            {
                "@type": "ListItem",
                position: 2,
                name: "FAQ & Help Center",
                item: `${siteConfig.url}/accounting-services-faq-help-center`,
            },
        ],
    };

    return (
        <>
            <JsonLd data={breadcrumbSchema} />
            <JsonLd data={faqSchema} />
            <FAQClient />
        </>
    );
}
