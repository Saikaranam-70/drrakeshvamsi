"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Calendar,
  CheckCircle,
  GraduationCap,
  HeartHandshake,
  Hospital,
  ShieldCheck,
  Stethoscope,
  Users,
  UserCheck,
  Activity,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getLocalizedDoctorData } from "@/data/localizedDoctor";
import { getLocalizedTreatments } from "@/data/localizedTreatments";
import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutPage() {
  const { locale, t } = useLanguage();
  const doctor = getLocalizedDoctorData(locale);
  const treatments = getLocalizedTreatments(locale);

  return (
    <div>
      {/* 1. Hero Section matching screenshot */}
      <section className="relative overflow-hidden bg-hero-gradient text-white pt-12 pb-16 lg:pt-16 lg:pb-24">
        {/* Glow Effects */}
        <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-brand-cyan/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-brand-teal-500/20 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Doctor Title & Care Icons */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30">
                {t("about.heroBadge", "ABOUT")}
              </div>

              <div className="space-y-1">
                <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                  {t("about.heroTitle", "Dr. Rakesh")} <span className="text-brand-cyan">{t("about.heroTitleHighlight", "Vamsi")}</span>
                </h1>
                <p className="text-lg sm:text-xl font-bold text-brand-teal-300">
                  {doctor.designation}
                </p>
                <p className="text-xs sm:text-sm text-slate-300">
                  {doctor.specialization} &nbsp;|&nbsp; {doctor.hospital.name}, {doctor.hospital.city}
                </p>
              </div>

              <p className="text-sm text-slate-200 leading-relaxed">
                {doctor.shortBio}
              </p>

              {/* 4 Icon Highlights */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-8 h-8 rounded-lg bg-brand-cyan/20 text-brand-cyan flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-slate-200 leading-snug">
                    {t("about.highlight1", "Patient-Centered Care")}
                  </span>
                </div>

                <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-8 h-8 rounded-lg bg-brand-cyan/20 text-brand-cyan flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-slate-200 leading-snug">
                    {t("about.highlight2", "Advanced Treatment Options")}
                  </span>
                </div>

                <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-8 h-8 rounded-lg bg-brand-cyan/20 text-brand-cyan flex items-center justify-center flex-shrink-0">
                    <Stethoscope className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-slate-200 leading-snug">
                    {t("about.highlight3", "Minimally Invasive & Robotic Surgery")}
                  </span>
                </div>

                <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-8 h-8 rounded-lg bg-brand-cyan/20 text-brand-cyan flex items-center justify-center flex-shrink-0">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-slate-200 leading-snug">
                    {t("about.highlight4", "Compassionate Approach")}
                  </span>
                </div>
              </div>
            </div>

            {/* Middle: Doctor Cutout in Cyan Circle Halo */}
            <div className="lg:col-span-4 flex justify-center items-center">
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[420px]">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-teal-500 to-brand-cyan opacity-80 blur-xl" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-brand-cyan/60 bg-gradient-to-b from-brand-navy-900 to-brand-navy-950 flex items-end justify-center shadow-2xl">
                  <Image
                    src="/images/dr-rakesh-vamsi.png"
                    alt="Dr. Rakesh Vamsi"
                    fill
                    className="object-contain object-bottom pt-4"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Right: Quote Card with Signature */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-2xl text-slate-800 space-y-5 border border-slate-100">
                <span className="text-5xl font-serif text-brand-teal-500 leading-none block">
                  “
                </span>
                <p className="text-sm font-medium text-slate-700 leading-relaxed">
                  {doctor.quote}
                </p>
                <div className="pt-3 border-t border-slate-100 text-left">
                  <div className="text-2xl font-signature text-brand-navy-900">
                    Dr. Rakesh Vamsi
                  </div>
                  <div className="text-[10px] font-extrabold uppercase tracking-wider text-brand-teal-600 mt-0.5">
                    {doctor.designation}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Metrics Strip matching reference */}
      <section className="bg-white border-b border-slate-200 shadow-sm py-6 relative z-20 -mt-4 mx-4 sm:mx-8 lg:mx-auto max-w-6xl rounded-2xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          <div className="flex flex-col items-center justify-center p-2">
            <div className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-navy-900">
              {doctor.experienceYears}
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
              {t("about.yearsExp", "Years of Experience")}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center p-2">
            <div className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-teal-600">
              {doctor.patientsCount}
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
              {t("about.happyPatients", "Happy Patients")}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center p-2">
            <div className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-navy-900">
              {doctor.surgeriesCount}
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
              {t("about.advancedSurgeries", "Advanced Surgeries")}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center p-2">
            <div className="text-2xl sm:text-3xl font-heading font-extrabold text-brand-teal-600">
              {locale === "te" ? "ప్రస్తుతం" : locale === "hi" ? "वर्तमान" : "Present"}
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
              {t("about.hospitalLocation", "At KIMS Hospital, Nellore")}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Qualifications & Specializations 2-Column Section */}
      <section className="py-20 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Academic Qualifications */}
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                badge={t("about.qualificationsBadge", "QUALIFICATIONS & TRAINING")}
                title={t("about.qualificationsTitle", "Academic Qualifications")}
                subtitle={t("about.qualificationsSubtitle", "Strong academic foundation with specialized surgical training in urology and andrology.")}
              />

              <div className="space-y-4 pt-2">
                {doctor.qualifications.map((q, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-brand-border shadow-xs flex items-start gap-4 hover-lift transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-brand-teal-50 border border-brand-teal-100 text-brand-teal-600 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-heading font-bold text-base text-brand-navy-900">
                          {q.degree}
                        </h4>
                        <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                          {q.year}
                        </span>
                      </div>
                      <p className="text-xs text-brand-teal-700 font-semibold mt-0.5">
                        {q.institution}
                      </p>
                      <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                        {q.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Specializations Grid */}
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                badge={t("about.specializationsBadge", "AREAS OF EXPERTISE")}
                title={t("about.specializationsTitle", "Specializations")}
                subtitle={t("about.specializationsSubtitle", "Comprehensive care for a wide range of urological and andrological conditions using the latest evidence-based approaches.")}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {treatments.slice(0, 6).map((treatment) => (
                  <Link
                    key={treatment.slug}
                    href={`/treatments/${treatment.slug}`}
                    className="p-5 rounded-2xl bg-white border border-brand-border shadow-xs hover-lift transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-brand-teal-50 border border-brand-teal-100 text-brand-teal-600 flex items-center justify-center mb-3 group-hover:bg-brand-teal-500 group-hover:text-white transition-colors">
                        <Activity className="w-5 h-5" />
                      </div>
                      <h4 className="font-heading font-bold text-sm text-brand-navy-900 group-hover:text-brand-teal-600 transition-colors">
                        {treatment.title}
                      </h4>
                      <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                        {treatment.shortDescription}
                      </p>
                    </div>
                    <span className="text-xs font-bold text-brand-teal-600 mt-3 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      {t("about.viewTreatmentDetails", "View Treatment Details →")}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Treatment Philosophy & Hospital Association CTA */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <SectionHeading
            badge={t("about.philosophyBadge", "CLINICAL PHILOSOPHY")}
            title={t("about.philosophyTitle", "Patient Comfort, Scientific Rigor & Transparent Guidance")}
            subtitle={t("about.philosophySubtitle", "Dr. Rakesh Vamsi ensures every individual patient understands their diagnosis, benefits of non-surgical vs surgical pathways, and post-procedure recovery expectations.")}
            align="center"
          />

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              href="/book-appointment"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-brand-teal-600 to-brand-navy-800 shadow-md hover:shadow-lg transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>{t("about.bookWithDoctor", "Book Appointment with Dr. Rakesh Vamsi")}</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-brand-navy-900 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <Hospital className="w-4 h-4 text-brand-teal-600" />
              <span>{t("about.hospitalLocationTimings", "Hospital Location & Timings")}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
