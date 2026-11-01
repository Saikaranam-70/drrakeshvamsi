export interface TreatmentDetail {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  iconName: string;
  heroHeadline: string;
  heroDescription: string;
  quote: string;
  overview: {
    description: string;
    keyPoints: string[];
  };
  symptoms: {
    title: string;
    icon: string;
    description?: string;
  }[];
  causes: {
    title: string;
    icon: string;
    description?: string;
  }[];
  diagnosis: {
    title: string;
    icon: string;
    description: string;
  }[];
  treatmentOptions: {
    title: string;
    subtitle: string;
    description: string;
    recoveryTime: string;
    isMinimallyInvasive: boolean;
  }[];
  recoveryInfo: {
    hospitalStay: string;
    resumingDailyLife: string;
    dietLifestyle: string;
    followUp: string;
  };
  whenToConsult: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedSlugs: string[];
}

export const treatmentCategories = [
  { id: "all", name: "All Treatments", icon: "Activity" },
  { id: "mens-health", name: "Andrology & Men's Health", icon: "User" },
  { id: "infertility", name: "Male Infertility", icon: "Users" },
  { id: "kidney", name: "Kidney & Urinary Tract", icon: "Activity" },
  { id: "prostate", name: "Prostate Care", icon: "Shield" },
  { id: "robotics", name: "Laparoscopic & Robotic Surgery", icon: "Cpu" },
  { id: "oncology", name: "Urological Cancers", icon: "Ribbon" },
  { id: "reconstructive", name: "Reconstructive Urology", icon: "Wrench" },
];

