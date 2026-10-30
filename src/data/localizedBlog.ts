import { blogArticles, blogCategories, BlogArticle } from "./blogData";
import { Locale } from "@/locales";

export function getLocalizedBlogCategories(locale: Locale) {
  if (locale === "te") {
    return [
      { id: "all", name: "అన్ని అంశాలు", count: 8 },
      { id: "kidney", name: "కిడ్నీలో రాళ్లు", count: 12 },
      { id: "prostate", name: "ప్రోస్టేట్ ఆరోగ్యం", count: 10 },
      { id: "mens-health", name: "పురుషుల ఆరోగ్యం", count: 15 },
      { id: "fertility", name: "సంతానలేమి", count: 8 },
      { id: "cancer", name: "యూరాలజికల్ క్యాన్సర్లు", count: 7 },
      { id: "surgery", name: "రోబోటిక్ & లాపరోస్కోపీ", count: 6 },
    ];
  }

  if (locale === "hi") {
    return [
      { id: "all", name: "सभी विषय", count: 8 },
      { id: "kidney", name: "किडनी स्टोन", count: 12 },
      { id: "prostate", name: "प्रोस्टेट स्वास्थ्य", count: 10 },
      { id: "mens-health", name: "पुरुष स्वास्थ्य", count: 15 },
      { id: "fertility", name: "बांझपन समाधान", count: 8 },
      { id: "cancer", name: "यूरोलॉजिकल कैंसर", count: 7 },
      { id: "surgery", name: "रोबोटिक एवं लेप्रोस्कोपी", count: 6 },
    ];
  }

  return blogCategories;
}

const teluguBlogMap: Record<string, Partial<BlogArticle>> = {
  "kidney-stones-causes-symptoms-treatment": {
    title: "కిడ్నీలో రాళ్లు: కారణాలు, ప్రారంభ లక్షణాలు మరియు ఆధునిక లేజర్ చికిత్సలు",
    category: "కిడ్నీ ఆరోగ్యం",
    shortDescription: "కిడ్నీ రాళ్లు ఎందుకు ఏర్పడతాయి, తీవ్రమైన నొప్పిని ఎలా గుర్తించాలి మరియు లేజర్ RIRS ద్వారా కోత లేకుండా ఎలా తొలగించవచ్చో సమగ్ర గైడ్.",
    readTime: "6 నిమిషాల చదువు",
  },
  "prostate-enlargement-when-to-be-concerned": {
    title: "పెరిగిన ప్రోస్టేట్ (BPH): ఎప్పుడు ఆందోళన చెందాలి & ఆధునిక లేజర్ పరిష్కారాలు",
    category: "పురుషుల ఆరోగ్యం",
    shortDescription: "50 ఏళ్లు దాటిన పురుషులలో మూత్ర సమస్యలు, రాత్రిపూట తరచుగా లేవడం మరియు HoLEP లేజర్ చికిత్సలపై పూర్తి అవగాహన.",
    readTime: "7 నిమిషాల చదువు",
  },
  "male-infertility-causes-and-treatment-options": {
    title: "పురుషుల సంతానలేమి: అసలు కారణాలు మరియు మైక్రోసర్జరీ ద్వారా సరిచేసే మార్గాలు",
    category: "సంతాన సాఫల్యం",
    shortDescription: "వీర్యకణాల లోపాలు, అజూస్పెర్మియా మరియు వేరికోసిల్‌కు మైక్రో-TESE వంటి ఆధునిక ఆండ్రాలజీ పరిష్కారాలు.",
    readTime: "8 నిమిషాల చదువు",
  },
  "erectile-dysfunction-causes-modern-treatments": {
    title: "అంగస్తంభన లోపం: వైద్య కారణాలు, అపోహలు మరియు శాస్త్రీయ చికిత్సా పద్ధతులు",
    category: "పురుషుల ఆరోగ్యం",
    shortDescription: "మధుమేహం, రక్తనాళాల సమస్యలు మరియు షాక్‌వేవ్ థెరపీ ద్వారా సహజ పునరుద్ధరణపై నిపుణుల సలహాలు.",
    readTime: "5 నిమిషాల చదువు",
  },
  "laparoscopic-vs-robotic-surgery": {
    title: "లాపరోస్కోపిక్ వర్సెస్ రోబోటిక్ సర్జరీ: యూరాలజీలో ఏది ఎందుకు మెరుగైనది?",
    category: "ఆధునిక శస్త్రచికిత్సలు",
    shortDescription: "డా విన్సీ రోబోటిక్ సర్జరీ ద్వారా సూక్ష్మ గాట్లు, నొప్పితక్కువ మరియు వేగవంతమైన రికవరీ ఎందుకు సాధ్యమవుతుందో తెలుసుకోండి.",
    readTime: "6 నిమిషాల చదువు",
  },
  "bladder-cancer-symptoms-diagnosis-treatment": {
    title: "మూత్రకోశ క్యాన్సర్: తొలి హెచ్చరిక సంకేతాలు మరియు ఆధునిక ఎండోస్కోపిక్ చికిత్స",
    category: "యూరాలజికల్ క్యాన్సర్లు",
    shortDescription: "నొప్పి లేకుండా మూత్రంలో రక్తం పడటం ఎందుకు నిర్లక్ష్యం చేయకూడదు మరియు TURBT ద్వారా చికిత్స.",
    readTime: "6 నిమిషాల చదువు",
  },
  "low-testosterone-signs-causes-treatment": {
    title: "పురుషులలో టెస్టోస్టెరాన్ హార్మోన్ తగ్గడం: లక్షణాలు మరియు సురక్షితమైన హార్మోన్ థెరపీ",
    category: "పురుషుల ఆరోగ్యం",
    shortDescription: "అలసట, నిరాశ, లైంగిక ఆసక్తి తగ్గడం వంటి లక్షణాలను సురక్షిత వైద్య పర్యవేక్షణలో ఎలా సరిచేసుకోవచ్చో పరిశీలించండి.",
    readTime: "5 నిమిషాల చదువు",
  },
  "when-to-see-a-urologist-warning-signs": {
    title: "యూరాలజిస్ట్‌ను ఎప్పుడు సంప్రదించాలి: నిర్లక్ష్యం చేయకూడని 7 ముఖ్యమైన సంకేతాలు",
    category: "సాధారణ యూరాలజీ",
    shortDescription: "మూత్రంలో మంట, తీవ్రమైన నడుము నొప్పి మరియు ప్రోస్టేట్ హెచ్చరిక సంకేతాలను సమయానికి గుర్తించడం.",
    readTime: "5 నిమిషాల చదువు",
  },
};

