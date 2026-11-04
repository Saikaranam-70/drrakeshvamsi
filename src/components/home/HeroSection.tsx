"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Play,
  MapPin,
  Users,
  ShieldCheck,
  Stethoscope,
  HeartHandshake,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getLocalizedDoctorData } from "@/data/localizedDoctor";
import VideoModal from "./VideoModal";

export default function HeroSection() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const { locale, t } = useLanguage();
  const doctor = getLocalizedDoctorData(locale);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-navy-950 via-brand-navy-900 to-brand-navy-950 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-brand-navy-800">
      {/* Background Soft Glows & Curved Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-[600px] sm:h-[600px] bg-brand-cyan/15 rounded-full blur-2xl sm:blur-3xl pointer-events-none transform translate-x-1/3 -translate-y-1/4" />
      <div className="hidden sm:block absolute bottom-0 left-10 w-96 h-96 bg-brand-teal-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Location Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy-900/90 border border-brand-teal-500/30 shadow-xs text-xs font-semibold text-brand-cyan">
              <MapPin className="w-3.5 h-3.5 text-brand-cyan" />
              <span>{doctor.hospital.name}, {doctor.hospital.city}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
                {t("home.hero.mainHeadlinePrefix", "Best")}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-teal-400">
                  {t("home.hero.mainHeadlineHighlight", "Andrologist")}
                </span>{" "}
                {t("home.hero.mainHeadlineSuffix", "in Nellore")}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-300">
                {t("home.hero.tagline", "Advanced. Personalized. Compassionate.")}
              </p>
            </div>

            {/* Doctor Info Card Strip */}
            <div className="bg-brand-navy-900/80 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-brand-teal-500/25 shadow-xl space-y-2">
              <div>
                <h2 className="text-2xl font-heading font-extrabold text-white leading-tight">
                  {doctor.fullName}
                </h2>
                <p className="text-base font-bold text-brand-cyan">
                  {doctor.designation}
                </p>
                <p className="text-sm text-slate-300 font-medium flex flex-wrap items-center gap-2 pt-0.5">
                  <span>{doctor.specialization}</span>
                  <span className="hidden sm:inline text-slate-500">|</span>
                  <span>{doctor.hospital.name}, {doctor.hospital.city}</span>
                </p>
              </div>

              {/* Andrology & Speciality Focus Tags */}
              <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-brand-navy-800">
                <span className="text-[11px] font-bold text-brand-cyan bg-brand-teal-950/80 border border-brand-teal-700/60 px-2.5 py-0.5 rounded-full">
                  {t("home.hero.tagEd", "ED Management")}
                </span>
                <span className="text-[11px] font-bold text-white bg-brand-cyan/20 border border-brand-cyan/40 px-2.5 py-0.5 rounded-full">
                  {t("home.hero.tagImplants", "Penile Implants (IPP)")}
                </span>
                <span className="text-[11px] font-bold text-brand-cyan bg-brand-teal-950/80 border border-brand-teal-700/60 px-2.5 py-0.5 rounded-full">
                  {t("home.hero.tagInfertility", "Male Infertility")}
                </span>
                <span className="text-[11px] font-bold text-slate-200 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full">
                  {t("home.hero.tagRobotics", "Laser & Robotic Urology")}
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href="/book-appointment"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-base font-bold text-brand-navy-950 bg-gradient-to-r from-brand-teal-400 to-brand-cyan hover:from-brand-teal-300 hover:to-brand-cyan shadow-lg hover:shadow-glow transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <Calendar className="w-5 h-5 text-brand-navy-950" />
                <span>{t("home.hero.ctaAppointment", "Book Appointment")}</span>
                <span className="text-brand-navy-950 font-extrabold ml-1">→</span>
              </Link>

              <button
                type="button"
                onClick={() => setVideoModalOpen(true)}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-base font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-brand-cyan/40 shadow-xs transition-all"
              >
                <div className="w-6 h-6 rounded-full bg-brand-cyan/20 text-brand-cyan flex items-center justify-center">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>{t("home.hero.ctaVideo", "Watch Video")}</span>
              </button>
            </div>

            {/* 4 Trust Badges Horizontal Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-brand-navy-800">
              <div className="flex flex-col items-start gap-1.5 p-2.5 rounded-xl bg-brand-navy-900/60 border border-brand-navy-800">
                <div className="w-8 h-8 rounded-lg bg-brand-teal-500/20 text-brand-cyan flex items-center justify-center">
                  <Users className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-white leading-snug">
                  {t("home.hero.badge1", "Patient-Centered Approach")}
                </span>
              </div>

              <div className="flex flex-col items-start gap-1.5 p-2.5 rounded-xl bg-brand-navy-900/60 border border-brand-navy-800">
                <div className="w-8 h-8 rounded-lg bg-brand-teal-500/20 text-brand-cyan flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-white leading-snug">
                  {t("home.hero.badge2", "Advanced Treatment Options")}
                </span>
              </div>

              <div className="flex flex-col items-start gap-1.5 p-2.5 rounded-xl bg-brand-navy-900/60 border border-brand-navy-800">
                <div className="w-8 h-8 rounded-lg bg-brand-teal-500/20 text-brand-cyan flex items-center justify-center">
                  <Stethoscope className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-white leading-snug">
                  {t("home.hero.badge3", "Minimally Invasive Surgery")}
                </span>
              </div>

              <div className="flex flex-col items-start gap-1.5 p-2.5 rounded-xl bg-brand-navy-900/60 border border-brand-navy-800">
                <div className="w-8 h-8 rounded-lg bg-brand-teal-500/20 text-brand-cyan flex items-center justify-center">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-white leading-snug">
                  {t("home.hero.badge4", "Compassionate Care")}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Dr. Rakesh Vamsi Cutout */}
          <div className="lg:col-span-5 relative flex justify-center items-center mt-6 lg:mt-0">
            <div className="relative w-[340px] h-[380px] sm:w-[420px] sm:h-[480px] lg:w-[460px] lg:h-[530px] flex items-center justify-center">
              {/* Outer Halo */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-navy-900 via-brand-teal-600 to-brand-cyan opacity-90 p-[3px] shadow-2xl">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-brand-navy-950 via-brand-navy-900 to-brand-navy-800 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-[radial-gradient(#00C5DC_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
                  <div className="absolute w-56 h-56 rounded-full bg-brand-cyan/20 blur-2xl pointer-events-none" />

                  <svg
                    className="absolute w-64 h-64 text-brand-cyan/25 transform scale-125"
                    viewBox="0 0 200 200"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M 60 70 C 40 40, 10 70, 30 110 C 45 140, 75 140, 80 120 C 85 100, 80 90, 60 70 Z" />
                    <path d="M 140 70 C 160 40, 190 70, 170 110 C 155 140, 125 140, 120 120 C 115 100, 120 90, 140 70 Z" />
                    <path d="M 80 120 Q 90 150 95 170" strokeDasharray="3 3" />
                    <path d="M 120 120 Q 110 150 105 170" strokeDasharray="3 3" />
                    <circle cx="100" cy="175" r="14" />
                  </svg>
                </div>
              </div>

              {/* Doctor Cutout Photo */}
              <div className="relative z-20 w-[90%] h-[98%] flex items-end justify-center">
                <Image
                  src="/images/dr-rakesh-vamsi.png"
                  alt="Dr. Rakesh Vamsi - Consultant Urologist & Andrologist"
                  width={460}
                  height={560}
                  className="object-contain object-bottom drop-shadow-2xl max-h-full"
                  priority
                />
              </div>

              {/* Doctor Signature Script Card */}
              <div className="absolute -bottom-2 right-1 sm:-bottom-4 sm:-right-4 z-30 bg-brand-navy-900/90 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-2xl border border-brand-navy-700 max-w-[190px] sm:max-w-[220px] text-left transform rotate-1 hover:rotate-0 transition-transform">
                <div className="text-lg sm:text-xl font-signature text-white tracking-wide">
                  Dr. Rakesh Vamsi
                </div>
                <div className="text-[8.5px] sm:text-[9px] font-extrabold uppercase tracking-wider text-brand-cyan mt-0.5">
                  {doctor.designation}
                </div>
              </div>

              {/* Logo Emblem badge - top-left on mobile to prevent overlap, bottom-left on desktop */}
              <div className="absolute top-4 left-0 sm:top-auto sm:-bottom-2 sm:-left-6 z-30 bg-brand-navy-900/95 backdrop-blur-md p-2.5 sm:p-3 rounded-2xl shadow-2xl border border-brand-navy-700 flex items-center gap-2 sm:gap-2.5 transform -rotate-1 hover:rotate-0 transition-transform">
                <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border border-white/20 p-0.5 shadow-2xs flex-shrink-0">
                  <Image
                    src="/images/logo.png"
                    alt="Dr. Rakesh Vamsi"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-left leading-none">
                  <div className="text-xs sm:text-sm font-heading font-extrabold text-white">
                    {t("common.header.doctorName", "Dr. Rakesh Vamsi")}
                  </div>
                  <div className="text-[8px] sm:text-[8.5px] font-bold uppercase tracking-wider text-brand-cyan mt-0.5 sm:mt-1">
                    {t("common.header.tagline", "Urology & Andrology")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />
    </section>
  );
}
