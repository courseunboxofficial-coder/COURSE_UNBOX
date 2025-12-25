
 "use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function DigiCourseSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="w-full bg-slate-50 py-5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">

          {/* Title */}
          <h2 className="text-lg md:text-3xl font-bold text-gray-900 mb-2">
            Digital Marketing Course
          </h2>

          {/* Short Description */}
          <p className="text-gray-600 leading-relaxed mb-4">
            Learn how to grow brands online using SEO, social media, paid ads,
            content marketing, and analytics. This course is designed for
            beginners as well as professionals looking to upgrade their skills.
          </p>


          {/* Expandable Content */}
          <div  className={`transition-all duration-500 ease-in-out overflow-hidden ${expanded ? "max-h-250 opacity-100" : "max-h-0 opacity-0"}`}>
            <div className="pt-2 space-y-2 text-gray-600 leading-relaxed">

              <p> This Digital Marketing course covers all essential modules, including Search Engine Optimization (SEO), Social Media Marketing (SMM), Google Ads, Facebook Ads, Email Marketing,
                Content Strategy, and Web Analytics.</p>

              <p>You will work on real-world projects, understand audience targeting, keyword research, conversion optimization, and performance tracking using tools like Google Analytics and
                Search Console.</p>

              <p>By the end of the course, you will be job-ready with practical
                skills, industry insights, and a strong portfolio to showcase
                your expertise.</p>
            </div>
          </div>


               {/* Read More Button (LEFT aligned) */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="relative inline-flex items-center gap-2   px-5 py-2 text-sm font-semibold   text-blue-600 border border-blue-600
              rounded-full
              transition-all duration-300 ease-in-out
              hover:bg-blue-600 hover:text-white
              hover:shadow-md active:scale-95 cursor-pointer">
            {expanded ? "Read Less" : "Read More"}
            {expanded ? (
              <ChevronUp size={18} />
            ) : (
              <ChevronDown size={18} />
            )}
          </button>

        </div>
      </div>
    </section>
  );
}