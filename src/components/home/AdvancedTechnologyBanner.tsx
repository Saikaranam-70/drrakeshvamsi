"use client";

import React from "react";
import Link from "next/link";
import { Calendar, Cpu, Sparkles, CheckCircle2, Play } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AdvancedTechnologyBanner() {
  const { locale, t } = useLanguage();

  return (
          <section className="py-12 bg-[#FAF8F5]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative rounded-3xl overflow-hidden bg-[#E5EFF0] border border-[#CCDDE0] shadow-card p-8 sm:p-12 lg:p-14 text-[#17364B]">
                {/* Subtle Ambient Glows */}
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/60 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#B99A62]/10 rounded-full blur-2xl pointer-events-none" />

                      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        {/* Left Robotic / Tech Visual Motif */}
                        <div className="lg:col-span-4 flex items-center justify-center">
                          <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl bg-white border border-[#D5E4E6] p-6 flex flex-col items-center justify-center text-center shadow-card">
                            <div className="w-20 h-20 rounded-2xl bg-[#B99A62] flex items-center justify-center text-white shadow-md mb-4">
                              <Cpu className="w-10 h-10" />
                            </div>
                            <div className="text-xs uppercase tracking-widest font-bold text-[#B99A62]">
                              {t("home.advancedTech.roboticsCardLabel", "High-Precision")}
                            </div>
                            <div className="font-heading font-extrabold text-sm sm:text-base text-[#17364B] mt-0.5">
                              {t("home.advancedTech.roboticsCardTitle", "Robotic & Laparoscopy")}
                            </div>
                            <div className="text-[10px] text-[#4B6778] mt-1 font-medium">
                              {t("home.advancedTech.roboticsCardSub", "da Vinci & 4K Endoscopy")}
                            </div>
                          </div>
                        </div>

                          {/* Middle Content */}
                          <div className="lg:col-span-5 space-y-4 text-left">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#17364B] border border-[#B99A62]/30 shadow-xs">
                              <Sparkles className="w-3.5 h-3.5 text-[#B99A62]" />
                              <span>{t("home.advancedTech.badge", "ADVANCED TECHNOLOGY")}</span>
                            </div>

                            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#17364B] tracking-tight leading-tight">
                              {t("home.advancedTech.headingPrefix", "Minimally Invasive.")} <br className="hidden sm:inline" />
                              <span className="text-[#B99A62]">
                                {t("home.advancedTech.headingHighlight", "Better Outcomes.")}
                              </span>
                            </h2>

                            <p className="text-sm sm:text-base text-[#3A5668] leading-relaxed max-w-xl">
                              {t(
                                "home.advancedTech.desc",
                                "State-of-the-art laparoscopic and robotic surgery for faster recovery, less pain and improved quality of life. Backed by world-class infrastructure at KIMS Hospital, Nellore."
                              )}
                            </p>

                              <div className="flex flex-wrap gap-4 pt-1 text-xs text-[#17364B] font-semibold">
                                <div className="flex items-center gap-1.5">
                                  <CheckCircle2 className="w-4 h-4 text-[#B99A62]" />
                                  <span>{t("home.advancedTech.benefit1", "Keyhole Incisions")}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                  <CheckCircle2 className="w-4 h-4 text-[#B99A62]" />
                                  <span>{t("home.advancedTech.benefit2", "Minimal Discomfort")}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                  <CheckCircle2 className="w-4 h-4 text-[#B99A62]" />
                                  <span>{t("home.advancedTech.benefit3", "24-Hour Discharge")}</span>
                                </div>
                              </div>
                            </div>

                              {/* Right CTA Button */}
                              <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col gap-3 justify-start lg:justify-end">
                                <Link
                                  href="/book-appointment"
                                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-bold bg-[#B99A62] hover:bg-[#A3844C] text-white shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                                >
                                  <Calendar className="w-4 h-4 text-white" />
                                  <span>{t("home.advancedTech.cta", "Book an Appointment")}</span>
                                  <span className="font-bold">→</span>
                                </Link>

                              <a
                                href="#clinical-videos"
                                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-[#17364B] bg-white hover:bg-[#FAF8F5] border border-[#CCDDE0] transition-all text-center shadow-xs"
                              >
                                <Play className="w-3.5 h-3.5 fill-current text-[#B99A62]" />
                                <span>
                                  {locale === "te"
                                    ? "శస్త్రచికిత్స వీడియోలను చూడండి"
                                    : locale === "hi"
                                      ? "सर्जरी वीडियो देखें"
                                      : "Watch Procedure Videos"}
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                    </div>
                  </section>
                  );
}
