import React from "react";
import { Metadata } from "next";
import TreatmentsExplorer from "@/components/treatments/TreatmentsExplorer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://drrakeshvamsi.com";

export const metadata: Metadata = {
  title: "Urology & Andrology Treatments in Nellore | Dr. G. Rakesh Vamsi",
  description:
  "Comprehensive treatments for Kidney Stones (RIRS, PCNL, Laser), Prostate Enlargement (HoLEP, TURP), Male Infertility, Erectile Dysfunction & Robotic Surgery by Dr. G. Rakesh Vamsi at KIMS Hospital, Nellore.",
  keywords: [
    "Urology treatments Nellore",
    "Laser kidney stone removal Nellore",
    "PCNL RIRS surgery Nellore",
    "Prostate treatment Nellore",
    "Male infertility treatments Nellore",
    "Erectile dysfunction treatment Nellore",
    "Robotic urology surgery Andhra Pradesh",
    "Dr G Rakesh Vamsi treatments",
  ],
  alternates: {
    canonical: `${siteUrl}/treatments`,
  },
  openGraph: {
    title: "Comprehensive Urology & Andrology Treatments | Dr. G. Rakesh Vamsi",
    description:
      "Advanced minimally invasive laser, laparoscopic, and robotic surgical treatments at KIMS Hospital, Nellore.",
    url: `${siteUrl}/treatments`,
    type: "website",
    images: [
      {
        url: "/images/dr-rakesh-vamsi.png",
        width: 1200,
        height: 630,
        alt: "Urology Treatments - Dr. G. Rakesh Vamsi",
      },
    ],
  },
};

export default function TreatmentsPage() {
  return <TreatmentsExplorer />;
}
