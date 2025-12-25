"use client";

import Image from "next/image";
import Link from "next/link";

export default function AllCoursesCTA() {
  return (
    <section className="hidden sm:block relative my-20 overflow-hidden ">
      {/* Diagonal Gradient Background */}
    <div className="absolute inset-0 bg-linear-to-br from-blue-600 via-blue-800 to-indigo-900" />

      {/* Accent Shape */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-yellow-400/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        
        {/* LEFT CONTENT */}
        <div className="text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
            From Learning <br />
            <span className="text-yellow-300">to Real Careers</span>
          </h2>

          <p className="mt-5 text-blue-100 text-base md:text-lg max-w-xl">
            Whether you’re starting with Digital Marketing or exploring other
            in-demand fields, our courses are designed to take you from
            fundamentals to job-ready skills with clarity and confidence.
          </p>

          {/* Career Path Strip */}
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm md:text-base">
            <span className="px-4 py-2 rounded-full bg-white/10">
              Learn Skills
            </span>
            <span className="text-yellow-300">→</span>
            <span className="px-4 py-2 rounded-full bg-white/10">
              Build Projects
            </span>
            <span className="text-yellow-300">→</span>
            <span className="px-4 py-2 rounded-full bg-white/10">
              Grow Your Career
            </span>
          </div>

          {/* CTA */}
          <div className="mt-10 flex gap-4">
            <Link
              href="/courses"
              className="rounded-full bg-yellow-400 text-blue-900 px-8 py-3 font-semibold shadow-lg hover:bg-yellow-300 transition"
            >
              Start Your Journey
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-white/40 px-8 py-3 font-semibold text-white hover:bg-white/10 transition"
            >
              How It Works
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="sm:flex justify-center lg:justify-end">
          <div className="relative w-72 sm:w-96 h-72 sm:h-96 ">
            <Image
              src="/images/Course/CTA.webp"
              alt="Career focused learning"
              fill
              className="object-contain rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
