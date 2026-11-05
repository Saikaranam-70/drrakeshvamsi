"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import {
  Play,
  Film,
  Sparkles,
  Calendar,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Stethoscope,
  Volume2,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getLocalizedDoctorData } from "@/data/localizedDoctor";
import { cn } from "@/lib/utils";

interface VideoItem {
  id: string;
  src: string;
  titleEn: string;
  titleTe: string;
  titleHi: string;
  descEn: string;
  descTe: string;
  descHi: string;
  categoryEn: string;
  categoryTe: string;
  categoryHi: string;
  duration: string;
}

const CLINICAL_VIDEOS: VideoItem[] = [
  {
    id: "v1",
    src: "/videos/urologistduty.mp4",
    titleEn: "Role & Scope of a Consultant Urologist",
    titleTe: "కన్సల్టెంట్ యూరాలజిస్ట్ పాత్ర & చికిత్సల పరిధి",
    titleHi: "कंसल्टेंट यूरोलॉजिस्ट की भूमिका और उपचार का दायरा",
    descEn: "A comprehensive clinical guide on conditions treated by a urologist, advanced diagnostics, and when to seek expert consultation.",
    descTe: "యూరాలజిస్ట్ చికిత్స చేసే వ్యాధులు, అధునాతన నిర్ధారణ పద్ధతులు మరియు నిపుణుల సలహా ఎప్పుడు తీసుకోవాలో సమగ్ర సమాచారం.",
    descHi: "यूरोलॉजिस्ट द्वारा उपचारित स्थितियों, उन्नत जांच और विशेषज्ञ परामर्श कब लें, इस पर एक व्यापक नैदानिक मार्गदर्शिका।",
    categoryEn: "Urology Care",
    categoryTe: "యూరాలజీ సంరక్షణ",
    categoryHi: "यूरोलॉजी देखभाल",
    duration: "HD Video",
  },
  {
    id: "v2",
    src: "/videos/UrinaryFlow.mp4",
    titleEn: "Urinary Flow Dynamics & Bladder Function",
    titleTe: "మూత్ర ప్రవాహ పనితీరు & మూత్రాశయ ఆరోగ్యం",
    titleHi: "मूत्र प्रवाह गतिशीलता और मूत्राशय कार्यप्रणाली",
    descEn: "Understanding normal urinary flow rates, symptoms of urinary tract obstruction (such as prostate enlargement), and timely interventions.",
    descTe: "సాధారణ మూత్ర ప్రవాహ వేగం, ప్రొస్టేట్ పెరుగుదల వల్ల మూత్ర మార్గంలో వచ్చే అడ్డంకుల లక్షణాలు మరియు సమయానికి చేయాల్సిన చికిత్సలు.",
    descHi: "सामान्य मूत्र प्रवाह दर, मूत्र मार्ग में रुकावट के लक्षण (जैसे प्रोस्टेट वृद्धि) और समय पर उपचार की जानकारी।",
    categoryEn: "Urinary Flow",
    categoryTe: "మూత్ర ప్రవాహం",
    categoryHi: "मूत्र प्रवाह",
    duration: "HD Video",
  },
  {
    id: "v3",
    src: "/videos/Urinaryincotinance.mp4",
    titleEn: "Urinary Incontinence: Causes & Modern Treatments",
    titleTe: "యూరినరీ ఇన్‌కాంటినెన్స్: కారణాలు & ఆధునిక చికిత్సలు",
    titleHi: "यूरिनरी इनकॉन्टिनेंस: कारण और आधुनिक उपचार",
    descEn: "Understanding involuntary urine leakage, stress vs. urge incontinence, pelvic floor weakness, and advanced non-invasive solutions.",
    descTe: "అనుకోకుండా మూత్రం లీక్ కావడం, ఒత్తిడి లేదా ఆపుకోలేకపోవడం వల్ల వచ్చే సమస్యలు మరియు ఆధునిక నివారణ పద్ధతులు.",
    descHi: "अनियंत्रित पेशाब रिसाव, स्ट्रेस व अर्ज असंयम, पेल्विक फ्लोर की कमजोरी और उन्नत उपचार समाधानों की विस्तृत जानकारी।",
    categoryEn: "Incontinence Care",
    categoryTe: "మూత్ర నియంత్రణ",
    categoryHi: "मूत्र नियंत्रण",
    duration: "HD Video",
  },
  {
    id: "v4",
    src: "/videos/spermproduce.mp4",
    titleEn: "Sperm Production & Male Reproductive Health",
    titleTe: "శుక్రకణాల ఉత్పత్తి ప్రక్రియ & పురుషుల సంతానోత్పత్తి ఆరోగ్యం",
    titleHi: "शुक्राणु उत्पादन और पुरुष प्रजनन स्वास्थ्य",
    descEn: "Clinical insights into spermatogenesis, healthy sperm parameters (count, motility, morphology), and modern andrological fertility therapies.",
    descTe: "శుక్రకణాల ఉత్పత్తి ప్రక్రియ (స్పెర్మటోజెనిసిస్), వీర్య నాణ్యత, కణాల కదలిక మరియు సంతానలేమికి ఆధునిక ఆండ్రాలజీ చికిత్సలు.",
    descHi: "शुक्राणु निर्माण (स्पर्मेटोजेनेसिस), वीर्य गुणवत्ता (काउंट, गतिशीलता), और पुरुष बांझपन के आधुनिक एंड्रोलॉजी उपचार।",
    categoryEn: "Male Fertility",
    categoryTe: "పురుషుల సంతానోత్పత్తి",
    categoryHi: "पुरुष प्रजनन",
    duration: "HD Video",
  },
  {
    id: "v5",
    src: "/videos/smoking.mp4",
    titleEn: "Impact of Smoking on Urological & Sexual Health",
    titleTe: "ధూమపానం వల్ల యూరాలజీ & లైంగిక ఆరోగ్యంపై ప్రభావం",
    titleHi: "धूम्रपान का यूरोलॉजिकल और यौन स्वास्थ्य पर प्रभाव",
    descEn: "How tobacco smoking impairs penile blood flow causing erectile dysfunction, damages sperm DNA, and drastically raises bladder cancer risk.",
    descTe: "ధూమపానం వల్ల రక్తప్రసరణ తగ్గి అంగస్తంభన లోపం (ED), శుక్రకణాల నాణ్యత క్షీణత మరియు మూత్రాశయ క్యాన్సర్ ముప్పు ఎలా పెరుగుతుందో విశ్లేషణ.",
    descHi: "धूम्रपान से रक्त प्रवाह बाधित होकर स्तंभन दोष (ED), शुक्राणुओं की क्षति और मूत्राशय कैंसर का खतरा कैसे बढ़ता है, इसकी नैदानिक जानकारी।",
    categoryEn: "Men's Health",
    categoryTe: "పురుషుల ఆరోగ్యం",
    categoryHi: "पुरुष स्वास्थ्य",
    duration: "HD Video",
  },
];

