import React from "react";
import HeroSection from "@/components/home/HeroSection";
import HospitalStrip from "@/components/home/HospitalStrip";
import TreatmentsOverview from "@/components/home/TreatmentsOverview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import AdvancedTechnologyBanner from "@/components/home/AdvancedTechnologyBanner";
import ClinicalVideoShowcase from "@/components/home/ClinicalVideoShowcase";
import DoctorIntroSection from "@/components/home/DoctorIntroSection";
import TestimonialsPreview from "@/components/home/TestimonialsPreview";
import HomeFaqSection from "@/components/home/HomeFaqSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section with Dr. Rakesh Vamsi Cutout & Glowing Holographic Visuals */}
      <HeroSection />

      {/* 2. Hospital Information Full-Width Strip */}
      <HospitalStrip />

      {/* 3. Comprehensive Urology & Andrology Services */}
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
