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
        className="fixed inset-0 bg-brand-navy-950/70 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Glossy Glassmorphic Slide-over panel */}
      <div className="fixed inset-y-0 right-0 max-w-xs sm:max-w-sm w-full bg-brand-navy-950/90 backdrop-blur-3xl text-white shadow-[0_0_50px_rgba(0,27,61,0.6)] border-l border-white/15 flex flex-col z-50 animate-in slide-in-from-right duration-300 overflow-hidden">
        {/* Subtle Ambient Glowing Spheres */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-0 w-64 h-64 bg-brand-teal-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header Bar */}
        <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-white/5 backdrop-blur-md relative z-10">
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
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur-md transition-all active:scale-95 shadow-xs"
            aria-label="Close menu"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Language Switcher Section in Mobile Menu */}
        <div className="px-4 pt-3.5 pb-2 relative z-10 border-b border-white/10 bg-white/5">
          <LanguageSwitcher variant="mobile" />
        </div>

        {/* Glossy Links List */}
        <div className="flex-1 overflow-y-auto py-4 px-4 space-y-1.5 relative z-10">
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
                  "flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-200",
                  isActive
                    ? "bg-gradient-to-r from-brand-teal-500/30 to-brand-cyan/20 border border-brand-cyan/40 text-brand-cyan font-bold shadow-[0_0_20px_rgba(0,197,220,0.2),inset_0_1px_1px_rgba(255,255,255,0.2)]"
                    : "bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white"
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
          <div className="pt-3 border-t border-white/10 my-3 space-y-2.5">
            <Link
              href="/book-appointment"
              onClick={onClose}
              className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-2xl font-extrabold text-brand-navy-950 bg-gradient-to-r from-brand-teal-400 via-brand-cyan to-brand-teal-500 shadow-[0_4px_25px_rgba(0,197,220,0.4),inset_0_1px_2px_rgba(255,255,255,0.8)] text-center text-sm active:scale-98 transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>{t("common.nav.bookAppointment", "Book Appointment")} →</span>
            </Link>

            <a
              href={`tel:${doctor.hospital.phone.replace(/\s+/g, "")}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-2xl font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] transition-all text-center text-xs"
            >
              <Phone className="w-4 h-4 text-brand-cyan" />
              <span>{t("common.actions.directCall", "Direct Call")}: {doctor.hospital.phone}</span>
            </a>
          </div>

          {/* Glossy Clinic Info Card */}
          <div className="p-3.5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 text-xs text-slate-300 space-y-2 mt-2">
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
