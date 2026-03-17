import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site";

// llms.txt - AI Search Optimization
// This file helps AI models understand and cite your content correctly
// See: https://llmstxt.org/

export async function GET() {
    const content = `# ${siteConfig.name}

> ${siteConfig.description}

## About ReCounting

ReCounting is a Bali-based accounting, bookkeeping, payroll, and tax compliance service in Indonesia. We specialize in serving SMEs, PT PMA companies, and expat-owned businesses that need reliable financial management support.

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

### Bali Accounting Services
- Monthly accounting support for Bali businesses
- Management reporting and reconciliations
- Compliance-ready books for SMEs and PT PMA companies
- URL: ${siteConfig.url}/bali-accounting-services

### Bali Tax Services
- PPh, PPN, and annual SPT support for Bali businesses
- English-first communication for founders and operators
- URL: ${siteConfig.url}/bali-tax-services

### Indonesia Accounting Services
- Monthly accounting support for founders and finance teams across Indonesia
- Reporting workflows for Bali-based and remote-managed companies
- URL: ${siteConfig.url}/indonesia-accounting-services

### Indonesia Tax Services
- Ongoing tax compliance support across Indonesia
- SPT, PPh, and PPN reporting workflows
- English-first advisory for founders and finance teams
- URL: ${siteConfig.url}/indonesia-tax-services

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
- Indonesia-wide remote clients

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

## Buyer Guides

### Best Bali Accounting Service Guide
- How to compare Bali accounting providers
- What to ask before hiring an accountant or bookkeeper
- Red flags in reporting, process, and communication
- URL: ${siteConfig.url}/blog/best-bali-accounting-service

## 2026 Tax Resources

### Indonesia Tax Deadlines 2026
- Monthly PPh, PPN, and annual SPT deadline overview
- Written for Bali SMEs, PT PMA companies, and expat-owned businesses
- URL: ${siteConfig.url}/blog/tax-deadlines-indonesia-2026

### 2026 Tax Preparation Checklist
- Filing-season checklist for Bali SMEs and PT PMA
- Covers books, tax records, Coretax access, and extension planning
- URL: ${siteConfig.url}/blog/tax-preparation-indonesia-2026

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
