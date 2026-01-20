"use client"

import { BookA, Clock, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import PopUpForm from "../AllCourses/PopUpForm";

const TopCourses = () => {

  const [isOpen, setIsOpen] = useState(false);

  const TopCourses = [

    { title: "Performance Marketing Course", subtitle: "Master Facebook, Instagram, and Google Ads", domain: "Digital Marketing", duration: "2 months", language: "Hybrid", image: "/images/TopCourses/PERFORMANCE MARKETING.png", slug: "performance-marketing-course" },

    { title: "Prompt Engineering Mastery", subtitle: "Handle ChatGPT, Claude, Gemini, and image-generation", domain: "Digital Marketing", duration: "2 months", language: "Hybrid", image: "/images/TopCourses/Prompt Engineering.png", slug: "prompt-engineering-mastery-program" },

    { title: "Meta Ads and Google Ads", subtitle: "Get skilled in Meta Ads (Facebook & Instagram) ", domain: "Digital Marketing", duration: "1 months", language: "Hybrid", image: "/images/TopCourses/META ADS AND GOOGLE ADS.png", slug: "meta-ads-and-google-ads-masters-course" },

    { title: "AI Based Digital Marketing Diploma", subtitle: "Work on live projects, case studies and brand simulations", domain: "Digital Marketing", duration: "10 months", language: "Hybrid", image: "/images/TopCourses/AI-BASED DIGITAL MARKETING.png", slug: "ai-based-digital-marketing-diploma-course" },

    { title: "SEO Masters Course", subtitle: "Understand how to find high-value keywords, analyze", domain: "Digital Marketing", duration: "1 months", language: "Hybrid", image: "/images/TopCourses/SEO MASTERS.png", slug: "seo-masters-course" },

    { title: "Advance Meta Ads and GA4 Mastery", subtitle: "Master GA4 — events, conversions, custom reports", domain: "Digital Marketing", duration: "1 months", language: "Hybrid", image: "/images/TopCourses/ADVANCE META ADS ABD GA4.png", slug: "meta-ads-ga4-mastery-course" },

  ]

  return (

    <>
      <PopUpForm isOpen={isOpen} onCancel={() => setIsOpen(false)} onConfirm={() => setIsOpen(false)} />


      <section className="w-full  bg-[#e3f0fd] py-8  sm:py-10 md:py-12  px-6 md:px-12 lg:px-20">


        <h2 className="text-3xl  xl:text-4xl 2xl:text-5xl text-center font-extrabold mb-13 text-[#020274]">
          Top Courses
        </h2>


        <div className="flex gap-10 overflow-x-auto overflow-y-hidden horizontal-scroll p-2 sm:p-3 md:p-4 lg:p-5 pb-10">

          {/* CARD */}
          {TopCourses.map((course, idx) => (
            <div
              key={idx}
              className="flex flex-col shrink-0 min-w-[83vw] sm:min-w-[50vw] md:min-w-[40vw] lg:min-w-[26vw] xl:min-w-[25vw] 2xl:w-[20vw]  bg-white shadow-2xl rounded-3xl
                       hover:scale-[1.03] transition cursor-pointer overflow-hidden"
            >
              {/* Image */}
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src={course.image}
                  alt="courseImage"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 p-2 sm:p-3 xl:p-4  2xl:p-5  text-gray-700">
                <div className="">
                  <p className="mt-2 mb-2 text-center text-lg font-bold text-[#213c98]">
                    {course.title}
                  </p>

                  <p className="mb-2 text-center text-sm  md:text-md text-[#213c98]">
                    {course.subtitle}
                  </p>

                  <div className="w-[50%] mb-2 text-center mx-auto mt-1 bg-indigo-100 p-1 rounded-2xl">
                    {course.domain}
                  </div>

                 <div
                  id="topCourseCard"
                  className="
                    w-[98%] mx-auto
                    bg-gray-100 shadow-2xl rounded-lg
                    flex flex-nowrap items-center justify-start
                    gap-3 p-2
                   
                  "
                >
                  {/* Duration */}
                  <div className="flex shrink-0 items-center gap-1 px-2 py-1 border-r border-black">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    <span className="text-xs sm:text-sm md:text-base whitespace-nowrap">
                      {course.duration}
                    </span>
                  </div>

                  {/* Certificate */}
                  <div className="flex shrink-0 items-center gap-1 px-2 py-1 border-r border-black">
                    <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    <span className="text-xs sm:text-sm md:text-base whitespace-nowrap">
                      Certificate
                    </span>
                  </div>

                  {/* Language */}
                  <div className="flex shrink-0 items-center gap-1 px-2 py-1">
                    <BookA className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    <span className="text-xs sm:text-sm md:text-base whitespace-nowrap">
                      {course.language}
                    </span>
                  </div>
                </div>

                </div>

                <div className="flex justify-around md:justify-between flex-row sm:p-3 md:p-4">
                  <Link href={`/course/${course.slug}`}>
                    <button className=" sm:w-auto text-sm sm:text-base py-2 px-6 md:py-3 md:px-8 bg-blue-600 rounded-full text-white font-bold hover:bg-[#020276] transition cursor-pointer">
                      Explore
                    </button>
                  </Link>
                  <button onClick={() => setIsOpen(true)} className="sm:w-auto text-sm sm:text-base py-2 px-6 md:py-3 md:px-8 bg-[#060663] rounded-full text-white font-bold hover:bg-[#0a0ad7] transition cursor-pointer">
                    Reach To Us
                  </button>
                </div>
              </div>

            </div>
          ))}

        </div>
      </section>
    </>

  );

};

export default TopCourses;