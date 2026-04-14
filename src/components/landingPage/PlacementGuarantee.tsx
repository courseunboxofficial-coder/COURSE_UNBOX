"use client";
import React from "react";
import { useCheckout } from "@/context/CheckoutContext";


export function PlacementGuarantee() {
  const { openEnrollment } = useCheckout();

  return (
    <section className="bg-primary-container text-on-primary-container py-16 text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4 text-secondary-container">
          100% Placement Guarantee
        </h2>
        <p className="text-lg md:text-xl opacity-90 mb-8">
          We are so confident in our program that we guarantee you'll land a job
          in the digital marketing field within 6 months of graduation, or your
          money back.
        </p>
        <button
          onClick={openEnrollment}
          className="bg-primary text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-primary/90 transition-all active:scale-[0.98] shadow-lg shadow-primary/20 flex justify-center items-center gap-2 mx-auto"
        >
          Claim Your Spot
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </section>
  );
}
