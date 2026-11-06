import React from "react";
import { Metadata } from "next";
import BlogExplorer from "@/components/blog/BlogExplorer";
import { generateBreadcrumbSchema } from "@/lib/structuredData";

const siteUrl = "https://drrakeshvamsi.com";

export const metadata: Metadata = {
  title: {
    absolute: "Men's Health & Urology Blog | Dr. Rakesh Vamsi | Nellore",
  },
  description:
  "Evidence-based medical articles on Male Infertility, Erectile Dysfunction, Kidney Stone Prevention & Robotic Surgery by Dr. G. Rakesh Vamsi, Consultant Andrologist & Urologist at KIMS Hospital, Nellore.",
  keywords: [
    "Men's health blog Nellore",
    "Andrology articles Andhra Pradesh",
    "Male infertility causes and treatment",
    "Kidney stone prevention tips",
    "Erectile dysfunction treatment options",
    "Urology medical blog India",
    "Dr Rakesh Vamsi articles",
  ],
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
  openGraph: {
    title: "Men's Health & Urology Blog | Dr. Rakesh Vamsi | Nellore",
    description:
    "Expert medical guides on andrology, male fertility, kidney stones, and prostate health by Dr. G. Rakesh Vamsi at KIMS Hospital, Nellore.",
    url: `${siteUrl}/blog`,
    type: "website",
    images: [
      {
        url: "/images/dr-rakesh-vamsi.png",
        width: 1200,
        height: 630,
        alt: "Men's Health & Urology Articles - Dr. G. Rakesh Vamsi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Men's Health & Urology Blog | Dr. Rakesh Vamsi",
    description:
      "Evidence-based clinical guides on andrology, male fertility, and urological health by Dr. G. Rakesh Vamsi.",
    images: ["/images/dr-rakesh-vamsi.png"],
  },
};

export default function BlogPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Medical Blog", url: "/blog" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BlogExplorer />
    </>
  );
}
