"use client";

import React from "react";
import Link from "next/link";
import { Shield, ArrowLeft } from "lucide-react";
import { getLocalizedDoctorData } from "@/data/localizedDoctor";
import { useLanguage } from "@/context/LanguageContext";

export default function PrivacyPolicyClient() {
  const { locale } = useLanguage();
  const doctor = getLocalizedDoctorData(locale);

  return (
      <div className="bg-brand-navy-950 text-slate-100 min-h-screen py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-cyan hover:text-white transition-colors mb-8"
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

              <div className="space-y-4 border-b border-brand-navy-800 pb-8">
                <div className="w-12 h-12 rounded-xl bg-brand-navy-900 border border-brand-teal-500/30 text-brand-cyan flex items-center justify-center">
                  <Shield className="w-6 h-6" />
                </div>
                  <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
                    {locale === "te"
                      ? "గోప్యతా విధానం & రోగి డేటా రక్షణ"
                      : locale === "hi"
                        ? "गोपनीयता नीति एवं रोगी डेटा सुरक्षा"
                        : "Privacy Policy & Patient Data Protection"}
                  </h1>
                    <p className="text-sm text-slate-400">
                      {locale === "te"
                        ? "చివరిగా నవీకరించబడింది: అక్టోబర్ 2024 • యూరాలజిస్ట్ మరియు ఆండ్రాలజిస్ట్ క్లినికల్ ప్రాక్టీస్"
                        : locale === "hi"
                          ? "अंतिम अद्यतन: अक्टूबर 2024 • यूरोलॉजिस्ट एवं एंड्रोलॉजिस्ट क्लिनिकल प्रैक्टिस"
                          : "Last updated: October 2024 • Urologist and Andrologist Clinical Practice"}
                    </p>
                  </div>

                    <div className="max-w-none pt-8 space-y-6 text-sm text-slate-300 leading-relaxed">
                      <section className="space-y-2">
                          <h2 className="font-heading font-bold text-lg text-white">
                            {locale === "te"
                              ? "1. రోగి గోప్యత పట్ల మా నిబద్ధత"
                              : locale === "hi"
                                ? "1. रोगी गोपनीयता के प्रति हमारी प्रतिबद्धता"
                                : "1. Commitment to Patient Confidentiality"}
                          </h2>
                          <p>
                            {locale === "te"
                              ? `డాక్టర్ రాకేష్ వంశీ (${doctor.hospital.city} లోని ${doctor.hospital.name} లో కన్సల్టెంట్ యూరాలజిస్ట్ & ఆండ్రాలజిస్ట్) వద్ద, యూరాలజికల్ మరియు ఆండ్రాలజికల్ సమస్యలు అత్యంత వ్యక్తిగతమైనవని మేము అర్థం చేసుకున్నాము. రోగి సమాచారాన్ని సేకరించడం, ప్రాసెస్ చేయడం మరియు భద్రపరచడం విషయంలో మేము జాతీయ వైద్య నైతిక మార్గదర్శకాలు, రోగి గోప్యతా ప్రమాణాలు మరియు చట్టబద్ధమైన ఆరోగ్య నిబంధనలను ఖచ్చితంగా పాటిస్తాము.`
                              : locale === "hi"
                                ? `डॉ. राकेश वामसी (${doctor.hospital.city} स्थित ${doctor.hospital.name} में कंसल्टेंट यूरोलॉजिस्ट और एंड्रोलॉजिस्ट) में, हम समझते हैं कि यूरोलॉजिकल और एंड्रोलॉजिकल समस्याएं अत्यंत व्यक्तिगत होती हैं। हम रोगी की जानकारी के संग्रह, प्रसंस्करण और सुरक्षा के संबंध में राष्ट्रीय चिकित्सा नैतिकता दिशानिर्देशों, रोगी गोपनीयता मानकों और वैधानिक स्वास्थ्य सेवा नियमों का कड़ाई से पालन करते हैं।`
                                : `At the clinical practice of ${doctor.fullName} (Consultant Urologist & Andrologist at ${doctor.hospital.name}, ${doctor.hospital.city}), we understand that urological and andrological concerns are deeply personal. We adhere strictly to national medical ethics guidelines, patient confidentiality standards, and statutory healthcare regulations regarding the collection, processing, and safeguarding of patient information.`}
                          </p>
                      </section>

                      <section className="space-y-2">
                          <h2 className="font-heading font-bold text-lg text-white">
                            {locale === "te"
                              ? "2. మేము సేకరించే సమాచారం"
                              : locale === "hi"
                                ? "2. हमारे द्वारा एकत्र की जाने वाली जानकारी"
                                : "2. Information We Collect"}
                          </h2>
                          <p>
                            {locale === "te"
                              ? "మీరు అపాయింట్‌మెంట్ షెడ్యూల్ చేసినప్పుడు లేదా ఈ వెబ్‌సైట్ ద్వారా మా క్లినికల్ డెస్క్‌ను సంప్రదించినప్పుడు, మేము సేకరించే వివరాలు:"
                              : locale === "hi"
                                ? "जब आप अपॉइंटमेंट शेड्यूल करते हैं या इस वेबसाइट के माध्यम से हमारे क्लिनिकल डेस्क से संपर्क करते हैं, तो हम एकत्र कर सकते हैं:"
                                : "When you schedule an appointment or contact our clinical desk via this website, we may collect:"}
                          </p>
                            <ul className="list-disc pl-5 space-y-1 text-slate-300">
                              <li>
                                {locale === "te"
                                  ? "సంప్రదింపు వివరాలు: పేరు, మొబైల్ నంబర్, ఇమెయిల్ చిరునామా."
                                  : locale === "hi"
                                    ? "संपर्क विवरण: नाम, मोबाइल नंबर, ईमेल पता।"
                                    : "Contact details: Name, mobile number, email address."}
                              </li>
                              <li>
                                {locale === "te"
                                  ? "జనాభా వివరాలు: వయస్సు, లింగం, నగరం/ప్రాంతం."
                                  : locale === "hi"
                                    ? "जनसांख्यिकीय विवरण: आयु, लिंग, शहर/स्थान।"
                                    : "Demographic details: Age, gender, city/location."}
                              </li>
                              <li>
                                {locale === "te"
                                  ? "క్లినికల్ సందర్భం: విభాగం, ఎంచుకున్న అపాయింట్‌మెంట్ తేదీ, మరియు ఐచ్ఛిక సంక్షిప్త లక్షణాల వివరణ."
                                  : locale === "hi"
                                    ? "क्लिनिकल संदर्भ: विभाग, चयनित अपॉइंटमेंट तिथि, और वैकल्पिक संक्षिप्त लक्षण विवरण।"
                                    : "Clinical context: Department, selected appointment date, and optional brief symptom descriptions."}
                              </li>
                            </ul>
                            <p>
                              {locale === "te"
                                ? "ఈ సమాచార వెబ్‌సైట్‌లో మేము సున్నితమైన బ్యాంకింగ్ వివరాలు లేదా చెల్లింపు నంబర్లను ఎప్పుడూ సేకరించము."
                                : locale === "hi"
                                  ? "हम इस सूचनात्मक वेबसाइट पर संवेदनशील बैंकिंग क्रेडेंशियल या भुगतान विवरण कभी एकत्र नहीं करते हैं।"
                                  : "We do not collect sensitive banking credentials or payment numbers on this informational website."}
                            </p>
                          </section>

                          <section className="space-y-2">
                              <h2 className="font-heading font-bold text-lg text-white">
                                {locale === "te"
                                  ? "3. డేటా సేకరణ యొక్క ప్రయోజనం"
                                  : locale === "hi"
                                    ? "3. डेटा संग्रह का उद्देश्य"
                                    : "3. Purpose of Data Collection"}
                              </h2>
                              <p>
                                {locale === "te"
                                  ? "అందించిన సమాచారం క్రింది ప్రయోజనాల కోసం మాత్రమే ఖచ్చితంగా ఉపయోగించబడుతుంది:"
                                  : locale === "hi"
                                    ? "प्रदान की गई जानकारी का उपयोग केवल निम्नलिखित उद्देश्यों के लिए सख्ती से किया जाता है:"
                                    : "Information provided is used strictly to:"}
                              </p>
                                <ul className="list-disc pl-5 space-y-1 text-slate-300">
                                  <li>
                                    {locale === "te"
                                      ? `${doctor.hospital.city} లోని ${doctor.hospital.name} లో క్లినికల్ అపాయింట్‌మెంట్‌లను సమన్వయం చేయడం మరియు నిర్ధారించడం.`
                                      : locale === "hi"
                                        ? `${doctor.hospital.city} स्थित ${doctor.hospital.name} में क्लिनिकल अपॉइंटमेंट स्लॉट का समन्वय और पुष्टि करना।`
                                        : `Coordinate and confirm clinical appointment slots at ${doctor.hospital.name}, ${doctor.hospital.city}.`}
                                  </li>
                                  <li>
                                    {locale === "te"
                                      ? "సందర్శనకు ముందు అవసరమైన ముందస్తు సూచనలు లేదా సమయ మార్పులను తెలియజేయడం."
                                      : locale === "hi"
                                        ? "परामर्श से पहले महत्वपूर्ण निर्देश या समय समायोजन की सूचना देना।"
                                        : "Communicate critical pre-visit instructions or schedule adjustments."}
                                  </li>
                                  <li>
                                    {locale === "te"
                                      ? "మీరు స్వయంగా అభ్యర్థించిన వైద్య మరియు చికిత్స విచారణలకు సమాధానం ఇవ్వడం."
                                      : locale === "hi"
                                        ? "आपके द्वारा सीधे अनुरोध की गई चिकित्सा एवं उपचार पूछताछ का उत्तर देना।"
                                        : "Answer medical and treatment inquiries requested directly by you."}
                                  </li>
                                </ul>
                              </section>

                              <section className="space-y-2">
                                  <h2 className="font-heading font-bold text-lg text-white">
                                    {locale === "te"
                                      ? "4. సమాచార భద్రత & బహిర్గతం చేయకపోవడం"
                                      : locale === "hi"
                                        ? "4. गैर-प्रकटीकरण एवं सुरक्षा"
                                        : "4. Non-Disclosure & Security"}
                                  </h2>
                                  <p>
                                    {locale === "te"
                                      ? `మీ వ్యక్తిగత మరియు ఆరోగ్య సమాచారం ఎట్టి పరిస్థితుల్లోనూ మూడవ పక్ష మార్కెటింగ్ సంస్థలకు విక్రయించబడదు, లీజుకు ఇవ్వబడదు లేదా వాణిజ్య ప్రయోజనాల కోసం ఉపయోగించబడదు. డేటా పరిశ్రమ-ప్రామాణిక ఎన్‌క్రిప్షన్ ప్రోటోకాల్‌లతో భద్రపరచబడింది మరియు ${doctor.hospital.name} లోని అధీకృత క్లినికల్ మరియు అడ్మినిస్ట్రేటివ్ సిబ్బందికి మాత్రమే అందుబాటులో ఉంటుంది.`
                                      : locale === "hi"
                                        ? `आपकी व्यक्तिगत और स्वास्थ्य जानकारी कभी भी तीसरे पक्ष की विपणन कंपनियों को बेची या पट्टे पर नहीं दी जाती है। डेटा उद्योग-मानक एन्क्रिप्शन प्रोटोकॉल से सुरक्षित है और केवल ${doctor.hospital.name} के अधिकृत कर्मचारियों के लिए सुलभ है।`
                                        : `Your personal and health information is never sold, leased, or commercialized to third-party marketing companies. Data is protected with industry-standard encryption protocols and is accessible exclusively to authorized clinical and administrative personnel at ${doctor.hospital.name} ${doctor.hospital.city}.`}
                                  </p>
                              </section>

                              <section className="space-y-2">
                                  <h2 className="font-heading font-bold text-lg text-white">
                                    {locale === "te"
                                      ? "5. గోప్యతకు సంబంధించి మమ్మల్ని సంప్రదించండి"
                                      : locale === "hi"
                                        ? "5. अपनी गोपनीयता के संबंध में हमसे संपर्क करें"
                                        : "5. Contact Us Regarding Your Privacy"}
                                  </h2>
                                  <p>
                                    {locale === "te"
                                      ? "మీ డేటాకు సంబంధించి ఏవైనా సందేహాలు ఉన్నా లేదా మీ రికార్డులను అప్‌డేట్ చేయాలనుకున్నా, దయచేసి మా అడ్మినిస్ట్రేటివ్ డెస్క్‌ను సంప్రదించండి:"
                                      : locale === "hi"
                                        ? "यदि आपके डेटा के संबंध में कोई प्रश्न हैं या आप अपने रिकॉर्ड अपडेट करना चाहते हैं, तो कृपया हमारे प्रशासनिक डेस्क से संपर्क करें:"
                                        : "If you have any questions regarding your data or wish to update your records, please contact our administrative desk:"}
                                  </p>
                                      <div className="p-4 bg-brand-navy-900/90 rounded-xl border border-brand-navy-800 text-xs space-y-1 text-slate-300">
                                        <div className="font-bold text-white">
                                          {doctor.hospital.name}, {doctor.hospital.city}
                                        </div>
                                        <div>
                                          {locale === "te" ? "చిరునామా: " : locale === "hi" ? "पता: " : "Address: "}
                                          {doctor.hospital.address}
                                        </div>
                                        <div>
                                          {locale === "te" ? "ఫోన్: " : locale === "hi" ? "फोन: " : "Phone: "}
                                          {doctor.hospital.phone} | {locale === "te" ? "ఇమెయిల్: " : locale === "hi" ? "ईमेल: " : "Email: "}
                                          {doctor.hospital.email}
                                        </div>
                                      </div>
                                    </section>
                                  </div>
                                </div>
                              </div>
                              );
}
