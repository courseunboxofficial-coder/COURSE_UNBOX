"use client";
import React from "react";
import { useCheckout } from "@/context/CheckoutContext";

export function CounselorCTAlandingPage() {
  const { openEnrollment } = useCheckout();

  return (
    <section className="w-full py-8 md:py-12 border-t border-b border-outline-variant/20 mb-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-extrabold font-headline leading-tight text-on-surface">
            Confused about your career?{" "}
            <span className="text-primary block md:inline mt-2 md:mt-0">
              Let's talk it out.
            </span>
          </h2>
        </div>
        
        <div className="shrink-0">
          <button
            onClick={openEnrollment}
            className="group animate-btn-tilt inline-flex items-center gap-2 px-8 py-4 rounded-full bg-secondary-container text-primary-container font-headline font-bold text-lg  border-primary shadow-lg transition-all duration-300 ease-out hover:bg-secondary-fixed hover:border-primary-container hover:shadow-xl hover:-translate-y-1 active:translate-y-0"
          >
            <span
              className="material-symbols-outlined text-xl transition-transform duration-300 group-hover:scale-110"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              support_agent
            </span>
            Talk to Counselor
          </button>
        </div>
      </div>
    </section>
  );
}
