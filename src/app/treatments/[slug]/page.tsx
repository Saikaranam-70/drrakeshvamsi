import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Clock,
  Phone,
  MessageCircle,
  Mail,
  ChevronRight,
  ShieldCheck,
  AlertTriangle,
  Stethoscope,
  Activity,
  Droplet,
  Flame,
  HelpCircle,
  Sparkles,
} from "lucide-react";
import { treatmentsData, TreatmentDetail } from "@/data/treatmentsData";
import { doctorData } from "@/data/doctorData";
import TreatmentDetailClient from "./TreatmentDetailClient";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return treatmentsData.map((t) => ({
    slug: t.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const treatment = treatmentsData.find((t) => t.slug === params.slug);
  if (!treatment) {
    return {
      title: "Treatment Not Found",
    };
  }

  return {
    title: `${treatment.title} Treatment in Nellore | Dr. Rakesh Vamsi`,
    description: treatment.shortDescription,
    openGraph: {
      title: `${treatment.title} | UROANDROGUY`,
      description: treatment.shortDescription,
    },
  };
}

export default function TreatmentDetailPage({ params }: Props) {
  const treatment = treatmentsData.find((t) => t.slug === params.slug);

  if (!treatment) {
    notFound();
  }

  // Find related treatment items
  const relatedTreatments = treatmentsData.filter((t) =>
    treatment.relatedSlugs?.includes(t.slug)
  );

  return (
    <TreatmentDetailClient
      treatment={treatment}
      relatedTreatments={relatedTreatments}
      doctor={doctorData}
    />
  );
}