export default function ClinicalVideoShowcase() {
  const { locale, t } = useLanguage();
  const doctor = getLocalizedDoctorData(locale);
  const [activeVideo, setActiveVideo] = useState<VideoItem>(CLINICAL_VIDEOS[0]);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleSelectVideo = (video: VideoItem) => {
    setActiveVideo(video);
  };

  const getTitle = (v: VideoItem) =>
    locale === "te" ? v.titleTe : locale === "hi" ? v.titleHi : v.titleEn;

  const getDesc = (v: VideoItem) =>
    locale === "te" ? v.descTe : locale === "hi" ? v.descHi : v.descEn;

  const getCategory = (v: VideoItem) =>
    locale === "te" ? v.categoryTe : locale === "hi" ? v.categoryHi : v.categoryEn;

  return (
    <section className="py-16 lg:py-20 bg-[#F6F3EC] text-[#17364B] relative overflow-hidden border-t border-b border-[#E5DFD3]" id="clinical-videos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E5EFF0] text-[#17364B] border border-[#B99A62]/30 shadow-xs">
            <Film className="w-3.5 h-3.5 text-[#B99A62]" />
            <span>
              {locale === "te"
                ? "క్లినికల్ వీడియో గ్యాలరీ"
                : locale === "hi"
                  ? "क्लिनिकल वीडियो गैलरी"
                  : "CLINICAL VIDEO SHOWCASE"}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#B99A62] animate-pulse" />
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#17364B] tracking-tight leading-tight">
            {locale === "te" ? (
              <>
                శస్త్రచికిత్స నైపుణ్యం & <span className="text-[#B99A62]">క్లినికల్ విధానాల వీడియోలు</span>
              </>
            ) : locale === "hi" ? (
              <>
                सर्जिकल सटीकता और <span className="text-[#B99A62]">क्लिनिकल प्रक्रियाएं</span>
              </>
            ) : (
              <>
                Surgical Precision & <span className="text-[#B99A62]">Clinical Procedures in Action</span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-[#3A5668] leading-relaxed max-w-2xl mx-auto">
            {locale === "te"
              ? "నెల్లూరు కిమ్స్ హాస్పిటల్‌లో డాక్టర్ రాకేష్ వంశీ గారి నేతృత్వంలో జరిగే ఆధునిక లేజర్, రోబోటిక్ మరియు కనిష్ట ఇన్వాసివ్ యూరాలజీ శస్త్రచికిత్సలను వీక్షించండి."
              : locale === "hi"
                ? "किम्स हॉस्पिटल नेल्लोर में डॉ. राकेश वामसी द्वारा निष्पादित उन्नत लेजर, रोबोटिक और न्यूनतम इनवेसिव यूरोलॉजी प्रक्रियाओं का अवलोकन करें।"
                : "Explore real clinical demonstrations of advanced laser stone fragmentation, 3D robotic surgery, and compassionate patient care at KIMS Hospital, Nellore."}
          </p>
        </div>

        {/* Main Grid: Theater Player (Left 7-8 cols) + Playlist (Right 4-5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Cinematic Video Player */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-4">
            <div className="relative rounded-3xl overflow-hidden bg-black border border-[#D5E4E6] shadow-card group">
              {/* Aspect Ratio Container */}
              <div className="relative aspect-video w-full bg-black">
                <video
                  ref={videoRef}
                  key={activeVideo.src}
                  src={activeVideo.src}
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-contain"
                >
                  Your browser does not support HTML5 video.
                </video>
              </div>

              {/* Bottom Video Meta Bar */}
              <div className="p-4 sm:p-5 bg-white border-t border-[#E5DFD3]">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                  <div className="inline-flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#E5EFF0] text-[#17364B] border border-[#CCDDE0]">
                      {getCategory(activeVideo)}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#4B6778]">
                      <Sparkles className="w-3 h-3 text-[#B99A62]" />
                      HD 1080p
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs text-[#4B6778] font-medium">
                    <Stethoscope className="w-3.5 h-3.5 text-[#B99A62]" />
                    <span>{doctor.fullName}</span>
                  </div>
                </div>

                <h3 className="font-heading font-bold text-lg sm:text-xl text-[#17364B]">
                  {getTitle(activeVideo)}
                </h3>

                <p className="text-xs sm:text-sm text-[#4B6778] mt-1 leading-relaxed">
                  {getDesc(activeVideo)}
                </p>
              </div>
            </div>

            {/* Quick Procedure Highlights */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white border border-[#E5DFD3] rounded-2xl p-3 sm:p-3.5 text-center shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#B99A62] mx-auto mb-1" />
                <div className="text-[11px] sm:text-xs font-bold text-[#17364B]">
                  {locale === "te" ? "తక్కువ కోత / నొప్పితక్కువ" : locale === "hi" ? "न्यूनतम चीरा" : "Keyhole Precision"}
                </div>
                <div className="text-[9.5px] text-[#4B6778] mt-0.5">
                  {locale === "te" ? "సూక్ష్మ రికవరీ" : locale === "hi" ? "शीघ्र रिकवरी" : "Rapid Healing"}
                </div>
              </div>

              <div className="bg-white border border-[#E5DFD3] rounded-2xl p-3 sm:p-3.5 text-center shadow-xs">
                <ShieldCheck className="w-4 h-4 text-[#B99A62] mx-auto mb-1" />
                <div className="text-[11px] sm:text-xs font-bold text-[#17364B]">
                  {locale === "te" ? "రోగి భద్రత & ఖచ్చితత్వం" : locale === "hi" ? "मरीज़ सुरक्षा" : "Patient Safety"}
                </div>
                <div className="text-[9.5px] text-[#4B6778] mt-0.5">
                  {locale === "te" ? "జాతీయ ప్రమాణాలు" : locale === "hi" ? "शीर्ष मानक" : "NABH Hospital"}
                </div>
              </div>

              < div className="bg-white border border-[#E5DFD3] rounded-2xl p-3 sm:p-3.5 text-center shadow-xs" >
                <Volume2 className="w-4 h-4 text-[#B99A62] mx-auto mb-1" />
                <div className="text-[11px] sm:text-xs font-bold text-[#17364B]">
                  {locale === "te" ? "24/7 అత్యవసర సేవలు" : locale === "hi" ? "24/7 आपातकाल" : "24/7 Trauma"}
                </div>
                <div className="text-[9.5px] text-[#4B6778] mt-0.5">
                  {doctor.hospital.city}
                </div>
              </div>
            </div>
          </div>

          {/* Video Playlist Sidebar (Right 4-5 cols) */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-3">
            <div className="flex items-center justify-between pb-1">
              <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#17364B] flex items-center gap-2">
                <span>{locale === "te" ? "వీడియోల జాబితా (5)" : locale === "hi" ? "वीडियो प्लेलिस्ट (5)" : "Clinical Playlist (5)"}</span>
              </h4>
              <span className="text-[11px] text-[#B99A62] font-semibold">
                {locale === "te" ? "ప్లే చేయడానికి క్లిక్ చేయండి" : locale === "hi" ? "चलाने के लिए क्लिक करें" : "Click to Play"}
              </span>
            </div>

            <div className="space-y-2.5 max-h-[580px] overflow-y-auto pr-1">
              {CLINICAL_VIDEOS.map((video, index) => {
                const isSelected = video.id === activeVideo.id;
                return (
                  <button
                    key={video.id}
                    type="button"
                    onClick={() => handleSelectVideo(video)}
                    className={cn(
                      "w-full p-3.5 rounded-2xl text-left transition-all duration-200 border flex items-center gap-3.5 group relative overflow-hidden shadow-xs",
                      isSelected
                        ? "bg-white border-2 border-[#B99A62] shadow-md ring-1 ring-[#B99A62]"
                        : "bg-white hover:bg-[#FAF8F5] border-[#E5DFD3]"
                    )}
                  >
                    {/* Thumbnail representation */}
                    <div className="relative w-16 h-14 sm:w-20 sm:h-16 rounded-xl bg-[#17364B] border border-[#CCDDE0] flex-shrink-0 flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <div
                        className={cn(
                          "w-7 h-7 rounded-full flex items-center justify-center transition-transform group-hover:scale-110",
                          isSelected
                            ? "bg-[#B99A62] text-white font-bold shadow-xs"
                            : "bg-white/30 text-white"
                        )}
                      >
                        <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                      </div>
                      <span className="absolute bottom-1 right-1 text-[8.5px] font-bold text-white bg-black/70 px-1 rounded">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Metadata */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className={cn("text-[10px] font-extrabold uppercase tracking-wider", isSelected ? "text-[#B99A62]" : "text-[#4B6778]")}>
                          {getCategory(video)}
                        </span>
                        {isSelected && (
                          <span className="inline-flex items-center gap-1 text-[9px] font-bold text-emerald-600 uppercase tracking-widest animate-pulse">
                            ● Now Playing
                          </span>
                        )}
                      </div>

                      <h5
                        className={cn(
                          "font-heading font-bold text-xs sm:text-sm line-clamp-1 leading-snug",
                          isSelected ? "text-[#17364B]" : "text-[#17364B] group-hover:text-[#B99A62]"
                        )}
                      >
                        {getTitle(video)}
                      </h5>

                      <p className="text-[11px] text-[#4B6778] line-clamp-1 mt-0.5">
                        {getDesc(video)}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Bottom Consultation CTA Box */}
            <div className="pt-2">
              <div className="p-4 rounded-2xl bg-[#E5EFF0] border border-[#CCDDE0] text-center space-y-2.5 shadow-xs">
                <div className="text-xs font-bold text-[#17364B]">
                  {locale === "te"
                    ? "ఈ చికిత్సలపై డాక్టర్ రాకేష్ వంశీ గారితో మాట్లాడాలనుకుంటున్నారా?"
                    : locale === "hi"
                      ? "क्या आप इन प्रक्रियाओं पर डॉ. राकेश वामसी से चर्चा करना चाहते हैं?"
                      : "Discuss these procedures with Dr. Rakesh Vamsi?"}
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Link
                    href="/book-appointment"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-white bg-[#B99A62] hover:bg-[#A3844C] shadow-md transition-all"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>
                      {locale === "te"
                        ? "అపాయింట్‌మెంట్ బుక్ చేయండి"
                        : locale === "hi"
                          ? "परामर्श बुक करें"
                          : "Book Consultation"}
                    </span>
                  </Link>
                  <a
                    href={`tel:${doctor.hospital.phone.replace(/\s+/g, "")}`}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold text-[#17364B] bg-white hover:bg-[#FAF8F5] border border-[#CCDDE0] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#B99A62]" />
                    <span className="hidden sm:inline">
                      {locale === "te" ? "కాల్ చేయండి" : locale === "hi" ? "कॉल करें" : "Call"}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div >
        </div >
      </div >
    </section >
  );
}
