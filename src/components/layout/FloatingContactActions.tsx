"use client";

import React, { useState, useEffect } from "react";
import { Phone, ArrowUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getLocalizedDoctorData } from "@/data/localizedDoctor";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function FloatingContactActions() {
  const { locale, t } = useLanguage();
  const doctor = getLocalizedDoctorData(locale);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappMessage =
    locale === "te"
      ? `నమస్తే డాక్టర్ రాకేష్ వంశీ గారి క్లినిక్, నెల్లూరు కిమ్స్ హాస్పిటల్‌లో అపాయింట్‌మెంట్ కొరకు సంప్రదిస్తున్నాను.`
      : locale === "hi"
        ? `नमस्ते डॉ. राकेश वामसी क्लीनिक, मैं किम्स हॉस्पिटल नेल्लोर में परामर्श अपॉइंटमेंट के संबंध में जानकारी चाहता हूँ।`
        : `Hello Dr. G. Rakesh Vamsi's clinic, I would like to inquire about an appointment at KIMS Hospital, Nellore.`;

  return (
    <>
      {/* Scroll to Top Button - Bottom-left on mobile, stacked on desktop */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 left-4 sm:bottom-auto sm:left-auto sm:fixed sm:bottom-[210px] sm:right-6 z-40 p-2.5 sm:p-3 rounded-full bg-white text-brand-navy-900 shadow-xl border border-slate-200/90 hover:bg-slate-50 hover:text-brand-teal-600 transition-all transform hover:scale-110 active:scale-95"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      )}

      {/* Floating Action Buttons Dock */}
      <aside aria-label="Quick contact actions" className="fixed bottom-6 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 sm:gap-3 pointer-events-none">
        {/* Direct Phone Call Button */}
        <a
          href={`tel:${doctor.hospital.phone.replace(/\s+/g, "")}`}
          className="pointer-events-auto flex items-center justify-center gap-2 p-2.5 sm:px-4 sm:py-2.5 rounded-full bg-brand-navy-900 text-white shadow-xl hover:bg-brand-navy-800 transition-all transform hover:scale-105 active:scale-95 text-xs font-semibold group flex-shrink-0"
          aria-label={t("common.floating.callNow", "Call Hospital Desk")}
        >
          <Phone className="w-4 h-4 text-brand-cyan group-hover:rotate-12 transition-transform" />
          <span className="hidden sm:inline">{t("common.actions.callClinic", "Call Clinic")}</span>
        </a>

        {/* Instagram Quick Link */}
        <a
          href={doctor.social.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto flex items-center justify-center gap-2 p-2.5 sm:px-4 sm:py-2.5 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-xl hover:shadow-[0_4px_20px_rgba(220,39,67,0.4)] transition-all transform hover:scale-105 active:scale-95 text-xs font-semibold group flex-shrink-0"
          aria-label="Follow Dr. Rakesh Vamsi on Instagram"
        >
          <InstagramIcon className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline">Instagram</span>
        </a>

        {/* WhatsApp Quick Chat */}
        <a
          href={`https://wa.me/917674008057?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto flex items-center justify-center gap-2.5 p-2.5 sm:px-4 sm:py-2.5 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20ba59] hover:shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all transform hover:scale-105 active:scale-95 text-xs font-semibold group flex-shrink-0"
          aria-label={t("common.floating.whatsappChat", "Chat on WhatsApp")}
        >
          <WhatsAppIcon className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline">
            {locale === "te"
              ? "WhatsApp"
              : locale === "hi"
                ? "WhatsApp"
                : "Chat on WhatsApp"}
          </span>
        </a>
      </aside>
    </>
  );
}
