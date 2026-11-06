import type { Metadata } from "next";
import { generateBreadcrumbSchema } from "@/lib/structuredData";

const siteUrl = "https://drrakeshvamsi.com";

export const metadata: Metadata = {
  title: {
    absolute: "Patient Reviews & Testimonials | Dr. Rakesh Vamsi Nellore",
  },
  description:
  "Read patient feedback and verified recovery stories for kidney stone laser treatments, prostate surgeries, and andrological care by Dr. G. Rakesh Vamsi at KIMS Hospital, Nellore.",
  keywords: [
    "Dr Rakesh Vamsi reviews",
    "Andrologist in Nellore reviews",
    "Urologist reviews Nellore",
    "Best andrologist in Nellore feedback",
    "KIMS Hospital urology patient feedback",
    "Kidney stone laser surgery reviews Nellore",
  ],
  alternates: {
    canonical: `${siteUrl}/testimonials`,
  },
  openGraph: {
    title: "Patient Reviews & Testimonials | Dr. Rakesh Vamsi Nellore",
    description:
    "Real stories of recovery and clinical care from patients treated by Dr. G. Rakesh Vamsi at KIMS Hospital, Nellore.",
    url: `${siteUrl}/testimonials`,
    type: "website",
    images: [
      {
        url: "/images/dr-rakesh-vamsi.png",
        width: 1200,
        height: 630,
        alt: "Patient Reviews - Dr. G. Rakesh Vamsi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Patient Reviews | Dr. Rakesh Vamsi Nellore",
    description:
      "Patient experiences and recovery stories under Dr. G. Rakesh Vamsi at KIMS Hospital Nellore.",
    images: ["/images/dr-rakesh-vamsi.png"],
  },
};

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Testimonials", url: "/testimonials" },
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

