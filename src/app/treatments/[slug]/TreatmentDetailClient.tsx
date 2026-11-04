"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Clock,
  Phone,
  MessageCircle,
  Mail,
  ChevronRight,
  ChevronDown,
  ShieldCheck,
  AlertTriangle,
  Stethoscope,
  Activity,
  Droplet,
  Flame,
  HelpCircle,
  Sparkles,
  MapPin,
} from "lucide-react";
import { TreatmentDetail } from "@/data/treatmentsData";
import { DoctorInfo } from "@/data/doctorData";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { getLocalizedTreatment } from "@/data/localizedTreatments";
import { getLocalizedDoctorData } from "@/data/localizedDoctor";

interface Props {
  treatment: TreatmentDetail;
  relatedTreatments: TreatmentDetail[];
  doctor: DoctorInfo;
}

const TAB_CONFIG = [
  { id: "overview", labelKey: "overview", defaultLabel: "Overview" },
  { id: "symptoms", labelKey: "symptoms", defaultLabel: "Symptoms" },
  { id: "causes", labelKey: "causes", defaultLabel: "Causes" },
  { id: "diagnosis", labelKey: "diagnosis", defaultLabel: "Diagnosis" },
  { id: "treatment-options", labelKey: "treatmentOptions", defaultLabel: "Treatment Options" },
  { id: "recovery", labelKey: "recovery", defaultLabel: "Recovery" },
  { id: "when-to-consult", labelKey: "whenToConsult", defaultLabel: "When to Consult" },
  { id: "faqs", labelKey: "faqs", defaultLabel: "FAQs" },
];

