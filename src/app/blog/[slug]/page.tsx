import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { blogArticles } from "@/data/blogData";
import { doctorData } from "@/data/doctorData";
import BlogArticleClient from "./BlogArticleClient";

interface Props {
  params: {
    slug: string;
  };
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://drrakeshvamsi.com";

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

  return {
    title: `${article.title} | Dr. G. Rakesh Vamsi`,
    description: article.shortDescription,
    keywords: [
      article.title,
      article.category,
      "Dr G Rakesh Vamsi",
      "Urology advice Nellore",
      "KIMS Hospital Nellore",
    ],
    alternates: {
      canonical: `${siteUrl}/blog/${article.slug}`,
    },
    openGraph: {
      title: `${article.title} | Dr. G. Rakesh Vamsi`,
      description: article.shortDescription,
      url: `${siteUrl}/blog/${article.slug}`,
      type: "article",
      publishedTime: article.date,
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
      title: article.title,
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

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalScholarlyArticle",
    headline: article.title,
    description: article.shortDescription,
    image: `${siteUrl}/images/dr-rakesh-vamsi.png`,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Physician",
      name: "Dr. G. Rakesh Vamsi",
      jobTitle: "Consultant Urologist & Andrologist",
      url: siteUrl,
    },
    publisher: {
      "@type": "MedicalOrganization",
      name: "Dr. G. Rakesh Vamsi Urology & Andrology Care",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${article.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BlogArticleClient
        article={article}
        relatedArticles={relatedArticles}
        doctor={doctorData}
      />
    </>
  );
}
