"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Quote, ShieldCheck } from "lucide-react";
import { getLocalizedTestimonials } from "@/data/localizedTestimonials";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

export default function TestimonialsPreview() {
  const { locale, t } = useLanguage();
  const testimonials = getLocalizedTestimonials(locale);

  return (
      <section className="py-20 bg-brand-navy-950 text-white border-b border-brand-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionHeading
              badge={t("home.testimonialsPreview.badge", "PATIENT EXPERIENCES")}
              title={t("home.testimonialsPreview.title", "Real Stories of Healing and Care")}
              subtitle={t("home.testimonialsPreview.subtitle", "Read verified feedback from patients treated by Dr. Rakesh Vamsi at KIMS Hospital Nellore.")}
            />

            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-brand-cyan bg-brand-navy-900 border border-brand-navy-700 hover:border-brand-cyan hover:bg-brand-navy-800 shadow-xs transition-colors self-start md:self-end"
            >
              <span>{t("home.testimonialsPreview.viewAllButton", "View All Stories")}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Testimonials 3 Columns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="bg-brand-navy-900/90 rounded-2xl p-7 border border-brand-navy-800 hover:border-brand-teal-400/40 shadow-xl flex flex-col justify-between hover-lift transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-brand-teal-500/10 text-brand-cyan flex items-center justify-center">
                      <Quote className="w-5 h-5 fill-current" />
                    </div>
                    <div className="flex items-center gap-1 text-brand-cyan bg-brand-teal-950/80 px-2.5 py-1 rounded-full text-[11px] font-bold border border-brand-teal-700/60">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{t("home.testimonialsPreview.verifiedBadge", "Verified Patient")}</span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed italic">
                    &ldquo;{item.story}&rdquo;
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-brand-navy-800 flex items-center justify-between">
                  <div>
                    <div className="font-heading font-bold text-sm text-white">
                      {locale === "te" ? "రోగి" : locale === "hi" ? "मरीज़" : "Patient"} {item.patientInitials}
                    </div>
                    <div className="text-xs text-slate-400">{item.location}</div>
                  </div>
                  <span className="text-[11px] font-semibold text-brand-cyan bg-brand-navy-800 px-2.5 py-1 rounded-lg border border-brand-navy-700">
                    {item.treatmentCategory.split("(")[0]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      );
}
