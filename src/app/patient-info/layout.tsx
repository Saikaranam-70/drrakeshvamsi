import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://drrakeshvamsi.com";

export const metadata: Metadata = {
  title: "Patient Guide & Hospital Visit Preparation | Dr. G. Rakesh Vamsi",
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
    title: "Patient Guide & Visit Prep | Dr. G. Rakesh Vamsi",
    description:
      "Comprehensive patient instructions, health checklist, and hospital guide for visits to KIMS Hospital, Nellore.",
    url: `${siteUrl}/patient-info`,
    type: "website",
  },
};

export default function PatientInfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

