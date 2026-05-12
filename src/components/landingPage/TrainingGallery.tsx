"use client";

import React from "react";
import { useCheckout } from "@/context/CheckoutContext";

export function TrainingGallery() {
  const { openEnrollment } = useCheckout();

  const galleries = [
    {
      title: "Corporate AI training",
      image: "/images/Landing/Landing1.webp"
    },
    {
      title: "College AI training",
      image: "/images/Landing/Landing2.webp",
    },
    {
      title: "Class Room AI training",
      image: "/images/Landing/Landing3.webp",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold font-headline leading-tight text-center text-on-surface mb-12">
          Transforming Careers Across{" "}
          <span className="text-secondary">Every Domain</span>
        </h2>

        {/* Gallery Container - Grid on desktop, horizontal scroll on mobile */}
        {/* Custom scrollbar hiding utilities used alongside snap container */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 pb-6 md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory">
          {galleries.map((item, idx) => (
            <div
              key={idx}
              className="shrink-0 w-[85%] md:w-auto snap-center group"
            >
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden mb-5 editorial-shadow border border-outline-variant/20 block cursor-pointer">
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                {/* Subtle gradient overlay at bottom of images */}
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
              <h3 className="text-lg md:text-xl font-bold font-headline text-center text-on-surface-variant transition-colors group-hover:text-primary">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Centered CTA Container */}
        <div className="flex justify-center mt-10 md:mt-12 w-full">
          <button
            id="hero-book-demo-btn"
            onClick={openEnrollment}
            className="group w-full lg:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary text-white font-headline font-bold text-sm md:text-base border-2 border-primary shadow-md transition-all duration-300 ease-out hover:bg-primary-container hover:border-primary-container hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:shadow-md"
          >
            <span
              className="material-symbols-outlined text-base transition-transform duration-300 group-hover:rotate-12"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              calendar_month
            </span>
            Book a Demo Class
          </button>
        </div>
      </div>
    </section>
  );
}
