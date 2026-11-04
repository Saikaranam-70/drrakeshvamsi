"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Calendar, Instagram, Phone, MapPin, Clock, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getLocalizedDoctorData } from "@/data/localizedDoctor";
import LanguageSwitcher from "./LanguageSwitcher";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  links: { name: string; href: string }[];
  pathname: string;
}

export default function MobileNav({
  isOpen,
  onClose,
  links,
  pathname,
}: MobileNavProps) {
  const { locale, t } = useLanguage();
  const doctor = getLocalizedDoctorData(locale);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-brand-navy-950/80 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

        {/* Sleek, Hardware-Accelerated Slide-over panel */}
        <div className="fixed inset-y-0 right-0 max-w-xs sm:max-w-sm w-full bg-brand-navy-950 text-white shadow-2xl border-l border-brand-navy-800 flex flex-col z-50 animate-in slide-in-from-right duration-300 overflow-hidden transform-gpu will-change-transform">
          {/* Subtle Ambient Glowing Spheres (hidden on mobile, soft glow) */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-brand-cyan/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-10 left-0 w-48 h-48 bg-brand-teal-500/10 rounded-full blur-2xl pointer-events-none" />

          {/* Top Header Bar */}
            <div className="p-4 sm:p-5 border-b border-brand-navy-800 flex items-center justify-between bg-brand-navy-900/90 relative z-10">
              <div className="flex items-center gap-2.5">
                <div className="relative w-9 h-9 rounded-full bg-white p-1 shadow-sm flex-shrink-0">
                  <Image
                    src="/images/logo.png"
                    alt="Dr. Rakesh Vamsi"
                    fill
                    className="object-contain p-0.5"
                  />
                </div>
                <div>
                  <span className="font-heading font-extrabold text-base text-white tracking-tight block">
                    {t("common.header.doctorName", "Dr. Rakesh Vamsi")}
                  </span>
                  <span className="text-[10px] font-semibold text-brand-teal-300 block -mt-0.5">
                    {t("common.header.subtitle", "Consultant Urologist & Andrologist")}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-full bg-brand-navy-800/80 hover:bg-brand-navy-700 border border-brand-navy-700 text-white transition-colors active:scale-95 shadow-xs"
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Language Switcher Section in Mobile Menu */}
              <div className="px-4 pt-3.5 pb-2 relative z-10 border-b border-brand-navy-800 bg-brand-navy-900/40">
                <LanguageSwitcher variant="mobile" />
              </div>

              {/* Glossy Links List */}
                <div className="flex-1 overflow-y-auto overscroll-contain py-4 px-4 space-y-1.5 relative z-10">
                  {links.map((link) => {
                    const isActive =
                      link.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(link.href);
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={onClose}
                        className={cn(
                          "flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-semibold transition-colors duration-150",
                          isActive
                              ? "bg-gradient-to-r from-brand-teal-500/30 to-brand-cyan/20 border border-brand-cyan/40 text-brand-cyan font-bold shadow-[0_0_15px_rgba(0,197,220,0.15)]"
                              : "bg-brand-navy-900/60 hover:bg-brand-navy-800/80 border border-brand-navy-800/80 text-slate-200 hover:text-white"
                        )}
                      >
                        <span>{link.name}</span>
                        <ChevronRight
                          className={cn(
                            "w-4 h-4 transition-transform",
                            isActive ? "text-brand-cyan translate-x-0.5" : "text-slate-400"
                          )}
                        />
                      </Link>
                    );
                  })}

                  {/* Quick Action CTAs */}
                    <div className="pt-3 border-t border-brand-navy-800 my-3 space-y-2.5">
                      <Link
                        href="/book-appointment"
                        onClick={onClose}
                        className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-2xl font-extrabold text-brand-navy-950 bg-gradient-to-r from-brand-teal-400 via-brand-cyan to-brand-teal-500 shadow-md text-center text-sm active:scale-98 transition-all"
                      >
                        <Calendar className="w-4 h-4" />
                        <span>{t("common.nav.bookAppointment", "Book Appointment")} →</span>
                      </Link>

                      <a
                        href={`tel:${doctor.hospital.phone.replace(/\s+/g, "")}`}
                        className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-2xl font-semibold text-white bg-brand-navy-900/80 hover:bg-brand-navy-800 border border-brand-navy-700 transition-colors text-center text-xs"
                      >
                        <Phone className="w-4 h-4 text-brand-cyan" />
                        <span>{t("common.actions.directCall", "Direct Call")}: {doctor.hospital.phone}</span>
                      </a>
                    </div>

                      {/* Clinic Info Card */}
                      <div className="p-3.5 bg-brand-navy-900/60 rounded-2xl border border-brand-navy-800 text-xs text-slate-300 space-y-2 mt-2">
                        <div className="font-bold text-white flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-brand-cyan flex-shrink-0" />
                          <span>{doctor.hospital.name}, {doctor.hospital.city}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
                          <Clock className="w-3.5 h-3.5 text-brand-cyan flex-shrink-0" />
                          <span>{doctor.hospital.hours}</span>
                        </div>
                        <a
                          href={doctor.social.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-brand-cyan font-bold pt-1 hover:underline text-[11px]"
                        >
                          <Instagram className="w-3.5 h-3.5" />
                          <span>Instagram {doctor.social.instagram}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                );
}
