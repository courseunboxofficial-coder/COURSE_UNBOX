"use client";

import { ShieldCheck, Award } from "lucide-react";
import Image from "next/image";

export default function PartnerTrustSection() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-20">

      {/* Decorative blur */}
      <div className="absolute -top-24 -right-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">

        {/* TRUST BADGE */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-xs sm:text-sm mb-6 shadow-sm">
          <ShieldCheck size={16} className="sm:size-[18px]" />
          Trusted Industry Partner
        </div>

        {/* MAIN HEADING */}
        <h2
          className="font-extrabold text-blue-900 leading-tight
                     text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
        >
          {/* GOOGLE SPELLING — G IMAGE KE SATH */}
          <span className="flex justify-center items-center leading-none">
            <Image
              src="/images/About/GoogleIcon.webp"
              alt="Google Icon"
              width={60}
              height={60}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-[60px] lg:h-[60px]"
            />
            <span className="ml-1">oogle Premier Partner</span>
          </span>

          <span className="block text-blue-600 mt-2">
            Company
          </span>
        </h2>

        {/* DIVIDER */}
        <div
          className="mt-5 sm:mt-6 mx-auto h-1 w-16 sm:w-24
                     bg-linear-to-r from-blue-500 to-blue-700 rounded-full"
        />

        {/* SUBTEXT */}
        <p
          className="mt-6 text-sm sm:text-base md:text-lg lg:text-xl
                     text-gray-700 font-medium
                     flex flex-col sm:flex-row items-center justify-center gap-2"
        >
          <Award className="text-blue-600 w-5 h-5 sm:w-6 sm:h-6" />
          <span>
            Get Certified by{" "}
            <span className="text-blue-800 font-semibold">Amazon</span> &{" "}
            <span className="text-blue-800 font-semibold">Flipkart</span>
          </span>
        </p>
      </div>

      {/* Bottom Gradient Line */}
      <div
        className="mx-auto mt-10 h-[3px] w-full max-w-4xl rounded-full
                   bg-linear-to-r
                   from-transparent
                   via-blue-600
                   to-transparent"
      />
    </section>
  );
}
