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
    src: "/videos/Video-22107.mp4",
    titleEn: "Minimally Invasive Laser Urology",
    titleTe: "లేజర్ యూరాలజీ అత్యాధునిక శస్త్రచికిత్స",
    titleHi: "न्यूनतम इनवेसिव लेजर यूरोलॉजी",
    descEn: "Advanced precision laser technology for rapid recovery and minimal tissue trauma.",
    descTe: "తక్కువ కోత మరియు వేగవంతమైన కోలుకోవడానికి అధునాతన లేజర్ సాంకేతికత.",
    descHi: "शीघ्र स्वस्थ होने और न्यूनतम चीरे के लिए उन्नत लेजर तकनीक।",
    tagEn: "Laser Surgery",
    tagTe: "లేజర్ సర్జరీ",
    tagHi: "लेजर सर्जरी",
  },
  {
    id: "v2",
    src: "/videos/Video-35468.mp4",
    titleEn: "Robotic Precision in Urological Care",
    titleTe: "యూరాలజీలో రోబోటిక్ సర్జికల్ ప్రెసిషన్",
    titleHi: "यूरोलॉजिकल केयर में रोबोटिक सटीकता",
    descEn: "High-definition 3D visualization and sub-millimeter robotic surgical dexterity.",
    descTe: "హై-డెఫినిషన్ 3D రోబోటిక్ సాంకేతికతతో ఖచ్చితమైన శస్త్రచికిత్స.",
    descHi: "हाई-डेफिनिशन 3D विज़ुअलाइज़ेशन और सूक्ष्म रोबोटिक सटीकता।",
    tagEn: "Robotics",
    tagTe: "రోబోటిక్స్",
    tagHi: "रोबोटिक्स",
  },
  {
    id: "v3",
    src: "/videos/Video-42490.mp4",
    titleEn: "Advanced Kidney Stone Fragmentation",
    titleTe: "కిడ్నీ రాళ్ల అత్యాధునిక లేజర్ చికిత్స (RIRS/PCNL)",
    titleHi: "उन्नत गुर्दे की पथरी लेजर विखंडन",
    descEn: "Painless clearance of complex kidney and ureteric stones without large incisions.",
    descTe: "పెద్ద కోతలు లేకుండా మూత్రపిండాల రాళ్లను సురక్షితంగా తొలగించే విధానం.",
    descHi: "बिना बड़े चीरे के जटिल गुर्दे की पथरी का दर्द रहित निष्कासन।",
    tagEn: "Endourology",
    tagTe: "ఎండోయూరాలజీ",
    tagHi: "एंडोयूरोलॉजी",
  },
  {
    id: "v4",
    src: "/videos/Video-53950.mp4",
    titleEn: "Compassionate Clinical Consultation",
    titleTe: "వ్యక్తిగత & గోప్యతా రోగి సంప్రదింపులు",
    titleHi: "सहानुभूतिपूर्ण रोगी परामर्श",
    descEn: "Patient-centered discussions, confidentiality, and personalized treatment roadmaps.",
    descTe: "పూర్తి గోప్యతతో నైతిక మరియు కరుణతో కూడిన వైద్య సంప్రదింపులు.",
    descHi: "मरीज़-केंद्रित परामर्श, पूर्ण गोपनीयता और व्यक्तिगत उपचार योजना।",
    tagEn: "Patient Care",
    tagTe: "రోగి సంరక్షణ",
    tagHi: "रोगी देखभाल",
  },
  {
    id: "v5",
    src: "/videos/Video-94510.mp4",
    titleEn: "KIMS Hospital Operating Excellence",
    titleTe: "కిమ్స్ హాస్పిటల్ నెల్లూరు అత్యాధునిక థియేటర్ సౌకర్యాలు",
    titleHi: "किम्स हॉस्पिटल ऑपरेशन थियेटर उत्कृष्टता",
    descEn: "State-of-the-art modular operating suites equipped for 24/7 emergency care.",
    descTe: "24/7 అత్యవసర సదుపాయాలతో కూడిన అత్యాధునిక మాడ్యులర్ ఆపరేషన్ థియేటర్లు.",
    descHi: "24/7 आपातकालीन देखभाल से सुसज्जित अत्याधुनिक मॉड्यूलर ऑपरेशन थिएटर।",
    tagEn: "KIMS Nellore",
    tagTe: "కిమ్స్ నెల్లూరు",
    tagHi: "किम्स नेल्लोर",
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

                                    < div className = "grid grid-cols-1 sm:grid-cols-5 gap-2" >
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
