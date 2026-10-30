export interface FaqItem {
  id: string;
  category: "all" | "consultation" | "treatments" | "stones" | "prostate" | "insurance";
  question: string;
  answer: string;
}

export const faqsList: FaqItem[] = [
  {
    id: "when-to-see",
    category: "consultation",
    question: "When should I see a urologist?",
    answer:
      "You should consult a urologist if you experience severe back or flank pain, blood in your urine, burning during urination, difficulty passing urine, frequent nighttime urination, testicular pain or lumps, or reproductive/erectile concerns. Immediate care is needed if you are unable to pass urine or have pain accompanied by high fever and chills.",
  },
  {
    id: "tests-before",
    category: "consultation",
    question: "Do I need any tests before my consultation?",
    answer:
      "If you already have recent ultrasound reports, blood tests (such as serum creatinine or PSA), or urine analysis, please bring them along. If you do not have any prior reports, Dr. Rakesh Vamsi will perform an initial clinical examination first and advise only the necessary tests based on your exact symptoms.",
  },
  {
    id: "painful-treatments",
    category: "treatments",
    question: "Are urological treatments painful?",
    answer:
      "Modern urology has advanced dramatically with minimally invasive laser, endoscopic, and robotic technologies. Surgeries are performed under anesthesia so you feel no discomfort. Post-operative pain is typically mild and effectively managed with standard oral analgesics, allowing quick return home.",
  },
  {
    id: "recovery-time",
    category: "treatments",
    question: "How long is the recovery time after surgery?",
    answer:
      "Because Dr. Rakesh Vamsi specializes in minimally invasive and robotic procedures, recovery times are remarkably swift. Most laser kidney stone and prostate procedures require only a 24-hour hospital stay, with patients resuming normal desk work within 3 to 5 days.",
  },
  {
    id: "insurance-coverage",
    category: "insurance",
    question: "Will my insurance cover the treatment?",
    answer:
      "Yes. Most medical and surgical urological procedures (including laser stone surgery, prostate surgery, and robotic operations) are covered under leading private health insurance plans, government schemes, and corporate policies. KIMS Hospital Nellore has a dedicated cashless insurance desk to assist with pre-authorization and claims.",
  },
  {
    id: "lifestyle-changes",
    category: "stones",
    question: "Can lifestyle changes help with my condition?",
    answer:
      "Absolutely. Adequate hydration (2.5 to 3 liters of water daily), dietary sodium moderation, regular physical activity, and balanced nutrition play a vital role in preventing recurrent kidney stones, optimizing prostate health, and improving erectile wellness.",
  },
  {
    id: "laser-vs-open",
    category: "stones",
    question: "What is the difference between laser kidney stone surgery (RIRS) and open surgery?",
    answer:
      "In RIRS (Retrograde Intrarenal Surgery), a flexible miniature camera is passed through your natural urinary opening directly to the kidney—leaving zero cuts, zero stitches, and minimal blood loss. Open stone surgery is rarely necessary today.",
  },
  {
    id: "consultation-timings",
    category: "consultation",
    question: "What are the consultation hours at KIMS Hospital Nellore?",
    answer:
      "Dr. Rakesh Vamsi consults from Monday through Saturday between 9:00 AM and 5:00 PM on a slot basis as per hospital schedule. We encourage booking your appointment in advance to avoid waiting.",
  },
  {
    id: "video-consult",
    category: "consultation",
    question: "Are video or phone consultations available?",
    answer:
      "Yes. For outstation patients, follow-up reviews, or initial guidance, tele-consultation options can be coordinated through our appointment portal and hospital reception desk.",
  },
  {
    id: "prostate-bph-cancer",
    category: "prostate",
    question: "Does an enlarged prostate lead to prostate cancer?",
    answer:
      "No. Benign Prostatic Hyperplasia (BPH) is an entirely benign (non-cancerous) enlargement of the prostate gland. It does not turn into cancer, though both can sometimes co-exist, which is why routine PSA screening and clinical evaluation are recommended for men above 50.",
  },
];
