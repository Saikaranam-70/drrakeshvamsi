import type { Metadata } from "next";
import { generateFaqSchema } from "@/lib/structuredData";
import { faqsList } from "@/data/faqsData";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://drrakeshvamsi.com";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQs) | Dr. G. Rakesh Vamsi",
  description:
    "Find medically verified answers to common questions about laser kidney stone surgery, prostate care, male infertility, and appointments with Dr. G. Rakesh Vamsi at KIMS Hospital, Nellore.",
  keywords: [
    "Urology FAQs Nellore",
    "Kidney stone questions Nellore",
    "Prostate treatment FAQs",
    "Laser urology recovery time",
    "Dr G Rakesh Vamsi appointment questions",
  ],
  alternates: {
    canonical: `${siteUrl}/faqs`,
  },
  openGraph: {
    title: "Frequently Asked Questions | Dr. G. Rakesh Vamsi",
    description:
      "Medically verified answers to common urology and andrology questions by Dr. G. Rakesh Vamsi at KIMS Hospital, Nellore.",
    url: `${siteUrl}/faqs`,
    type: "website",
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
      />
      {children}
    </>
  );
}