export const treatmentsData: TreatmentDetail[] = [
  {
    slug: "kidney-stones",
    title: "Kidney Stones",
    category: "Kidney & Urinary Tract",
    shortDescription: "Advanced evaluation and minimally invasive treatment options for kidney and urinary stones.",
    iconName: "Kidney",
    heroHeadline: "Kidney Stones Treatment",
    heroDescription: "Advanced and minimally invasive treatment options for kidney and urinary stones with state-of-the-art laser technology.",
    quote: "Early diagnosis and advanced treatment can help you get rid of kidney stones with minimal discomfort and faster recovery.",
    overview: {
      description:
        "Kidney stones are hard deposits made of minerals and salts that form in the kidneys. They can cause severe pain and other urinary problems. With advanced diagnostic techniques and minimally invasive treatment options, most kidney stones can be effectively treated with excellent outcomes.",
      keyPoints: [
        "Common condition affecting millions each year",
        "Can cause severe pain if untreated or obstructed",
        "Multiple advanced, minimally invasive treatment options available",
        "High success rate with modern laser and endoscopic techniques",
      ],
    },
    symptoms: [
      { title: "Severe pain in back or side", icon: "AlertTriangle", description: "Sharp, cramping pain in the flank or lower abdomen" },
      { title: "Blood in urine", icon: "Droplet", description: "Pink, red, or brownish tint in urine (hematuria)" },
      { title: "Nausea and vomiting", icon: "Activity", description: "Reflex symptoms caused by intense renal colic" },
      { title: "Frequent urination", icon: "Clock", description: "Persistent urge to pass urine in small amounts" },
      { title: "Burning sensation during urination", icon: "Flame", description: "Discomfort or dysuria while passing urine" },
    ],
    causes: [
      { title: "Dehydration", icon: "Droplet", description: "Low fluid intake concentrates urine minerals" },
      { title: "High salt diet", icon: "Utensils", description: "Increases calcium levels excreted in urine" },
      { title: "Family history", icon: "Users", description: "Genetic predisposition to stone formation" },
      { title: "Certain medical conditions", icon: "Stethoscope", description: "Hyperparathyroidism, gout, or metabolic disorders" },
      { title: "Obesity", icon: "Activity", description: "High BMI linked to altered urinary pH and uric acid" },
      { title: "Certain medications", icon: "Pill", description: "Calcium-based antacids or specific diuretics" },
    ],
    diagnosis: [
      {
        title: "Physical Examination",
        icon: "Stethoscope",
        description: "Medical history assessment, localized pain evaluation, and vital examination.",
      },
      {
        title: "Urine Tests",
        icon: "FlaskConical",
        description: "Analysis for microscopic blood, infection, pH, and stone-forming crystals.",
      },
      {
        title: "Imaging Tests",
        icon: "Scan",
        description: "Non-contrast CT KUB scan and ultrasound to identify exact size, location, and stone density.",
      },
      {
        title: "Blood Tests",
        icon: "Droplets",
        description: "Assessment of kidney function (serum creatinine, urea) and calcium/uric acid levels.",
      },
    ],
    treatmentOptions: [
      {
        title: "RIRS (Retrograde Intrarenal Surgery)",
        subtitle: "Flexible Ureteroscopy with Holmium/Thulium Laser",
        description:
          "No cut, incision-less procedure where a ultra-thin flexible scope enters through the natural urinary tract directly into the kidney. High-power laser dusting pulverizes stones into fine sand that washes out naturally.",
        recoveryTime: "Same day or 24 hours",
        isMinimallyInvasive: true,
      },
      {
        title: "Mini-PCNL (Percutaneous Nephrolithotomy)",
        subtitle: "Micro Keyhole Surgery for Large Stones (> 2 cm)",
        description:
          "A miniature keyhole puncture (pencil-sized) in the back allows direct entry into the kidney to fragment and clear large or staghorn stones with exceptional stone clearance rates.",
        recoveryTime: "1 to 2 days hospital stay",
        isMinimallyInvasive: true,
      },
      {
        title: "URSL (Ureteroscopic Lithotripsy)",
        subtitle: "Endoscopic Treatment for Ureteric Stones",
        description:
          "Semi-rigid scope inserted through the urethra into the ureter to disintegrate impacted stones causing blockage using precise laser fibers.",
        recoveryTime: "Outpatient or 24-hour observation",
        isMinimallyInvasive: true,
      },
      {
        title: "ESWL (Extracorporeal Shock Wave Lithotripsy)",
        subtitle: "Non-Surgical Sound Wave Therapy",
        description:
          "High-energy acoustic shock waves focused from outside the body break small kidney stones into fragments without any incision or scope insertion.",
        recoveryTime: "Immediate discharge, minimal downtime",
        isMinimallyInvasive: true,
      },
    ],
    recoveryInfo: {
      hospitalStay: "Most laser procedures require only day-care or 24-hour stay at KIMS Hospital.",
      resumingDailyLife: "Patients typically return to light desk work within 48 to 72 hours.",
      dietLifestyle: "Drink 2.5 to 3 liters of water daily, reduce dietary sodium, and follow metabolic diet recommendations.",
      followUp: "Follow-up ultrasound and metabolic stone analysis at 2-3 weeks to prevent recurrence.",
    },
    whenToConsult: [
      "Severe pain in your side or back that doesn't subside",
      "Visible blood in urine or inability to pass urine",
      "Pain accompanied by fever, chills, nausea, or vomiting",
      "History of recurrent stones needing specialized metabolic prevention",
    ],
    faqs: [
      {
        question: "How long does kidney stone laser surgery take?",
        answer:
          "RIRS or laser lithotripsy typically takes between 45 to 90 minutes depending on the stone's size and location. Patients are usually observed overnight and discharged the next morning.",
      },
      {
        question: "Is kidney stone surgery painful?",
        answer:
          "Procedures are performed under anesthesia (general or spinal), so you feel no pain during surgery. Post-operative discomfort is generally mild and well controlled with oral medications.",
      },
      {
        question: "Can kidney stones be dissolved without surgery?",
        answer:
          "Small stones (under 4-5 mm) and certain uric acid stones may pass or dissolve with hydration and medication. Larger stones, or those causing acute blockage and pain, require minimally invasive laser intervention.",
      },
      {
        question: "What is a DJ stent and is it always required?",
        answer:
          "A DJ stent is a temporary soft, flexible tube placed in the ureter to ensure smooth urine drainage and prevent swelling after laser surgery. It is removed in a painless quick clinic visit after 1 to 2 weeks.",
      },
    ],
    relatedSlugs: ["prostate-care", "laparoscopic-robotic-surgery", "urinary-tract-infections"],
  },
  {
    slug: "prostate-care",
    title: "Prostate Care",
    category: "Prostate Care",
    shortDescription: "Comprehensive diagnosis and management of prostate enlargement, infections and other prostate conditions.",
    iconName: "Shield",
    heroHeadline: "Advanced Prostate Care",
    heroDescription: "Specialized, compassionate management of Benign Prostatic Hyperplasia (BPH), prostatitis, and elevated PSA levels with advanced laser solutions.",
    quote: "Accurate prostate evaluation preserves urinary health, sexual function, and daily comfort for men at every stage of life.",
    overview: {
      description:
        "Prostate enlargement (Benign Prostatic Hyperplasia or BPH) is a natural part of aging for men over 50. Dr. Rakesh Vamsi offers comprehensive evaluations—including uroflowmetry, PSA screening, and advanced laser prostatectomy (such as HoLEP and bipolar TURP)—to relieve urinary symptoms and protect kidney function.",
      keyPoints: [
        "Specialized evaluation for urinary difficulty and frequent night waking",
        "Advanced laser and bipolar resection for minimal bleeding",
        "Preservation of continence and sexual well-being",
        "Evidence-based screening for early prostate health assurance",
      ],
    },
    symptoms: [
      { title: "Frequent nighttime urination (Nocturia)", icon: "Moon", description: "Waking up 3 or more times per night to void" },
      { title: "Weak or interrupted urinary stream", icon: "Activity", description: "Decreased force and hesitation before starting" },
      { title: "Urgent need to urinate", icon: "AlertCircle", description: "Sudden strong urge that is difficult to postpone" },
      { title: "Feeling of incomplete bladder emptying", icon: "CheckCircle", description: "Bladder still feels full even after passing urine" },
      { title: "Straining or dribbling", icon: "Droplet", description: "Difficulty finishing and post-void dribbling" },
    ],
    causes: [
      { title: "Age-related hormonal changes", icon: "Clock", description: "Shifts in testosterone and dihydrotestosterone (DHT) levels" },
      { title: "Benign Prostatic Hyperplasia (BPH)", icon: "Shield", description: "Non-cancerous proliferation of prostate stromal and epithelial tissue" },
      { title: "Prostatitis / Inflammation", icon: "Flame", description: "Bacterial or non-bacterial inflammation causing pelvic discomfort" },
      { title: "Family genetics", icon: "Users", description: "Higher risk if first-degree relatives had prostate enlargement" },
    ],
    diagnosis: [
      { title: "Serum PSA Test", icon: "FlaskConical", description: "Blood test measuring Prostate-Specific Antigen levels." },
      { title: "Uroflowmetry", icon: "Activity", description: "Non-invasive electronic measurement of urine flow velocity and volume." },
      { title: "Ultrasound KUB & Post-Void Residual", icon: "Scan", description: "Measures prostate volume and urine retained in the bladder." },
      { title: "Digital Rectal Examination (DRE)", icon: "Stethoscope", description: "Clinical assessment of prostate size, firmness, and contour." },
    ],
    treatmentOptions: [
      {
        title: "Medical Management",
        subtitle: "Alpha-blockers & 5-ARIs",
        description: "Targeted prescription therapies to relax bladder neck muscles and shrink prostate tissue for mild to moderate symptoms.",
        recoveryTime: "Immediate, long-term monitoring",
        isMinimallyInvasive: true,
      },
      {
        title: "Bipolar TURP (Transurethral Resection)",
        subtitle: "Gold Standard Endoscopic Resection",
        description: "Modern plasma-kinetic endoscopic resection through natural urinary passage using normal saline, minimizing blood loss.",
        recoveryTime: "24-48 hours hospital stay",
        isMinimallyInvasive: true,
      },
      {
        title: "Laser Prostatectomy (HoLEP / ThuLEP)",
        subtitle: "Holmium/Thulium Laser Enucleation",
        description: "State-of-the-art complete anatomical enucleation of enlarged prostate lobes of any size with almost zero bleeding and rapid catheter removal.",
        recoveryTime: "24 hours hospital stay",
        isMinimallyInvasive: true,
      },
    ],
    recoveryInfo: {
      hospitalStay: "1 to 2 days at KIMS Hospital Nellore with early catheter removal.",
      resumingDailyLife: "Light desk work in 3 to 5 days; avoid heavy lifting for 2 weeks.",
      dietLifestyle: "Adequate hydration during daylight hours, limited caffeine/alcohol intake in evenings.",
      followUp: "Routine review at 2 weeks with repeat uroflowmetry.",
    },
    whenToConsult: [
      "Inability to pass urine (acute urinary retention — requires immediate medical care)",
      "Frequent night waking disrupting sleep and quality of life",
      "Blood in the urine or painful burning during urination",
      "Men over 50 desiring routine preventative prostate health screening",
    ],
    faqs: [
      {
        question: "Does an enlarged prostate always mean prostate cancer?",
        answer: "No. Benign Prostatic Hyperplasia (BPH) is completely non-cancerous and very common. However, regular evaluation with PSA testing helps ensure any concerning changes are ruled out early.",
      },
      {
        question: "Will prostate surgery affect sexual function?",
        answer: "Modern laser techniques (like HoLEP and bipolar TURP) are designed to preserve erectile nerve bundles and maintain erectile function.",
      },
    ],
    relatedSlugs: ["kidney-stones", "urological-cancers", "laparoscopic-robotic-surgery"],
  },
  {
    slug: "male-infertility",
    title: "Male Infertility",
    category: "Male Infertility",
    shortDescription: "Detailed evaluation and personalized treatment options for male infertility.",
    iconName: "Users",
    heroHeadline: "Male Infertility & Reproductive Health",
    heroDescription: "Specialized, confidential evaluation and microscopic surgical treatments for male reproductive wellness by Dr. Rakesh Vamsi.",
    quote: "Male infertility is common, treatable, and deserving of sensitive, scientific, and compassionate care.",
    overview: {
      description:
        "Approximately 40-50% of conception challenges involve male reproductive factors. Dr. Rakesh Vamsi specializes in thorough diagnostic evaluations—from computer-assisted semen analysis and hormonal profiling to microsurgical varicocelectomy and surgical sperm retrieval (Micro-TESE)—providing clear hope and scientific solutions.",
      keyPoints: [
        "Confidential, empathetic one-on-one consultations",
        "Detailed semen, hormone, and scrotal Doppler diagnostics",
        "Advanced microsurgical sub-inguinal varicocele repair",
        "Surgical sperm retrieval (TESE/Micro-TESE) for IVF/ICSI coordination",
      ],
    },
    symptoms: [
      { title: "Difficulty achieving conception after 12 months", icon: "Calendar", description: "Regular unprotected intercourse without successful pregnancy" },
      { title: "Pain or swelling in the testicle area", icon: "AlertTriangle", description: "Aching sensation or 'bag of worms' feeling (varicocele)" },
      { title: "Hormonal imbalance symptoms", icon: "Activity", description: "Decreased facial/body hair, fatigue, or low libido" },
      { title: "Ejaculatory issues", icon: "Droplet", description: "Reduced volume, retrograde ejaculation, or discomfort" },
    ],
    causes: [
      { title: "Varicocele", icon: "Activity", description: "Enlarged testicular veins causing increased scrotal temperature and DNA damage" },
      { title: "Hormonal imbalances", icon: "FlaskConical", description: "Low LH, FSH, or testosterone affecting spermatogenesis" },
      { title: "Ductal obstruction", icon: "Shield", description: "Blockage in the vas deferens or epididymis preventing sperm release" },
      { title: "Lifestyle & environmental toxins", icon: "Flame", description: "Smoking, excessive heat exposure, chronic stress, or obesity" },
    ],
    diagnosis: [
      { title: "Semen Analysis (WHO Standards)", icon: "FlaskConical", description: "Evaluation of sperm count, motility, morphology, and vitality." },
      { title: "High-Resolution Scrotal Color Doppler", icon: "Scan", description: "Ultrasound evaluation of testicular volume and venous reflux for varicocele." },
      { title: "Endocrine Hormone Panel", icon: "Droplets", description: "Measurement of serum FSH, LH, total testosterone, and prolactin." },
      { title: "Genetic Testing (Karyotyping / Y-microdeletion)", icon: "Activity", description: "Identifies chromosomal factors in severe oligospermia or azoospermia." },
    ],
    treatmentOptions: [
      {
        title: "Microsurgical Subinguinal Varicocelectomy",
        subtitle: "High-Magnification Precision Surgery",
        description: "Operating microscope magnification (15x-20x) enables selective ligation of dilated veins while protecting testicular arteries and lymphatic channels, dramatically improving sperm parameters.",
        recoveryTime: "Day-care, return to work in 48 hours",
        isMinimallyInvasive: true,
      },
      {
        title: "Medical & Hormonal Optimization",
        subtitle: "Targeted Medical Therapy",
        description: "Evidence-based antioxidant regimens, selective estrogen receptor modulators (SERMs), and gonadotropin therapy to boost endogenous sperm generation.",
        recoveryTime: "3 to 6 months treatment cycles",
        isMinimallyInvasive: true,
      },
      {
        title: "Micro-TESE (Microscopic Testicular Sperm Extraction)",
        subtitle: "Advanced Fertility Preservation",
        description: "Microsurgical dissection of seminiferous tubules to isolate viable sperm even in non-obstructive azoospermia for ICSI pregnancy success.",
        recoveryTime: "1 day hospital stay",
        isMinimallyInvasive: true,
      },
    ],
    recoveryInfo: {
      hospitalStay: "Day-care procedure; discharge on the same evening.",
      resumingDailyLife: "Normal desk activities in 2 to 3 days; avoid heavy gym/strenuous exercise for 2 weeks.",
      dietLifestyle: "Antioxidant-rich nutrition, tobacco cessation, loose clothing, avoidance of hot baths.",
      followUp: "Repeat semen analysis at 3 months and 6 months to track spermatogenic improvement.",
    },
    whenToConsult: [
      "Couples unable to conceive after 12 months of trying (or 6 months if female partner is over 35)",
      "Visible or palpable swelling in the scrotum",
      "History of undescended testicle, mumps orchitis, or groin surgery",
      "Low sperm count or zero sperm (azoospermia) reported on basic semen test",
    ],
    faqs: [
      {
        question: "Can varicocele surgery improve pregnancy chances?",
        answer: "Yes. Microsurgical varicocelectomy is proven to significantly improve sperm concentration, motility, and DNA fragmentation index, resulting in higher spontaneous and assisted pregnancy rates.",
      },
      {
        question: "Is male infertility testing painful?",
        answer: "No. Initial diagnostic tests (semen analysis, blood hormonal panel, and scrotal ultrasound) are completely non-invasive and painless.",
      },
    ],
    relatedSlugs: ["erectile-dysfunction", "prostate-care", "laparoscopic-robotic-surgery"],
  },
  {
    slug: "erectile-dysfunction",
    title: "Erectile Dysfunction",
    category: "Men's Health",
    shortDescription: "Comprehensive evaluation and evidence-based treatment options for erectile dysfunction.",
    iconName: "User",
    heroHeadline: "Erectile Dysfunction & Men's Health",
    heroDescription: "Discreet, scientific, and compassionate care for erectile health, performance concerns, and vitality by Dr. Rakesh Vamsi.",
    quote: "Erectile health is closely tied to overall cardiovascular and metabolic wellness. Effective, modern solutions are available.",
    overview: {
      description:
        "Erectile dysfunction (ED) is a common medical condition that affects men of all ages. Rather than relying on unverified supplements, Dr. Rakesh Vamsi provides thorough clinical evaluations to diagnose underlying vascular, neurological, hormonal, or lifestyle factors, offering proven medical, regenerative, and surgical treatments.",
      keyPoints: [
        "Private, confidential, and judgment-free clinical setting",
        "Comprehensive screening for underlying diabetes and cardiovascular health",
        "Customized treatment ladders: oral therapy, shockwave therapy, penile implants",
        "Focus on restoring confidence, intimacy, and overall vitality",
      ],
    },
    symptoms: [
      { title: "Difficulty achieving an erection", icon: "Activity", description: "Inability to get firm enough for intercourse" },
      { title: "Difficulty maintaining an erection", icon: "Clock", description: "Erection softens prematurely during intimacy" },
      { title: "Reduced sexual desire (libido)", icon: "Heart", description: "Lack of interest often linked to hormonal or stress factors" },
      { title: "Performance anxiety", icon: "AlertCircle", description: "Psychological stress worsening physiological response" },
    ],
    causes: [
      { title: "Vascular insufficiency", icon: "Activity", description: "Atherosclerosis or restricted arterial blood flow to erectile tissue" },
      { title: "Diabetes & metabolic syndrome", icon: "Droplet", description: "Nerve and microvascular impairment from chronic high blood glucose" },
      { title: "Hormonal deficiency", icon: "FlaskConical", description: "Low serum testosterone (hypogonadism)" },
      { title: "Psychological stress / anxiety", icon: "Brain", description: "Work stress, relationship dynamics, or performance pressure" },
    ],
    diagnosis: [
      { title: "Comprehensive Clinical Assessment", icon: "Stethoscope", description: "Medical, surgical, and medication history review in private consultation." },
      { title: "Metabolic & Hormonal Blood Profile", icon: "FlaskConical", description: "Testing fasting glucose, HbA1c, lipid profile, and morning testosterone." },
      { title: "Penile Color Doppler Study", icon: "Scan", description: "Ultrasound evaluation of penile arterial inflow and venous occlusive mechanism." },
    ],
    treatmentOptions: [
      {
        title: "Targeted Pharmacotherapy",
        subtitle: "Oral PDE5 Inhibitors & Hormonal Replacement",
        description: "Optimized, physician-monitored oral medications and testosterone therapy tailored to medical safety profile.",
        recoveryTime: "Immediate response",
        isMinimallyInvasive: true,
      },
      {
        title: "Low-Intensity Shockwave Therapy (Li-ESWT)",
        subtitle: "Non-Invasive Regenerative Therapy",
        description: "Acoustic waves stimulate neo-vascularization (new blood vessel growth) in penile tissue for drug-free, long-lasting improvement in mild-to-moderate vascular ED.",
        recoveryTime: "Zero downtime, outpatient sessions",
        isMinimallyInvasive: true,
      },
      {
        title: "Penile Prosthesis / Implant Surgery",
        subtitle: "Definitive Solution for Severe Refractory ED",
        description: "Surgical placement of malleable or inflatable 3-piece penile implants providing complete reliability and natural sensation when other treatments fail.",
        recoveryTime: "1-2 days hospital stay",
        isMinimallyInvasive: false,
      },
    ],
    recoveryInfo: {
      hospitalStay: "Non-surgical therapies are entirely outpatient. Implant surgeries require 24-48 hours.",
      resumingDailyLife: "Normal routines continue without pause for non-invasive therapies.",
      dietLifestyle: "Aerobic exercise, smoking cessation, Mediterranean-style diet, and sleep optimization.",
      followUp: "Follow-up at 4 to 6 weeks to evaluate response and adjust dosage.",
    },
    whenToConsult: [
      "Persistent difficulty with erections lasting more than 2-3 months",
      "Sudden onset of ED accompanied by cardiovascular symptoms",
      "Noticeable curve or painful erection (Peyronie's disease)",
      "Desire for safe, medically verified treatments rather than unapproved online products",
    ],
    faqs: [
      {
        question: "Is erectile dysfunction permanent?",
        answer: "In the vast majority of cases, no. With proper diagnosis and modern treatments—ranging from lifestyle optimization to shockwave therapy and medications—normal erectile function is successfully restored.",
      },
      {
        question: "Are treatments safe for men with heart conditions or diabetes?",
        answer: "Yes. Dr. Rakesh Vamsi reviews cardiovascular health carefully before prescribing therapies to ensure complete medical safety.",
      },
    ],
    relatedSlugs: ["penile-implants", "male-infertility", "prostate-care"],
  },
  {
    slug: "penile-implants",
    title: "Penile Implants (Prosthesis Surgery)",
    category: "Men's Health",
    shortDescription: "Permanent, discreet surgical solution for severe or medication-resistant erectile dysfunction with highest satisfaction rates.",
    iconName: "Shield",
    heroHeadline: "Penile Implants (Penile Prosthesis Surgery)",
    heroDescription: "Advanced surgical solutions for severe erectile dysfunction offering reliable, on-demand firmness and natural sensation with 3-piece inflatable and malleable prostheses.",
    quote: "Penile implants offer a permanent, worry-free solution to severe ED—restoring spontaneous intimacy, confidence, and natural sensation with over 95% patient and partner satisfaction.",
    overview: {
      description:
        "A penile prosthesis (penile implant) is a proven medical device surgically placed inside the penis to allow men with severe erectile dysfunction (ED) to achieve an erection whenever desired. It is considered the definitive gold-standard solution for men whose ED has not responded to oral medications (such as PDE5 inhibitors), injections, or shockwave therapy, as well as men with diabetes, post-prostatectomy nerve injury, or Peyronie's disease.",
      keyPoints: [
        "Permanent, on-demand firmness whenever desired for as long as desired",
        "Preserves completely normal penile skin sensation, orgasm, and ejaculation",
        "Two advanced options: 3-Piece Inflatable Penile Prosthesis (IPP) and Malleable (Semi-Rigid) Implants",
        "Highest satisfaction rate of all ED treatments (>95% patient and partner satisfaction)",
        "Entire device is concealed completely within the body with no visible external parts",
      ],
    },
    symptoms: [
      { title: "Severe ED unresponsive to oral medications or injections", icon: "Activity", description: "Tablets or injections fail to provide sufficient rigidity for intercourse" },
      { title: "Erectile dysfunction secondary to long-standing diabetes", icon: "Droplet", description: "Microvascular and neurological damage resisting non-surgical therapy" },
      { title: "Post-radical prostatectomy or pelvic surgery ED", icon: "Shield", description: "Erectile nerve injury following oncology or pelvic surgical interventions" },
      { title: "Peyronie's disease with severe curvature", icon: "AlertTriangle", description: "Plaque formation causing corporal deformity, curvature, and rigidity loss" },
      { title: "Loss of spontaneous sexual intimacy and relationship stress", icon: "Clock", description: "Frustration with unreliable pill timing or injection side effects" },
    ],
    causes: [
      { title: "Severe vascular & diabetic neuropathy", icon: "Activity", description: "Endothelial dysfunction and corporal smooth muscle fibrosis" },
      { title: "Iatrogenic post-surgical nerve damage", icon: "Shield", description: "Cavernosal nerve injury post-radical prostatectomy or colorectal resection" },
      { title: "Peyronie's disease fibrosis", icon: "Flame", description: "Severe tunical plaque causing curvature and vascular leak" },
      { title: "Venous leak (Corporovenous Occlusive Dysfunction)", icon: "Droplet", description: "Inability of the tunica albuginea to trap blood within corpora" },
    ],
    diagnosis: [
      { title: "Comprehensive Andrological Assessment", icon: "Stethoscope", description: "Detailed review of ED history, cardiovascular health, past medications, and patient goals." },
      { title: "Penile Color Doppler Ultrasound", icon: "Scan", description: "Pharmacologically induced erection to evaluate arterial peak systolic velocity and venous competence." },
      { title: "Pre-Operative Cardiopulmonary Optimization", icon: "CheckCircle", description: "HbA1c glycemic control check and anesthesia clearance to ensure maximum surgical safety." },
    ],
    treatmentOptions: [
      {
        title: "3-Piece Inflatable Penile Prosthesis (IPP)",
        subtitle: "Gold-Standard Hydraulic Implant",
        description:
          "Consists of two fluid-filled cylinders placed inside the natural erection chambers, a discreet miniature pump placed in the scrotum, and a reservoir in the pelvis. Squeezing the scrotal pump transfers fluid to produce a completely natural, firm erection. Pressing the release valve deflates the penis to a natural flaccid state.",
        recoveryTime: "24-48 hours hospital stay; active intimacy at 6 weeks",
        isMinimallyInvasive: false,
      },
      {
        title: "Malleable (Semi-Rigid) Penile Implant",
        subtitle: "Durable & Mechanically Simple",
        description:
          "Consists of two flexible, silicone-coated rods that can be manually positioned upwards for intimacy and bent downwards for discreet daily activity. Highly reliable with zero mechanical parts, ideal for men with limited manual dexterity.",
        recoveryTime: "24 hours hospital stay; recovery in 4 weeks",
        isMinimallyInvasive: false,
      },
      {
        title: "Penile Modeling for Peyronie's Disease",
        subtitle: "Simultaneous Straightening & Rigidity",
        description:
          "Surgical plaque incision or modeling performed simultaneously with prosthesis insertion to correct severe curvature, restore penile length, and eliminate erectile dysfunction in a single procedure.",
        recoveryTime: "1 to 2 days hospital stay",
        isMinimallyInvasive: false,
      },
    ],
    recoveryInfo: {
      hospitalStay: "1 to 2 days at KIMS Hospital, Nellore, with dedicated andrology surgical care.",
      resumingDailyLife: "Patients walk comfortably on day 1; light desk work within 5 to 7 days.",
      dietLifestyle: "Strict glycemic management for diabetic patients, comfortable loose clothing, gentle hygiene.",
      followUp: "Wound inspection at 1 week; clinic teaching, device activation, and green light for intimacy at 6 weeks.",
    },
    whenToConsult: [
      "Erectile dysfunction has not responded to Viagra, Cialis, or other oral medications",
      "Experiencing troublesome side effects from ED pills or injections",
      "Severe ED following prostate surgery, rectal surgery, or longstanding diabetes",
      "Peyronie's disease causing painful bending or inability to have intercourse",
      "Seeking a permanent, spontaneous, one-time solution without pill dependency",
    ],
    faqs: [
      {
        question: "Will a penile implant look noticeable to others in daily life?",
        answer:
          "Not at all. The entire prosthesis is completely internal and concealed inside the body. In clothing, athletic wear, or locker rooms, your appearance is entirely normal and discreet.",
      },
      {
        question: "Does a penile implant affect natural sensation or orgasm?",
        answer:
          "No. Penile implants do not alter skin sensation, glans sensitivity, or your ability to experience climax and ejaculation. You retain completely natural pleasure.",
      },
      {
        question: "What is the satisfaction rate among patients and partners?",
        answer:
          "Penile implants boast the highest satisfaction rating among all erectile dysfunction treatments, with over 95% of patients and partners reporting excellent long-term satisfaction and restored intimacy.",
      },
      {
        question: "How long does a modern penile prosthesis last?",
        answer:
          "Modern penile implants are exceptionally durable engineered medical devices designed to last 10 to 15+ years. If replacement is ever needed down the line, a revision procedure can be safely performed.",
      },
    ],
    relatedSlugs: ["erectile-dysfunction", "male-infertility", "prostate-care"],
  },
  {
    slug: "urological-cancers",
    title: "Urological Cancers",
    category: "Urological Cancers",
    shortDescription: "Expert care for kidney, bladder, prostate and other urological cancers with advanced treatment approaches.",
    iconName: "Ribbon",
    heroHeadline: "Urological Oncology Care",
    heroDescription: "Comprehensive, multi-disciplinary surgical oncology for kidney, bladder, prostate, and testicular cancers at KIMS Hospital Nellore.",
    quote: "Timely detection and precision laparoscopic or robotic surgery achieve outstanding cure rates while preserving organ function.",
    overview: {
      description:
        "Urological oncology covers cancers of the kidneys, urinary bladder, prostate gland, and male genitalia. Dr. Rakesh Vamsi utilizes state-of-the-art diagnostic imaging, flexible cystoscopy, and minimally invasive robotic/laparoscopic surgical oncological techniques to remove tumors completely while preserving organ function and quality of life.",
      keyPoints: [
        "Comprehensive oncological staging and multi-disciplinary tumor board review",
        "Nephron-sparing partial nephrectomy to save healthy kidney tissue",
        "Transurethral and radical robotic solutions for bladder and prostate tumors",
        "Patient-centered rehabilitation and compassionate survivor follow-up",
      ],
    },
    symptoms: [
      { title: "Painless visible blood in urine (Hematuria)", icon: "Droplet", description: "Most important early sign of bladder or kidney tumor" },
      { title: "Unexplained flank or lower back pain", icon: "AlertTriangle", description: "Persistent dull ache on one side not caused by injury" },
      { title: "Palpable lump or mass in the abdomen or testicle", icon: "Activity", description: "Firm painless swelling needing urgent evaluation" },
      { title: "Rapid unexplained weight loss & fatigue", icon: "TrendingDown", description: "Systemic markers of advanced disease" },
    ],
    causes: [
      { title: "Tobacco and cigarette smoking", icon: "Flame", description: "Single largest risk factor for bladder and kidney cancer" },
      { title: "Industrial chemical / dye exposure", icon: "FlaskConical", description: "Aromatic amines and workplace solvents" },
      { title: "Genetic mutations / family history", icon: "Users", description: "BRCA2, Lynch syndrome, or Von Hippel-Lindau disease" },
      { title: "Chronic bladder inflammation or stones", icon: "Shield", description: "Longstanding untreated irritation" },
    ],
    diagnosis: [
      { title: "Multiparametric MRI (mpMRI)", icon: "Scan", description: "High-resolution imaging for prostate and kidney lesion localization." },
      { title: "High-Definition Flexible Cystoscopy", icon: "Eye", description: "In-clinic optical inspection of bladder lining with zero discomfort." },
      { title: "Triple-Phase Contrast CT KUB", icon: "Scan", description: "Precise anatomical mapping of renal masses and vascular anatomy." },
      { title: "Targeted Biopsy & Histopathology", icon: "FlaskConical", description: "Definitive tissue diagnosis and Gleason/grade scoring." },
    ],
    treatmentOptions: [
      {
        title: "Robotic / Laparoscopic Partial Nephrectomy",
        subtitle: "Nephron-Sparing Kidney Cancer Surgery",
        description: "Precise excision of renal tumor with 3D robotic magnification while preserving the remainder of healthy kidney function.",
        recoveryTime: "2-3 days hospital stay",
        isMinimallyInvasive: true,
      },
      {
        title: "TURBT (Transurethral Resection of Bladder Tumor)",
        subtitle: "Endoscopic Bladder Cancer Treatment",
        description: "Complete endoscopic resection and intravesical therapy for non-muscle-invasive bladder cancers without skin incisions.",
        recoveryTime: "24-48 hours",
        isMinimallyInvasive: true,
      },
      {
        title: "Robotic Radical Prostatectomy",
        subtitle: "Precision Nerve-Sparing Prostate Excision",
        description: "Complete removal of cancerous prostate gland with robotic precision to preserve urinary continence and erectile nerves.",
        recoveryTime: "2-3 days hospital stay",
        isMinimallyInvasive: true,
      },
    ],
    recoveryInfo: {
      hospitalStay: "2 to 3 days at KIMS Hospital with dedicated nursing care.",
      resumingDailyLife: "Patients walk within 24 hours and resume normal light living in 10-14 days.",
      dietLifestyle: "Balanced anti-inflammatory nutrition, complete smoking cessation, gentle walking.",
      followUp: "Regular oncological surveillance schedule (CT, ultrasound, tumor markers) every 3 to 6 months.",
    },
    whenToConsult: [
      "Any visible red or cola-colored urine, even if painless and happened only once",
      "A newly discovered lump or firmness in the testicle",
      "Elevated PSA detected during routine blood tests",
      "Incidental kidney mass discovered on routine abdominal sonography",
    ],
    faqs: [
      {
        question: "Does blood in the urine always mean cancer?",
        answer: "No. Blood in urine (hematuria) can also be caused by kidney stones or infections. However, it must always be evaluated by a urologist to rule out serious conditions early.",
      },
      {
        question: "Can kidney cancer be treated without removing the whole kidney?",
        answer: "Yes! With modern laparoscopic and robotic partial nephrectomy, Dr. Rakesh Vamsi removes only the tumor with a clear margin, saving the healthy portion of your kidney.",
      },
    ],
    relatedSlugs: ["laparoscopic-robotic-surgery", "prostate-care", "kidney-stones"],
  },
  {
    slug: "laparoscopic-robotic-surgery",
    title: "Laparoscopic & Robotic Surgery",
    category: "Laparoscopic & Robotic Surgery",
    shortDescription: "Minimally invasive and advanced robotic surgical solutions for faster recovery and better outcomes.",
    iconName: "Cpu",
    heroHeadline: "Laparoscopic & Robotic Surgery",
    heroDescription: "Cutting-edge keyhole surgical excellence offering high precision, miniature incisions, minimal discomfort, and swift recovery.",
    quote: "Modern robotic and laparoscopic techniques allow us to execute the most complex urological operations with pinpoint accuracy and minimal trauma to the patient.",
    overview: {
      description:
        "As a specialized Laparoscopic & Robotic Urologist, Dr. Rakesh Vamsi provides advanced minimally invasive surgery for complex kidney reconstructive procedures, donor nephrectomies, pyeloplasty, and urological oncologic resections. Patients benefit from tiny keyhole punctures, negligible blood loss, minimal scarring, and quick return home.",
      keyPoints: [
        "Tiny 5mm–10mm keyhole incisions instead of large open cuts",
        "10x 3D high-definition magnified visualization of delicate nerves and blood vessels",
        "Significantly lower post-operative pain and infection risk",
        "Rapid discharge and faster return to active professional life",
      ],
    },
    symptoms: [
      { title: "Kidney pelvi-ureteric junction (PUJ) obstruction", icon: "Activity", description: "Flank swelling, hydronephrosis, or recurrent infection" },
      { title: "Large non-functioning kidney / pyonephrosis", icon: "AlertTriangle", description: "Chronic flank pain or severe infection requiring removal" },
      { title: "Urological tumors requiring precision excision", icon: "Shield", description: "Kidney, adrenal, bladder, or prostate masses" },
      { title: "Complex ureteric strictures requiring reconstructive repair", icon: "Wrench", description: "Blocked urinary conduit needing reimplantation" },
    ],
    causes: [
      { title: "Congenital anatomical narrowing", icon: "Clock", description: "PUJ obstruction or aberrant crossing vessels" },
      { title: "Oncological malignancies", icon: "Ribbon", description: "Need for oncologically sound radical or partial organ excision" },
      { title: "Surgical trauma or stone disease scarring", icon: "Flame", description: "Strictures and fibrosis obstructing normal urine transit" },
    ],
    diagnosis: [
      { title: "CT Angiography & Urography", icon: "Scan", description: "3D vascular mapping of renal arteries, veins, and collecting system." },
      { title: "DTPA / EC Renal Dynamic Scan", icon: "Activity", description: "Nuclear medicine scan assessing individual split kidney function and drainage curves." },
      { title: "Pre-Operative Anesthesia Workup", icon: "CheckCircle", description: "Comprehensive cardiopulmonary safety profiling." },
    ],
    treatmentOptions: [
      {
        title: "Laparoscopic / Robotic Pyeloplasty",
        subtitle: "Reconstruction for PUJ Obstruction",
        description: "Dismembering and reconstructing the renal pelvis and ureter with delicate microscopic suturing to ensure lifelong unobstructed urine drainage.",
        recoveryTime: "1 to 2 days hospital stay",
        isMinimallyInvasive: true,
      },
      {
        title: "Laparoscopic Radical / Simple Nephrectomy",
        subtitle: "Keyhole Kidney Removal",
        description: "Safe extraction of diseased, infected, or cancerous kidneys through small keyhole ports with minimal muscle disruption.",
        recoveryTime: "2 days hospital stay",
        isMinimallyInvasive: true,
      },
      {
        title: "Robotic Ureteric Reimplantation & Boari Flap",
        subtitle: "Complex Reconstructive Urology",
        description: "Reconnecting damaged or strictured ureters into the urinary bladder with robotic ergonomics and magnification.",
        recoveryTime: "2-3 days hospital stay",
        isMinimallyInvasive: true,
      },
    ],
    recoveryInfo: {
      hospitalStay: "Typically 24 to 48 hours at KIMS Hospital, Nellore.",
      resumingDailyLife: "Walking on day 1; light desk work within 5 to 7 days.",
      dietLifestyle: "Regular healthy diet resumed within 24 hours of surgery; plenty of oral fluids.",
      followUp: "Post-op check at 1 week for wound check and stent removal planning.",
    },
    whenToConsult: [
      "Diagnosed with hydronephrosis or pelvi-ureteric junction (PUJ) obstruction",
      "Seeking a second opinion on open surgery vs minimally invasive robotic options",
      "Adrenal mass or renal tumor requiring surgical evaluation",
      "Desire for minimal scarring, reduced pain, and fast recovery",
    ],
    faqs: [
      {
        question: "Is laparoscopic/robotic surgery safer than open surgery?",
        answer: "Yes. Clinical trials worldwide confirm that minimally invasive techniques result in less blood loss, lower risk of wound infection, shorter hospital stays, and equivalent or superior surgical outcomes.",
      },
      {
        question: "Does robotic surgery mean a machine operates on me?",
        answer: "No. The surgeon is in 100% control every millisecond. The robotic console translates the surgeon's natural hand movements into micro-instruments inside the body with unmatched tremor filtration and flexibility.",
      },
    ],
    relatedSlugs: ["kidney-stones", "urological-cancers", "prostate-care"],
  },
  {
    slug: "urinary-tract-infections",
    title: "Urinary Tract Infections",
    category: "Kidney & Urinary Tract",
    shortDescription: "Specialized diagnosis, management and recurrent infection prevention strategies.",
    iconName: "Droplet",
    heroHeadline: "Urinary Tract Infections (UTI)",
    heroDescription: "Specialized diagnostic workup and recurrent UTI prevention protocols to relieve burning, urgency, and frequent relapses.",
    quote: "Recurrent UTIs are not just an annoyance; they require an anatomical and microbiological search to find the true root cause.",
    overview: {
      description:
        "While simple UTIs are easily treated, recurrent or complicated urinary tract infections require expert urological investigation. Dr. Rakesh Vamsi evaluates underlying causes such as stone disease, incomplete bladder emptying, anatomical variations, or antibiotic resistance to provide durable relief.",
      keyPoints: [
        "Urine culture-guided targeted antimicrobial stewardship",
        "Ultrasound KUB screening to rule out hidden stones or urinary retention",
        "Preventative lifestyle, urinary hygiene, and prophylactic protocols",
        "Expert management for both men and women",
      ],
    },
    symptoms: [
      { title: "Burning or stinging sensation while urinating", icon: "Flame", description: "Sharp discomfort during micturition" },
      { title: "Constant urgency to urinate", icon: "Clock", description: "Feeling like bladder never completely empties" },
      { title: "Cloudy, dark, or strong-smelling urine", icon: "Droplet", description: "Visible turbidity caused by white blood cells" },
      { title: "Pelvic or lower abdominal cramping", icon: "AlertTriangle", description: "Suprapubic tenderness and discomfort" },
    ],
    causes: [
      { title: "Bacterial colonization (e.g. E. coli)", icon: "FlaskConical", description: "Ascending bacteria from gastrointestinal flora" },
      { title: "Underlying kidney or bladder stones", icon: "Activity", description: "Stones harbor bacteria and prevent eradication" },
      { title: "Incomplete bladder emptying", icon: "Shield", description: "Residual urine serves as a culture medium for bacteria" },
    ],
    diagnosis: [
      { title: "Urine Routine & Microscopic Examination", icon: "FlaskConical", description: "Assesses pus cells, red cells, and nitrites." },
      { title: "Quantitative Urine Culture & Sensitivity", icon: "Activity", description: "Identifies the specific organism and determines effective antibiotics." },
      { title: "Ultrasound KUB & Post-Void Residual", icon: "Scan", description: "Rules out structural blockage, stones, or residual urine." },
    ],
    treatmentOptions: [
      {
        title: "Targeted Culture-Guided Therapy",
        subtitle: "Antimicrobial Treatment",
        description: "Short-course, highly targeted antibiotics based on lab sensitivity testing to eliminate resistant pathogens.",
        recoveryTime: "Rapid relief within 24-48 hours",
        isMinimallyInvasive: true,
      },
      {
        title: "Recurrent UTI Prevention Protocol",
        subtitle: "Prophylaxis & Bladder Health",
        description: "Non-antibiotic therapies including D-Mannose, urinary alkalinizers, and low-dose prophylactic regimens.",
        recoveryTime: "Long-term protection",
        isMinimallyInvasive: true,
      },
    ],
    recoveryInfo: {
      hospitalStay: "Outpatient clinic care unless complicated pyelonephritis requires IV fluids.",
      resumingDailyLife: "Immediate return to work once symptoms improve with initial doses.",
      dietLifestyle: "Abundant water intake (2.5-3L daily), regular urination every 3-4 hours, proper personal hygiene.",
      followUp: "Repeat clean-catch urine culture 1-2 weeks after treatment completion.",
    },
    whenToConsult: [
      "Fever with chills or severe flank pain (suggests kidney infection / pyelonephritis)",
      "Blood visible in urine",
      "More than 2 to 3 UTI episodes in a 6-month period",
      "Symptoms not improving after 48 hours of basic antibiotics",
    ],
    faqs: [
      {
        question: "Why do my UTIs keep coming back?",
        answer: "Recurrent infections usually stem from an underlying anatomical cause (such as a small kidney stone or incomplete bladder emptying) or antibiotic resistance. A urological evaluation pinpoints and fixes this root cause.",
      },
    ],
    relatedSlugs: ["kidney-stones", "prostate-care"],
  },
  {
    slug: "reconstructive-urology",
    title: "Reconstructive Urology",
    category: "Reconstructive Urology",
    shortDescription: "Surgical reconstruction for urethral strictures, congenital anomalies and trauma.",
    iconName: "Wrench",
    heroHeadline: "Reconstructive Urology",
    heroDescription: "Specialized reconstructive surgical procedures for urethral stricture disease, ureteric injuries, and congenital urinary tract anomalies.",
    quote: "Restoring normal anatomical function and smooth urine flow transforms long-term patient comfort and protects kidney health.",
    overview: {
      description:
        "Reconstructive urology is a super-specialized discipline focused on restoring normal anatomical structure and physiological function to the urinary tract. Dr. Rakesh Vamsi performs buccal mucosal graft urethroplasty, laparoscopic ureteric reimplantation, and bladder reconstructions with meticulous technique.",
      keyPoints: [
        "Buccal mucosal graft (BMG) urethroplasty for recurrent urethral strictures",
        "Minimally invasive repair of ureteric injuries and strictures",
        "High success and durability compared to temporary dilations",
        "Protection of upper urinary tracts and preservation of continence",
      ],
    },
    symptoms: [
      { title: "Progressive thinning of urinary stream", icon: "Activity", description: "Stream sprays, splits, or reduces to a trickle" },
      { title: "Prolonged time needed to empty bladder", icon: "Clock", description: "Straining during urination" },
      { title: "Recurrent urinary infections or retention", icon: "Flame", description: "Repeated blockage requiring catheterization" },
    ],
    causes: [
      { title: "Prior catheterization or endoscopic trauma", icon: "Shield", description: "Iatrogenic urethral injury or scarring" },
      { title: "Pelvic fracture / straddle injury", icon: "AlertTriangle", description: "Traumatic disruption of urethra or bladder neck" },
      { title: "Lichen sclerosus (BXO)", icon: "Flame", description: "Chronic inflammatory skin condition narrowing the urethral meatus" },
    ],
    diagnosis: [
      { title: "Retrograde Urethrogram (RGU) & MCU", icon: "Scan", description: "X-ray contrast study mapping exact length, location, and severity of stricture." },
      { title: "Uroflowmetry", icon: "Activity", description: "Measures typical plateau-pattern flattened curve characteristic of stricture." },
      { title: "Diagnostic Urethroscopy", icon: "Eye", description: "Direct visualization of the caliber and mucosal health." },
    ],
    treatmentOptions: [
      {
        title: "Buccal Mucosal Graft (BMG) Urethroplasty",
        subtitle: "Definitive Reconstructive Repair",
        description: "Harvesting a small patch of inner cheek lining (buccal mucosa) to reconstruct and widen the narrowed urethra, achieving long-term cure rates over 90%.",
        recoveryTime: "2-3 days hospital stay",
        isMinimallyInvasive: false,
      },
      {
        title: "Anastomotic Urethroplasty",
        subtitle: "Excision & Primary Repair",
        description: "Excision of short traumatic strictures with end-to-end reconnecting of healthy urethral tissue.",
        recoveryTime: "2 days hospital stay",
        isMinimallyInvasive: false,
      },
    ],
    recoveryInfo: {
      hospitalStay: "2 to 3 days at KIMS Hospital Nellore.",
      resumingDailyLife: "Patients walk next day; temporary soft catheter kept for 2 to 3 weeks until healing.",
      dietLifestyle: "Soft diet for 3 days if mouth graft taken; abundant fluids.",
      followUp: "Trial of voiding and follow-up uroflowmetry after catheter removal.",
    },
    whenToConsult: [
      "History of repeated urethral dilations that keep failing",
      "Straining to pass urine with very thin stream or spraying",
      "Pelvic trauma or straddle injury followed by urinary difficulty",
    ],
    faqs: [
      {
        question: "Why is urethroplasty better than repeated urethral dilation?",
        answer: "Simple dilation or optical urethrotomy only stretches scar tissue and has high recurrence rates (over 60-70%). Urethroplasty replaces or excises the diseased tissue, providing a permanent cure in over 90% of cases.",
      },
    ],
    relatedSlugs: ["laparoscopic-robotic-surgery", "prostate-care", "kidney-stones"],
  },
  {
    slug: "hydrocele",
    title: "Hydrocele & Scrotal Swelling",
    category: "Men's Health",
    shortDescription: "Don't ignore swelling in the scrotum. Advanced evaluation and minimally invasive surgery (hydrocelectomy) by Dr. G. Rakesh Vamsi.",
    iconName: "User",
    heroHeadline: "Hydrocele Treatment",
    heroDescription: "Expert diagnosis and gentle minimally invasive surgical hydrocelectomy for scrotal fluid swelling. Don't feel embarrassed — get it checked.",
    quote: "Scrotal swelling is common, treatable, and should never be ignored. Modern daycare procedures provide rapid, permanent relief.",
    overview: {
      description:
        "A hydrocele is a condition in which fluid collects in the thin sheath (tunica vaginalis) surrounding the testicle, causing painless or uncomfortable swelling in the scrotum. It is common in men of all ages and can occur after inflammation, mild trauma, or spontaneously. Dr. G. Rakesh Vamsi provides discreet clinical evaluation and gentle daycare surgical correction.",
      keyPoints: [
        "Common urological condition affecting men across all age groups",
        "Fluid collection around testicle causing heaviness and visible enlargement",
        "Painless and quick clinical evaluation with scrotal Doppler ultrasound",
        "Minimally invasive daycare surgery (hydrocelectomy) offers permanent cure",
      ],
    },
    symptoms: [
      { title: "Swelling in one or both sides of scrotum", icon: "Activity", description: "Noticeable fluid-filled enlargement" },
      { title: "Heaviness or dragging discomfort", icon: "Clock", description: "Weight sensation in the groin or scrotum" },
      { title: "Enlargement of the scrotum", icon: "Shield", description: "Gradual or sudden increase in scrotal size" },
      { title: "Usually painless swelling", icon: "CheckCircle", description: "Soft to firm swelling without severe tenderness unless infected" },
    ],
    causes: [
      { title: "Fluid imbalance in tunica vaginalis", icon: "Droplet", description: "Overproduction or defective absorption of natural serous fluid" },
      { title: "Mild scrotal trauma or strain", icon: "AlertTriangle", description: "Injury triggering reactive fluid accumulation" },
      { title: "Epididymitis / local inflammation", icon: "Flame", description: "Infection of the coiled tube behind testicle" },
    ],
    diagnosis: [
      { title: "Physical Clinical Examination", icon: "Stethoscope", description: "Gentle palpation and transillumination test in a private consultation room." },
      { title: "High-Resolution Scrotal Ultrasound", icon: "Scan", description: "Confirms clear fluid collection and checks testicle health with color Doppler." },
    ],
    treatmentOptions: [
      {
        title: "Minimally Invasive Hydrocelectomy",
        subtitle: "Daycare Surgical Excision / Eversion",
        description: "A small cosmetic incision in the scrotal midline allows complete drainage of fluid and eversion/excision of the fluid-producing sac (Jaboulay or Lord technique), preventing recurrence permanently.",
        recoveryTime: "Daycare, same day discharge",
        isMinimallyInvasive: true,
      },
      {
        title: "Conservative Monitoring",
        subtitle: "Observation for Small, Asymptomatic Fluid",
        description: "Small, non-bothersome hydroceles can be periodically monitored if ultrasound confirms benign nature.",
        recoveryTime: "Routine follow-up",
        isMinimallyInvasive: true,
      },
    ],
    recoveryInfo: {
      hospitalStay: "Daycare surgery at KIMS Hospital; patients walk within hours and return home the same evening.",
      resumingDailyLife: "Light desk work in 48 to 72 hours; wear scrotal support for 10-14 days.",
      dietLifestyle: "Normal diet immediately; avoid heavy weightlifting or cycling for 2 weeks.",
      followUp: "One clinic check-up at 1 week for routine healing assessment.",
    },
    whenToConsult: [
      "Any newly noticed or persistent swelling in the scrotum",
      "Sudden, severe scrotal pain (requires immediate emergency medical care to rule out testicular torsion)",
      "Heaviness interfering with walking, sitting, or sports activities",
      "Swelling accompanied by redness, fever, or tenderness",
    ],
    faqs: [
      {
        question: "Is hydrocele surgery safe?",
        answer: "Yes, hydrocelectomy is one of the safest and most commonly performed daycare surgical procedures in urology. It carries a success rate over 98% with permanent resolution.",
      },
      {
        question: "Can fluid simply be drained with a needle instead of surgery?",
        answer: "Needle aspiration is rarely recommended because the fluid almost always returns within weeks and carries an infection risk. Surgical hydrocelectomy permanently removes the fluid-secreting lining.",
      },
      {
        question: "Does hydrocele affect sexual performance or fertility?",
        answer: "A simple hydrocele does not damage the testicle or cause infertility. However, large hydroceles cause discomfort, heaviness, and embarrassment, which is why treatment restores complete confidence.",
      },
    ],
    relatedSlugs: ["male-infertility", "erectile-dysfunction", "laparoscopic-robotic-surgery"],
  },
];
