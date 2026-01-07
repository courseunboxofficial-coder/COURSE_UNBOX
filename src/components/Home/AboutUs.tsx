"use client"

import { supabase } from "@/lib/supabse/supabaseConfig";
import { useState, useRef, useEffect } from "react";

type About = {
  id : string,
  section : string,
  content : {
    content : string
  }
  created_at : string
}

export default function AboutUs({about} : {about : About}) {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    if (expanded && contentRef.current) {
      contentRef.current.scrollTop = 0; // 
    }
    setExpanded(!expanded);
  };



  return (


    <section className="w-full bg-[#add8e64b] py-10">

    <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-6 py-10 gap-8">
      
      {/* Left Section */}
      <div className="md:w-1/2 w-full rounded-2xl bg-linear-to-b from-sky-400 to-indigo-600 flex items-center justify-center min-h-[300px] shadow-lg">
        <h1 className="text-white text-4xl font-bold">Our Story</h1>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 w-full p-8 bg-white rounded-2xl shadow-lg flex flex-col">
        <h2 className="text-3xl font-semibold mb-4 text-gray-900">
          About Us
        </h2>

        {/* Paragraph Box */}
        <div
          ref={contentRef}
          className={`text-gray-700 leading-relaxed pr-2  text-justify ${expanded ? "overflow-y-auto custom-scrollbar" : "overflow-hidden"}`}
          style={{ height: "130px" }}>
          <p className="">
            {about?.content.content}
          </p>
        </div>

        {/* Button */}
        <div className="mt-4 self-end">
          <button
            onClick={handleToggle}
            className="
              relative inline-flex items-center gap-2
              px-5 py-2
              text-sm font-semibold
              text-blue-600
              border border-blue-600
              rounded-full
              transition-all duration-300 ease-in-out
              hover:bg-blue-600 hover:text-white
              hover:shadow-md
              active:scale-95 cursor-pointer
            "
          >
            {expanded ? "Read Less" : "Read More"}
            <span
              className={`transition-transform duration-300 ${
                expanded ? "rotate-180" : ""
              }`}
            >
              ↓
            </span>
          </button>
        </div>
      </div>
    </div>

    </section>
  );
}



