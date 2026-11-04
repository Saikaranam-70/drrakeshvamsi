"use client";

import React from "react";
import Link from "next/link";
import {
  Heart,
  ShieldCheck,
  Users,
  ArrowRight,
  Lock,
  Sparkles,
  CheckCircle2,
  Calendar,
  PhoneCall,
  Activity,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AndrologySpotlight() {
  const { t } = useLanguage();

  const pillars = [
    {
      title: t("home.andrology.pillar1Title", "ED Management"),
      subtitle: t("home.andrology.pillar1Subtitle", "Erectile Dysfunction Solutions"),
      description: t(
        "home.andrology.pillar1Desc",
        "Confidential clinical evaluations identifying cardiovascular, hormonal, and vascular root causes. Evidence-based oral therapies, hormone optimization, and drug-free Low-Intensity Shockwave Therapy (Li-ESWT)."
      ),
      icon: Activity,
      badge: t("home.andrology.pillar1Badge", "Medical & Regenerative"),
      highlights: [
        t("home.andrology.pillar1Point1", "Penile Color Doppler vascular mapping"),
        t("home.andrology.pillar1Point2", "Non-invasive Low-Intensity Shockwave (Li-ESWT)"),
        t("home.andrology.pillar1Point3", "Discreet, personalized medication regimens"),
      ],
      href: "/treatments/erectile-dysfunction",
      cta: t("home.andrology.pillar1Cta", "Explore ED Care"),
    },
    {
      title: t("home.andrology.pillar2Title", "Penile Implants"),
      subtitle: t("home.andrology.pillar2Subtitle", "Penile Prosthesis Surgery"),
      description: t(
        "home.andrology.pillar2Desc",
        "The permanent, gold-standard solution for severe or medication-resistant ED and Peyronie's disease. State-of-the-art 3-piece inflatable (IPP) and malleable implants providing spontaneous firmness with normal natural sensation."
      ),
      icon: ShieldCheck,
      badge: t("home.andrology.pillar2Badge", "Definitive Solution"),
      highlights: [
        t("home.andrology.pillar2Point1", "Spontaneous, reliable rigidity on-demand"),
        t("home.andrology.pillar2Point2", "Over 95% patient and partner satisfaction"),
        t("home.andrology.pillar2Point3", "Normal skin sensation, orgasm & ejaculation preserved"),
      ],
      href: "/treatments/penile-implants",
      cta: t("home.andrology.pillar2Cta", "Learn About Implants"),
      featured: true,
    },
    {
      title: t("home.andrology.pillar3Title", "Male Infertility"),
      subtitle: t("home.andrology.pillar3Subtitle", "Reproductive & Micro-Surgical Care"),
      description: t(
        "home.andrology.pillar3Desc",
        "Scientific investigations and microscopic procedures addressing male factor conception challenges. Specialized subinguinal microsurgical varicocelectomy and Micro-TESE sperm extraction coordinated for IVF/ICSI success."
      ),
      icon: Users,
      badge: t("home.andrology.pillar3Badge", "Precision Microsurgery"),
      highlights: [
        t("home.andrology.pillar3Point1", "High-magnification microsurgical varicocelectomy"),
        t("home.andrology.pillar3Point2", "Micro-TESE for non-obstructive azoospermia"),
        t("home.andrology.pillar3Point3", "WHO-standard semen analysis & hormonal balancing"),
      ],
      href: "/treatments/male-infertility",
      cta: t("home.andrology.pillar3Cta", "Explore Infertility Care"),
    },
  ];

  return (
      <section className="py-20 lg:py-24 bg-brand-navy-950 text-white relative overflow-hidden border-b border-brand-navy-800">
        {/* Decorative Background Lighting */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-teal-950/80 border border-brand-teal-700/60 text-brand-cyan shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
              <span>{t("home.andrology.badge", "SPECIALIZED ANDROLOGY & MEN'S HEALTH")}</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              {t("home.andrology.headingPrefix", "Focused Care for")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-teal-400">
                {t("home.andrology.headingHighlight", "Male Sexual & Reproductive")}
              </span>{" "}
              {t("home.andrology.headingSuffix", "Wellness")}
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
              {t(
                "home.andrology.subtitle",
                "Dr. Rakesh Vamsi provides specialized, confidential, and evidence-based clinical solutions for ED management, penile implants, and male infertility at KIMS Hospital, Nellore."
              )}
            </p>
          </div>

          {/* 3 Pillar Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${pillar.featured
                    ? "bg-gradient-to-b from-brand-navy-900 via-brand-navy-950 to-brand-navy-950 text-white shadow-2xl border-2 border-brand-cyan shadow-glow/20 lg:-translate-y-2"
                    : "bg-brand-navy-900/90 text-white shadow-xl border border-brand-navy-800 hover:border-brand-teal-400/50"
                    }`}
                >
                  {pillar.featured && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-teal-400 to-brand-cyan text-brand-navy-950 text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                      {t("home.andrology.definitiveBadge", "Permanent Gold Standard")}
                    </div>
                  )}

                  <div>
                    {/* Top Bar with Icon and Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center ${pillar.featured
                          ? "bg-brand-teal-500/20 text-brand-cyan border border-brand-teal-400/30"
                          : "bg-brand-teal-500/10 text-brand-cyan border border-brand-teal-500/20"
                          }`}
                      >
                        <Icon className="w-7 h-7" />
                      </div>
                      <span
                        className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${pillar.featured
                          ? "bg-white/10 text-brand-teal-200 border border-white/15"
                          : "bg-brand-navy-800 text-brand-cyan border border-brand-navy-700"
                          }`}
                      >
                        {pillar.badge}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h3
                      className="font-heading font-extrabold text-2xl tracking-tight mb-1 text-white"
                    >
                      {pillar.title}
                    </h3>
                    <p
                      className={`text-sm font-semibold mb-4 ${pillar.featured ? "text-brand-teal-300" : "text-brand-cyan"
                        }`}
                    >
                      {pillar.subtitle}
                    </p>

                    {/* Description */}
                    <p
                      className="text-sm leading-relaxed mb-6 text-slate-300"
                    >
                      {pillar.description}
                    </p>

                    {/* Bullet Highlights */}
                    <ul className="space-y-2.5 mb-8">
                      {pillar.highlights.map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium">
                          <CheckCircle2
                            className="w-4 h-4 flex-shrink-0 mt-0.5 text-brand-cyan"
                          />
                          <span className="text-slate-300">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom CTA Button */}
                  <Link
                    href={pillar.href}
                    className={`inline-flex items-center justify-between w-full px-5 py-3.5 rounded-2xl text-sm font-bold transition-all duration-200 ${pillar.featured
                      ? "bg-gradient-to-r from-brand-teal-400 to-brand-cyan text-brand-navy-950 hover:shadow-glow shadow-md"
                      : "bg-white/5 hover:bg-brand-teal-600 text-white border border-white/10 hover:border-transparent"
                      }`}
                  >
                    <span>{pillar.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Confidentiality & Reassurance Strip */}
          <div className="mt-12 bg-brand-navy-900/90 rounded-3xl p-6 sm:p-8 border border-brand-navy-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-2xl bg-brand-teal-500/10 text-brand-cyan border border-brand-teal-500/20 flex items-center justify-center flex-shrink-0">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading font-extrabold text-lg text-white">
                  {t("home.andrology.privacyTitle", "100% Confidential & Judgment-Free Care")}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 font-medium mt-0.5">
                  {t(
                    "home.andrology.privacyDesc",
                    "Men's health concerns deserve scientific understanding. Private consultations at KIMS Hospital, Nellore."
                  )}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto flex-shrink-0">
              <Link
                href="/book-appointment"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-brand-navy-950 bg-gradient-to-r from-brand-teal-400 to-brand-cyan hover:from-brand-teal-300 hover:to-brand-cyan shadow-md transition-all w-full sm:w-auto"
              >
                <Calendar className="w-4 h-4 text-brand-navy-950" />
                <span>{t("home.andrology.bookPrivateBtn", "Book Private Appointment")}</span>
              </Link>

              <a
                href="tel:+917674008057"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors w-full sm:w-auto"
              >
                <PhoneCall className="w-4 h-4 text-brand-cyan" />
                <span>+91 76740 08057</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      );
}
