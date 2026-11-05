"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { X, Play, Hospital, Film, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getLocalizedDoctorData } from "@/data/localizedDoctor";
import { cn } from "@/lib/utils";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ClinicalVideo {
  id: string;
  src: string;
  titleEn: string;
  titleTe: string;
  titleHi: string;
  descEn: string;
  descTe: string;
  descHi: string;
  tagEn: string;
  tagTe: string;
  tagHi: string;
}

const CLINICAL_VIDEOS: ClinicalVideo[] = [
  {
    id: "v1",
    src: "/videos/urologistduty.mp4",
    titleEn: "Role & Scope of a Consultant Urologist",
    titleTe: "కన్సల్టెంట్ యూరాలజిస్ట్ పాత్ర & చికిత్సల పరిధి",
    titleHi: "कंसल्टेंट यूरोलॉजिस्ट की भूमिका और उपचार का दायरा",
    descEn: "A comprehensive clinical guide on conditions treated by a urologist, advanced diagnostics, and when to seek expert consultation.",
    descTe: "యూరాలజిస్ట్ చికిత్స చేసే వ్యాధులు, అధునాతన నిర్ధారణ పద్ధతులు మరియు నిపుణుల సలహా ఎప్పుడు తీసుకోవాలో సమగ్ర సమాచారం.",
    descHi: "यूरोलॉजिस्ट द्वारा उपचारित स्थितियों, उन्नत जांच और विशेषज्ञ परामर्श कब लें, इस पर एक व्यापक नैदानिक मार्गदर्शिका।",
    tagEn: "Urology Care",
    tagTe: "యూరాలజీ సంరక్షణ",
    tagHi: "यूरोलॉजी देखभाल",
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
    tagEn: "Urinary Flow",
    tagTe: "మూత్ర ప్రవాహం",
    tagHi: "मूत्र प्रवाह",
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
    tagEn: "Incontinence",
    tagTe: "మూత్ర నియంత్రణ",
    tagHi: "मूत्र नियंत्रण",
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
    tagEn: "Male Fertility",
    tagTe: "పురుషుల సంతానోత్పత్తి",
    tagHi: "पुरुष प्रजनन",
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
    tagEn: "Men's Health",
    tagTe: "పురుషుల ఆరోగ్యం",
    tagHi: "पुरुष स्वास्थ्य",
  },
];

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  const { locale, t } = useLanguage();
  const doctor = getLocalizedDoctorData(locale);
  const [selectedVideo, setSelectedVideo] = useState<ClinicalVideo>(CLINICAL_VIDEOS[0]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentTitle =
    locale === "te"
      ? selectedVideo.titleTe
      : locale === "hi"
        ? selectedVideo.titleHi
        : selectedVideo.titleEn;

  const currentDesc =
    locale === "te"
      ? selectedVideo.descTe
      : locale === "hi"
        ? selectedVideo.descHi
        : selectedVideo.descEn;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        className="fixed inset-0 bg-[#17364B]/70 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#E5DFD3] z-10 animate-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col text-[#17364B]">
        {/* Header */}
        <div className="p-4 sm:p-5 bg-[#F6F3EC] text-[#17364B] flex items-center justify-between border-b border-[#E5DFD3] flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#E5EFF0] border border-[#CCDDE0] flex items-center justify-center text-[#B99A62]">
              <Film className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-base sm:text-lg text-[#17364B] flex items-center gap-2">
                <span>{t("home.hero.videoModalTitle", "Clinical Videos & Surgical Expertise")}</span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-[#E5EFF0] text-[#17364B] border border-[#CCDDE0]">
                  <Sparkles className="w-3 h-3 text-[#B99A62]" />
                  HD Clinical
                </span>
              </h3>
              <p className="text-xs text-[#4B6778]">
                {doctor.fullName} | {doctor.designation} | {doctor.hospital.name}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-[#4B6778] hover:text-[#17364B] hover:bg-[#E5EFF0] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Container */}
        <div className="relative w-full bg-black flex items-center justify-center overflow-hidden flex-shrink-0 max-h-[50vh] sm:max-h-[54vh]">
          <video
            key={selectedVideo.src}
            src={selectedVideo.src}
            controls
            playsInline
            preload="metadata"
            className="w-full max-h-[50vh] sm:max-h-[54vh] object-contain mx-auto"
          >
            Your browser does not support HTML5 video.
          </video>
        </div>

        {/* Video Info and Playlist Selector */}
        <div className="p-4 sm:p-5 bg-[#FAF8F5] flex-1 overflow-y-auto space-y-3">
          {/* Active video details card */}
          <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-[#E5DFD3] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[#17364B]">
            <div className="space-y-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E5EFF0] text-[#17364B] border border-[#CCDDE0] flex-shrink-0">
                  {locale === "te"
                    ? selectedVideo.tagTe
                    : locale === "hi"
                      ? selectedVideo.tagHi
                      : selectedVideo.tagEn}
                </span>
                <span className="text-xs text-[#A0B0BA]">•</span>
                <span className="text-xs font-semibold text-[#4B6778] truncate">
                  {locale === "te"
                    ? "డాక్టర్ రాకేష్ వంశీ వివరణ"
                    : locale === "hi"
                      ? "डॉ. राकेश वामसी द्वारा विवरण"
                      : "Clinical Explanation"}
                </span>
              </div>
              <h4 className="font-heading font-bold text-base sm:text-lg text-[#17364B] leading-snug">
                {currentTitle}
              </h4>
              <p className="text-xs sm:text-sm text-[#4B6778] leading-relaxed">
                {currentDesc}
              </p>
            </div>
          </div>

          {/* Playlist selector bar */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#4B6778]">
                {locale === "te"
                  ? "అన్ని క్లినికల్ వీడియోలు (5 ఎంచుకోండి):"
                  : locale === "hi"
                    ? "सभी क्लिनिकल वीडियो (5 चुनें):"
                    : "Select Clinical Video (5 Available):"}
              </span>
              <span className="text-[11px] text-[#B99A62] font-semibold">
                {locale === "te" ? "ప్లే చేయడానికి క్లిక్ చేయండి" : locale === "hi" ? "चलाने के लिए क्लिक करें" : "Click to switch"}
              </span>
            </div>

            < div className="grid grid-cols-1 sm:grid-cols-5 gap-2" >
              {
                CLINICAL_VIDEOS.map((vid, idx) => {
                  const isCurrent = vid.id === selectedVideo.id;
                  const vidTag =
                    locale === "te" ? vid.tagTe : locale === "hi" ? vid.tagHi : vid.tagEn;
                  const vidTitle =
                    locale === "te" ? vid.titleTe : locale === "hi" ? vid.titleHi : vid.titleEn;
                  return (
                    <button
                      key={vid.id}
                      type="button"
                      onClick={() => setSelectedVideo(vid)}
                      className={cn(
                        "p-2.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between gap-1 shadow-xs",
                        isCurrent
                          ? "bg-white text-[#17364B] border-2 border-[#B99A62] ring-1 ring-[#B99A62]"
                          : "bg-white text-[#17364B] hover:bg-[#F6F3EC] border-[#E5DFD3]"
                      )}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className={cn("text-[10px] font-extrabold uppercase tracking-wider", isCurrent ? "text-[#B99A62]" : "text-[#4B6778]")}>
                          {vidTag}
                        </span>
                        <div
                          className={cn(
                            "w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0",
                            isCurrent ? "bg-[#B99A62] text-white font-bold" : "bg-[#E5EFF0] text-[#17364B]"
                          )}
                        >
                          <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                        </div>
                      </div>
                      <span className="font-semibold text-[11px] line-clamp-1 leading-tight text-[#17364B]">
                        0{idx + 1}. {vidTitle}
                      </span>
                    </button>
                  );
                })}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-3.5 sm:p-4 bg-[#F6F3EC] border-t border-[#E5DFD3] flex flex-col sm:flex-row items-center justify-between gap-3 flex-shrink-0">
          <div className="flex items-center gap-2 text-xs text-[#4B6778]">
            <Hospital className="w-4 h-4 text-[#B99A62] flex-shrink-0" />
            <span className="font-medium">
              {doctor.hospital.name}, {doctor.hospital.city} | {doctor.hospital.hours}
            </span>
          </div>
          <Link
            href="/book-appointment"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#B99A62] hover:bg-[#A3844C] shadow-sm transition-all text-center"
          >
            {t("home.hero.ctaAppointment", "Book Appointment")} →
          </Link>
        </div>
      </div>
    </div>
  );
}
