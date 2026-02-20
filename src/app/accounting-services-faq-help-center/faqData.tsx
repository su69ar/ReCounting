import React, { ReactNode } from "react";

export interface FAQItem {
    question: string;
    answer: string;
}

export interface FAQCategory {
    id: string;
    label: string;
    icon: ReactNode;
    data: FAQItem[];
}

export const categorization: FAQCategory[] = [
    {
        id: "general",
        label: "General Accounting & Bookkeeping",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        ),
        data: [
            { question: "What is included in your monthly bookkeeping service?", answer: "Our monthly bookkeeping includes recording all financial transactions (income, expenses, payroll), reconciling bank statements, categorizing assets and liabilities, and delivering clear monthly financial reports (Profit & Loss, Balance Sheet, Cash Flow)." },
            { question: "Do you use cloud accounting software?", answer: "Yes, we exclusively use modern cloud accounting platforms like Xero, QuickBooks Online, and Jurnal.id. This ensures you have 24/7 access to your financial data from anywhere in the world." },
            { question: "How often do I get financial reports?", answer: "We provide comprehensive financial reports on a monthly basis. These are typically delivered within the first two weeks of the following month, provided we receive all necessary bank statements and receipts on time." },
            { question: "What if my past books are a mess?", answer: "We offer historical cleanup services. Our team will go back through your past bank statements and receipts, correctly categorize historical transactions, and rebuild your financial statements to ensure accuracy moving forward." },
            { question: "Do I need a dedicated in-house accountant if I hire you?", answer: "No. For most SMEs in Bali, hiring ReCounting eliminates the need for a full-time in-house accountant. We act as your entire finance department for a fraction of the cost." },
        ]
    },
    {
        id: "tax",
        label: "Tax & Compliance (PPh, PPN, SPT)",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
        data: [
            { question: "What are the common deadlines for corporate taxes in Indonesia?", answer: "Monthly tax payments (like PPh 21, 23, 25, 4(2)) are generally due by the 10th or 15th of the following month, with reporting due by the 20th. VAT (PPN) payments and reporting are due at the end of the following month. Annual corporate tax returns (SPT Tahunan Badan) are due by April 30th." },
            { question: "What is PPN (VAT) and when do I need to register as a PKP?", answer: "PPN is Indonesia's Value Added Tax, currently at 11%. Your company must register as a Taxable Entrepreneur (Pengusaha Kena Pajak / PKP) to collect and report PPN if your annual gross revenue exceeds IDR 4.8 billion. Voluntary registration is also possible before reaching this threshold." },
            { question: "I am a foreigner with a PMA. Do I need to pay personal income tax in Indonesia?", answer: "If you reside in Indonesia for more than 183 days in a 12-month period, you become a local tax resident and are subject to Indonesian personal income tax (PPh 21/Orang Pribadi) on your worldwide income. We highly recommend consulting with us to optimize your tax structure." },
            { question: "What is SPT?", answer: "SPT (Surat Pemberitahuan Tahunan) is the official tax return form. There are monthly SPTs (SPT Masa) for ongoing withholding taxes, and annual SPTs (SPT Tahunan) for personal and corporate income tax declarations." },
            { question: "How do you help prevent tax penalties?", answer: "We maintain a strict internal compliance calendar for every client. You will receive automated reminders and direct WhatsApp follow-ups well before any payment or reporting deadline, ensuring zero late fees." },
        ]
    },
    {
        id: "setup",
        label: "Company Setup & Migration",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
        data: [
            { question: "Do you help setup new PT PMA companies in Bali?", answer: "While our core focus is accounting and tax, we have trusted legal partners in Bali who specialize in PMA and Local PT setups. We work alongside them to ensure your company's initial capitalization and tax registrations (NPWP, E-FIN) are configured correctly from day one." },
            { question: "We are migrating from another accounting firm. How does the handover work?", answer: "We make transitions seamless. We will request the exact trial balance, ledgers, and existing tax login credentials from your previous provider. We verify opening balances, set up your new cloud dashboard, and take over ongoing compliance without disrupting your business." },
            { question: "What is included in the 'Initial Setup' package?", answer: "The Initial Setup package establishes your financial foundation. It includes customizing your Chart of Accounts, recording opening balances, importing your fixed asset register (up to standard limits), and configuring your Accounts Payable and Receivable ledgers to match your real-world operations." },
        ]
    },
    {
        id: "payroll",
        label: "Payroll & HR (BPJS)",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        ),
        data: [
            { question: "Do you handle BPJS Ketenagakerjaan and Kesehatan?", answer: "Yes. Our payroll services include calculating, deducting, and reporting both BPJS Healthcare (Kesehatan) and BPJS Employment (Ketenagakerjaan) contributions for your local and expatriate staff." },
            { question: "How does PPh 21 (employee income tax) work?", answer: "Employers in Indonesia are required to withhold personal income tax (PPh 21) from their employees' salaries every month and remit it to the tax office. We run these complex calculations (including the new TER methodology) and generate the tax slips for your staff." },
            { question: "Do we approve payroll before it is sent?", answer: "Absolutely. We prepare the payroll calculations, tax deductions, and BPJS contributions into a clear summary sheet. Once you approve it, we generate the final payslips and the bank transfer file for you to execute." },
        ]
    },
    {
        id: "pricing",
        label: "Pricing & Engagement",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        data: [
            { question: "How do you calculate your pricing?", answer: "Our monthly bookkeeping and compliance packages are tiered based on the volume of transactions and the complexity of your business operations. A 'transaction' includes any bank movement, sales invoice, or purchase bill." },
            { question: "Are there any hidden fees or surprise invoices?", answer: "No. We operate on fixed-fee monthly retainers. You will always know exactly what you are paying. If your transaction volume grows into the next tier, we will discuss and agree on the new pricing before making any changes." },
            { question: "Do you lock clients into long-term contracts?", answer: "We require an initial 3-month commitment to ensure we can properly clean up and establish your onboarding workflow. After that, we operate on flexible rolling monthly agreements with a 30-day cancellation notice." },
        ]
    },
    {
        id: "data-security",
        label: "Client Data & Security",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
        ),
        data: [
            { question: "How does ReCounting protect my data and sensitive financial information?", answer: "We take data security very seriously. All client data is stored on highly secure, enterprise-grade cloud servers (like Xero and Google Workspace) that utilize strict encryption protocols. Access to your financial records is restricted exclusively to the specific accounting team members assigned to your account." },
            { question: "Will my business data be shared with or sold to third parties?", answer: "Absolutely not. Your financial data is strictly confidential. We will never share, sell, or distribute your business performance metrics, customer lists, or financial data to any unauthorized outside parties. The only exception is when we are legally required to submit necessary tax declarations to the Indonesian government on your behalf." },
            { question: "How can I access the data you have on my business?", answer: "Your data always belongs to you. Since we utilize cloud-based accounting platforms, you maintain 24/7 administrative access to your live ledgers. You can view, export, or download your financial records and reports at any time. Upon contract termination, full control and ownership of the software subscription is smoothly handed back to you." },
        ]
    }
];
