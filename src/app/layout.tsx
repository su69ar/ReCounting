import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyWhatsApp } from "@/components/layout/StickyWhatsApp";
import { siteConfig } from "@/lib/site";
import { organizationSchema, localBusinessSchema, websiteSchema } from "@/lib/schema";
import { MotionProvider } from "@/components/animations/MotionProvider";
import { HoverInteractions } from "@/components/animations/HoverInteractions";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { GrainOverlay } from "@/components/GrainOverlay";
import { ConsentBanner } from "@/components/ConsentBanner";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "ReCounting | Accounting & Bookkeeping Services in Bali",
    template: "%s | ReCounting",
  },
  description: siteConfig.description,
  applicationName: "ReCounting",
  keywords: [
    "accounting services Bali",
    "bookkeeper Bali",
    "tax compliance Indonesia",
    "payroll services Bali",
    "expat accountant Bali",
    "jasa akuntan Bali",
    "pembukuan usaha Bali",
    "konsultan pajak Bali",
  ],
  authors: [{ name: "ReCounting", url: siteConfig.url }],
  creator: "ReCounting",
  publisher: "ReCounting",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_ID",
    url: siteConfig.url,
    title: "ReCounting | Accounting & Bookkeeping Services in Bali",
    description: siteConfig.description,
    siteName: "ReCounting",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "ReCounting | Accounting & Bookkeeping Services in Bali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ReCounting | Accounting & Bookkeeping Services in Bali",
    description: siteConfig.description,
    images: ["/twitter-image"],
  },
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // TODO: Add actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${sora.variable}`} suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5BRHQP1441"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5BRHQP1441');
          `}
        </Script>

        {/* Structured Data for SEO & AI Search */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <ConsentBanner />
        <GrainOverlay />
        <MotionProvider />
        <HoverInteractions />
        <ScrollProgress />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <StickyWhatsApp />
      </body>
    </html>
  );
}

