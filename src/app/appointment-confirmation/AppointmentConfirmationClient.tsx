"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Printer,
  Home,
  ShieldCheck,
  FileText,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import confetti from "canvas-confetti";
import { doctorData } from "@/data/doctorData";
import { getLocalizedDoctorData } from "@/data/localizedDoctor";
import { useLanguage } from "@/context/LanguageContext";

export default function AppointmentConfirmationClient() {
  const { locale, t } = useLanguage();
  const locDoctor = getLocalizedDoctorData(locale);
  const searchParams = useSearchParams();

  const reference = searchParams.get("ref") || "URO-2026-X892";
  const patientName = searchParams.get("name") || (locale === "te" ? "గౌరవనీయ రోగి" : locale === "hi" ? "आदरणीय रोगी" : "Valued Patient");
  const phone = searchParams.get("phone") || "+91 76740 08057";
  const consultationType = searchParams.get("type") || "in-person";
  const department = searchParams.get("dept") || "Urology & Andrology";
  const appointmentDate = searchParams.get("date") || "Scheduled Date";
  const timeSlot = searchParams.get("time") || "09:30 AM - 10:00 AM";

  useEffect(() => {
    // Fire celebratory confetti on mount
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#B99A62", "#17364B", "#E5EFF0", "#10B981"],
      });
    } catch {
      // Ignored if canvas-confetti is unavailable
    }
  }, []);

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    `Consultation with Dr. Rakesh Vamsi (${department})`
  )}&dates=${appointmentDate.replace(/-/g, "")}T040000Z/${appointmentDate.replace(
    /-/g,
    ""
  )}T050000Z&details=${encodeURIComponent(
    `Appointment Reference: ${reference}\nDoctor: Dr. Rakesh Vamsi\nHospital: KIMS Hospital, Nellore\nConsultation Mode: ${consultationType}`
  )}&location=${encodeURIComponent(locDoctor.hospital.address)}`;

  return (
            <div className="bg-[#F6F3EC] text-[#17364B] min-h-screen py-12 sm:py-16">
              <div className="max-w-3xl mx-auto px-4 sm:px-6">
                {/* Top Success Badge */}
                <div className="text-center space-y-3 mb-8">
                  <div className="w-16 h-16 rounded-full bg-[#E5EFF0] border border-[#CCDDE0] text-[#B99A62] flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#17364B]">
                    {locale === "te"
                      ? "అపాయింట్‌మెంట్ అభ్యర్థన నిర్ధారించబడింది!"
                      : locale === "hi"
                        ? "अपॉइंटमेंट अनुरोध की पुष्टि हो गई!"
                        : "Appointment Request Confirmed!"}
                  </h1>
                  <p className="text-xs sm:text-sm text-[#3A5668] max-w-lg mx-auto">
                    {locale === "te"
                      ? "మీ అపాయింట్‌మెంట్ అభ్యర్థన విజయవంతంగా నమోదైంది. KIMS హాస్పిటల్ నెల్లూరు క్లినికల్ కోఆర్డినేషన్ డెస్క్ SMS మరియు ఫోన్ ద్వారా మీ స్లాట్‌ను నిర్ధారిస్తుంది."
                      : locale === "hi"
                        ? "आपका अपॉइंटमेंट अनुरोध सफलतापूर्वक दर्ज हो गया है। किम्स अस्पताल नेल्लोर का समन्वय डेस्क एसएमएस और फोन द्वारा आपके समय की पुष्टि करेगा।"
                        : "Your appointment request has been successfully generated. Our clinical coordination desk at KIMS Hospital Nellore will confirm your slot via SMS and phone."}
                  </p>
                </div>

                {/* Medical Appointment Pass / Ticket Card */}
                <div className="bg-white rounded-3xl overflow-hidden border border-[#E5DFD3] shadow-card print:shadow-none print:border-none">
                  {/* Ticket Header */}
                  <div className="bg-[#FAF8F5] text-[#17364B] p-6 sm:p-8 flex items-center justify-between border-b border-[#E5DFD3]">
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 bg-white rounded-lg p-1 border border-[#E5DFD3] flex-shrink-0">
                        <Image
                          src="/images/logo.png"
                          alt="Urologist and Andrologist"
                          fill
                          className="object-contain"
                        />
                      </div>
                    <div>
                      <span className="font-heading font-extrabold text-base text-[#17364B] tracking-tight">
                        Urologist & <span className="text-[#B99A62]">Andrologist</span>
                      </span>
                      <span className="text-[10px] uppercase font-bold text-[#4B6778] block">
                        {locDoctor.hospital.name}, {locDoctor.hospital.city}
                      </span>
                    </div>
                  </div>

                      <div className="text-right">
                        <span className="text-[10px] uppercase tracking-wider text-[#4B6778] font-bold block">
                          {locale === "te" ? "రిఫరెన్స్ ఐడీ" : locale === "hi" ? "संदर्भ आईडी" : "Reference ID"}
                        </span>
                        <span className="font-mono font-extrabold text-[#B99A62] text-base sm:text-lg">
                          {reference}
                        </span>
                      </div>
                    </div>

                  {/* Ticket Body Grid */}
                  <div className="p-6 sm:p-8 space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-6 border-b border-[#E5DFD3]">
                      {/* Patient */}
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#4B6778] block">
                          {locale === "te" ? "రోగి పేరు" : locale === "hi" ? "रोगी का नाम" : "Patient Name"}
                        </span>
                        <span className="font-extrabold text-base text-[#17364B] block mt-0.5">
                          {patientName}
                        </span>
                        <span className="text-xs text-[#4B6778]">{phone}</span>
                      </div>

                          {/* Doctor */}
                          <div>
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#4B6778] block">
                              {locale === "te" ? "కన్సల్టెంట్ వైద్యులు" : locale === "hi" ? "कंसल्टेंट डॉक्टर" : "Consultant Doctor"}
                            </span>
                            <span className="font-extrabold text-base text-[#17364B] block mt-0.5">
                              {locDoctor.fullName}
                            </span>
                            <span className="text-xs text-[#B99A62] font-semibold block">
                              {locDoctor.designation}
                            </span>
                          </div>

                          {/* Date & Time */}
                          <div className="flex items-start gap-3">
                            <div className="w-9 h-9 rounded-xl bg-[#E5EFF0] border border-[#CCDDE0] text-[#B99A62] flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Calendar className="w-5 h-5" />
                            </div>
                            <div>
                              <span className="text-[11px] font-bold uppercase tracking-wider text-[#4B6778] block">
                                {locale === "te" ? "సంప్రదింపు షెడ్యూల్" : locale === "hi" ? "परामर्श अनुसूची" : "Consultation Schedule"}
                              </span>
                              <span className="font-bold text-sm text-[#17364B] block mt-0.5">
                                {appointmentDate}
                              </span>
                              <span className="text-xs text-[#3A5668]">{timeSlot}</span>
                            </div>
                          </div>

                          {/* Consultation Type & Dept */}
                          <div className="flex items-start gap-3">
                            <div className="w-9 h-9 rounded-xl bg-[#E5EFF0] border border-[#CCDDE0] text-[#B99A62] flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Clock className="w-5 h-5" />
                            </div>
                            <div>
                              <span className="text-[11px] font-bold uppercase tracking-wider text-[#4B6778] block">
                                {locale === "te" ? "విధానం & కారణం" : locale === "hi" ? "प्रकार और कारण" : "Type & Reason"}
                              </span>
                              <span className="font-bold text-sm text-[#17364B] capitalize block mt-0.5">
                                {consultationType} {locale === "te" ? "సంప్రదింపు" : locale === "hi" ? "परामर्श" : "Consultation"}
                              </span>
                              <span className="text-xs text-[#B99A62] font-semibold">
                                {department}
                              </span>
                            </div>
                          </div>
                        </div>

                      {/* Hospital Location Box */}
                      <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD3] flex items-start gap-3.5">
                        <MapPin className="w-5 h-5 text-[#B99A62] flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-xs font-bold text-[#17364B] block">
                            {locale === "te" ? "సంప్రదింపు ప్రదేశం: " : locale === "hi" ? "परामर्श स्थल: " : "Consultation Venue: "}
                            {locDoctor.hospital.name}, {locDoctor.hospital.city}
                          </span>
                          <span className="text-xs text-[#3A5668] block mt-0.5">
                            {locDoctor.hospital.address}
                          </span>
                          <a
                            href="https://maps.google.com/?q=KIMS+Hospital+Nellore+Andhra+Pradesh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] font-bold text-[#B99A62] hover:underline mt-1.5"
                          >
                            <span>{locale === "te" ? "గూగుల్ మ్యాప్స్‌లో తెరవండి" : locale === "hi" ? "गूगल मैप्स में खोलें" : "Open in Google Maps"}</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>

                      {/* What to Bring Preparation Guide */}
                      <div className="space-y-2 text-xs text-[#3A5668]">
                        <span className="font-bold text-[#17364B] block uppercase tracking-wider text-[11px]">
                          {locale === "te" ? "మీ సందర్శన కోసం ముఖ్యమైన గమనిక:" : locale === "hi" ? "अपनी यात्रा के लिए कृपया ध्यान दें:" : "Please Note for Your Visit:"}
                        </span>
                        <ul className="space-y-1 pl-4 list-disc text-[#3A5668]">
                          <li>
                            {locale === "te"
                              ? "KIMS ఆసుపత్రి రిసెప్షన్ వద్ద రిజిస్ట్రేషన్ కోసం మీ నిర్ణీత సమయానికి 15 నిమిషాల ముందుగా చేరుకోండి."
                              : locale === "hi"
                                ? "किम्स अस्पताल रिसेप्शन पर पंजीकरण के लिए अपने निर्धारित समय से 15 मिनट पहले पहुंचें।"
                                : "Please arrive 15 minutes before your scheduled slot for registration at KIMS Hospital reception."}
                          </li>
                          <li>
                            {locale === "te"
                              ? "గత మెడికల్ ప్రిస్క్రిప్షన్లు, అల్ట్రాసౌండ్ నివేదికలు మరియు రక్త పరీక్ష ఫలితాలు ఉంటే వెంట తీసుకురండి."
                              : locale === "hi"
                                ? "उपलब्ध होने पर पिछले मेडिकल पर्चे, अल्ट्रासाउंड रिपोर्ट और रक्त परीक्षण परिणाम साथ लाएं।"
                                : "Bring past medical prescriptions, ultrasound reports, and blood test results if available."}
                          </li>
                          <li>
                            {locale === "te"
                              ? "క్యాష్‌లెస్ డెస్క్ అనుమతుల కోసం మీ ప్రభుత్వ గుర్తింపు కార్డు మరియు ఆరోగ్య బీమా కార్డును వెంట ఉంచుకోండి."
                              : locale === "hi"
                                ? "कैशलेस डेस्क क्लीयरेंस के लिए अपना सरकारी फोटो पहचान पत्र और स्वास्थ्य बीमा कार्ड साथ रखें।"
                                : "Carry your government photo ID and health insurance card for cashless desk clearance."}
                          </li>
                        </ul>
                      </div>
                    </div>

                  {/* Action Buttons Footer */}
                  <div className="bg-[#FAF8F5] p-6 border-t border-[#E5DFD3] flex flex-wrap items-center justify-between gap-4 print:hidden">
                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href={googleCalendarUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold text-[#17364B] bg-white border border-[#DCD5C9] hover:bg-[#FAF8F5] shadow-xs transition-colors"
                      >
                        <Calendar className="w-4 h-4 text-[#B99A62]" />
                        <span>{locale === "te" ? "క్యాలెండర్‌కు జోడించండి" : locale === "hi" ? "कैलेंडर में जोड़ें" : "Add to Calendar"}</span>
                      </a>

                          <button
                            type="button"
                            onClick={handlePrint}
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold text-[#17364B] bg-white border border-[#DCD5C9] hover:bg-[#FAF8F5] shadow-xs transition-colors"
                          >
                            <Printer className="w-4 h-4 text-[#B99A62]" />
                            <span>{locale === "te" ? "ప్రింట్ తీసుకోండి" : locale === "hi" ? "पुष्टि प्रिंट करें" : "Print Confirmation"}</span>
                          </button>
                        </div>

              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-white bg-[#B99A62] hover:bg-[#A3844C] shadow-sm transition-all"
              >
                <Home className="w-4 h-4" />
                <span>{locale === "te" ? "హోమ్‌కు తిరిగి వెళ్లండి" : locale === "hi" ? "होम पर वापस जाएं" : "Return to Home"}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      );
}
