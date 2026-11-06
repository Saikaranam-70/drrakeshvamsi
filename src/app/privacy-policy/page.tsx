import React from "react";
import { Metadata } from "next";
import PrivacyPolicyClient from "./PrivacyPolicyClient";
import { generateBreadcrumbSchema } from "@/lib/structuredData";

const siteUrl = "https://drrakeshvamsi.com";

export const metadata: Metadata = {
  title: {
    absolute: "Privacy Policy | Dr. Rakesh Vamsi Nellore",
  },
  description:
  "Patient privacy policy and health data protection guidelines for Dr. G. Rakesh Vamsi's clinical practice at KIMS Hospital, Nellore.",
  alternates: {
    canonical: `${siteUrl}/privacy-policy`,
  },
  openGraph: {
    title: "Privacy Policy | Dr. Rakesh Vamsi Nellore",
    description:
      "Patient health information privacy and confidentiality protocols for Dr. G. Rakesh Vamsi's practice.",
    url: `${siteUrl}/privacy-policy`,
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Privacy Policy", url: "/privacy-policy" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PrivacyPolicyClient />
    </>
  );
}