export default function TreatmentDetailClient({
  treatment,
  relatedTreatments,
  doctor,
}: Props) {
  const { locale, t } = useLanguage();
  const [activeTab, setActiveTab] = useState("overview");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const locTreatment = getLocalizedTreatment(treatment.slug, locale) || treatment;
  const locDoctor = getLocalizedDoctorData(locale);
  const locRelated = relatedTreatments.map((rel) => getLocalizedTreatment(rel.slug, locale) || rel);

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -130;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const badgeLabels = {
    diagnosis: locale === "te" ? { top: "ఖచ్చితమైన", bottom: "రోగ నిర్ధారణ" } : locale === "hi" ? { top: "सटीक", bottom: "निदान" } : { top: "Accurate", bottom: "Diagnosis" },
    treatment: locale === "te" ? { top: "కనిష్ట ఇన్వాసివ్", bottom: "చికిత్స" } : locale === "hi" ? { top: "मिनिमली इनवेसिव", bottom: "उपचार" } : { top: "Minimally Invasive", bottom: "Treatment" },
    recovery: locale === "te" ? { top: "త్వరిత", bottom: "కోలుకోవడం" } : locale === "hi" ? { top: "तेज़", bottom: "रिकवरी" } : { top: "Faster", bottom: "Recovery" },
    care: locale === "te" ? { top: "వ్యక్తిగత", bottom: "సంరక్షణ ప్రణాళిక" } : locale === "hi" ? { top: "व्यक्तिगत", bottom: "देखभाल योजना" } : { top: "Personalized", bottom: "Care Plan" },
  };

  const tabLabelsMap: Record<string, Record<string, string>> = {
    overview: { en: "Overview", te: "అవలోకనం", hi: "अवलोकन" },
    symptoms: { en: "Symptoms", te: "లక్షణాలు", hi: "लक्षण" },
    causes: { en: "Causes", te: "కారణాలు", hi: "कारण" },
    diagnosis: { en: "Diagnosis", te: "రోగ నిర్ధారణ", hi: "निदान" },
    treatmentOptions: { en: "Treatment Options", te: "చికిత్సా విధానాలు", hi: "उपचार विकल्प" },
    recovery: { en: "Recovery", te: "కోలుకోవడం", hi: "रिकवरी" },
    whenToConsult: { en: "When to Consult", te: "ఎప్పుడు సంప్రదించాలి", hi: "कब परामर्श लें" },
    faqs: { en: "FAQs", te: "ప్రశ్నోత్తరాలు", hi: "अक्सर पूछे जाने वाले प्रश्न" },
  };

  const getTabLabel = (key: string, def: string) => {
    return tabLabelsMap[key]?.[locale] || def;
  };

  return (
        <div className="bg-[#F6F3EC] text-[#17364B] min-h-screen">
          {/* 1. Treatment-Specific Hero Section */}
          <section className="relative overflow-hidden bg-[#F6F3EC] text-[#17364B] pt-8 pb-14 lg:pt-12 lg:pb-16 border-b border-[#E5DFD3]">
            <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#E5EFF0]/50 rounded-full blur-3xl pointer-events-none" />

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Back link */}
                <Link
                  href="/treatments"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B99A62] hover:text-[#17364B] transition-colors mb-6"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>{t("treatments.backToTreatments", "Back to Treatments")}</span>
                </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      {/* Left Column: Headlines & 4 Badges */}
                      <div className="lg:col-span-7 space-y-5 text-left">
                        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#17364B] tracking-tight leading-tight">
                          {locTreatment.title.split(" ")[0]}{" "}
                          <span className="text-[#B99A62]">
                            {locTreatment.title.split(" ").slice(1).join(" ") || "Care"}
                          </span>
                        </h1>

                          <p className="text-sm sm:text-base text-[#3A5668] max-w-xl leading-relaxed">
                            {locTreatment.heroDescription}
                          </p>

                          {/* 4 Feature Badges */}
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
                            <div className="p-2.5 rounded-xl bg-white border border-[#E5DFD3] shadow-xs text-left">
                              <div className="text-[#B99A62] font-bold text-xs">{badgeLabels.diagnosis.top}</div>
                              <div className="text-[#17364B] text-xs font-medium">{badgeLabels.diagnosis.bottom}</div>
                            </div>
                            <div className="p-2.5 rounded-xl bg-white border border-[#E5DFD3] shadow-xs text-left">
                              <div className="text-[#B99A62] font-bold text-xs">{badgeLabels.treatment.top}</div>
                              <div className="text-[#17364B] text-xs font-medium">{badgeLabels.treatment.bottom}</div>
                            </div>
                            <div className="p-2.5 rounded-xl bg-white border border-[#E5DFD3] shadow-xs text-left">
                              <div className="text-[#B99A62] font-bold text-xs">{badgeLabels.recovery.top}</div>
                              <div className="text-[#17364B] text-xs font-medium">{badgeLabels.recovery.bottom}</div>
                            </div>
                            <div className="p-2.5 rounded-xl bg-white border border-[#E5DFD3] shadow-xs text-left">
                              <div className="text-[#B99A62] font-bold text-xs">{badgeLabels.care.top}</div>
                              <div className="text-[#17364B] text-xs font-medium">{badgeLabels.care.bottom}</div>
                            </div>
                          </div>
                      </div>

                      {/* Right Column: Doctor Quote Card with Signature */}
                      <div className="lg:col-span-5 flex justify-center lg:justify-end">
                        <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-card text-[#17364B] space-y-4 border border-[#E5DFD3] max-w-sm w-full">
                          <span className="text-4xl font-serif text-[#B99A62] leading-none block">
                            “
                          </span>
                          <p className="text-sm font-medium text-[#3A5668] leading-relaxed">
                            {locTreatment.quote}
                          </p>
                              <div className="pt-3 border-t border-[#E5DFD3] text-left">
                                <div className="text-xl font-signature text-[#17364B]">
                                  {locDoctor.name}
                                </div>
                                  <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#B99A62] mt-0.5">
                                    {locDoctor.designation}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>

      {/* 2. In-Page Sticky Tab Navigation Bar */ }
                              < div className = "sticky top-[69px] z-30 bg-[#F6F3EC]/95 backdrop-blur-md border-b border-[#E5DFD3] shadow-xs" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 overflow-x-auto no-scrollbar py-2.5">
            <div className="flex items-center gap-1.5 flex-nowrap">
              {TAB_CONFIG.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => scrollToSection(tab.id)}
                  className={cn(
                    "px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors",
                    activeTab === tab.id
                      ? "bg-[#B99A62] text-white font-bold shadow-xs"
                      : "text-[#3A5668] hover:text-[#B99A62] hover:bg-[#E5EFF0]"
                  )}
                >
                  {getTabLabel(tab.labelKey, tab.defaultLabel)}
                </button>
              ))}
            </div>

                  <Link
                    href="/book-appointment"
                    className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold text-white bg-[#B99A62] hover:bg-[#A3844C] shadow-sm transition-all whitespace-nowrap flex-shrink-0"
                  >
                    <Calendar className="w-3.5 h-3.5 text-white" />
                    <span>{t("common.bookAppointment", "Book Appointment")} →</span>
                  </Link>
                </div>
              </div>
            </div>

                    {/* 3. Main Two-Column Layout */}
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                        {/* Left Main Content Column */}
                        <div className="lg:col-span-8 space-y-12">
                          {/* SECTION 1: Overview */}
                          <section id="overview" className="scroll-mt-36 space-y-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-xl bg-[#E5EFF0] border border-[#CCDDE0] text-[#B99A62] flex items-center justify-center font-bold">
                                01
                              </div>
                              <h2 className="font-heading font-extrabold text-2xl text-[#17364B]">
                                {getTabLabel("overview", "Overview")}
                              </h2>
                            </div>

                            <p className="text-base text-[#3A5668] leading-relaxed">
                              {locTreatment.overview.description}
                            </p>

              {/* Key Points Checklist Card */ }
                                  < div className = "p-6 rounded-2xl bg-white border border-[#E5DFD3] shadow-card space-y-3" >
                <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-[#17364B]">
                  {locale === "te" ? "ముఖ్య అంశాలు" : locale === "hi" ? "मुख्य बिंदु" : "Key Points"}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {locTreatment.overview.keyPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3A5668]">
                      <CheckCircle2 className="w-4 h-4 text-[#B99A62] mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
                            </div>
                        </section>

                          {/* SECTION 2: Symptoms */}
                          <section id="symptoms" className="scroll-mt-36 space-y-5">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-xl bg-[#E5EFF0] border border-[#CCDDE0] text-[#B99A62] flex items-center justify-center font-bold">
                                02
                              </div>
                              <h2 className="font-heading font-extrabold text-2xl text-[#17364B]">
                                {getTabLabel("symptoms", "Symptoms")}
                              </h2>
                            </div>
                            <p className="text-sm text-[#3A5668]">
                              {locale === "te"
                                ? "లక్షణాలు తేలికపాటి అసౌకర్యం నుండి తీవ్రమైన బాధ వరకు ఉండవచ్చు. ప్రారంభంలో గుర్తించడం త్వరిత చికిత్సకు తోడ్పడుతుంది."
                                : locale === "hi"
                                  ? "लक्षण हल्के असहजता से लेकर गंभीर परेशानी तक हो सकते हैं। प्रारंभिक पहचान से त्वरित व दर्दरहित उपचार संभव होता है।"
                                  : "Symptoms can vary from mild discomfort to acute distress. Early identification allows prompt, painless intervention."}
                            </p>

              {/* Symptoms Cards Grid */}
                                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
                                    {locTreatment.symptoms.map((s, idx) => (
                                      <div
                                        key={idx}
                                        className="p-4 rounded-xl bg-white border border-[#E5DFD3] shadow-card flex flex-col items-center text-center space-y-2 hover-lift transition-all"
                                      >
                                        <div className="w-10 h-10 rounded-xl bg-[#E5EFF0] border border-[#CCDDE0] text-[#B99A62] flex items-center justify-center">
                                          <AlertTriangle className="w-5 h-5" />
                                        </div>
                                        <span className="font-heading font-bold text-xs text-[#17364B]">
                                          {s.title}
                                        </span>
                                        {s.description && (
                                          <span className="text-[11px] text-[#4B6778]">
                                            {s.description}
                                          </span>
                                        )}
                  </div>
                ))}
                          </div>
                        </section>

                          {/* SECTION 3: Causes */}
                          <section id="causes" className="scroll-mt-36 space-y-5">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-xl bg-[#E5EFF0] border border-[#CCDDE0] text-[#B99A62] flex items-center justify-center font-bold">
                                03
                              </div>
                              <h2 className="font-heading font-extrabold text-2xl text-[#17364B]">
                                {locale === "te" ? "కారణాలు & రిస్క్ అంశాలు" : locale === "hi" ? "कारण और जोखिम कारक" : "Causes & Risk Factors"}
                              </h2>
                            </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
                {locTreatment.causes.map((c, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-[#E5DFD3] shadow-card flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#E5EFF0] text-[#B99A62] border border-[#CCDDE0] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Droplet className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-xs text-[#17364B]">
                        {c.title}
                      </h4>
                      {c.description && (
                        <p className="text-[11px] text-[#4B6778] mt-0.5">
                          {c.description}
                        </p>
                      )}
                    </div>
                  </div>
                                    ))}
              </div>
                          </section>

                            {/* SECTION 4: Diagnosis */}
                            <section id="diagnosis" className="scroll-mt-36 space-y-5">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-[#E5EFF0] border border-[#CCDDE0] text-[#B99A62] flex items-center justify-center font-bold">
                                  04
                                </div>
                                <h2 className="font-heading font-extrabold text-2xl text-[#17364B]">
                                  {getTabLabel("diagnosis", "Diagnosis")}
                                </h2>
                              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {locTreatment.diagnosis.map((d, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-[#E5DFD3] shadow-card space-y-2 hover-lift transition-all"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#E5EFF0] border border-[#CCDDE0] text-[#B99A62] flex items-center justify-center">
                      <Stethoscope className="w-4 h-4" />
                    </div>
                    <h4 className="font-heading font-bold text-sm text-[#17364B]">
                      {d.title}
                    </h4>
                    <p className="text-xs text-[#3A5668] leading-relaxed">
                      {d.description}
                    </p>
                  </div>
                ))}
                          </div>
                        </section>

                          {/* SECTION 5: Treatment Options */}
                          <section id="treatment-options" className="scroll-mt-36 space-y-5">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-xl bg-[#E5EFF0] border border-[#CCDDE0] text-[#B99A62] flex items-center justify-center font-bold">
                                05
                              </div>
                              <h2 className="font-heading font-extrabold text-2xl text-[#17364B]">
                                {getTabLabel("treatmentOptions", "Treatment Options")}
                              </h2>
                            </div>

                                        <div className="space-y-4">
                                          {locTreatment.treatmentOptions.map((opt, idx) => (
                                            <div
                                              key={idx}
                                              className="p-6 rounded-2xl bg-white border border-[#E5DFD3] shadow-card hover-lift transition-all space-y-3"
                                            >
                                              <div className="flex flex-wrap items-center justify-between gap-2">
                                                <h4 className="font-heading font-extrabold text-lg text-[#17364B]">
                                                  {opt.title}
                                                </h4>
                                                {opt.isMinimallyInvasive && (
                                                  <span className="text-[11px] font-bold text-[#17364B] bg-[#E5EFF0] px-2.5 py-0.5 rounded-full border border-[#CCDDE0]">
                                                    {locale === "te" ? "కనిష్ట ఇన్వాసివ్" : locale === "hi" ? "मिनिमली इनवेसिव" : "Minimally Invasive"}
                                                  </span>
                                                )}
                                              </div>
                                                <p className="text-xs font-semibold text-[#B99A62]">
                                                  {opt.subtitle}
                                                </p>
                                                  <p className="text-sm text-[#3A5668] leading-relaxed">
                                                    {opt.description}
                                                  </p>
                                                    <div className="pt-2 flex items-center gap-2 text-xs font-medium text-[#4B6778]">
                                                      <Clock className="w-3.5 h-3.5 text-[#B99A62]" />
                                                      <span>
                                                        {locale === "te" ? "కోలుకునే సమయం / ఆసుపత్రి బస: " : locale === "hi" ? "रिकवरी / अस्पताल में रहने का समय: " : "Recovery / Hospital stay: "}
                                                        {opt.recoveryTime}
                                                      </span>
                                                    </div>
                                                  </div>
                ))}
                                                </div>
                                              </section>

                                              {/* SECTION 6: Recovery */}
                                                <section id="recovery" className="scroll-mt-36 space-y-5">
                                                  <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-xl bg-[#E5EFF0] border border-[#CCDDE0] text-[#B99A62] flex items-center justify-center font-bold">
                                                      06
                                                    </div>
                                                    <h2 className="font-heading font-extrabold text-2xl text-[#17364B]">
                                                      {locale === "te" ? "కోలుకోవడం & ఫాలో-అప్" : locale === "hi" ? "रिकवरी और फॉलो-अप" : "Recovery & Follow-Up"}
                                                    </h2>
                                                  </div>

                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                  <div className="p-4 rounded-xl bg-white border border-[#E5DFD3] shadow-card space-y-1">
                                                    <span className="text-xs font-bold uppercase tracking-wider text-[#B99A62]">
                                                      {locale === "te" ? "ఆసుపత్రి బస" : locale === "hi" ? "अस्पताल में रुकना" : "Hospital Stay"}
                                                    </span>
                                                    <p className="text-xs sm:text-sm text-[#3A5668]">
                                                      {locTreatment.recoveryInfo.hospitalStay}
                                                    </p>
                                                  </div>
                                                  <div className="p-4 rounded-xl bg-white border border-[#E5DFD3] shadow-card space-y-1">
                                                    <span className="text-xs font-bold uppercase tracking-wider text-[#B99A62]">
                                                      {locale === "te" ? "సాధారణ జీవితానికి తిరిగి రావడం" : locale === "hi" ? "दैनिक जीवन में वापसी" : "Resuming Normal Life"}
                                                    </span>
                                                    <p className="text-xs sm:text-sm text-[#3A5668]">
                                                      {locTreatment.recoveryInfo.resumingDailyLife}
                                                    </p>
                                                  </div>
                                                  <div className="p-4 rounded-xl bg-white border border-[#E5DFD3] shadow-card space-y-1">
                                                    <span className="text-xs font-bold uppercase tracking-wider text-[#B99A62]">
                                                      {locale === "te" ? "ఆహారం & నీటి వినియోగం" : locale === "hi" ? "आहार और जलयोजन" : "Diet & Hydration"}
                                                    </span>
                                                    <p className="text-xs sm:text-sm text-[#3A5668]">
                                                      {locTreatment.recoveryInfo.dietLifestyle}
                                                    </p>
                                                  </div>
                                                  <div className="p-4 rounded-xl bg-white border border-[#E5DFD3] shadow-card space-y-1">
                                                    <span className="text-xs font-bold uppercase tracking-wider text-[#B99A62]">
                                                      {locale === "te" ? "ఫాలో-అప్ సంరక్షణ" : locale === "hi" ? "फॉलो-अप देखभाल" : "Follow-Up Care"}
                                                    </span>
                                                    <p className="text-xs sm:text-sm text-[#3A5668]">
                                                      {locTreatment.recoveryInfo.followUp}
                                                    </p>
                                                  </div>
                                                </div>
                                              </section>

                                                {/* SECTION 7: When to Consult */}
                                                <section id="when-to-consult" className="scroll-mt-36 space-y-4">
                                                  <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-xl bg-[#E5EFF0] border border-[#CCDDE0] text-[#B99A62] flex items-center justify-center font-bold">
                                                      07
                                                    </div>
                                                    <h2 className="font-heading font-extrabold text-2xl text-[#17364B]">
                                                      {getTabLabel("whenToConsult", "When to Consult a Specialist")}
                                                    </h2>
                                                  </div>

                                                <div className="p-6 rounded-2xl bg-[#FFF9EE] border border-[#B99A62]/30 space-y-3">
                                                  <p className="text-xs font-bold uppercase tracking-wider text-[#B99A62]">
                                                    {locale === "te"
                                                      ? "ఈ క్రింది లక్షణాలు కనిపిస్తే సంప్రదింపులను ఆలస్యం చేయవద్దు:"
                                                      : locale === "hi"
                                                        ? "यदि आप निम्नलिखित लक्षणों का अनुभव करते हैं तो परामर्श में देरी न करें:"
                                                        : "Do not delay consultation if you experience:"}
                                                  </p>
                                                  <ul className="space-y-2 text-xs sm:text-sm text-[#17364B]">
                                                    {locTreatment.whenToConsult.map((item, idx) => (
                                                      <li key={idx} className="flex items-start gap-2">
                                                        <span className="text-[#B99A62] font-bold">•</span>
                                                        <span>{item}</span>
                                                      </li>
                                                    ))}
                                                  </ul>
                                                </div>
                                              </section>

                                                {/* SECTION 8: FAQs */}
                                                <section id="faqs" className="scroll-mt-36 space-y-4">
                                                  <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-xl bg-[#E5EFF0] border border-[#CCDDE0] text-[#B99A62] flex items-center justify-center font-bold">
                                                      08
                                                    </div>
                                                    <h2 className="font-heading font-extrabold text-2xl text-[#17364B]">
                                                      {getTabLabel("faqs", "Frequently Asked Questions")}
                                                    </h2>
                                                  </div>

              <div className="space-y-3">
                {locTreatment.faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-xl border border-[#E5DFD3] bg-white overflow-hidden shadow-card"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full p-4 text-left flex items-center justify-between gap-4 font-heading font-bold text-sm text-[#17364B]"
                        aria-expanded={isOpen}
                      >
                        <span>{faq.question}</span>
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 text-[#B99A62] transition-transform",
                            isOpen && "rotate-180"
                          )}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-[#3A5668] border-t border-[#E5DFD3] bg-[#FAF8F5]">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                                                          );
                })}
              </div>
                                                </section>
          </div>

                                            {/* Right Sidebar Column */}
                                            <aside aria-label="Appointment booking and assistance" className="lg:col-span-4 space-y-6 lg:sticky lg:top-36">
                                              {/* 1. Book a Consultation Card */}
                                              <div className="bg-white text-[#17364B] rounded-2xl p-6 sm:p-7 shadow-card border border-[#E5DFD3] space-y-4">
                                                <div className="w-12 h-12 rounded-xl bg-[#E5EFF0] text-[#B99A62] flex items-center justify-center">
                                                  <Calendar className="w-6 h-6" />
                                                </div>

                                                <div>
                                                  <h3 className="font-heading font-bold text-lg text-[#17364B]">
                                                    {locale === "te" ? "సంప్రదింపును బుక్ చేయండి" : locale === "hi" ? "परामर्श बुक करें" : "Book a Consultation"}
                                                  </h3>
                                                  <p className="text-xs text-[#3A5668] mt-1 leading-relaxed">
                                                    {locale === "te"
                                                      ? `డాక్టర్ రాకేష్ వంశీ (KIMS హాస్పిటల్ నెల్లూరు) వద్ద ${locTreatment.title} కోసం నిపుణుల సలహా మరియు వ్యక్తిగత సంరక్షణ పొందండి.`
                                                      : locale === "hi"
                                                        ? `किम्स अस्पताल नेल्लोर में डॉ. राकेश वामसी से ${locTreatment.title} के लिए विशेषज्ञ मूल्यांकन और व्यक्तिगत उपचार प्राप्त करें।`
                                                        : `Get expert evaluation and personalized treatment for ${locTreatment.title.toLowerCase()} from Dr. Rakesh Vamsi at KIMS Hospital Nellore.`}
                                                  </p>
                                                </div>

                                              <Link
                                                href="/book-appointment"
                                                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-bold text-white bg-[#B99A62] hover:bg-[#A3844C] shadow-sm transition-all"
                                              >
                                                <span>{t("common.bookAppointment", "Book Appointment")}</span>
                                                <span>→</span>
                                              </Link>
                                          </div>

            {/* 2. Related Treatments Card */}
                                          {locRelated.length > 0 && (
                                            <div className="bg-white rounded-2xl p-5 border border-[#E5DFD3] shadow-card space-y-3">
                                              <h4 className="font-heading font-bold text-sm text-[#17364B]">
                                                {locale === "te" ? "సంబంధిత చికిత్సలు" : locale === "hi" ? "संबंधित उपचार" : "Related Treatments"}
                                              </h4>
                                              <div className="space-y-2">
                                                {locRelated.map((rel) => (
                                                  <Link
                                                    key={rel.slug}
                                                    href={`/treatments/${rel.slug}`}
                                                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#E5EFF0] text-xs font-semibold text-[#3A5668] hover:text-[#B99A62] transition-colors"
                                                  >
                                                    <span>{rel.title}</span>
                                                    <ChevronRight className="w-3.5 h-3.5 text-[#B99A62]" />
                                                  </Link>
                                                ))}
                                              </div>
                                            </div>
                                          )}

                                            {/* 3. Need Help Card */}
                                            <div className="bg-white rounded-2xl p-5 border border-[#E5DFD3] shadow-card space-y-4">
                                              <h4 className="font-heading font-bold text-sm text-[#17364B]">
                                                {locale === "te" ? "తక్షణ సహాయం కావాలా?" : locale === "hi" ? "तुरंत सहायता चाहिए?" : "Need Immediate Help?"}
                                              </h4>

                                                <div className="space-y-3">
                                                  {/* Phone */}
                                                  <a
                                                    href={`tel:${locDoctor.hospital.phone.replace(/\s+/g, "")}`}
                                                    className="flex items-center gap-3 p-2.5 rounded-xl bg-[#FAF8F5] hover:bg-[#E5EFF0] border border-[#E5DFD3] transition-colors group"
                                                  >
                                                    <div className="w-8 h-8 rounded-lg bg-[#E5EFF0] text-[#B99A62] flex items-center justify-center">
                                                      <Phone className="w-4 h-4" />
                                                    </div>
                                                    <div className="text-left leading-tight">
                                                      <div className="text-xs font-bold text-[#17364B] group-hover:text-[#B99A62]">
                                                        {locDoctor.hospital.phone}
                                                      </div>
                                                      <div className="text-[10px] text-[#4B6778]">
                                                        {locale === "te" ? "ఆసుపత్రి డెస్క్ & అత్యవసర సేవ" : locale === "hi" ? "अस्पताल डेस्क और आपातकालीन" : "Hospital desk & emergency"}
                                                      </div>
                                                    </div>
                                                  </a>

                                                  {/* WhatsApp */}
                                                  <a
                                                    href={`https://wa.me/917674008057?text=${encodeURIComponent(
                                                      locale === "te"
                                                        ? `నమస్తే డాక్టర్ జి. రాకేష్ వంశీ గారు, నాకు ${locTreatment.title} గురించి వివరాలు కావాలి.`
                                                        : locale === "hi"
                                                          ? `नमस्ते डॉ. जी. राकेश वामसी, मुझे ${locTreatment.title} के बारे में जानकारी चाहिए।`
                                                          : `Hi Dr. G. Rakesh Vamsi, I have an inquiry about ${locTreatment.title}`
                                                    )}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-3 p-2.5 rounded-xl bg-[#EAF7EE] hover:bg-[#DDF2E3] border border-emerald-300 transition-colors group"
                                                  >
                                                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                                                      <MessageCircle className="w-4 h-4 fill-current" />
                                                    </div>
                                                    <div className="text-left leading-tight">
                                                      <div className="text-xs font-bold text-emerald-900">
                                                        {locale === "te" ? "వాట్సాప్‌లో చాట్ చేయండి" : locale === "hi" ? "व्हाट्सएप पर चैट करें" : "Chat on WhatsApp"}
                                                      </div>
                                                      <div className="text-[10px] text-emerald-700">
                                                        {locale === "te" ? "త్వరిత ప్రశ్న స్పందన" : locale === "hi" ? "त्वरित प्रश्न उत्तर" : "Quick query response"}
                                                      </div>
                                                    </div>
                                                  </a>

                                    {/* Email */}
                                    <a
                                      href={`mailto:${locDoctor.hospital.email}`}
                                      className="flex items-center gap-3 p-2.5 rounded-xl bg-[#FAF8F5] hover:bg-[#E5EFF0] border border-[#E5DFD3] transition-colors group"
                                    >
                                      <div className="w-8 h-8 rounded-lg bg-[#E5EFF0] text-[#B99A62] flex items-center justify-center">
                                        <Mail className="w-4 h-4" />
                                      </div>
                                      <div className="text-left leading-tight">
                                        <div className="text-xs font-bold text-[#17364B] group-hover:text-[#B99A62] truncate max-w-[170px]">
                                          {locDoctor.hospital.email}
                                        </div>
                                        <div className="text-[10px] text-[#4B6778]">
                                          {locale === "te" ? "మీ రిపోర్టులను పంపండి" : locale === "hi" ? "अपनी रिपोर्ट हमें भेजें" : "Send us your reports"}
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
          </aside>
                          </div>
                      </div>
                    </div>
                    );
}
