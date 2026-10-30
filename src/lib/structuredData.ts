import { doctorData } from "@/data/doctorData";

export function generatePhysicianSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctorData.name,
    jobTitle: doctorData.designation,
    description: doctorData.shortBio,
    medicalSpecialty: [
      "https://schema.org/Urological",
      "Urology",
      "Andrology",
      "Minimally Invasive Surgery",
      "Robotic Surgery",
    ],
    worksFor: {
      "@type": "MedicalOrganization",
      name: doctorData.hospital.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: "SP Nagar",
        addressLocality: doctorData.hospital.city,
        addressRegion: doctorData.hospital.state,
        postalCode: doctorData.hospital.pincode,
        addressCountry: "IN",
      },
    },
    telephone: doctorData.hospital.phone,
    email: doctorData.hospital.email,
    sameAs: [doctorData.social.instagramUrl],
  };
}

export function generateClinicSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "UROANDROGUY - Urology & Andrology Care",
    alternateName: "Dr. Rakesh Vamsi Urology Clinic at KIMS Hospital",
    description:
      "Advanced andrology, kidney stone laser surgery, prostate care, and robotic urology consultations by Dr. Rakesh Vamsi at KIMS Hospital, Nellore.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "KIMS Hospital, SP Nagar",
      addressLocality: "Nellore",
      addressRegion: "Andhra Pradesh",
      postalCode: "524002",
      addressCountry: "IN",
    },
    telephone: doctorData.hospital.phone,
    openingHours: "Mo,Tu,We,Th,Fr,Sa 09:00-17:00",
    url: "https://uroandroguy.com",
    priceRange: "$$",
  };
}

export function generateFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}
