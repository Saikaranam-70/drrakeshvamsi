"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function SitePreloader() {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setIsComplete(true);
      return;
    }

    // Lock body scroll while preloader is active
    document.body.style.overflow = "hidden";

    // Progress increments for realistic smooth loading simulation
    const startTime = Date.now();
    const duration = 1400; // 1.4 seconds total loading feel

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const rawProgress = Math.min(100, (elapsed / duration) * 100);

      // Nonlinear smoothing curve
      const easedProgress = Math.min(
        100,
        Math.round(Math.pow(rawProgress / 100, 0.85) * 100)
      );

      setProgress(easedProgress);

      if (elapsed >= duration) {
        clearInterval(timer);
        setProgress(100);

        // Hold briefly at 100% then trigger smooth landing exit
        setTimeout(() => {
          setIsExiting(true);
          // Allow page content to be interactive during transition
          document.body.style.overflow = "unset";

          // Unmount preloader after exit animation completes
          setTimeout(() => {
            setIsComplete(true);
          }, 650);
        }, 200);
      }
    }, 25);

    // Safety fallback: ensure screen is never locked for more than 2.5s
    const fallbackTimer = setTimeout(() => {
      document.body.style.overflow = "unset";
      setIsExiting(true);
      setTimeout(() => setIsComplete(true), 650);
    }, 2500);

    return () => {
      clearInterval(timer);
      clearTimeout(fallbackTimer);
      document.body.style.overflow = "unset";
    };
  }, []);

  if (isComplete) return null;

  return (
    <aside
      aria-label="Site preloader"
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-brand-navy-950 transition-all duration-700 ease-out select-none ${
        isExiting
          ? "opacity-0 scale-105 pointer-events-none filter blur-xs"
          : "opacity-100 scale-100"
      }`}
    >
      {/* Background Soft Ambient Glowing Spheres */}
      <div className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-brand-cyan/15 blur-[90px] pointer-events-none transform -translate-x-12 -translate-y-8 animate-pulse" />
      <div className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-brand-teal-500/15 blur-[90px] pointer-events-none transform translate-x-12 translate-y-8 animate-pulse [animation-delay:700ms]" />

      {/* Subtle radial center highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,18,41,0.85)_0%,rgba(0,11,26,0.98)_70%)] pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-sm">
        {/* Animated Brand Halo & Logo */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center mb-5">
          {/* Outer Rotating Glowing Ring */}
          <div className="absolute inset-0 rounded-full border border-brand-cyan/25 border-t-brand-cyan border-r-brand-teal-400 animate-spin [animation-duration:3s]" />

          {/* Middle Dashed Counter-Rotating Ring */}
          <div className="absolute inset-2 rounded-full border border-dashed border-brand-teal-500/30 animate-spin [animation-duration:7s] [animation-direction:reverse]" />

          {/* Subtle Outer Ping Wave */}
          <div className="absolute inset-1 rounded-full bg-brand-cyan/10 animate-ping [animation-duration:2.5s]" />

          {/* Center Circular Logo Badge */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white p-2 shadow-[0_0_35px_rgba(0,197,220,0.35)] border-2 border-brand-cyan/50 flex items-center justify-center overflow-hidden">
            <Image
              src="/images/logo.png"
              alt="Dr. G. Rakesh Vamsi Logo"
              width={80}
              height={80}
              priority
              className="object-contain p-1"
            />
          </div>
        </div>

        {/* Doctor & Clinic Identity */}
        <div className="space-y-1.5 mb-2">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
            Dr. G. Rakesh Vamsi
          </h2>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-navy-900 border border-brand-teal-500/30 text-[11px] sm:text-xs font-bold text-brand-cyan uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-ping" />
            <span>Consultant Urologist & Andrologist</span>
          </div>

          <p className="text-xs text-slate-400 font-medium pt-0.5">
            KIMS Hospital, Nellore
          </p>
        </div>

        {/* Animated Medical ECG Heartbeat SVG Wave */}
        <div className="w-48 sm:w-56 h-8 relative my-2 overflow-hidden">
          <svg
            viewBox="0 0 200 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            aria-hidden="true"
          >
            {/* Background static pulse trace */}
            <path
              d="M0 20 H45 L54 10 L62 30 L70 5 L78 28 L86 20 H200"
              stroke="rgba(0, 197, 220, 0.15)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Bright animated glowing heartbeat stroke */}
            <path
              d="M0 20 H45 L54 10 L62 30 L70 5 L78 28 L86 20 H200"
              stroke="url(#ecgGradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-ecg"
            />
            <defs>
              <linearGradient id="ecgGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#009DBB" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#00C5DC" stopOpacity="1" />
                <stop offset="100%" stopColor="#60E0F0" stopOpacity="0.8" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Progress Bar Container */}
        <div className="w-56 sm:w-64 mt-2">
          {/* Progress Bar Track */}
          <div className="w-full h-1.5 rounded-full bg-brand-navy-900 border border-brand-navy-800 overflow-hidden relative shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-brand-teal-500 via-brand-cyan to-brand-teal-300 rounded-full transition-all duration-100 ease-out shadow-[0_0_15px_rgba(0,197,220,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Status Label & Percentage Counter */}
          <div className="flex items-center justify-between w-full mt-2 text-[10px] sm:text-[11px] font-mono text-slate-400">
            <span className="tracking-widest uppercase text-slate-400">
              {progress < 100 ? "Clinical Portal" : "Welcome"}
            </span>
            <span className="text-brand-cyan font-bold font-mono">
              {progress}%
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
