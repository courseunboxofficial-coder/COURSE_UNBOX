"use client";

import { ShieldCheck, Award } from "lucide-react";
import Image from "next/image";

export default function PartnerTrustSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      
      {/* Decorative blur */}
      <div className="absolute -top-24 -right-24 w-96 h-96  rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96  rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        
        {/* TRUST BADGE */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-6 shadow-sm">
          <ShieldCheck size={18} />
          Trusted Industry Partner
        </div>

        {/* MAIN HEADING */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight">
          <span className="flex justify-center"><Image src={"/images/About/GoogleIcon.webp"} alt="Google Icon"  width={60} height={60}/>oogle Premier Partner <br /></span>
          
          <span className="text-blue-600">Company</span>
        </h2>

        {/* DIVIDER */}
        <div className="mt-6 mx-auto h-1 w-24 bg-linear-to-r from-blue-500 to-blue-700 rounded-full" />

        {/* SUBTEXT */}
        <p className="mt-6 text-lg md:text-xl text-gray-700 font-medium flex flex-col md:flex-row items-center justify-center gap-2">
          <Award className="text-blue-600" size={22} />
          Get Certified by <span className="text-blue-800 font-semibold">Amazon</span> &
          <span className="text-blue-800 font-semibold">Flipkart</span>
        </p>
      </div>

      <div className="mx-auto my-6 h-[3px] w-full rounded-full mt-12
                    bg-linear-to-r 
                    from-transparent 
                    via-blue-600 
                    to-transparent">
                </div>
     

    </section>
  );
}
