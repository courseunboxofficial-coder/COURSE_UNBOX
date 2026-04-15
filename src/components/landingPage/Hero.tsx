"use client";

import React, { useEffect, useState } from "react";
import { useCheckout } from "@/context/CheckoutContext";
import { EnrollmentForm } from "./EnrollmentForm";
import PopupForm from "./PopUpForm";

export function Hero() {
  const [isOpen, setOpen] = useState(false);
  const { openEnrollment } = useCheckout();

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <PopupForm />
      <header className="relative overflow-hidden pt-14 pb-16 md:pt-20 md:pb-32 lg:pb-48">
        {/* ── Background image ─────────────────────────────────── */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1920&q=80')",
          }}
        />

        {/* ── Primary-color overlay (transparency so image shows through) */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(0, 36, 120, 0.82)" }}
        />

        {/* ── Subtle radial glow (desktop) ─────────────────────── */}
        <div className="hidden lg:block absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-150 h-150 bg-primary-container rounded-full blur-[140px]" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/30 rounded-full blur-[100px]" />
        </div>

        {/* ── Content ──────────────────────────────────────────── */}
        <div className="max-w-md lg:max-w-7xl mx-auto px-6 lg:grid lg:grid-cols-12 lg:gap-12 lg:items-start relative z-10">
          {/* Left / Top Content */}
          <div className="lg:col-span-7">
            {/* Badge pill */}
            <div className="mx-auto md:mx-0 hidden md:inline-flex max-w-full items-center justify-center gap-2 mb-5 px-3 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-center">
              <span className="font-label text-[11px] sm:text-xs md:text-sm font-bold text-white tracking-wide leading-snug">
                #1 Digital Marketing Institute in Noida
              </span>
            </div>

            {/* Mobile rating row */}
            <div className="lg:hidden mb-5 flex items-center justify-center gap-1.5 rounded-full bg-white/10 px-3 py-2 text-secondary-fixed backdrop-blur-sm w-fit mx-auto">
              <span
                className="material-symbols-outlined text-sm shrink-0"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span className="font-headline font-bold text-[11px] sm:text-xs text-white leading-none whitespace-nowrap">
                4.9 (2,450 Ratings)
              </span>
            </div>

            {/* Main heading — matches screenshot */}
            <h1 className="font-headline font-extrabold text-center md:text-left leading-tight tracking-tight mb-6 text-4xl md:text-5xl lg:text-6xl">
              <span className="text-secondary-fixed">
                #1 AI + Digital Marketing
              </span>
              <br />
              <span className="text-white">Institute in Noida</span>
            </h1>

            {/* LPA pill */}
            <div className="inline-flex items-center mb-6 px-5 py-2.5 rounded-full border border-primary-fixed-dim/50 bg-white/5 backdrop-blur-sm">
              <span className="font-label text-sm md:text-base font-semibold text-white">
                100% placement <span className="text-white/50 mx-1">|</span>{" "}
                Real-World Case Studies
              </span>
            </div>

            {/* Desktop rating row */}
            <div className="hidden lg:flex flex-wrap gap-4 items-center mb-6">
              <div className="flex items-center gap-2">
                <span className="text-secondary-fixed font-bold text-lg">
                  4.8
                </span>
                <div className="flex text-secondary-fixed">
                  {["star", "star", "star", "star"].map((icon, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-base"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {icon}
                    </span>
                  ))}
                  <span
                    className="material-symbols-outlined text-base"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star_half
                  </span>
                </div>
                <span className="text-primary-fixed text-sm">
                  (12,450 ratings)
                </span>
              </div>
              <span className="text-primary-fixed text-sm">
                105,432 students
              </span>
            </div>

            {/* Mobile video — click opens modal */}
            <div
              onClick={() => setOpen(true)}
              className="relative w-full aspect-video rounded-xl overflow-hidden editorial-shadow border border-white/10 mb-8 lg:hidden group cursor-pointer"
            >
              <img
                className="w-full h-full object-cover"
                src="https://img.youtube.com/vi/Wx-oVuD5XUE/maxresdefault.jpg"
                alt="Video Preview"
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 shadow-lg">
                  <span
                    className="material-symbols-outlined text-white text-4xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    play_arrow
                  </span>
                </div>
              </div>
            </div>

            {/* Video Modal */}
            {isOpen && (
              <div
                className="fixed inset-0 bg-black/80 flex items-center justify-center z-100"
                onClick={() => setOpen(false)} // click outside closes
              >
                {/* Prevent closing when clicking inside */}
                <div
                  className="relative w-[90%] max-w-3xl aspect-video"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setOpen(false)}
                    className="absolute -top-10 right-0 text-white text-3xl hover:text-white/70 transition-colors"
                  >
                    ✕
                  </button>

                  <iframe
                    className="w-full h-full rounded-xl shadow-2xl"
                    src="https://www.youtube.com/embed/Wx-oVuD5XUE?autoplay=1&playsinline=1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            )}

            {/* Mobile enrollment form */}
            <div className="lg:hidden bg-white p-6 rounded-xl editorial-shadow mb-4">
              <h3 className="text-xl font-headline font-bold text-center mb-4 text-on-surface ">
                Start Your AI Marketing Journey
              </h3>
              <EnrollmentForm />
            </div>

            {/* Description line 1 */}
            <p className="text-white text-base md:text-lg font-semibold font-body mb-4 leading-relaxed">
              Practical, Job-Oriented Training{" "}
              <span className="text-white/50 mx-1">|</span>{" "}
              <span className="text-secondary-fixed font-bold">
                At Course Unbox
              </span>
            </p>

            {/* Description line 2 */}
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-2xl font-body">
              Master SEO, Google Ads, Social Media Marketing, Email Marketing &
              AI tools with India&apos;s most trusted{" "}
              <span className="text-secondary-fixed font-semibold">
                digital marketing institute in Noida.
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center gap-4 mb-8 lg:flex-row lg:items-start">
              {/* Primary CTA — Book a Demo */}
              <button
                id="hero-book-demo-btn"
                className="group w-full lg:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-headline font-bold text-sm md:text-base border-2 border-primary shadow-md transition-all duration-300 ease-out hover:bg-primary-container hover:border-primary-container hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:shadow-md"
              >
                <span
                  className="material-symbols-outlined text-base transition-transform duration-300 group-hover:rotate-12"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  calendar_month
                </span>
                Book a Demo Class
              </button>

              {/* Secondary CTA — Download Brochure */}
              <button
                id="hero-download-brochure-btn"
                onClick={openEnrollment}
                className="group w-full lg:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-secondary-fixed-dim text-primary font-headline font-bold text-sm md:text-base border-2 border-secondary shadow-md transition-all duration-300 ease-out hover:bg-secondary-fixed hover:border-secondary-fixed hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:shadow-md"
              >
                <span
                  className="material-symbols-outlined text-base transition-transform duration-300 group-hover:translate-y-0.5"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  download
                </span>
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
