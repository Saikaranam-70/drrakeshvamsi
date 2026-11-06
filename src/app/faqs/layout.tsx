import type { Metadata } from "next";
import { generateFaqSchema, generateBreadcrumbSchema } from "@/lib/structuredData";
import { faqsList } from "@/data/faqsData";

const siteUrl = "https://drrakeshvamsi.com";

export const metadata: Metadata = {
  title: {
    absolute: "Frequently Asked Questions (FAQs) | Dr. Rakesh Vamsi Nellore",
  },
  description:
  "Medically verified answers to common questions about laser kidney stone surgery, prostate care, male infertility, and appointments with Dr. G. Rakesh Vamsi at KIMS Hospital, Nellore.",
  keywords: [
    "Urology FAQs Nellore",
    "Andrology questions Nellore",
    "Kidney stone treatment FAQs",
    "Male infertility FAQs",
    "Prostate treatment questions",
    "Laser urology recovery time",
    "Dr Rakesh Vamsi FAQs",
  ],
  alternates: {
    canonical: `${siteUrl}/faqs`,
  },
  openGraph: {
    title: "Frequently Asked Questions (FAQs) | Dr. Rakesh Vamsi",
    description:
      "Medically verified answers to common urology and andrology questions by Dr. G. Rakesh Vamsi at KIMS Hospital, Nellore.",
    url: `${siteUrl}/faqs`,
    type: "website",
    images: [
      {
        url: "/images/dr-rakesh-vamsi.png",
        width: 1200,
        height: 630,
        alt: "FAQs - Dr. G. Rakesh Vamsi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions | Dr. Rakesh Vamsi",
    description:
      "Frequently asked questions on andrology, male infertility, and laser kidney stone treatment in Nellore.",
    images: ["/images/dr-rakesh-vamsi.png"],
  },
};

export default function FaqsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const faqJson = generateFaqSchema(
    faqsList.map((f) => ({
      question: f.question,
      answer: f.answer,
    }))
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "FAQs", url: "/faqs" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}

