import { doctorData } from "@/data/doctorData";
import { hospitalData } from "@/data/hospitalData";
import { treatmentsData } from "@/data/treatmentsData";

const siteUrl = "https://drrakeshvamsi.com";

/**
 * Production-ready Schema.org JSON-LD structured data for Google Medical Knowledge Graph,
 * Local SEO, Rich Snippets, Breadcrumbs, and Health E-E-A-T.
 * Strictly adheres to Google Search Central and Schema.org medical guidelines.
 */

export function generatePhysicianSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${siteUrl}/#physician`,
    name: "Dr. G. Rakesh Vamsi",
    alternateName: [
      "Dr. Rakesh Vamsi",
      "Dr. G Rakesh Vamsi Andrologist",
      "Dr. Rakesh Vamsi Urologist Nellore",
    ],
    honorificPrefix: "Dr.",
    honorificSuffix: "MBBS, MS (General Surgery), M.Ch (Urology), FMAS",
    jobTitle: "Consultant Andrologist, Urologist, Laparoscopic & Robotic Surgeon",
    description:
    "Dr. G. Rakesh Vamsi is a leading Consultant Andrologist and Urologist based at KIMS Hospital, Nellore. Specializing in Male Infertility, Erectile Dysfunction, Penile Implants, Laser Kidney Stone Treatment, and Advanced Robotic Surgery.",
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
      "Andrology",
      "Male Infertility",
      "Men's Reproductive Health",
      "Men's Sexual Health",
      "Endourology",
      "Minimally Invasive Surgery",
      "Robotic Surgery",
      "Laparoscopic Surgery",
      "Urology",
    ],
      knowsAbout: [
        "Andrology",
        "Male Infertility Treatment",
        "Erectile Dysfunction Management",
        "Penile Prosthesis Surgery",
        "Laser Kidney Stone Surgery (RIRS, PCNL, URSL)",
        "Prostate Enlargement (HoLEP, TURP)",
        "Robotic Urology",
        "Varicocele Embolization & Microscopic Surgery",
        "Reconstructive Urology",
        "Bladder Cancer Care",
      ],
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Renowned Medical University",
        },
        {
          "@type": "EducationalOrganization",
          name: "Super-Specialty Institute of Medical Sciences",
        },
      ],
      availableService: treatmentsData.map((t) => ({
        "@type": "MedicalProcedure",
        name: t.title,
        description: t.shortDescription,
        procedureType: "https://schema.org/PercutaneousProcedure",
        url: `${siteUrl}/treatments/${t.slug}`,
      })),
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
      hasMap: hospitalData.googleMapsUrl,
      worksFor: {
        "@type": "Hospital",
        name: "KIMS Hospital, Nellore",
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
      sameAs: [
        "https://maps.google.com/?q=KIMS+Hospitals+Nellore",
        "https://www.instagram.com/dr.rakeshvamsi",
      ],
    };
  }

  export function generateClinicSchema() {
    return {
      "@context": "https://schema.org",
      "@type": ["MedicalClinic", "LocalBusiness"],
      "@id": `${siteUrl}/#clinic`,
      name: "Dr. G. Rakesh Vamsi — Andrology, Urology & Robotic Surgery Center",
      alternateName: [
        "Dr Rakesh Vamsi Andrology & Urology Clinic",
        "KIMS Hospital Urology Department Nellore",
      ],
      legalName: "Dr. G. Rakesh Vamsi Urology & Andrology Practice",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/logo.png`,
        caption: "Dr. G. Rakesh Vamsi Logo",
      },
      image: `${siteUrl}/images/dr-rakesh-vamsi.png`,
      description:
      "Specialized tertiary center for Andrology, Male Infertility, Laser Kidney Stone removal (RIRS, PCNL, URSL), Prostate enlargement, Penile Implants, and Laparoscopic Robotic Surgery in Nellore, Andhra Pradesh.",
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
        {
          "@type": "Country",
          name: "India",
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
      name: "Dr. G. Rakesh Vamsi | Andrologist in Nellore & Consultant Urologist",
      alternateName: [
        "Andrologist in Nellore - Dr. Rakesh Vamsi",
        "Dr. Rakesh Vamsi Urology & Andrology",
        "drrakeshvamsi.com",
      ],
      description:
        "Official medical portal of Dr. G. Rakesh Vamsi — Consultant Andrologist, Urologist, and Robotic Surgeon at KIMS Hospital, Nellore, Andhra Pradesh.",
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
      inLanguage: ["en-IN", "te-IN", "hi-IN"],
    };
  }

  export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.url.startsWith("http") ? item.url : `${siteUrl}${item.url}`,
      })),
    };
  }

  export function generateTreatmentSchema(params: {
    title: string;
    slug: string;
    description: string;
    treatmentOptions?: { title: string; description?: string }[];
    symptoms?: { title: string }[];
  }) {
    return {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "@id": `${siteUrl}/treatments/${params.slug}#medicalpage`,
      name: `${params.title} Treatment in Nellore | Dr. G. Rakesh Vamsi`,
      description: params.description,
      url: `${siteUrl}/treatments/${params.slug}`,
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@type": "MedicalCondition",
        name: params.title,
        possibleTreatment: params.treatmentOptions?.map((opt) => ({
          "@type": "MedicalTherapy",
          name: opt.title,
          description: opt.description || opt.title,
        })),
        signOrSymptom: params.symptoms?.map((s) => ({
          "@type": "MedicalSignOrSymptom",
          name: s.title,
        })),
      },
      author: {
        "@type": "Physician",
        name: "Dr. G. Rakesh Vamsi",
        jobTitle: "Consultant Andrologist & Urologist",
        url: siteUrl,
        worksFor: {
          "@type": "Hospital",
          name: "KIMS Hospital, Nellore",
        },
      },
      publisher: {
        "@type": "MedicalClinic",
        name: "Dr. G. Rakesh Vamsi Urology & Andrology Care",
        url: siteUrl,
      },
    };
  }

  export function generateArticleSchema(params: {
    title: string;
    slug: string;
    description: string;
    datePublished: string;
    dateModified?: string;
    category: string;
  }) {
    // Convert standard human date (e.g., "Oct 12, 2024") to ISO format if possible
    const pubDate = new Date(params.datePublished).toISOString();
    const modDate = params.dateModified
      ? new Date(params.dateModified).toISOString()
      : pubDate;

    return {
      "@context": "https://schema.org",
      "@type": "MedicalScholarlyArticle",
      "@id": `${siteUrl}/blog/${params.slug}#article`,
      headline: params.title,
      description: params.description,
      image: `${siteUrl}/images/dr-rakesh-vamsi.png`,
      datePublished: pubDate,
      dateModified: modDate,
      articleSection: params.category,
      inLanguage: "en-IN",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${siteUrl}/blog/${params.slug}`,
      },
      author: {
        "@type": "Physician",
        name: "Dr. G. Rakesh Vamsi",
        jobTitle: "Consultant Andrologist & Urologist",
        url: siteUrl,
        worksFor: {
          "@type": "Hospital",
          name: "KIMS Hospital, Nellore",
        },
      },
      publisher: {
        "@type": "MedicalOrganization",
        name: "Dr. G. Rakesh Vamsi Andrology & Urology Care",
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/images/logo.png`,
        },
      },
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
