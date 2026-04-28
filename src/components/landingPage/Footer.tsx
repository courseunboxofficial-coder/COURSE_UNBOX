"use client";
import React from "react";
import { useCheckout } from "@/context/CheckoutContext";

export function Footer() {
  const { openEnrollment } = useCheckout();

  return (
    <>
      <section className="mt-8 md:mt-12 bg-secondary-fixed-dim text-primary py-14 md:py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline font-extrabold tracking-tight">
            Become a Certified Digital Marketing Professional
          </h2>
          <p className="mt-4 text-base md:text-lg text-primary/80 font-body">
            Limited seats available. Batch starts soon.
          </p>

          <button
            onClick={openEnrollment}
            className="mt-7 inline-flex items-center justify-center rounded-xl bg-primary text-white px-8 py-4 font-headline font-bold hover:bg-primary-container transition-colors cursor-pointer"
          >
            Apply Now
          </button>
        </div>
      </section>

      <footer className="bg-primary text-primary-fixed py-8 text-center text-sm px-6">
        <div className="max-w-7xl mx-auto">
          <p>&copy; 2026 Course Unbox. Designed By Invento Apps</p>
        </div>
      </footer>
    </>
  );
}
