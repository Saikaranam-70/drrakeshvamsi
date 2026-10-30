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
  theme = "light",
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
          className={cn(
            "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider",
            theme === "dark"
              ? "bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30"
              : "bg-brand-teal-50 text-brand-teal-700 border border-brand-teal-100"
          )}
        >
          {badgeIcon}
          <span>{badge}</span>
        </div>
      )}

      <h2
        className={cn(
          "font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-tight leading-tight",
          theme === "dark" ? "text-white" : "text-brand-navy-900"
        )}
      >
        {highlightedText ? (
          <>
            {title.split(highlightedText)[0]}
            <span className="text-brand-teal-500">{highlightedText}</span>
            {title.split(highlightedText)[1]}
          </>
        ) : (
          title
        )}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "text-sm sm:text-base leading-relaxed",
            theme === "dark" ? "text-slate-300" : "text-slate-600"
          )}
        >
          {subtitle}
        </p>
      )}

      {children}
    </div>
  );
}
