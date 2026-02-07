"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import { motionTokens, prefersReducedMotion } from "@/lib/motion";
import { siteConfig } from "@/lib/site";

const footerLinks = {
  services: [
    { label: "Bookkeeping", href: "/services/bookkeeping" },
    { label: "Tax Compliance", href: "/services/tax-compliance" },
    { label: "Payroll", href: "/services/payroll", badge: "Soon" },
    { label: "Initial Setup", href: "/services/initial-setup" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Free Consultation", href: "/free-consultation" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", href: siteConfig.socials.linkedin, icon: "linkedin" },
  { name: "Instagram", href: siteConfig.socials.instagram, icon: "instagram" },
  { name: "WhatsApp", href: `https://wa.me/${siteConfig.phoneIntl.replace(/\D/g, "")}`, icon: "whatsapp" },
];

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  // Ensure visibility immediately on mount
  useEffect(() => {
    if (!footerRef.current) return;
    
    // Force visibility immediately
    const sections = footerRef.current.querySelectorAll(".footer-section");
    gsap.set(sections, { opacity: 1, y: 0, visibility: "visible" });
    
    // Refresh ScrollTrigger after a short delay
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  useGSAP(() => {
    if (!footerRef.current) return;
    
    const prefersReduced = prefersReducedMotion();
    
    // Skip animation if user prefers reduced motion
    if (prefersReduced) return;
    
    // Skip if already animated this session
    if (hasAnimated.current) {
      gsap.set(".footer-section", { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      // Animate from hidden state only once
      gsap.fromTo(
        ".footer-section",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.06,
          ease: motionTokens.ease.enter,
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 98%", // Almost at bottom
            toggleActions: "play none none none", // Only play once
            once: true,
            onEnter: () => {
              hasAnimated.current = true;
            },
          },
          overwrite: "auto",
        }
      );

      const links = footerRef.current?.querySelectorAll(".footer-link");
      links?.forEach((link) => {
        link.addEventListener("mouseenter", () => {
          gsap.to(link, {
            x: 4,
            color: "var(--color-primary-500)",
            duration: 0.2,
            ease: "power2.out",
          });
        });
        link.addEventListener("mouseleave", () => {
          gsap.to(link, {
            x: 0,
            color: "var(--color-neutral-600)",
            duration: 0.2,
            ease: "power2.out",
          });
        });
      });

      const socials = footerRef.current?.querySelectorAll(".social-icon");
      socials?.forEach((icon) => {
        icon.addEventListener("mouseenter", () => {
          gsap.to(icon, {
            scale: 1.15,
            rotation: 5,
            duration: 0.3,
            ease: "back.out(2)",
          });
        });
        icon.addEventListener("mouseleave", () => {
          gsap.to(icon, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    }, footerRef);

    return () => ctx.revert();
  }, { scope: footerRef });

  return (
    <footer ref={footerRef} className="border-t border-neutral-200 bg-white" style={{ opacity: 1, visibility: "visible" }}>
      <div className="container-grid py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="footer-section space-y-6" style={{ opacity: 1, visibility: "visible" }}>
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl 
                             bg-gradient-to-br from-primary-500 to-accent-500 text-white">
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
                  <path d="M6 4.5h9.5a2 2 0 0 1 2 2V8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                  <path d="M6 4.5h8.5a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                  <path d="M7.5 9.2h6.5M7.5 12.2h4.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                  <path d="m17 13.8 1.6 1.6 3.1-3.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="text-xl font-bold tracking-tight text-neutral-900">
                ReCounting
              </span>
            </div>
            
            <p className="text-sm text-neutral-500 max-w-xs leading-relaxed">
              Stress-free accounting, bookkeeping, and tax compliance for SMEs and 
              expats across Bali. Your trusted finance partner on the ground.
            </p>

            <div className="space-y-3">
              <a 
                href={`mailto:${siteConfig.email}`}
                className="footer-link flex items-center gap-2 text-sm text-neutral-600"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {siteConfig.email}
              </a>
              <a 
                href={`tel:${siteConfig.phoneIntl}`}
                className="footer-link flex items-center gap-2 text-sm text-neutral-600"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {siteConfig.phone}
              </a>
              <p className="flex items-center gap-2 text-sm text-neutral-500">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {siteConfig.hours}
              </p>
            </div>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon flex h-10 w-10 items-center justify-center 
                           rounded-full bg-neutral-100 text-neutral-600
                           hover:bg-primary-500 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <SocialIcon name={social.icon} />
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section space-y-4" style={{ opacity: 1, visibility: "visible" }}>
            <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wide">
              Services
            </h3>
            <nav className="flex flex-col gap-2">
              {footerLinks.services.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="footer-link text-sm text-neutral-600 flex items-center gap-2"
                >
                  {link.label}
                  {link.badge && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-accent-100 text-accent-700">
                      {link.badge}
                    </span>
                  )}
                </Link>
              ))}
            </nav>
          </div>

          <div className="footer-section space-y-4" style={{ opacity: 1, visibility: "visible" }}>
            <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wide">
              Company
            </h3>
            <nav className="flex flex-col gap-2">
              {footerLinks.company.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="footer-link text-sm text-neutral-600"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="footer-section space-y-4" style={{ opacity: 1, visibility: "visible" }}>
            <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wide">
              Resources
            </h3>
            <nav className="flex flex-col gap-2">
              {footerLinks.resources.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="footer-link text-sm text-neutral-600"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-200 
                      flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} ReCounting. All rights reserved.
          </p>
          <p className="text-xs text-neutral-400 max-w-lg">
            Legal: Accounting guidance is educational only and not legal or tax advice. 
            Always verify with licensed professionals.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ name }: { name: string }) {
  switch (name) {
    case "linkedin":
      return (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case "instagram":
      return (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      );
    default:
      return null;
  }
}
