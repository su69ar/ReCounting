import { siteConfig } from "./site";

// Organization Schema - untuk branding di SERP
export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/assets/ReCounting_Logo_Accounting_Services.png`,
        width: 512,
        height: 512,
    },
    image: `${siteConfig.url}/assets/ReCounting_Logo_Accounting_Services.png`,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phoneIntl,
    address: {
        "@type": "PostalAddress",
        streetAddress: "Jalan Sedap Malam No 9A",
        addressLocality: "Sanur Kaja, Denpasar",
        addressRegion: "Bali",
        postalCode: "80228",
        addressCountry: "ID",
    },
    sameAs: [
        siteConfig.socials.instagram,
        siteConfig.socials.linkedin,
        siteConfig.socials.facebook,
    ],
    contactPoint: [
        {
            "@type": "ContactPoint",
            telephone: siteConfig.phoneIntl,
            contactType: "customer service",
            areaServed: ["ID"],
            availableLanguage: ["English", "Indonesian"],
        },
    ],
};

// LocalBusiness Schema - untuk Local SEO (Google Maps, Local Pack)
export const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "@id": `${siteConfig.url}#localbusiness`,
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}/assets/ReCounting_Logo_Accounting_Services.png`,
    description: siteConfig.description,
    telephone: siteConfig.phoneIntl,
    email: siteConfig.email,
    priceRange: "$$",
    address: {
        "@type": "PostalAddress",
        streetAddress: "Jalan Sedap Malam No 9A",
        addressLocality: "Sanur Kaja, Denpasar",
        addressRegion: "Bali",
        postalCode: "80228",
        addressCountry: "ID",
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: -8.6920,
        longitude: 115.2567,
    },
    openingHoursSpecification: [
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "17:00",
        },
    ],
    areaServed: [
        {
            "@type": "City",
            name: "Denpasar",
        },
        {
            "@type": "State",
            name: "Bali",
        },
    ],
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Accounting Services",
        itemListElement: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Bookkeeping Services",
                    description: "Professional bookkeeping for SMEs and expats in Bali",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Tax Compliance",
                    description: "Indonesian tax compliance and filing services",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Payroll Services",
                    description: "Complete payroll management for businesses in Bali",
                },
            },
        ],
    },
    sameAs: [
        siteConfig.socials.instagram,
        siteConfig.socials.linkedin,
        siteConfig.socials.facebook,
    ],
};

// WebSite Schema - untuk sitelinks search box
export const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
        "@id": `${siteConfig.url}#organization`,
    },
    potentialAction: {
        "@type": "ReadAction",
        target: siteConfig.url,
    },
};

// Service Page Schema Generator
export function generateServiceSchema(service: {
    name: string;
    description: string;
    url: string;
    image?: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.name,
        description: service.description,
        url: service.url,
        image: service.image || `${siteConfig.url}/assets/ReCounting_Logo_Accounting_Services.png`,
        provider: {
            "@id": `${siteConfig.url}#organization`,
        },
        areaServed: {
            "@type": "State",
            name: "Bali",
        },
    };
}

// Article Schema Generator untuk Blog
export function generateArticleSchema(article: {
    title: string;
    description: string;
    url: string;
    image?: string;
    datePublished: string;
    dateModified?: string;
    author?: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: article.title,
        description: article.description,
        url: article.url,
        image: article.image || `${siteConfig.url}/assets/ReCounting_Logo_Accounting_Services.png`,
        datePublished: article.datePublished,
        dateModified: article.dateModified || article.datePublished,
        author: {
            "@type": "Person",
            name: article.author || "ReCounting Team",
        },
        publisher: {
            "@id": `${siteConfig.url}#organization`,
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": article.url,
        },
    };
}

// FAQ Schema Generator
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };
}

// Breadcrumb Schema Generator
export function generateBreadcrumbSchema(
    items: { name: string; url: string }[]
) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
}
