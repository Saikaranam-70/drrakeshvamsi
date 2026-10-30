"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Calendar, Instagram, Menu, X, Phone } from "lucide-react";
import MobileNav from "./MobileNav";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("common.nav.home", "Home"), href: "/" },
    { name: t("common.nav.about", "About"), href: "/about" },
    { name: t("common.nav.treatments", "Treatments"), href: "/treatments" },
    { name: t("common.nav.patientInfo", "Patient Info"), href: "/patient-info" },
    { name: t("common.nav.blog", "Blog"), href: "/blog" },
    { name: t("common.nav.contact", "Contact"), href: "/contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b",
          isScrolled
            ? "border-slate-200/80 shadow-sm py-2.5"
            : "border-slate-100 py-3.5"
        )}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal-500 rounded-lg p-1 flex-shrink-0"
            >
              <div className="relative w-14 h-12 sm:w-16 sm:h-14 lg:w-[70px] lg:h-[58px] flex-shrink-0 transition-transform duration-200 group-hover:scale-105">
                <Image
                  src="/images/logo.png"
                  alt="UROANDROGUY Logo - Dr. Rakesh Vamsi"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
              <div className="flex flex-col whitespace-nowrap">
                <div className="flex items-baseline">
                  <span className="font-heading font-extrabold text-lg sm:text-xl lg:text-[22px] text-brand-navy-900 tracking-tight leading-none">
                    UROANDRO<span className="text-brand-teal-500">GUY</span>
                  </span>
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="h-[1.5px] w-2.5 bg-brand-teal-500 rounded-full" />
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-brand-navy-700">
                    {t("common.header.tagline", "Urology & Andrology")}
                  </span>
                  <span className="h-[1.5px] w-2.5 bg-brand-teal-500 rounded-full" />
                </div>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 flex-shrink-0">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative px-2.5 xl:px-3 py-2 text-sm font-semibold transition-colors duration-200 rounded-lg hover:text-brand-teal-600 whitespace-nowrap",
                      isActive
                        ? "text-brand-navy-900 font-bold"
                        : "text-slate-600 hover:text-slate-900"
                    )}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-2.5 right-2.5 xl:left-3 xl:right-3 h-[2.5px] bg-brand-teal-500 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden md:flex items-center gap-2 xl:gap-3 flex-shrink-0">
              {/* Language Switcher */}
              <LanguageSwitcher variant="desktop" />

              <a
                href="https://www.instagram.com/uroandroguy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-brand-teal-600 transition-colors px-2 py-1.5 rounded-md hover:bg-slate-50 whitespace-nowrap flex-shrink-0"
                aria-label={t("common.nav.followInstagram", "Follow Dr. Rakesh Vamsi on Instagram")}
              >
                <Instagram className="w-4 h-4 text-brand-navy-900 flex-shrink-0" />
                <span className="whitespace-nowrap">@uroandroguy</span>
              </a>

              <Link
                href="/book-appointment"
                className="inline-flex items-center gap-1.5 xl:gap-2 px-4 xl:px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-brand-teal-600 to-brand-navy-800 hover:from-brand-teal-500 hover:to-brand-navy-700 shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap flex-shrink-0"
              >
                <Calendar className="w-4 h-4 flex-shrink-0" />
                <span className="whitespace-nowrap">{t("common.nav.bookAppointment", "Book Appointment")}</span>
                <span className="text-white/80 font-bold ml-0.5">→</span>
              </Link>
            </div>

            {/* Mobile Actions: Compact Language Switcher + Ultra-Glossy Standalone Mobile Toggle Bar */}
            <div className="flex md:hidden items-center gap-2">
              <LanguageSwitcher variant="desktop" />

              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="relative items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-b from-white/95 via-white/85 to-slate-100/80 backdrop-blur-2xl border border-white/90 shadow-[0_4px_20px_rgba(0,157,187,0.18),inset_0_2px_3px_rgba(255,255,255,1),inset_0_-1px_3px_rgba(0,27,61,0.06)] hover:shadow-[0_6px_24px_rgba(0,157,187,0.3),inset_0_2px_4px_rgba(255,255,255,1)] hover:border-brand-teal-300 active:scale-95 transition-all duration-200 group flex"
                aria-label="Open navigation menu"
              >
                {/* Glossy top specular reflection line */}
                <div className="absolute top-1 inset-x-2 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent rounded-full opacity-90" />

                {/* Modern 3-bar hamburger with glossy accents */}
                <div className="w-5 h-4 flex flex-col justify-between items-center relative z-10">
                  <span className="w-5 h-[2.5px] bg-brand-navy-950 rounded-full group-hover:bg-brand-teal-600 transition-colors shadow-xs" />
                  <span className="w-3.5 h-[2.5px] bg-gradient-to-r from-brand-teal-500 to-brand-cyan rounded-full self-start group-hover:w-5 transition-all shadow-xs" />
                  <span className="w-5 h-[2.5px] bg-brand-navy-950 rounded-full group-hover:bg-brand-teal-600 transition-colors shadow-xs" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={navLinks}
        pathname={pathname}
      />
    </>
  );
}
