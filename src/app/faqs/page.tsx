"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  ChevronDown,
  HelpCircle,
  Calendar,
  X,
} from "lucide-react";
import { getLocalizedFaqs } from "@/data/localizedFaqs";
import { getLocalizedDoctorData } from "@/data/localizedDoctor";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

export default function FaqsPage() {
  const { locale, t } = useLanguage();
  const doctor = getLocalizedDoctorData(locale);
  const faqs = getLocalizedFaqs(locale);

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openFaqIndex, setOpenFaqIndex] = useState<string | null>("when-to-see");

  const categories = useMemo(() => {
    if (locale === "te") {
      return [
        { id: "all", label: "అన్ని ప్రశ్నలు" },
        { id: "consultation", label: "సంప్రదింపులు & సందర్శనలు" },
        { id: "treatments", label: "చికిత్సలు & కోలుకోవడం" },
        { id: "stones", label: "కిడ్నీ రాళ్లు & లేజర్ సర్జరీ" },
        { id: "prostate", label: "ప్రోస్టేట్ & పురుషుల ఆరోగ్యం" },
        { id: "insurance", label: "ఇన్సూరెన్స్ & ఆసుపత్రి" },
      ];
    }
    if (locale === "hi") {
      return [
        { id: "all", label: "सभी प्रश्न" },
        { id: "consultation", label: "परामर्श और दौरे" },
        { id: "treatments", label: "उपचार और रिकवरी" },
        { id: "stones", label: "गुर्दे की पथरी और लेजर सर्जरी" },
        { id: "prostate", label: "प्रोस्टेट और पुरुषों का स्वास्थ्य" },
        { id: "insurance", label: "बीमा और अस्पताल" },
      ];
    }
    return [
      { id: "all", label: "All Questions" },
      { id: "consultation", label: "Consultation & Visits" },
      { id: "treatments", label: "Treatments & Recovery" },
      { id: "stones", label: "Kidney Stones & Laser Surgery" },
      { id: "prostate", label: "Prostate & Men's Health" },
      { id: "insurance", label: "Insurance & Hospital" },
    ];
  }, [locale]);

  const filteredFaqs = useMemo(() => {
    return faqs.filter((f) => {
      const matchesCategory =
        selectedCategory === "all" || f.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        f.question.toLowerCase().includes(q) ||
        f.answer.toLowerCase().includes(q);

      return matchesCategory && matchesQuery;
    });
  }, [faqs, selectedCategory, searchQuery]);

  return (
    <div className="bg-[#F6F3EC] text-[#17364B] min-h-screen">
      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-[#F6F3EC] text-[#17364B] pt-12 pb-16 lg:pt-16 lg:pb-20 text-center border-b border-[#E5DFD3]">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#E5EFF0]/50 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E5EFF0] text-[#17364B] border border-[#CCDDE0]">
            <HelpCircle className="w-3.5 h-3.5 text-[#B99A62]" />
            <span>
              {locale === "te"
                ? "జ్ఞానం & రోగి సహాయం"
                : locale === "hi"
                  ? "ज्ञान एवं रोगी सहायता"
                  : "KNOWLEDGE & SUPPORT"}
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#17364B] tracking-tight leading-tight">
            {locale === "te" ? (
              <>
                తరచుగా అడిగే <span className="text-[#B99A62]">ప్రశ్నలు (FAQs)</span>
              </>
            ) : locale === "hi" ? (
              <>
                अक्सर पूछे जाने वाले <span className="text-[#B99A62]">सवाल (FAQs)</span>
              </>
            ) : (
              <>
                Frequently Asked <span className="text-[#B99A62]">Questions</span>
              </>
            )}
          </h1>

          <p className="text-sm sm:text-base text-[#3A5668] max-w-2xl mx-auto leading-relaxed">
            {locale === "te"
              ? "యూరాలజికల్ సమస్యలు, శస్త్రచికిత్స చికిత్సలు మరియు ఆసుపత్రి సంప్రదింపులపై స్పష్టమైన, పారదర్శకమైన మరియు వైద్యపరంగా సమీక్షించబడిన సమాధానాలు."
              : locale === "hi"
                ? "यूरोलॉजिकल स्थितियों, सर्जिकल उपचारों और अस्पताल परामर्शों के बारे में स्पष्ट, पारदर्शी और चिकित्सकीय रूप से समीक्षित उत्तर।"
                : "Clear, transparent, and medically reviewed answers about urological conditions, surgical treatments, and hospital consultations."}
          </p>

          {/* Search Bar in Hero */}
          <div className="max-w-lg mx-auto pt-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8BA4B2]" />
              <input
                type="text"
                placeholder={
                  locale === "te"
                    ? "ఏదైనా ఆరోగ్య ప్రశ్న లేదా చికిత్స గురించి శోధించండి..."
                    : locale === "hi"
                      ? "किसी भी स्वास्थ्य प्रश्न या उपचार की खोज करें..."
                      : "Search any health question or treatment..."
                }
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-10 py-3 rounded-full text-xs sm:text-sm bg-white border border-[#DCD5C9] text-[#17364B] placeholder-[#8BA4B2] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#B99A62]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8BA4B2] hover:text-[#17364B]"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Category Filter Bar */}
      <div className="bg-[#F6F3EC]/95 border-b border-[#E5DFD3] sticky top-[69px] z-30 shadow-xs backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-3">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    isSelected
                      ? "bg-[#B99A62] text-white font-bold shadow-xs"
                      : "bg-white text-[#17364B] border border-[#DCD5C9] hover:border-[#B99A62]"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. Main Accordion List */}
      <section className="py-14 bg-[#F6F3EC] min-h-[60vh]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {filteredFaqs.length > 0 ? (
            <div className="space-y-3.5">
              {filteredFaqs.map((faq) => {
                const isOpen = openFaqIndex === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="bg-white rounded-2xl border border-[#E5DFD3] overflow-hidden shadow-card transition-all"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenFaqIndex(isOpen ? null : faq.id)
                      }
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span className="font-heading font-extrabold text-base sm:text-lg text-[#17364B]">
                        {faq.question}
                      </span>
                      <div
                        className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200",
                          isOpen
                            ? "bg-[#B99A62] text-white rotate-180"
                            : "bg-[#FAF8F5] text-[#4B6778] border border-[#E5DFD3]"
                        )}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 text-[#3A5668] text-sm sm:text-base leading-relaxed border-t border-[#E5DFD3] bg-[#FAF8F5] animate-in fade-in duration-200">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-12 text-center border border-[#E5DFD3] shadow-card space-y-3">
              <HelpCircle className="w-12 h-12 text-[#8BA4B2] mx-auto" />
              <h3 className="font-heading font-bold text-lg text-[#17364B]">
                {locale === "te"
                  ? "సరిపోలే ప్రశ్నలు కనుగొనబడలేదు"
                  : locale === "hi"
                    ? "कोई मेल खाने वाले प्रश्न नहीं मिले"
                    : "No matching questions found"}
              </h3>
              <p className="text-xs sm:text-sm text-[#4B6778]">
                {locale === "te"
                  ? `"${searchQuery}" శోధనకు అనుగుణమైన సమాధానాలు దొరకలేదు. దయచేసి మా ఆసుపత్రి డెస్క్‌ను సంప్రదించండి లేదా నేరుగా అపాయింట్‌మెంట్ బుక్ చేసుకోండి.`
                  : locale === "hi"
                    ? `"${searchQuery}" से मेल खाने वाले उत्तर नहीं मिले। कृपया हमारे अस्पताल डेस्क से संपर्क करें या सीधे परामर्श बुक करें।`
                    : `Could not find answers matching "${searchQuery}". Please contact our hospital desk or book a consultation directly.`}
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="px-4 py-2 rounded-full text-xs font-semibold text-white bg-[#B99A62] hover:bg-[#A3844C]"
              >
                {locale === "te"
                  ? "శోధనను రీసెట్ చేయండి"
                  : locale === "hi"
                    ? "सर्च रीसेट करें"
                    : "Reset Search"}
              </button>
            </div>
          )}

          {/* Still Have Questions Consultation Box */}
          <div className="mt-12 bg-[#E5EFF0] text-[#17364B] rounded-3xl p-8 sm:p-10 border border-[#CCDDE0] shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="font-heading font-bold text-xl text-[#17364B]">
                {locale === "te"
                  ? "మీ ఆరోగ్య పరిస్థితి గురించి ఇంకా ప్రశ్నలు ఉన్నాయా?"
                  : locale === "hi"
                    ? "क्या आपकी स्थिति के बारे में अभी भी प्रश्न हैं?"
                    : "Still have questions regarding your condition?"}
              </h3>
              <p className="text-xs sm:text-sm text-[#3A5668]">
                {locale === "te"
                  ? `${doctor.hospital.city} లోని ${doctor.hospital.name} లో ${doctor.fullName} గారితో ప్రత్యక్ష సంప్రదింపును షెడ్యూల్ చేయండి.`
                  : locale === "hi"
                    ? `${doctor.hospital.city} स्थित ${doctor.hospital.name} में ${doctor.fullName} के साथ व्यक्तिगत परामर्श निर्धारित करें।`
                    : `Schedule an in-person consultation with ${doctor.fullName} at ${doctor.hospital.name}, ${doctor.hospital.city}.`}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/book-appointment"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-[#B99A62] hover:bg-[#A3844C] shadow-sm transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>
                  {locale === "te"
                    ? "అపాయింట్‌మెంట్ బుక్ చేయండి →"
                    : locale === "hi"
                      ? "अपॉइंटमेंट बुक करें →"
                      : "Book Appointment →"}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
