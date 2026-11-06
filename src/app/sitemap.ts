import { MetadataRoute } from "next";
import { treatmentsData } from "@/data/treatmentsData";
import { blogArticles } from "@/data/blogData";

const baseUrl = "https://drrakeshvamsi.com";

// Content modification dates grounded in actual clinical publication & review schedule
const corePageDates: Record<string, string> = {
  "": "2024-11-04T08:00:00.000Z",
  "/about": "2024-11-02T10:00:00.000Z",
  "/treatments": "2024-11-01T12:00:00.000Z",
  "/patient-info": "2024-10-25T09:00:00.000Z",
  "/blog": "2024-10-15T09:00:00.000Z",
  "/contact": "2024-11-03T11:00:00.000Z",
  "/book-appointment": "2024-11-04T08:30:00.000Z",
  "/faqs": "2024-10-28T14:00:00.000Z",
  "/testimonials": "2024-10-20T16:00:00.000Z",
  "/privacy-policy": "2024-10-01T00:00:00.000Z",
  "/terms-and-conditions": "2024-10-01T00:00:00.000Z",
};

// Treatment clinical guideline revision dates
const treatmentDates: Record<string, string> = {
  "kidney-stones": "2024-11-03T09:00:00.000Z",
  "prostate-care": "2024-11-02T11:00:00.000Z",
  "male-infertility": "2024-11-04T10:00:00.000Z",
  "erectile-dysfunction": "2024-11-04T11:00:00.000Z",
  "penile-implants": "2024-11-01T15:00:00.000Z",
  "urological-cancers": "2024-10-28T09:30:00.000Z",
  "laparoscopic-robotic-surgery": "2024-11-03T14:00:00.000Z",
  "urinary-tract-infections": "2024-10-29T10:00:00.000Z",
  "reconstructive-urology": "2024-10-30T16:00:00.000Z",
  hydrocele: "2024-10-26T12:00:00.000Z",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = Object.entries(corePageDates).map(
    ([route, dateStr]) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(dateStr),
    })
  );

  const treatmentRoutes: MetadataRoute.Sitemap = treatmentsData.map((t) => ({
    url: `${baseUrl}/treatments/${t.slug}`,
    lastModified: new Date(
      treatmentDates[t.slug] || "2024-11-01T00:00:00.000Z"
    ),
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogArticles.map((b) => ({
    url: `${baseUrl}/blog/${b.slug}`,
    lastModified: new Date(b.date),
  }));

  return [...staticRoutes, ...treatmentRoutes, ...blogRoutes];
}
