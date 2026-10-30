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
    src: "/videos/Video-22107.mp4",
    titleEn: "Minimally Invasive Laser Urology",
    titleTe: "లేజర్ యూరాలజీ అత్యాధునిక శస్త్రచికిత్స",
    titleHi: "न्यूनतम इनवेसिव लेजर यूरोलॉजी",
    descEn: "Advanced precision laser technology for rapid recovery and minimal tissue trauma.",
    descTe: "తక్కువ కోత మరియు వేగవంతమైన కోలుకోవడానికి అధునాతన లేజర్ సాంకేతికత.",
    descHi: "शीघ्र स्वस्थ होने और न्यूनतम चीरे के लिए उन्नत लेजर तकनीक।",
    categoryEn: "Laser Surgery",
    categoryTe: "లేజర్ సర్జరీ",
    categoryHi: "लेजर सर्जरी",
    duration: "HD Video",
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
    categoryEn: "Robotic Surgery",
    categoryTe: "రోబోటిక్ సర్జరీ",
    categoryHi: "रोबोटिक सर्जरी",
    duration: "HD Video",
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
    categoryEn: "Endourology",
    categoryTe: "ఎండోయూరాలజీ",
    categoryHi: "एंडोयूरोलॉजी",
    duration: "HD Video",
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
    categoryEn: "Patient Care",
    categoryTe: "రోగి సంరక్షణ",
    categoryHi: "रोगी देखभाल",
    duration: "HD Video",
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
    categoryEn: "Operation Theater",
    categoryTe: "ఆపరేషన్ థియేటర్",
    categoryHi: "ऑपरेशन थियेटर",
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
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback
      });
    }
  };

  const getTitle = (v: VideoItem) =>
    locale === "te" ? v.titleTe : locale === "hi" ? v.titleHi : v.titleEn;

  const getDesc = (v: VideoItem) =>
    locale === "te" ? v.descTe : locale === "hi" ? v.descHi : v.descEn;

  const getCategory = (v: VideoItem) =>
    locale === "te" ? v.categoryTe : locale === "hi" ? v.categoryHi : v.categoryEn;

  return (
    <section className="py-16 lg:py-20 bg-slate-900 text-white relative overflow-hidden" id="clinical-videos">
      {/* Background Ambient Lighting & Glows */}
      <div className="absolute top-1/4 left-1/3 w-[550px] h-[550px] bg-brand-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-teal-500/20 text-brand-cyan border border-brand-teal-400/30">
            <Film className="w-3.5 h-3.5" />
            <span>
              {locale === "te"
                ? "క్లినికల్ వీడియో గ్యాలరీ"
                : locale === "hi"
                ? "क्लिनिकल वीडियो गैलरी"
                : "CLINICAL VIDEO SHOWCASE"}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
            {locale === "te" ? (
              <>
                శస్త్రచికిత్స నైపుణ్యం & <span className="text-brand-cyan">క్లినికల్ విధానాల వీడియోలు</span>
              </>
            ) : locale === "hi" ? (
              <>
                सर्जिकल सटीकता और <span className="text-brand-cyan">क्लिनिकल प्रक्रियाएं</span>
              </>
            ) : (
              <>
                Surgical Precision & <span className="text-brand-cyan">Clinical Procedures in Action</span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
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
            <div className="relative rounded-3xl overflow-hidden bg-black border border-slate-700/80 shadow-2xl group">
              {/* Aspect Ratio Container */}
              <div className="relative aspect-video w-full bg-black">
                <video
                  ref={videoRef}
                  key={activeVideo.src}
                  src={activeVideo.src}
                  controls
                  playsInline
                  autoPlay
                  className="w-full h-full object-contain"
                >
                  Your browser does not support HTML5 video.
                </video>
              </div>

              {/* Bottom Video Meta Bar */}
              <div className="p-4 sm:p-5 bg-gradient-to-t from-black via-slate-950/95 to-slate-900/90 border-t border-slate-800">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                  <div className="inline-flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-brand-teal-500/20 text-brand-cyan border border-brand-teal-500/40">
                      {getCategory(activeVideo)}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-400">
                      <Sparkles className="w-3 h-3 text-brand-cyan" />
                      HD 1080p
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs text-slate-400">
                    <Stethoscope className="w-3.5 h-3.5 text-brand-teal-400" />
                    <span>{doctor.fullName}</span>
                  </div>
                </div>

                <h3 className="font-heading font-bold text-lg sm:text-xl text-white">
                  {getTitle(activeVideo)}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                  {getDesc(activeVideo)}
                </p>
              </div>
            </div>

            {/* Quick Procedure Highlights */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-3 sm:p-3.5 text-center">
                <CheckCircle2 className="w-4 h-4 text-brand-cyan mx-auto mb-1" />
                <div className="text-[11px] sm:text-xs font-bold text-white">
                  {locale === "te" ? "తక్కువ కోత / నొప్పితక్కువ" : locale === "hi" ? "न्यूनतम चीरा" : "Keyhole Precision"}
                </div>
                <div className="text-[9.5px] text-slate-400 mt-0.5">
                  {locale === "te" ? "సూక్ష్మ రికవరీ" : locale === "hi" ? "शीघ्र रिकवरी" : "Rapid Healing"}
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-3 sm:p-3.5 text-center">
                <ShieldCheck className="w-4 h-4 text-brand-cyan mx-auto mb-1" />
                <div className="text-[11px] sm:text-xs font-bold text-white">
                  {locale === "te" ? "రోగి భద్రత & ఖచ్చితత్వం" : locale === "hi" ? "मरीज़ सुरक्षा" : "Patient Safety"}
                </div>
                <div className="text-[9.5px] text-slate-400 mt-0.5">
                  {locale === "te" ? "జాతీయ ప్రమాణాలు" : locale === "hi" ? "शीर्ष मानक" : "NABH Hospital"}
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-3 sm:p-3.5 text-center">
                <Volume2 className="w-4 h-4 text-brand-cyan mx-auto mb-1" />
                <div className="text-[11px] sm:text-xs font-bold text-white">
                  {locale === "te" ? "24/7 అత్యవసర సేవలు" : locale === "hi" ? "24/7 आपातकाल" : "24/7 Trauma"}
                </div>
                <div className="text-[9.5px] text-slate-400 mt-0.5">
                  {doctor.hospital.city}
                </div>
              </div>
            </div>
          </div>

          {/* Video Playlist Sidebar (Right 4-5 cols) */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-3">
            <div className="flex items-center justify-between pb-1">
              <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <span>{locale === "te" ? "వీడియోల జాబితా (5)" : locale === "hi" ? "वीडियो प्लेलिस्ट (5)" : "Clinical Playlist (5)"}</span>
              </h4>
              <span className="text-[11px] text-brand-cyan font-semibold">
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
                      "w-full p-3.5 rounded-2xl text-left transition-all duration-200 border flex items-center gap-3.5 group relative overflow-hidden",
                      isSelected
                        ? "bg-brand-navy-950/95 border-brand-teal-500 shadow-lg ring-1 ring-brand-teal-400"
                        : "bg-slate-800/80 hover:bg-slate-800 border-slate-700/60"
                    )}
                  >
                    {/* Thumbnail representation */}
                    <div className="relative w-16 h-14 sm:w-20 sm:h-16 rounded-xl bg-slate-900 border border-slate-700 flex-shrink-0 flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <div
                        className={cn(
                          "w-7 h-7 rounded-full flex items-center justify-center transition-transform group-hover:scale-110",
                          isSelected
                            ? "bg-brand-teal-500 text-white shadow-glow"
                            : "bg-white/20 text-white"
                        )}
                      >
                        <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                      </div>
                      <span className="absolute bottom-1 right-1 text-[8.5px] font-bold text-slate-300 bg-black/70 px-1 rounded">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Metadata */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className={cn("text-[10px] font-extrabold uppercase tracking-wider", isSelected ? "text-brand-cyan" : "text-slate-400")}>
                          {getCategory(video)}
                        </span>
                        {isSelected && (
                          <span className="inline-flex items-center gap-1 text-[9px] font-bold text-emerald-400 uppercase tracking-widest animate-pulse">
                            ● Now Playing
                          </span>
                        )}
                      </div>

                      <h5
                        className={cn(
                          "font-heading font-bold text-xs sm:text-sm line-clamp-1 leading-snug",
                          isSelected ? "text-white" : "text-slate-200 group-hover:text-white"
                        )}
                      >
                        {getTitle(video)}
                      </h5>

                      <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                        {getDesc(video)}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Bottom Consultation CTA Box */}
            <div className="pt-2">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-brand-navy-950 to-slate-900 border border-brand-teal-500/30 text-center space-y-2.5 shadow-xl">
                <div className="text-xs font-bold text-white">
                  {locale === "te"
                    ? "ఈ చికిత్సలపై డాక్టర్ రాకేష్ వంశీ గారితో మాట్లాడాలనుకుంటున్నారా?"
                    : locale === "hi"
                    ? "क्या आप इन प्रक्रियाओं पर डॉ. राकेश वामसी से चर्चा करना चाहते हैं?"
                    : "Discuss these procedures with Dr. Rakesh Vamsi?"}
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Link
                    href="/book-appointment"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-brand-navy-950 bg-gradient-to-r from-brand-teal-400 to-brand-cyan shadow-md hover:shadow-glow transition-all"
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
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold text-slate-300 bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-brand-cyan" />
                    <span className="hidden sm:inline">
                      {locale === "te" ? "కాల్ చేయండి" : locale === "hi" ? "कॉल करें" : "Call"}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
