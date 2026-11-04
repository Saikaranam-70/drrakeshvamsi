"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Calendar,
  Clock,
  User,
  ShieldCheck,
  CheckCircle2,
  Video,
  Phone,
  Building2,
  Stethoscope,
  MapPin,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  AlertCircle,
  HelpCircle,
  Activity,
  Droplet,
  Users,
  Flame,
  Wrench,
  Sparkles,
} from "lucide-react";
import { doctorData } from "@/data/doctorData";
import { getLocalizedDoctorData } from "@/data/localizedDoctor";
import { useLanguage } from "@/context/LanguageContext";
import { generateAppointmentId } from "@/lib/utils";

interface BookingFormState {
  consultationType: "in-person" | "video" | "phone";
  department: string;
  description: string;
  selectedDate: string; // YYYY-MM-DD
  timeSlot: string;
  fullName: string;
  phone: string;
  email: string;
  age: string;
  gender: "Male" | "Female" | "Other";
}

const DEPARTMENTS_RAW = [
  { id: "kidney-stones", title: "Kidney Stones", teTitle: "కిడ్నీలో రాళ్లు", hiTitle: "किडनी स्टोन", icon: Droplet },
  { id: "prostate-care", title: "Prostate Care", teTitle: "ప్రోస్టేట్ సంరక్షణ", hiTitle: "प्रोस्टेट देखभाल", icon: ShieldCheck },
  { id: "male-infertility", title: "Male Infertility", teTitle: "పురుషుల సంతానలేమి", hiTitle: "पुरुष बांझपन", icon: Users },
  { id: "erectile-dysfunction", title: "Erectile Dysfunction", teTitle: "అంగస్తంభన సమస్యలు", hiTitle: "स्तंभन दोष", icon: Activity },
  { id: "uti", title: "Urinary Tract Infections", teTitle: "మూత్ర మార్గ ఇన్ఫెక్షన్లు (UTI)", hiTitle: "मूत्र मार्ग संक्रमण (UTI)", icon: Flame },
  { id: "robotic-surgery", title: "Robotic / Laparoscopic Surgery", teTitle: "రోబోటిక్ / లాపరోస్కోపిక్ సర్జరీ", hiTitle: "रोबोटिक / लेप्रोस्कोपिक सर्जरी", icon: Sparkles },
  { id: "general-urology", title: "General Urology", teTitle: "జనరల్ యూరాలజీ", hiTitle: "जनरल यूरोलॉजी", icon: Stethoscope },
  { id: "other", title: "Other (Please Specify)", teTitle: "ఇతర సమస్యలు", hiTitle: "अन्य समस्याएं", icon: HelpCircle },
];

const TIME_SLOTS = [
  { slot: "09:30 AM - 10:00 AM", period: "Morning", available: true },
  { slot: "10:30 AM - 11:00 AM", period: "Morning", available: true },
  { slot: "11:30 AM - 12:00 PM", period: "Morning", available: true },
  { slot: "12:00 PM - 12:30 PM", period: "Morning", available: false }, // Demonstrating unavailable slot!
  { slot: "02:00 PM - 02:30 PM", period: "Afternoon", available: true },
  { slot: "03:00 PM - 03:30 PM", period: "Afternoon", available: true },
  { slot: "04:00 PM - 04:30 PM", period: "Evening", available: true },
  { slot: "04:30 PM - 05:00 PM", period: "Evening", available: true },
];

