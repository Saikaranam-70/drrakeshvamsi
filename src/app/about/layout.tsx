import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://drrakeshvamsi.com";

export const metadata: Metadata = {
  title: "About Dr. G. Rakesh Vamsi | Consultant Urologist & Andrologist in Nellore",
  description:
    "Learn about Dr. G. Rakesh Vamsi (MS, M.Ch Urology), leading Consultant Urologist, Andrologist, Laparoscopic & Robotic Surgeon at KIMS Hospital, Nellore. 10+ years experience, 5000+ patients treated, 1000+ surgeries.",
  keywords: [
    "About Dr Rakesh Vamsi",
    "Dr G Rakesh Vamsi qualifications",
    "Best Urologist in Nellore",
    "Urologist KIMS Hospital Nellore",
    "Dr Rakesh Vamsi experience",
    "Robotic Surgeon Nellore",
  ],
  alternates: {
    canonical: `${siteUrl}/about`,
  },
  openGraph: {
    title: "About Dr. G. Rakesh Vamsi | Leading Urologist & Andrologist in Nellore",
    description:
      "Specialized training in laser and robotic urology with over a decade of compassionate clinical excellence at KIMS Hospital Nellore.",
    url: `${siteUrl}/about`,
    type: "profile",
    images: [
      {
        url: "/images/dr-rakesh-vamsi.png",
        width: 1200,
        height: 630,
        alt: "Dr. G. Rakesh Vamsi - Consultant Urologist and Andrologist",
      },
    ],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

