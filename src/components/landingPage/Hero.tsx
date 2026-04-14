"use client"

import React, { useEffect, useState } from "react";
import { EnrollmentForm } from "./EnrollmentForm";
import PopupForm from "./PopUpForm";

export function Hero() {
  const [open, setOpen] = useState(false);

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
      <header className="relative bg-primary overflow-hidden pt-12 pb-16 md:pt-20 md:pb-32 lg:pb-48">
        {/* Background Effect for Desktop */}
        <div className="hidden lg:block absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-container rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-md lg:max-w-7xl mx-auto px-6 lg:grid lg:grid-cols-12 lg:gap-12 lg:items-start relative z-10">
          {/* Left / Top Content */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-primary-fixed text-on-secondary-fixed px-1 py-1 lg:rounded-sm rounded-sm text-[10px] font-bold font-label uppercase tracking-wider max-w-30">
                <img
                  src={"/images/About/CourseUnboxImage.webp"}
                  alt="course unbox logo"
                />
              </span>
              {/* Added styling for rating that matches mobile view on small screens */}
              <div className="flex items-center lg:hidden text-secondary">
                <span
                  className="material-symbols-outlined text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span className="font-headline font-bold text-xs ml-1 text-white">
                  4.9 (2,450 Ratings)
                </span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-headline font-bold text-white lg:text-on-primary leading-tight tracking-tight mb-6">
              AI Digital{" "}
              <span className=" text-primary-fixed">
                Marketing Course in{" "}
                <span className="text-secondary-container">Noida</span>
              </span>
              <br className=" lg:block" />
              <span className=" lg:inline text-lg text-primary  md:text-3xl tracking-wider font-bold md:font-extrabold bg-secondary-fixed-dim">
                With 100% Placement Guarantee{" "}
              </span>
            </h1>

            {/* Desktop specific stats */}
            <div className="hidden lg:flex flex-wrap gap-4 items-center mb-6">
              <div className="flex items-center gap-2">
                <span className="text-secondary-fixed font-bold text-lg">
                  4.8
                </span>
                <div className="flex text-secondary-fixed">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star_half
                  </span>
                </div>
                <span className="text-primary-fixed text-sm">
                  (12,450 ratings)
                </span>
              </div>
              <span className="text-primary-fixed text-sm">105,432 students</span>
            </div>

            {/* Mobile Video element injected here to match mobile flow */}
            <div onClick={() => setOpen(true)} className="cursor-pointer lg:hidden mb-3">
              <img
                src="https://img.youtube.com/vi/Wx-oVuD5XUE/maxresdefault.jpg"
                className="rounded-xl"
              />
            </div>

            {/* Modal */}
            {open && (
              <div
                className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                onClick={() => setOpen(false)} // 👈 click outside closes
              >
                {/* Prevent closing when clicking inside */}
                <div
                  className="relative w-[90%] max-w-3xl aspect-video"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setOpen(false)}
                    className="absolute -top-10 right-0 text-white text-3xl"
                  >
                    ✕
                  </button>

                  <iframe
                    className="w-full h-full rounded-xl"
                    src="https://www.youtube.com/embed/Wx-oVuD5XUE?autoplay=1"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>
              </div>
            )}

            <p className="text-white/80 lg:text-primary-fixed-dim text-lg leading-relaxed mb-8 max-w-2xl">
              <span className="text-secondary-container text-3xl md:text-4xl font-bold">
                #1
              </span>{" "}
              Digital Marketing Training Institute in Noida | Learn 25+ Modules |
              3-12 Months Digital Marketing Courses | 50+ Certifications | 75,000+
              Trained
            </p>

            <div className="lg:hidden bg-white p-6 rounded-xl editorial-shadow">
              <h3 className="text-xl font-headline font-bold text-center mb-4 text-on-surface">
                Start Your AI Marketing Journey
              </h3>
              <EnrollmentForm />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
