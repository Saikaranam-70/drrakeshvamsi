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
  variant = "detailed",
}: TreatmentCardProps) {
  const { t } = useLanguage();

  const renderIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "kidney":
        return (
            <svg className="w-6 h-6 text-brand-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 6C4 8 3 11 4 14C5 17 8 19 11 18C12 17.5 12 16.5 11 16C9 15 8 13.5 8.5 11C9 8.5 10 7 11 6C9 5.5 8 5.5 7 6Z" fill="currentColor" fillOpacity="0.15" />
              <path d="M17 6C20 8 21 11 20 14C19 17 16 19 13 18C12 17.5 12 16.5 13 16C15 15 16 13.5 15.5 11C15 8.5 14 7 13 6C15 5.5 16 5.5 17 6Z" fill="currentColor" fillOpacity="0.15" />
              <path d="M12 18V21" />
            </svg>
            );
            case "shield":
            return <Shield className="w-6 h-6 text-brand-cyan" />;
            case "users":
            return <Users className="w-6 h-6 text-brand-cyan" />;
            case "user":
            return <User className="w-6 h-6 text-brand-cyan" />;
            case "ribbon":
            return <Ribbon className="w-6 h-6 text-brand-cyan" />;
            case "cpu":
            return <Cpu className="w-6 h-6 text-brand-cyan" />;
            case "wrench":
            return <Wrench className="w-6 h-6 text-brand-cyan" />;
            case "droplet":
            return <Droplet className="w-6 h-6 text-brand-cyan" />;
            default:
            return <Activity className="w-6 h-6 text-brand-cyan" />;
    }
  };

            return (
            <div
              className={cn(
                "group relative bg-brand-navy-900/90 rounded-2xl p-6 sm:p-7 border border-brand-navy-800 hover:border-brand-teal-400/50 shadow-xl hover:shadow-2xl hover-lift transition-all duration-300 flex flex-col justify-between backdrop-blur-xs",
                className
              )}
            >
              <div>
                {/* Top Icon Badge & Category Tag */}
                <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-brand-teal-500/10 border border-brand-teal-500/20 flex items-center justify-center group-hover:bg-brand-teal-500 group-hover:text-brand-navy-950 transition-colors duration-300">
                      {renderIcon(treatment.iconName)}
                    </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-brand-cyan bg-brand-cyan/10 px-2.5 py-1 rounded-full border border-brand-cyan/20">
                        {treatment.category}
                      </span>
                  </div>

                  {/* Title */}
                    <h3 className="font-heading font-extrabold text-xl text-white group-hover:text-brand-cyan transition-colors">
                      <Link href={`/treatments/${treatment.slug}`}>
                        <span className="absolute inset-0" aria-hidden="true" />
                        {treatment.title}
                      </Link>
                    </h3>

                    {/* Short Description */}
                      <p className="text-sm text-slate-300 mt-2.5 line-clamp-3 leading-relaxed">
                        {treatment.shortDescription}
                      </p>
                    </div>

                    {/* Card Action Link */}
                        <div className="pt-6 mt-6 border-t border-brand-navy-800 flex items-center justify-between">
                          <span className="text-xs font-bold text-brand-cyan group-hover:text-brand-teal-300 transition-colors flex items-center gap-1.5">
                            {t("treatments.learnMore", "Learn More")}
                          </span>
                            <div className="w-8 h-8 rounded-full bg-brand-teal-500/10 text-brand-cyan flex items-center justify-center group-hover:bg-brand-teal-500 group-hover:text-brand-navy-950 transition-all transform group-hover:translate-x-1">
                              <ArrowRight className="w-4 h-4" />
                            </div>
                          </div>
                        </div>
                        );
}
