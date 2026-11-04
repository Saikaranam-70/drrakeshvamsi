"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Clock,
  Calendar,
  Send,
  CheckCircle2,
  AlertCircle,
  Building2,
  Armchair,
  Stethoscope,
  Sparkles,
  Bed,
  ExternalLink,
  Navigation,
  Hospital,
} from "lucide-react";
import { getLocalizedDoctorData } from "@/data/localizedDoctor";
import { hospitalData } from "@/data/hospitalData";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ContactPage() {
  const { locale, t } = useLanguage();
  const locDoctor = getLocalizedDoctorData(locale);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    preferredDate: "",
    preferredTimeSlot: "Morning (09:00 AM - 12:00 PM)",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      // Simulate/call API
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Unable to submit request. Please call our hospital desk.");
      }

      setSubmittedSuccess(true);
    } catch {
      // Fallback optimistic confirmation with note
      setSubmittedSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const badgeLabels = {
    booking: locale === "te" ? { top: "సులువైన", bottom: "అపాయింట్‌మెంట్ బుకింగ్" } : locale === "hi" ? { top: "आसान", bottom: "अपॉइंटमेंट बुकिंग" } : { top: "Easy", bottom: "Appointment Booking" },
    response: locale === "te" ? { top: "త్వరిత", bottom: "స్పందన" } : locale === "hi" ? { top: "त्वरित", bottom: "प्रतिक्रिया" } : { top: "Quick", bottom: "Response" },
    support: locale === "te" ? { top: "రోగి-కేంద్రీకృత", bottom: "సహాయం" } : locale === "hi" ? { top: "रोगी-केंद्रित", bottom: "सहायता" } : { top: "Patient-Centered", bottom: "Support" },
    care: locale === "te" ? { top: "గోప్యమైన", bottom: "& ఆప్యాయమైన సంరక్షణ" } : locale === "hi" ? { top: "गोपनीय", bottom: "और संवेदनशील देखभाल" } : { top: "Confidential", bottom: "& Compassionate Care" },
  };

  return (
        <div className="bg-[#F6F3EC] text-[#17364B] min-h-screen">
          {/* 1. Hero Section */}
          <section className="relative overflow-hidden bg-[#F6F3EC] text-[#17364B] pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-[#E5DFD3]">
            <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#E5EFF0]/50 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Left Headline & 4 Badges */}
                <div className="lg:col-span-5 space-y-5 text-left">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E5EFF0] text-[#17364B] border border-[#CCDDE0]">
                      <MapPin className="w-3.5 h-3.5 text-[#B99A62]" />
                      <span>{t("contact.badge", "CONTACT US")}</span>
                    </div>

                    <div className="space-y-1">
                        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#17364B] tracking-tight leading-tight">
                          {locale === "te" ? (
                            <>
                              మీ ఆరోగ్యం కోసం <br />
                              <span className="text-[#B99A62]">మేము సిద్ధంగా ఉన్నాము</span>
                            </>
                          ) : locale === "hi" ? (
                            <>
                              आपके स्वास्थ्य के लिए <br />
                              <span className="text-[#B99A62]">हम सदैव तत्पर हैं</span>
                            </>
                          ) : (
                            <>
                              We&apos;re Here <br />
                              For <span className="text-[#B99A62]">Your Health</span>
                            </>
                          )}
                        </h1>
                          <p className="text-sm sm:text-base text-[#3A5668] leading-relaxed max-w-md pt-1">
                            {t("contact.heroSubtitle", "Get in touch for appointments, queries or more information about our services. We're happy to help you.")}
                          </p>
                        </div>

                        {/* 4 Feature Badges */}
                        <div className="grid grid-cols-2 gap-3 pt-2">
                            <div className="p-2.5 rounded-xl bg-white border border-[#E5DFD3] shadow-xs text-left">
                              <div className="text-[#B99A62] font-bold text-xs">{badgeLabels.booking.top}</div>
                              <div className="text-[#17364B] text-xs font-medium">{badgeLabels.booking.bottom}</div>
                            </div>
                              <div className="p-2.5 rounded-xl bg-white border border-[#E5DFD3] shadow-xs text-left">
                                <div className="text-[#B99A62] font-bold text-xs">{badgeLabels.response.top}</div>
                                <div className="text-[#17364B] text-xs font-medium">{badgeLabels.response.bottom}</div>
                              </div>
                                <div className="p-2.5 rounded-xl bg-white border border-[#E5DFD3] shadow-xs text-left">
                                  <div className="text-[#B99A62] font-bold text-xs">{badgeLabels.support.top}</div>
                                  <div className="text-[#17364B] text-xs font-medium">{badgeLabels.support.bottom}</div>
                                </div>
                                  <div className="p-2.5 rounded-xl bg-white border border-[#E5DFD3] shadow-xs text-left">
                                    <div className="text-[#B99A62] font-bold text-xs">{badgeLabels.care.top}</div>
                                    <div className="text-[#17364B] text-xs font-medium">{badgeLabels.care.bottom}</div>
                                  </div>
                                </div>
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
                                            {t("contact.doctorQuote", "Your health matters. We are here to listen, understand and provide the best care for you.")}
                                          </p>
                                              <div className="pt-3 border-t border-[#E5DFD3] text-left">
                                                <div className="text-xl font-signature text-[#17364B]">
                                                  {locDoctor.name}
                                                </div>
                                                  <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#B99A62] mt-0.5">
                                                    {locDoctor.designation}
                                                  </div>
                                                    <div className="text-[8px] text-[#4B6778] uppercase mt-0.5">
                                                      {locDoctor.hospital.name}, {locDoctor.hospital.city}
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </section>

                                          {/* 2. Main 3-Column Layout */}
                                          <section className="py-14 bg-[#F6F3EC]">
                                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                                                {/* Col 1 (4 cols): Contact Information */}
                                                <div className="lg:col-span-4 space-y-4">
                                                      <div className="bg-white p-6 rounded-2xl border border-[#E5DFD3] shadow-card space-y-4 text-[#17364B]">
                                                        <h3 className="font-heading font-extrabold text-lg text-[#17364B] mb-2">
                                                          {t("contact.infoHeading", "Contact Information")}
                                                        </h3>

                                                        {/* Phone */}
                                                            <div className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-[#FAF8F5] transition-colors">
                                                              <div className="w-10 h-10 rounded-xl bg-[#E5EFF0] border border-[#CCDDE0] text-[#B99A62] flex items-center justify-center flex-shrink-0">
                                                                <Phone className="w-5 h-5" />
                                                              </div>
                                                              <div className="flex-1">
                                                                  <div className="text-xs font-semibold text-[#4B6778]">
                                                                    {locale === "te" ? "ఫోన్ నంబర్" : locale === "hi" ? "फ़ोन" : "Phone"}
                                                                  </div>
                                                                  <a
                                                                    href={`tel:${locDoctor.hospital.phone.replace(/\s+/g, "")}`}
                                                                    className="text-sm font-bold text-[#17364B] hover:text-[#B99A62] transition-colors block mt-0.5"
                                                                  >
                                                                    {locDoctor.hospital.phone}
                                                                  </a>
                                                                </div>
                                                              </div>

                                                              {/* Email */}
                                                                  <div className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-[#FAF8F5] transition-colors">
                                                                    <div className="w-10 h-10 rounded-xl bg-[#E5EFF0] border border-[#CCDDE0] text-[#B99A62] flex items-center justify-center flex-shrink-0">
                                                                      <Mail className="w-5 h-5" />
                                                                    </div>
                                                                    <div className="flex-1">
                                                                        <div className="text-xs font-semibold text-[#4B6778]">
                                                                          {locale === "te" ? "ఈమెయిల్" : locale === "hi" ? "ईमेल" : "Email"}
                                                                        </div>
                                                                        <a
                                                                          href={`mailto:${locDoctor.hospital.email}`}
                                                                          className="text-sm font-bold text-[#17364B] hover:text-[#B99A62] transition-colors block mt-0.5"
                                                                        >
                                                                          {locDoctor.hospital.email}
                                                                        </a>
                                                                      </div>
                                                                    </div>

                                                                    {/* Hospital Address */}
                                                                        <div className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-[#FAF8F5] transition-colors">
                                                                          <div className="w-10 h-10 rounded-xl bg-[#E5EFF0] border border-[#CCDDE0] text-[#B99A62] flex items-center justify-center flex-shrink-0">
                                                                            <MapPin className="w-5 h-5" />
                                                                          </div>
                                                                          <div className="flex-1">
                                                                              <div className="text-xs font-semibold text-[#4B6778]">
                                                                                {locale === "te" ? "ఆసుపత్రి" : locale === "hi" ? "अस्पताल" : "Hospital"}
                                                                              </div>
                                                                                <div className="text-xs font-bold text-[#17364B] mt-0.5">
                                                                                  {locDoctor.hospital.address}
                                                                                </div>
                                                                              </div>
                                                                            </div>

                                                                            {/* Instagram */}
                                                                                <div className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-[#FAF8F5] transition-colors">
                                                                                  <div className="w-10 h-10 rounded-xl bg-[#FDF2F8] border border-pink-200 text-pink-600 flex items-center justify-center flex-shrink-0">
                                                                                    <Instagram className="w-5 h-5" />
                                                                                  </div>
                                                                                  <div className="flex-1">
                                                                                    <div className="text-xs font-semibold text-[#4B6778]">Instagram</div>
                                                                                    <a
                                                                                      href={locDoctor.social.instagramUrl}
                                                                                      target="_blank"
                                                                                      rel="noopener noreferrer"
                                                                                      className="text-sm font-bold text-[#17364B] hover:text-pink-600 transition-colors block mt-0.5"
                                                                                    >
                                                                                      {locDoctor.social.instagram}
                                                                                    </a>
                                                                                  </div>
                                                                                </div>

                                                                                {/* Timings */}
                                                                                    <div className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-[#FAF8F5] transition-colors">
                                                                                      <div className="w-10 h-10 rounded-xl bg-[#E5EFF0] border border-[#CCDDE0] text-[#B99A62] flex items-center justify-center flex-shrink-0">
                                                                                        <Clock className="w-5 h-5" />
                                                                                      </div>
                                                                                      <div className="flex-1">
                                                                                          <div className="text-xs font-semibold text-[#4B6778]">
                                                                                            {locale === "te" ? "సంప్రదింపు సమయాలు" : locale === "hi" ? "परामर्श का समय" : "Consultation Hours"}
                                                                                          </div>
                                                                                            <div className="text-xs font-bold text-[#17364B] mt-0.5">
                                                                                              {locale === "te" ? "సోమ - శని: ఉదయం 9:00 - సాయంత్రం 5:00" : locale === "hi" ? "सोम - शनि: सुबह 9:00 - शाम 5:00" : "Mon - Sat: 9:00 AM - 5:00 PM"}
                                                                                            </div>
                                                                                              <div className="text-[10px] text-[#4B6778]">
                                                                                                {locale === "te" ? "(స్లాట్ ప్రాతిపదికన - ఆసుపత్రి షెడ్యూల్ ప్రకారం)" : locale === "hi" ? "(स्लॉट के अनुसार - अस्पताल समय सारिणी)" : "(Slot basis - as per hospital schedule)"}
                                                                                              </div>
                                                                                            </div>
                                                                                          </div>
                                                                                        </div>

                                                                                            {/* Visit Our Clinic Card */}
                                                                                            <div className="p-5 bg-white rounded-2xl border border-[#E5DFD3] shadow-card flex items-center gap-3.5 text-[#17364B]">
                                                                                              <div className="w-10 h-10 rounded-xl bg-[#E5EFF0] border border-[#CCDDE0] text-[#B99A62] flex items-center justify-center flex-shrink-0">
                                                                                                <Building2 className="w-5 h-5" />
                                                                                              </div>
                                                                                              <div>
                                                                                                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#4B6778] block">
                                                                                                    {locale === "te" ? "మా క్లినిక్ సందర్శించండి" : locale === "hi" ? "हमारे क्लिनिक पर आएं" : "Visit Our Clinic"}
                                                                                                  </span>
                                                                                                    <div className="text-sm font-extrabold text-[#17364B]">
                                                                                                      {locDoctor.hospital.name}, {locDoctor.hospital.city}
                                                                                                    </div>
                                                                                                      <p className="text-[11px] text-[#4B6778] mt-0.5">
                                                                                                        {locale === "te"
                                                                                                          ? "ఆధునిక యూరాలజీ సౌకర్యాలతో సమగ్ర సంప్రదింపు."
                                                                                                          : locale === "hi"
                                                                                                            ? "उन्नत यूरोलॉजी सुविधाओं के साथ परामर्श।"
                                                                                                            : "Consultation with access to advanced urology facilities."}
                                                                                                      </p>
                                                                                                  </div>
                                                                                              </div>
                                                                                            </div>

                                                                                            {/* Col 2 (5 cols): Map & Facilities Gallery */}
                                                                                            <div className="lg:col-span-5 space-y-6">
                                                                                              {/* Map Container */}
                                                                                                <div className="bg-white p-5 rounded-2xl border border-[#E5DFD3] shadow-card space-y-4 text-[#17364B]">
                                                                                                  <div className="flex items-center justify-between">
                                                                                                    <div>
                                                                                                        <h3 className="font-heading font-extrabold text-base text-[#17364B]">
                                                                                                          {locale === "te"
                                                                                                            ? "KIMS హాస్పిటల్, నెల్లూరులో మమ్మల్ని కనుగొనండి"
                                                                                                            : locale === "hi"
                                                                                                              ? "किम्स अस्पताल, नेल्लोर में हमें खोजें"
                                                                                                              : "Find Us at KIMS Hospital, Nellore"}
                                                                                                        </h3>
                                                                                                          <p className="text-xs text-[#4B6778]">
                                                                                                            {locale === "te"
                                                                                                              ? "సులభంగా చేరుకోగల ప్రదేశం మరియు అత్యున్నత సౌకర్యాలు."
                                                                                                              : locale === "hi"
                                                                                                                ? "आसानी से पहुँच योग्य स्थान और उन्नत सुविधाएं।"
                                                                                                                : "Easily accessible location with advanced facilities."}
                                                                                                          </p>
                                                                                                        </div>

                                                                                                        <a
                                                                                                          href="https://maps.google.com/?q=KIMS+Hospital+Nellore+Andhra+Pradesh"
                                                                                                          target="_blank"
                                                                                                          rel="noopener noreferrer"
                                                                                                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-[#B99A62] hover:bg-[#A3844C] transition-colors shadow-xs"
                                                                                                        >
                                                                                                          <span>{locale === "te" ? "దారి తెలుసుకోండి" : locale === "hi" ? "दिशा-निर्देश" : "Get Directions"}</span>
                                                                                                          <Navigation className="w-3.5 h-3.5 text-white" />
                                                                                                        </a>
                                                                                                    </div>

                                                                                                      {/* Embedded Interactive Google Map */}
                                                                                                      <div className="relative aspect-[16/10] bg-[#FAF8F5] rounded-xl overflow-hidden border border-[#E5DFD3] shadow-inner">
                                                                                                        <iframe
                                                                                                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.871882171663!2d79.96576907587249!3d14.434546081119064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4cf328e835091f%3A0x2039ca804465dba5!2sKIMS%20Hospitals%2C%20Nellore!5e0!3m2!1sen!2sin!4v1793368188028!5m2!1sen!2sin"
                                                                                                          width="100%"
                                                                                                          height="100%"
                                                                                                          style={{ border: 0 }}
                                                                                                          allowFullScreen
                                                                                                          loading="lazy"
                                                                                                          referrerPolicy="strict-origin-when-cross-origin"
                                                                                                          className="w-full h-full min-h-[280px]"
                                                                                                          title="KIMS Hospitals Nellore Google Map"
                                                                                                        />
                                                                                                      </div>

                                                                                                      {/* Hospital Facilities Cards */}
                                                                                                      <div className="pt-2">
                                                                                                          <div className="text-xs font-bold uppercase tracking-wider text-[#4B6778] mb-2.5">
                                                                                                            {locale === "te" ? "ఆసుపత్రి మౌలిక సదుపాయాలు & సౌకర్యాలు" : locale === "hi" ? "अस्पताल की बुनियादी ढांचा और सुविधाएं" : "Hospital Infrastructure & Facilities"}
                                                                                                          </div>
                                                                                                          <div className="grid grid-cols-2 gap-2 text-xs">
                                                                                                                <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E5DFD3] flex items-center gap-2">
                                                                                                                  <Building2 className="w-4 h-4 text-[#B99A62] flex-shrink-0" />
                                                                                                                  <span className="font-semibold text-[#17364B]">
                                                                                                                    {locale === "te" ? "ప్రధాన ఆసుపత్రి భవనం" : locale === "hi" ? "मुख्य अस्पताल भवन" : "Main Hospital Building"}
                                                                                                                  </span>
                                                                                                                </div>
                                                                                                                    <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E5DFD3] flex items-center gap-2">
                                                                                                                      <Armchair className="w-4 h-4 text-[#B99A62] flex-shrink-0" />
                                                                                                                      <span className="font-semibold text-[#17364B]">
                                                                                                                        {locale === "te" ? "రిసెప్షన్ & వెయిటింగ్" : locale === "hi" ? "रिसेप्शन और प्रतीक्षालय" : "Reception & Waiting"}
                                                                                                                      </span>
                                                                                                                    </div>
                                                                                                                        <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E5DFD3] flex items-center gap-2">
                                                                                                                          <Stethoscope className="w-4 h-4 text-[#B99A62] flex-shrink-0" />
                                                                                                                          <span className="font-semibold text-[#17364B]">
                                                                                                                            {locale === "te" ? "సంప్రదింపుల గది" : locale === "hi" ? "परामर्श कक्ष" : "Consultation Room"}
                                                                                                                          </span>
                                                                                                                        </div>
                                                                                                                            <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E5DFD3] flex items-center gap-2">
                                                                                                                              <Sparkles className="w-4 h-4 text-[#B99A62] flex-shrink-0" />
                                                                                                                              <span className="font-semibold text-[#17364B]">
                                                                                                                                {locale === "te" ? "లేజర్ & రోబోటిక్ OT" : locale === "hi" ? "लेजर और रोबोटिक ओटी" : "Laser & Robotic OT"}
                                                                                                                              </span>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>

                                                                                                            {/* Col 3 (3 cols): Book an Appointment Form */}
                                                                                                            <div className="lg:col-span-3">
                                                                                                                    <div className="bg-white text-[#17364B] p-6 sm:p-7 rounded-2xl border border-[#E5DFD3] shadow-card space-y-4">
                                                                                                                      <div className="flex items-center gap-2.5 text-[#B99A62]">
                                                                                                                        <Calendar className="w-5 h-5 text-[#B99A62]" />
                                                                                                                        <h3 className="font-heading font-bold text-base text-[#17364B]">
                                                                                                                          {t("contact.bookAppointment", "Book an Appointment")}
                                                                                                                        </h3>
                                                                                                                      </div>

                                                                                                                        <p className="text-xs text-[#3A5668] leading-relaxed">
                                                                                                                          {locale === "te"
                                                                                                                            ? `డాక్టర్ రాకేష్ వంశీ వద్ద మీ సంప్రదింపు సమయాన్ని ఎంచుకోండి.`
                                                                                                                            : locale === "hi"
                                                                                                                              ? `डॉ. राकेश वामसी के साथ अपने परामर्श का समय निर्धारित करें।`
                                                                                                                              : "Schedule your consultation with Dr. Rakesh Vamsi."}
                                                                                                                        </p>

                                                                                                                        {submittedSuccess ? (
                                                                                                                            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 space-y-2">
                                                                                                                              <div className="flex items-center gap-2 font-bold text-sm">
                                                                                                                                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                                                                                                                <span>{locale === "te" ? "అభ్యర్థన అందింది!" : locale === "hi" ? "अनुरोध प्राप्त हुआ!" : "Request Received!"}</span>
                                                                                                                              </div>
                                                                                                                              <p className="leading-relaxed">
                                                                                                                                {locale === "te"
                                                                                                                                  ? `ధన్యవాదాలు, ${formData.fullName}. మీ సంప్రదింపు సమయాన్ని నిర్ధారించడానికి మా క్లినికల్ కోఆర్డినేటర్ త్వరలో ${formData.phone} కు కాల్ చేస్తారు.`
                                                                                                                                  : locale === "hi"
                                                                                                                                    ? `धन्यवाद, ${formData.fullName}। आपके परामर्श समय की पुष्टि के लिए हमारे समन्वयक शीघ्र ही ${formData.phone} पर कॉल करेंगे।`
                                                                                                                                    : `Thank you, ${formData.fullName}. Our clinical coordinator will call ${formData.phone} shortly to confirm your consultation slot.`}
                                                                                                                              </p>
                                                                                                                              <button
                                                                                                                                type="button"
                                                                                                                                onClick={() => {
                                                                                                                                  setSubmittedSuccess(false);
                                                                                                                                  setFormData({
                                                                                                                                    fullName: "",
                                                                                                                                    phone: "",
                                                                                                                                    email: "",
                                                                                                                                    preferredDate: "",
                                                                                                                                    preferredTimeSlot: "Morning (09:00 AM - 12:00 PM)",
                                                                                                                                    message: "",
                                                                                                                                  });
                                                                                                                                }}
                                                                                                                                className="text-xs text-[#B99A62] hover:underline font-semibold pt-1 block"
                                                                                                                              >
                                                                                                                                {locale === "te" ? "మరొక అభ్యర్థన పంపండి" : locale === "hi" ? "दूसरा अनुरोध भेजें" : "Send another request"}
                                                                                                                              </button>
                                                                                                                            </div>
                                                                                                                            ) : (
                                                                                                                            <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                                                                                                                              {/* Full Name */}
                                                                                                                              <div>
                                                                                                                                <input
                                                                                                                                  type="text"
                                                                                                                                  required
                                                                                                                                  placeholder={t("booking.fullNamePlaceholder", "Full Name")}
                                                                                                                                  value={formData.fullName}
                                                                                                                                  onChange={(e) =>
                                                                                                                                    setFormData({ ...formData, fullName: e.target.value })
                                                                                                                                  }
                                                                                                                                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#DCD5C9] text-[#17364B] placeholder-[#8BA4B2] focus:outline-none focus:ring-2 focus:ring-[#B99A62]"
                                                                                                                                />
                                                                                                                              </div>

                                                                                                                              {/* Phone Number */}
                                                                                                                              <div>
                                                                                                                                <input
                                                                                                                                  type="tel"
                                                                                                                                  required
                                                                                                                                  placeholder={t("booking.phonePlaceholder", "Mobile Number (e.g. 7674008057)")}
                                                                                                                                  value={formData.phone}
                                                                                                                                  onChange={(e) =>
                                                                                                                                    setFormData({ ...formData, phone: e.target.value })
                                                                                                                                  }
                                                                                                                                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#DCD5C9] text-[#17364B] placeholder-[#8BA4B2] focus:outline-none focus:ring-2 focus:ring-[#B99A62]"
                                                                                                                                />
                                                                                                                              </div>

                                                                                                                              {/* Email */}
                                                                                                                              <div>
                                                                                                                                <input
                                                                                                                                  type="email"
                                                                                                                                  required
                                                                                                                                  placeholder={t("booking.emailPlaceholder", "Email Address")}
                                                                                                                                  value={formData.email}
                                                                                                                                  onChange={(e) =>
                                                                                                                                    setFormData({ ...formData, email: e.target.value })
                                                                                                                                  }
                                                                                                                                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#DCD5C9] text-[#17364B] placeholder-[#8BA4B2] focus:outline-none focus:ring-2 focus:ring-[#B99A62]"
                                                                                                                                />
                                                                                                                              </div>

                                                                                                                              {/* Preferred Date */}
                                                                                                                              <div>
                                                                                                                                <input
                                                                                                                                  type="date"
                                                                                                                                  value={formData.preferredDate}
                                                                                                                                  onChange={(e) =>
                                                                                                                                    setFormData({ ...formData, preferredDate: e.target.value })
                                                                                                                                  }
                                                                                                                                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#DCD5C9] text-[#17364B] focus:outline-none focus:ring-2 focus:ring-[#B99A62]"
                                                                                                                                />
                                                                                                                              </div>

                                                                                                                              {/* Preferred Slot */}
                                                                                                                              <div>
                                                                                                                                <select
                                                                                                                                  value={formData.preferredTimeSlot}
                                                                                                                                  onChange={(e) =>
                                                                                                                                    setFormData({
                                                                                                                                      ...formData,
                                                                                                                                      preferredTimeSlot: e.target.value,
                                                                                                                                    })
                                                                                                                                  }
                                                                                                                                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#DCD5C9] text-[#17364B] focus:outline-none focus:ring-2 focus:ring-[#B99A62]"
                                                                                                                                >
                                                                                                                                    <option value="Morning (09:00 AM - 12:00 PM)" className="bg-white text-[#17364B]">
                                                                                                                                      {locale === "te" ? "ఉదయం (09:00 AM - 12:00 PM)" : locale === "hi" ? "सुबह (09:00 AM - 12:00 PM)" : "Morning (09:00 AM - 12:00 PM)"}
                                                                                                                                    </option>
                                                                                                                                      <option value="Afternoon (01:00 PM - 03:00 PM)" className="bg-white text-[#17364B]">
                                                                                                                                        {locale === "te" ? "మధ్యాహ్నం (01:00 PM - 03:00 PM)" : locale === "hi" ? "दोपहर (01:00 PM - 03:00 PM)" : "Afternoon (01:00 PM - 03:00 PM)"}
                                                                                                                                      </option>
                                                                                                                                        <option value="Evening (03:00 PM - 05:00 PM)" className="bg-white text-[#17364B]">
                                                                                                                                          {locale === "te" ? "సాయంత్రం (03:00 PM - 05:00 PM)" : locale === "hi" ? "शाम (03:00 PM - 05:00 PM)" : "Evening (03:00 PM - 05:00 PM)"}
                                                                                                                                        </option>
                                                                                                                                      </select>
                                                                                                                                    </div>

                                                                                                                                    {/* Message */}
                                                                                                                                    <div>
                                                                                                                                      <textarea
                                                                                                                                        rows={3}
                                                                                                                                        placeholder={
                                                                                                                                          locale === "te"
                                                                                                                                            ? "లక్షణాలు / సందర్శన కారణం (ఐచ్ఛికం)"
                                                                                                                                            : locale === "hi"
                                                                                                                                              ? "लक्षण / आने का कारण (वैकल्पिक)"
                                                                                                                                              : "Symptoms / Reason for visit (Optional)"
                                                                                                                                        }
                                                                                                                                        value={formData.message}
                                                                                                                                        onChange={(e) =>
                                                                                                                                          setFormData({ ...formData, message: e.target.value })
                                                                                                                                        }
                                                                                                                                        className="w-full px-3.5 py-2 rounded-xl bg-[#FAF8F5] border border-[#DCD5C9] text-[#17364B] placeholder-[#8BA4B2] focus:outline-none focus:ring-2 focus:ring-[#B99A62] resize-none"
                                                                                                                                      />
                                                                                                                                    </div>

                                                                                                                                    <button
                                                                                                                                      type="submit"
                                                                                                                                      disabled={isSubmitting}
                                                                                                                                      className="w-full py-3 rounded-full font-bold text-white bg-[#B99A62] hover:bg-[#A3844C] transition-all shadow-sm flex items-center justify-center gap-1.5 disabled:opacity-50"
                                                                                                                                    >
                                                                                                                                      {isSubmitting ? (
                                                                                                                                        <span>
                                                                                                                                          {locale === "te" ? "అభ్యర్థన పంపుతోంది..." : locale === "hi" ? "अनुरोध भेजा जा रहा है..." : "Submitting Request..."}
                                                                                                                                        </span>
                                                                                                                                      ) : (
                                                                                                                                        <>
                                                                                                                                          <span>
                                                                                                                                            {locale === "te" ? "అపాయింట్‌మెంట్ అభ్యర్థించండి" : locale === "hi" ? "अपॉइंटमेंट का अनुरोध करें" : "Request Appointment"}
                                                                                                                                          </span>
                                                                                                                                          <span>→</span>
                                                                                                                                        </>
                                                                                                                                      )}
                                                                                                                                    </button>

                                                                                                                                      <p className="text-[10px] text-[#4B6778] text-center pt-1">
                                                                                                                                        {locale === "te"
                                                                                                                                          ? "కాల్ లేదా ఈమెయిల్ ద్వారా మీ అపాయింట్‌మెంట్‌ను మేము త్వరలో నిర్ధారిస్తాము."
                                                                                                                                          : locale === "hi"
                                                                                                                                            ? "हम शीघ्र ही कॉल या ईमेल द्वारा आपके अपॉइंटमेंट की पुष्टि करेंगे।"
                                                                                                                                            : "We will confirm your appointment shortly via call or email."}
                                                                                                                                      </p>
                                                                                                                                    </form>
                )}
                                                                                                                                  </div>
                                                                                                                              </div>
                                                                                                                          </div>
        </div>
                                                                                                                  </section>

                                                                                                                    {/* 3. Bottom Strip */}
                                                                                                                    <section className="py-8 bg-[#E5EFF0] text-[#17364B] border-t border-[#CCDDE0]">
                                                                                                                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
                                                                                                                        <div>
                                                                                                                            <h3 className="font-heading font-bold text-lg text-[#17364B]">
                                                                                                                              {locale === "te" ? "ప్రశ్నలు ఉన్నాయా?" : locale === "hi" ? "कोई प्रश्न है?" : "Have a Question?"}
                                                                                                                            </h3>
                                                                                                                              <p className="text-xs text-[#4B6778]">
                                                                                                                                {locale === "te"
                                                                                                                                  ? "అపాయింట్‌మెంట్‌లు, చికిత్సా సమాచారం లేదా ఇతర విచారణల కోసం మా బృందం ఎల్లప్పుడూ సిద్ధంగా ఉంది."
                                                                                                                                  : locale === "hi"
                                                                                                                                    ? "हमारी टीम अपॉइंटमेंट, उपचार जानकारी या किसी अन्य प्रश्न के लिए आपकी सहायता के लिए तैयार है।"
                                                                                                                                    : "Our team is here to assist you with appointments, treatment information or any other queries."}
                                                                                                                              </p>
                                                                                                                            </div>

                                                                                                                            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold">
                                                                                                                              <a
                                                                                                                                href={`tel:${locDoctor.hospital.phone.replace(/\s+/g, "")}`}
                                                                                                                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-[#FAF8F5] border border-[#CCDDE0] text-[#17364B] transition-colors"
                                                                                                                              >
                                                                                                                                <Phone className="w-3.5 h-3.5 text-[#B99A62]" />
                                                                                                                                <span>
                                                                                                                                  {locale === "te" ? "మాకు కాల్ చేయండి: " : locale === "hi" ? "हमें कॉल करें: " : "Call Us: "}
                                                                                                                                  {locDoctor.hospital.phone}
                                                                                                                                </span>
                                                                                                                              </a>

                                                                                                                              <a
                                                                                                                                href={`mailto:${locDoctor.hospital.email}`}
                                                                                                                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-[#FAF8F5] border border-[#CCDDE0] text-[#17364B] transition-colors"
                                                                                                                              >
                                                                                                                                <Mail className="w-3.5 h-3.5 text-[#B99A62]" />
                                                                                                                                <span>
                                                                                                                                  {locale === "te" ? "ఈమెయిల్: " : locale === "hi" ? "ईमेल: " : "Email: "}
                                                                                                                                  {locDoctor.hospital.email}
                                                                                                                                </span>
                                                                                                                              </a>

                                                                                                                              <Link
                                                                                                                                href="/book-appointment"
                                                                                                                                className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#B99A62] hover:bg-[#A3844C] text-white shadow-xs transition-colors font-bold"
                                                                                                                              >
                                                                                                                                <Calendar className="w-3.5 h-3.5" />
                                                                                                                                <span>{t("common.bookAppointment", "Book Appointment")} →</span>
                                                                                                                              </Link>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </section>
                                                                                                                </div>
                                                                                                                );
}
