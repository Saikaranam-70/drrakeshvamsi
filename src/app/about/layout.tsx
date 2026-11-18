import type { Metadata } from "next";
import { generateBreadcrumbSchema } from "@/lib/structuredData";

const siteUrl = "https://www.drrakeshvamsi.com";

export const metadata: Metadata = {
  title: {
    absolute: "About Dr. Rakesh Vamsi | Trained Andrologist & Urologist in Nellore",
  },
  description:
  "Learn about Dr. G. Rakesh Vamsi (MS, M.Ch Urology), premier fellowship & clinically trained andrologist in Nellore, consultant urologist & robotic surgeon at KIMS Hospital. 10+ years experience, 5000+ patients treated.",
  keywords: [
    "Trained Andrologist in Nellore",
    "Best Trained Andrologist in Nellore",
    "Fellowship Trained Andrologist Nellore",
    "About Dr Rakesh Vamsi",
    "Andrologist in Nellore",
    "Dr G Rakesh Vamsi qualifications",
    "Best Andrologist in Nellore",
    "Best Urologist in Nellore",
    "Urologist KIMS Hospital Nellore",
    "Dr Rakesh Vamsi experience",
    "Robotic Surgeon Nellore",
    "Male Fertility Specialist Nellore",
  ],
  alternates: {
    canonical: `${siteUrl}/about`,
  },
  openGraph: {
    title: "About Dr. Rakesh Vamsi | Trained Andrologist & Urologist in Nellore",
    description:
    "Specialized fellowship training in andrology, male fertility, microsurgery, laser and robotic urology with over a decade of compassionate clinical excellence at KIMS Hospital Nellore.",
    url: `${siteUrl}/about`,
    type: "profile",
    images: [
      {
        url: "/images/dr-rakesh-vamsi.png",
        width: 1200,
        height: 630,
        alt: "Dr. G. Rakesh Vamsi - Trained Andrologist and Urologist in Nellore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Dr. Rakesh Vamsi | Trained Andrologist & Urologist in Nellore",
    description:
    "Qualifications and surgical milestones of Dr. G. Rakesh Vamsi, Fellowship-Trained Andrologist & Urologist at KIMS Hospital Nellore.",
    images: ["/images/dr-rakesh-vamsi.png"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About Dr. Rakesh Vamsi", url: "/about" },
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

