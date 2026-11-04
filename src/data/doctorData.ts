export interface AcademicQualification {
  degree: string;
  institution?: string;
  year?: string;
  description?: string;
}

export interface DoctorInfo {
  name: string;
  prefix: string;
  fullName: string;
  designation: string;
  specialization: string;
  experienceYears: string;
  patientsCount: string;
  surgeriesCount: string;
  hospital: {
    name: string;
    location: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
    phone: string;
    email: string;
    hours: string;
    mapQuery: string;
  };
  social: {
    instagram: string;
    instagramUrl: string;
  };
  quote: string;
  shortBio: string;
  fullBio: string;
  qualifications: AcademicQualification[];
  careHighlights: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export const doctorData: DoctorInfo = {
  name: "Dr. G. Rakesh Vamsi",
  prefix: "Dr.",
  fullName: "Dr. G. Rakesh Vamsi",
  designation: "Consultant Urologist & Andrologist",
  specialization: "Laparoscopic & Robotic Surgeon",
  experienceYears: "10+",
  patientsCount: "5000+",
  surgeriesCount: "1000+",
  hospital: {
    name: "KIMS Hospital",
    location: "Nellore, Andhra Pradesh",
    address: "KIMS Hospital, SP Nagar, Nellore, Andhra Pradesh, India - 524002",
    city: "Nellore",
    state: "Andhra Pradesh",
    pincode: "524002",
    phone: "+91 76740 08057",
    email: "info@drrakeshvamsi.com",
    hours: "Mon - Sat: 9:00 AM - 5:00 PM (Slot basis - as per hospital schedule)",
    mapQuery: "KIMS+Hospitals+Nellore",
  },
  social: {
    instagram: "@dr.rakeshvamsi",
    instagramUrl: "https://www.instagram.com",
  },
  quote:
    "My focus is to provide advanced, ethical and personalized urological care with the latest technology for better outcomes and improved quality of life.",
  shortBio:
    "Dedicated to providing comprehensive urological and andrological care with a focus on advanced, minimally invasive and patient-centered treatment approaches.",
  fullBio:
    "Dr. Rakesh Vamsi is a distinguished Consultant Urologist, Andrologist, and Laparoscopic & Robotic Surgeon based at KIMS Hospital, Nellore. With extensive specialized surgical training and over a decade of clinical experience, Dr. Vamsi provides evidence-based, compassionate care for complex kidney, prostate, urinary, and male reproductive conditions. His surgical philosophy prioritizes minimally invasive laser, laparoscopic, and robotic techniques that ensure faster healing, minimal post-operative discomfort, and optimal clinical outcomes.",
  qualifications: [
    {
      degree: "MBBS",
      institution: "Renowned Medical University",
      year: "Graduate Medical Degree",
      description: "Rigorous foundational medical and clinical training.",
    },
    {
      degree: "MS (General Surgery)",
      institution: "Postgraduate Institute of Surgery",
      year: "Postgraduate Masters Degree",
      description: "Comprehensive training in surgical management and perioperative care.",
    },
    {
      degree: "MCh (Urology)",
      institution: "Super-Specialty Institute of Medical Sciences",
      year: "Super-Specialty Surgical Degree",
      description: "Advanced surgical residency in adult and pediatric urology, endourology, and andrology.",
    },
    {
      degree: "Fellowship in Laparoscopy & Robotic Surgery",
      institution: "Advanced Minimally Invasive Surgery Center",
      year: "Advanced Fellowship Training",
      description: "Specialized expertise in keyhole laparoscopic and da Vinci robotic urological procedures.",
    },
  ],
  careHighlights: [
    {
      title: "Patient-Centered Approach",
      description: "Every treatment plan is tailored to the individual patient with clear, transparent communication.",
      icon: "Users",
    },
    {
      title: "Advanced Treatment Options",
      description: "Cutting-edge laser lithotripsy, robotic surgery, and precision diagnostics.",
      icon: "ShieldCheck",
    },
    {
      title: "Minimally Invasive & Robotic Surgery",
      description: "Smaller incisions, minimal blood loss, minimal pain, and rapid return to everyday life.",
      icon: "Stethoscope",
    },
    {
      title: "Compassionate Care",
      description: "A comfortable, supportive, and confidential environment for discussing sensitive health concerns.",
      icon: "HeartHandshake",
    },
  ],
};
