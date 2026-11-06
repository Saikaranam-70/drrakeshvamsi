import React from "react";
import { Metadata } from "next";
import BookingWizard from "@/components/booking/BookingWizard";
import { generateBreadcrumbSchema } from "@/lib/structuredData";

const siteUrl = "https://drrakeshvamsi.com";

export const metadata: Metadata = {
  title: {
    absolute: "Book Andrologist & Urologist Appointment | Dr. Rakesh Vamsi Nellore",
  },
  description:
  "Book an in-person hospital visit or confidential consultation with Dr. G. Rakesh Vamsi, Consultant Andrologist & Urologist at KIMS Hospital, Nellore. Quick, instant slot confirmation.",
  keywords: [
    "Book andrologist appointment Nellore",
    "Book urologist appointment Nellore",
    "Dr Rakesh Vamsi appointment booking",
    "KIMS Hospital Nellore urology appointment",
    "Male fertility doctor appointment Nellore",
    "Kidney stone doctor consultation Nellore",
    "Erectile dysfunction doctor consultation",
  ],
  alternates: {
    canonical: `${siteUrl}/book-appointment`,
  },
  openGraph: {
    title: "Book Andrologist & Urologist Appointment | Dr. Rakesh Vamsi Nellore",
    description:
    "Schedule a consultation with Dr. G. Rakesh Vamsi at KIMS Hospital, Nellore. Instant appointment confirmation for hospital visits.",
    url: `${siteUrl}/book-appointment`,
    type: "website",
    images: [
      {
        url: "/images/dr-rakesh-vamsi.png",
        width: 1200,
        height: 630,
        alt: "Book Appointment - Dr. G. Rakesh Vamsi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Appointment | Dr. Rakesh Vamsi Nellore",
    description:
      "Schedule a consultation with Dr. G. Rakesh Vamsi at KIMS Hospital Nellore.",
    images: ["/images/dr-rakesh-vamsi.png"],
  },
};

export default function BookAppointmentPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Book Appointment", url: "/book-appointment" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BookingWizard />
    </>
  );
}
