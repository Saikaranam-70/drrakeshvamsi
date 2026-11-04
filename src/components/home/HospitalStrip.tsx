"use client";

import React from "react";
import { Building2, Clock, MapPin, Instagram } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getLocalizedDoctorData } from "@/data/localizedDoctor";

export default function HospitalStrip() {
  const { locale, t } = useLanguage();
  const doctor = getLocalizedDoctorData(locale);

  return (
          <section className="bg-[#E5EFF0] border-y border-[#D2E2E5] text-[#17364B] py-5 shadow-xs relative z-10">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-4 divide-y sm:divide-y-0 lg:divide-x divide-[#CCDDE0]">
                {/* Item 1 */}
                <div className="flex items-center gap-3.5 pt-3 sm:pt-0 lg:px-4 first:lg:pl-0">
                  <div className="w-11 h-11 rounded-xl bg-white border border-[#B8D5DA] flex items-center justify-center text-[#17364B] flex-shrink-0 shadow-2xs">
                    <Building2 className="w-5 h-5 text-[#17364B]" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-sm sm:text-base text-[#17364B] leading-snug">
                      {doctor.hospital.name}, {doctor.hospital.city}
                    </div>
                    <div className="text-xs text-[#4B6778] mt-0.5">
                      {t("home.hospitalStrip.item1Sub", "Consultation at KIMS Hospital")}
                    </div>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-center gap-3.5 pt-3 sm:pt-0 lg:px-4">
                  <div className="w-11 h-11 rounded-xl bg-white border border-[#B8D5DA] flex items-center justify-center text-[#17364B] flex-shrink-0 shadow-2xs">
                    <Clock className="w-5 h-5 text-[#17364B]" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-sm sm:text-base text-[#17364B] leading-snug">
                      {t("home.hospitalStrip.item2Title", "Flexible Consultation Hours")}
                    </div>
                    <div className="text-xs text-[#4B6778] mt-0.5">
                      {t("home.hospitalStrip.item2Sub", "As per hospital schedule")}
                    </div>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-center gap-3.5 pt-3 sm:pt-0 lg:px-4">
                  <div className="w-11 h-11 rounded-xl bg-white border border-[#B8D5DA] flex items-center justify-center text-[#17364B] flex-shrink-0 shadow-2xs">
                    <MapPin className="w-5 h-5 text-[#17364B]" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-sm sm:text-base text-[#17364B] leading-snug">
                      {t("home.hospitalStrip.item3Title", "Easily Accessible")}
                    </div>
                    <div className="text-xs text-[#4B6778] mt-0.5">
                      {doctor.hospital.location}
                    </div>
                  </div>
                </div>

          {/* Item 4 */}
          <div className="flex items-center gap-3.5 pt-3 sm:pt-0 lg:px-4 last:lg:pr-0">
            <div className="w-11 h-11 rounded-xl bg-white border border-[#B8D5DA] flex items-center justify-center text-[#17364B] flex-shrink-0 shadow-2xs">
              <Instagram className="w-5 h-5 text-[#17364B]" />
            </div>
            <div>
              <div className="font-heading font-bold text-sm sm:text-base text-[#17364B] leading-snug">
                {t("home.hospitalStrip.item4Title", "Follow on Instagram")}
              </div>
              <a
                href={doctor.social.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#17364B] font-semibold hover:text-[#B99A62] mt-0.5 block hover:underline"
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
