import type { Metadata } from "next";
import { generateBreadcrumbSchema } from "@/lib/structuredData";

const siteUrl = "https://drrakeshvamsi.com";

export const metadata: Metadata = {
  title: {
    absolute: "Contact & Clinic Location in Nellore | Dr. Rakesh Vamsi",
  },
  description:
  "Contact Dr. G. Rakesh Vamsi at KIMS Hospital, SP Nagar, Nellore. Call +91 76740 08057 for appointments, location directions, consultation hours, and inquiries.",
  keywords: [
    "Dr Rakesh Vamsi contact number",
    "Andrologist in Nellore contact",
    "Urologist Nellore contact",
    "KIMS Hospital Nellore urology phone number",
    "Dr Rakesh Vamsi hospital address",
    "Urology consultation timings Nellore",
  ],
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    title: "Contact & Clinic Location in Nellore | Dr. Rakesh Vamsi",
    description:
      "Find consultation timings, phone numbers, WhatsApp contact, and hospital directions for Dr. G. Rakesh Vamsi at KIMS Hospital, Nellore.",
    url: `${siteUrl}/contact`,
    type: "website",
    images: [
      {
        url: "/images/dr-rakesh-vamsi.png",
        width: 1200,
        height: 630,
        alt: "Dr. G. Rakesh Vamsi Contact and Clinic Location",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Dr. Rakesh Vamsi | KIMS Hospital Nellore",
    description:
      "Clinic address, consultation hours, and phone numbers for Dr. G. Rakesh Vamsi at KIMS Hospital, Nellore.",
    images: ["/images/dr-rakesh-vamsi.png"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact & Location", url: "/contact" },
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

