"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import { translations, Locale, TranslationTree } from "@/locales";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (keyPath: string, fallback?: string) => string;
  isEnglish: boolean;
  isTelugu: boolean;
  isHindi: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "uro_andro_user_locale";
const COOKIE_NAME = "NEXT_LOCALE";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  // Initialize language from localStorage, cookie, or URL query param on mount
  useEffect(() => {
    try {
      // 1. Check URL query parameter (e.g. ?lang=te)
      if (typeof window !== "undefined") {
        const params = new URLSearchParams(window.location.search);
        const queryLang = params.get("lang") as Locale | null;
        if (queryLang && (queryLang === "en" || queryLang === "te" || queryLang === "hi")) {
          setLocaleState(queryLang);
          localStorage.setItem(STORAGE_KEY, queryLang);
          document.cookie = `${COOKIE_NAME}=${queryLang};path=/;max-age=31536000;SameSite=Lax`;
          setMounted(true);
          return;
        }

        // 2. Check localStorage
        const savedLocale = localStorage.getItem(STORAGE_KEY) as Locale | null;
        if (savedLocale && (savedLocale === "en" || savedLocale === "te" || savedLocale === "hi")) {
          setLocaleState(savedLocale);
          document.cookie = `${COOKIE_NAME}=${savedLocale};path=/;max-age=31536000;SameSite=Lax`;
          setMounted(true);
          return;
        }

        // 3. Check cookie
        const match = document.cookie.match(new RegExp(`(^| )${COOKIE_NAME}=([^;]+)`));
        if (match) {
          const cookieLocale = match[2] as Locale;
          if (cookieLocale === "en" || cookieLocale === "te" || cookieLocale === "hi") {
            setLocaleState(cookieLocale);
            localStorage.setItem(STORAGE_KEY, cookieLocale);
            setMounted(true);
            return;
          }
        }
      }
    } catch {
      // Ignore storage/cookie access errors
    }
    setMounted(true);
  }, []);

  // Update HTML tag attributes whenever locale changes
  useEffect(() => {
    if (typeof document !== "undefined") {
      const langAttr = locale === "te" ? "te-IN" : locale === "hi" ? "hi-IN" : "en-IN";
      document.documentElement.lang = langAttr;
      document.documentElement.setAttribute("data-lang", locale);
    }
  }, [locale]);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem(STORAGE_KEY, newLocale);
      document.cookie = `${COOKIE_NAME}=${newLocale};path=/;max-age=31536000;SameSite=Lax`;

      // Update URL search param seamlessly without full page reload if desired
      if (typeof window !== "undefined") {
        const url = new URL(window.location.href);
        if (newLocale === "en") {
          url.searchParams.delete("lang");
        } else {
          url.searchParams.set("lang", newLocale);
        }
        window.history.replaceState({}, "", url.toString());
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  // Lookup helper by dot-separated path (e.g. 'common.bookAppointment')
  const t = useCallback(
    (keyPath: string, fallback?: string): string => {
      const keys = keyPath.split(".");
      let current: any = translations[locale];

      for (const k of keys) {
        if (current && typeof current === "object" && k in current) {
          current = current[k];
        } else {
          // Fallback to English if not found in current locale
          let enCurrent: any = translations["en"];
          for (const enK of keys) {
            if (enCurrent && typeof enCurrent === "object" && enK in enCurrent) {
              enCurrent = enCurrent[enK];
            } else {
              enCurrent = undefined;
              break;
            }
          }
          if (typeof enCurrent === "string") return enCurrent;
          return fallback || keyPath;
        }
      }

      if (typeof current === "string") {
        return current;
      }

      return fallback || keyPath;
    },
    [locale]
  );

  return (
    <LanguageContext.Provider
      value={{
        locale,
        setLocale,
        t,
        isEnglish: locale === "en",
        isTelugu: locale === "te",
        isHindi: locale === "hi",
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
