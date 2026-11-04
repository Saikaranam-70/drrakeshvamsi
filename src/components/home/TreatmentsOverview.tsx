"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { getLocalizedTreatments } from "@/data/localizedTreatments";
import TreatmentCard from "@/components/treatments/TreatmentCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

export default function TreatmentsOverview() {
  const { locale, t } = useLanguage();
  const treatments = getLocalizedTreatments(locale);
  // Highlight top Andrology treatments (ED, Penile Implants, Male Infertility) alongside core Urology
  const featuredSlugs = [
    "erectile-dysfunction",
    "penile-implants",
    "male-infertility",
    "kidney-stones",
    "prostate-care",
    "laparoscopic-robotic-surgery",
  ];
  const featuredTreatments = featuredSlugs
    .map((slug) => treatments.find((t) => t.slug === slug))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  return (
      <section className="py-20 bg-brand-navy-950/70 border-y border-brand-navy-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionHeading
              badge={t("home.treatmentsOverview.badge", "OUR SERVICES")}
              badgeIcon={<Sparkles className="w-3.5 h-3.5 text-brand-cyan" />}
              title={t("home.treatmentsOverview.title", "Comprehensive Urology & Andrology Care")}
              subtitle={t("home.treatmentsOverview.subtitle", "Evidence-based treatments with advanced technology for better outcomes.")}
            />

            <Link
              href="/treatments"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-brand-cyan bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-cyan/40 shadow-xs transition-colors self-start md:self-end"
            >
              <span>{t("home.treatmentsOverview.viewAllButton", "View All Treatments")}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Treatment Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTreatments.map((treatment) => (
              <TreatmentCard key={treatment.slug} treatment={treatment} />
            ))}
          </div>
        </div>
      </section>
      );
}
