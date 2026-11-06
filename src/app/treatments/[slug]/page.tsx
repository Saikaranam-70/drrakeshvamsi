import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { treatmentsData } from "@/data/treatmentsData";
import { doctorData } from "@/data/doctorData";
import {
  generateBreadcrumbSchema,
  generateTreatmentSchema,
  generateFaqSchema,
} from "@/lib/structuredData";
import TreatmentDetailClient from "./TreatmentDetailClient";

interface Props {
  params: {
    slug: string;
  };
}

const siteUrl = "https://drrakeshvamsi.com";

const treatmentKeywordOverrides: Record<
  string,
  { title: string; keywords: string[] }
> = {
  "kidney-stones": {
    title: "Kidney Stones Treatment in Nellore | Dr. Rakesh Vamsi",
    keywords: [
      "Kidney Stones Treatment in Nellore",
      "Laser Kidney Stone Removal Nellore",
      "RIRS Surgery Nellore",
      "PCNL Surgery Nellore",
      "URSL Procedure Nellore",
      "Kidney Stone Specialist Nellore",
      "Best Urologist for Kidney Stones Nellore",
    ],
  },
  "prostate-care": {
    title: "Prostate Treatment & BPH Care in Nellore | Dr. Rakesh Vamsi",
    keywords: [
      "Prostate Treatment in Nellore",
      "Enlarged Prostate Specialist Nellore",
      "BPH Laser Surgery Nellore",
      "TURP Surgery Nellore",
      "Prostate Doctor KIMS Hospital Nellore",
      "Urologist Prostate Care Andhra Pradesh",
    ],
  },
  "male-infertility": {
    title: "Male Infertility Specialist in Nellore | Dr. Rakesh Vamsi",
    keywords: [
      "Male Infertility Specialist in Nellore",
      "Male Fertility Doctor in Nellore",
      "Best Andrologist in Nellore",
      "Low Sperm Count Treatment Nellore",
      "Varicocele Treatment Nellore",
      "Male Reproductive Health Nellore",
      "Andrologist in Andhra Pradesh",
    ],
  },
  "erectile-dysfunction": {
    title: "Erectile Dysfunction Treatment in Nellore | Dr. Rakesh Vamsi",
    keywords: [
      "Erectile Dysfunction Treatment in Nellore",
      "ED Specialist Doctor Nellore",
      "Best Andrologist in Nellore ED",
      "Male Sexual Health Specialist Nellore",
      "Penile Doppler Nellore",
      "Shockwave Therapy ED Nellore",
      "Andrologist Andhra Pradesh",
    ],
  },
  "penile-implants": {
    title: "Penile Implant Surgeon in Andhra Pradesh & Nellore | Dr. Rakesh Vamsi",
    keywords: [
      "Penile Implant Surgeon in Andhra Pradesh",
      "Penile Prosthesis Surgery Nellore",
      "Malleable Penile Implant India",
      "Inflatable 3-Piece Penile Implant",
      "Severe ED Treatment Andhra Pradesh",
      "Andrologist Penile Implants India",
    ],
  },
  "urological-cancers": {
    title: "Urological Cancer Specialist in Nellore | Dr. Rakesh Vamsi",
    keywords: [
      "Urological Cancer Specialist Nellore",
      "Kidney Cancer Surgery Nellore",
      "Bladder Cancer Doctor Nellore",
      "Prostate Cancer Surgeon KIMS Hospital",
      "Uro-oncology Specialist Andhra Pradesh",
    ],
  },
  "laparoscopic-robotic-surgery": {
    title: "Robotic Urology Surgeon in Andhra Pradesh | Dr. Rakesh Vamsi",
    keywords: [
      "Robotic Urology Surgeon in Andhra Pradesh",
      "Laparoscopic Kidney Surgery Nellore",
      "Minimally Invasive Urology Surgeon Nellore",
      "da Vinci Robotic Surgery Andhra Pradesh",
      "Robotic Prostatectomy Specialist",
    ],
  },
  "urinary-tract-infections": {
    title: "Urinary Tract Infection (UTI) Treatment in Nellore | Dr. Rakesh Vamsi",
    keywords: [
      "UTI Treatment in Nellore",
      "Recurrent UTI Specialist Nellore",
      "Urinary Tract Infection Doctor Nellore",
      "Bladder Infection Treatment KIMS Hospital",
      "Urologist for UTI Nellore",
    ],
  },
  "reconstructive-urology": {
    title: "Reconstructive Urology in Nellore | Dr. Rakesh Vamsi",
    keywords: [
      "Reconstructive Urology in Nellore",
      "Urethroplasty Surgery Nellore",
      "Stricture Urethra Specialist Andhra Pradesh",
      "Urethral Stricture Treatment Nellore",
      "Urological Reconstruction Doctor",
    ],
  },
  hydrocele: {
    title: "Hydrocele & Scrotal Swelling Treatment in Nellore | Dr. Rakesh Vamsi",
    keywords: [
      "Hydrocele Treatment in Nellore",
      "Scrotal Swelling Doctor Nellore",
      "Painless Hydrocelectomy Nellore",
      "Testicular Swelling Specialist KIMS Hospital",
      "Varicocelectomy Doctor Nellore",
    ],
  },
};

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

  const override = treatmentKeywordOverrides[treatment.slug];
  const pageTitle = override?.title || `${treatment.title} Treatment in Nellore | Dr. Rakesh Vamsi`;
  const pageKeywords = override?.keywords || [
    treatment.title,
    `${treatment.title} Nellore`,
    `${treatment.title} treatment Nellore`,
    `${treatment.title} specialist Nellore`,
    "Dr Rakesh Vamsi",
    "Best Urologist Nellore",
    "Andrologist in Nellore",
  ];

  return {
    title: {
      absolute: pageTitle,
    },
    description: `${treatment.shortDescription} Consult Dr. G. Rakesh Vamsi, Consultant Andrologist & Urologist at KIMS Hospital, Nellore. Advanced laser and robotic surgical care.`,
    keywords: pageKeywords,
    alternates: {
      canonical: `${siteUrl}/treatments/${treatment.slug}`,
    },
    openGraph: {
      title: pageTitle,
      description: treatment.shortDescription,
      url: `${siteUrl}/treatments/${treatment.slug}`,
      type: "article",
      images: [
        {
          url: "/images/dr-rakesh-vamsi.png",
          width: 1200,
          height: 630,
          alt: `${treatment.title} Treatment - Dr. G. Rakesh Vamsi`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
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

  const relatedTreatments = treatmentsData.filter((t) =>
    treatment.relatedSlugs?.includes(t.slug)
  );

    const treatmentSchema = generateTreatmentSchema({
      title: treatment.title,
      slug: treatment.slug,
      description: treatment.shortDescription,
    treatmentOptions: treatment.treatmentOptions,
    symptoms: treatment.symptoms,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Treatments", url: "/treatments" },
    { name: treatment.title, url: `/treatments/${treatment.slug}` },
  ]);

  const faqSchema =
    treatment.faqs && treatment.faqs.length > 0
        ? generateFaqSchema(treatment.faqs)
        : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(treatmentSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
