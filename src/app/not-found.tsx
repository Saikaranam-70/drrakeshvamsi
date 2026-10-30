"use client";

import React from "react";
import Link from "next/link";
import { Home, Calendar, Stethoscope } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function NotFound() {
  const { locale } = useLanguage();

  return (
    <div className="bg-brand-surface min-h-[75vh] flex items-center justify-center py-16 px-4">
      <div className="max-w-md w-full bg-white p-8 sm:p-10 rounded-3xl border border-brand-border shadow-xl text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-brand-teal-50 border-2 border-brand-teal-200 text-brand-teal-600 flex items-center justify-center mx-auto text-3xl font-extrabold font-heading">
          404
        </div>

        <div className="space-y-2">
          <h1 className="font-heading font-extrabold text-2xl text-brand-navy-900">
            {locale === "te"
              ? "పేజీ కనుగొనబడలేదు"
              : locale === "hi"
              ? "पृष्ठ नहीं मिला"
              : "Page Not Found"}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {locale === "te"
              ? "మీరు వెతుకుతున్న పేజీ తరలించబడి ఉండవచ్చు, పేరు మార్చబడి ఉండవచ్చు లేదా తాత్కాలికంగా అందుబాటులో లేకపోవచ్చు."
              : locale === "hi"
              ? "आप जिस पृष्ठ की तलाश कर रहे हैं उसे स्थानांतरित कर दिया गया है, नाम बदल दिया गया है, या अस्थायी रूप से अनुपलब्ध है।"
              : "The page you are looking for might have been moved, renamed, or is temporarily unavailable."}
          </p>
        </div>

        <div className="pt-2 space-y-2.5">
          <Link
            href="/"
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-brand-teal-600 to-brand-navy-800 shadow-md hover:shadow-lg transition-all"
          >
            <Home className="w-4 h-4" />
            <span>
              {locale === "te"
                ? "హోమ్‌పేజీకి తిరిగి వెళ్లండి"
                : locale === "hi"
                ? "होमपेज पर वापस जाएं"
                : "Return to Homepage"}
            </span>
          </Link>

          <Link
            href="/treatments"
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-full text-xs font-semibold text-brand-navy-900 bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            <Stethoscope className="w-4 h-4 text-brand-teal-600" />
            <span>
              {locale === "te"
                ? "చికిత్సలను అన్వేషించండి"
                : locale === "hi"
                ? "उपचार देखें"
                : "Explore Treatments"}
            </span>
          </Link>

          <Link
            href="/book-appointment"
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-full text-xs font-semibold text-brand-teal-700 bg-brand-teal-50 hover:bg-brand-teal-100 border border-brand-teal-200 transition-colors"
          >
            <Calendar className="w-4 h-4" />
            <span>
              {locale === "te"
                ? "అపాయింట్‌మెంట్ బుక్ చేయండి"
                : locale === "hi"
                ? "अपॉइंटमेंट बुक करें"
                : "Book an Appointment"}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
