"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ClipboardCheck,
  Stethoscope,
  Bed,
  HeartPulse,
  Users,
  ChevronRight,
  ChevronDown,
  Calendar,
  MapPin,
  ShieldCheck,
  Clock,
  ArrowRight,
  Hospital,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import {
  getLocalizedPatientGuides,
  getLocalizedPatientJourneySteps,
} from "@/data/localizedPatientInfo";
import { getLocalizedFaqs } from "@/data/localizedFaqs";
import { getLocalizedDoctorData } from "@/data/localizedDoctor";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export default function PatientInfoPage() {
  const { locale, t } = useLanguage();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedGuideId, setSelectedGuideId] = useState<string | null>(null);

  const locGuides = getLocalizedPatientGuides(locale);
  const locSteps = getLocalizedPatientJourneySteps(locale);
  const featuredFaqs = getLocalizedFaqs(locale).slice(0, 6);
  const locDoctor = getLocalizedDoctorData(locale);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "ClipboardCheck":
        return <ClipboardCheck className="w-6 h-6 text-brand-teal-600" />;
      case "Stethoscope":
        return <Stethoscope className="w-6 h-6 text-brand-teal-600" />;
      case "Bed":
        return <Bed className="w-6 h-6 text-brand-teal-600" />;
      case "HeartPulse":
        return <HeartPulse className="w-6 h-6 text-brand-teal-600" />;
      default:
        return <Users className="w-6 h-6 text-brand-teal-600" />;
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero Section matching screenshot */}
      <section className="relative overflow-hidden bg-hero-gradient text-white pt-12 pb-16 lg:pt-16 lg:pb-24">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-brand-cyan/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Headline */}
            <div className="lg:col-span-5 space-y-5 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t("patientInfo.badge", "PATIENT INFORMATION")}</span>
              </div>

              <div className="space-y-1">
                <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                  {locale === "te" ? (
                    <>
                      మీ ఆరోగ్యం. <br />
                      <span className="text-brand-cyan">మా మొదటి ప్రాధాన్యత.</span>
                    </>
                  ) : locale === "hi" ? (
                    <>
                      आपका स्वास्थ्य. <br />
                      <span className="text-brand-cyan">हमारी सर्वोच्च प्राथमिकता।</span>
                    </>
                  ) : (
                    <>
                      Your Health. <br />
                      <span className="text-brand-cyan">Our Priority.</span>
                    </>
                  )}
                </h1>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-md pt-2">
                  {t("patientInfo.heroSubtitle", "Everything you need to know before, during and after your consultation and treatment.")}
                </p>
              </div>
            </div>

            {/* Center: Doctor in Hospital Setting */}
            <div className="lg:col-span-4 flex justify-center items-center">
              <div className="relative w-64 h-80 sm:w-72 sm:h-96">
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
              <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-2xl text-slate-800 space-y-4 border border-slate-100">
                <span className="text-4xl font-serif text-brand-teal-500 leading-none block">
                  “
                </span>
                <p className="text-sm font-medium text-slate-700 leading-relaxed">
                  {t("patientInfo.doctorQuote", "An informed patient makes better decisions. We are here to guide you at every step.")}
                </p>
                <div className="pt-3 border-t border-slate-100 text-left">
                  <div className="text-xl font-signature text-brand-navy-900">
                    {locDoctor.name}
                  </div>
                  <div className="text-[9px] font-extrabold uppercase tracking-wider text-brand-teal-600 mt-0.5">
                    {locDoctor.designation}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 5 Patient Guides Cards Row matching screenshot */}
      <section className="py-14 bg-brand-surface border-b border-brand-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {locGuides.map((guide) => (
              <div
                key={guide.id}
                className="bg-white p-5 rounded-2xl border border-brand-border shadow-xs hover-lift transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-brand-teal-50 border border-brand-teal-100 flex items-center justify-center mb-4">
                    {renderIcon(guide.icon)}
                  </div>
                  <h3 className="font-heading font-extrabold text-base text-brand-navy-900">
                    {guide.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {guide.shortDesc}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setSelectedGuideId(
                      selectedGuideId === guide.id ? null : guide.id
                    )
                  }
                  className="mt-4 pt-3 border-t border-slate-100 inline-flex items-center gap-1.5 text-xs font-bold text-brand-teal-700 hover:text-brand-teal-600 transition-colors"
                >
                  <span>
                    {selectedGuideId === guide.id
                      ? (locale === "te" ? "వివరాలను దాచండి" : locale === "hi" ? "विवरण छुपाएं" : "Hide Details")
                      : (locale === "te" ? "మరింత తెలుసుకోండి" : locale === "hi" ? "और जानें" : "Learn More")}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

          {/* Expanded Guide Drawer/Details if clicked */}
          {selectedGuideId && (
            <div className="mt-6 bg-white p-6 sm:p-8 rounded-2xl border border-brand-teal-300 shadow-md animate-in fade-in duration-200">
              {(() => {
                const g = locGuides.find((item) => item.id === selectedGuideId);
                if (!g) return null;
                return (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-heading font-extrabold text-xl text-brand-navy-900">
                        {g.title} — {locale === "te" ? "వివరణాత్మక గైడ్" : locale === "hi" ? "विस्तृत मार्गदर्शिका" : "Detailed Guide"}
                      </h4>
                      <button
                        type="button"
                        onClick={() => setSelectedGuideId(null)}
                        className="text-xs text-slate-400 hover:text-slate-600 font-semibold"
                      >
                        {locale === "te" ? "మూసివేయి [×]" : locale === "hi" ? "बंद करें [×]" : "Close [×]"}
                      </button>
                    </div>
                    <p className="text-sm text-slate-700">{g.fullContent.overview}</p>
                    <ul className="space-y-2 text-sm text-slate-600">
                      {g.fullContent.items.map((it, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-brand-teal-500 mt-0.5 flex-shrink-0" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                    {g.fullContent.importantNote && (
                      <div className="p-3 bg-brand-teal-50 rounded-xl text-xs text-brand-teal-900 font-medium border border-brand-teal-200">
                        <strong>{locale === "te" ? "ముఖ్యమైనది:" : locale === "hi" ? "महत्वपूर्ण:" : "Important:"}</strong> {g.fullContent.importantNote}
                      </div>
                    )}
                  </div>
                );
              })()}
            </div>
          )}
        </div>
      </section>

      {/* 3. Your Journey with Us & FAQs Section matching screenshot */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Your Journey with Us (Steps 1 to 4) */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <SectionHeading
                  title={t("patientInfo.journeyTitle", "Your Journey with Us")}
                  subtitle={t("patientInfo.journeySubtitle", "A simple and transparent process for your convenience.")}
                />
              </div>

              {/* 4 Process Steps */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {locSteps.map((step) => (
                  <div
                    key={step.step}
                    className="p-5 rounded-2xl bg-brand-surface border border-brand-border space-y-2 hover-lift transition-all"
                  >
                    <div className="w-9 h-9 rounded-full bg-brand-teal-500 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                      {step.step}
                    </div>
                    <h4 className="font-heading font-extrabold text-base text-brand-navy-900">
                      {step.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Patient-Centered Care Callout Box */}
              <div className="p-5 rounded-2xl bg-brand-surface border border-brand-border flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-teal-100 text-brand-teal-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-sm text-brand-navy-900">
                    {locale === "te" ? "రోగి-కేంద్రీకృత సంరక్షణ" : locale === "hi" ? "रोगी-केंद्रित देखभाल" : "Patient-Centered Care"}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    {locale === "te"
                      ? "మీ చికిత్సా ప్రయాణంలో స్పష్టమైన సమాచారం, వ్యక్తిగత సంరక్షణ మరియు ఆప్యాయమైన సహకారాన్ని మేము అందిస్తాము."
                      : locale === "hi"
                      ? "हम आपकी पूरी यात्रा में स्पष्ट संचार, व्यक्तिगत उपचार योजनाएं और सहानुभूतिपूर्ण देखभाल प्रदान करने पर ध्यान केंद्रित करते हैं।"
                      : "We focus on providing clear communication, personalized treatment plans and compassionate care throughout your journey."}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: FAQs & Quick Information Sidebar */}
            <div className="lg:col-span-6 space-y-8">
              {/* Frequently Asked Questions */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-heading font-extrabold text-2xl text-brand-navy-900">
                      {t("patientInfo.faqsTitle", "Frequently Asked Questions")}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                      {t("patientInfo.faqsSubtitle", "Find answers to common questions about urology and andrology care.")}
                    </p>
                  </div>
                  <Link
                    href="/faqs"
                    className="text-xs font-bold text-brand-teal-700 hover:text-brand-teal-600 whitespace-nowrap hidden sm:inline-flex items-center gap-1"
                  >
                    <span>{t("patientInfo.viewAllFaqs", "View All FAQs")}</span>
                    <span>→</span>
                  </Link>
                </div>

                <div className="space-y-3">
                  {featuredFaqs.map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div
                        key={faq.id}
                        className="rounded-xl border border-brand-border bg-white overflow-hidden shadow-xs"
                      >
                        <button
                          type="button"
                          onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                          className="w-full p-4 text-left flex items-center justify-between gap-4 font-heading font-bold text-sm text-brand-navy-900"
                          aria-expanded={isOpen}
                        >
                          <span>{faq.question}</span>
                          <ChevronDown
                            className={cn(
                              "w-4 h-4 text-slate-400 transition-transform",
                              isOpen && "rotate-180 text-brand-teal-600"
                            )}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-600 border-t border-slate-100 leading-relaxed">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bottom KIMS Hospital Consultation Banner matching screenshot */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-brand-navy-950 via-brand-navy-900 to-brand-navy-800 border border-brand-teal-500/20 shadow-2xl p-8 sm:p-10 lg:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30">
                {locale === "te" ? "మమ్మల్ని సందర్శించండి" : locale === "hi" ? "हमसे मिलें" : "VISIT US"}
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                {locale === "te"
                  ? "KIMS హాస్పిటల్, నెల్లూరులో సంప్రదింపు"
                  : locale === "hi"
                  ? "किम्स अस्पताल, नेल्लोर में परामर्श"
                  : "Consultation at KIMS Hospital, Nellore"}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                {locale === "te"
                  ? "మెరుగైన ఫలితాల కోసం ఆధునిక సౌకర్యాలు మరియు సమగ్ర వైద్య సేవలు అందుబాటులో ఉన్నాయి."
                  : locale === "hi"
                  ? "बेहतर परिणामों के लिए उन्नत सुविधाओं और बहुविषयक देखभाल की सुविधा।"
                  : "Access to advanced facilities and multidisciplinary care for better outcomes."}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <Link
                href="/book-appointment"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-gradient-to-r from-brand-teal-500 to-brand-cyan shadow-md hover:shadow-glow transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>{t("common.bookAppointment", "Book Appointment")} →</span>
              </Link>
              <a
                href={locDoctor.hospital.mapQuery ? `https://www.google.com/maps/search/?api=1&query=${locDoctor.hospital.mapQuery}` : "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <span>{locale === "te" ? "దారి తెలుసుకోండి →" : locale === "hi" ? "दिशा-निर्देश प्राप्त करें →" : "Get Directions →"}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
