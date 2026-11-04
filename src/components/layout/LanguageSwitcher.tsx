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
        <div className="flex items-center gap-1.5 text-xs font-bold text-[#17364B] px-1">
          <Globe className="w-3.5 h-3.5 text-[#B99A62]" />
          <span>Select Language / భాష / भाषा</span>
        </div>
        <div className="grid grid-cols-3 gap-1.5 p-1 bg-[#E5EFF0] rounded-2xl border border-[#DCE5E8]">
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
                    ? "bg-[#B99A62] text-white shadow-xs font-extrabold"
                    : "text-[#17364B] hover:text-[#17364B] hover:bg-white/80"
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
            "inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 whitespace-nowrap flex-shrink-0",
            "bg-white hover:bg-[#FAF8F5] text-[#17364B] border border-[#DCD5C9]",
            "focus:outline-none focus:ring-2 focus:ring-[#B99A62]/30 shadow-xs"
          )}
          aria-expanded={dropdownOpen}
          aria-haspopup="true"
          aria-label="Select website language"
        >
          <Globe className="w-3.5 h-3.5 text-[#B99A62] flex-shrink-0" />
          <span className="font-bold text-[11px]">{currentLang.short}</span>
          <ChevronDown
            className={cn(
              "w-2.5 h-2.5 text-[#4B6778] transition-transform duration-200",
              dropdownOpen && "rotate-180 text-[#B99A62]"
            )}
          />
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-1.5 w-36 rounded-xl bg-white shadow-card border border-[#E5DFD3] py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
            <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#4B6778] border-b border-[#E5DFD3] mb-1">
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
                      ? "bg-[#E5EFF0] text-[#17364B] font-bold"
                      : "text-[#17364B] hover:bg-[#FAF8F5]"
                  )}
                >
                  <span>{lang.native}</span>
                  {isSelected && <Check className="w-3.5 h-3.5 text-[#B99A62]" />}
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
          "inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold transition-all duration-200 whitespace-nowrap flex-shrink-0",
          "bg-white hover:bg-[#FAF8F5] text-[#17364B] border border-[#DCD5C9] shadow-xs",
          "focus:outline-none focus:ring-2 focus:ring-[#B99A62]/30"
        )}
        aria-expanded={dropdownOpen}
        aria-haspopup="true"
        aria-label="Select website language"
      >
        <Globe className="w-3.5 h-3.5 text-[#17364B] flex-shrink-0" />
        <span>{currentLang.native}</span>
        <ChevronDown
          className={cn(
            "w-3 h-3 text-[#17364B] transition-transform duration-200",
            dropdownOpen && "rotate-180 text-[#B99A62]"
          )}
        />
      </button>

      {/* Dropdown Menu */}
      {dropdownOpen && (
        <div className="absolute right-0 mt-1.5 w-36 rounded-xl bg-white shadow-card border border-[#E5DFD3] py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#4B6778] border-b border-[#E5DFD3] mb-1">
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
                    ? "bg-[#E5EFF0] text-[#17364B] font-bold"
                    : "text-[#17364B] hover:bg-[#FAF8F5]"
                )}
              >
                <span>{lang.native}</span>
                {isSelected && <Check className="w-3.5 h-3.5 text-[#B99A62]" />}
              </button>
            );
          })}
        </div>
      )
      }
    </div>
  );
}
