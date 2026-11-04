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
        <div className="bg-[#F6F3EC] text-[#17364B] min-h-screen">
          {/* 1. Article Hero Section */}
          <section className="relative overflow-hidden bg-[#F6F3EC] text-[#17364B] pt-8 pb-12 lg:pt-12 lg:pb-16 border-b border-[#E5DFD3]">
            <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#E5EFF0]/50 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              {/* Breadcrumbs */}
                  <nav className="flex items-center gap-2 text-xs font-medium text-[#4B6778] mb-6">
                    <Link href="/" className="hover:text-[#17364B] transition-colors">
                      {t("nav.home", "Home")}
                    </Link>
                    <span>&gt;</span>
                      <Link href="/blog" className="hover:text-[#17364B] transition-colors">
                        {t("nav.blog", "Blog")}
                      </Link>
                      <span>&gt;</span>
                      <span className="text-[#B99A62] font-semibold truncate max-w-xs">{locArticle.category}</span>
                  </nav>

                  <div className="max-w-4xl space-y-4">
                      <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#17364B] tracking-tight leading-tight">
                        {locArticle.title}
                      </h1>

                        <p className="text-sm sm:text-base text-[#3A5668] leading-relaxed">
                          {locArticle.shortDescription}
                        </p>

                        {/* Meta Row & Social Sharing */}
                          <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-[#E5DFD3] text-xs text-[#4B6778]">
                            <div className="flex flex-wrap items-center gap-4">
                              <span className="flex items-center gap-1.5">
                                <Calendar className="w-4 h-4 text-[#B99A62]" />
                                {locArticle.date}
                              </span>
                              <span>•</span>
                              <span className="flex items-center gap-1.5">
                                <Clock className="w-4 h-4 text-[#B99A62]" />
                                {locArticle.readTime}
                              </span>
                              <span>•</span>
                              <span className="flex items-center gap-1.5">
                                <Eye className="w-4 h-4 text-[#B99A62]" />
                                {locArticle.views}
                              </span>
                            </div>

                            {/* Share Buttons */}
                            <div className="flex items-center gap-2">
                                <span className="text-[#4B6778] font-semibold mr-1 flex items-center gap-1">
                                  <Share2 className="w-3.5 h-3.5 text-[#B99A62]" />
                                  {locale === "te" ? "షేర్ చేయండి:" : locale === "hi" ? "साझा करें:" : "Share:"}
                                </span>

                                {/* WhatsApp */}
                                <a
                                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`${locArticle.title} - ${shareUrl}`)}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-semibold transition-colors"
                                  aria-label="Share on WhatsApp"
                                >
                                  <svg
                                    className="w-3.5 h-3.5 fill-current text-emerald-600"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                  >
                                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.074-2.115-.515-1.782-.74-2.91-2.56-3.001-2.678-.088-.121-.718-.956-.718-1.821 0-.866.452-1.291.614-1.468.16-.176.353-.221.469-.221.116 0 .232.001.334.006.107.006.252-.041.393.3.144.347.492 1.2.535 1.287.043.088.072.19.014.307-.058.116-.087.189-.174.29-.088.102-.185.228-.264.306-.089.088-.182.183-.078.361.103.177.46 1.047 1.047 1.57.755.674 1.393.882 1.591.98.199.098.315.086.432-.047.116-.134.498-.58.631-.779.133-.199.266-.166.448-.099.183.067 1.157.546 1.356.645.2.099.333.148.381.232.049.083.049.483-.095.888z" />
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.98-1.306A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.637 0-3.155-.494-4.423-1.343l-.317-.212-3.267.857.872-3.183-.232-.369A8.17 8.17 0 013.8 12c0-4.521 3.679-8.2 8.2-8.2s8.2 3.679 8.2 8.2-3.679 8.2-8.2 8.2z"
                                    />
                                  </svg>
                                  <span>WhatsApp</span>
                                </a>

                                {/* Copy Link */}
                                <button
                                  type="button"
                                  onClick={handleCopyLink}
                                  className="px-2.5 py-1 rounded-full bg-[#E5EFF0] hover:bg-[#CCDDE0] text-[#17364B] border border-[#CCDDE0] flex items-center gap-1 text-[11px] font-semibold transition-colors"
                                >
                                  {copied ? (
                                    <>
                                      <Check className="w-3.5 h-3.5 text-emerald-600" />
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

                    {/* 2. 3-Column Layout */}
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Left Column (3 cols): Table of Contents & Quick CTA */}
                        <aside aria-label="Table of contents" className="lg:col-span-3 space-y-6 lg:sticky lg:top-28">
                              <div className="bg-white p-5 rounded-2xl border border-[#E5DFD3] shadow-card space-y-3">
                                <h3 className="font-heading font-extrabold text-sm uppercase tracking-wider text-[#B99A62]">
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
                                            ? "bg-[#B99A62] text-white font-bold"
                                            : "text-[#4B6778] hover:bg-[#FAF8F5] hover:text-[#17364B]"
                                      )}
                                    >
                                      {item.title}
                                    </a>
                                  ))}
                                </nav>
                              </div>

                                  {/* Quick CTA Box */}
                                  <div className="bg-white p-5 rounded-2xl border border-[#E5DFD3] shadow-card text-center space-y-3 text-[#17364B]">
                                    <div className="w-10 h-10 rounded-full bg-[#E5EFF0] border border-[#CCDDE0] text-[#B99A62] flex items-center justify-center mx-auto">
                                      <CalendarDays className="w-5 h-5" />
                                    </div>
                                      <h4 className="font-heading font-bold text-sm text-[#17364B]">
                                        {locale === "te" ? "ప్రశ్నలు ఉన్నాయా?" : locale === "hi" ? "प्रश्न हैं?" : "Have Questions?"}
                                      </h4>
                                        <p className="text-xs text-[#4B6778] leading-relaxed">
                                          {locale === "te"
                                            ? `${locDoctor.fullName} నుండి నేరుగా నిపుణుల సలహా పొందండి.`
                                            : locale === "hi"
                                              ? `${locDoctor.fullName} से सीधे विशेषज्ञ सलाह प्राप्त करें।`
                                              : `Get expert medical advice directly from ${locDoctor.fullName}.`}
                                        </p>
                                        <Link
                                          href="/book-appointment"
                                          className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-white bg-[#B99A62] hover:bg-[#A3844C] transition-all"
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
                                              <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-[#17364B] flex items-baseline gap-2">
                                                <span className="text-[#B99A62] font-bold">
                                                  {sec.sectionNumber}
                                                </span>
                                                <span>{sec.heading}</span>
                                              </h2>

                                              {sec.paragraphs.map((p, idx) => (
                                                  <p key={idx} className="text-sm sm:text-base text-[#3A5668] leading-relaxed">
                                                    {p}
                                                  </p>
                ))}

                                                  {/* Callout Quote with Doctor Signature */}
                                                  {sec.calloutQuote && (
                                                        <div className="my-6 p-6 rounded-2xl bg-[#FFF9EE] border border-[#B99A62]/30 border-l-4 border-l-[#B99A62] text-[#17364B] space-y-3">
                                                          <span className="text-3xl font-serif text-[#B99A62] leading-none block">
                                                            “
                                                          </span>
                                                            <p className="text-sm sm:text-base italic font-medium leading-relaxed text-[#17364B]">
                                                              {sec.calloutQuote}
                                                            </p>
                                                            <div className="pt-2 text-right">
                                                                <div className="font-signature text-xl text-[#17364B]">
                                                                  {locDoctor.name}
                                                                </div>
                                                                  <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#B99A62]">
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
                                                                      className="p-3.5 rounded-xl bg-white border border-[#E5DFD3] shadow-card text-center space-y-1.5"
                                                                    >
                                                                        <div className="w-8 h-8 rounded-lg bg-[#E5EFF0] border border-[#CCDDE0] text-[#B99A62] flex items-center justify-center mx-auto">
                                                                          <AlertTriangle className="w-4 h-4" />
                                                                        </div>
                                                                          <span className="text-xs font-bold text-[#17364B] block leading-tight">
                                                                            {s.title}
                                                                          </span>
                                                                      </div>
                    ))}
                                                                    </div>
                                                                  )}

                                                                  {/* Bullet Points */}
                                                                  {sec.bulletPoints && (
                                                                      <ul className="space-y-2 pt-2 text-sm text-[#3A5668]">
                                                                        {sec.bulletPoints.map((bp, idx) => (
                                                                          <li key={idx} className="flex items-start gap-2">
                                                                            <CheckCircle2 className="w-4 h-4 text-[#B99A62] mt-0.5 flex-shrink-0" />
                                                                            <span>{bp}</span>
                                                                          </li>
                                                                        ))}
                                                                      </ul>
                )}
                                                                    </section>
                                                                  ))}
                                                                </article>

                                                              {/* Right Column (3 cols): Author Card & Related Articles */}
                                                              <aside aria-label="Author profile and related articles" className="lg:col-span-3 space-y-6 lg:sticky lg:top-28">
                                                                    {/* Author Profile Card */}
                                                                    <div className="bg-white p-5 rounded-2xl border border-[#E5DFD3] shadow-card text-center space-y-3 text-[#17364B]">
                                                                      <h3 className="font-heading font-extrabold text-xs uppercase tracking-wider text-[#B99A62]">
                                                                        {locale === "te" ? "రచయిత గురించి" : locale === "hi" ? "लेखक के बारे में" : "About the Author"}
                                                                      </h3>

                                                                        <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[#B99A62]/40 mx-auto bg-[#FAF8F5]">
                                                                          <Image
                                                                            src="/images/dr-rakesh-vamsi.png"
                                                                            alt={locDoctor.fullName}
                                                                            fill
                                                                            className="object-contain object-bottom"
                                                                          />
                                                                        </div>

                                                                        <div>
                                                                            <h4 className="font-heading font-bold text-sm text-[#17364B]">
                                                                              {locDoctor.fullName}
                                                                            </h4>
                                                                              <p className="text-[11px] font-semibold text-[#B99A62]">
                                                                                {locDoctor.designation}
                                                                              </p>
                                                                                <p className="text-[10px] text-[#4B6778] mt-0.5">
                                                                                  {locDoctor.hospital.name}, {locDoctor.hospital.city}
                                                                                </p>
                                                                              </div>

                                                                                <p className="text-xs text-[#3A5668] leading-relaxed text-left">
                                                                                  {locArticle.author.bio}
                                                                                </p>

                                                                                <Link
                                                                                  href="/about"
                                                                                  className="inline-flex items-center gap-1 text-xs font-bold text-[#B99A62] hover:text-[#17364B] pt-1 transition-colors"
                                                                                >
                                                                                  <span>{locale === "te" ? "పూర్తి ప్రొఫైల్ చూడండి" : locale === "hi" ? "पूरा प्रोफाइल देखें" : "View Full Profile"}</span>
                                                                                  <span>→</span>
                                                                                </Link>
                                                                              </div>

                                                                              {/* Related Articles List */}
                                                                              {locRelated.length > 0 && (
                                                                                    <div className="bg-white p-5 rounded-2xl border border-[#E5DFD3] shadow-card space-y-3 text-[#17364B]">
                                                                                      <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#B99A62]">
                                                                                        {locale === "te" ? "సంబంధిత వ్యాసాలు" : locale === "hi" ? "संबंधित लेख" : "Related Articles"}
                                                                                      </h4>
                                                                                      <div className="space-y-3">
                                                                                        {locRelated.map((rel) => (
                                                                                          <Link
                                                                                            key={rel.slug}
                                                                                            href={`/blog/${rel.slug}`}
                                                                                            className="group block space-y-1 p-2 rounded-xl hover:bg-[#FAF8F5] transition-colors"
                                                                                          >
                                                                                              <h5 className="font-heading font-bold text-xs text-[#17364B] group-hover:text-[#B99A62] transition-colors line-clamp-2 leading-snug">
                                                                                                {rel.title}
                                                                                              </h5>
                                                                                                <div className="text-[10px] text-[#4B6778] flex items-center gap-2">
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
                                                                                            <div className="bg-[#E5EFF0] text-[#17364B] p-5 rounded-2xl border border-[#CCDDE0] shadow-card space-y-3 text-center">
                                                                                              <Calendar className="w-8 h-8 text-[#B99A62] mx-auto" />
                                                                                              <h4 className="font-heading font-bold text-sm text-[#17364B]">
                                                                                                {locale === "te" ? "సంప్రదింపును బుక్ చేయండి" : locale === "hi" ? "परामर्श बुक करें" : "Book a Consultation"}
                                                                                              </h4>
                                                                                                <p className="text-[11px] text-[#3A5668] leading-relaxed">
                                                                                                  {locale === "te"
                                                                                                    ? "KIMS హాస్పిటల్ నెల్లూరులో డాక్టర్ రాకేష్ వంశీని సంప్రదించండి."
                                                                                                    : locale === "hi"
                                                                                                      ? "किम्स अस्पताल नेल्लोर में डॉ. राकेश वामसी से परामर्श लें।"
                                                                                                      : "Consult with Dr. Rakesh Vamsi at KIMS Hospital Nellore."}
                                                                                                </p>
                                                                                                <Link
                                                                                                  href="/book-appointment"
                                                                                                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-full text-xs font-bold text-white bg-[#B99A62] hover:bg-[#A3844C] shadow-sm transition-all"
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
