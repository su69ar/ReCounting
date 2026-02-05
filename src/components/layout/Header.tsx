"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import { useMagneticButton } from "@/hooks/useMagneticButton";

const navItems = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
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
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
          ? "bg-white/90 backdrop-blur-lg border-b border-neutral-200 shadow-sm"
          : "bg-transparent"
        }`}
    >
      <div className="container-grid">
        <div className="flex h-20 items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="flex h-10 w-10 items-center justify-center rounded-full 
                           bg-primary-500/10 text-primary-500 
                           group-hover:bg-primary-500/20 transition-colors">
              <svg
                viewBox="0 0 24 24"
                aria-hidden
                className="h-6 w-6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 4.5h9.5a2 2 0 0 1 2 2V8"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
                <path
                  d="M6 4.5h8.5a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
                <path
                  d="M7.5 9.2h6.5M7.5 12.2h4.2"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
                <path
                  d="m17 13.8 1.6 1.6 3.1-3.4"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="text-lg font-bold tracking-tight text-neutral-900">
              ReCounting
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
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
                      border-b border-neutral-200 shadow-lg">
          <div className="container-grid py-4">
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="mobile-nav-item text-sm font-medium text-neutral-700 
                           py-2 hover:text-primary-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/free-consultation"
                className="mobile-nav-item btn-primary w-full mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Free Consultation
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
