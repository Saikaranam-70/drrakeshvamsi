import React from "react";
import { Metadata } from "next";
import BookingWizard from "@/components/booking/BookingWizard";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://drrakeshvamsi.com";

export const metadata: Metadata = {
  title: "Book Doctor Appointment Online | Dr. G. Rakesh Vamsi | KIMS Hospital",
  description:
  "Schedule an in-person hospital or video consultation with Dr. G. Rakesh Vamsi, Consultant Urologist & Andrologist at KIMS Hospital, Nellore. Quick, direct slot booking with instant confirmation.",
  keywords: [
    "Book urologist appointment Nellore",
    "Dr Rakesh Vamsi appointment booking",
    "KIMS Hospital Nellore urology appointment",
    "Online doctor consultation Nellore",
    "Kidney stone doctor consultation",
  ],
  alternates: {
    canonical: `${siteUrl}/book-appointment`,
  },
  openGraph: {
    title: "Book Appointment Online | Dr. G. Rakesh Vamsi",
    description:
      "Schedule a consultation with Dr. G. Rakesh Vamsi at KIMS Hospital, Nellore. Instant confirmation for in-person or video visits.",
    url: `${siteUrl}/book-appointment`,
    type: "website",
  },
};

export default function BookAppointmentPage() {
  return <BookingWizard />;
}
