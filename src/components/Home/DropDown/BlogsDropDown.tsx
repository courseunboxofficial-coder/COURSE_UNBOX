"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const BLOG_MENU: Record<string, string[]> = {
  "Digital Marketing": [
    "SEO Trends in 2026",
    "Google Ads Tips for Beginners",
    "Content Marketing Strategy",
    "Social Media Growth Hacks",
    "Email Marketing Best Practices",
  ],
  "Web Development": [
    "Next.js SEO Best Practices",
    "React Performance Optimization",
    "Tailwind CSS Tips",
    "Frontend vs Backend",
  ],
  "Data & AI": [
    "Generative AI Explained",
    "How AI is Changing Jobs",
    "Machine Learning Basics",
    "Top AI Tools for Productivity",
  ],
  "Career & Jobs": [
    "How to Get a Tech Job as Fresher",
    "Resume Tips for Developers",
    "Interview Preparation Guide",
  ],
  "Guides & Tutorials": [
    "Complete SEO Guide",
    "Learn MERN Stack Roadmap",
    "Beginner’s Guide to Python",
  ],
};


export default function BlogsDropdown() {
  const categories = Object.keys(BLOG_MENU);
  const [open, setOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div
      className="relative hover:text-blue-100 cursor-pointer"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* NAV ITEM */}
      <button className="flex items-center gap-2 font-medium text-gray-700 hover:text-blue-400 cursor-pointer">
        Blogs
        <span
            className={`inline-flex transition-transform duration-300 text-xs mt-1 ${
                open ? "rotate-0" : "rotate-180"
            }`}
            >
                ▲
            {/* <Triangle size={12} fill="#474747" /> */}
            </span>
      </button>

      {/* DROPDOWN */}
   
        <div   className={`absolute cursor-pointer h-90  left-0 top-full mt-4 w-[600px] grid grid-cols-2 bg-white rounded-xl shadow-2xl border z-50 p-4 ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}>
           <div className="absolute -top-6 left-0 w-full h-6" />

          {/* LEFT CATEGORY LIST */}
          <div className="w-62 border-r border-blue-300 px-3 py-4 space-y-1 overflow-y-auto not-[]:">
            <h3 className="font-semibold text-gray-900 mb-4 px-3  text-lg">Category</h3>
            {categories.map((category) => (
              <button
                key={category}
                onMouseEnter={() => setActiveCategory(category)}
                className={`w-full flex justify-between text-left px-3 py-4  text-sm transition cursor-pointer
                  ${
                    activeCategory === category
                      ? "bg-blue-50 text-blue-600 font-semibold "
                      : "text-gray-700 hover:bg-gray-100"
                  }
                `}
              >
                {category} <ChevronRight size={20}/>
              </button>
            ))}
          </div>

          {/* RIGHT BLOG LIST */}
          <div className="flex-1 px-6 py-5 max-h-80 overflow-y-auto">
            <h3 className="font-semibold text-gray-900 mb-4  text-lg">Blogs</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              {BLOG_MENU[activeCategory].map((blog) => (
                <li key={blog}>
                  <Link
                    href="/blogs"
                    className="hover:text-blue-600"
                  >
                    {blog}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-6 pt-4 ">
              <Link
                href="/blog"
                className="text-blue-600 font-medium  py-2 px-4 rounded-lg bg-blue-500 text-white "
              >
                View all blogs →
              </Link>
            </div>
          </div>
        </div>
    
    </div>
  );
}
