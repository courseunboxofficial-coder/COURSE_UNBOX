"use client";
import React from "react";
import { useCheckout } from "@/context/CheckoutContext";

export function NavbarLandingPage() {
  const { openEnrollment } = useCheckout();

  return (
    <header className="fixed top-0 w-full z-50 bg-primary border-b border-white/10 shadow-md">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between gap-6">
        {/* Left — Logo + CTA tagline */}
        <div className="flex items-center gap-4 min-w-0">
          {/* Logo */}
          <span className="font-headline font-extrabold text-base tracking-tight text-white whitespace-nowrap shrink-0">
            Course <span className="text-secondary-fixed">UNBOX</span>
          </span>

          {/* Divider — desktop only */}
          <span className="hidden md:block w-px h-5 bg-white/20" />

          {/* Tagline — desktop only */}
          <p className="hidden md:block font-headline font-bold text-sm text-white/90 truncate">
            Learn{" "}
            <span className="text-secondary-fixed">AI + Digital Marketing</span>{" "}
            — Build a Career That Pays
          </p>
        </div>

        {/* Right — CTA Buttons */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Book a Demo */}
          <button
            id="navbar-book-demo-btn"
            onClick={openEnrollment}
            className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-primary font-headline font-bold text-xs md:text-sm border-2 border-white transition-all duration-300 ease-out hover:bg-secondary-fixed-dim hover:border-secondary-fixed-dim hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
          >
            <span
              className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:rotate-12"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              calendar_month
            </span>
            <span className="hidden sm:inline">Book a Demo</span>
            <span className="sm:hidden">Demo</span>
          </button>

          {/* Download Brochure */}
          <button
            id="navbar-download-brochure-btn"
            onClick={openEnrollment}
            className="group hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-secondary-fixed-dim text-primary font-headline font-bold text-xs md:text-sm border-2 border-secondary-fixed-dim transition-all duration-300 ease-out hover:bg-secondary-fixed hover:border-secondary-fixed hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
          >
            <span
              className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-y-0.5"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              download
            </span>
            Brochure
          </button>
        </div>
      </div>
    </header>
  );
}
