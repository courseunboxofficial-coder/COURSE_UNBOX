"use client";

import { Check, Timer } from "lucide-react";
import React, { useState } from "react";
import Countdown from "react-countdown";
import Image from "next/image";
import PopUpForm from "./PopUpForm";

export default function CertificationBanner() {
  const [isOpen , setIsOpen] = useState(false);

  const TARGET_TIME =
    Date.now() +
    1 * 24 * 60 * 60 * 1000 +
    10 * 60 * 60 * 1000 +
    21 * 60 * 1000 +
    58 * 1000;

  return (
      <>
      <PopUpForm isOpen={isOpen} onCancel={()=>setIsOpen(false)} onConfirm={()=>setIsOpen(false)}/>
      <section className="w-full bg-[#e1f4ff] my-20 py-10">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="mb-6">
      <div className="flex gap-4 leading-2">
            <span className="font-semibold text-sm sm:text-sm px-1 py-1  md:text-lg">CERTIFICATION COURSES</span>
          <div className="  text-blue-600 border border-blue-200 rounded-md text-sm sm:text-sm px-2 py-1  md:text-lg">
         4-8 weeks
          </div>
      </div>
          <h1 className="text-lg md:text-4xl font-bold text-gray-900 mt-2 border-blue-500  border-l-8 px-2">
            Fastest way to build your CV
          </h1>

          <div className="flex flex-wrap gap-6 mt-4 text-black font-semibold  ">
            <div className="flex items-center gap-2"><Check  strokeWidth={3} size={17} className="text-blue-500 mt-[0.5px]"/><p> Learn at your own schedule</p></div>
            <div className="flex items-center gap-2"><Check  strokeWidth={3} size={17} className="text-blue-500 mt-[0.5px]"/> <p>Practical learning</p></div>
            <div className="flex items-center gap-2"><Check  strokeWidth={3} size={17} className="text-blue-500 mt-[0.5px]"/><p> Industry recognised certificate</p></div>
          </div>
        </div>

        {/* Banner p-3*/}
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-blue-900 via-blue-800 to-blue-400  md:p-10 shadow-lg p-2.5 sm:p-3.5">
          <div className="grid sm:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="text-white text-center sm:text-left ">
              <p className=" text-xl opacity-90">Earn your</p>
              <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold mt-2 ">
                Training Certificate
              </h2>
              <p className="mt-3  opacity-95 md:text-xl text-md">
                Get <span className="font-semibold">55% + 10% OFF</span> on all online trainings
              </p>

               <div className="flex gap-2">
                <button className="mt-5 cursor-pointer inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-3 py-1.5 rounded-full shadow hover:scale-105 transition
              xl:text-md text-sm">
                <Timer size={20}/>FINAL HOURS
              </button>

              <button className="mt-5 cursor-pointer inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-3 py-1.5 rounded-full shadow hover:scale-105 transition
              xl:text-md text-sm">
                Get Certificate
              </button>

               </div>

              
            </div>

            {/* Right Content */}
            <div className="relative flex justify-center sm:justify-end">
          <div className="relative bg-white rounded-xl shadow-xl xl:w-64 w-62 md:w-60 sm:w-55 aspect-[4/3] overflow-hidden">
            <Image
              src="/images/Home/CertificateImage.webp"
              alt="Certificate"
              fill
              className="object-contain rounded-xl"
              priority
            />
          </div>
      </div>
          </div>
        </div>

        <div className="mt-6 bg-blue-100 border border-blue-200 rounded-xl py-3 flex justify-center text-blue-700 font-medium">
          <Countdown
            date={TARGET_TIME}
            renderer={({ days, hours, minutes, seconds, completed }) => {
              if (completed) {
                return <span>⏱ Offer Expired</span>;
              }

              return (
                <span>
                  ⏱ Offer ends in {days}d : {hours}h : {minutes}m : {seconds}s
                </span>
              );
            }}
          />
        </div>
      </div>
    </section>
      </>
      
  );
}