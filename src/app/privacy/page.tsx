import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "ReCounting privacy policy covering data collection, usage, cookies, and your rights under Indonesian PDP Law.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="section-space">
      <div className="container-grid max-w-3xl space-y-6 text-sm text-[color:var(--color-slate-light)]">
        <h1 className="text-3xl font-semibold text-[color:var(--color-slate-dark)]">
          Privacy Policy
        </h1>
        <p className="text-xs">
          Last updated: February 18, 2026
        </p>

        <p>
          ReCounting (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the website
          recounting.my.id. This Privacy Policy explains how we collect, use,
          store, and protect your personal information when you visit our website
          or use our accounting and bookkeeping services.
        </p>

        <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)] pt-4">
          1. Information We Collect
        </h2>
        <p>We collect the following types of information:</p>
        <p className="font-semibold text-[color:var(--color-slate-dark)]">
          Information you provide directly:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Name, email address, and phone number when you submit a contact form or book a consultation</li>
          <li>Business name, transaction volume, and service preferences when you request a quote</li>
          <li>Any additional information you share through WhatsApp, email, or phone conversations</li>
        </ul>
        <p className="font-semibold text-[color:var(--color-slate-dark)]">
          Information collected automatically:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Browser type, device information, and operating system</li>
          <li>IP address and approximate geographic location</li>
          <li>Pages visited, time spent on pages, and referral sources</li>
          <li>Cookies and similar tracking technologies (see Section 4)</li>
        </ul>

        <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)] pt-4">
          2. How We Use Your Information
        </h2>
        <p>We use the information we collect to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Respond to your inquiries and provide requested services</li>
          <li>Schedule and conduct consultations</li>
          <li>Send service-related communications and updates</li>
          <li>Improve our website performance and user experience</li>
          <li>Analyze website traffic and usage patterns through Google Analytics</li>
          <li>Comply with legal obligations under Indonesian law</li>
        </ul>
        <p>
          We do not sell, rent, or share your personal information with third
          parties for their marketing purposes.
        </p>

        <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)] pt-4">
          3. Legal Basis for Processing
        </h2>
        <p>
          We process your personal data based on the following legal grounds in
          accordance with Indonesia&apos;s Personal Data Protection Law (UU PDP No. 27
          of 2022):
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Your consent, which you provide when submitting forms or accepting cookies</li>
          <li>Legitimate interest in providing and improving our services</li>
          <li>Contractual necessity when delivering accounting services</li>
          <li>Legal obligations under Indonesian tax and business regulations</li>
        </ul>

        <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)] pt-4">
          4. Cookies and Tracking
        </h2>
        <p>
          Our website uses cookies and similar technologies. When you first visit
          our site, you will see a consent banner allowing you to accept or
          decline non-essential cookies.
        </p>
        <p className="font-semibold text-[color:var(--color-slate-dark)]">
          Cookies we use:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-[color:var(--color-slate-dark)]">Essential cookies:</span>{" "}
            Required for basic website functionality. These cannot be disabled.
          </li>
          <li>
            <span className="font-medium text-[color:var(--color-slate-dark)]">Analytics cookies (Google Analytics 4):</span>{" "}
            Help us understand how visitors interact with our website. These are
            only activated with your consent. Tracking ID: G-5BRHQP1441.
          </li>
        </ul>
        <p>
          You can withdraw your cookie consent at any time by clearing your
          browser cookies and revisiting the site.
        </p>

        <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)] pt-4">
          5. Third-Party Services
        </h2>
        <p>We use the following third-party services that may process your data:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-[color:var(--color-slate-dark)]">Google Analytics:</span>{" "}
            Website analytics and traffic measurement. Data may be transferred
            to Google servers. See{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-[color:var(--color-primary)]"
            >
              Google&apos;s Privacy Policy
            </a>.
          </li>
          <li>
            <span className="font-medium text-[color:var(--color-slate-dark)]">WhatsApp (Meta):</span>{" "}
            Client communication. Messages sent through WhatsApp are subject to{" "}
            <a
              href="https://www.whatsapp.com/legal/privacy-policy"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-[color:var(--color-primary)]"
            >
              WhatsApp&apos;s Privacy Policy
            </a>.
          </li>
          <li>
            <span className="font-medium text-[color:var(--color-slate-dark)]">Vercel:</span>{" "}
            Website hosting and deployment infrastructure.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)] pt-4">
          6. Data Retention
        </h2>
        <p>
          We retain your personal data only for as long as necessary to fulfill
          the purposes described in this policy:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Contact form submissions: retained for up to 2 years after your last interaction</li>
          <li>Client accounting records: retained as required by Indonesian tax law (minimum 10 years per UU KUP)</li>
          <li>Analytics data: retained according to Google Analytics default settings (14 months)</li>
        </ul>

        <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)] pt-4">
          7. Your Rights
        </h2>
        <p>
          Under Indonesia&apos;s PDP Law, you have the right to:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Access the personal data we hold about you</li>
          <li>Request correction of inaccurate or incomplete data</li>
          <li>Request deletion of your personal data (subject to legal retention requirements)</li>
          <li>Withdraw your consent for data processing</li>
          <li>Object to processing of your personal data</li>
          <li>Request data portability in a structured, commonly used format</li>
        </ul>
        <p>
          To exercise any of these rights, please contact us at{" "}
          <a
            href="mailto:recountingasia@gmail.com"
            className="underline hover:text-[color:var(--color-primary)]"
          >
            recountingasia@gmail.com
          </a>.
        </p>

        <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)] pt-4">
          8. Data Security
        </h2>
        <p>
          We implement appropriate technical and organizational measures to
          protect your personal data against unauthorized access, alteration,
          disclosure, or destruction. This includes encrypted data transmission
          (HTTPS), secure hosting infrastructure, and access controls for our
          team members.
        </p>
        <p>
          However, no method of transmission over the internet is 100% secure.
          We cannot guarantee absolute security of your data.
        </p>

        <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)] pt-4">
          9. International Data Transfers
        </h2>
        <p>
          Some of our third-party service providers (such as Google and Vercel)
          may process data outside of Indonesia. When data is transferred
          internationally, we ensure appropriate safeguards are in place as
          required by the PDP Law.
        </p>

        <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)] pt-4">
          10. Children&apos;s Privacy
        </h2>
        <p>
          Our services are not directed at individuals under 18 years of age. We
          do not knowingly collect personal data from children. If you believe we
          have collected data from a minor, please contact us immediately.
        </p>

        <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)] pt-4">
          11. Changes to This Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or applicable laws. We will post the updated policy on
          this page with a revised &quot;Last updated&quot; date. We encourage you to
          review this page periodically.
        </p>

        <h2 className="text-xl font-semibold text-[color:var(--color-slate-dark)] pt-4">
          12. Contact Us
        </h2>
        <p>
          If you have questions about this Privacy Policy or wish to exercise
          your data rights, please contact us:
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
