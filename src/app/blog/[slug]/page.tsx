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
    title: `${article.title} | UROANDROGUY`,
    description: article.shortDescription,
    openGraph: {
      title: article.title,
      description: article.shortDescription,
      type: "article",
      publishedTime: article.date,
      authors: [article.author.name],
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

  return (
    <BlogArticleClient
      article={article}
      relatedArticles={relatedArticles}
      doctor={doctorData}
    />
  );
}
