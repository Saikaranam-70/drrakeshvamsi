import type { Metadata } from "next";
import { generateBreadcrumbSchema } from "@/lib/structuredData";

const siteUrl = "https://drrakeshvamsi.com";

export const metadata: Metadata = {
  title: {
    absolute: "Patient Guide & Hospital Visit Preparation | Dr. Rakesh Vamsi Nellore",
  },
  description:
    "Patient guidelines, pre-operative instructions, hospital admission guide, and cashless insurance claims information for visits to Dr. G. Rakesh Vamsi at KIMS Hospital, Nellore.",
  keywords: [
    "Urology patient preparation Nellore",
    "KIMS Hospital admission guide",
    "Cashless insurance urology Nellore",
    "Kidney stone surgery preparation",
    "Dr Rakesh Vamsi patient instructions",
  ],
  alternates: {
    canonical: `${siteUrl}/patient-info`,
  },
  openGraph: {
    title: "Patient Guide & Hospital Visit Preparation | Dr. Rakesh Vamsi Nellore",
    description:
      "Comprehensive patient instructions, health checklist, and hospital guide for visits to KIMS Hospital, Nellore.",
    url: `${siteUrl}/patient-info`,
    type: "website",
    images: [
      {
        url: "/images/dr-rakesh-vamsi.png",
        width: 1200,
        height: 630,
        alt: "Patient Guide - Dr. G. Rakesh Vamsi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Patient Guide | Dr. Rakesh Vamsi Nellore",
    description:
      "Pre-operative instructions, hospital admission steps, and insurance info for Dr. G. Rakesh Vamsi.",
    images: ["/images/dr-rakesh-vamsi.png"],
  },
};

export default function PatientInfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Patient Info", url: "/patient-info" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}

