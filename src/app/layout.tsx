import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContactActions from "@/components/layout/FloatingContactActions";
import { LanguageProvider } from "@/context/LanguageContext";
import { generateClinicSchema, generatePhysicianSchema } from "@/lib/structuredData";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://uroandroguy.com");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dr. Rakesh Vamsi - Best Andrologist in Nellore",
    template: "%s | Dr. Rakesh Vamsi - Best Andrologist in Nellore",
  },
  description:
    "Official website of Dr. Rakesh Vamsi, Consultant Urologist, Andrologist, Laparoscopic & Robotic Surgeon at KIMS Hospital, Nellore. Expert care for kidney stones, prostate enlargement, male infertility & laparoscopic surgery.",
  keywords: [
    "Dr. Rakesh Vamsi",
    "Best Andrologist in Nellore",
    "UROANDROGUY",
    "Urologist in Nellore",
    "Andrologist in Nellore",
    "Kidney stone specialist Nellore",
    "Prostate doctor Nellore",
    "Male infertility Nellore",
    "KIMS Hospital Nellore Urology",
    "Laparoscopic robotic surgeon Nellore",
    "Laser kidney stone treatment",
  ],
  authors: [{ name: "Dr. Rakesh Vamsi", url: siteUrl }],
  creator: "Dr. Rakesh Vamsi",
  publisher: "Dr. Rakesh Vamsi",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Dr. Rakesh Vamsi - Best Andrologist in Nellore",
    title: "Dr. Rakesh Vamsi - Best Andrologist in Nellore",
    description:
      "Advanced, personalized, compassionate urology and andrology care with minimally invasive and robotic surgery at KIMS Hospital, Nellore.",
    images: [
      {
        url: "/images/dr-rakesh-vamsi.png",
        width: 1200,
        height: 630,
        alt: "Dr. Rakesh Vamsi - Best Andrologist in Nellore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Rakesh Vamsi - Best Andrologist in Nellore",
    description:
      "Expert Urology & Andrology Care in Nellore. Advanced, personalized, compassionate.",
    images: ["/images/dr-rakesh-vamsi.png"],
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-IN": `${siteUrl}?lang=en`,
      "te-IN": `${siteUrl}?lang=te`,
      "hi-IN": `${siteUrl}?lang=hi`,
      "x-default": siteUrl,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const physicianJson = generatePhysicianSchema();
  const clinicJson = generateClinicSchema();

  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${inter.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700&family=Noto+Sans+Telugu:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianJson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicJson) }}
        />
      </head>
      <body className="font-sans min-h-screen flex flex-col bg-white text-slate-800 antialiased">
        <LanguageProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <FloatingContactActions />
        </LanguageProvider>
      </body>
    </html>
  );
}
