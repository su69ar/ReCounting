"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import { useMagneticButton } from "@/hooks/useMagneticButton";
import { MegaMenu } from "./MegaMenu";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

const mobileServices = [
  {
    title: "Bookkeeping",
    href: "/services/bookkeeping",
    description: "Monthly accounting & reconciliations",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <rect x="3" y="3" width="18" height="18" rx="2" strokeLinecap="round"/>
        <path d="M7 7h10M7 12h10M7 17h6" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Tax Compliance",
    href: "/services/tax-compliance",
    description: "PPh, PPN & SPT filings",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round"/>
        <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Payroll",
    href: "/services/payroll",
    description: "Staff salaries & BPJS",
    badge: "Soon",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Business Setup",
    href: "/services/initial-setup",
    description: "Company registration",
    badge: "Soon",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M3 21h18M5 21V7l8-4 8 4v14M8 21V11h8v10" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const ctaMagnetic = useMagneticButton<HTMLAnchorElement>({ strength: 0.15 });

  useGSAP(() => {
    if (!headerRef.current) return;

    ScrollTrigger.create({
      start: "top -80",
      onUpdate: (self) => {
        setIsScrolled(self.progress > 0);
      },
    });

    const navLinks = headerRef.current.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      const underline = link.querySelector(".nav-underline");
      if (!underline) return;

      link.addEventListener("mouseenter", () => {
        gsap.to(underline, {
          scaleX: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      link.addEventListener("mouseleave", () => {
        gsap.to(underline, {
          scaleX: 0,
          duration: 0.3,
          ease: "power2.in",
        });
      });
    });
  }, { scope: headerRef });

  useEffect(() => {
    if (isMobileMenuOpen) {
      gsap.from(".mobile-nav-item", {
        x: 20,
        autoAlpha: 0,
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.out",
      });
    }
  }, [isMobileMenuOpen]);

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-[100] w-full transition-all duration-300 ${isScrolled
          ? "bg-white/90 backdrop-blur-lg border-b border-neutral-200 shadow-sm"
          : "bg-transparent"
        }`}
    >
      <div className="container-grid">
        <div className="flex h-20 items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="flex h-10 w-auto items-center justify-center transition-opacity hover:opacity-90">
              <img
                src="/assets/logo.png"
                alt="ReCounting Logo"
                className="h-10 w-auto object-contain"
              />
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {/* Mega Menu for Services */}
            <MegaMenu />
            
            {/* Regular nav items */}
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link relative text-sm font-medium text-neutral-700 
                         hover:text-primary-600 transition-colors"
              >
                {item.label}
                <span
                  className="nav-underline absolute -bottom-1 left-0 right-0 h-0.5 
                           bg-primary-500 origin-left scale-x-0"
                />
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/free-consultation"
              className="btn-primary"
              {...ctaMagnetic}
            >
              Get Free Consultation
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-full 
                     border border-neutral-200 text-neutral-700"
            aria-label="Toggle menu"
          >
            <svg
              viewBox="0 0 24 24"
              className={`h-5 w-5 transition-transform duration-300 ${isMobileMenuOpen ? "rotate-45" : ""
                }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white 
                      border-b border-neutral-200 shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="container-grid py-4">
            <nav className="flex flex-col">
              {/* Expandable Services Section */}
              <MobileServicesMenu onClose={() => setIsMobileMenuOpen(false)} />
              
              {/* Divider */}
              <div className="h-px bg-neutral-200 my-3" />
              
              {/* Regular nav items */}
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="mobile-nav-item text-sm font-medium text-neutral-700 
                           py-3 px-2 rounded-lg hover:bg-neutral-50 hover:text-primary-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Simple CTA - Same as navbar */}
              <div className="mt-4">
                <Link
                  href="/free-consultation"
                  className="btn-primary w-full flex items-center justify-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Free Consultation
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

// Mobile Services Expandable Menu Component
function MobileServicesMenu({ onClose }: { onClose: () => void }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mobile-nav-item">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between py-3 px-2 rounded-lg hover:bg-neutral-50 transition-colors"
      >
        <span className="text-sm font-medium text-neutral-700">Services</span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`w-4 h-4 text-neutral-500 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Expandable Services List */}
      <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="pt-2 pb-1 pl-2 space-y-1">
          {mobileServices.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              onClick={onClose}
              className="flex items-center gap-3 py-3 px-3 rounded-xl hover:bg-neutral-50 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary-500 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                {service.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-sm text-neutral-800 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </span>
                  {service.badge && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-500 font-medium">
                      {service.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-neutral-500 mt-0.5">{service.description}</p>
              </div>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-4 h-4 text-neutral-300 group-hover:text-primary-500 group-hover:translate-x-1 transition-all"
              >
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          ))}
          
          {/* View All Services Link */}
          <Link
            href="/services"
            onClick={onClose}
            className="flex items-center justify-center gap-2 py-3 px-3 mt-2 rounded-xl bg-neutral-50 hover:bg-neutral-100 transition-colors"
          >
            <span className="text-sm font-medium text-primary-600">View All Services</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-primary-600">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
