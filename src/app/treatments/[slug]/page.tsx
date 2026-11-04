import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { treatmentsData } from "@/data/treatmentsData";
import { doctorData } from "@/data/doctorData";
import TreatmentDetailClient from "./TreatmentDetailClient";

interface Props {
  params: {
    slug: string;
  };
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://drrakeshvamsi.com";

export async function generateStaticParams() {
  return treatmentsData.map((t) => ({
    slug: t.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const treatment = treatmentsData.find((t) => t.slug === params.slug);
  if (!treatment) {
    return {
      title: "Treatment Not Found",
    };
  }

  return {
    title: `${treatment.title} Treatment in Nellore | Dr. G. Rakesh Vamsi`,
    description: `${treatment.shortDescription} Consult Dr. G. Rakesh Vamsi, Consultant Urologist & Andrologist at KIMS Hospital, Nellore. Expert laser and robotic surgical care.`,
    keywords: [
      treatment.title,
      `${treatment.title} Nellore`,
      `${treatment.title} treatment Nellore`,
      `${treatment.title} specialist Nellore`,
      `${treatment.title} doctor KIMS Hospital`,
      "Dr G Rakesh Vamsi",
      "Best Urologist Nellore",
      "Urologist and Andrologist Nellore",
    ],
    alternates: {
      canonical: `${siteUrl}/treatments/${treatment.slug}`,
    },
    openGraph: {
      title: `${treatment.title} Treatment in Nellore | Dr. G. Rakesh Vamsi`,
      description: treatment.shortDescription,
      url: `${siteUrl}/treatments/${treatment.slug}`,
      type: "article",
      images: [
        {
          url: "/images/dr-rakesh-vamsi.png",
          width: 1200,
          height: 630,
          alt: `${treatment.title} Treatment by Dr. G. Rakesh Vamsi`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${treatment.title} Treatment in Nellore | Dr. G. Rakesh Vamsi`,
      description: treatment.shortDescription,
      images: ["/images/dr-rakesh-vamsi.png"],
    },
  };
}

export default function TreatmentDetailPage({ params }: Props) {
  const treatment = treatmentsData.find((t) => t.slug === params.slug);

  if (!treatment) {
    notFound();
  }

  // Find related treatment items
  const relatedTreatments = treatmentsData.filter((t) =>
    treatment.relatedSlugs?.includes(t.slug)
  );

  const treatmentSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: `${treatment.title} Treatment in Nellore | Dr. G. Rakesh Vamsi`,
    description: treatment.shortDescription,
    url: `${siteUrl}/treatments/${treatment.slug}`,
    about: {
      "@type": "MedicalCondition",
      name: treatment.title,
      possibleTreatment: treatment.treatmentOptions?.map((opt) => ({
        "@type": "MedicalTherapy",
        name: opt.title,
        description: opt.description,
      })),
      signOrSymptom: treatment.symptoms?.map((s) => ({
        "@type": "MedicalSignOrSymptom",
        name: s.title,
      })),
    },
    author: {
      "@type": "Physician",
      name: "Dr. G. Rakesh Vamsi",
      jobTitle: "Consultant Urologist & Andrologist",
      worksFor: {
        "@type": "Hospital",
        name: "KIMS Hospital, Nellore",
      },
    },
  };

  const faqSchema =
    treatment.faqs && treatment.faqs.length > 0
      ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: treatment.faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
          },
        })),
      }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(treatmentSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <TreatmentDetailClient
        treatment={treatment}
        relatedTreatments={relatedTreatments}
        doctor={doctorData}
      />
    </>
  );
}
