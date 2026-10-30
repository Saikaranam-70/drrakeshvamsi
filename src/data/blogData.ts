export interface BlogArticle {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  views: string;
  shortDescription: string;
  featuredImage: string;
  author: {
    name: string;
    designation: string;
    hospital: string;
    bio: string;
  };
  tableOfContents: {
    id: string;
    title: string;
  }[];
  contentSections: {
    id: string;
    sectionNumber: string;
    heading: string;
    paragraphs: string[];
    calloutQuote?: string;
    symptomsList?: { title: string; icon: string }[];
    bulletPoints?: string[];
  }[];
  relatedSlugs: string[];
}

export const blogCategories = [
  { id: "all", name: "All Articles", count: 8 },
  { id: "kidney", name: "Kidney Health", count: 12 },
  { id: "prostate", name: "Prostate Care", count: 10 },
  { id: "mens-health", name: "Men's Health", count: 15 },
  { id: "fertility", name: "Male Infertility", count: 8 },
  { id: "cancer", name: "Urological Cancers", count: 7 },
  { id: "surgery", name: "Surgery & Technology", count: 6 },
  { id: "general", name: "General Urology", count: 9 },
];

export const blogArticles: BlogArticle[] = [
  {
    slug: "kidney-stones-causes-symptoms-treatment",
    title: "Kidney Stones: Causes, Symptoms and Treatment Options",
    category: "Kidney Health",
    date: "Oct 12, 2024",
    readTime: "5 min read",
    views: "2.4K views",
    shortDescription:
      "Understand what causes kidney stones, how to identify symptoms early and the latest treatment options available.",
    featuredImage: "/images/blog/kidney-stones.jpg",
    author: {
      name: "Dr. Rakesh Vamsi",
      designation: "Consultant Urologist & Andrologist",
      hospital: "KIMS Hospital, Nellore",
      bio: "Specializing in advanced urology and andrology care with a focus on minimally invasive treatments and patient-centered care.",
    },
    tableOfContents: [
      { id: "overview", title: "1. Overview" },
      { id: "what-are-stones", title: "2. What are Kidney Stones?" },
      { id: "symptoms", title: "3. Common Symptoms" },
      { id: "causes", title: "4. Causes and Risk Factors" },
      { id: "types", title: "5. Types of Kidney Stones" },
      { id: "diagnosis", title: "6. Diagnosis" },
      { id: "treatment", title: "7. Treatment Options" },
      { id: "prevention", title: "8. Prevention Tips" },
      { id: "when-to-consult", title: "9. When to Consult" },
      { id: "faqs", title: "10. Frequently Asked Questions" },
    ],
    contentSections: [
      {
        id: "overview",
        sectionNumber: "1.",
        heading: "Overview",
        paragraphs: [
          "Kidney stones are hard deposits made of minerals and salts that form in the kidneys. They can cause severe pain and other urinary problems. With advanced diagnostic techniques and minimally invasive treatment options, most kidney stones can be effectively treated with excellent outcomes.",
        ],
        calloutQuote:
          "Early diagnosis and appropriate treatment can help you get rid of kidney stones with minimal discomfort and faster recovery.",
      },
      {
        id: "what-are-stones",
        sectionNumber: "2.",
        heading: "What are Kidney Stones?",
        paragraphs: [
          "Kidney stones are solid, crystal-like deposits that form in the kidneys from minerals and salts in the urine. They can vary in size from as small as a grain of sand to as large as a golf ball. Stones can cause blockage in the urinary tract, leading to severe pain and other complications if left untreated.",
          "When urine lacks sufficient water to dilute substances like calcium, oxalate, and uric acid, these substances can stick together and crystallize into stones over time.",
        ],
      },
      {
        id: "symptoms",
        sectionNumber: "3.",
        heading: "Common Symptoms",
        paragraphs: [
          "Symptoms can vary depending on the size and location of the stone. A stone in the kidney may cause little or no discomfort until it moves into the ureter.",
        ],
        symptomsList: [
          { title: "Severe pain in back or side", icon: "AlertTriangle" },
          { title: "Blood in urine", icon: "Droplet" },
          { title: "Nausea and vomiting", icon: "Activity" },
          { title: "Frequent urination", icon: "Clock" },
          { title: "Burning sensation during urination", icon: "Flame" },
        ],
      },
      {
        id: "causes",
        sectionNumber: "4.",
        heading: "Causes and Risk Factors",
        paragraphs: [
          "Common risk factors include chronic inadequate hydration, diets high in sodium and animal protein, family genetics, obesity, and underlying medical conditions like gout or hyperparathyroidism.",
        ],
        bulletPoints: [
          "Inadequate fluid intake (less than 2 liters per day)",
          "Excessive salt and sodium in daily meals",
          "High animal protein consumption",
          "Hot climate resulting in excessive sweating and concentrated urine",
        ],
      },
      {
        id: "types",
        sectionNumber: "5.",
        heading: "Types of Kidney Stones",
        paragraphs: [
          "Knowing the chemical composition of the stone guides personalized prevention:",
          "1. Calcium Oxalate Stones: The most common type (approx 80%), formed when calcium combines with dietary oxalate.",
          "2. Uric Acid Stones: Formed in persistently acidic urine, often related to high purine diets or gout.",
          "3. Struvite Stones: Formed rapidly in response to chronic urinary tract infections.",
          "4. Cystine Stones: Rare genetic condition causing excessive cystine excretion.",
        ],
      },
      {
        id: "treatment",
        sectionNumber: "7.",
        heading: "Modern Minimally Invasive Treatment Options",
        paragraphs: [
          "Today, open surgery for kidney stones is virtually obsolete. Modern options at KIMS Hospital Nellore include:",
          "• RIRS (Retrograde Intrarenal Surgery): A thin flexible ureteroscope enters through the natural urinary passage to dust stones with a laser. Zero incisions.",
          "• Mini-PCNL: Micro-keyhole puncture through the back for larger stones over 2cm.",
          "• ESWL: Non-invasive shock waves focused from outside the body.",
        ],
      },
      {
        id: "prevention",
        sectionNumber: "8.",
        heading: "Dietary & Lifestyle Prevention Tips",
        paragraphs: [
          "Stone recurrence can be reduced by more than 50% through targeted hydration and simple dietary modifications.",
        ],
        bulletPoints: [
          "Drink 2.5 to 3 liters of water throughout the day to keep urine clear and pale.",
          "Add fresh lemon juice to water (citrate acts as a natural stone inhibitor).",
          "Limit dietary sodium to under 2,300 mg per day.",
          "Do not excessively restrict dietary calcium; normal dietary calcium binds oxalate in the intestine.",
        ],
      },
    ],
    relatedSlugs: [
      "prostate-enlargement-when-to-be-concerned",
      "laparoscopic-vs-robotic-surgery",
      "when-to-see-a-urologist-warning-signs",
    ],
  },
  {
    slug: "prostate-enlargement-when-to-be-concerned",
    title: "Prostate Enlargement: When to Be Concerned?",
    category: "Prostate Care",
    date: "Oct 5, 2024",
    readTime: "4 min read",
    views: "1.8K views",
    shortDescription:
      "Learn about the symptoms, diagnosis and treatment options for an enlarged prostate (BPH).",
    featuredImage: "/images/blog/prostate.jpg",
    author: {
      name: "Dr. Rakesh Vamsi",
      designation: "Consultant Urologist & Andrologist",
      hospital: "KIMS Hospital, Nellore",
      bio: "Specializing in advanced urology and andrology care with a focus on minimally invasive treatments and patient-centered care.",
    },
    tableOfContents: [
      { id: "overview", title: "1. Understanding BPH" },
      { id: "symptoms", title: "2. Warning Signs & Red Flags" },
      { id: "diagnosis", title: "3. Diagnostic Tests" },
      { id: "treatment", title: "4. Treatment Options" },
    ],
    contentSections: [
      {
        id: "overview",
        sectionNumber: "1.",
        heading: "Understanding Benign Prostatic Hyperplasia (BPH)",
        paragraphs: [
          "As men age, the prostate gland naturally enlarges under the influence of hormones. While BPH is non-cancerous, an enlarged prostate squeezes the urethra, restricting urine flow from the bladder and causing significant sleep and lifestyle disruptions.",
        ],
      },
      {
        id: "symptoms",
        sectionNumber: "2.",
        heading: "Warning Signs & Red Flags",
        paragraphs: [
          "If you wake up more than twice every night, experience hesitation when starting urination, or feel your bladder never fully empties, you should seek evaluation. Acute urinary retention—the sudden inability to pass any urine—is an emergency.",
        ],
      },
      {
        id: "treatment",
        sectionNumber: "4.",
        heading: "Modern Laser Treatments",
        paragraphs: [
          "While mild symptoms respond well to medication, laser therapies like HoLEP (Holmium Laser Enucleation of the Prostate) and Bipolar TURP offer permanent relief with rapid recovery and minimal bleeding.",
        ],
      },
    ],
    relatedSlugs: [
      "kidney-stones-causes-symptoms-treatment",
      "erectile-dysfunction-causes-modern-treatments",
    ],
  },
  {
    slug: "male-infertility-causes-and-treatment-options",
    title: "Male Infertility: Common Causes and Treatment Options",
    category: "Male Infertility",
    date: "Sep 28, 2024",
    readTime: "6 min read",
    views: "3.1K views",
    shortDescription:
      "A complete guide to understanding male infertility and the advanced treatment options available.",
    featuredImage: "/images/blog/fertility.jpg",
    author: {
      name: "Dr. Rakesh Vamsi",
      designation: "Consultant Urologist & Andrologist",
      hospital: "KIMS Hospital, Nellore",
      bio: "Specializing in advanced urology and andrology care with a focus on minimally invasive treatments and patient-centered care.",
    },
    tableOfContents: [
      { id: "overview", title: "1. Overview & Statistics" },
      { id: "causes", title: "2. Primary Causes" },
      { id: "surgery", title: "3. Microsurgical Varicocelectomy" },
      { id: "advanced", title: "4. Micro-TESE for Zero Sperm" },
    ],
    contentSections: [
      {
        id: "overview",
        sectionNumber: "1.",
        heading: "Overview & Statistics",
        paragraphs: [
          "Infertility affects approximately one in six couples worldwide. In nearly 50% of cases, male factors contribute either primarily or in combination with female factors. Modern andrology provides precise diagnostics and microsurgical treatments that offer substantial hope.",
        ],
      },
      {
        id: "causes",
        sectionNumber: "2.",
        heading: "Primary Causes of Male Infertility",
        paragraphs: [
          "Varicocele—enlarged veins in the scrotum—is the single most common correctable cause. Other factors include hormonal deficiencies, ductal obstructions, lifestyle stresses, and genetic microdeletions.",
        ],
      },
    ],
    relatedSlugs: [
      "erectile-dysfunction-causes-modern-treatments",
      "low-testosterone-signs-causes-treatment",
    ],
  },
  {
    slug: "erectile-dysfunction-causes-modern-treatments",
    title: "Erectile Dysfunction: Causes and Modern Treatments",
    category: "Men's Health",
    date: "Sep 20, 2024",
    readTime: "5 min read",
    views: "2.9K views",
    shortDescription:
      "Understand the causes of erectile dysfunction and the safe, effective treatment options available.",
    featuredImage: "/images/blog/erectile-health.jpg",
    author: {
      name: "Dr. Rakesh Vamsi",
      designation: "Consultant Urologist & Andrologist",
      hospital: "KIMS Hospital, Nellore",
      bio: "Specializing in advanced urology and andrology care with a focus on minimally invasive treatments and patient-centered care.",
    },
    tableOfContents: [
      { id: "overview", title: "1. Debunking Myths" },
      { id: "causes", title: "2. Vascular & Endocrine Roots" },
      { id: "therapies", title: "3. Modern Evidence-Based Therapies" },
    ],
    contentSections: [
      {
        id: "overview",
        sectionNumber: "1.",
        heading: "Debunking Common Myths",
        paragraphs: [
          "Erectile dysfunction is not an inevitable consequence of aging, nor is it purely psychological. In most adult men, ED is a physical condition that serves as an early barometer of cardiovascular and metabolic health.",
        ],
      },
    ],
    relatedSlugs: [
      "male-infertility-causes-and-treatment-options",
      "low-testosterone-signs-causes-treatment",
    ],
  },
  {
    slug: "laparoscopic-vs-robotic-surgery",
    title: "Laparoscopic vs Robotic Surgery: What's the Difference?",
    category: "Surgery & Technology",
    date: "Sep 15, 2024",
    readTime: "5 min read",
    views: "1.5K views",
    shortDescription:
      "Compare laparoscopic and robotic surgery and understand the benefits of each approach.",
    featuredImage: "/images/blog/robotics.jpg",
    author: {
      name: "Dr. Rakesh Vamsi",
      designation: "Consultant Urologist & Andrologist",
      hospital: "KIMS Hospital, Nellore",
      bio: "Specializing in advanced urology and andrology care with a focus on minimally invasive treatments and patient-centered care.",
    },
    tableOfContents: [
      { id: "overview", title: "1. Minimally Invasive Revolution" },
      { id: "comparison", title: "2. Technical Comparison" },
      { id: "benefits", title: "3. Patient Outcomes" },
    ],
    contentSections: [
      {
        id: "overview",
        sectionNumber: "1.",
        heading: "The Minimally Invasive Revolution",
        paragraphs: [
          "Gone are the days when urological operations required 20-30 cm abdominal incisions. Both laparoscopic and robotic surgery achieve the same surgical goals through 4-5 tiny keyhole punctures, but robotic surgery introduces 3D stereoscopic vision and 7-degree-of-freedom wristed instruments.",
        ],
      },
    ],
    relatedSlugs: [
      "kidney-stones-causes-symptoms-treatment",
      "bladder-cancer-symptoms-diagnosis-treatment",
    ],
  },
  {
    slug: "bladder-cancer-symptoms-diagnosis-treatment",
    title: "Bladder Cancer: Symptoms, Diagnosis and Treatment",
    category: "Urological Cancers",
    date: "Sep 10, 2024",
    readTime: "5 min read",
    views: "1.9K views",
    shortDescription:
      "Early detection and advanced treatment options for bladder cancer.",
    featuredImage: "/images/blog/cancer.jpg",
    author: {
      name: "Dr. Rakesh Vamsi",
      designation: "Consultant Urologist & Andrologist",
      hospital: "KIMS Hospital, Nellore",
      bio: "Specializing in advanced urology and andrology care with a focus on minimally invasive treatments and patient-centered care.",
    },
    tableOfContents: [
      { id: "overview", title: "1. The Hematuria Warning" },
      { id: "staging", title: "2. Diagnosis & Staging" },
      { id: "treatment", title: "3. Modern Management" },
    ],
    contentSections: [
      {
        id: "overview",
        sectionNumber: "1.",
        heading: "Painless Hematuria: The Critical Warning Sign",
        paragraphs: [
          "Painless visible blood in the urine is the hallmark symptom of bladder cancer. Even if it occurs once and clears on its own, it must be thoroughly investigated with ultrasound and cystoscopy.",
        ],
      },
    ],
    relatedSlugs: [
      "laparoscopic-vs-robotic-surgery",
      "when-to-see-a-urologist-warning-signs",
    ],
  },
  {
    slug: "low-testosterone-signs-causes-treatment",
    title: "Low Testosterone: Signs, Causes and Treatment",
    category: "Men's Health",
    date: "Sep 5, 2024",
    readTime: "4 min read",
    views: "2.2K views",
    shortDescription:
      "Understand the symptoms of low testosterone and the available treatment options.",
    featuredImage: "/images/blog/testosterone.jpg",
    author: {
      name: "Dr. Rakesh Vamsi",
      designation: "Consultant Urologist & Andrologist",
      hospital: "KIMS Hospital, Nellore",
      bio: "Specializing in advanced urology and andrology care with a focus on minimally invasive treatments and patient-centered care.",
    },
    tableOfContents: [
      { id: "overview", title: "1. What is Hypogonadism?" },
      { id: "signs", title: "2. Recognizing the Signs" },
      { id: "treatment", title: "3. Safe Testosterone Replacement" },
    ],
    contentSections: [
      {
        id: "overview",
        sectionNumber: "1.",
        heading: "What is Male Hypogonadism?",
        paragraphs: [
          "Testosterone levels naturally taper by approximately 1% per year after age 30. However, when levels drop significantly below normal physiological thresholds, men experience chronic fatigue, mood changes, loss of muscle mass, and low libido.",
        ],
      },
    ],
    relatedSlugs: [
      "erectile-dysfunction-causes-modern-treatments",
      "male-infertility-causes-and-treatment-options",
    ],
  },
  {
    slug: "when-to-see-a-urologist-warning-signs",
    title: "When to See a Urologist? Key Warning Signs",
    category: "Kidney Health",
    date: "Aug 28, 2024",
    readTime: "4 min read",
    views: "2.7K views",
    shortDescription:
      "Know the important symptoms that should not be ignored and when to consult a urologist.",
    featuredImage: "/images/blog/warning-signs.jpg",
    author: {
      name: "Dr. Rakesh Vamsi",
      designation: "Consultant Urologist & Andrologist",
      hospital: "KIMS Hospital, Nellore",
      bio: "Specializing in advanced urology and andrology care with a focus on minimally invasive treatments and patient-centered care.",
    },
    tableOfContents: [
      { id: "overview", title: "1. Urology Overview" },
      { id: "symptoms", title: "2. 6 Critical Warning Signs" },
      { id: "prevention", title: "3. Routine Preventative Care" },
    ],
    contentSections: [
      {
        id: "overview",
        sectionNumber: "1.",
        heading: "What Does a Urologist Specialize In?",
        paragraphs: [
          "Urologists are surgical specialists diagnosing and treating disorders of the male and female urinary tract, as well as the male reproductive system. Many patients delay care out of hesitation, yet early evaluation prevents permanent kidney damage.",
        ],
      },
    ],
    relatedSlugs: [
      "kidney-stones-causes-symptoms-treatment",
      "prostate-enlargement-when-to-be-concerned",
    ],
  },
];