const hindiBlogMap: Record<string, Partial<BlogArticle>> = {
  "kidney-stones-causes-symptoms-treatment": {
    title: "किडनी स्टोन: कारण, शुरुआती लक्षण और आधुनिक लेज़र उपचार",
    category: "किडनी स्वास्थ्य",
    shortDescription: "गुर्दे की पथरी क्यों बनती है, तेज दर्द को कैसे पहचानें और लेज़र RIRS द्वारा बिना चीरे के कैसे छुटकारा पाएं।",
    readTime: "6 मिनट का पठन",
  },
  "prostate-enlargement-when-to-be-concerned": {
    title: "बढ़ा हुआ प्रोस्टेट (BPH): कब चिंतित हों और आधुनिक लेज़र समाधान",
    category: "पुरुष स्वास्थ्य",
    shortDescription: "50 वर्ष से अधिक उम्र के पुरुषों में मूत्र संबंधी समस्याएं, रात में बार-बार पेशाब और HoLEP लेज़र उपचार पर संपूर्ण गाइड।",
    readTime: "7 मिनट का पठन",
  },
  "male-infertility-causes-and-treatment-options": {
    title: "पुरुष बांझपन: प्रमुख कारण और माइक्रोसर्जरी द्वारा समाधान",
    category: "प्रजनन क्षमता",
    shortDescription: "शुक्राणुओं की कमी, एजोस्पर्मिया और वेरिकोसील के लिए माइक्रो-TESE जैसी आधुनिक एंड्रोलॉजी तकनीकें।",
    readTime: "8 मिनट का पठन",
  },
  "erectile-dysfunction-causes-modern-treatments": {
    title: "स्तंभन दोष (ED): चिकित्सीय कारण, भ्रांतियां और आधुनिक वैज्ञानिक उपचार",
    category: "पुरुष स्वास्थ्य",
    shortDescription: "मधुमेह, रक्त वाहिकाओं की समस्याएं और शॉकवेव थेरेपी द्वारा प्राकृतिक सुधार पर विशेषज्ञ मार्गदर्शन।",
    readTime: "5 मिनट का पठन",
  },
  "laparoscopic-vs-robotic-surgery": {
    title: "लेप्रोस्कोपिक बनाम रोबोटिक सर्जरी: यूरोलॉजी में कौन सा विकल्प बेहतर है?",
    category: "आधुनिक सर्जरी",
    shortDescription: "दा विंची रोबोटिक सर्जरी से छोटे चीरे, कम दर्द और तेज रिकवरी कैसे संभव होती है, समझें।",
    readTime: "6 मिनट का पठन",
  },
  "bladder-cancer-symptoms-diagnosis-treatment": {
    title: "मूत्राशय का कैंसर: प्रारंभिक चेतावनी संकेत और आधुनिक एंडोस्कोपिक उपचार",
    category: "यूरोलॉजिकल कैंसर",
    shortDescription: "दर्द रहित पेशाब में खून आने को नजरअंदाज क्यों न करें और TURBT द्वारा इसका सुरक्षित उपचार।",
    readTime: "6 मिनट का पठन",
  },
  "low-testosterone-signs-causes-treatment": {
    title: "पुरुषों में टेस्टोस्टेरोन की कमी: संकेत, कारण और सुरक्षित हार्मोन रिप्लेसमेंट थेरेपी",
    category: "पुरुष स्वास्थ्य",
    shortDescription: "थकान, मांसपेशियों में कमजोरी और कम ऊर्जा को चिकित्सकीय देखरेख में कैसे ठीक करें।",
    readTime: "5 मिनट का पठन",
  },
  "when-to-see-a-urologist-warning-signs": {
    title: "यूरोलॉजिस्ट से कब मिलें: 7 चेतावनी संकेत जिन्हें नजरअंदाज नहीं करना चाहिए",
    category: "सामान्य यूरोलॉजी",
    shortDescription: "पेशाब में जलन, तेज पीठ दर्द और प्रोस्टेट के लक्षणों को समय पर पहचानना क्यों आवश्यक है।",
    readTime: "5 मिनट का पठन",
  },
};

export function getLocalizedBlogArticles(locale: Locale): BlogArticle[] {
  if (locale === "te") {
    return blogArticles.map((a) => {
      const teData = teluguBlogMap[a.slug];
      if (!teData) return a;
      return {
        ...a,
        ...teData,
      };
    });
  }

  if (locale === "hi") {
    return blogArticles.map((a) => {
      const hiData = hindiBlogMap[a.slug];
      if (!hiData) return a;
      return {
        ...a,
        ...hiData,
      };
    });
  }

  return blogArticles;
}

export function getLocalizedBlogArticle(slug: string, locale: Locale): BlogArticle | undefined {
  const all = getLocalizedBlogArticles(locale);
  return all.find((a) => a.slug === slug);
}
