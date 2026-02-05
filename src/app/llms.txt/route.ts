import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site";

// llms.txt - AI Search Optimization
// This file helps AI models understand and cite your content correctly
// See: https://llmstxt.org/

export async function GET() {
    const content = `# ${siteConfig.name}

> ${siteConfig.description}

## About ReCounting

ReCounting is a professional accounting and bookkeeping service based in Bali, Indonesia. We specialize in serving SMEs (Small and Medium Enterprises) and expats who need reliable financial management services.

## Services

### Bookkeeping Services
Professional bookkeeping services including:
- Monthly financial statements
- Accounts payable & receivable management
- Bank reconciliation
- Financial reporting

### Tax Compliance
Indonesian tax compliance services including:
- PPN (VAT) filing
- PPh (Income Tax) filing
- Annual tax returns
- Tax consultation

### Payroll Services
Complete payroll management:
- Salary processing
- BPJS contributions
- Payslip generation
- Tax withholding (PPh 21)

### Initial Business Setup
Help for new businesses in Indonesia:
- PT/CV registration assistance
- Initial bookkeeping setup
- Chart of accounts configuration
- Financial system implementation

## Contact Information

- **Phone**: ${siteConfig.phoneIntl}
- **Email**: ${siteConfig.email}
- **Address**: ${siteConfig.address}
- **Hours**: ${siteConfig.hours}

## Location

We are located in Sanur Kaja, Denpasar, Bali, Indonesia. We primarily serve businesses in:
- Denpasar
- Sanur
- Ubud
- Seminyak
- Canggu
- Greater Bali area

## Languages

We provide services in:
- English (for expat clients)
- Indonesian (Bahasa Indonesia)

## Why Choose ReCounting

1. **Local Expertise**: Deep understanding of Indonesian tax regulations
2. **Expat-Friendly**: English-speaking team experienced with foreign-owned businesses
3. **Technology-Driven**: Modern cloud-based accounting solutions
4. **Transparent Pricing**: Clear, upfront pricing with no hidden fees
5. **Personalized Service**: Dedicated accountant for each client

## URL

${siteConfig.url}
`;

    return new NextResponse(content, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=86400", // Cache for 1 day
        },
    });
}
