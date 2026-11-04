import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContactActions from "@/components/layout/FloatingContactActions";
import SitePreloader from "@/components/ui/SitePreloader";
import { LanguageProvider } from "@/context/LanguageContext";
import { generateClinicSchema, generatePhysicianSchema, generateWebSiteSchema } from "@/lib/structuredData";

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
      : "https://drrakeshvamsi.com");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dr. G. Rakesh Vamsi | Best Urologist & Andrologist in Nellore | KIMS Hospital",
    template: "%s | Dr. G. Rakesh Vamsi - Best Urologist in Nellore",
  },
  description:
    "Consult Dr. G. Rakesh Vamsi — Leading Consultant Urologist & Andrologist, Laparoscopic & Robotic Surgeon at KIMS Hospital, Nellore. 10+ yrs experience in Laser Kidney Stone Treatment, Prostate Care, Male Infertility & Advanced Urology. Book appointment online or call +91 76740 08057.",
  keywords: [
    "Dr. G. Rakesh Vamsi",
    "Dr Rakesh Vamsi",
    "Best Urologist in Nellore",
    "Best Andrologist in Nellore",
    "Top Urologist Nellore",
    "Urologist and Andrologist",
    "Urologist in Nellore",
    "Andrologist in Nellore",
    "Kidney stone specialist Nellore",
    "Laser kidney stone treatment Nellore",
    "RIRS treatment Nellore",
    "PCNL surgery Nellore",
    "URSL surgery Nellore",
    "Prostate doctor Nellore",
    "TURP prostate surgery Nellore",
    "Male infertility specialist Nellore",
    "Erectile dysfunction doctor Nellore",
    "KIMS Hospital Nellore Urology",
    "Laparoscopic robotic surgeon Nellore",
    "Urology doctor near me Nellore",
    "Best sexologist andrologist Nellore",
    "Nellore urologist phone number",
  ],
  authors: [{ name: "Dr. G. Rakesh Vamsi", url: siteUrl }],
  creator: "Dr. G. Rakesh Vamsi",
  publisher: "Dr. G. Rakesh Vamsi",
  applicationName: "Dr. G. Rakesh Vamsi Urology & Andrology",
  category: "Healthcare / Medical",
  classification: "Urology, Andrology, Robotic Surgery",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    nocache: false,
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
    siteName: "Dr. G. Rakesh Vamsi | Best Urologist & Andrologist in Nellore",
    title: "Dr. G. Rakesh Vamsi | Best Urologist & Andrologist in Nellore | KIMS Hospital",
    description:
      "Advanced, ethical and minimally invasive urological and andrological care by Dr. G. Rakesh Vamsi at KIMS Hospital, Nellore. Expert in Laser Stone Removal, Prostate Surgery, and Male Reproductive Health.",
    images: [
      {
        url: "/images/dr-rakesh-vamsi.png",
        width: 1200,
        height: 630,
        alt: "Dr. G. Rakesh Vamsi - Consultant Urologist & Andrologist in Nellore",
      },
      {
        url: "/images/logo.png",
        width: 512,
        height: 512,
        alt: "Dr. G. Rakesh Vamsi Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. G. Rakesh Vamsi | Best Urologist & Andrologist in Nellore",
    description:
      "Expert Urology & Andrology Care in Nellore by Dr. G. Rakesh Vamsi at KIMS Hospital. Laser Stone Treatment, Prostate & Robotic Surgery.",
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
  other: {
    "geo.region": "IN-AP",
    "geo.placename": "Nellore, Andhra Pradesh, India",
    "geo.position": "14.434546;79.965769",
    "ICBM": "14.434546, 79.965769",
    "format-detection": "telephone=yes",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const physicianJson = generatePhysicianSchema();
  const clinicJson = generateClinicSchema();
  const websiteJson = generateWebSiteSchema();

  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${inter.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0d9488" />
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJson) }}
        />
      </head>
        <body className="font-sans min-h-screen flex flex-col bg-brand-navy-950 text-slate-100 antialiased selection:bg-brand-cyan selection:text-brand-navy-950">
          <SitePreloader />
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
