import React from "react";
import { Metadata } from "next";
import TermsAndConditionsClient from "./TermsAndConditionsClient";
import { generateBreadcrumbSchema } from "@/lib/structuredData";

const siteUrl = "https://drrakeshvamsi.com";

export const metadata: Metadata = {
  title: {
    absolute: "Terms & Conditions | Dr. Rakesh Vamsi Nellore",
  },
  description:
  "Terms of use and medical disclaimer for Dr. G. Rakesh Vamsi's official medical and andrology portal.",
  alternates: {
    canonical: `${siteUrl}/terms-and-conditions`,
  },
  openGraph: {
    title: "Terms & Conditions | Dr. Rakesh Vamsi Nellore",
    description:
      "Website usage terms and healthcare consultation disclaimers for Dr. G. Rakesh Vamsi.",
    url: `${siteUrl}/terms-and-conditions`,
    type: "website",
  },
};

export default function TermsAndConditionsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Terms & Conditions", url: "/terms-and-conditions" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <TermsAndConditionsClient />
    </>
  );
}
