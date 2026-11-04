import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: string;
  highlightedText?: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
  children?: React.ReactNode;
}

export default function SectionHeading({
  badge,
  badgeIcon,
  title,
  highlightedText,
  subtitle,
  align = "left",
  className,
  children,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-3",
        align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl",
        className
      )}
    >
      {badge && (
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E5EFF0] text-[#17364B] border border-[#B99A62]/30 shadow-xs"
        >
          {badgeIcon}
          <span>{badge}</span>
        </div>
      )}

        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-tight leading-tight text-[#17364B]">
          {highlightedText ? (
            <>
              {title.split(highlightedText)[0]}
              <span className="text-[#B99A62]">{highlightedText}</span>
              {title.split(highlightedText)[1]}
            </>
          ) : (
            title
          )}
        </h2>

        {subtitle && (
            <p className="text-sm sm:text-base leading-relaxed text-[#3A5668]">
              {subtitle}
            </p>
      )}

            {children}
          </div>
        );
}
