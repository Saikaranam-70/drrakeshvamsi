"use client";

import React from "react";
import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";
import { getLocalizedDoctorData } from "@/data/localizedDoctor";
import { useLanguage } from "@/context/LanguageContext";

export default function TermsAndConditionsClient() {
  const { locale } = useLanguage();
  const doctor = getLocalizedDoctorData(locale);

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-teal-700 hover:text-brand-teal-600 mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>
            {locale === "te"
              ? "హోమ్‌పేజీకి తిరిగి వెళ్లండి"
              : locale === "hi"
              ? "होमपेज पर वापस जाएं"
              : "Back to Home"}
          </span>
        </Link>

        <div className="space-y-4 border-b border-slate-200 pb-8">
          <div className="w-12 h-12 rounded-xl bg-brand-teal-50 text-brand-teal-600 flex items-center justify-center">
            <FileText className="w-6 h-6" />
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-navy-900">
            {locale === "te"
              ? "వినియోగ నిబంధనలు & వైద్య డిస్క్లైమర్"
              : locale === "hi"
              ? "उपयोग की शर्तें एवं चिकित्सा अस्वीकरण"
              : "Terms of Use & Medical Disclaimer"}
          </h1>
          <p className="text-sm text-slate-500">
            {locale === "te"
              ? "చివరిగా నవీకరించబడింది: అక్టోబర్ 2024 • UROANDROGUY"
              : locale === "hi"
              ? "अंतिम अद्यतन: अक्टूबर 2024 • UROANDROGUY"
              : "Last updated: October 2024 • UROANDROGUY"}
          </p>
        </div>

        <div className="prose prose-slate max-w-none pt-8 space-y-6 text-sm text-slate-700 leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-heading font-bold text-lg text-brand-navy-900">
              {locale === "te"
                ? "1. వైద్య డిస్క్లైమర్ & విద్యా ప్రయోజనం"
                : locale === "hi"
                ? "1. चिकित्सा अस्वीकरण एवं शैक्षणिक उद्देश्य"
                : "1. Medical Disclaimer & Educational Purpose"}
            </h2>
            <p>
              {locale === "te"
                ? `ఈ వెబ్‌సైట్‌లో ప్రచురించబడిన కంటెంట్—వ్యాసాలు, చికిత్సల సమాచారం, లక్షణాల జాబితాలు మరియు కోలుకునే వివరాలతో సహా—కేవలం సమాచార మరియు విద్యా ప్రయోజనాల కోసం మాత్రమే అందించబడింది. ఇది వైద్య నిర్ధారణ, వ్యక్తిగత వైద్య సలహా లేదా ${doctor.fullName} లేదా ఇతర లైసెన్స్ పొందిన వైద్యుడి ప్రత్యక్ష వ్యక్తిగత పరీక్షకు ప్రత్యామ్నాయం కాదు.`
                : locale === "hi"
                ? `इस वेबसाइट पर प्रकाशित सामग्री—जिसमें लेख, उपचार अवलोकन, लक्षण चेकलिस्ट और रिकवरी नोट्स शामिल हैं—केवल शैक्षिक और सूचनात्मक उद्देश्यों के लिए प्रदान की गई है। यह प्रत्यक्ष चिकित्सा निदान, अनुकूलित चिकित्सा सलाह या ${doctor.fullName} अथवा किसी अन्य लाइसेंस प्राप्त चिकित्सक द्वारा व्यक्तिगत मूल्यांकन का विकल्प नहीं है।`
                : `The content published on this website—including articles, treatment overviews, symptom checklists, and recovery notes—is provided exclusively for educational and informational purposes. It is not intended as medical diagnosis, customized medical advice, or a substitute for direct in-person evaluation by ${doctor.fullName} or another licensed physician.`}
            </p>
            <p className="font-semibold text-brand-navy-900">
              {locale === "te"
                ? "ఈ వెబ్‌సైట్‌లో చదివిన సమాచారం ఆధారంగా వృత్తిపరమైన వైద్య సలహాను ఎప్పుడూ విస్మరించవద్దు లేదా వైద్య సంప్రదింపులను ఆలస్యం చేయవద్దు."
                : locale === "hi"
                ? "इस वेबसाइट पर पढ़ी गई किसी बात के आधार पर कभी भी पेशेवर चिकित्सा सलाह की उपेक्षा न करें और न ही चिकित्सीय परामर्श लेने में देरी करें।"
                : "Never disregard professional medical advice or delay seeking medical attention because of something you have read on this website."}
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading font-bold text-lg text-brand-navy-900">
              {locale === "te"
                ? "2. అత్యవసర వైద్య పరిస్థితులు"
                : locale === "hi"
                ? "2. आपातकालीन चिकित्सा स्थितियां"
                : "2. Medical Emergencies"}
            </h2>
            <p>
              {locale === "te"
                ? `ఈ వెబ్‌సైట్ తీవ్రమైన అత్యవసర వైద్య పరిస్థితుల కోసం 24/7 పర్యవేక్షించబడదు. మీరు భరించలేని తీవ్రమైన నొప్పి, చలి మరియు వణుకుతో కూడిన అధిక జ్వరం, మూత్రం పూర్తిగా ఆగిపోవడం లేదా తీవ్రమైన గాయాలతో బాధపడుతుంటే, దయచేసి వెంటనే ${doctor.hospital.city} లోని ${doctor.hospital.name} 24/7 ఎమర్జెన్సీ విభాగాన్ని సంప్రదించండి లేదా అత్యవసర అంబులెన్స్ సేవలను సంప్రదించండి.`
                : locale === "hi"
                ? `यह वेबसाइट तीव्र चिकित्सीय संकटों के लिए 24/7 मॉनिटर नहीं की जाती है। यदि आप अत्यधिक गंभीर दर्द, कंपकंपी के साथ तेज बुखार, पेशाब करने में असमर्थता या गंभीर आघात का सामना कर रहे हैं, तो कृपया तुरंत ${doctor.hospital.name} ${doctor.hospital.city} के 24/7 इमरजेंसी विभाग में जाएं या स्थानीय आपातकालीन सेवाओं को कॉल करें।`
                : `This website is not monitored 24/7 for acute medical crises. If you are experiencing severe, unbearable pain, high fever with shaking chills, acute inability to pass urine, or severe trauma, please visit the 24/7 Emergency Department at ${doctor.hospital.name} ${doctor.hospital.city} immediately or dial your local emergency services.`}
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading font-bold text-lg text-brand-navy-900">
              {locale === "te"
                ? "3. ఆన్‌లైన్ అపాయింట్‌మెంట్ అభ్యర్థనలు"
                : locale === "hi"
                ? "3. ऑनलाइन अपॉइंटमेंट अनुरोध"
                : "3. Online Appointment Requests"}
            </h2>
            <p>
              {locale === "te"
                ? "ఈ పోర్టల్ ద్వారా అపాయింట్‌మెంట్‌ను బుక్ చేసుకోవడం అనేది సంప్రదింపు స్లాట్ కోసం ఒక అభ్యర్థన మాత్రమే. వైద్యుల షెడ్యూల్ మరియు ఆసుపత్రి రిజిస్ట్రేషన్ నిబంధనల ఆధారంగా తుది నిర్ధారణ జరుగుతుంది. అత్యవసర శస్త్రచికిత్సలకు ప్రాధాన్యత ఇవ్వవలసి వచ్చినప్పుడు సంప్రదింపు సమయాలను సర్దుబాటు చేసే హక్కు మాకు ఉంది."
                : locale === "hi"
                ? "इस पोर्टल के माध्यम से अपॉइंटमेंट बुक करना केवल एक परामर्श स्लॉट के लिए अनुरोध है। अंतिम पुष्टि डॉक्टर के शेड्यूल और अस्पताल पंजीकरण प्रोटोकॉल के अधीन है। आपातकालीन सर्जरी को प्राथमिकता मिलने पर हमारे पास परामर्श समय को पुनर्निर्धारित करने का अधिकार सुरक्षित है।"
                : "Submitting an appointment booking through this portal constitutes a request for a consultation slot. Final confirmation is subject to doctor schedule availability and hospital registration protocols. We reserve the right to reschedule consultation timings when emergency surgeries take priority."}
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading font-bold text-lg text-brand-navy-900">
              {locale === "te"
                ? "4. మేధో సంపత్తి & బ్రాండ్ హక్కులు"
                : locale === "hi"
                ? "4. बौद्धिक संपदा एवं ब्रांड अधिकार"
                : "4. Intellectual Property & Brand Rights"}
            </h2>
            <p>
              {locale === "te"
                ? "అధికారిక UROANDROGUY లోగో, వైద్యుల చిత్రాలు, లేఅవుట్ డిజైన్లు మరియు అసలైన వైద్య సంపాదకీయ కంటెంట్ మేధో సంపత్తి చట్టాల క్రింద రక్షించబడ్డాయి. ముందస్తు లిఖితపూర్వక అనుమతి లేకుండా వీటిని పునరుత్పత్తి చేయడం లేదా వాణిజ్యపరంగా దుర్వినియోగం చేయడం ఖచ్చితంగా నిషేధించబడింది."
                : locale === "hi"
                ? "आधिकारिक UROANDROGUY लोगो, डॉक्टर की छवि, लेआउट डिजाइन और मूल संपादकीय सामग्री बौद्धिक संपदा कानूनों के तहत सुरक्षित हैं। लिखित सहमति के बिना अनधिकृत पुनरुत्पादन या व्यावसायिक दुरुपयोग सख्त वर्जित है।"
                : "The official UROANDROGUY logo, doctor likeness, layout designs, and original medical editorial text are protected under intellectual property laws. Unauthorized reproduction, scraping, or commercial misuse is strictly prohibited without written consent."}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
