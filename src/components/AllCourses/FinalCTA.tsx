"use client";

import Image from "next/image";
import { useState } from "react";
import PopUpForm from "./PopUpForm";
import { Check } from "lucide-react";

export default function FinalCTA() {
  const [isOpen , setIsOpen] = useState(false);
  
  return (
    <section
      className="w-full"
     style={{
      backgroundImage: "url('/images/Course/ImageForFinalCTA.png')",
      backgroundPosition: "center 90%",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}

    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-14 px-6 lg:px-16 py-16">

        {/* ================= LEFT CONTENT ================= */}
        <div className="max-w-xl text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Take the First Step <br />
            <span className="text-yellow-400">Towards Your Career</span>
          </h2>

          <p className="mt-6 text-lg text-blue-100">
            Get guided by industry experts, learn job-ready skills, and unlock
            placement opportunities across top companies.
          </p>

          <ul className="mt-8 space-y-4 text-blue-100">
            <li className="flex items-center gap-2"> <Check size={18} className="mt-1"/> <p className="">Industry-designed curriculum</p></li>
            <li className="flex items-center gap-2"> <Check size={18} className="mt-1"/> <p>Live mentorship & doubt sessions</p> </li>
            <li className="flex items-center gap-2"> <Check size={18} className="mt-1"/> <p>Placement & internship assistance</p></li>
          </ul>
        </div>

        {/* ================= RIGHT CTA ================= */}
        <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-white shadow-xl">
          <h3 className="text-xl font-semibold leading-snug">
            Confused about the <br />
            <span className="text-yellow-400">right course or career?</span>
          </h3>

          <p className="mt-4 text-blue-100 text-sm">
            Talk to our experts and get personalized guidance based on your
            background and goals.
          </p>

          <button onClick={()=>setIsOpen(true)} className="mt-8 w-full bg-yellow-400 text-[#003a8f] font-semibold py-4 rounded-xl hover:bg-yellow-300 cursor-pointer transition">
            Let’s Connect →
          </button>

          <p className="mt-4 text-xs text-blue-200 text-center">
            Free counseling • No spam • Quick response
          </p>
        </div>

      </div>
      <PopUpForm isOpen={isOpen} onCancel={()=>setIsOpen(false)} onConfirm={()=>setIsOpen(false)}/>
    </section>
  );
}
