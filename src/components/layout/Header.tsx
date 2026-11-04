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
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal-500 rounded-xl p-1 flex-shrink-0"
            >
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 lg:w-13 lg:h-13 rounded-full bg-white shadow-xs border border-slate-200/80 p-1 flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-105">
                <Image
                  src="/images/logo.png"
                  alt="Dr. Rakesh Vamsi - Consultant Urologist & Andrologist"
                  fill
                  className="object-contain p-0.5"
                  priority
                />
              </div>
              <div className="flex flex-col whitespace-nowrap">
                <span className="font-heading font-extrabold text-base sm:text-lg lg:text-[19px] text-brand-navy-950 tracking-tight leading-tight group-hover:text-brand-teal-600 transition-colors">
                  {t("common.header.doctorName", "Dr. Rakesh Vamsi")}
                </span>
                <span className="text-[11px] sm:text-xs font-semibold text-brand-teal-600 tracking-tight leading-tight mt-0.5">
                  {t("common.header.subtitle", "Consultant Urologist & Andrologist")}
                </span>
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
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-brand-teal-600 transition-colors px-2 py-1.5 rounded-md hover:bg-slate-50 whitespace-nowrap flex-shrink-0"
                aria-label={t("common.nav.followInstagram", "Follow Dr. Rakesh Vamsi on Instagram")}
              >
                <Instagram className="w-4 h-4 text-brand-navy-900 flex-shrink-0" />
                <span className="whitespace-nowrap">Instagram</span>
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

            {/* Mobile Action: Mobile Drawer Button */}
            <div className="flex md:hidden items-center flex-shrink-0">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="relative items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-b from-white/95 via-white/85 to-slate-100/80 backdrop-blur-2xl border border-white/90 shadow-[0_3px_12px_rgba(0,157,187,0.18)] hover:shadow-[0_4px_16px_rgba(0,157,187,0.25)] hover:border-brand-teal-300 active:scale-95 transition-all duration-200 group flex flex-shrink-0"
                aria-label="Open navigation menu"
              >
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
