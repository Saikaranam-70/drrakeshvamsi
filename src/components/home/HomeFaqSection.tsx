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
    <section className="py-20 bg-brand-surface border-t border-brand-border/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionHeading
            badge={t("home.homeFaq.badge", "COMMON INQUIRIES")}
            badgeIcon={<HelpCircle className="w-3.5 h-3.5" />}
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
                className="bg-white rounded-2xl border border-brand-border/80 overflow-hidden shadow-xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal-500"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-brand-navy-900">
                    {faq.question}
                  </span>
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200",
                      isOpen
                        ? "bg-brand-teal-500 text-white rotate-180"
                        : "bg-slate-100 text-slate-600"
                    )}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Link to all FAQs */}
        <div className="mt-10 text-center">
          <Link
            href="/faqs"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-teal-700 hover:text-brand-teal-600 group"
          >
            <span>{t("home.homeFaq.viewAllLink", "Have more questions? View complete FAQ guide")}</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
