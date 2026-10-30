import React from "react";
import { Metadata } from "next";
import BlogExplorer from "@/components/blog/BlogExplorer";

export const metadata: Metadata = {
  title: "Medical Articles & Health Insights | UROANDROGUY",
  description:
    "Expert urology articles, kidney stone prevention guides, and men's health advice written by Dr. Rakesh Vamsi, Consultant Urologist & Andrologist at KIMS Hospital Nellore.",
};

export default function BlogPage() {
  return <BlogExplorer />;
}
