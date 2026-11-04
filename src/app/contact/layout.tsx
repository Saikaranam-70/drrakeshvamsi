import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://drrakeshvamsi.com";

export const metadata: Metadata = {
  title: "Contact & Clinic Location | Dr. G. Rakesh Vamsi | KIMS Hospital Nellore",
  description:
    "Contact Dr. G. Rakesh Vamsi at KIMS Hospital, SP Nagar, Nellore. Call +91 76740 08057 for appointments, directions, consultation hours, and online inquiries.",
  keywords: [
    "Dr Rakesh Vamsi contact number",
    "Urologist Nellore contact",
    "KIMS Hospital Nellore urology phone number",
    "Dr Rakesh Vamsi hospital address",
    "Urology consultation timings Nellore",
  ],
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    title: "Contact & Hospital Location | Dr. G. Rakesh Vamsi",
    description:
      "Find consultation timings, phone numbers, WhatsApp contact, and hospital directions for Dr. G. Rakesh Vamsi at KIMS Hospital, Nellore.",
    url: `${siteUrl}/contact`,
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

