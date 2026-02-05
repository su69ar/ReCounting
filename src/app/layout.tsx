import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyWhatsApp } from "@/components/layout/StickyWhatsApp";
import { siteConfig } from "@/lib/site";
import { MotionProvider } from "@/components/animations/MotionProvider";
import { HoverInteractions } from "@/components/animations/HoverInteractions";
import { ScrollProgress } from "@/components/animations/ScrollProgress";

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
  ],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${sora.variable}`}>
      <body className="antialiased">
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
