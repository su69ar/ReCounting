"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";

const serviceCategories = [
  {
    title: "Accounting",
    services: [
      {
        title: "Bookkeeping",
        href: "/services/bookkeeping",
        description: "Monthly accounting & reconciliations",
        icon: "ledger",
      },
      {
        title: "Financial Reports",
        href: "/services/bookkeeping",
        description: "P&L, balance sheet & cash flow",
        icon: "chart",
      },
    ],
  },
  {
    title: "Tax & Compliance",
    services: [
      {
        title: "Tax Filing",
        href: "/services/tax-compliance",
        description: "PPh, PPN & SPT submissions",
        icon: "file",
      },
      {
        title: "Compliance Calendar",
        href: "/services/tax-compliance",
        description: "Deadlines & reminders",
        icon: "calendar",
      },
    ],
  },
  {
    title: "Business Services",
    services: [
      {
        title: "Payroll",
        href: "/services/payroll",
        description: "Staff salaries & BPJS",
        icon: "users",
        badge: "Soon",
      },
      {
        title: "Business Setup",
        href: "/services/initial-setup",
        description: "Company registration",
        icon: "building",
        badge: "Soon",
      },
    ],
  },
];

const Icons: Record<string, React.ReactNode> = {
  ledger: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <rect x="3" y="3" width="18" height="18" rx="2" strokeLinecap="round"/>
      <path d="M7 7h10M7 12h10M7 17h6" strokeLinecap="round"/>
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path d="M18 20V10M12 20V4M6 20v-6" strokeLinecap="round"/>
      <rect x="2" y="20" width="20" height="2" rx="1"/>
    </svg>
  ),
  file: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeLinecap="round"/>
      <path d="M14 2v6h6M9 13h6M9 17h6" strokeLinecap="round"/>
    </svg>
  ),
  calendar: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <rect x="3" y="4" width="18" height="18" rx="2" strokeLinecap="round"/>
      <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round"/>
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeLinecap="round"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round"/>
    </svg>
  ),
  building: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path d="M3 21h18M5 21V7l8-4 8 4v14M8 21V11h8v10" strokeLinecap="round"/>
    </svg>
  ),
};

export function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsOpen(true);
  };

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  useGSAP(() => {
    if (!panelRef.current || prefersReducedMotion()) return;
    if (isOpen) {
      gsap.fromTo(
        panelRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.2, ease: "power2.out" }
      );
      gsap.from(".mega-section", {
        y: 15,
        opacity: 0,
        duration: 0.2,
        stagger: 0.05,
        delay: 0.1,
        ease: "power2.out",
      });
    }
  }, [isOpen]);

  return (
    <div
      ref={menuRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger */}
      <button
        className={`flex items-center gap-1.5 py-2 text-sm font-medium transition-colors ${
          isOpen ? "text-primary-600" : "text-neutral-700 hover:text-primary-600"
        }`}
      >
        Services
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Mega Menu Panel */}
      {isOpen && (
        <div
          ref={panelRef}
          className="fixed top-[72px] left-0 right-0 z-[100] px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-[1100px] mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden">
              <div className="grid grid-cols-[280px_1fr]">
                {/* Left: Intro Section */}
                <div className="mega-section p-8 bg-neutral-50 border-r border-neutral-200">
                  <div className="text-[10px] font-bold text-primary-500 uppercase tracking-wider mb-4">
                    ReCounting Services
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Accounting Solutions for Bali Businesses
                  </h3>
                  <p className="text-sm text-neutral-600 mb-6 leading-relaxed">
                    We combine local expertise with modern accounting practices to help your business stay compliant and grow sustainably.
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    View All Services
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>

                  {/* Quick Stats */}
                  <div className="mt-8 pt-6 border-t border-neutral-200">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-2xl font-bold text-neutral-900">200+</div>
                        <div className="text-xs text-neutral-500">Clients Served</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-neutral-900">98%</div>
                        <div className="text-xs text-neutral-500">On-time Filing</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Service Categories */}
                <div className="mega-section p-8">
                  <div className="grid grid-cols-3 gap-8">
                    {serviceCategories.map((category) => (
                      <div key={category.title}>
                        <h4 className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-4">
                          {category.title}
                        </h4>
                        <div className="space-y-3">
                          {category.services.map((service) => (
                            <Link
                              key={service.title}
                              href={service.href}
                              className="group flex items-start gap-3 p-3 -mx-3 rounded-lg hover:bg-neutral-50 transition-colors"
                            >
                              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-neutral-100 text-neutral-500 flex items-center justify-center group-hover:bg-primary-100 group-hover:text-primary-600 transition-colors">
                                {Icons[service.icon]}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                  <span className="font-medium text-sm text-neutral-800 group-hover:text-primary-600 transition-colors">
                                    {service.title}
                                  </span>
                                  {(service as { badge?: string }).badge && (
                                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-neutral-200 text-neutral-500 font-medium">
                                      {(service as { badge?: string }).badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-neutral-500 mt-0.5 line-clamp-1">
                                  {service.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Enhanced CTA Section with Brand Colors */}
                  <div className="mt-6 pt-6 border-t border-neutral-200">
                    <div className="flex items-center justify-between gap-4">
                      {/* Left: Contact Info */}
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600 shrink-0">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7A8.38 8.38 0 0 1 4 11.5a8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" strokeLinecap="round"/>
                          </svg>
                        </div>
                        <div className="min-w-0">
                          <p className="font-semibold text-neutral-800 text-sm">Need personalized advice?</p>
                          <p className="text-xs text-neutral-500 mt-0.5">WhatsApp: 0811-3940-4640 • Response in less than 2 hours</p>
                        </div>
                      </div>
                      
                      {/* Right: CTA Button - Fully Rounded */}
                      <Link
                        href="/free-consultation"
                        className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 bg-[color:var(--color-primary)] text-white text-sm font-semibold rounded-[999px] shadow-lg shadow-primary-500/20 hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-0.5 transition-all duration-300 group whitespace-nowrap"
                      >
                        <span>Book Free Consultation</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
