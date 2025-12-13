"use client";

import { Target, Eye } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="bg-linear-to-b from-blue-50 via-white to-blue-100 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900">
          Why Choose Us?
        </h2>

        <p className="mt-3 text-lg md:text-xl text-blue-600 font-medium">
          Digital Marketing Institute – Course Unbox
        </p>

        {/* Gradient Divider */}
        <div className="mx-auto my-8 h-[3px] w-56 rounded-full bg-linear-to-r from-transparent via-blue-600 to-transparent" />

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10 text-left mt-12 perspective-1000">

          {/* MISSION */}
          <div className="relative cursor-pointer bg-white rounded-2xl shadow-lg border border-blue-100 p-8 hover:shadow-xl  transition-transform duration-300 ease-out
            hover:rotate-y-6 hover:scale-[1.04]
            transform-gpu ">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-3 rounded-xl bg-blue-100 text-blue-700">
                <Target size={24} />
              </div>
              <h3 className="text-2xl font-bold text-blue-900">
                Our Mission
              </h3>
            </div>

            <p className="text-gray-700 leading-relaxed text-[1.08rem]">
              At <strong>Course Unbox</strong>, our mission is to empower individuals
              and organizations by unlocking the potential of quality education and
              skill development. We bridge the gap between knowledge seekers and
              transformative learning experiences, enabling learners to achieve
              personal and professional goals.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed  text-[1.08rem]">
              Through innovative course reviews, expert guidance, and practical
              resources, we strive to make lifelong learning accessible, enjoyable,
              and impactful for all.
            </p>
          </div>

          {/* VISION */}
          <div className="relative cursor-pointer bg-white rounded-2xl shadow-lg border border-blue-100 p-8 hover:shadow-xl  transition-transform duration-300 ease-out
            hover:-rotate-y-6 hover:scale-[1.04]
            transform-gpu">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-3 rounded-xl bg-blue-100 text-blue-700">
                <Eye size={24} />
              </div>
              <h3 className="text-2xl font-bold text-blue-900">
                Our Vision
              </h3>
            </div>

            <p className="text-gray-700 leading-relaxed text-[1.08rem]">
              Our vision is to become the leading platform that revolutionizes the
              way people discover, evaluate, and pursue educational opportunities.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed text-[1.08rem]">
              We envision a future where individuals are equipped with the tools and
              confidence to unbox their true potential through informed learning
              decisions. By fostering a community of learners, educators, and
              institutions, we aim to drive curiosity, growth, and limitless
              possibilities.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
