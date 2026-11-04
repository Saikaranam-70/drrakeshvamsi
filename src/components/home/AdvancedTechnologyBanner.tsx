"use client";

import React from "react";
import Link from "next/link";
import { Calendar, Cpu, Sparkles, CheckCircle2, Play } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AdvancedTechnologyBanner() {
  const { locale, t } = useLanguage();

  return (
      <section className="py-12 bg-brand-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-brand-navy-950 via-brand-navy-900 to-brand-navy-800 border border-brand-teal-500/20 shadow-2xl p-8 sm:p-12 lg:p-14 text-white">
            {/* Subtle Ambient Glows */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-cyan/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-teal-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Robotic / Tech Visual Motif */}
              <div className="lg:col-span-4 flex items-center justify-center">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl bg-white/5 border border-white/10 p-6 flex flex-col items-center justify-center text-center backdrop-blur-sm shadow-inner">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-brand-teal-600 to-brand-cyan flex items-center justify-center text-white shadow-glow mb-4">
                    <Cpu className="w-10 h-10" />
                  </div>
                  <div className="text-xs uppercase tracking-widest font-bold text-brand-cyan">
                    {t("home.advancedTech.roboticsCardLabel", "High-Precision")}
                  </div>
                  <div className="font-heading font-extrabold text-sm sm:text-base text-white mt-0.5">
                    {t("home.advancedTech.roboticsCardTitle", "Robotic & Laparoscopy")}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">
                    {t("home.advancedTech.roboticsCardSub", "da Vinci & 4K Endoscopy")}
                  </div>
                </div>
              </div>

              {/* Middle Content */}
              <div className="lg:col-span-5 space-y-4 text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t("home.advancedTech.badge", "ADVANCED TECHNOLOGY")}</span>
                </div>

                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
                  {t("home.advancedTech.headingPrefix", "Minimally Invasive.")} <br className="hidden sm:inline" />
                  <span className="text-brand-cyan">
                    {t("home.advancedTech.headingHighlight", "Better Outcomes.")}
                  </span>
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                  {t(
                    "home.advancedTech.desc",
                    "State-of-the-art laparoscopic and robotic surgery for faster recovery, less pain and improved quality of life. Backed by world-class infrastructure at KIMS Hospital, Nellore."
                  )}
                </p>

                <div className="flex flex-wrap gap-4 pt-1 text-xs text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
                    <span>{t("home.advancedTech.benefit1", "Keyhole Incisions")}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
                    <span>{t("home.advancedTech.benefit2", "Minimal Discomfort")}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
                    <span>{t("home.advancedTech.benefit3", "24-Hour Discharge")}</span>
                  </div>
                </div>
              </div>

              {/* Right CTA Button */}
              <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col gap-3 justify-start lg:justify-end">
                <Link
                  href="/book-appointment"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-bold bg-gradient-to-r from-brand-teal-500 to-brand-cyan hover:from-brand-teal-400 hover:to-brand-cyan/90 text-brand-navy-950 shadow-xl shadow-brand-teal-500/20 hover:shadow-glow transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Calendar className="w-4 h-4 text-brand-navy-950" />
                  <span className="text-brand-navy-950">{t("home.advancedTech.cta", "Book an Appointment")}</span>
                  <span className="text-brand-navy-950 font-bold">→</span>
                </Link>

                <a
                  href="#clinical-videos"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-all text-center"
                >
                  <Play className="w-3.5 h-3.5 fill-current text-brand-cyan" />
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
