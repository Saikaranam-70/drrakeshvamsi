import React from "react";
import { Metadata } from "next";
import BlogExplorer from "@/components/blog/BlogExplorer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://drrakeshvamsi.com";

export const metadata: Metadata = {
  title: "Urology & Men's Health Articles | Dr. G. Rakesh Vamsi",
  description:
  "Educational medical articles, kidney stone prevention guides, prostate wellness, and men's health insights written by Dr. G. Rakesh Vamsi, Consultant Urologist & Andrologist at KIMS Hospital, Nellore.",
  keywords: [
    "Urology articles Nellore",
    "Kidney stone prevention tips",
    "Prostate health guide",
    "Men's health advice Andhra Pradesh",
    "Dr Rakesh Vamsi blog",
  ],
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
  openGraph: {
    title: "Urology & Men's Health Articles | Dr. G. Rakesh Vamsi",
    description:
      "Expert medical guides on kidney stones, prostate conditions, and andrological wellness by Dr. G. Rakesh Vamsi.",
    url: `${siteUrl}/blog`,
    type: "website",
    images: [
      {
        url: "/images/dr-rakesh-vamsi.png",
        width: 1200,
        height: 630,
        alt: "Medical Articles - Dr. G. Rakesh Vamsi",
      },
    ],
  },
};

export default function BlogPage() {
  return <BlogExplorer />;
}
