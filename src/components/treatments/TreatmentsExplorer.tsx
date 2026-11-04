"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Sparkles, X, Calendar, Phone, Activity } from "lucide-react";
import { getLocalizedTreatments, getLocalizedTreatmentCategories } from "@/data/localizedTreatments";
import TreatmentCard from "./TreatmentCard";
import AdvancedTechnologyBanner from "@/components/home/AdvancedTechnologyBanner";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";
import { getLocalizedDoctorData } from "@/data/localizedDoctor";

export default function TreatmentsExplorer() {
  const { locale, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const treatments = getLocalizedTreatments(locale);
  const categories = getLocalizedTreatmentCategories(locale);
  const doctor = getLocalizedDoctorData(locale);

  const filteredTreatments = useMemo(() => {
    return treatments.filter((item) => {
      // Category filter match
      const matchesCategory =
        selectedCategory === "all" ||
        item.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        (selectedCategory === "kidney" && (item.category.includes("Kidney") || item.category.includes("కిడ్నీ") || item.category.includes("किडनी"))) ||
        (selectedCategory === "prostate" && (item.category.includes("Prostate") || item.category.includes("ప్రోస్టేట్") || item.category.includes("प्रोस्टेट"))) ||
        (selectedCategory === "infertility" && (item.category.includes("Infertility") || item.category.includes("సంతానలేమి") || item.category.includes("बांझपन"))) ||
        (selectedCategory === "mens-health" && (item.category.includes("Men") || item.category.includes("Andrology") || item.category.includes("ఆండ్రాలజీ") || item.category.includes("పురుషుల") || item.category.includes("पुरुष"))) ||
        (selectedCategory === "oncology" && (item.category.includes("Cancer") || item.category.includes("క్యాన్సర్") || item.category.includes("कैंसर"))) ||
        (selectedCategory === "robotics" && (item.category.includes("Laparoscopic") || item.category.includes("లాపరోస్కోపిక్") || item.category.includes("लेप्रोस्कोपिक"))) ||
        (selectedCategory === "reconstructive" && (item.category.includes("Reconstructive") || item.category.includes("రీకన్‌స్ట్రక్టివ్") || item.category.includes("పునర్నిర్మాణ") || item.category.includes("पुनर्निर्माण")));

      // Search match
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.shortDescription.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [treatments, selectedCategory, searchQuery]);

  return (
      <div className="bg-[#FAF8F5] text-[#17364B]">
        {/* 1. Hero Section matching screenshot */}
          <section className="relative overflow-hidden bg-[#F6F3EC] text-[#17364B] pt-12 pb-16 lg:pt-16 lg:pb-20 border-b border-[#E5DFD3]">
            <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#E5EFF0]/80 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Left Column: Headlines & 4 Badges */}
                <div className="lg:col-span-7 space-y-6 text-left">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E5EFF0] text-[#17364B] border border-[#B99A62]/30 shadow-xs">
                      <Sparkles className="w-3.5 h-3.5 text-[#B99A62]" />
                      <span>{t("treatments.heroBadge", "OUR TREATMENTS")}</span>
                    </div>

                    <div className="space-y-2">
                        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#17364B] tracking-tight leading-tight">
                          {t("treatments.heroTitle", "Comprehensive Urology &")} <br />
                            <span className="text-[#B99A62]">
                              {t("treatments.heroTitleHighlight", "Andrology Care")}
                            </span>
                        </h1>
                          <p className="text-sm sm:text-base text-[#3A5668] max-w-xl">
                            {t("treatments.heroSubtitle", "Evidence-based treatments with advanced technology for better outcomes.")}
                          </p>
                        </div>

                        {/* 4 Feature Badges */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                            <div className="p-2.5 rounded-xl bg-white border border-[#E5DFD3] shadow-xs text-left">
                              <div className="text-[#B99A62] font-bold text-xs">{t("treatments.badge1", "Accurate Diagnosis")}</div>
                              <div className="text-[#17364B] text-xs font-semibold">{locale === "te" ? "పరిశీలన" : locale === "hi" ? "परीक्षण" : "Diagnosis"}</div>
                            </div>
                              <div className="p-2.5 rounded-xl bg-white border border-[#E5DFD3] shadow-xs text-left">
                                <div className="text-[#B99A62] font-bold text-xs">{t("treatments.badge2", "Advanced Technology")}</div>
                                <div className="text-[#17364B] text-xs font-semibold">{locale === "te" ? "సాంకేతికత" : locale === "hi" ? "तकनीक" : "Technology"}</div>
                              </div>
                                <div className="p-2.5 rounded-xl bg-white border border-[#E5DFD3] shadow-xs text-left">
                                  <div className="text-[#B99A62] font-bold text-xs">{t("treatments.badge3", "Minimally Invasive")}</div>
                                  <div className="text-[#17364B] text-xs font-semibold">{locale === "te" ? "విధానం" : locale === "hi" ? "दृष्टिकोण" : "Approach"}</div>
                                </div>
                                  <div className="p-2.5 rounded-xl bg-white border border-[#E5DFD3] shadow-xs text-left">
                                    <div className="text-[#B99A62] font-bold text-xs">{t("treatments.badge4", "Personalized Plans")}</div>
                                    <div className="text-[#17364B] text-xs font-semibold">{locale === "te" ? "ప్రణాళికలు" : locale === "hi" ? "योजनाएं" : "Plans"}</div>
                                  </div>
                                </div>
                              </div>

                              {/* Right Column: Quote Card */}
                              <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center">
                                    <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-card text-[#17364B] space-y-4 border border-[#E5DFD3] max-w-sm w-full">
                                      <span className="text-4xl font-serif text-[#B99A62] leading-none block">
                                        “
                                      </span>
                                        <p className="text-sm font-medium text-[#3A5668] leading-relaxed">
                                          {t("treatments.doctorQuote", "Advanced treatment options for every stage of urological and andrological conditions.")}
                                        </p>
                                            <div className="pt-3 border-t border-[#EAE4D9] text-left">
                                              <div className="text-xl font-signature text-[#17364B]">
                                                Dr. Rakesh Vamsi
                                              </div>
                                                <div className="text-[9px] font-extrabold uppercase tracking-wider text-[#B99A62] mt-0.5">
                                                  {doctor.designation}
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                    </div>
                                  </section>

                                  {/* 2. Interactive Search & Category Filter Pills */}
                                    <section className="bg-[#F6F3EC]/95 py-8 border-b border-[#E5DFD3] sticky top-[69px] z-30 shadow-xs backdrop-blur-md">
                                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
                                        {/* Search Bar */}
                                        <div className="relative max-w-2xl mx-auto">
                                          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8BA4B2]" />
                                          <input
                                            type="text"
                                            placeholder={t("treatments.searchPlaceholder", "Search treatments by condition, symptoms, or surgical procedure...")}
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            className="w-full pl-11 pr-10 py-3 rounded-full text-xs sm:text-sm bg-white border border-[#DCD5C9] text-[#17364B] placeholder-[#8BA4B2] focus:outline-none focus:ring-2 focus:ring-[#B99A62] shadow-xs"
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

                                        {/* Filter Pills */}
                                          <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar py-2 px-2 sm:px-4 justify-start md:justify-center scroll-smooth">
                                            {categories.map((cat) => {
                                              const isSelected = selectedCategory === cat.id;
                                              return (
                                                <button
                                                  key={cat.id}
                                                  type="button"
                                                  onClick={() => setSelectedCategory(cat.id)}
                                                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 flex-shrink-0 ${isSelected
                                                      ? "bg-[#B99A62] text-white font-bold shadow-xs"
                                                      : "bg-white text-[#17364B] hover:text-[#B99A62] border border-[#DCD5C9] hover:bg-[#FAF8F5]"
                                                    }`}
                                                >
                                                  {cat.name}
                                                </button>
                                              );
                                            })}
                                          </div>
                                        </div>
                                  </section>

                                  {/* 3. Treatments Grid */}
                                  <section className="py-14 bg-[#FAF8F5] min-h-[50vh]">
                                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                      {filteredTreatments.length > 0 ? (
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                          {filteredTreatments.map((treatment) => (
                                            <TreatmentCard key={treatment.slug} treatment={treatment} />
                                          ))}
                                        </div>
                                      ) : (
                                        <div className="bg-white rounded-3xl p-12 text-center border border-[#E5DFD3] shadow-card space-y-4 max-w-md mx-auto">
                                          <Activity className="w-12 h-12 text-[#B99A62] mx-auto" />
                                          <h3 className="font-heading font-bold text-lg text-[#17364B]">
                                            {t("treatments.noResultsTitle", "No matching treatments found")}
                                          </h3>
                                          <p className="text-xs sm:text-sm text-[#4B6778]">
                                            {t("treatments.noResultsDesc", "Try adjusting your search query or select another category.")}
                                          </p>
                                          <button
                                            type="button"
                                            onClick={() => {
                                              setSearchQuery("");
                                              setSelectedCategory("all");
                                            }}
                                            className="px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#B99A62] hover:bg-[#A3844C] transition-colors shadow-xs"
                                          >
                                            {t("actions.resetSearch", "Reset Search")}
                                          </button>
                                        </div>
                                      )}
                                    </div>
                                  </section>

                                  {/* 4. Advanced Technology & Robotic Surgery Banner */}
                                  <AdvancedTechnologyBanner />

                                      {/* 5. Consultation CTA Bottom Banner */}
                                      <section className="py-16 bg-[#F6F3EC] border-t border-[#E5DFD3] text-[#17364B]">
                                        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
                                          <SectionHeading
                                            badge={t("patientInfo.visitUsBadge", "VISIT US")}
                                            title={t("treatments.consultationCtaHeading", "Need Expert Medical Advice for Your Condition?")}
                                            subtitle={t("treatments.consultationCtaDesc", "Schedule an in-person consultation with Dr. Rakesh Vamsi at KIMS Hospital, Nellore.")}
                                            align="center"
                                          />

                                            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                                              <Link
                                                href="/book-appointment"
                                                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#B99A62] hover:bg-[#A3844C] shadow-md transition-all"
                                              >
                                                <Calendar className="w-4 h-4 text-white" />
                                                <span>{t("treatments.bookAppointment", "Book Appointment →")}</span>
                                              </Link>

                                              <a
                                                href={`tel:${doctor.hospital.phone.replace(/\s+/g, "")}`}
                                                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-[#17364B] bg-white hover:bg-[#FAF8F5] border border-[#DCD5C9] transition-colors shadow-xs"
                                              >
                                                <Phone className="w-4 h-4 text-[#B99A62]" />
                                                <span>{t("treatments.callDesk", "Call Hospital Desk")}</span>
                                              </a>
                                            </div>
                                          </div>
                                  </section>
                                </div>
                                );
}
