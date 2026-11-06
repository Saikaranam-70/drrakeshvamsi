import React from "react";
import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import HospitalStrip from "@/components/home/HospitalStrip";
import AndrologySpotlight from "@/components/home/AndrologySpotlight";
import TreatmentsOverview from "@/components/home/TreatmentsOverview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import AdvancedTechnologyBanner from "@/components/home/AdvancedTechnologyBanner";
import ClinicalVideoShowcase from "@/components/home/ClinicalVideoShowcase";
import DoctorIntroSection from "@/components/home/DoctorIntroSection";
import TestimonialsPreview from "@/components/home/TestimonialsPreview";
import HomeFaqSection from "@/components/home/HomeFaqSection";
import { generateFaqSchema } from "@/lib/structuredData";
import { faqsList } from "@/data/faqsData";

const siteUrl = "https://drrakeshvamsi.com";

export const metadata: Metadata = {
  title: {
    absolute: "Andrologist in Nellore | Dr. Rakesh Vamsi | Best Urologist & Male Fertility Specialist",
  },
  description:
    "Consult Dr. G. Rakesh Vamsi — Leading Andrologist in Nellore & Consultant Urologist at KIMS Hospital. Expert care for Male Infertility, Erectile Dysfunction, Laser Kidney Stone Treatment & Robotic Surgery. Book appointment online.",
  keywords: [
    "Andrologist in Nellore",
    "Best Andrologist in Nellore",
    "Andrologist Doctor in Nellore",
    "Andrology Specialist in Nellore",
    "Male Fertility Specialist in Nellore",
    "Male Infertility Doctor in Nellore",
    "Male Infertility Specialist in Nellore",
    "Men's Health Specialist in Nellore",
    "Male Reproductive Health Specialist in Nellore",
    "Male Sexual Health Specialist in Nellore",
    "Andrologist Near Me",
    "Male Fertility Doctor Near Me",
    "Best Urologist in Nellore",
    "Urologist in Nellore",
    "Andrologist in Andhra Pradesh",
    "Andrologist in India",
    "Dr Rakesh Vamsi",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Dr. G. Rakesh Vamsi | Andrologist & Urologist in Nellore",
    title: "Andrologist in Nellore | Dr. Rakesh Vamsi | Best Urologist & Male Fertility Specialist",
    description:
      "Consult Dr. G. Rakesh Vamsi — Leading Andrologist in Nellore & Consultant Urologist at KIMS Hospital. Expert in Male Infertility, ED, Laser Stone Removal & Robotic Surgery.",
    images: [
      {
        url: "/images/dr-rakesh-vamsi.png",
        width: 1200,
        height: 630,
        alt: "Dr. G. Rakesh Vamsi - Andrologist & Urologist in Nellore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrologist in Nellore | Dr. Rakesh Vamsi",
    description:
      "Leading Andrologist & Urologist in Nellore at KIMS Hospital. Expert in Male Infertility, ED, Laser Kidney Stone Surgery.",
    images: ["/images/dr-rakesh-vamsi.png"],
  },
};

export default function HomePage() {
  const faqSchema = generateFaqSchema(
    faqsList.slice(0, 6).map((f) => ({
      question: f.question,
      answer: f.answer,
    }))
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. Hero Section with Dr. Rakesh Vamsi Cutout & Glowing Holographic Visuals */}
      <HeroSection />

      {/* 2. Hospital Information Full-Width Strip */}
      <HospitalStrip />

      {/* 3. Dedicated Andrology Spotlight: ED, Penile Implants, Male Infertility */}
      <AndrologySpotlight />

      {/* 4. Comprehensive Urology & Andrology Services */}
      <TreatmentsOverview />

      {/* 4. Why Choose Us Pillars */}
      <WhyChooseUs />

      {/* 5. Advanced Technology & Minimally Invasive Robotic Surgery Banner */}
      <AdvancedTechnologyBanner />

      {/* 6. Surgical Precision & Clinical Video Showcase */}
      <ClinicalVideoShowcase />

      {/* 7. Doctor Intro Section & Academic Qualifications */}
      <DoctorIntroSection />

      {/* 8. Patient Testimonials & Verified Stories */}
      <TestimonialsPreview />

      {/* 9. Top FAQs & Inquiries */}
      <HomeFaqSection />
    </>
  );
}
