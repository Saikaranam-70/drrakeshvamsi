"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Clock,
  Eye,
  Share2,
  Check,
  CalendarDays,
  ChevronRight,
  AlertTriangle,
  Droplet,
  Flame,
  CheckCircle2,
  ArrowRight,
  FileText,
} from "lucide-react";
import { BlogArticle } from "@/data/blogData";
import { DoctorInfo } from "@/data/doctorData";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { getLocalizedBlogArticle } from "@/data/localizedBlog";
import { getLocalizedDoctorData } from "@/data/localizedDoctor";

interface Props {
  article: BlogArticle;
  relatedArticles: BlogArticle[];
  doctor: DoctorInfo;
}

export default function BlogArticleClient({
  article,
  relatedArticles,
  doctor,
}: Props) {
  const { locale, t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const locArticle = getLocalizedBlogArticle(article.slug, locale) || article;
  const locDoctor = getLocalizedDoctorData(locale);
  const locRelated = relatedArticles.map(
    (rel) => getLocalizedBlogArticle(rel.slug, locale) || rel
  );

  const [activeSectionId, setActiveSectionId] = useState<string>(
    locArticle.tableOfContents[0]?.id || ""
  );

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Article Hero Section matching screenshot */}
      <section className="relative overflow-hidden bg-hero-gradient text-white pt-8 pb-12 lg:pt-12 lg:pb-16 border-b border-brand-teal-500/20">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-brand-cyan/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-300 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              {t("nav.home", "Home")}
            </Link>
            <span>&gt;</span>
            <Link href="/blog" className="hover:text-white transition-colors">
              {t("nav.blog", "Blog")}
            </Link>
            <span>&gt;</span>
            <span className="text-brand-cyan truncate max-w-xs">{locArticle.category}</span>
          </nav>

          <div className="max-w-4xl space-y-4">
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              {locArticle.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {locArticle.shortDescription}
            </p>

            {/* Meta Row & Social Sharing */}
            <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 text-xs text-slate-300">
              <div className="flex flex-wrap items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-brand-cyan" />
                  {locArticle.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-brand-cyan" />
                  {locArticle.readTime}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Eye className="w-4 h-4 text-brand-cyan" />
                  {locArticle.views}
                </span>
              </div>

              {/* Share Buttons */}
              <div className="flex items-center gap-2">
                <span className="text-slate-400 font-semibold mr-1 flex items-center gap-1">
                  <Share2 className="w-3.5 h-3.5" />
                  {locale === "te" ? "షేర్ చేయండి:" : locale === "hi" ? "साझा करें:" : "Share:"}
                </span>

                {/* WhatsApp */}
                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`${locArticle.title} - ${shareUrl}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center transition-colors"
                  aria-label="Share on WhatsApp"
                >
                  <span className="font-bold text-[10px]">WA</span>
                </a>

                {/* Copy Link */}
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center gap-1 text-[11px] font-semibold transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{locale === "te" ? "కాపీ చేయబడింది!" : locale === "hi" ? "कॉपी हो गया!" : "Copied!"}</span>
                    </>
                  ) : (
                    <span>{locale === "te" ? "లింక్ కాపీ చేయండి" : locale === "hi" ? "लिंक कॉपी करें" : "Copy Link"}</span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 3-Column Layout matching screenshot */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (3 cols): Table of Contents & Quick CTA */}
          <aside aria-label="Table of contents" className="lg:col-span-3 space-y-6 lg:sticky lg:top-28">
            <div className="bg-brand-surface p-5 rounded-2xl border border-brand-border space-y-3">
              <h3 className="font-heading font-extrabold text-sm uppercase tracking-wider text-brand-navy-900">
                {locale === "te" ? "ఈ వ్యాసంలో" : locale === "hi" ? "इस लेख में" : "In this article"}
              </h3>
              <nav className="space-y-1">
                {locArticle.tableOfContents.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setActiveSectionId(item.id)}
                    className={cn(
                      "block p-2 rounded-lg text-xs font-medium transition-colors leading-snug",
                      activeSectionId === item.id
                        ? "bg-brand-teal-500 text-white font-bold"
                        : "text-slate-600 hover:bg-white hover:text-brand-navy-900"
                    )}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>

            {/* Quick CTA Box matching screenshot */}
            <div className="bg-white p-5 rounded-2xl border border-brand-border shadow-xs text-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-brand-teal-50 text-brand-teal-600 flex items-center justify-center mx-auto">
                <CalendarDays className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-bold text-sm text-brand-navy-900">
                {locale === "te" ? "ప్రశ్నలు ఉన్నాయా?" : locale === "hi" ? "प्रश्न हैं?" : "Have Questions?"}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                {locale === "te"
                  ? `${locDoctor.fullName} నుండి నేరుగా నిపుణుల సలహా పొందండి.`
                  : locale === "hi"
                  ? `${locDoctor.fullName} से सीधे विशेषज्ञ सलाह प्राप्त करें।`
                  : `Get expert medical advice directly from ${locDoctor.fullName}.`}
              </p>
              <Link
                href="/book-appointment"
                className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white bg-brand-teal-600 hover:bg-brand-teal-500 transition-colors shadow-xs"
              >
                <span>{t("common.bookAppointment", "Book Appointment")} →</span>
              </Link>
            </div>
          </aside>

          {/* Center Column (6 cols): Rich Medical Editorial Content */}
          <article className="lg:col-span-6 space-y-10">
            {locArticle.contentSections.map((sec) => (
              <section
                key={sec.id}
                id={sec.id}
                className="scroll-mt-32 space-y-4 text-left"
              >
                <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-brand-navy-900 flex items-baseline gap-2">
                  <span className="text-brand-teal-600 font-bold">
                    {sec.sectionNumber}
                  </span>
                  <span>{sec.heading}</span>
                </h2>

                {sec.paragraphs.map((p, idx) => (
                  <p key={idx} className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {p}
                  </p>
                ))}

                {/* Callout Quote with Doctor Signature matching screenshot */}
                {sec.calloutQuote && (
                  <div className="my-6 p-6 rounded-2xl bg-brand-teal-50/70 border-l-4 border-brand-teal-500 text-slate-800 space-y-3">
                    <span className="text-3xl font-serif text-brand-teal-600 leading-none block">
                      “
                    </span>
                    <p className="text-sm sm:text-base italic font-medium leading-relaxed">
                      {sec.calloutQuote}
                    </p>
                    <div className="pt-2 text-right">
                      <div className="font-signature text-xl text-brand-navy-900">
                        {locDoctor.name}
                      </div>
                      <div className="text-[9px] font-extrabold uppercase tracking-wider text-brand-teal-700">
                        {locDoctor.designation}
                      </div>
                    </div>
                  </div>
                )}

                {/* Symptoms icon cards inside article */}
                {sec.symptomsList && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                    {sec.symptomsList.map((s, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-brand-surface border border-brand-border text-center space-y-1.5"
                      >
                        <div className="w-8 h-8 rounded-lg bg-brand-teal-50 text-brand-teal-600 flex items-center justify-center mx-auto">
                          <AlertTriangle className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold text-brand-navy-900 block leading-tight">
                          {s.title}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Bullet Points */}
                {sec.bulletPoints && (
                  <ul className="space-y-2 pt-2 text-sm text-slate-700">
                    {sec.bulletPoints.map((bp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-teal-500 mt-0.5 flex-shrink-0" />
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </article>

          {/* Right Column (3 cols): Author Card & Related Articles matching screenshot */}
          <aside aria-label="Author profile and related articles" className="lg:col-span-3 space-y-6 lg:sticky lg:top-28">
            {/* Author Profile Card matching screenshot */}
            <div className="bg-white p-5 rounded-2xl border border-brand-border shadow-xs text-center space-y-3">
              <h3 className="font-heading font-extrabold text-xs uppercase tracking-wider text-slate-400">
                {locale === "te" ? "రచయిత గురించి" : locale === "hi" ? "लेखक के बारे में" : "About the Author"}
              </h3>

              <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-brand-teal-300 mx-auto bg-slate-50">
                <Image
                  src="/images/dr-rakesh-vamsi.png"
                  alt={locDoctor.fullName}
                  fill
                  className="object-contain object-bottom"
                />
              </div>

              <div>
                <h4 className="font-heading font-bold text-sm text-brand-navy-900">
                  {locDoctor.fullName}
                </h4>
                <p className="text-[11px] font-semibold text-brand-teal-700">
                  {locDoctor.designation}
                </p>
                <p className="text-[10px] text-slate-500 mt-0.5">
                  {locDoctor.hospital.name}, {locDoctor.hospital.city}
                </p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed text-left">
                {locArticle.author.bio}
              </p>

              <Link
                href="/about"
                className="inline-flex items-center gap-1 text-xs font-bold text-brand-teal-700 hover:text-brand-teal-600 pt-1"
              >
                <span>{locale === "te" ? "పూర్తి ప్రొఫైల్ చూడండి" : locale === "hi" ? "पूरा प्रोफाइल देखें" : "View Full Profile"}</span>
                <span>→</span>
              </Link>
            </div>

            {/* Related Articles List matching screenshot */}
            {locRelated.length > 0 && (
              <div className="bg-white p-5 rounded-2xl border border-brand-border shadow-xs space-y-3">
                <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-400">
                  {locale === "te" ? "సంబంధిత వ్యాసాలు" : locale === "hi" ? "संबंधित लेख" : "Related Articles"}
                </h4>
                <div className="space-y-3">
                  {locRelated.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/blog/${rel.slug}`}
                      className="group block space-y-1 p-2 rounded-xl hover:bg-brand-surface transition-colors"
                    >
                      <h5 className="font-heading font-bold text-xs text-brand-navy-900 group-hover:text-brand-teal-600 transition-colors line-clamp-2 leading-snug">
                        {rel.title}
                      </h5>
                      <div className="text-[10px] text-slate-400 flex items-center gap-2">
                        <span>{rel.date}</span>
                        <span>•</span>
                        <span>{rel.readTime}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Book Consultation Widget */}
            <div className="bg-brand-navy-900 text-white p-5 rounded-2xl border border-brand-navy-800 shadow-md space-y-3 text-center">
              <Calendar className="w-8 h-8 text-brand-cyan mx-auto" />
              <h4 className="font-heading font-bold text-sm text-white">
                {locale === "te" ? "సంప్రదింపును బుక్ చేయండి" : locale === "hi" ? "परामर्श बुक करें" : "Book a Consultation"}
              </h4>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                {locale === "te"
                  ? "KIMS హాస్పిటల్ నెల్లూరులో డాక్టర్ రాకేష్ వంశీని సంప్రదించండి."
                  : locale === "hi"
                  ? "किम्स अस्पताल नेल्लोर में डॉ. राकेश वामसी से परामर्श लें।"
                  : "Consult with Dr. Rakesh Vamsi at KIMS Hospital Nellore."}
              </p>
              <Link
                href="/book-appointment"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-full text-xs font-bold text-brand-navy-950 bg-gradient-to-r from-brand-teal-400 to-brand-cyan shadow-sm hover:shadow transition-all"
              >
                <span>{locale === "te" ? "ఇప్పుడే షెడ్యూల్ చేయండి →" : locale === "hi" ? "अभी शेड्यूल करें →" : "Schedule Now →"}</span>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
