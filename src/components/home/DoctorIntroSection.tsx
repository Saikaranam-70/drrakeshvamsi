"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Award, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";
import { getLocalizedDoctorData } from "@/data/localizedDoctor";

export default function DoctorIntroSection() {
  const { locale, t } = useLanguage();
  const doctor = getLocalizedDoctorData(locale);

  return (
    <section className="py-20 bg-[#FAF8F5] text-[#17364B] relative overflow-hidden border-b border-[#E5DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Doctor Image in Rounded Frame with Experience Highlights */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-[320px] h-[380px] sm:w-[380px] sm:h-[450px]">
              {/* Soft Teal Halo background */}
              <div className="absolute inset-4 rounded-3xl bg-[#E5EFF0] border border-[#CCDDE0] -rotate-2" />
              <div className="absolute inset-4 rounded-3xl bg-white shadow-card rotate-1 overflow-hidden border border-[#E5DFD3]">
                <Image
                  src="/images/dr-rakesh-vamsi.png"
                  alt="Dr. G. Rakesh Vamsi - Consultant Andrologist, Urologist & Robotic Surgeon at KIMS Hospital Nellore"
                  fill
                  className="object-contain object-bottom pt-4"
                />
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -bottom-4 -left-2 sm:left-0 bg-white text-[#17364B] p-4 rounded-2xl shadow-card border border-[#E5DFD3] flex items-center gap-3.5 z-20">
                <div className="w-12 h-12 rounded-xl bg-[#E5EFF0] text-[#B99A62] border border-[#CCDDE0] flex items-center justify-center font-bold text-lg">
                  {doctor.experienceYears}
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#B99A62] font-bold">
                    {t("home.doctorIntro.statLabel", "Clinical Mastery")}
                  </div>
                  <div className="text-sm font-extrabold text-[#17364B]">
                    {t("home.doctorIntro.statTitle", "Years of Experience")}
                  </div>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="absolute -top-3 -right-2 bg-white text-[#17364B] px-3.5 py-1.5 rounded-full shadow-xs border border-[#E5DFD3] flex items-center gap-1.5 text-xs font-bold z-20">
                <ShieldCheck className="w-4 h-4 text-[#B99A62]" />
                <span>{t("home.doctorIntro.verifiedBadge", "Verified Consultant")}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Core Values */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <SectionHeading
              badge={t("home.doctorIntro.badge", "ABOUT THE DOCTOR")}
              title={t("home.doctorIntro.title", "Dedicated to Advanced, Compassionate Urological Care")}
              subtitle={doctor.shortBio}
            />

            {/* Doctor Bio paragraph */}
            <p className="text-sm sm:text-base text-[#4B6778] leading-relaxed">
              {doctor.fullBio}
            </p>

            {/* Qualifications Timeline Summary */}
            < div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2" >
              {
                doctor.qualifications.map((q, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white border border-[#E5DFD3] flex items-start gap-3 shadow-xs"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#E5EFF0] text-[#B99A62] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#17364B] leading-snug">
                        {q.degree}
                      </h4>
                      <p className="text-[11px] text-[#4B6778] mt-0.5">
                        {q.year || "Specialized Certification"}
                      </p>
                    </div>
                  </div>
                ))
              }
            </div>

            {/* Pull Quote */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#E5EFF0] border-l-4 border-[#B99A62] text-[#17364B] space-y-2">
              <p className="text-xs sm:text-sm italic font-medium text-[#17364B]">
                &ldquo;{doctor.quote}&rdquo;
              </p>
              <div className="text-right">
                <span className="font-signature text-xl text-[#17364B]">
                  {doctor.fullName}
                </span>
                <span className="text-[10px] uppercase font-bold text-[#B99A62] block">
                  {doctor.designation}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-[#B99A62] hover:bg-[#A3844C] transition-all shadow-md hover:shadow-lg"
              >
                <span>{t("home.doctorIntro.readFullBio", "Read Full Biography")}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/book-appointment"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-[#17364B] bg-white border border-[#DCD5C9] hover:bg-[#FAF8F5] transition-colors shadow-xs"
              >
                <Calendar className="w-4 h-4 text-[#B99A62]" />
                <span>{t("home.doctorIntro.bookConsultation", "Book Consultation")}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
