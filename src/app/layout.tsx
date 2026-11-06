import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContactActions from "@/components/layout/FloatingContactActions";
import SitePreloader from "@/components/ui/SitePreloader";
import { LanguageProvider } from "@/context/LanguageContext";
import { generateClinicSchema, generatePhysicianSchema, generateWebSiteSchema } from "@/lib/structuredData";

const siteUrl = "https://drrakeshvamsi.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Andrologist in Nellore | Dr. G. Rakesh Vamsi | Best Urologist & Male Fertility Specialist",
    template: "%s | Dr. Rakesh Vamsi",
  },
  description:
    "Consult Dr. G. Rakesh Vamsi — Leading Andrologist in Nellore & Consultant Urologist at KIMS Hospital. 10+ yrs experience in Male Infertility, Erectile Dysfunction, Laser Kidney Stone Treatment & Robotic Surgery. Book appointment or call +91 76740 08057.",
  keywords: [
    "Andrologist in Nellore",
    "Best Andrologist in Nellore",
    "Andrologist Doctor in Nellore",
    "Andrology Specialist in Nellore",
    "Male Fertility Specialist in Nellore",
    "Male Infertility Doctor in Nellore",
    "Male Infertility Specialist in Nellore",
    "Men's Health Specialist in Nellore",
    "Male Reproductive Health Specialist in Nellore",
    "Male Sexual Health Specialist in Nellore",
    "Andrologist Near Me",
    "Male Fertility Doctor Near Me",
    "Best Urologist in Nellore",
    "Urologist in Nellore",
    "Dr. G. Rakesh Vamsi",
    "Dr Rakesh Vamsi",
    "Andrologist in Andhra Pradesh",
    "Best Andrologist in Andhra Pradesh",
    "Andrologist in India",
    "Best Andrologist in India",
    "Kidney stone specialist Nellore",
    "Laser kidney stone treatment Nellore",
    "Prostate doctor Nellore",
    "Erectile dysfunction doctor Nellore",
    "Penile implants Nellore",
    "KIMS Hospital Nellore Urology",
  ],
  authors: [{ name: "Dr. G. Rakesh Vamsi", url: siteUrl }],
  creator: "Dr. G. Rakesh Vamsi",
  publisher: "Dr. G. Rakesh Vamsi",
  applicationName: "Dr. G. Rakesh Vamsi Andrology & Urology",
  category: "Healthcare / Medical",
  classification: "Andrology, Male Fertility, Urology, Robotic Surgery",
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
    siteName: "Dr. G. Rakesh Vamsi | Andrologist & Urologist in Nellore",
    title: "Andrologist in Nellore | Dr. G. Rakesh Vamsi | Best Urologist & Male Fertility Specialist",
    description:
      "Expert Andrology, Male Infertility, Laser Kidney Stone Treatment & Robotic Urology by Dr. G. Rakesh Vamsi at KIMS Hospital, Nellore. Advanced, ethical and patient-focused healthcare.",
    images: [
      {
        url: "/images/dr-rakesh-vamsi.png",
        width: 1200,
        height: 630,
        alt: "Dr. G. Rakesh Vamsi - Leading Andrologist and Urologist in Nellore",
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
    title: "Andrologist in Nellore | Dr. G. Rakesh Vamsi",
    description:
      "Leading Andrologist & Consultant Urologist at KIMS Hospital, Nellore. Expert Male Fertility, ED, Laser Stone & Robotic Surgery.",
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
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link rel="icon" href="/icon.png" type="image/png" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#F6F3EC" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          {/* eslint-disable-next-line @next/next/no-page-custom-font */}
          <link
            href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,800;1,600&family=Dancing+Script:wght@600;700&family=Great+Vibes&family=Noto+Sans+Devanagari:wght@400;500;600;700&family=Noto+Sans+Telugu:wght@400;500;600;700&display=swap"
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
        <body className="font-sans min-h-screen flex flex-col bg-brand-ivory text-brand-navy antialiased selection:bg-brand-gold selection:text-white">
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
