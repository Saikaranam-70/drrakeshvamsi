import React from "react";
import { Metadata } from "next";
import TreatmentsExplorer from "@/components/treatments/TreatmentsExplorer";
import { generateBreadcrumbSchema } from "@/lib/structuredData";

const siteUrl = "https://drrakeshvamsi.com";

export const metadata: Metadata = {
  title: {
    absolute: "Andrology & Urology Treatments in Nellore | Dr. Rakesh Vamsi",
  },
  description:
  "Comprehensive andrology & urology treatments in Nellore: Male Infertility, ED, Penile Implants, Laser Kidney Stone Removal (RIRS, PCNL) & Robotic Surgery by Dr. G. Rakesh Vamsi at KIMS Hospital.",
  keywords: [
    "Andrology treatments Nellore",
    "Urology treatments Nellore",
    "Male infertility treatment Nellore",
    "Erectile dysfunction clinic Nellore",
    "Penile implants Andhra Pradesh",
    "Laser kidney stone removal Nellore",
    "PCNL RIRS surgery Nellore",
    "Prostate treatment Nellore",
    "Robotic urology surgery Andhra Pradesh",
    "Dr Rakesh Vamsi treatments",
  ],
  alternates: {
    canonical: `${siteUrl}/treatments`,
  },
  openGraph: {
    title: "Andrology & Urology Treatments in Nellore | Dr. Rakesh Vamsi",
    description:
    "Advanced minimally invasive laser, laparoscopic, and robotic surgical treatments for andrology and urology at KIMS Hospital, Nellore.",
    url: `${siteUrl}/treatments`,
    type: "website",
    images: [
      {
        url: "/images/dr-rakesh-vamsi.png",
        width: 1200,
        height: 630,
        alt: "Andrology & Urology Treatments - Dr. G. Rakesh Vamsi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrology & Urology Treatments in Nellore | Dr. Rakesh Vamsi",
    description:
      "Explore comprehensive andrology, male fertility, kidney stone, and prostate treatments by Dr. G. Rakesh Vamsi in Nellore.",
    images: ["/images/dr-rakesh-vamsi.png"],
  },
};

export default function TreatmentsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Treatments", url: "/treatments" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <TreatmentsExplorer />
    </>
  );
}