export default function BookingWizard() {
  const router = useRouter();
  const { locale, t } = useLanguage();
  const locDoctor = getLocalizedDoctorData(locale);
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(1);

  // Initialize booking state with sensible defaults
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const defaultDateStr = tomorrow.toISOString().split("T")[0];

  const [formData, setFormData] = useState<BookingFormState>({
    consultationType: "in-person",
    department: "Kidney Stones",
    description: "",
    selectedDate: defaultDateStr,
    timeSlot: "10:30 AM - 11:00 AM",
    fullName: "",
    phone: "",
    email: "",
    age: "",
    gender: "Male",
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getDeptTitle = (dept: typeof DEPARTMENTS_RAW[0]) => {
    if (locale === "te") return dept.teTitle;
    if (locale === "hi") return dept.hiTitle;
    return dept.title;
  };

  // Validation per step
  const validateStep = (step: number): boolean => {
    const errors: { [key: string]: string } = {};

    if (step === 1) {
      if (!formData.department) {
        errors.department = locale === "te" ? "దయచేసి విభాగాన్ని / సంప్రదింపు కారణాన్ని ఎంచుకోండి" : locale === "hi" ? "कृपया विभाग / परामर्श का कारण चुनें" : "Please select a department / reason";
      }
    }

    if (step === 2) {
      if (!formData.selectedDate) {
        errors.selectedDate = locale === "te" ? "దయచేసి అపాయింట్‌మెంట్ తేదీని ఎంచుకోండి" : locale === "hi" ? "कृपया अपॉइंटमेंट की तारीख चुनें" : "Please pick an appointment date";
      }
      if (!formData.timeSlot) {
        errors.timeSlot = locale === "te" ? "దయచేసి సమయ స్లాట్‌ను ఎంచుకోండి" : locale === "hi" ? "कृपया परामर्श का समय चुनें" : "Please choose a consultation time slot";
      }
    }

    if (step === 3) {
      if (!formData.fullName.trim() || formData.fullName.length < 2) {
        errors.fullName = locale === "te" ? "దయచేసి రోగి పూర్తి పేరు నమోదు చేయండి" : locale === "hi" ? "कृपया रोगी का पूरा नाम दर्ज करें" : "Please enter patient's full name";
      }
      if (!formData.phone.trim() || formData.phone.length < 10) {
        errors.phone = locale === "te" ? "దయచేసి సరైన 10 అంకెల మొబైల్ నంబర్ నమోదు చేయండి" : locale === "hi" ? "कृपया 10 अंकों का वैध मोबाइल नंबर दर्ज करें" : "Please enter a valid 10-digit mobile number";
      }
      if (!formData.age || parseInt(formData.age, 10) < 1 || parseInt(formData.age, 10) > 120) {
        errors.age = locale === "te" ? "దయచేసి రోగి సరైన వయస్సు నమోదు చేయండి" : locale === "hi" ? "कृपया रोगी की सही आयु दर्ज करें" : "Please enter a valid patient age";
      }
      if (!formData.gender) {
        errors.gender = locale === "te" ? "దయచేసి లింగాన్ని ఎంచుకోండి" : locale === "hi" ? "कृपया लिंग का चयन करें" : "Please select gender";
      }
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4) as 1 | 2 | 3 | 4);
      window.scrollTo({ top: 380, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1) as 1 | 2 | 3 | 4);
    window.scrollTo({ top: 380, behavior: "smooth" });
  };

  const handleFinalConfirm = async () => {
    setIsSubmitting(true);
    const appointmentReference = generateAppointmentId();

    try {
      // POST to backend API handler
      await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          appointmentReference,
        }),
      });
    } catch {
      // Continue to confirmation
    }

    // Pass data via query parameters to confirmation page
    const query = new URLSearchParams({
      ref: appointmentReference,
      name: formData.fullName,
      phone: formData.phone,
      type: formData.consultationType,
      dept: formData.department,
      date: formData.selectedDate,
      time: formData.timeSlot,
    }).toString();

    router.push(`/appointment-confirmation?${query}`);
  };

  const badgeLabels = {
    secure: locale === "te" ? { top: "సులువైన & సురక్షిత", bottom: "బుకింగ్" } : locale === "hi" ? { top: "आसान व सुरक्षित", bottom: "बुकिंग" } : { top: "Easy & Secure", bottom: "Booking" },
    slots: locale === "te" ? { top: "అనేక సమయ స్లాట్లు", bottom: "అందుబాటులో ఉన్నాయి" } : locale === "hi" ? { top: "कई स्लॉट", bottom: "उपलब्ध हैं" } : { top: "Multiple", bottom: "Time Slots Available" },
    confirm: locale === "te" ? { top: "త్వరిత", bottom: "నిర్ధారణ" } : locale === "hi" ? { top: "त्वरित", bottom: "पुष्टि" } : { top: "Quick", bottom: "Confirmation" },
    care: locale === "te" ? { top: "వ్యక్తిగత", bottom: "సంరక్షణ" } : locale === "hi" ? { top: "व्यक्तिगत", bottom: "देखभाल" } : { top: "Personalized", bottom: "Care" },
  };

  return (
    <div className="bg-[#F6F3EC] text-[#17364B] min-h-screen pb-20">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-[#F6F3EC] text-[#17364B] pt-10 pb-16 lg:pt-14 lg:pb-20 border-b border-[#E5DFD3]">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#E5EFF0]/50 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Headline */}
            <div className="lg:col-span-5 space-y-4 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E5EFF0] text-[#17364B] border border-[#CCDDE0]">
                <Calendar className="w-3.5 h-3.5 text-[#B99A62]" />
                <span>{t("booking.badge", "BOOK APPOINTMENT")}</span>
              </div>

              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#17364B] tracking-tight leading-tight">
                {locale === "te" ? (
                  <>
                    మీ సంప్రదింపును <br />
                    <span className="text-[#B99A62]">షెడ్యూల్ చేయండి</span>
                  </>
                ) : locale === "hi" ? (
                  <>
                    अपना परामर्श <br />
                    <span className="text-[#B99A62]">शेड्यूल करें</span>
                  </>
                ) : (
                  <>
                    Schedule Your <br />
                    <span className="text-[#B99A62]">Consultation</span>
                  </>
                )}
              </h1>

              <p className="text-xs sm:text-sm text-[#3A5668] leading-relaxed max-w-md">
                {t("booking.heroSubtitle", "Take the first step towards better health. Book an appointment with Dr. Rakesh Vamsi for expert urology and andrology care.")}
              </p>

              {/* 4 Feature Badges */}
              <div className="grid grid-cols-2 gap-2.5 pt-2">
                <div className="p-2 rounded-xl bg-white border border-[#E5DFD3] shadow-xs text-left">
                  <div className="text-[#B99A62] font-bold text-xs">{badgeLabels.secure.top}</div>
                  <div className="text-[#17364B] text-[11px]">{badgeLabels.secure.bottom}</div>
                </div>
                <div className="p-2 rounded-xl bg-white border border-[#E5DFD3] shadow-xs text-left">
                  <div className="text-[#B99A62] font-bold text-xs">{badgeLabels.slots.top}</div>
                  <div className="text-[#17364B] text-[11px]">{badgeLabels.slots.bottom}</div>
                </div>
                <div className="p-2 rounded-xl bg-white border border-[#E5DFD3] shadow-xs text-left">
                  <div className="text-[#B99A62] font-bold text-xs">{badgeLabels.confirm.top}</div>
                  <div className="text-[#17364B] text-[11px]">{badgeLabels.confirm.bottom}</div>
                </div>
                <div className="p-2 rounded-xl bg-white border border-[#E5DFD3] shadow-xs text-left">
                  <div className="text-[#B99A62] font-bold text-xs">{badgeLabels.care.top}</div>
                  <div className="text-[#17364B] text-[11px]">{badgeLabels.care.bottom}</div>
                </div>
              </div>
            </div>

            {/* Middle: Doctor in Circular Halo Frame */}
            <div className="lg:col-span-4 flex justify-center items-center">
              <div className="relative w-60 h-72 sm:w-72 sm:h-88">
                <div className="absolute inset-0 rounded-full bg-[#E5EFF0]/60 blur-xl" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[#B99A62]/40 bg-gradient-to-b from-[#FAF8F5] to-[#E5EFF0] flex items-end justify-center shadow-card">
                  <Image
                    src="/images/dr-rakesh-vamsi.png"
                    alt={locDoctor.fullName}
                    fill
                    className="object-contain object-bottom pt-4"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Right: Quote Card with Signature */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-6 shadow-card text-[#17364B] space-y-4 border border-[#E5DFD3]">
                <span className="text-4xl font-serif text-[#B99A62] leading-none block">
                  “
                </span>
                <p className="text-xs sm:text-sm font-medium text-[#3A5668] leading-relaxed">
                  {t("booking.doctorQuote", "Your health is important. We are here to provide expert care with compassion and advanced treatment options.")}
                </p>
                <div className="pt-2 border-t border-[#E5DFD3] text-left">
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

      {/* 2. 4-Steps Progress Bar */}
      <div className="bg-[#F6F3EC]/95 border-b border-[#E5DFD3] py-4 shadow-xs sticky top-[69px] z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between max-w-3xl mx-auto">
            {[
              { num: 1, title: t("booking.step1", "Select Details") },
              { num: 2, title: t("booking.step2", "Choose Date & Time") },
              { num: 3, title: t("booking.step3", "Patient Information") },
              { num: 4, title: t("booking.step4", "Review & Confirm") },
            ].map((step, idx) => {
              const isPassed = currentStep > step.num;
              const isCurrent = currentStep === step.num;
              return (
                <React.Fragment key={step.num}>
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all ${
                        isCurrent
                          ? "bg-[#B99A62] text-white shadow-sm ring-4 ring-[#B99A62]/20"
                          : isPassed
                          ? "bg-[#17364B] text-white"
                          : "bg-white border border-[#DCD5C9] text-[#4B6778]"
                      }`}
                    >
                      {isPassed ? <CheckCircle2 className="w-4 h-4" /> : step.num}
                    </div>
                    <span
                      className={`hidden sm:inline text-xs font-bold ${
                        isCurrent
                          ? "text-[#17364B]"
                          : isPassed
                          ? "text-[#3A5668]"
                          : "text-[#8BA4B2]"
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>

                  {idx < 3 && (
                    <div
                      className={`flex-1 h-0.5 mx-2 hidden sm:block ${
                        currentStep > idx + 1 ? "bg-[#17364B]" : "bg-[#E5DFD3]"
                      }`}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. Wizard Content & Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Wizard Form Column (8 cols) */}
          <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-2xl border border-[#E5DFD3] shadow-card text-[#17364B]">
            {/* STEP 1: CONSULTATION DETAILS */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-heading font-extrabold text-xl text-[#17364B]">
                    {locale === "te" ? "1. సంప్రదింపు వివరాలను ఎంచుకోండి" : locale === "hi" ? "1. परामर्श विवरण चुनें" : "1. Select Consultation Details"}
                  </h2>
                  <p className="text-xs text-[#4B6778] mt-0.5">
                    {locale === "te"
                      ? "సంప్రదింపు విధానాన్ని ఎంచుకోండి మరియు మీ సమస్య/విభాగాన్ని పేర్కొనండి."
                      : locale === "hi"
                        ? "परामर्श का प्रकार चुनें और अपने आने का कारण बताएं।"
                        : "Choose the type of consultation and specify the reason for your visit."}
                  </p>
                </div>

                {/* Consultation Type Radio Cards */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#17364B] block">
                    {locale === "te" ? "సంప్రదింపు విధానం" : locale === "hi" ? "परामर्श का प्रकार" : "Consultation Type"}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {/* In-Person Visit */}
                    <button
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, consultationType: "in-person" })
                      }
                      className={`p-4 rounded-xl border text-left flex items-start gap-3 transition-all relative ${
                        formData.consultationType === "in-person"
                          ? "border-[#B99A62] bg-[#E5EFF0] shadow-xs"
                          : "border-[#E5DFD3] bg-[#FAF8F5] hover:border-[#B99A62]/40"
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-white border border-[#CCDDE0] text-[#B99A62] flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-heading font-bold text-xs text-[#17364B]">
                          {locale === "te" ? "ప్రత్యక్ష సందర్శన" : locale === "hi" ? "व्यक्तिगत परामर्श" : "In-Person Visit"}
                        </div>
                        <div className="text-[10px] text-[#4B6778] mt-0.5">
                          {locale === "te" ? "KIMS హాస్పిటల్ నెల్లూరు వద్ద" : locale === "hi" ? "किम्स अस्पताल नेल्लोर में" : "Consult at KIMS Hospital, Nellore"}
                        </div>
                      </div>
                      {formData.consultationType === "in-person" && (
                        <CheckCircle2 className="w-4 h-4 text-[#B99A62] absolute top-3 right-3" />
                      )}
                    </button>

                    {/* Video Consultation */}
                    <button
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, consultationType: "video" })
                      }
                      className={`p-4 rounded-xl border text-left flex items-start gap-3 transition-all relative ${
                        formData.consultationType === "video"
                          ? "border-[#B99A62] bg-[#E5EFF0] shadow-xs"
                          : "border-[#E5DFD3] bg-[#FAF8F5] hover:border-[#B99A62]/40"
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-white border border-[#CCDDE0] text-[#B99A62] flex items-center justify-center flex-shrink-0">
                        <Video className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-heading font-bold text-xs text-[#17364B]">
                          {locale === "te" ? "వీడియో సంప్రదింపు" : locale === "hi" ? "वीडियो परामर्श" : "Video Consultation"}
                        </div>
                        <div className="text-[10px] text-[#4B6778] mt-0.5">
                          {locale === "te" ? "ఎక్కడి నుంచైనా ఆన్‌లైన్‌లో" : locale === "hi" ? "कहीं से भी ऑनलाइन परामर्श" : "Consult online from anywhere"}
                        </div>
                      </div>
                      {formData.consultationType === "video" && (
                        <CheckCircle2 className="w-4 h-4 text-[#B99A62] absolute top-3 right-3" />
                      )}
                    </button>

                    {/* Phone Consultation */}
                    <button
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, consultationType: "phone" })
                      }
                      className={`p-4 rounded-xl border text-left flex items-start gap-3 transition-all relative ${
                        formData.consultationType === "phone"
                          ? "border-[#B99A62] bg-[#E5EFF0] shadow-xs"
                          : "border-[#E5DFD3] bg-[#FAF8F5] hover:border-[#B99A62]/40"
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-white border border-[#CCDDE0] text-[#B99A62] flex items-center justify-center flex-shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-heading font-bold text-xs text-[#17364B]">
                          {locale === "te" ? "ఫోన్ సంప్రదింపు" : locale === "hi" ? "फ़ोन परामर्श" : "Phone Consultation"}
                        </div>
                        <div className="text-[10px] text-[#4B6778] mt-0.5">
                          {locale === "te" ? "ఫోన్ ద్వారా మాట్లాడండి" : locale === "hi" ? "फ़ोन पर डॉक्टर से बात करें" : "Talk to the doctor over phone"}
                        </div>
                      </div>
                      {formData.consultationType === "phone" && (
                        <CheckCircle2 className="w-4 h-4 text-[#B99A62] absolute top-3 right-3" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Reason for Visit Grid */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#17364B] block">
                    {locale === "te" ? "విభాగం / సంప్రదింపు కారణాన్ని ఎంచుకోండి" : locale === "hi" ? "विभाग / परामर्श का कारण चुनें" : "Select Department / Reason for Visit"}
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {DEPARTMENTS_RAW.map((dept) => {
                      const Icon = dept.icon;
                      const localizedTitle = getDeptTitle(dept);
                      const isSelected = formData.department === dept.title || formData.department === localizedTitle;
                      return (
                        <button
                          key={dept.id}
                          type="button"
                          onClick={() =>
                            setFormData({ ...formData, department: dept.title })
                          }
                          className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition-all text-xs font-semibold ${
                            isSelected
                              ? "border-[#B99A62] bg-[#B99A62] text-white font-bold shadow-xs"
                              : "border-[#E5DFD3] bg-[#FAF8F5] hover:border-[#B99A62]/40 text-[#17364B]"
                          }`}
                        >
                          <Icon className={`w-4 h-4 ${isSelected ? "text-white" : "text-[#B99A62]"}`} />
                          <span className="truncate">{localizedTitle}</span>
                        </button>
                      );
                    })}
                  </div>
                  {formErrors.department && (
                    <p className="text-xs text-red-500 mt-1">{formErrors.department}</p>
                  )}
                </div>

                {/* Brief Description Textarea with counter */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-[#17364B]">
                      {locale === "te" ? "సంక్షిప్త వివరణ (ఐచ్ఛికం)" : locale === "hi" ? "संक्षिप्त विवरण (वैकल्पिक)" : "Brief Description (Optional)"}
                    </label>
                    <span className="text-[10px] text-[#4B6778]">
                      {formData.description.length}/500
                    </span>
                  </div>
                  <textarea
                    rows={4}
                    maxLength={500}
                    placeholder={
                      locale === "te"
                        ? "మీ లక్షణాలు లేదా సంప్రదింపు కారణాన్ని వివరించండి..."
                        : locale === "hi"
                          ? "कृपया अपने लक्षणों या परामर्श के कारण का वर्णन करें..."
                          : "Please describe your symptoms or reason for consultation..."
                    }
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    className="w-full p-3.5 rounded-xl border border-[#DCD5C9] bg-[#FAF8F5] text-[#17364B] placeholder-[#8BA4B2] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#B99A62]"
                  />
                </div>

                <div className="pt-4 border-t border-[#E5DFD3] flex justify-end">
                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-[#B99A62] hover:bg-[#A3844C] shadow-sm transition-all"
                  >
                    <span>{locale === "te" ? "తదుపరి: తేదీ & సమయం ఎంచుకోండి" : locale === "hi" ? "आगे: तारीख और समय चुनें" : "Next: Choose Date & Time"}</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: CHOOSE DATE & TIME */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-heading font-extrabold text-xl text-[#17364B]">
                    {locale === "te" ? "2. తేదీ & సమయాన్ని ఎంచుకోండి" : locale === "hi" ? "2. तारीख और समय चुनें" : "2. Choose Date & Time"}
                  </h2>
                  <p className="text-xs text-[#4B6778] mt-0.5">
                    {locale === "te"
                      ? "మీకు అనుకూలమైన సంప్రదింపు తేదీ మరియు అందుబాటులో ఉన్న సమయ స్లాట్‌ను ఎంచుకోండి."
                      : locale === "hi"
                        ? "अपनी पसंदीदा परामर्श तिथि और उपलब्ध समय स्लॉट चुनें।"
                        : "Select your preferred consultation date and available timing slot."}
                  </p>
                </div>

                {/* Interactive Date Picker with Min Date Prevention */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#17364B] block">
                    {locale === "te" ? "సంప్రదింపు తేదీ" : locale === "hi" ? "परामर्श की तारीख" : "Consultation Date"}
                  </label>
                  <input
                    type="date"
                    min={defaultDateStr}
                    value={formData.selectedDate}
                    onChange={(e) =>
                      setFormData({ ...formData, selectedDate: e.target.value })
                    }
                    className="w-full sm:w-72 px-4 py-3 rounded-xl border border-[#DCD5C9] bg-[#FAF8F5] text-sm font-semibold text-[#17364B] focus:outline-none focus:ring-2 focus:ring-[#B99A62]"
                  />
                  {formErrors.selectedDate && (
                    <p className="text-xs text-red-500">{formErrors.selectedDate}</p>
                  )}
                  <p className="text-[11px] text-[#4B6778]">
                    {locale === "te"
                      ? "* KIMS హాస్పిటల్ నెల్లూరు వద్ద సోమవారం నుండి శనివారం వరకు (ఉదయం 9:00 - సాయంత్రం 5:00) అందుబాటులో ఉంటుంది."
                      : locale === "hi"
                        ? "* किम्स अस्पताल नेल्लोर में सोमवार से शनिवार (सुबह 9:00 - शाम 5:00) उपलब्ध।"
                        : "* Available Monday to Saturday (9:00 AM – 5:00 PM) at KIMS Hospital Nellore."}
                  </p>
                </div>

                {/* Available Time Slots Grid */}
                <div className="space-y-3 pt-2">
                  <label className="text-xs font-bold text-[#17364B] block">
                    {locale === "te" ? "అందుబాటులో ఉన్న సమయ స్లాట్లు" : locale === "hi" ? "उपलब्ध परामर्श स्लॉट" : "Available Consultation Slots"}
                  </label>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {TIME_SLOTS.map((slotItem, idx) => {
                      const isSelected = formData.timeSlot === slotItem.slot;
                      return (
                        <button
                          key={idx}
                          type="button"
                          disabled={!slotItem.available}
                          onClick={() =>
                            setFormData({ ...formData, timeSlot: slotItem.slot })
                          }
                          className={`p-3 rounded-xl border text-center transition-all ${
                            !slotItem.available
                              ? "bg-[#F6F3EC] border-[#E5DFD3] text-[#8BA4B2] cursor-not-allowed opacity-50"
                              : isSelected
                              ? "bg-[#B99A62] border-[#B99A62] text-white shadow-xs font-bold"
                              : "bg-[#FAF8F5] border-[#E5DFD3] hover:border-[#B99A62] text-[#17364B]"
                          }`}
                        >
                          <div className="text-xs font-semibold">
                            {slotItem.slot}
                          </div>
                          <div className="text-[10px] mt-0.5">
                            {slotItem.available ? (
                              <span className={isSelected ? "text-white font-bold" : "text-emerald-700 font-medium"}>
                                {locale === "te" ? "అందుబాటులో ఉంది" : locale === "hi" ? "उपलब्ध" : "Available"}
                              </span>
                            ) : (
                              <span className="text-[#8BA4B2]">
                                {locale === "te" ? "బుక్ చేయబడింది" : locale === "hi" ? "आरक्षित" : "Booked"}
                              </span>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  {formErrors.timeSlot && (
                    <p className="text-xs text-red-500">{formErrors.timeSlot}</p>
                  )}
                </div>

                <div className="pt-6 border-t border-[#E5DFD3] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold text-[#3A5668] hover:text-[#17364B] border border-[#DCD5C9] hover:bg-[#FAF8F5]"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>{locale === "te" ? "వెనుకకు" : locale === "hi" ? "पीछे" : "Back"}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-[#B99A62] hover:bg-[#A3844C] shadow-sm transition-all"
                  >
                    <span>{locale === "te" ? "తదుపరి: రోగి సమాచారం" : locale === "hi" ? "आगे: रोगी की जानकारी" : "Next: Patient Information"}</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: PATIENT INFORMATION */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-heading font-extrabold text-xl text-[#17364B]">
                    {locale === "te" ? "3. రోగి సమాచారం" : locale === "hi" ? "3. रोगी की जानकारी" : "3. Patient Information"}
                  </h2>
                  <p className="text-xs text-[#4B6778] mt-0.5">
                    {locale === "te"
                      ? "హాస్పిటల్ రికార్డు నమోదు కోసం దయచేసి సరైన రోగి వివరాలను అందించండి."
                      : locale === "hi"
                        ? "अस्पताल रिकॉर्ड के लिए कृपया सही रोगी विवरण प्रदान करें।"
                        : "Please provide accurate patient details for hospital record generation."}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="text-xs font-bold text-[#17364B]">
                      {locale === "te" ? "రోగి పూర్తి పేరు *" : locale === "hi" ? "रोगी का पूरा नाम *" : "Patient Full Name *"}
                    </label>
                    <input
                      type="text"
                      placeholder={locale === "te" ? "ఉదా. రమేష్ కుమార్" : locale === "hi" ? "उदा. रमेश कुमार" : "e.g. Ramesh Kumar"}
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCD5C9] bg-[#FAF8F5] text-[#17364B] placeholder-[#8BA4B2] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#B99A62]"
                    />
                    {formErrors.fullName && (
                      <p className="text-xs text-red-500">{formErrors.fullName}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#17364B]">
                      {locale === "te" ? "మొబైల్ నంబర్ *" : locale === "hi" ? "मोबाइल नंबर *" : "Mobile Number *"}
                    </label>
                    <input
                      type="tel"
                      placeholder={locale === "te" ? "10 అంకెల మొబైల్ నంబర్" : locale === "hi" ? "10 अंकों का मोबाइल नंबर" : "10-digit mobile number"}
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCD5C9] bg-[#FAF8F5] text-[#17364B] placeholder-[#8BA4B2] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#B99A62]"
                    />
                    {formErrors.phone && (
                      <p className="text-xs text-red-500">{formErrors.phone}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#17364B]">
                      {locale === "te" ? "ఈమెయిల్ చిరునామా (ఐచ్ఛికం)" : locale === "hi" ? "ईमेल पता (वैकल्पिक)" : "Email Address (Optional)"}
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCD5C9] bg-[#FAF8F5] text-[#17364B] placeholder-[#8BA4B2] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#B99A62]"
                    />
                  </div>

                  {/* Age */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#17364B]">
                      {locale === "te" ? "వయస్సు (సంవత్సరాలు) *" : locale === "hi" ? "आयु (वर्ष) *" : "Age (Years) *"}
                    </label>
                    <input
                      type="number"
                      placeholder="e.g. 42"
                      value={formData.age}
                      onChange={(e) =>
                        setFormData({ ...formData, age: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCD5C9] bg-[#FAF8F5] text-[#17364B] placeholder-[#8BA4B2] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#B99A62]"
                    />
                    {formErrors.age && (
                      <p className="text-xs text-red-500">{formErrors.age}</p>
                    )}
                  </div>

                  {/* Gender */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#17364B]">
                      {locale === "te" ? "లింగం *" : locale === "hi" ? "लिंग *" : "Gender *"}
                    </label>
                    <div className="flex items-center gap-3 pt-1">
                      {[
                        { val: "Male", label: locale === "te" ? "పురుషుడు" : locale === "hi" ? "पुरुष" : "Male" },
                        { val: "Female", label: locale === "te" ? "స్త్రీ" : locale === "hi" ? "महिला" : "Female" },
                        { val: "Other", label: locale === "te" ? "ఇతర" : locale === "hi" ? "अन्य" : "Other" },
                      ].map((g) => (
                        <label
                          key={g.val}
                          className="flex items-center gap-1.5 text-xs text-[#17364B] font-semibold cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="gender"
                            checked={formData.gender === g.val}
                            onChange={() =>
                              setFormData({
                                ...formData,
                                gender: g.val as "Male" | "Female" | "Other",
                              })
                            }
                            className="text-[#B99A62] focus:ring-[#B99A62]"
                          />
                          <span>{g.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#E5DFD3] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold text-[#3A5668] hover:text-[#17364B] border border-[#DCD5C9] hover:bg-[#FAF8F5]"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>{locale === "te" ? "వెనుకకు" : locale === "hi" ? "पीछे" : "Back"}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-[#B99A62] hover:bg-[#A3844C] shadow-sm transition-all"
                  >
                    <span>{locale === "te" ? "తదుపరి: సమీక్షించి నిర్ధారించండి" : locale === "hi" ? "आगे: समीक्षा और पुष्टि करें" : "Next: Review & Confirm"}</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: REVIEW & CONFIRM */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-heading font-extrabold text-xl text-[#17364B]">
                    {locale === "te" ? "4. అపాయింట్‌మెంట్‌ను సమీక్షించి నిర్ధారించండి" : locale === "hi" ? "4. अपॉइंटमेंट की समीक्षा करें और पुष्टि करें" : "4. Review & Confirm Appointment"}
                  </h2>
                  <p className="text-xs text-[#4B6778] mt-0.5">
                    {locale === "te"
                      ? "చివరి నిర్ధారణకు ముందు దయచేసి మీ అపాయింట్‌మెంట్ వివరాలను సమీక్షించండి."
                      : locale === "hi"
                        ? "अंतिम पुष्टि से पहले कृपया अपने अपॉइंटमेंट सारांश की समीक्षा करें।"
                        : "Please review your appointment summary before final confirmation."}
                  </p>
                </div>

                {/* Summary Card */}
                <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD3] space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-[#4B6778] font-semibold block">
                        {locale === "te" ? "వైద్యులు" : locale === "hi" ? "चिकित्सक" : "Doctor"}
                      </span>
                      <span className="font-extrabold text-[#17364B] text-sm">
                        {locDoctor.fullName}
                      </span>
                      <span className="text-[#B99A62] block text-[11px] font-semibold">
                        {locDoctor.designation}
                      </span>
                    </div>

                    <div>
                      <span className="text-[#4B6778] font-semibold block">
                        {locale === "te" ? "ఆసుపత్రి" : locale === "hi" ? "अस्पताल" : "Hospital"}
                      </span>
                      <span className="font-bold text-[#17364B]">
                        {locDoctor.hospital.name}, {locDoctor.hospital.city}
                      </span>
                      <span className="text-[#4B6778] block text-[11px]">
                        {locDoctor.hospital.address}
                      </span>
                    </div>

                    <div>
                      <span className="text-[#4B6778] font-semibold block">
                        {locale === "te" ? "తేదీ & సమయం" : locale === "hi" ? "तारीख और समय" : "Date & Time"}
                      </span>
                      <span className="font-bold text-[#17364B]">
                        {formData.selectedDate} at {formData.timeSlot}
                      </span>
                    </div>

                    <div>
                      <span className="text-[#4B6778] font-semibold block">
                        {locale === "te" ? "సంప్రదింపు విధానం" : locale === "hi" ? "परामर्श का प्रकार" : "Consultation Mode"}
                      </span>
                      <span className="font-bold text-[#B99A62] uppercase">
                        {formData.consultationType}
                      </span>
                    </div>

                    <div>
                      <span className="text-[#4B6778] font-semibold block">
                        {locale === "te" ? "విభాగం / కారణం" : locale === "hi" ? "विभाग / कारण" : "Department / Reason"}
                      </span>
                      <span className="font-bold text-[#17364B]">
                        {formData.department}
                      </span>
                    </div>

                    <div>
                      <span className="text-[#4B6778] font-semibold block">
                        {locale === "te" ? "రోగి వివరాలు" : locale === "hi" ? "रोगी विवरण" : "Patient"}
                      </span>
                      <span className="font-bold text-[#17364B]">
                        {formData.fullName} ({formData.gender}, {formData.age} {locale === "te" ? "సంవత్సరాలు" : locale === "hi" ? "वर्ष" : "yrs"})
                      </span>
                      <span className="text-[#4B6778] block text-[11px]">
                        Ph: {formData.phone}
                      </span>
                    </div>
                  </div>

                  {formData.description && (
                    <div className="pt-3 border-t border-[#E5DFD3] text-xs">
                      <span className="text-[#4B6778] font-semibold block">
                        {locale === "te" ? "లక్షణాల గమనిక:" : locale === "hi" ? "लक्षण टिप्पणी:" : "Symptoms Note:"}
                      </span>
                      <p className="text-[#3A5668] mt-0.5 italic">
                        &quot;{formData.description}&quot;
                      </p>
                    </div>
                  )}
                </div>

                <div className="pt-6 border-t border-[#E5DFD3] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold text-[#3A5668] hover:text-[#17364B] border border-[#DCD5C9] hover:bg-[#FAF8F5]"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>{locale === "te" ? "వివరాలను సవరించండి" : locale === "hi" ? "विवरण संपादित करें" : "Edit Details"}</span>
                  </button>

                  <button
                    type="button"
                    disabled={isSubmitting}
                    onClick={handleFinalConfirm}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold text-white bg-[#B99A62] hover:bg-[#A3844C] shadow-md transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>{locale === "te" ? "అపాయింట్‌మెంట్ నిర్ధారిస్తోంది..." : locale === "hi" ? "अपॉइंटमेंट की पुष्टि हो रही है..." : "Confirming Appointment..."}</span>
                    ) : (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-white" />
                        <span>{locale === "te" ? "నిర్ధారించి బుకింగ్ టోకెన్ పొందండి" : locale === "hi" ? "पुष्टि करें और बुकिंग टोकन प्राप्त करें" : "Confirm & Generate Booking Token"}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar Column */}
          <aside aria-label="Booking support and clinic details" className="lg:col-span-4 space-y-6">
            {/* Why Choose Us */}
            <div className="bg-white p-5 rounded-2xl border border-[#E5DFD3] shadow-card space-y-3">
              <h3 className="font-heading font-extrabold text-sm text-[#17364B]">
                {locale === "te" ? "మమ్మల్ని ఎందుకు ఎంచుకోవాలి?" : locale === "hi" ? "हमें क्यों चुनें?" : "Why Choose Us?"}
              </h3>
              <div className="space-y-2.5 text-xs">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B99A62] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-[#17364B]">
                      {locale === "te" ? "నిపుణుల సంప్రదింపు" : locale === "hi" ? "विशेषज्ञ परामर्श" : "Expert Consultation"}
                    </span>
                    <p className="text-[#4B6778] text-[11px]">
                      {locale === "te" ? "డాక్టర్ రాకేష్ వంశీ గారితో" : locale === "hi" ? "डॉ. राकेश वामसी के साथ" : "with Dr. Rakesh Vamsi"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B99A62] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-[#17364B]">
                      {locale === "te" ? "ఆధునిక చికిత్స" : locale === "hi" ? "उन्नत उपचार" : "Advanced Treatment"}
                    </span>
                    <p className="text-[#4B6778] text-[11px]">
                      {locale === "te" ? "కనిష్ట ఇన్వాసివ్ & రోబోటిక్ సర్జరీ" : locale === "hi" ? "मिनिमली इनवेसिव व रोबोटिक सर्जरी" : "Minimally invasive & robotic surgery"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B99A62] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-[#17364B]">
                      {locale === "te" ? "రోగి-కేంద్రీకృత సంరక్షణ" : locale === "hi" ? "रोगी-केंद्रित देखभाल" : "Patient-Centered Care"}
                    </span>
                    <p className="text-[#4B6778] text-[11px]">
                      {locale === "te" ? "వ్యక్తిగత చికిత్స ప్రణాళికలు" : locale === "hi" ? "व्यक्तिगत उपचार योजनाएं" : "Personalized treatment plans"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B99A62] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-[#17364B]">
                      {locale === "te" ? "ఆధునిక సౌకర్యాలు" : locale === "hi" ? "आधुनिक सुविधाएं" : "Modern Facilities"}
                    </span>
                    <p className="text-[#4B6778] text-[11px]">
                      {locale === "te" ? "KIMS హాస్పిటల్ నెల్లూరు వద్ద" : locale === "hi" ? "किम्स अस्पताल नेल्लोर में" : "At KIMS Hospital, Nellore"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Your Doctor Card */}
            <div className="bg-white p-5 rounded-2xl border border-[#E5DFD3] shadow-card text-center space-y-3">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#B99A62]/40 mx-auto bg-[#FAF8F5]">
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

              <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#E5DFD3] text-[#3A5668] text-[11px] text-left space-y-1">
                <div>• MBBS, MS (General Surgery), MCh (Urology)</div>
                <div>• Fellowship in Laparoscopy & Robotic Surgery</div>
              </div>
            </div>

            {/* Need Help Card */}
            <div className="bg-white p-5 rounded-2xl border border-[#E5DFD3] shadow-card space-y-3">
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#4B6778]">
                {locale === "te" ? "సహాయం కావాలా?" : locale === "hi" ? "सहायता चाहिए?" : "Need Help?"}
              </h4>
              <a
                href={`tel:${locDoctor.hospital.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF8F5] border border-[#E5DFD3] hover:border-[#B99A62]/40 transition-colors"
              >
                <Phone className="w-5 h-5 text-[#B99A62]" />
                <div>
                  <div className="text-xs font-bold text-[#17364B]">
                    {locDoctor.hospital.phone}
                  </div>
                  <div className="text-[10px] text-[#4B6778]">
                    {locale === "te" ? "విచారణల కోసం కాల్ చేయండి (సోమ-శని 9AM-5PM)" : locale === "hi" ? "पूछताछ के लिए कॉल करें (सोम-शनि 9AM-5PM)" : "Call for queries (Mon-Sat 9AM-5PM)"}
                  </div>
                </div>
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
