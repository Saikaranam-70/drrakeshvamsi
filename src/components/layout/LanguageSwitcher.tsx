"use client";

import React, { useState, useRef, useEffect } from "react";
import { Globe, Check, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Locale } from "@/locales";
import { cn } from "@/lib/utils";

const LANGUAGES: { code: Locale; label: string; short: string; native: string }[] = [
  { code: "en", label: "English", short: "EN", native: "English" },
  { code: "te", label: "Telugu", short: "తెలుగు", native: "తెలుగు" },
  { code: "hi", label: "Hindi", short: "हिन्दी", native: "हिन्दी" },
];

interface LanguageSwitcherProps {
  variant?: "desktop" | "mobile" | "compact";
  className?: string;
}

export default function LanguageSwitcher({
  variant = "desktop",
  className,
}: LanguageSwitcherProps) {
  const { locale, setLocale } = useLanguage();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLang = LANGUAGES.find((l) => l.code === locale) || LANGUAGES[0];

  // Mobile layout: Segmented Pill Strip
  if (variant === "mobile") {
    return (
      <div className={cn("w-full space-y-1.5", className)}>
        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-300 px-1">
          <Globe className="w-3.5 h-3.5 text-brand-cyan" />
          <span>Select Language / భాష / भाषा</span>
        </div>
        <div className="grid grid-cols-3 gap-1.5 p-1 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
          {LANGUAGES.map((lang) => {
            const isActive = locale === lang.code;
            return (
              <button
                key={lang.code}
                type="button"
                onClick={() => setLocale(lang.code)}
                className={cn(
                  "py-2 px-2.5 rounded-xl text-xs font-bold transition-all duration-200 text-center flex items-center justify-center gap-1",
                  isActive
                    ? "bg-gradient-to-r from-brand-teal-500 to-brand-cyan text-brand-navy-950 shadow-[0_2px_10px_rgba(0,197,220,0.3)] font-extrabold"
                    : "text-slate-300 hover:text-white hover:bg-white/10"
                )}
                aria-pressed={isActive}
              >
                <span>{lang.native}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Compact layout: Space-optimized for mobile header
  if (variant === "compact") {
    return (
      <div ref={dropdownRef} className={cn("relative inline-block text-left flex-shrink-0", className)}>
        <button
          type="button"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className={cn(
            "inline-flex items-center gap-1 px-2 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 whitespace-nowrap flex-shrink-0",
            "bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 hover:border-brand-cyan/40",
            "focus:outline-none focus:ring-2 focus:ring-brand-teal-500/40 shadow-xs"
          )}
          aria-expanded={dropdownOpen}
          aria-haspopup="true"
          aria-label="Select website language"
        >
          <Globe className="w-3.5 h-3.5 text-brand-cyan flex-shrink-0" />
          <span className="font-bold text-[11px]">{currentLang.short}</span>
          <ChevronDown
            className={cn(
              "w-2.5 h-2.5 text-slate-400 transition-transform duration-200",
              dropdownOpen && "rotate-180 text-brand-cyan"
            )}
          />
        </button>

        {dropdownOpen && (
              <div className="absolute right-0 mt-1.5 w-36 rounded-xl bg-brand-navy-900 shadow-2xl border border-brand-navy-700 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-brand-navy-800 mb-1">
                  Language / భాష
                </div>
                {LANGUAGES.map((lang) => {
                  const isSelected = locale === lang.code;
                  return (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => {
                        setLocale(lang.code);
                        setDropdownOpen(false);
                      }}
                      className={cn(
                        "w-full text-left px-3 py-2 text-xs font-semibold flex items-center justify-between transition-colors",
                        isSelected
                            ? "bg-brand-cyan/20 text-brand-cyan font-bold"
                            : "text-slate-300 hover:bg-white/5 hover:text-white"
                      )}
                    >
                      <span>{lang.native}</span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-brand-cyan" />}
                    </button>
                  );
                })}
              </div>
        )}
            </div>
            );
  }

            // Desktop layout: Compact Pill with Globe and direct quick switches
            return (
            <div ref={dropdownRef} className={cn("relative inline-block text-left flex-shrink-0", className)}>
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={cn(
                  "inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 whitespace-nowrap flex-shrink-0",
                  "bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 hover:border-brand-cyan/40",
                  "focus:outline-none focus:ring-2 focus:ring-brand-teal-500/40"
                )}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
                aria-label="Select website language"
              >
                <Globe className="w-3.5 h-3.5 text-brand-cyan flex-shrink-0" />
                <span className="font-semibold">{currentLang.native}</span>
                <ChevronDown
                  className={cn(
            "w-3 h-3 text-slate-400 transition-transform duration-200",
                    dropdownOpen && "rotate-180 text-brand-cyan"
                  )}
                />
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                    <div className="absolute right-0 mt-1.5 w-36 rounded-xl bg-brand-navy-900 shadow-2xl border border-brand-navy-700 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                      <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-brand-navy-800 mb-1">
                        Language / భాష
                      </div>
                      {LANGUAGES.map((lang) => {
                        const isSelected = locale === lang.code;
                        return (
                          <button
                            key={lang.code}
                            type="button"
                            onClick={() => {
                              setLocale(lang.code);
                              setDropdownOpen(false);
                            }}
                            className={cn(
                              "w-full text-left px-3 py-2 text-xs font-semibold flex items-center justify-between transition-colors",
                              isSelected
                                  ? "bg-brand-cyan/20 text-brand-cyan font-bold"
                                  : "text-slate-300 hover:bg-white/5 hover:text-white"
                            )}
                          >
                            <span>{lang.native}</span>
                            {isSelected && <Check className="w-3.5 h-3.5 text-brand-cyan" />}
                          </button>
                        );
                      })}
                    </div>
      )}
                  </div>
                  );
}
