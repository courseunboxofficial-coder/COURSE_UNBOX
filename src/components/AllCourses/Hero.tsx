"use client"
import { IndianRupee , TrendingUp, Globe  } from "lucide-react";
import CountUp from "../Category/CountUp";
import PopUpForm from "./PopUpForm";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { Home } from "lucide-react";
export default function Hero(){
    const [expanded , setExpanded] = useState(false);
    const [isOpen , setIsOpen] = useState(false);
    
    return (
      <>
      <PopUpForm  isOpen={isOpen} onCancel={()=>setIsOpen(false)} onConfirm={()=>setIsOpen(false)}/>

      <section className="relative overflow-hidden bg-linear-to-r from-[#003a8f] via-[#004fb3] to-[#0066d6] py-3 z-99 ">
      
      {/* Soft Pattern Overlay */}

      <nav className="text-sm sm:text-sm flex items-center text-white absolute left-6 top-3   sm:left-6 sm:top-10 md:left-6  md:top-15 z-99 xl:top-10 xl:left-35 ">
        <Link href="/" className="hover:text-blue-500 transition">
         <Home size={19} />
        </Link>
        <span className="mx-2.5">/</span>
        <Link href={"/Courses"} className=" font-medium hover:text-blue-500 transition">
          Courses
        </Link>
      </nav>
     <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[24px_24px]" />

      <div className="relative max-w-7xl mx-auto px-6 pt-8 sm:pt-12 pb-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* ============ LEFT CONTENT ============ */}
        <div className="text-white">
          <h1 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            Explore Industry-Ready <br />
            <span className="text-yellow-400">Professional Courses</span>
          </h1>

          <p className="mt-5 text-xs md:text-base lg:text-lg text-white/80 max-w-xl  leading-relaxed">
            Learn statistical analysis, data visualization, and data mining from
            industry experts. Gain hands-on experience through real-world
            projects and case studies.

            {expanded && (
              <>
                <span className="block mt-3">
                  Our curriculum is designed to bridge theory and practice, helping
                  learners build job-ready skills through industry-relevant tools,
                  practical assignments, and guided mentorship.
                </span>
              </>
            )}
          </p>

          <button onClick={()=>setExpanded(!expanded)} className="mt-5 text-blue-200 underline underline-offset-4 hover:text-white transition cursor-pointer z-90">
            {expanded ? "Read Less" : "Read More"}
          </button>

          <button onClick={()=>setIsOpen(true)} className="mt-6 md:mt-10 block items-center gap-3 bg-yellow-400 cursor-pointer text-[#003a8f] font-semibold px-4 py-2 sm:px-5 sm:py-2 md:px-6 md:py-3 rounded-lg hover:bg-yellow-300 transition">
             Get Courses
            <span className="text-xl">{" "}›</span>
          </button>
        </div>

       <div className="relative hidden md:flex justify-center">
  
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

     <div className="max-w-2xl md:max-w-3xl lg:max-w-5xl mx-2 lg:mx-auto bg-white rounded-xl flex flex-col md:flex-row md:justify-around justify-center  items-center text-black py-6 gap-6">

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
      </>
    
  );
}