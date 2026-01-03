"use client";

import React, { useRef } from "react";
import { ChevronLeft,ChevronRight } from "lucide-react";

/* ---------- Custom Arrows ---------- */
function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg items-center justify-center text-indigo-600 hover:bg-indigo-600 hover:text-white transition"
    >
      ‹
    </button>
  );
}

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg items-center justify-center text-indigo-600 hover:bg-indigo-600 hover:text-white transition"
    >
      ›
    </button>
  );
}

export default function CourseList({course}:any) {
  const courses = [
    { title: "MBA in Data Science", duration: "12 Months", start: "20 Dec 2025", partner: "SSBM Geneva" },
    { title: "Executive PG Certification in Data Analytics", duration: "11 Months", start: "21 Dec 2025", partner: "IIT Roorkee" },
    { title: "Advanced Certification in Data Science & AI", duration: "7 Months", start: "28 Dec 2025", partner: "IITM Pravartak" },
    { title: "Professional Data Science Program", duration: "7 Months", start: "21 Dec 2025", partner: "Top Indian University" },
    { title: "Applied Data Analytics Program", duration: "9 Months", start: "5 Jan 2026", partner: "Industry Experts" },
    { title: "AI & Machine Learning Bootcamp", duration: "6 Months", start: "15 Jan 2026", partner: "Global Faculty" },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };
  

  const scrollRef = useRef<HTMLDivElement>(null);
  
  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = 320;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };
  

  return (
    <section className="py-24 bg-linear-to-b from-[#F7F9FF] to-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-14">
          Top Universities{" "}
          <span className="text-indigo-600">Data Science & Analytics</span> Courses
        </h2>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-3 rounded-full cursor-pointer hover:bg-blue-300 transition"
          >
            <ChevronLeft />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-3 rounded-full cursor-pointer hover:bg-blue-300 transition"
          >
            <ChevronRight />
          </button>

          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
           >
            {courses.map((course, idx) => (
              <div key={idx} className="px-3">
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition h-full">
                  <div className="h-40 bg-linear-to-br from-indigo-600 to-blue-500 rounded-t-2xl flex items-center justify-center
                   text-white font-bold text-center ">
                     <img src="https://kvch.in/assets-new/img/banner/gm.webp" alt="Course" className="w-full h-full object-center" />
                  
                  </div>

                  <div className="p-6 flex flex-col">
                    <h3 className="font-semibold text-lg mb-4">
                      {course.title}
                    </h3>

                    <div className="text-sm text-gray-600 space-y-2 mb-6">
                      <p><span className="font-medium">Duration:</span> {course.duration}</p>
                      <p><span className="font-medium">Cohort Starts:</span> {course.start}</p>
                    </div>

                    <button className="mt-auto w-full py-3 rounded-xl border border-indigo-600 text-indigo-600 font-semibold hover:bg-indigo-600 hover:text-white transition">
                      View Program
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
