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

export const metadata: Metadata = {
  metadataBase: new URL("https://uroandroguy.com"),
  title: {
    default: "UROANDROGUY | Dr. Rakesh Vamsi — Consultant Urologist & Andrologist | KIMS Hospital Nellore",
    template: "%s | UROANDROGUY — Dr. Rakesh Vamsi",
  },
  description:
    "Official website of Dr. Rakesh Vamsi, Consultant Urologist, Andrologist, Laparoscopic & Robotic Surgeon at KIMS Hospital, Nellore. Expert care for kidney stones, prostate enlargement, male infertility & laparoscopic surgery.",
  keywords: [
    "Dr. Rakesh Vamsi",
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
  authors: [{ name: "Dr. Rakesh Vamsi", url: "https://uroandroguy.com" }],
  creator: "Dr. Rakesh Vamsi",
  publisher: "UROANDROGUY",
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
    url: "https://uroandroguy.com",
    siteName: "UROANDROGUY - Dr. Rakesh Vamsi",
    title: "UROANDROGUY | Dr. Rakesh Vamsi — Urology & Andrology Care",
    description:
      "Advanced, personalized, compassionate urology and andrology care with minimally invasive and robotic surgery at KIMS Hospital, Nellore.",
    images: [
      {
        url: "/images/dr-rakesh-vamsi.png",
        width: 1200,
        height: 630,
        alt: "Dr. Rakesh Vamsi - Consultant Urologist & Andrologist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Rakesh Vamsi — UROANDROGUY | KIMS Hospital Nellore",
    description:
      "Expert Urology & Andrology Care in Nellore. Advanced, personalized, compassionate.",
    images: ["/images/dr-rakesh-vamsi.png"],
  },
  alternates: {
    canonical: "https://uroandroguy.com",
    languages: {
      "en-IN": "https://uroandroguy.com?lang=en",
      "te-IN": "https://uroandroguy.com?lang=te",
      "hi-IN": "https://uroandroguy.com?lang=hi",
      "x-default": "https://uroandroguy.com",
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
