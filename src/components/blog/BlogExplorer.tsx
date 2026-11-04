"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  ChevronRight,
  Mail,
  Send,
  Sparkles,
  CheckCircle2,
  X,
  FileText,
} from "lucide-react";
import { BlogArticle } from "@/data/blogData";
import {
  getLocalizedBlogArticles,
  getLocalizedBlogCategories,
} from "@/data/localizedBlog";
import { getLocalizedDoctorData } from "@/data/localizedDoctor";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeading from "@/components/ui/SectionHeading";

export default function BlogExplorer() {
  const { locale, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const locArticles = getLocalizedBlogArticles(locale);
  const locCategories = getLocalizedBlogCategories(locale);
  const locDoctor = getLocalizedDoctorData(locale);

  const categoryPills = [
    { id: "all", label: locale === "te" ? "అన్ని వ్యాసాలు" : locale === "hi" ? "सभी लेख" : "All Articles" },
    { id: "kidney", label: locale === "te" ? "కిడ్నీ ఆరోగ్యం" : locale === "hi" ? "किडनी स्वास्थ्य" : "Kidney Health" },
    { id: "prostate", label: locale === "te" ? "ప్రోస్టేట్ సంరక్షణ" : locale === "hi" ? "प्रोस्टेट देखभाल" : "Prostate Care" },
    { id: "mens-health", label: locale === "te" ? "పురుషుల ఆరోగ్యం" : locale === "hi" ? "पुरुष स्वास्थ्य" : "Men's Health" },
    { id: "fertility", label: locale === "te" ? "సంతానోత్పత్తి" : locale === "hi" ? "प्रजनन क्षमता" : "Fertility" },
    { id: "cancer", label: locale === "te" ? "యూరాలజికల్ క్యాన్సర్లు" : locale === "hi" ? "यूरोलॉजिकल कैंसर" : "Urological Cancers" },
    { id: "surgery", label: locale === "te" ? "శస్త్రచికిత్స & సాంకేతికత" : locale === "hi" ? "सर्जरी और तकनीक" : "Surgery & Technology" },
  ];

  const filteredArticles = useMemo(() => {
    return locArticles.filter((article) => {
      // Category match
      const matchesCategory =
        selectedCategory === "all" ||
        article.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        (selectedCategory === "kidney" && (article.category.includes("Kidney") || article.category.includes("కిడ్నీ") || article.category.includes("किडनी"))) ||
        (selectedCategory === "prostate" && (article.category.includes("Prostate") || article.category.includes("ప్రోస్టేట్") || article.category.includes("प्रोस्टेट"))) ||
        (selectedCategory === "mens-health" && (article.category.includes("Men") || article.category.includes("పురుషుల") || article.category.includes("पुरुष"))) ||
        (selectedCategory === "fertility" && (article.category.includes("Fertility") || article.category.includes("సంతానోత్పత్తి") || article.category.includes("प्रजनन"))) ||
        (selectedCategory === "cancer" && (article.category.includes("Cancer") || article.category.includes("క్యాన్సర్") || article.category.includes("कैंसर"))) ||
        (selectedCategory === "surgery" && (article.category.includes("Surgery") || article.category.includes("శస్త్రచికిత్స") || article.category.includes("सर्जरी")));

      // Search match
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        article.title.toLowerCase().includes(query) ||
        article.shortDescription.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [locArticles, selectedCategory, searchQuery]);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail && newsletterEmail.includes("@")) {
      setNewsletterSubmitted(true);
      setNewsletterEmail("");
    }
  };

  return (
        <div className="bg-[#F6F3EC] text-[#17364B] min-h-screen">
          {/* 1. Hero Section */}
          <section className="relative overflow-hidden bg-[#F6F3EC] text-[#17364B] pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-[#E5DFD3]">
            <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#E5EFF0]/50 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Left Headline */}
                <div className="lg:col-span-5 space-y-4 text-left">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E5EFF0] text-[#17364B] border border-[#CCDDE0]">
                      <Sparkles className="w-3.5 h-3.5 text-[#B99A62]" />
                      <span>{t("blog.badge", "HEALTH ARTICLES")}</span>
                    </div>

                      <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#17364B] tracking-tight leading-tight">
                        {locale === "te" ? (
                          <>
                            ఆరోగ్యకరమైన రేపటి కోసం{" "}
                            <span className="text-[#B99A62]">విశ్వసనీయ సమాచారం</span>
                          </>
                        ) : locale === "hi" ? (
                          <>
                            स्वस्थ कल के लिए{" "}
                            <span className="text-[#B99A62]">विश्वसनीय जानकारी</span>
                          </>
                        ) : (
                          <>
                            Reliable Information for a{" "}
                            <span className="text-[#B99A62]">Healthier Tomorrow</span>
                          </>
                        )}
                      </h1>

                        <p className="text-sm sm:text-base text-[#3A5668] max-w-md pt-1">
                          {t("blog.heroSubtitle", "Expert insights, practical advice and the latest updates on urology and men's health from Dr. Rakesh Vamsi.")}
                        </p>
                      </div>

                      {/* Middle: Doctor in Circular Halo Frame */}
                      <div className="lg:col-span-4 flex justify-center items-center">
                        <div className="relative w-64 h-80 sm:w-72 sm:h-96">
                            <div className="absolute inset-0 rounded-full bg-[#E5EFF0]/60 blur-xl" />
                            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[#B99A62]/40 bg-gradient-to-b from-[#FAF8F5] to-[#E5EFF0] flex items-end justify-center shadow-card">
                              <Image
                                src="/images/dr-rakesh-vamsi.png"
                                alt="Dr. Rakesh Vamsi"
                                fill
                                className="object-contain object-bottom pt-4"
                                priority
                              />
                            </div>
                          </div>
                        </div>

                        {/* Right: Quote Card with Signature */}
                        <div className="lg:col-span-3">
                              <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-card text-[#17364B] space-y-4 border border-[#E5DFD3]">
                                <span className="text-4xl font-serif text-[#B99A62] leading-none block">
                                  “
                                </span>
                                  <p className="text-sm font-medium text-[#3A5668] leading-relaxed">
                                    {t("blog.doctorQuote", "Awareness leads to earlier diagnosis, better treatment and a healthier life.")}
                                  </p>
                                      <div className="pt-3 border-t border-[#E5DFD3] text-left">
                                        <div className="text-xl font-signature text-[#17364B]">
                                          {locDoctor.name}
                                        </div>
                                          <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#B99A62] mt-0.5">
                                            {locDoctor.designation}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                              </div>
                            </section>

                            {/* 2. Category Filter Pills Strip */}
                              <section className="bg-[#F6F3EC]/95 border-b border-[#E5DFD3] sticky top-[69px] z-30 backdrop-blur-md shadow-xs">
                                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                  <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-3 px-1 sm:px-0 scroll-smooth">
                                    {categoryPills.map((cat) => {
                                      const isSelected = selectedCategory === cat.id;
                                      return (
                                        <button
                                          key={cat.id}
                                          type="button"
                                          onClick={() => setSelectedCategory(cat.id)}
                                          className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex-shrink-0 ${isSelected
                                              ? "bg-[#B99A62] text-white font-bold shadow-xs"
                                              : "bg-white text-[#17364B] border border-[#DCD5C9] hover:border-[#B99A62]"
                                            }`}
                                        >
                                          {cat.label}
                                        </button>
                                      );
                                    })}
                                  </div>
                                </div>
                              </section>

                              {/* 3. Main Articles List & Sidebar */}
                                <section className="py-14 bg-[#F6F3EC] min-h-screen">
                                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                                      {/* Left 8 Cols: Articles Grid */}
                                      <div className="lg:col-span-8 space-y-6">
                                        {filteredArticles.length > 0 ? (
                                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            {filteredArticles.map((article) => (
                                              <article
                                                key={article.slug}
                                                className="group bg-white rounded-2xl overflow-hidden border border-[#E5DFD3] hover:border-[#B99A62]/40 shadow-card hover-lift transition-all flex flex-col justify-between"
                                              >
                                                {/* Card Thumbnail Area with Category Badge */}
                                                  <div className="relative aspect-[16/9] bg-[#E5EFF0] flex items-center justify-center p-6 text-center overflow-hidden border-b border-[#CCDDE0]">
                                                    <div className="relative z-10 flex flex-col items-center">
                                                        <FileText className="w-8 h-8 text-[#B99A62] mb-2" />
                                                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#17364B] bg-white/90 px-3 py-1 rounded-full border border-[#CCDDE0]">
                                                          {article.category}
                                                        </span>
                                                    </div>
                                                  </div>

                                                  {/* Card Content */}
                                                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                                                    <div className="space-y-2">
                                                        <h2 className="font-heading font-extrabold text-lg text-[#17364B] group-hover:text-[#B99A62] transition-colors line-clamp-2">
                                                          <Link href={`/blog/${article.slug}`}>
                                                            {article.title}
                                                          </Link>
                                                        </h2>
                                                          <p className="text-xs sm:text-sm text-[#4B6778] line-clamp-2 leading-relaxed">
                                                            {article.shortDescription}
                                                          </p>
                                                        </div>

                                                        {/* Metadata & Read More link */}
                                                          <div className="pt-4 border-t border-[#E5DFD3] flex items-center justify-between text-xs text-[#4B6778]">
                                                            <div className="flex items-center gap-3">
                                                              <span className="flex items-center gap-1">
                                                                <Calendar className="w-3.5 h-3.5 text-[#B99A62]" />
                                                                {article.date}
                                                              </span>
                                                              <span>•</span>
                                                              <span className="flex items-center gap-1">
                                                                <Clock className="w-3.5 h-3.5 text-[#B99A62]" />
                                                                {article.readTime}
                                                              </span>
                                                            </div>

                                                            <Link
                                                              href={`/blog/${article.slug}`}
                                                              className="font-bold text-[#B99A62] hover:text-[#17364B] flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                                                            >
                                                              <span>{t("common.readMore", "Read More")}</span>
                                                              <span>→</span>
                                                            </Link>
                                                          </div>
                                                        </div>
                                                      </article>
                  ))}
                                                    </div>
                                                    ) : (
                                                        <div className="bg-white rounded-2xl p-12 text-center border border-[#E5DFD3] shadow-card space-y-3">
                                                          <div className="w-16 h-16 rounded-full bg-[#E5EFF0] border border-[#CCDDE0] text-[#B99A62] flex items-center justify-center mx-auto">
                                                            <Search className="w-8 h-8" />
                                                          </div>
                                                            <h3 className="font-heading font-bold text-lg text-[#17364B]">
                                                              {locale === "te" ? "వ్యాసాలు ఏవీ కనుగొనబడలేదు" : locale === "hi" ? "कोई लेख नहीं मिला" : "No articles found"}
                                                            </h3>
                                                              <p className="text-xs sm:text-sm text-[#4B6778] max-w-sm mx-auto">
                                                                {locale === "te"
                                                                  ? `"${searchQuery}" శోధనకు తగిన వ్యాసాలు లేవు. అన్ని వ్యాసాలను చూడటానికి శోధనను తొలగించండి.`
                                                                  : locale === "hi"
                                                                    ? `"${searchQuery}" के लिए कोई लेख नहीं मिला। सभी स्वास्थ्य गाइड देखने के लिए खोज साफ़ करें।`
                                                                    : `No medical articles matched your query "${searchQuery}". Clear search to view all health guides.`}
                                                              </p>
                                                              <button
                                                                type="button"
                                                                onClick={() => {
                                                                  setSearchQuery("");
                                                                  setSelectedCategory("all");
                                                                }}
                                                                className="px-4 py-2 rounded-full text-xs font-semibold text-white bg-[#B99A62] hover:bg-[#A3844C] transition-all"
                                                              >
                                                                {locale === "te" ? "అన్ని వ్యాసాలు చూడండి" : locale === "hi" ? "सभी लेख देखें" : "View All Articles"}
                                                              </button>
                                                            </div>
              )}
                                                        </div>

                                                        {/* Right 4 Cols: Sidebar (Search + Categories widget + Stay Updated) */}
                                                        <aside aria-label="Article search and categories" className="lg:col-span-4 space-y-6 lg:sticky lg:top-36">
                                                          {/* Search Widget */}
                                                            <div className="bg-white p-5 rounded-2xl border border-[#E5DFD3] shadow-card">
                                                              <div className="relative">
                                                                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8BA4B2]" />
                                                                <input
                                                                  type="text"
                                                                  placeholder={t("blog.searchPlaceholder", "Search articles...")}
                                                                  value={searchQuery}
                                                                  onChange={(e) => setSearchQuery(e.target.value)}
                                                                  className="w-full pl-10 pr-9 py-2.5 rounded-full text-xs sm:text-sm bg-[#FAF8F5] border border-[#DCD5C9] text-[#17364B] placeholder-[#8BA4B2] focus:outline-none focus:border-[#B99A62] transition-all"
                                                                />
                                                                {searchQuery && (
                                                                  <button
                                                                    type="button"
                                                                    onClick={() => setSearchQuery("")}
                                                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8BA4B2] hover:text-[#17364B] transition-colors"
                                                                  >
                                                                    <X className="w-4 h-4" />
                                                                  </button>
                                                                )}
                                                              </div>
                                                            </div>

                                                                {/* Categories Widget */}
                                                                <div className="bg-white p-6 rounded-2xl border border-[#E5DFD3] shadow-card space-y-4">
                                                                  <h3 className="font-heading font-extrabold text-base text-[#17364B]">
                                                                    {t("blog.categories", "Categories")}
                                                                  </h3>
                                                                  <div className="space-y-1">
                                                                    {locCategories.slice(1).map((cat) => (
                                                                      <button
                                                                        key={cat.id}
                                                                        type="button"
                                                                        onClick={() => setSelectedCategory(cat.id)}
                                                                        className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-[#FAF8F5] text-xs font-semibold text-[#3A5668] hover:text-[#B99A62] transition-colors text-left"
                                                                      >
                                                                        <span>{cat.name}</span>
                                                                          <div className="flex items-center gap-1 text-[#4B6778] text-[11px]">
                                                                            <span>{cat.count} {locale === "te" ? "వ్యాసాలు" : locale === "hi" ? "लेख" : "Articles"}</span>
                                                                            <ChevronRight className="w-3.5 h-3.5 text-[#B99A62]" />
                                                                          </div>
                                                                      </button>
                                                                    ))}
                                                                  </div>
                                                                </div>

                                                                    {/* Stay Updated Newsletter Card */}
                                                                    <div className="bg-[#E5EFF0] text-[#17364B] p-6 sm:p-7 rounded-2xl border border-[#CCDDE0] shadow-card space-y-4">
                                                                      <div className="w-10 h-10 rounded-xl bg-white text-[#B99A62] flex items-center justify-center">
                                                                        <Mail className="w-5 h-5" />
                                                                      </div>
                                                                      <div>
                                                                          <h3 className="font-heading font-bold text-base text-[#17364B]">
                                                                            {t("blog.stayUpdated", "Stay Updated")}
                                                                          </h3>
                                                                            <p className="text-xs text-[#3A5668] mt-1 leading-relaxed">
                                                                              {t("blog.stayUpdatedDesc", "Get the latest health articles, tips and updates directly to your inbox.")}
                                                                            </p>
                                                                          </div>

                                                                          {newsletterSubmitted ? (
                                                                              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center gap-2">
                                                                                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                                                                                <span>{t("blog.subscribedSuccess", "Thank you! You are subscribed to health updates.")}</span>
                                                                              </div>
                                                                              ) : (
                                                                              <form onSubmit={handleNewsletterSubmit} className="relative">
                                                                                <input
                                                                                  type="email"
                                                                                  required
                                                                                  placeholder={t("blog.emailPlaceholder", "Enter your email address")}
                                                                                  value={newsletterEmail}
                                                                                  onChange={(e) => setNewsletterEmail(e.target.value)}
                                                                                  className="w-full pl-4 pr-11 py-2.5 rounded-full text-xs bg-white border border-[#CCDDE0] text-[#17364B] placeholder-[#8BA4B2] focus:outline-none focus:ring-2 focus:ring-[#B99A62]"
                                                                                />
                                                                                <button
                                                                                  type="submit"
                                                                                  className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#B99A62] text-white flex items-center justify-center transition-colors font-bold hover:bg-[#A3844C]"
                                                                                  aria-label="Subscribe"
                                                                                >
                                                                                  <ArrowRight className="w-4 h-4" />
                                                                                </button>
                                                                              </form>
                )}
                                                                            </div>
            </aside>
                                                                      </div>
                                                                    </div>
                                                                  </section>

                                                                    {/* 4. Bottom Have a Question Banner */}
                                                                    <section className="py-10 bg-[#F6F3EC]">
                                                                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                                                          <div className="rounded-2xl bg-[#E5EFF0] border border-[#CCDDE0] p-8 text-[#17364B] flex flex-col md:flex-row items-center justify-between gap-6 shadow-card">
                                                                            <div>
                                                                                <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#17364B]">
                                                                                  {locale === "te" ? "ప్రశ్నలు ఉన్నాయా?" : locale === "hi" ? "कोई प्रश्न है?" : "Have a Question?"}
                                                                                </h2>
                                                                                  <p className="text-xs sm:text-sm text-[#3A5668] mt-0.5">
                                                                                    {locale === "te"
                                                                                      ? "డాక్టర్ రాకేష్ వంశీ వద్ద నిపుణుల సలహా పొందండి. KIMS హాస్పిటల్ నెల్లూరులో సంప్రదింపు బుక్ చేయండి."
                                                                                      : locale === "hi"
                                                                                        ? "डॉ. राकेश वामसी से विशेषज्ञ सलाह प्राप्त करें। किम्स अस्पताल, नेल्लोर में परामर्श बुक करें।"
                                                                                        : "Get expert advice from Dr. Rakesh Vamsi. Book a consultation at KIMS Hospital, Nellore."}
                                                                                  </p>
                                                                                </div>
                                                                                <Link
                                                                                  href="/book-appointment"
                                                                                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-[#B99A62] hover:bg-[#A3844C] shadow-sm transition-all whitespace-nowrap"
                                                                                >
                                                                                  <Calendar className="w-4 h-4" />
                                                                                  <span>{t("common.bookAppointment", "Book Appointment")} →</span>
                                                                                </Link>
                                                                            </div>
                                                                          </div>
                                                                        </section>
                                                                      </div>
                                                                      );
}
