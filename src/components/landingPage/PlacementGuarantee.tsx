"use client";
import React from "react";
import { useCheckout } from "@/context/CheckoutContext";

export function PlacementGuarantee() {
  const { openEnrollment } = useCheckout();

  return (
    <section className="w-full py-10 md:py-14 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Card */}
        <div className="relative bg-primary rounded-2xl px-8 py-12 md:py-14 text-center overflow-hidden">
          {/* Subtle glow blobs */}
          <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-primary-container/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />

          {/* Headline */}
          <h2 className="relative font-headline font-extrabold text-2xl md:text-3xl lg:text-4xl text-white leading-tight mb-4">
            Ready to Transform Your Career with{" "}
            <span className="text-secondary-fixed-dim">
              100% Placement Guarantee?
            </span>
          </h2>

          {/* Subtitle */}
          <p className="relative text-white/70 text-sm md:text-base font-body max-w-xl mx-auto mb-10 leading-relaxed">
            Join thousands of successful students who landed high-paying jobs in
            digital marketing through our proven placement guarantee program.
          </p>

          {/* CTA Buttons */}
          <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary — filled yellow */}
            <button
              id="placement-cta-enroll-btn"
              onClick={openEnrollment}
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-secondary-fixed-dim text-primary font-headline font-bold text-sm md:text-base transition-all duration-300 ease-out hover:bg-secondary-fixed hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 min-w-[200px] justify-center"
            >
              <span
                className="material-symbols-outlined text-base transition-transform duration-300 group-hover:scale-110"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                rocket_launch
              </span>
              Start Your Journey Today
            </button>

            {/* Secondary — outlined yellow */}
            <button
              id="placement-cta-counselor-btn"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border-2 border-secondary-fixed-dim text-secondary-fixed-dim font-headline font-bold text-sm md:text-base bg-transparent transition-all duration-300 ease-out hover:bg-secondary-fixed-dim/10 hover:border-secondary-fixed hover:text-secondary-fixed hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 min-w-[200px] justify-center"
            >
              <span
                className="material-symbols-outlined text-base transition-transform duration-300 group-hover:scale-110"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                support_agent
              </span>
              Talk to Counselor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
