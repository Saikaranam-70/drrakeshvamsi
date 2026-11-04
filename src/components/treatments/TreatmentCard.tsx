"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Activity, Shield, Users, User, Ribbon, Cpu, Wrench, Droplet } from "lucide-react";
import { TreatmentDetail } from "@/data/treatmentsData";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

interface TreatmentCardProps {
  treatment: TreatmentDetail;
  className?: string;
  variant?: "compact" | "detailed";
}

export default function TreatmentCard({
  treatment,
  className,
}: TreatmentCardProps) {
  const { t } = useLanguage();

  const renderIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "kidney":
        return (
        <svg className="w-6 h-6 text-[#B99A62]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 6C4 8 3 11 4 14C5 17 8 19 11 18C12 17.5 12 16.5 11 16C9 15 8 13.5 8.5 11C9 8.5 10 7 11 6C9 5.5 8 5.5 7 6Z" fill="currentColor" fillOpacity="0.15" />
          <path d="M17 6C20 8 21 11 20 14C19 17 16 19 13 18C12 17.5 12 16.5 13 16C15 15 16 13.5 15.5 11C15 8.5 14 7 13 6C15 5.5 16 5.5 17 6Z" fill="currentColor" fillOpacity="0.15" />
          <path d="M12 18V21" />
        </svg>
        );
      case "shield":
  return <Shield className="w-6 h-6 text-[#B99A62]" />;
      case "users":
  return <Users className="w-6 h-6 text-[#B99A62]" />;
      case "user":
  return <User className="w-6 h-6 text-[#B99A62]" />;
      case "ribbon":
  return <Ribbon className="w-6 h-6 text-[#B99A62]" />;
      case "cpu":
  return <Cpu className="w-6 h-6 text-[#B99A62]" />;
      case "wrench":
  return <Wrench className="w-6 h-6 text-[#B99A62]" />;
      case "droplet":
  return <Droplet className="w-6 h-6 text-[#B99A62]" />;
      default:
  return <Activity className="w-6 h-6 text-[#B99A62]" />;
}
  };

      return (
      <div
        className={cn(
          "group relative bg-white rounded-2xl p-6 sm:p-7 border border-[#E5DFD3] hover:border-[#B99A62]/60 shadow-card hover:shadow-xl hover-lift transition-all duration-300 flex flex-col justify-between",
          className
        )}
      >
        <div>
          {/* Top Icon Badge & Category Tag */}
          <div className="flex items-center justify-between mb-5">
            <div className="w-12 h-12 rounded-2xl bg-[#E5EFF0] border border-[#CCDDE0] flex items-center justify-center group-hover:bg-[#B99A62] group-hover:text-white transition-colors duration-300 shadow-xs">
              {renderIcon(treatment.iconName)}
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#17364B] bg-[#E5EFF0] px-2.5 py-1 rounded-full border border-[#CCDDE0]">
              {treatment.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-heading font-extrabold text-xl text-[#17364B] group-hover:text-[#B99A62] transition-colors">
            <Link href={`/treatments/${treatment.slug}`}>
              <span className="absolute inset-0" aria-hidden="true" />
              {treatment.title}
            </Link>
          </h3>

        {/* Short Description */}
        <p className="text-sm text-[#4B6778] mt-2.5 line-clamp-3 leading-relaxed">
          {treatment.shortDescription}
        </p>
      </div>

    {/* Card Action Link */}
    <div className="pt-6 mt-6 border-t border-[#EAE4D9] flex items-center justify-between">
      <span className="text-xs font-bold text-[#17364B] group-hover:text-[#B99A62] transition-colors flex items-center gap-1.5">
        {t("treatments.learnMore", "Learn More")}
      </span>
      <div className="w-8 h-8 rounded-full bg-[#E5EFF0] text-[#B99A62] flex items-center justify-center group-hover:bg-[#B99A62] group-hover:text-white transition-all transform group-hover:translate-x-1">
        <ArrowRight className="w-4 h-4" />
      </div>
    </div>
  </div>
);
}
