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
        className="fixed inset-0 bg-[#17364B]/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

        {/* Slide-over panel */}
        <div className="fixed inset-y-0 right-0 max-w-xs sm:max-w-sm w-full bg-[#F6F3EC] text-[#17364B] shadow-2xl border-l border-[#E5DFD3] flex flex-col z-50 animate-in slide-in-from-right duration-300 overflow-hidden transform-gpu will-change-transform">
          {/* Subtle Ambient Glowing Spheres */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#E5EFF0] rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-10 left-0 w-48 h-48 bg-[#B99A62]/10 rounded-full blur-2xl pointer-events-none" />

            {/* Top Header Bar */}
            <div className="p-4 sm:p-5 border-b border-[#E5DFD3] flex items-center justify-between bg-white relative z-10 shadow-xs">
              <div className="flex items-center gap-2.5">
                <div className="relative w-9 h-9 rounded-full bg-[#FAF8F5] border border-[#E5DFD3] p-1 shadow-xs flex-shrink-0">
                  <Image
                    src="/images/logo.png"
                    alt="Dr. Rakesh Vamsi"
                    fill
                    className="object-contain p-0.5"
                  />
                </div>
                <div>
                  <span className="font-heading font-extrabold text-base text-[#17364B] tracking-tight block">
                    {t("common.header.doctorName", "Dr. Rakesh Vamsi")}
                  </span>
                  <span className="text-[10px] font-semibold text-[#4B6778] block -mt-0.5">
                    {t("common.header.subtitle", "Consultant Urologist & Andrologist")}
                  </span>
                </div>
              </div>

          <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-full bg-[#E5EFF0] hover:bg-[#D4E5E7] border border-[#DCE5E8] text-[#17364B] transition-colors active:scale-95 shadow-xs"
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Language Switcher Section in Mobile Menu */}
            <div className="px-4 pt-3.5 pb-2 relative z-10 border-b border-[#E5DFD3] bg-[#FAF8F5]">
              <LanguageSwitcher variant="mobile" />
            </div>

            {/* Links List */}
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
                      "flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-semibold transition-colors duration-150 shadow-xs",
                      isActive
                        ? "bg-[#E5EFF0] border border-[#B99A62]/40 text-[#B99A62] font-bold"
                        : "bg-white hover:bg-[#FAF8F5] border border-[#E5DFD3] text-[#17364B]"
                    )}
                  >
            <span>{link.name}</span>
            <ChevronRight
              className={cn(
                "w-4 h-4 transition-transform",
                isActive ? "text-[#B99A62] translate-x-0.5" : "text-[#4B6778]"
              )}
            />
          </Link>
          );
          })}

          {/* Quick Action CTAs */}
          <div className="pt-3 border-t border-[#E5DFD3] my-3 space-y-2.5">
            <Link
              href="/book-appointment"
              onClick={onClose}
              className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-2xl font-bold text-white bg-[#B99A62] hover:bg-[#A3844C] shadow-md text-center text-sm active:scale-98 transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>{t("common.nav.bookAppointment", "Book Appointment")} →</span>
            </Link>

              <a
                href={`tel:${doctor.hospital.phone.replace(/\s+/g, "")}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-2xl font-semibold text-[#17364B] bg-white hover:bg-[#FAF8F5] border border-[#DCD5C9] transition-colors text-center text-xs shadow-xs"
              >
                <Phone className="w-4 h-4 text-[#B99A62]" />
                <span>{t("common.actions.directCall", "Direct Call")}: {doctor.hospital.phone}</span>
              </a>
            </div>

      {/* Clinic Info Card */}
      <div className="p-3.5 bg-[#E5EFF0] rounded-2xl border border-[#DCE5E8] text-xs text-[#3A5668] space-y-2 mt-2">
        <div className="font-bold text-[#17364B] flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-[#B99A62] flex-shrink-0" />
          <span>{doctor.hospital.name}, {doctor.hospital.city}</span>
        </div>
        <div className="flex items-center gap-1.5 text-[#4B6778] text-[11px]">
          <Clock className="w-3.5 h-3.5 text-[#B99A62] flex-shrink-0" />
          <span>{doctor.hospital.hours}</span>
        </div>
        <a
          href={doctor.social.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[#17364B] font-bold pt-1 hover:text-[#B99A62] text-[11px]"
        >
          <Instagram className="w-3.5 h-3.5 text-[#B99A62]" />
          <span>Instagram {doctor.social.instagram}</span>
        </a>
      </div>
    </div>
      </div >
    </div >
  );
}
