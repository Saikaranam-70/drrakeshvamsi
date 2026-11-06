import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { blogArticles } from "@/data/blogData";
import { doctorData } from "@/data/doctorData";
import {
  generateBreadcrumbSchema,
  generateArticleSchema,
} from "@/lib/structuredData";
import BlogArticleClient from "./BlogArticleClient";

interface Props {
  params: {
    slug: string;
  };
}

const siteUrl = "https://drrakeshvamsi.com";

const blogKeywordMap: Record<string, string[]> = {
  "kidney-stones-causes-symptoms-treatment": [
    "Kidney stones causes symptoms treatment",
    "Kidney stone pain relief",
    "Laser kidney stone treatment options",
    "How to prevent kidney stones",
    "Urologist for kidney stones Nellore",
  ],
  "prostate-enlargement-when-to-be-concerned": [
    "Prostate enlargement when to be concerned",
    "BPH symptoms in men",
    "Enlarged prostate warning signs",
    "Prostate laser surgery options",
    "Prostate specialist Nellore",
  ],
  "male-infertility-causes-and-treatment-options": [
    "Male infertility causes and treatment options",
    "How to treat low sperm count",
    "Male fertility specialist advice",
    "Azoospermia and varicocele treatment",
    "Best Andrologist in Nellore",
  ],
  "erectile-dysfunction-causes-modern-treatments": [
    "Erectile dysfunction causes modern treatments",
    "ED cure and therapies",
    "Male sexual health specialist Nellore",
    "Penile Doppler and shockwave therapy",
    "Andrologist in Andhra Pradesh",
  ],
  "laparoscopic-vs-robotic-surgery": [
    "Laparoscopic vs robotic surgery difference",
    "Robotic urology advantages",
    "da Vinci robotic surgery Andhra Pradesh",
    "Minimally invasive surgery Nellore",
    "Robotic surgeon Nellore",
  ],
  "bladder-cancer-symptoms-diagnosis-treatment": [
    "Bladder cancer symptoms diagnosis treatment",
    "Blood in urine warning signs",
    "Bladder tumor evaluation",
    "Urological cancer surgeon Nellore",
    "Uro-oncology KIMS Hospital",
  ],
  "low-testosterone-signs-causes-treatment": [
    "Low testosterone signs causes treatment",
    "Male hypogonadism symptoms",
    "Testosterone replacement therapy risks and benefits",
    "Men's health specialist Nellore",
    "Andrologist hormone balance",
  ],
  "when-to-see-a-urologist-warning-signs": [
    "When to see a urologist key warning signs",
    "Urinary difficulties and symptoms",
    "Difference between urologist and andrologist",
    "Urology consultation Nellore",
    "Dr Rakesh Vamsi KIMS Hospital",
  ],
};

export async function generateStaticParams() {
  return blogArticles.map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = blogArticles.find((a) => a.slug === params.slug);
  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  const keywords = blogKeywordMap[article.slug] || [
    article.title,
    article.category,
    "Dr Rakesh Vamsi",
    "Andrology advice Nellore",
    "Urology advice Nellore",
  ];

  const pageTitle = `${article.title} | Dr. Rakesh Vamsi`;

  return {
    title: {
      absolute: pageTitle,
    },
    description: article.shortDescription,
    keywords,
    alternates: {
      canonical: `${siteUrl}/blog/${article.slug}`,
    },
    openGraph: {
      title: pageTitle,
      description: article.shortDescription,
      url: `${siteUrl}/blog/${article.slug}`,
      type: "article",
      publishedTime: new Date(article.date).toISOString(),
      authors: [article.author.name],
      images: [
        {
          url: "/images/dr-rakesh-vamsi.png",
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: article.shortDescription,
      images: ["/images/dr-rakesh-vamsi.png"],
    },
  };
}

export default function BlogDetailPage({ params }: Props) {
  const article = blogArticles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = blogArticles.filter((a) =>
    article.relatedSlugs?.includes(a.slug)
  );

    const articleSchema = generateArticleSchema({
      title: article.title,
      slug: article.slug,
      description: article.shortDescription,
      datePublished: article.date,
    category: article.category,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Medical Blog", url: "/blog" },
    { name: article.title, url: `/blog/${article.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BlogArticleClient
        article={article}
        relatedArticles={relatedArticles}
        doctor={doctorData}
      />
    </>
  );
}
