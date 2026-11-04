import { doctorData } from "@/data/doctorData";
import { hospitalData } from "@/data/hospitalData";
import { treatmentsData } from "@/data/treatmentsData";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://drrakeshvamsi.com";

/**
 * GOD-LEVEL Schema.org JSON-LD structured data for Google Medical Knowledge Graph,
 * Local 3-Pack, Rich Snippets, Sitelinks, and Logo integration.
 */

export function generatePhysicianSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${siteUrl}/#physician`,
    name: "Dr. G. Rakesh Vamsi",
    alternateName: ["Dr. Rakesh Vamsi", "Dr. G Rakesh Vamsi Urology"],
    honorificPrefix: "Dr.",
    honorificSuffix: "MS, M.Ch (Urology)",
    jobTitle: "Consultant Urologist, Andrologist, Laparoscopic & Robotic Surgeon",
    description:
      "Dr. G. Rakesh Vamsi is a top-rated Consultant Urologist and Andrologist with 10+ years experience, 5000+ happy patients, and 1000+ successful laser, laparoscopic and robotic surgeries at KIMS Hospital, Nellore.",
    url: siteUrl,
    image: `${siteUrl}/images/dr-rakesh-vamsi.png`,
    logo: `${siteUrl}/images/logo.png`,
    telephone: hospitalData.phone,
    email: hospitalData.email,
    priceRange: "$$",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, Debit Card, UPI, Health Insurance, Cashless TPA",
    medicalSpecialty: [
      "https://schema.org/Urological",
      "Urology",
      "Andrology",
      "Endourology",
      "Minimally Invasive Surgery",
      "Robotic Surgery",
      "Laparoscopic Surgery",
      "Men's Health",
    ],
    availableService: treatmentsData.slice(0, 10).map((t) => ({
      "@type": "MedicalProcedure",
      name: t.title,
      description: t.shortDescription,
      procedureType: "https://schema.org/PercutaneousProcedure",
      url: `${siteUrl}/treatments/${t.slug}`,
    })),
    address: {
      "@type": "PostalAddress",
      streetAddress: hospitalData.fullAddress,
      addressLocality: hospitalData.branch,
      addressRegion: "Andhra Pradesh",
      postalCode: "524002",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 14.434546,
      longitude: 79.965769,
    },
    hasMap: hospitalData.googleMapsUrl,
    worksFor: {
      "@type": "Hospital",
      name: `${hospitalData.name}, ${hospitalData.branch}`,
      url: hospitalData.googleMapsUrl,
      address: {
        "@type": "PostalAddress",
        streetAddress: hospitalData.fullAddress,
        addressLocality: "Nellore",
        addressRegion: "Andhra Pradesh",
        postalCode: "524002",
        addressCountry: "IN",
      },
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "528",
      reviewCount: "412",
    },
    sameAs: [
      "https://www.google.com/maps?cid=2322137974415842213",
      "https://www.instagram.com",
    ],
  };
}

export function generateClinicSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "LocalBusiness"],
    "@id": `${siteUrl}/#clinic`,
    name: "Dr. G. Rakesh Vamsi - Consultant Urologist & Andrologist Clinic",
    alternateName: [
      "Dr Rakesh Vamsi Urology Clinic Nellore",
      "KIMS Hospital Urology Department Nellore",
    ],
    legalName: "Dr. G. Rakesh Vamsi Urology & Andrology Care",
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/images/logo.png`,
      caption: "Dr. G. Rakesh Vamsi Logo",
    },
    image: `${siteUrl}/images/dr-rakesh-vamsi.png`,
    description:
    "Premier center for advanced laser kidney stone removal (RIRS, PCNL, URSL), prostate enlargement treatment (HoLEP, TURP), male infertility, erectile dysfunction, and laparoscopic robotic urology in Nellore.",
    address: {
      "@type": "PostalAddress",
      streetAddress: hospitalData.fullAddress,
      addressLocality: "Nellore",
      addressRegion: "Andhra Pradesh",
      postalCode: "524002",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 14.434546,
      longitude: 79.965769,
    },
    telephone: hospitalData.phone,
    email: hospitalData.email,
    openingHours: "Mo-Sa 09:00-17:00",
    hasMap: hospitalData.googleMapsUrl,
    priceRange: "$$",
    currenciesAccepted: "INR",
    isAccessibleForFree: false,
    areaServed: [
      {
        "@type": "City",
        name: "Nellore",
      },
      {
        "@type": "AdministrativeArea",
        name: "Tirupati",
      },
      {
        "@type": "AdministrativeArea",
        name: "Ongole",
      },
      {
        "@type": "AdministrativeArea",
        name: "Andhra Pradesh",
      },
    ],
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "Dr. G. Rakesh Vamsi | Best Urologist & Andrologist in Nellore",
    alternateName: "Dr. Rakesh Vamsi Urology",
    publisher: {
      "@id": `${siteUrl}/#physician`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/treatments?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: ["en", "te", "hi"],
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
