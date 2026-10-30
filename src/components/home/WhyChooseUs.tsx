"use client";

import React from "react";
import { ShieldCheck, HeartHandshake, Stethoscope, Users, Award, Hospital } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

export default function WhyChooseUs() {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: Users,
      title: t("home.whyChooseUs.pillar1Title", "Patient-Centered Approach"),
      description: t(
        "home.whyChooseUs.pillar1Desc",
        "We spend time listening to your concerns, explaining diagnoses clearly, and choosing treatments tailored to your lifestyle and comfort."
      ),
    },
    {
      icon: ShieldCheck,
      title: t("home.whyChooseUs.pillar2Title", "Advanced Technology"),
      description: t(
        "home.whyChooseUs.pillar2Desc",
        "Equipped with cutting-edge Holmium/Thulium lasers, high-definition flexible ureteroscopy (RIRS), and precision robotic platforms."
      ),
    },
    {
      icon: Stethoscope,
      title: t("home.whyChooseUs.pillar3Title", "Minimally Invasive Expertise"),
      description: t(
        "home.whyChooseUs.pillar3Desc",
        "Specializing in keyhole laparoscopic and endoscopic techniques that mean smaller incisions, less pain, and rapid 24-48 hour discharge."
      ),
    },
    {
      icon: HeartHandshake,
      title: t("home.whyChooseUs.pillar4Title", "Compassionate & Confidential"),
      description: t(
        "home.whyChooseUs.pillar4Desc",
        "Sensitive urological and men's health issues are treated in a judgment-free, supportive, and strictly private clinical environment."
      ),
    },
    {
      icon: Award,
      title: t("home.whyChooseUs.pillar5Title", "Proven Clinical Excellence"),
      description: t(
        "home.whyChooseUs.pillar5Desc",
        "Over 10+ years of dedicated surgical experience with more than 5,000+ satisfied patients and 1,000+ advanced procedures."
      ),
    },
    {
      icon: Hospital,
      title: t("home.whyChooseUs.pillar6Title", "KIMS Hospital Backup"),
      description: t(
        "home.whyChooseUs.pillar6Desc",
        "Consulting at KIMS Hospital, Nellore, offering 24/7 emergency support, ICU infrastructure, and seamless cashless insurance clearance."
      ),
    },
  ];

  return (
    <section className="py-20 bg-brand-surface border-y border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t("home.whyChooseUs.badge", "WHY CHOOSE US")}
          title={t("home.whyChooseUs.title", "Excellence in Urological & Andrological Care")}
          subtitle={t("home.whyChooseUs.subtitle", "Combining advanced surgical precision with deep empathy and transparent patient communication.")}
          align="center"
          className="mb-14"
        />

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-7 border border-brand-border/80 shadow-xs hover-lift transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-teal-50 border border-brand-teal-100 text-brand-teal-600 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-extrabold text-lg text-brand-navy-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
