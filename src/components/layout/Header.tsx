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
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
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
          "sticky top-0 z-50 transition-all duration-300 bg-brand-navy-950/95 backdrop-blur-md border-b",
          isScrolled
            ? "border-brand-navy-800 shadow-lg shadow-brand-navy-950/50 py-2.5"
            : "border-brand-navy-800/60 py-3.5"
        )}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal-500 rounded-xl p-1 flex-shrink-0"
            >
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 lg:w-13 lg:h-13 rounded-full bg-white shadow-xs border border-white/20 p-1 flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-105">
                <Image
                  src="/images/logo.png"
                  alt="Dr. Rakesh Vamsi - Consultant Urologist & Andrologist"
                  fill
                  className="object-contain p-0.5"
                  priority
                />
              </div>
              <div className="flex flex-col whitespace-nowrap">
                <span className="font-heading font-extrabold text-base sm:text-lg lg:text-[19px] text-white tracking-tight leading-tight group-hover:text-brand-cyan transition-colors">
                  {t("common.header.doctorName", "Dr. Rakesh Vamsi")}
                </span>
                <span className="text-[11px] sm:text-xs font-semibold text-brand-cyan tracking-tight leading-tight mt-0.5">
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
                      "relative px-2.5 xl:px-3 py-2 text-sm font-semibold transition-colors duration-200 rounded-lg hover:text-brand-cyan whitespace-nowrap",
                      isActive
                        ? "text-white font-bold"
                        : "text-slate-300 hover:text-white"
                    )}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-2.5 right-2.5 xl:left-3 xl:right-3 h-[2.5px] bg-brand-cyan rounded-full shadow-glow" />
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
                className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-brand-cyan transition-colors px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 whitespace-nowrap flex-shrink-0"
                aria-label={t("common.nav.followInstagram", "Follow Dr. Rakesh Vamsi on Instagram")}
              >
                <Instagram className="w-4 h-4 text-brand-cyan flex-shrink-0" />
                <span className="whitespace-nowrap">Instagram</span>
              </a>

              <Link
                href="/book-appointment"
                className="inline-flex items-center gap-1.5 xl:gap-2 px-4 xl:px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-brand-teal-500 to-brand-cyan hover:from-brand-teal-400 hover:to-brand-cyan shadow-md hover:shadow-glow transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap flex-shrink-0 text-brand-navy-950 font-bold"
              >
                <Calendar className="w-4 h-4 flex-shrink-0 text-brand-navy-950" />
                <span className="whitespace-nowrap text-brand-navy-950 font-bold">{t("common.nav.bookAppointment", "Book Appointment")}</span>
                <span className="text-brand-navy-950/80 font-extrabold ml-0.5">→</span>
              </Link>
            </div>

            {/* Mobile Action: Mobile Drawer Button */}
            <div className="flex md:hidden items-center flex-shrink-0">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="relative items-center justify-center w-11 h-11 rounded-2xl bg-brand-navy-900 border border-brand-navy-700 hover:border-brand-teal-400 active:scale-95 transition-all duration-200 group flex flex-shrink-0 shadow-md text-white"
                aria-label="Open navigation menu"
              >
                <div className="w-5 h-4 flex flex-col justify-between items-center relative z-10">
                  <span className="w-5 h-[2.5px] bg-white rounded-full group-hover:bg-brand-cyan transition-colors" />
                  <span className="w-5 h-[2.5px] bg-white rounded-full group-hover:bg-brand-cyan transition-colors" />
                  <span className="w-5 h-[2.5px] bg-white rounded-full group-hover:bg-brand-cyan transition-colors" />
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
