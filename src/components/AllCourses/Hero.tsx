"use client"
import { IndianRupee , TrendingUp, Globe  } from "lucide-react";
import CountUp from "../Category/CountUp";

import Image from "next/image";

export default function Hero(){
    return (
    <section className="relative overflow-hidden bg-linear-to-r from-[#003a8f] via-[#004fb3] to-[#0066d6] py-6">
      
      {/* Soft Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative max-w-7xl mx-auto px-6 pt-4 sm:pt-16 pb-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* ============ LEFT CONTENT ============ */}
        <div className="text-white">
          <h1 className=" text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Explore Industry-Ready <br />
            <span className="text-yellow-400">Professional Courses</span>
          </h1>

          <ul className="mt-8 space-y-2 sm:space-y-3 md:space-y-4 text-lg text-blue-100">
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 text-xl">•</span>
              Learn from top universities & industry experts
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 text-xl">•</span>
              Job-oriented programs across AI, Tech & Management
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 text-xl">•</span>
              Flexible online learning with certifications
            </li>
          </ul>

          <button className="mt-6 md:mt-10 inline-flex items-center gap-3 bg-yellow-400 text-[#003a8f] font-semibold px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg hover:bg-yellow-300 transition">
             Get Courses
            <span className="text-xl">›</span>
          </button>
        </div>

       <div className="relative hidden lg:flex justify-center">
  
            {/* Big Circle */}
            <div className="absolute w-[180px] h-[180px] sm:w-[350px] sm:h-[450px] md:w-[420px] md:h-[420px] rounded-full " />

            {/* Illustration */}
            <div className="relative z-10 w-[440px] h-[460px]  rounded-xl overflow-hidden">
                <Image
                src="/images/Course/CouresesHero.svg"
                alt="animated girl with laptop"
                fill
                className="object-contain"
                />

                {/* HIRED Stamp */}
                <div className="absolute top-8 left-8 bg-white text-blue-600 font-bold px-4 py-2 rounded-lg shadow-lg rotate-[-8deg]">
                HIRED
                </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute bg-white/20 top-10 right-10  backdrop-blur px-4 py-2 rounded-lg text-sm text-white border border-white/20">
                100+ Courses
            </div>
        </div>

     </div>

     <div className="max-w-2xl sm:max-w-3xl md:max-w-5xl mx-2 md:mx-auto bg-white rounded-xl flex flex-col sm:flex-row sm:justify-around justify-center  items-center text-black py-6 gap-6">

          {/* CARD 1 */}
          <div className=" flex items-center gap-2">
            <IndianRupee color="#d18800" size={45} />
            <div>
              <p className="text-lg sm:text-2xl font-bold">
                <CountUp prefix="INR " end={1200000} suffix="+" />
              </p>
              <p className="text-xs sm:text-sm text-gray-700">
                Average salary at entry level
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className=" flex items-center gap-2">
            <Globe color="#d18800" size={45} />
            <div>
              <p className="text-lg sm:text-2xl font-bold">
                <CountUp prefix="INR " end={300} suffix="+" />
              </p>
              <p className="text-xs sm:text-sm text-gray-700">
                Job opportunities by 2026
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className=" flex items-center gap-2">
            <TrendingUp  color="#d18800" size={45} />
            <div>
              <p className="text-lg sm:text-2xl font-bold">
                <CountUp end={400} suffix="%" />
              </p>
              <p className="text-xs sm:text-sm text-gray-700">
                Hiring partners
              </p>
            </div>
          </div>

     </div>


    </section>
  );
}