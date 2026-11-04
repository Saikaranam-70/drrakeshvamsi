import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://drrakeshvamsi.com";

export const metadata: Metadata = {
  title: "Patient Reviews & Testimonials | Dr. G. Rakesh Vamsi | Nellore",
  description:
    "Read verified patient reviews and recovery stories for kidney stone laser treatments, prostate surgeries, and urological care by Dr. G. Rakesh Vamsi at KIMS Hospital, Nellore.",
  keywords: [
    "Dr Rakesh Vamsi reviews",
    "Urologist reviews Nellore",
    "Best andrologist in Nellore reviews",
    "KIMS Hospital urology patient feedback",
    "Kidney stone laser surgery reviews Nellore",
  ],
  alternates: {
    canonical: `${siteUrl}/testimonials`,
  },
  openGraph: {
    title: "Patient Stories & Reviews | Dr. G. Rakesh Vamsi",
    description:
      "Real stories of recovery and clinical excellence from patients treated by Dr. G. Rakesh Vamsi at KIMS Hospital, Nellore.",
    url: `${siteUrl}/testimonials`,
    type: "website",
  },
};

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

