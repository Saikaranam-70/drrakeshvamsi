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
  Heart,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getLocalizedDoctorData } from "@/data/localizedDoctor";
import VideoModal from "./VideoModal";

export default function HeroSection() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const { locale, t } = useLanguage();
  const doctor = getLocalizedDoctorData(locale);

  return (
      <section className="relative overflow-hidden bg-[#F6F3EC] pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-16 border-b border-[#E5DFD3]">
        {/* ======================================================== */}
        {/* BACKGROUND DECORATIONS (Teal Swoosh, Gold Ribbon, Watermark) */}
        {/* ======================================================== */}

          {/* Right Soft Teal Field with Elegant Golden Ribbon Boundary */}
          <div className="absolute top-0 right-0 w-full lg:w-[54%] h-full pointer-events-none overflow-hidden z-0">
            <svg
              className="absolute top-0 right-0 w-full h-full"
              viewBox="0 0 760 700"
              fill="none"
              preserveAspectRatio="none"
            >
              <defs>
                {/* Soft Mint Teal Gradient */}
                <linearGradient id="tealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#D5ECEB" />
                  <stop offset="50%" stopColor="#E2F1F1" />
                  <stop offset="100%" stopColor="#CDE6E5" />
                </linearGradient>

                {/* Rich Golden Metallic Ribbon Gradient */}
                <linearGradient id="goldRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#B99A62" />
                  <stop offset="35%" stopColor="#E6CF95" />
                  <stop offset="70%" stopColor="#B99A62" />
                  <stop offset="100%" stopColor="#9C7E47" />
                </linearGradient>

                {/* Subtle Drop Shadow on Golden Ribbon */}
                <filter id="ribbonShadow" x="-10%" y="-10%" width="130%" height="130%">
                  <feDropShadow dx="-2" dy="2" stdDeviation="4" floodColor="#17364B" floodOpacity="0.08" />
                </filter>
              </defs>

              {/* Teal Background Shape */}
              <path
                d="M 220 0 C 110 160, 40 380, 180 700 L 760 700 L 760 0 Z"
                fill="url(#tealGrad)"
              />

              {/* Thick Metallic Golden Ribbon along Boundary */}
              <path
                d="M 220 0 C 110 160, 40 380, 180 700"
                stroke="url(#goldRibbon)"
                strokeWidth="5"
                strokeLinecap="round"
                filter="url(#ribbonShadow)"
              />

              {/* Inner Light Golden Accent Stroke */}
              <path
                d="M 226 0 C 116 160, 46 380, 186 700"
                stroke="#FAF8F5"
                strokeWidth="1.5"
                strokeOpacity="0.8"
              />
            </svg>

            {/* Luminous Kidney & Urinary Tract Watermark (Matching Reference Image) */}
            <div className="absolute top-10 right-8 lg:right-16 w-64 h-80 sm:w-80 sm:h-96 pointer-events-none hidden md:block">
              <svg
                viewBox="0 0 320 380"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full filter drop-shadow-[0_0_16px_rgba(255,255,255,0.9)]"
              >
                <defs>
                  {/* Luminous Inner Glow for Kidneys */}
                  <radialGradient id="kidneyVolumetric" cx="45%" cy="40%" r="55%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.5" />
                    <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.04" />
                  </radialGradient>

                  {/* Luminous Glow for Bladder */}
                  <radialGradient id="bladderVolumetric" cx="50%" cy="35%" r="60%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.55" />
                    <stop offset="70%" stopColor="#FFFFFF" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.05" />
                  </radialGradient>
                </defs>

                {/* Left Kidney (Viewer's Left) */}
                <path
                  d="M100 80 C68 40, 16 68, 32 120 C 44 160, 84 165, 100 138 C 112 120, 112 98, 100 80 Z"
                  stroke="#FFFFFF"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="url(#kidneyVolumetric)"
                />
                {/* Left Kidney Calyces / Inner Pyramids */}
                <path d="M54 88 C62 96, 66 106, 58 118" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="3 3" opacity="0.9" />
                <path d="M72 94 C78 106, 78 116, 70 128" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="3 3" opacity="0.9" />

                {/* Right Kidney (Viewer's Right) */}
                <path
                  d="M220 80 C252 40, 304 68, 288 120 C 276 160, 236 165, 220 138 C 208 120, 208 98, 220 80 Z"
                  stroke="#FFFFFF"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="url(#kidneyVolumetric)"
                />
                {/* Right Kidney Calyces / Inner Pyramids */}
                <path d="M266 88 C258 96, 254 106, 262 118" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="3 3" opacity="0.9" />
                <path d="M248 94 C242 106, 242 116, 250 128" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="3 3" opacity="0.9" />

                {/* Left Ureter */}
                <path
                  d="M100 120 C 118 138, 134 175, 144 240"
                  stroke="#FFFFFF"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                  {/* Right Ureter */}
                  <path
                    d="M220 120 C 202 138, 186 175, 176 240"
                    stroke="#FFFFFF"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />

                  {/* Urinary Bladder */}
                  <path
                    d="M138 245 C 138 228, 182 228, 182 245 C 188 268, 182 284, 160 290 C 138 284, 132 268, 138 245 Z"
                    stroke="#FFFFFF"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="url(#bladderVolumetric)"
                  />

                  {/* Urethra Output */}
                  <path d="M160 290 L160 315" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Bottom Left Corner Wave & Golden Accent */}
            <div className="absolute bottom-0 left-0 w-80 sm:w-96 h-60 pointer-events-none overflow-hidden z-0">
              <svg
                className="absolute bottom-0 left-0 w-full h-full"
                viewBox="0 0 400 300"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M 0 300 L 0 170 C 120 190, 200 245, 320 300 Z"
                  fill="#E5EFF0"
                  fillOpacity="0.8"
                />
                <path
                  d="M 0 170 C 120 190, 200 245, 320 300"
                  stroke="#B99A62"
                  strokeWidth="3.5"
                  strokeOpacity="0.85"
                />
              </svg>
            </div>

      {/* ======================================================== */}
      {/* MAIN CONTAINER CONTENT (50/50 Balanced Grid) */}
      {/* ======================================================== */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

            {/* ---------------------------------------------------- */}
            {/* LEFT COLUMN: Location, Headlines, Doctor Card, CTAs */}
            {/* ---------------------------------------------------- */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-5 text-left">
              {/* Location Pill */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/90 border border-[#DCD5C9] shadow-2xs text-xs font-semibold text-[#17364B]">
                <MapPin className="w-3.5 h-3.5 text-[#B99A62]" />
                <span>{doctor.hospital.name}, {doctor.hospital.city}</span>
              </div>

                    {/* Main Headline */}
                    <div className="space-y-1">
                      <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-[54px] text-[#17364B] tracking-tight leading-[1.12]">
                        {t("home.hero.mainHeadlinePrefix", "Best")}{" "}
                        <span className="text-[#B99A62]">
                          {t("home.hero.mainHeadlineHighlight", "Andrologist")}
                        </span>{" "}
                        <span className="text-[#17364B]">in</span>
                        <br />
                        <span>{doctor.hospital.city}</span>
                      </h1>
                      <p className="text-base sm:text-lg lg:text-xl font-medium text-[#3A5668] pt-1">
                        {t("home.hero.tagline", "Advanced. Personalized. Compassionate.")}
                      </p>
                    </div>

                    {/* Doctor Profile Info Card */}
                    <div className="bg-white p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-[#E5DFD3] shadow-card space-y-3">
                      <div>
                        <h2 className="text-2xl sm:text-[26px] font-heading font-extrabold text-[#17364B] leading-tight">
                          {doctor.fullName}
                        </h2>
                        <p className="text-base font-bold text-[#17364B] mt-0.5">
                          {doctor.designation}
                        </p>
                        <p className="text-xs sm:text-sm text-[#4B6778] font-medium pt-0.5">
                          {doctor.specialization} | {doctor.hospital.name}, {doctor.hospital.city}
                        </p>
                      </div>

                        {/* 4 Specialty Focus Pills */}
                        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#EAE4D9]">
                          {/* 1: ED Management */}
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#17364B] bg-[#E5EFF0] border border-[#CCDCE0] px-3 py-1 rounded-full">
                            <span className="text-sm font-bold text-[#17364B] leading-none">♂</span>
                            <span>{t("home.hero.tagEd", "ED Management")}</span>
                          </span>

                            {/* 2: Penile Implants (IPP) */}
                            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#17364B] bg-[#FAF8F5] border border-[#E5DFD3] px-3 py-1 rounded-full">
                              <svg className="w-3.5 h-3.5 text-[#B99A62]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <ellipse cx="12" cy="5" rx="8" ry="3" />
                                <path d="M20 12c0 1.66-3.58 3-8 3s-8-1.34-8-3" />
                                <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
                              </svg>
                              <span>{t("home.hero.tagImplants", "Penile Implants (IPP)")}</span>
                            </span>

                            {/* 3: Male Infertility */}
                            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#17364B] bg-[#E5EFF0] border border-[#CCDCE0] px-3 py-1 rounded-full">
                              <svg className="w-3.5 h-3.5 text-[#2A7D8C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12A10 10 0 0 1 12 2z" />
                                <path d="m9 12 2 2 4-4" />
                              </svg>
                              <span>{t("home.hero.tagInfertility", "Male Infertility")}</span>
                            </span>

                            {/* 4: Laser & Robotic Urology */}
                            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#17364B] bg-[#FAF8F5] border border-[#E5DFD3] px-3 py-1 rounded-full">
                              <svg className="w-3.5 h-3.5 text-[#B99A62]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="6" cy="18" r="3" />
                                <circle cx="18" cy="6" r="3" />
                                <line x1="8.59" y1="15.41" x2="15.42" y2="8.59" />
                              </svg>
                              <span>{t("home.hero.tagRobotics", "Laser & Robotic Urology")}</span>
                            </span>
                          </div>
                        </div>

                    {/* CTA Buttons Row */}
                    <div className="flex flex-wrap items-center gap-3.5 pt-1">
                      <Link
                        href="/book-appointment"
                        className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm sm:text-base font-bold text-white bg-gradient-to-r from-[#B99A62] via-[#AF8F55] to-[#A3844C] hover:from-[#A8884F] hover:to-[#96773E] shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
                      >
                        <Calendar className="w-4 h-4 text-white" />
                        <span>{t("home.hero.ctaAppointment", "Book Appointment")}</span>
                        <span className="text-white font-extrabold ml-0.5">→</span>
                      </Link>

                        <button
                          type="button"
                          onClick={() => setVideoModalOpen(true)}
                          className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm sm:text-base font-bold text-[#17364B] bg-white hover:bg-[#FAF8F5] border border-[#DCD5C9] shadow-xs transition-all"
                        >
                          <span className="w-6 h-6 rounded-full bg-[#B99A62] text-white flex items-center justify-center shadow-xs flex-shrink-0">
                            <Play className="w-3 h-3 fill-white text-white ml-0.5" />
                          </span>
                          <span>{t("home.hero.ctaVideo", "Watch Video")}</span>
                        </button>
                      </div>

                            {/* 4 Value Proposition Mini-Cards (Centered Layout matching reference image) */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-2">
                              {/* Card 1 */}
                              <div className="flex flex-col items-center justify-center text-center p-3 rounded-2xl bg-white border border-[#E5DFD3] shadow-xs">
                                <div className="w-7 h-7 text-[#B99A62] flex items-center justify-center mb-1">
                                  <Users className="w-5 h-5 text-[#B99A62]" />
                                </div>
                                <span className="text-[11px] sm:text-xs font-bold text-[#17364B] leading-tight">
                                  Patient-Centered<br />Approach
                                </span>
                              </div>

                                {/* Card 2 */}
                                <div className="flex flex-col items-center justify-center text-center p-3 rounded-2xl bg-white border border-[#E5DFD3] shadow-xs">
                                  <div className="w-7 h-7 text-[#B99A62] flex items-center justify-center mb-1">
                                    <ShieldCheck className="w-5 h-5 text-[#B99A62]" />
                                  </div>
                                  <span className="text-[11px] sm:text-xs font-bold text-[#17364B] leading-tight">
                                    Advanced<br />Treatment Options
                                  </span>
                                </div>

                                  {/* Card 3 */}
                                  <div className="flex flex-col items-center justify-center text-center p-3 rounded-2xl bg-white border border-[#E5DFD3] shadow-xs">
                                    <div className="w-7 h-7 text-[#B99A62] flex items-center justify-center mb-1">
                                      <svg className="w-5 h-5 text-[#B99A62]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M6 18h8" />
                                        <path d="M3 22h18" />
                                        <path d="M14 22a7 7 0 1 0 0-14h-1" />
                                        <path d="M9 14h2" />
                                        <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
                                        <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
                                      </svg>
                                    </div>
                                    <span className="text-[11px] sm:text-xs font-bold text-[#17364B] leading-tight">
                                      Minimally Invasive &<br />Robotic Surgery
                                    </span>
                                  </div>

                                    {/* Card 4 */}
                                    <div className="flex flex-col items-center justify-center text-center p-3 rounded-2xl bg-white border border-[#E5DFD3] shadow-xs">
                                      <div className="w-7 h-7 text-[#B99A62] flex items-center justify-center mb-1">
                                        <Heart className="w-5 h-5 text-[#B99A62]" />
                                      </div>
                                      <span className="text-[11px] sm:text-xs font-bold text-[#17364B] leading-tight">
                                        Compassionate<br />Care
                                      </span>
                                    </div>
                                  </div>
                                </div>

                                  {/* ---------------------------------------------------- */}
                                  {/* RIGHT COLUMN: Doctor Arch Frame & Signature Capsule  */}
                                  {/* ---------------------------------------------------- */}
                                  <div className="lg:col-span-6 relative flex justify-center items-center mt-8 lg:mt-0">
                                    {/* Arch Framing Container - Generously Proportioned to match reference */}
                                    <div className="relative w-[340px] h-[460px] sm:w-[440px] sm:h-[540px] lg:w-[480px] lg:h-[580px] flex items-center justify-center">

                                      {/* The Arch Body with Rich Golden 3.5px Border */}
                                      <div className="absolute inset-0 rounded-t-full rounded-b-[44px] bg-gradient-to-b from-[#E0EFF0] via-[#EAF4F5] to-[#F5F2EB] border-[3.5px] border-[#B99A62] shadow-[0_16px_40px_rgba(23,54,75,0.12)] overflow-hidden">
                                        {/* Subtle Radial Top Light Glow */}
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.8),transparent_65%)] pointer-events-none" />

                                              {/* Doctor Cutout Photo - Close-up Medium Shot filling the arch like in the reference image */}
                                              <div className="relative w-full h-[122%] transform translate-y-2 flex items-end justify-center">
                                                <Image
                                                  src="/images/dr-rakesh-vamsi.png"
                                                  alt="Dr. Rakesh Vamsi - Consultant Urologist & Andrologist"
                                                  fill
                                                  className="object-cover object-[center_12%] drop-shadow-2xl"
                                                  priority
                                                />
                                              </div>
                                                </div>

                                                {/* Unified Signature & Emblem Capsule Badge resting across bottom of arch */}
                                                <div className="absolute -bottom-5 sm:-bottom-6 left-1/2 -translate-x-1/2 z-30 bg-white/95 backdrop-blur-md px-5 py-2.5 sm:px-6 sm:py-3 rounded-full shadow-[0_8px_30px_rgba(23,54,75,0.14)] border border-[#E5DFD3] flex items-center gap-4 sm:gap-6 whitespace-nowrap">
                                                  {/* Left part: Circular Emblem + Doctor Name + Urology & Andrology */}
                                                  <div className="flex items-center gap-2.5">
                                                    <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FAF8F5] border border-[#E5DFD3] p-0.5 flex-shrink-0 shadow-2xs">
                                                      <Image
                                                        src="/images/logo.png"
                                                        alt="Dr. Rakesh Vamsi"
                                                        fill
                                                        className="object-contain"
                                                      />
                                                    </div>
                                                      <div className="text-left leading-tight">
                                                        <div className="text-xs sm:text-sm font-heading font-extrabold text-[#17364B]">
                                                          Dr. Rakesh Vamsi
                                                        </div>
                                                        <div className="text-[8px] sm:text-[8.5px] font-bold uppercase tracking-wider text-[#1C6B7A] mt-0.5">
                                                          UROLOGY & ANDROLOGY
                                                        </div>
                                                      </div>
                                                    </div>

                                                  {/* Divider */}
                                                  <div className="h-7 w-[1px] bg-[#DCD5C9]" />

                                                      {/* Right part: Cursive Handwriting Signature + Designation */}
                                                      <div className="text-left leading-tight">
                                                        <div className="font-signature text-xl sm:text-2xl text-[#17364B] font-semibold -mb-0.5 tracking-wide">
                                                          Dr. Rakesh Vamsi
                                                        </div>
                                                        <div className="text-[7.5px] sm:text-[8px] font-extrabold uppercase tracking-widest text-[#17364B] mt-1">
                                                          CONSULTANT UROLOGIST & ANDROLOGIST
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
