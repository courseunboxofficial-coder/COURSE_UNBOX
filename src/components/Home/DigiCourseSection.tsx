
 "use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function DigiCourseSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="max-w-7xl mx-auto px-6 rounded-xl border-gray-200 shadow-xl bg-linear-to-br from-blue-300 via-yellow-50 to-blue-300 my-20 ">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px) [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 py-12 bg-[radial-gradient(#ffffff_1px,transparent_1px)">
       <div className="text-2xl md:text-4xl font-extrabold mb-4 text-black">
       <h2>About the <span className="text-blue-600">Digital Marketing </span> Course</h2>

      </div>

          {/* Short Description */}
          <p className="text-gray-600 leading-relaxed mb-4">
            Learn how to grow brands online using SEO, social media, paid ads,
            content marketing, and analytics. This course is designed for
            beginners as well as professionals looking to upgrade their skills.
          </p>


          {/* Expandable Content */}
          <div  className={`transition-all duration-500 ease-in-out overflow-hidden ${expanded ? "max-h-250 opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
            <div className="pt-2 space-y-3 text-gray-600 leading-relaxed">

              <p> This Digital Marketing course covers all essential modules, including Search Engine Optimization (SEO), Social Media Marketing (SMM), Google Ads, Facebook Ads, Email Marketing,
                Content Strategy, and Web Analytics.

              You will work on real-world projects, understand audience targeting, keyword research, conversion optimization, and performance tracking using tools like Google Analytics and
                Search Console.

              By the end of the course, you will be job-ready with practical
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

    </section>
  );
}