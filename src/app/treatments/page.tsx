import React from "react";
import { Metadata } from "next";
import TreatmentsExplorer from "@/components/treatments/TreatmentsExplorer";

export const metadata: Metadata = {
  title: "Treatments & Services | Comprehensive Urology & Andrology Care",
  description:
    "Explore advanced urological treatments by Dr. Rakesh Vamsi at KIMS Hospital Nellore. Kidney stones (RIRS/PCNL), prostate care, male infertility, erectile health, urological cancers, and robotic surgery.",
};

export default function TreatmentsPage() {
  return <TreatmentsExplorer />;
}
