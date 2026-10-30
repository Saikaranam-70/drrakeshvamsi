"use client";

import React from "react";
import { Building2, Clock, MapPin, Instagram } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getLocalizedDoctorData } from "@/data/localizedDoctor";

export default function HospitalStrip() {
  const { locale, t } = useLanguage();
  const doctor = getLocalizedDoctorData(locale);

  return (
    <section className="bg-brand-navy-900 border-y border-brand-navy-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 divide-y sm:divide-y-0 lg:divide-x divide-slate-800">
          {/* Item 1 */}
          <div className="flex items-center gap-4 pt-4 sm:pt-0 lg:px-4 first:lg:pl-0">
            <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan flex-shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <div className="font-heading font-bold text-sm sm:text-base text-white">
                {doctor.hospital.name}, {doctor.hospital.city}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                {t("home.hospitalStrip.item1Sub", "Consultation at KIMS Hospital")}
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center gap-4 pt-4 sm:pt-0 lg:px-4">
            <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan flex-shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="font-heading font-bold text-sm sm:text-base text-white">
                {t("home.hospitalStrip.item2Title", "Flexible Consultation Hours")}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                {t("home.hospitalStrip.item2Sub", "As per hospital schedule")}
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-center gap-4 pt-4 sm:pt-0 lg:px-4">
            <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan flex-shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <div className="font-heading font-bold text-sm sm:text-base text-white">
                {t("home.hospitalStrip.item3Title", "Easily Accessible")}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                {doctor.hospital.location}
              </div>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-center gap-4 pt-4 sm:pt-0 lg:px-4 last:lg:pr-0">
            <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan flex-shrink-0">
              <Instagram className="w-6 h-6" />
            </div>
            <div>
              <div className="font-heading font-bold text-sm sm:text-base text-white">
                {t("home.hospitalStrip.item4Title", "Follow on Instagram")}
              </div>
              <a
                href={doctor.social.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-brand-cyan hover:underline mt-0.5 block"
              >
                {doctor.social.instagram}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
