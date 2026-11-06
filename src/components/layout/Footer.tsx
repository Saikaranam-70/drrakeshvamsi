"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Clock,
  Calendar,
  ChevronRight,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getLocalizedDoctorData } from "@/data/localizedDoctor";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { locale, t } = useLanguage();
  const doctor = getLocalizedDoctorData(locale);

  return (
    <footer className="bg-[#112736] text-[#DCE5EA] pt-16 pb-12 border-t border-[#1E425B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Pre-Footer CTA Bar */}
        <div className="bg-[#E5EFF0] p-6 sm:p-8 rounded-3xl border border-[#C8DFE2] shadow-xl mb-14 flex flex-col md:flex-row items-center justify-between gap-6 text-[#17364B]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white border border-[#D0E2E5] flex items-center justify-center flex-shrink-0 shadow-xs">
              <Calendar className="w-6 h-6 text-[#B99A62]" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-heading font-extrabold text-[#17364B]">
                {t("common.footer.preFooterHeading", "Need Expert Urology or Andrology Consultation?")}
              </h3>
              <p className="text-[#3A5668] text-sm mt-0.5 font-medium">
                {t("common.footer.preFooterSub", `Consult with Dr. G. Rakesh Vamsi at ${doctor.hospital.name}, ${doctor.hospital.city}.`)}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Link
              href="/book-appointment"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-[#B99A62] hover:bg-[#A3844C] shadow-md transition-all transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>{t("common.actions.bookAppointment", "Book Appointment")}</span>
              <span>→</span>
            </Link>
            <a
              href={`tel:${doctor.hospital.phone.replace(/\s+/g, "")}`}
              className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-[#17364B] bg-white hover:bg-[#F6F3EC] border border-[#CCDCE0] transition-colors shadow-xs"
            >
              <Phone className="w-4 h-4 text-[#B99A62]" />
              <span>{t("common.actions.callClinic", "Call Clinic")}</span>
            </a>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-[#1E425B]">
          {/* Col 1: Brand & Doctor Intro */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 flex-shrink-0 bg-white rounded-full p-1 shadow-md transition-transform duration-200 group-hover:scale-105 border border-white/40">
                <Image
                  src="/images/logo.png"
                  alt="Dr. G. Rakesh Vamsi - Andrology and Urology Clinic Logo"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl text-[#F6F3EC] tracking-tight group-hover:text-[#B99A62] transition-colors">
                  {t("common.header.doctorName", "Dr. Rakesh Vamsi")}
                </span>
                <span className="text-[11px] font-semibold text-[#D4BE92] mt-0.5">
                  {t("common.header.subtitle", "Consultant Urologist & Andrologist")}
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#B4C8D2] leading-relaxed">
              {doctor.fullBio}
            </p>

            <div className="pt-2">
              <a
                href={doctor.social.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#F6F3EC] hover:text-[#B99A62] transition-colors bg-white/10 px-3 py-1.5 rounded-full border border-white/15 hover:border-[#B99A62]"
              >
                <Instagram className="w-4 h-4 text-[#B99A62]" />
                <span>Follow {doctor.social.instagram}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-[#F6F3EC] font-heading font-bold text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B99A62]" />
              {t("common.footer.quickNavHeading", "Quick Navigation")}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-[#B99A62] transition-colors flex items-center gap-1.5 text-[#C8D8E0]">
                  <ChevronRight className="w-3.5 h-3.5 text-[#B99A62]" />
                  {t("common.nav.home", "Home")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#B99A62] transition-colors flex items-center gap-1.5 text-[#C8D8E0]">
                  <ChevronRight className="w-3.5 h-3.5 text-[#B99A62]" />
                  {t("common.nav.about", "About Dr. Rakesh Vamsi")}
                </Link>
              </li>
              <li>
                <Link href="/treatments" className="hover:text-[#B99A62] transition-colors flex items-center gap-1.5 text-[#C8D8E0]">
                  <ChevronRight className="w-3.5 h-3.5 text-[#B99A62]" />
                  {t("common.nav.treatments", "Treatments & Services")}
                </Link>
              </li>
              <li>
                <Link href="/patient-info" className="hover:text-[#B99A62] transition-colors flex items-center gap-1.5 text-[#C8D8E0]">
                  <ChevronRight className="w-3.5 h-3.5 text-[#B99A62]" />
                  {t("common.nav.patientInfo", "Patient Guide & Visit Prep")}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#B99A62] transition-colors flex items-center gap-1.5 text-[#C8D8E0]">
                  <ChevronRight className="w-3.5 h-3.5 text-[#B99A62]" />
                  {t("common.nav.blog", "Health Articles & Insights")}
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-[#B99A62] transition-colors flex items-center gap-1.5 text-[#C8D8E0]">
                  <ChevronRight className="w-3.5 h-3.5 text-[#B99A62]" />
                  {t("faqs.heroBadge", "Frequently Asked Questions")}
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-[#B99A62] transition-colors flex items-center gap-1.5 text-[#C8D8E0]">
                  <ChevronRight className="w-3.5 h-3.5 text-[#B99A62]" />
                  {t("testimonials.heroBadge", "Patient Stories & Experiences")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#B99A62] transition-colors flex items-center gap-1.5 text-[#C8D8E0]">
                  <ChevronRight className="w-3.5 h-3.5 text-[#B99A62]" />
                  {t("common.nav.contact", "Contact & Clinic Location")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Treatments */}
          <div>
            <h4 className="text-[#F6F3EC] font-heading font-bold text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B99A62]" />
              {t("common.footer.specializedCareHeading", "Specialized Care")}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/treatments/kidney-stones" className="hover:text-[#B99A62] transition-colors flex items-center gap-1.5 text-[#C8D8E0]">
                  <ChevronRight className="w-3.5 h-3.5 text-[#B99A62]" />
                  {locale === "te" ? "కిడ్నీలో రాళ్లు (లేజర్ RIRS/PCNL)" : locale === "hi" ? "किडनी स्टोन (लेज़र RIRS/PCNL)" : "Kidney Stones (Laser RIRS/PCNL)"}
                </Link>
              </li>
              <li>
                <Link href="/treatments/prostate-care" className="hover:text-[#B99A62] transition-colors flex items-center gap-1.5 text-[#C8D8E0]">
                  <ChevronRight className="w-3.5 h-3.5 text-[#B99A62]" />
                  {locale === "te" ? "ప్రోస్టేట్ సంరక్షణ (BPH & లేజర్)" : locale === "hi" ? "प्रोस्टेट देखभाल (BPH एवं लेज़र)" : "Prostate Care (BPH & Laser)"}
                </Link>
              </li>
              <li>
                <Link href="/treatments/male-infertility" className="hover:text-[#B99A62] transition-colors flex items-center gap-1.5 text-[#C8D8E0]">
                  <ChevronRight className="w-3.5 h-3.5 text-[#B99A62]" />
                  {locale === "te" ? "పురుషుల సంతానలేమి & మైక్రో-TESE" : locale === "hi" ? "पुरुष बांझपन एवं माइक्रो-TESE" : "Male Infertility & Micro-TESE"}
                </Link>
              </li>
              <li>
                <Link href="/treatments/erectile-dysfunction" className="hover:text-[#B99A62] transition-colors flex items-center gap-1.5 text-[#C8D8E0]">
                  <ChevronRight className="w-3.5 h-3.5 text-[#B99A62]" />
                  {locale === "te" ? "అంగస్తంభన లోపం & పురుషుల ఆరోగ్యం" : locale === "hi" ? "स्तंभन दोष एवं पुरुष स्वास्थ्य" : "Erectile Dysfunction & Men's Health"}
                </Link>
              </li>
              <li>
                <Link href="/treatments/urological-cancers" className="hover:text-[#B99A62] transition-colors flex items-center gap-1.5 text-[#C8D8E0]">
                  <ChevronRight className="w-3.5 h-3.5 text-[#B99A62]" />
                  {locale === "te" ? "యూరాలజికల్ క్యాన్సర్లు (కిడ్నీ & బ్లాడర్)" : locale === "hi" ? "यूरोलॉजिकल कैंसर (किडनी एवं मूत्राशय)" : "Urological Cancers (Kidney & Bladder)"}
                </Link>
              </li>
              <li>
                <Link href="/treatments/laparoscopic-robotic-surgery" className="hover:text-[#B99A62] transition-colors flex items-center gap-1.5 text-[#C8D8E0]">
                  <ChevronRight className="w-3.5 h-3.5 text-[#B99A62]" />
                  {locale === "te" ? "లాపరోస్కోపిక్ & రోబోటిక్ సర్జరీ" : locale === "hi" ? "लेप्रोस्कोपिक एवं रोबोटिक सर्जरी" : "Laparoscopic & Robotic Surgery"}
                </Link>
              </li>
              <li>
                <Link href="/treatments/urinary-tract-infections" className="hover:text-[#B99A62] transition-colors flex items-center gap-1.5 text-[#C8D8E0]">
                  <ChevronRight className="w-3.5 h-3.5 text-[#B99A62]" />
                  {locale === "te" ? "మూత్ర మార్గ ఇన్ఫెక్షన్లు (UTI)" : locale === "hi" ? "यूरिनरी ट्रैक्ट इन्फेक्शन (UTI)" : "Recurrent Urinary Infections (UTI)"}
                </Link>
              </li>
              <li>
                <Link href="/treatments/reconstructive-urology" className="hover:text-[#B99A62] transition-colors flex items-center gap-1.5 text-[#C8D8E0]">
                  <ChevronRight className="w-3.5 h-3.5 text-[#B99A62]" />
                  {locale === "te" ? "పునర్నిర్మాణ యూరాలజీ (BMG)" : locale === "hi" ? "पुनर्निर्माण यूरोलॉजी (BMG)" : "Reconstructive Urology"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Hospital & Consultation Details */}
          <div className="space-y-4">
            <h4 className="text-[#F6F3EC] font-heading font-bold text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B99A62]" />
              {t("common.footer.clinicInfoHeading", "Clinic & Hospital")}
            </h4>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B99A62] mt-1 flex-shrink-0" />
                <span className="text-[#C8D8E0]">
                  {doctor.hospital.address}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#B99A62] flex-shrink-0" />
                <span className="text-[#C8D8E0]">{doctor.hospital.hours}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B99A62] flex-shrink-0" />
                <a
                  href={`tel:${doctor.hospital.phone.replace(/\s+/g, "")}`}
                  className="text-white font-semibold hover:text-[#B99A62] transition-colors"
                >
                  {doctor.hospital.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B99A62] flex-shrink-0" />
                <a
                  href={`mailto:${doctor.hospital.email}`}
                  className="text-[#C8D8E0] hover:text-[#B99A62] transition-colors"
                >
                  {doctor.hospital.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={doctor.hospital.mapQuery ? `https://www.google.com/maps/search/?api=1&query=${doctor.hospital.mapQuery}` : "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#D4BE92] hover:underline"
              >
                <span>{t("common.actions.getDirections", "Get Directions")}</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer & Legal Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8BA4B2]">
          <p className="text-center md:text-left leading-relaxed max-w-2xl">
            <span className="font-semibold text-[#C0D2DC]">{t("common.footer.disclaimerTitle", "Medical Disclaimer:")}</span> {t("common.footer.disclaimerText", "The information provided on this website is for educational and informational purposes only and is not intended as medical advice or a substitute for professional clinical diagnosis. Always seek the advice of Dr. Rakesh Vamsi or a qualified healthcare specialist regarding any medical condition.")}
          </p>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#F6F3EC] transition-colors">
              {t("common.footer.privacyPolicy", "Privacy Policy")}
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-[#F6F3EC] transition-colors">
              {t("common.footer.termsConditions", "Terms & Conditions")}
            </Link>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-[#1E425B]/70 text-center text-xs text-[#8BA4B2]">
          © {currentYear} Dr. Rakesh Vamsi. {t("common.footer.copyright", "All rights reserved. Consultant Urologist & Andrologist | KIMS Hospital, Nellore.")}
        </div>
      </div>
    </footer>
  );
}
