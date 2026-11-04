"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight, HelpCircle } from "lucide-react";
import { getLocalizedFaqs } from "@/data/localizedFaqs";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

export default function HomeFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { locale, t } = useLanguage();
  const faqs = getLocalizedFaqs(locale);
  const featuredFaqs = faqs.slice(0, 5);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
        <section className="py-20 bg-[#FAF8F5] border-t border-[#E5DFD3]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <SectionHeading
                badge={t("home.homeFaq.badge", "COMMON INQUIRIES")}
                badgeIcon={<HelpCircle className="w-3.5 h-3.5 text-[#B99A62]" />}
                title={t("home.homeFaq.title", "Frequently Asked Questions")}
                subtitle={t("home.homeFaq.subtitle", "Find quick, medically verified answers to common questions about urology consultations and treatments.")}
                align="center"
              />
            </div>

        {/* Accordions */}
        <div className="space-y-3.5">
          {featuredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-[#E5DFD3] overflow-hidden shadow-card transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B99A62]"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-[#17364B]">
                    {faq.question}
                  </span>
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200",
                      isOpen
                        ? "bg-[#B99A62] text-white rotate-180 font-bold shadow-xs"
                        : "bg-[#E5EFF0] text-[#17364B] border border-[#CCDDE0]"
                    )}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {
                    isOpen && (
                      <div className="px-6 pb-6 pt-1 text-[#4B6778] text-sm sm:text-base leading-relaxed border-t border-[#EAE4D9] animate-in fade-in duration-200">
                        {faq.answer}
                      </div>
                    )
                  }
          </div>
          );
          })}
    </div>

  {/* Link to all FAQs */ }
  <div className="mt-10 text-center">
    <Link
      href="/faqs"
      className="inline-flex items-center gap-2 text-sm font-bold text-[#17364B] hover:text-[#B99A62] transition-colors group"
    >
      <span>{t("home.homeFaq.viewAllLink", "Have more questions? View complete FAQ guide")}</span>
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#B99A62]" />
    </Link>
  </div>
      </div >
    </section >
  );
}
