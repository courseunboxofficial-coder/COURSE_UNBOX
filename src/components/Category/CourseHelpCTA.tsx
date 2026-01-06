"use client"
import Image from "next/image";
import { Phone } from "lucide-react";
import PopUpForm from "../AllCourses/PopUpForm";
import { useState } from "react";

export default function CourseHelpCTA() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
    <PopUpForm isOpen={isOpen} onConfirm={()=>setIsOpen(false)} onCancel={()=>setIsOpen(false)}/>
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div
        className="
          relative overflow-hidden rounded-2xl
          bg-linear-to-r
          from-[#3f6f8f]
          via-[#5b4a86]
          to-[#8b4b5a]
          px-8 py-10
          md:px-14 md:py-14
          flex items-center justify-between
        "
      >
        {/* background wave pattern */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.25) 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
        />

        {/* Left content */}
        <div className="relative z-10 max-w-xl text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
            Confused About Which Course to Choose?
          </h2>

          <p className="mt-4 text-sm sm:text-base text-white/90 leading-relaxed">
            Not sure which path is right for you? Our experts are here to guide
            you every step of the way and help you make the best choice.
          </p>

          <button
            onClick={()=>setIsOpen(true)}
            className="
              mt-6 inline-flex items-center gap-2
              rounded-md bg-yellow-600 hover:bg-yellow-700
              px-6 py-3 text-sm sm:text-base font-semibold
              text-white shadow-lg transition cursor-pointer
            "
          >
            <Phone size={18} />
            Talk to an Expert
          </button>
        </div>

        {/* Right illustration */}
        <div className="relative hidden md:block z-10">
          <Image
            src="/images/Course/tallk-to-expert.webp" 
            alt="Confused illustration"
            width={360}
            height={280}
            className="object-contain"
          />
        </div>
      </div>
    </section>
    </>
  );
}
