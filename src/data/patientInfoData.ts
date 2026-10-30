export interface PatientGuideSection {
  id: string;
  title: string;
  shortDesc: string;
  icon: string;
  fullContent: {
    overview: string;
    items: string[];
    importantNote?: string;
  };
}

export const patientJourneySteps = [
  {
    step: 1,
    title: "Book Appointment",
    desc: "Schedule your consultation online or call us.",
    details: "Choose your preferred date, time slot, and consultation mode easily.",
  },
  {
    step: 2,
    title: "Consultation",
    desc: "Detailed evaluation and discussion with Dr. Rakesh Vamsi.",
    details: "Thorough symptom discussion, physical examination, and diagnostic review in private.",
  },
  {
    step: 3,
    title: "Treatment Plan",
    desc: "Personalized treatment plan based on your condition.",
    details: "Clear explanation of medical, lifestyle, or minimally invasive surgical options.",
  },
  {
    step: 4,
    title: "Follow-Up Care",
    desc: "Continuous support for better outcomes and long-term health.",
    details: "Scheduled post-treatment reviews, recovery guidance, and recurrence prevention.",
  },
];

export const patientGuides: PatientGuideSection[] = [
  {
    id: "before-visit",
    title: "Before Your Visit",
    shortDesc: "Information on what to bring, how to prepare and what to expect.",
    icon: "ClipboardCheck",
    fullContent: {
      overview:
        "Preparing ahead helps make your consultation thorough, comfortable, and productive.",
      items: [
        "Bring all past medical records, discharge summaries, and operative notes.",
        "Carry all recent lab reports (blood tests, urine culture, ultrasound scans, CT/MRI films).",
        "Make a list of current prescription medicines, over-the-counter drugs, and herbal supplements.",
        "Write down key symptoms and when they first started.",
        "Bring your government-issued ID card and health insurance card.",
      ],
      importantNote:
        "If you are undergoing an ultrasound of the pelvis/bladder, drink 3 to 4 glasses of water 1 hour beforehand without emptying your bladder so it can be evaluated full.",
    },
  },
  {
    id: "during-consultation",
    title: "During Consultation",
    shortDesc: "What happens during your visit and how we evaluate your condition.",
    icon: "Stethoscope",
    fullContent: {
      overview:
        "Dr. Rakesh Vamsi provides an unhurried, private environment where your health concerns are heard with utmost confidentiality and respect.",
      items: [
        "Private clinical interview discussing your medical history and lifestyle.",
        "Gentle, focused physical examination conducted in a private examination room.",
        "In-clinic diagnostic reviews such as uroflowmetry if voiding difficulties are present.",
        "Review of imaging with real-time explanation on high-definition display monitors.",
        "Open dialogue where all questions regarding diagnosis, prognosis, and choices are welcomed.",
      ],
    },
  },
  {
    id: "treatment-procedures",
    title: "Treatment & Procedures",
    shortDesc: "Step-by-step information about treatment options and procedures.",
    icon: "Bed",
    fullContent: {
      overview:
        "When procedural or surgical intervention is needed, you receive transparent guidance from pre-op preparation to post-op discharge.",
      items: [
        "Comprehensive pre-anesthesia health check-up and blood matching.",
        "Written explanation of the procedure, expected duration, and anesthesia type.",
        "State-of-the-art operation theaters equipped with advanced lasers and robotic technology at KIMS Hospital.",
        "Dedicated nursing and clinical care team monitoring your comfort at every stage.",
      ],
    },
  },
  {
    id: "after-treatment",
    title: "After Treatment",
    shortDesc: "Recovery guidelines, lifestyle recommendations and follow-up care.",
    icon: "HeartPulse",
    fullContent: {
      overview:
        "Smooth post-operative recovery is supported by tailored discharge instructions, medication schedules, and direct follow-up access.",
      items: [
        "Clear printed discharge instructions for wound care and medication schedules.",
        "Dietary and hydration recommendations tailored to your procedure.",
        "Emergency contact numbers provided for any unexpected fever or symptoms.",
        "Scheduled follow-up consultation and painless stent removal protocols.",
      ],
    },
  },
  {
    id: "support-resources",
    title: "Support & Resources",
    shortDesc: "Helpful resources for patients and families.",
    icon: "Users",
    fullContent: {
      overview:
        "Navigating hospital care is easier with our dedicated patient coordination team at KIMS Hospital Nellore.",
      items: [
        "Cashless insurance desk assistance and TPA claim processing support.",
        "Guidance for outstation and international patients regarding nearby accommodations.",
        "Educational brochures and dietary stone prevention guidelines.",
        "Direct WhatsApp coordinator support for query resolution.",
      ],
    },
  },
];

export const quickInfoItems = [
  { id: "process", title: "Consultation Process", href: "/patient-info#consultation-process" },
  { id: "facilities", title: "Hospital Facilities", href: "/contact#facilities" },
  { id: "insurance", title: "Insurance & Billing", href: "/patient-info#insurance" },
  { id: "faqs", title: "Frequently Asked Questions", href: "/faqs" },
  { id: "resources", title: "Patient Resources", href: "/patient-info#support-resources" },
];
