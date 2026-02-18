import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "ReCounting terms of service covering service scope, payment terms, liability, and governing law.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <section className="section-space">
      <div className="container-grid max-w-3xl space-y-6 text-sm text-[color:var(--color-slate-light)]">
        <h1 className="text-3xl font-semibold text-[color:var(--color-slate-dark)]">
          Terms of Service
        </h1>
        <p className="text-xs">
          Last updated: February 18, 2026
        </p>

        <p>
          These Terms of Service (&quot;Terms&quot;) govern your use of the ReCounting
          website (recounting.my.id) and any accounting, bookkeeping, or tax
          compliance services (&quot;Services&quot;) provided by ReCounting (&quot;we,&quot;
          &quot;us,&quot; or &quot;our&quot;). By accessing our website or engaging our Services,
          you agree to be bound by these Terms.
        </p>

        <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)] pt-4">
          1. Services Overview
        </h2>
        <p>
          ReCounting provides accounting, bookkeeping, tax compliance, and
          related financial services for businesses operating in Indonesia,
          with a focus on SMEs and expat-owned companies in Bali. Our services
          include but are not limited to:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Monthly bookkeeping, transaction entry, and bank reconciliation</li>
          <li>Tax compliance and filing (PPh, PPN, SPT)</li>
          <li>Financial reporting and compliance documentation</li>
          <li>Business setup support and NPWP registration</li>
          <li>Payroll processing and BPJS management</li>
        </ul>
        <p>
          The specific scope of services will be agreed upon during the
          consultation process and outlined in a separate service agreement or
          engagement letter.
        </p>

        <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)] pt-4">
          2. Client Responsibilities
        </h2>
        <p>To enable us to deliver our Services effectively, you agree to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Provide accurate, complete, and timely financial records, bank statements, and supporting documents</li>
          <li>Respond to our requests for information within a reasonable timeframe</li>
          <li>Ensure that all information provided to us is truthful and not misleading</li>
          <li>Notify us promptly of any changes to your business structure, ownership, or operations that may affect our Services</li>
          <li>Maintain your own backup copies of all financial documents and records</li>
        </ul>
        <p>
          Delays or inaccuracies in the information you provide may result in
          delayed deliverables, additional charges, or penalties imposed by
          Indonesian tax authorities, for which ReCounting will not be held
          responsible.
        </p>

        <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)] pt-4">
          3. Fees and Payment
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Service fees will be quoted during the consultation process and confirmed in writing before work begins</li>
          <li>Monthly service fees are billed at the beginning of each service period and are due within 14 days of the invoice date</li>
          <li>One-time project fees (such as business setup or catch-up bookkeeping) will be quoted separately</li>
          <li>Payments can be made via bank transfer to our designated Indonesian bank account</li>
          <li>Late payments may incur a fee of 2% per month on the outstanding balance</li>
          <li>We reserve the right to suspend services if payment is overdue by more than 30 days</li>
        </ul>
        <p>
          All fees are quoted in Indonesian Rupiah (IDR) unless otherwise agreed
          in writing.
        </p>

        <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)] pt-4">
          4. Confidentiality
        </h2>
        <p>
          We treat all client financial data, business information, and personal
          data as strictly confidential. We will not disclose your information
          to any third party without your written consent, except:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>When required by Indonesian law or regulation (including tax reporting to DJP)</li>
          <li>When necessary to fulfill our service obligations (such as filing tax returns on your behalf)</li>
          <li>To our professional advisors under obligations of confidentiality</li>
        </ul>

        <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)] pt-4">
          5. Limitation of Liability
        </h2>
        <p>
          While we exercise professional care and diligence in delivering our
          Services:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Our services are based on the information and documents you provide. We are not responsible for errors arising from inaccurate or incomplete information provided by you</li>
          <li>We do not provide legal advice. For legal matters, we recommend consulting a licensed attorney</li>
          <li>Tax positions and compliance strategies are based on our professional interpretation of current Indonesian tax law. Tax authorities may take a different position</li>
          <li>Our total liability for any claim arising from our Services shall not exceed the total fees paid by you in the 12 months preceding the claim</li>
          <li>We are not liable for indirect, consequential, or incidental damages, including lost profits or business opportunities</li>
        </ul>

        <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)] pt-4">
          6. Intellectual Property
        </h2>
        <p>
          All content on our website, including text, graphics, logos, and
          design elements, is the property of ReCounting and is protected by
          applicable intellectual property laws. You may not reproduce,
          distribute, or create derivative works without our written permission.
        </p>
        <p>
          Financial reports and documents we prepare for you as part of our
          Services belong to you upon full payment of the applicable fees.
        </p>

        <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)] pt-4">
          7. Termination
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Either party may terminate the service agreement by providing 30 days written notice</li>
          <li>We may terminate services immediately if you fail to pay fees after reasonable notice, provide fraudulent or misleading information, or use our services for illegal purposes</li>
          <li>Upon termination, all outstanding fees for work completed become immediately due</li>
          <li>We will return or make available all client documents and records within 30 days of termination</li>
        </ul>

        <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)] pt-4">
          8. Website Use
        </h2>
        <p>When using our website, you agree not to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Use the website for any unlawful purpose</li>
          <li>Attempt to gain unauthorized access to our systems</li>
          <li>Transmit malicious code, viruses, or harmful data</li>
          <li>Scrape, copy, or reproduce website content without permission</li>
        </ul>
        <p>
          The information on our website is provided for general informational
          purposes only and does not constitute professional accounting or tax
          advice. For advice specific to your situation, please book a
          consultation.
        </p>

        <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)] pt-4">
          9. Dispute Resolution
        </h2>
        <p>
          In the event of any dispute arising from these Terms or our Services,
          both parties agree to first attempt resolution through good-faith
          negotiation. If a resolution cannot be reached within 30 days, the
          dispute shall be submitted to mediation in Denpasar, Bali.
        </p>
        <p>
          If mediation is unsuccessful, the dispute shall be settled by the
          competent court in Denpasar, Bali, Indonesia.
        </p>

        <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)] pt-4">
          10. Governing Law
        </h2>
        <p>
          These Terms are governed by and construed in accordance with the laws
          of the Republic of Indonesia. Any legal proceedings shall be subject
          to the exclusive jurisdiction of the courts of Denpasar, Bali,
          Indonesia.
        </p>

        <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)] pt-4">
          11. Force Majeure
        </h2>
        <p>
          Neither party shall be liable for failure to perform obligations due
          to circumstances beyond reasonable control, including but not limited
          to natural disasters, government actions, changes in regulations,
          internet or power outages, or pandemics.
        </p>

        <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)] pt-4">
          12. Changes to These Terms
        </h2>
        <p>
          We reserve the right to update these Terms at any time. Changes will
          be posted on this page with a revised &quot;Last updated&quot; date. Continued
          use of our website or Services after changes constitutes acceptance of
          the updated Terms.
        </p>

        <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)] pt-4">
          13. Contact Us
        </h2>
        <p>
          If you have questions about these Terms of Service, please contact us:
        </p>
        <ul className="list-none space-y-1 pl-0">
          <li><span className="font-medium text-[color:var(--color-slate-dark)]">Email:</span> recountingasia@gmail.com</li>
          <li><span className="font-medium text-[color:var(--color-slate-dark)]">Phone:</span> +62 811-3940-4640</li>
          <li><span className="font-medium text-[color:var(--color-slate-dark)]">Address:</span> Jalan Sedap Malam No 9A Sanur Kaja, Denpasar, Bali, Indonesia 80228</li>
        </ul>
      </div>
    </section>
  );
}
