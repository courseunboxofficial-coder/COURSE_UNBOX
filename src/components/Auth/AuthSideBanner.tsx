"use client";

import Link from "next/link";
import { Home } from "lucide-react";

export default function AuthSideBanner() {
  return (
    <div
      className="
        hidden lg:flex
        items-center justify-center
        bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800
        relative overflow-hidden
        w-full h-full
      "
    >
      {/* GO TO HOME BUTTON */}
      <Link href="/" className="absolute top-6 left-6 z-20">
        <button
          className="
            inline-flex items-center gap-2
            px-4 py-2
            text-sm font-medium
            text-white
            border border-white/40
            rounded-full
            backdrop-blur-md
            bg-white/10
            transition-all duration-300
            hover:bg-white hover:text-blue-900
            hover:shadow-md
            active:scale-95
            focus:outline-none focus:ring-2 focus:ring-white/50
            cursor-pointer
          "
        >
          <Home size={16} />
          Go to Home
        </button>
      </Link>

      {/* TEXT CONTENT */}
      <div className="absolute top-26 left-16 text-white max-w-md space-y-6 z-10">
        <h2 className="text-4xl font-bold leading-tight">
          Unbox Your <br /> Learning Journey 🎓
        </h2>

        <p className="text-sm text-blue-100 leading-relaxed">
          Learn from industry experts, work on real-world projects, and build
          job-ready skills — all inside one powerful student dashboard.
        </p>

        {/* FEATURE LIST */}
        <ul className="space-y-3 text-sm">
          <li className="flex items-center gap-2">
            <span className="text-green-400">✔</span>
            Industry-ready courses & career paths
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-400">✔</span>
            Live mentorship & doubt-clearing sessions
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-400">✔</span>
            Hands-on projects & real case studies
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-400">✔</span>
            Placement support & interview preparation
          </li>
        </ul>

        {/* TRUST LINE */}
        <p className="text-xs text-blue-200 pt-2">
          Trusted by <span className="font-semibold text-white">10,000+</span>{" "}
          learners • Beginner to Advanced
        </p>
      </div>

      {/* IMAGE */}
      <div className="w-[42%] relative top-50 z-10">
        <img
          src="/images/Student/CourseUnboxImage.webp"
          alt="Course Unbox"
          className="w-full object-contain drop-shadow-2xl"
        />
      </div>

      {/* BACKGROUND DECOR */}
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-700/20 rounded-full blur-3xl"></div>
    </div>
  );
}
