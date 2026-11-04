"use client";

import React, { useState, useMemo } from "react";
import {
  Quote,
  ShieldCheck,
  MessageSquarePlus,
  CheckCircle2,
  X,
  Heart,
} from "lucide-react";
import { getLocalizedTestimonials } from "@/data/localizedTestimonials";
import { getLocalizedDoctorData } from "@/data/localizedDoctor";
import { useLanguage } from "@/context/LanguageContext";

export default function TestimonialsPage() {
  const { locale, t } = useLanguage();
  const doctor = getLocalizedDoctorData(locale);
  const testimonials = getLocalizedTestimonials(locale);

  const [selectedFilter, setSelectedFilter] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [submittedFeedback, setSubmittedFeedback] = useState(false);
  const [feedbackForm, setFeedbackForm] = useState({
    name: "",
    location: "",
    treatment: "Kidney Stones",
    feedback: "",
  });

  const filterTabs = useMemo(() => {
    if (locale === "te") {
      return [
        { id: "all", label: "అన్ని అనుభవాలు" },
        { id: "kidney", label: "కిడ్నీ రాళ్లు" },
        { id: "prostate", label: "ప్రోస్టేట్ సంరక్షణ" },
        { id: "laparoscopic", label: "లాపరోస్కోపిక్ సర్జరీ" },
        { id: "reproductive", label: "పురుషుల ఆరోగ్యం" },
      ];
    }
    if (locale === "hi") {
      return [
        { id: "all", label: "सभी अनुभव" },
        { id: "kidney", label: "गुर्दे की पथरी" },
        { id: "prostate", label: "प्रोस्टेट देखभाल" },
        { id: "laparoscopic", label: "लेप्रोस्कोपिक सर्जरी" },
        { id: "reproductive", label: "पुरुषों का स्वास्थ्य" },
      ];
    }
    return [
      { id: "all", label: "All Stories" },
      { id: "kidney", label: "Kidney Stones" },
      { id: "prostate", label: "Prostate Care" },
      { id: "laparoscopic", label: "Laparoscopic Surgery" },
      { id: "reproductive", label: "Men's Health" },
    ];
  }, [locale]);

  const filteredTestimonials = useMemo(() => {
    return testimonials.filter((item) => {
      if (selectedFilter === "all") return true;
      if (selectedFilter === "kidney") return item.id === "t1";
      if (selectedFilter === "prostate") return item.id === "t2";
      if (selectedFilter === "laparoscopic") return item.id === "t3";
      if (selectedFilter === "reproductive") return item.id === "t4";
      return true;
    });
  }, [testimonials, selectedFilter]);

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedFeedback(true);
  };

  return (
        <div className="bg-[#F6F3EC] text-[#17364B] min-h-screen">
          {/* 1. Hero */}
          <section className="relative overflow-hidden bg-[#F6F3EC] text-[#17364B] pt-12 pb-16 lg:pt-16 lg:pb-20 text-center border-b border-[#E5DFD3]">
            <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#E5EFF0]/50 rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E5EFF0] text-[#17364B] border border-[#CCDDE0]">
                    <Heart className="w-3.5 h-3.5 text-[#B99A62]" />
                    <span>
                      {locale === "te"
                        ? "రోగుల అనుభవాలు"
                        : locale === "hi"
                          ? "मरीजों के अनुभव"
                          : "PATIENT VOICES"}
                    </span>
                  </div>

                  <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#17364B] tracking-tight leading-tight">
                    {locale === "te" ? (
                      <>
                        రోగుల విజయగాథలు & <span className="text-[#B99A62]">వైద్య అనుభవాలు</span>
                      </>
                    ) : locale === "hi" ? (
                      <>
                        मरीजों की कहानियाँ और <span className="text-[#B99A62]">उपचार अनुभव</span>
                      </>
                    ) : (
                      <>
                        Patient Stories & <span className="text-[#B99A62]">Care Experiences</span>
                      </>
                    )}
                  </h1>

                  <p className="text-sm sm:text-base text-[#3A5668] max-w-2xl mx-auto leading-relaxed">
                    {locale === "te"
                      ? `${doctor.hospital.city} లోని ${doctor.hospital.name} లో ${doctor.fullName} గారి ఆధ్వర్యంలో లేజర్, ఎండోస్కోపిక్ మరియు రోబోటిక్ శస్త్రచికిత్సల ద్వారా సాంత్వన పొందిన రోగుల నిజమైన అనుభవాలు.`
                      : locale === "hi"
                        ? `${doctor.hospital.city} स्थित ${doctor.hospital.name} में ${doctor.fullName} द्वारा लेज़र, एंडोस्कोपिक और रोबोटिक सर्जिकल देखभाल प्राप्त करने वाले रोगियों के वास्तविक अनुभव।`
                        : `Real experiences from patients treated with minimally invasive laser, endoscopic, and robotic surgical care by ${doctor.fullName} at ${doctor.hospital.name}, ${doctor.hospital.city}.`}
                  </p>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setModalOpen(true)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#B99A62] hover:bg-[#A3844C] shadow-sm transition-all"
                    >
                      <MessageSquarePlus className="w-4 h-4 text-white" />
                      <span>
                        {locale === "te"
                            ? "మీ చికిత్స అనుభవాన్ని పంచుకోండి"
                            : locale === "hi"
                        ? "अपना उपचार अनुभव साझा करें"
                    : "Share Your Treatment Feedback"}
                      </span>
                </button>
              </div>
        </div>
      </section>

      {/* 2. Filter Pills */}
      <div className="bg-[#F6F3EC]/95 border-b border-[#E5DFD3] sticky top-[69px] z-30 shadow-xs backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-3">
            {filterTabs.map((tab) => {
              const isSelected = selectedFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedFilter(tab.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    isSelected
                      ? "bg-[#B99A62] text-white font-bold shadow-xs"
                      : "bg-white text-[#17364B] border border-[#DCD5C9] hover:border-[#B99A62]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
        </div>

                    {/* 3. Testimonials Grid */}
                    <section className="py-14 bg-[#F6F3EC] min-h-[50vh]">
                      <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {filteredTestimonials.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-7 border border-[#E5DFD3] shadow-card hover-lift transition-all flex flex-col justify-between space-y-6 text-[#17364B]"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#E5EFF0] border border-[#CCDDE0] text-[#B99A62] flex items-center justify-center">
                      <Quote className="w-5 h-5 fill-current" />
                    </div>
                    <div className="flex items-center gap-1 text-[#17364B] bg-[#E5EFF0] px-2.5 py-1 rounded-full text-[11px] font-bold border border-[#CCDDE0]">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#B99A62]" />
                      <span>
                        {locale === "te"
                          ? "ధృవీకరించబడిన క్లినికల్ రోగి"
                          : locale === "hi"
                            ? "सत्यापित क्लिनिकल रोगी"
                            : "Verified Clinical Patient"}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-[#3A5668] leading-relaxed italic">
                    &ldquo;{item.story}&rdquo;
                  </p>
                </div>

                        <div className="pt-4 border-t border-[#E5DFD3] flex items-center justify-between text-xs">
                          <div>
                            <div className="font-heading font-extrabold text-sm text-[#17364B]">
                              {locale === "te"
                                ? `రోగి ${item.patientInitials}`
                                : locale === "hi"
                                  ? `रोगी ${item.patientInitials}`
                                  : `Patient ${item.patientInitials}`}
                            </div>
                            <div className="text-[11px] text-[#4B6778]">
                              {item.location} • {item.date}
                            </div>
                          </div>
                          <span className="font-bold text-[#17364B] bg-[#FAF8F5] px-3 py-1 rounded-full border border-[#E5DFD3]">
                            {item.treatmentCategory}
                          </span>
                        </div>
                      </div>
            ))}
                </div>

        {/* Privacy Note */}
        <div className="mt-8 text-center text-xs text-[#4B6778] max-w-xl mx-auto">
          {locale === "te"
            ? "* వైద్య నీతి నియమాలు మరియు రోగి గోప్యతా నిబంధనల ప్రకారం, రోగుల పూర్తి పేర్లు మరియు సున్నితమైన గుర్తింపు వివరాలు భద్రపరచబడ్డాయి."
            : locale === "hi"
              ? "* चिकित्सा नैतिकता और रोगी गोपनीयता नियमों के अनुसार, रोगियों के पूरे नाम और संवेदनशील पहचान विवरण सुरक्षित रखे गए हैं।"
              : "* In adherence with medical ethics and patient confidentiality regulations, full patient names and sensitive medical identifiers are protected."}
        </div>
      </div>
    </section>

          {/* Feedback Submission Modal */}
          {modalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#17364B]/60 backdrop-blur-sm animate-in fade-in">
              <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-card border border-[#E5DFD3] space-y-4 relative text-[#17364B]">
                <button
                  type="button"
                  onClick={() => {
                    setModalOpen(false);
                    setSubmittedFeedback(false);
                  }}
                  className="absolute top-4 right-4 text-[#4B6778] hover:text-[#17364B]"
                >
                  <X className="w-5 h-5" />
                </button>

                <h3 className="font-heading font-extrabold text-lg text-[#17364B]">
                  {locale === "te"
                    ? "మీ చికిత్స అభిప్రాయాన్ని తెలియజేయండి"
                    : locale === "hi"
                      ? "अपना उपचार फीडबैक भेजें"
                      : "Submit Your Patient Feedback"}
                </h3>

                    {submittedFeedback ? (
                      <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs text-emerald-800 space-y-2 text-center">
                        <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                        <h4 className="font-bold text-sm text-[#17364B]">
                          {locale === "te"
                            ? "మీ అభిప్రాయానికి ధన్యవాదాలు!"
                            : locale === "hi"
                              ? "आपकी प्रतिक्रिया के लिए धन्यवाद!"
                              : "Thank You for Your Feedback!"}
                        </h4>
                        <p className="text-[#3A5668]">
                          {locale === "te"
                            ? "మీ అభిప్రాయం మాకు అందింది మరియు మా క్లినికల్ డెస్క్ ద్వారా పరిశీలించబడుతుంది. మీ ఆరోగ్య ప్రయాణాన్ని పంచుకున్నందుకు ధన్యవాదాలు."
                            : locale === "hi"
                              ? "आपकी प्रतिक्रिया प्राप्त हो गई है और हमारे क्लिनिकल डेस्क द्वारा इसकी समीक्षा की जाएगी। अपने देखभाल अनुभव को साझा करने के लिए धन्यवाद।"
                              : "Your feedback has been received and will be reviewed by our clinical desk. We appreciate you sharing your care journey."}
                        </p>
                      </div>
                    ) : (
              <form onSubmit={handleFeedbackSubmit} className="space-y-3 text-xs">
                <div>
                  <label className="font-bold text-[#17364B] block mb-1">
                    {locale === "te"
                      ? "మీ పేరు (పబ్లిక్‌గా సంక్షిప్త అక్షరాలు మాత్రమే కనిపిస్తాయి)"
                      : locale === "hi"
                        ? "आपका नाम (सार्वजनिक रूप से केवल इनिशियल दिखेंगे)"
                        : "Your Name (Initials will be shown publicly)"}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. S. Kumar"
                    value={feedbackForm.name}
                    onChange={(e) =>
                      setFeedbackForm({ ...feedbackForm, name: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-[#DCD5C9] bg-[#FAF8F5] text-[#17364B] placeholder-[#8BA4B2] focus:outline-none focus:ring-2 focus:ring-[#B99A62]"
                  />
                </div>

                <div>
                  <label className="font-bold text-[#17364B] block mb-1">
                    {locale === "te"
                      ? "నగరం / పట్టణం"
                      : locale === "hi"
                        ? "शहर / कस्बा"
                        : "City / Town"}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={
                      locale === "te"
                        ? "ఉదాహరణ: నెల్లూరు, ఆంధ్రప్రదేశ్"
                        : locale === "hi"
                          ? "उदा: नेल्लोर, आंध्र प्रदेश"
                          : "e.g. Nellore, Andhra Pradesh"
                    }
                    value={feedbackForm.location}
                    onChange={(e) =>
                      setFeedbackForm({ ...feedbackForm, location: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-[#DCD5C9] bg-[#FAF8F5] text-[#17364B] placeholder-[#8BA4B2] focus:outline-none focus:ring-2 focus:ring-[#B99A62]"
                  />
                </div>

                <div>
                  <label className="font-bold text-[#17364B] block mb-1">
                    {locale === "te"
                      ? "పొందిన చికిత్స"
                      : locale === "hi"
                        ? "प्राप्त उपचार"
                        : "Treatment Received"}
                  </label>
                  <select
                    value={feedbackForm.treatment}
                    onChange={(e) =>
                      setFeedbackForm({
                        ...feedbackForm,
                        treatment: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-[#DCD5C9] bg-[#FAF8F5] text-[#17364B] focus:outline-none focus:ring-2 focus:ring-[#B99A62]"
                  >
                    <option className="bg-white text-[#17364B]">
                      {locale === "te"
                        ? "కిడ్నీలో రాళ్లు (లేజర్ లిథోట్రిప్సీ / RIRS)"
                        : locale === "hi"
                          ? "किडनी स्टोन (लेज़र लिथोट्रिप्सी / RIRS)"
                          : "Kidney Stones (Laser Lithotripsy)"}
                    </option>
                    <option className="bg-white text-[#17364B]">
                      {locale === "te"
                        ? "ప్రోస్టేట్ సంరక్షణ (లేజర్ సర్జరీ)"
                        : locale === "hi"
                          ? "प्रोस्टेट देखभाल (लेज़र सर्जरी)"
                          : "Prostate Care (Laser Surgery)"}
                    </option>
                    <option className="bg-white text-[#17364B]">
                      {locale === "te"
                        ? "లాపరోస్కోపిక్ / రోబోటిక్ సర్జరీ"
                        : locale === "hi"
                          ? "लेप्रोस्कोपिक / रोबोटिक सर्जरी"
                          : "Laparoscopic / Robotic Surgery"}
                    </option>
                    <option className="bg-white text-[#17364B]">
                      {locale === "te"
                        ? "పురుషుల పునరుత్పత్తి & లైంగిక ఆరోగ్యం"
                        : locale === "hi"
                          ? "पुरुष प्रजनन एवं यौन स्वास्थ्य"
                          : "Male Reproductive Health"}
                    </option>
                    <option className="bg-white text-[#17364B]">
                      {locale === "te"
                        ? "సాధారణ యూరాలజీ సంప్రదింపు"
                        : locale === "hi"
                          ? "सामान्य यूरोलॉजी परामर्श"
                          : "General Urology Consultation"}
                    </option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-[#17364B] block mb-1">
                    {locale === "te"
                      ? "మీ అనుభవం & సంరక్షణ కథనం"
                      : locale === "hi"
                        ? "आपका अनुभव और देखभाल की कहानी"
                        : "Your Experience & Care Story"}
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder={
                      locale === "te"
                        ? "మీ సంప్రదింపు, చికిత్స సౌకర్యం మరియు డాక్టర్ గారి సంరక్షణ గురించి వివరించండి..."
                        : locale === "hi"
                          ? "अपने परामर्श, उपचार सुविधा और डॉक्टर की देखभाल के बारे में लिखें..."
                          : "Describe your consultation, treatment comfort, and doctor care..."
                    }
                    value={feedbackForm.feedback}
                    onChange={(e) =>
                      setFeedbackForm({
                        ...feedbackForm,
                        feedback: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-[#DCD5C9] bg-[#FAF8F5] text-[#17364B] placeholder-[#8BA4B2] focus:outline-none focus:ring-2 focus:ring-[#B99A62] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-full font-bold text-white bg-[#B99A62] hover:bg-[#A3844C] transition-all shadow-sm text-xs"
                >
                  {locale === "te"
                    ? "ధృవీకరించబడిన అభిప్రాయాన్ని సమర్పించండి"
                    : locale === "hi"
                      ? "सत्यापित फीडबैक सबमिट करें"
                      : "Submit Verified Feedback"}
                </button>
              </form>
                )}
          </div>
      </div>
    )
  }
    </div >
  );
}
