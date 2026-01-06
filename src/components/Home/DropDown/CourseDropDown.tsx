"use client";
import { Triangle , TrendingUp} from "lucide-react";

const COURSE_MENU: Record<string, string[]> = {
  "Digital Marketing": [
    "Full Stack Digital Marketing",
    "SEO Course",
    "Performance Marketing",
    "Social Media Marketing",
    "Content Marketing",
    "Email Marketing",
    "Affiliate Marketing",
  ],
  "Development": [
    "Full Stack Web Development",
    "MERN Stack",
    "React.js",
    "Next.js",
    "Backend Development",
  ],
  "Data & AI": [
    "Data Science",
    "Data Analytics",
    "Python for Data",
    "Machine Learning",
    "AI Tools & Automation",
  ],
  "Design": [
    "UI/UX Design",
    "Graphic Design",
    "Figma Mastery",
  ],
  "Career Programs": [
    "Job Guarantee Program",
    "Placement Courses with AI",
    "Interview Preparation",
  ],
};


import { useState } from "react";
import Link from "next/link";

export default function CoursesDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative h-full hover:text-blue-300 cursor-pointer "
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* NAV ITEM */}
      <button className="flex items-center gap-2 font-medium ">
        Courses
        <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded">
          OFFER
        </span>
            <span
            className={`inline-flex transition-transform duration-300 text-xs ${
                open ? "rotate-0" : "rotate-180"
            }`}
            >
                ▲
            {/* <Triangle size={12} fill="#474747" /> */}
            </span>
      </button>

      {/* DROPDOWN */}
    
        <div   className={`absolute left-0 top-full mt-4 w-[700px] bg-white rounded-xl shadow-2xl border z-50 p-8 ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}>
           <div className="absolute -top-6 left-0 w-full h-6" />
          <div className="grid grid-cols-2 gap-10 divide-x divide-blue-300">

            {/* LEFT COLUMN */}
            <div className="">
              <h4 className="font-semibold text-lg text-gray-900 mb-4">
                Certification Courses
              </h4>

              <ul className="space-y-4 text-gray-600  font-base text-sm ">
                <li className="tems-center ">
                  Artificial Intelligence and Machine Learning
                  <span className=" flex gap-2 text-white w-36 bg-purple-400 py-0.1 px-3 rounded-2xl text-xs">
                    <TrendingUp size={18}/> Trending in AI
                  </span>
                </li>
                <li>Microsoft Generative AI</li>
                <li>Generative AI</li>
                <li>Web Development with AI</li>
                <li>Programming with Python with AI</li>
                <li>Digital Marketing with AI</li>
                <li>Machine Learning with AI</li>
                <li>Advanced Excel with AI</li>
              </ul>

              <Link
                href="/course"
                className="block mt-4 text-sm text-blue-600 hover:underline"
              >
                View 70+ more courses
              </Link>
            </div>

            {/* RIGHT COLUMN */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4  text-lg">
                Placement Courses with AI
              </h4>

              <ul className="space-y-4 text-gray-600 text-sm">
                <li>Full Stack Development Course</li>
                <li>Data Science Course</li>
                <li>Human Resource Management Course</li>
                <li>Digital Marketing Course</li>
                <li>UI/UX Design Course</li>
                <li>Product Management Course</li>
                <li>Financial Modelling Course</li>
                <li>Supply Chain Logistics Course</li>
              </ul>
            </div>

          </div>
        </div>
  
    </div>
  );
}
