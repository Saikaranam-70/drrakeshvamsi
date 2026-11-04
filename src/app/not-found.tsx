"use client";

import React from "react";
import Link from "next/link";
import { Home, Calendar, Stethoscope } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function NotFound() {
  const { locale } = useLanguage();

  return (
          <div className="bg-brand-navy-950 text-slate-100 min-h-[75vh] flex items-center justify-center py-16 px-4">
            <div className="max-w-md w-full bg-brand-navy-900/90 p-8 sm:p-10 rounded-3xl border border-brand-navy-800 shadow-2xl text-center space-y-6 text-white">
              <div className="w-20 h-20 rounded-full bg-brand-navy-950 border-2 border-brand-cyan/40 text-brand-cyan flex items-center justify-center mx-auto text-3xl font-extrabold font-heading shadow-md">
                404
              </div>

              <div className="space-y-2">
                  <h1 className="font-heading font-extrabold text-2xl text-white">
                    {locale === "te"
                      ? "పేజీ కనుగొనబడలేదు"
                      : locale === "hi"
                        ? "पृष्ठ नहीं मिला"
                        : "Page Not Found"}
                  </h1>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
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
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full text-xs font-bold text-brand-navy-950 bg-gradient-to-r from-brand-teal-400 to-brand-cyan shadow-md hover:shadow-glow transition-all"
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
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-full text-xs font-semibold text-slate-200 bg-brand-navy-800 hover:bg-brand-navy-700 border border-brand-navy-700 transition-colors"
                    >
                      <Stethoscope className="w-4 h-4 text-brand-cyan" />
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
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-full text-xs font-semibold text-brand-cyan bg-brand-navy-950 hover:bg-brand-navy-800 border border-brand-teal-500/40 transition-colors"
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
