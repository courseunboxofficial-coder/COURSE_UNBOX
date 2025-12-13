"use client";

import Image from "next/image";
import { CheckCircle ,Award ,ShieldCheck } from "lucide-react";

export default function AboutCourseUnbox() {
  return (
    <section className="w-full bg-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div className="bg-white py-16 px-10 shadow-lg rounded-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 ">
            About Course Unbox
          </h2>

          <p className="text-gray-500 leading-relaxed text-lg mb-8 font-semibold tracking-tight">
            Course Unbox is a highly regarded provider of digital marketing training 
            and certification, dedicated to helping learners advance their careers 
            and prepare for the future. We offer tailored programs designed for 
            diverse individuals, nurturing an enjoyable learning environment that 
            meets their unique needs.
          </p>

          {/* LIST */}
          <ul className="space-y-4">
            {[
              "Get Certified by Amazon & Flipkart",
              "50+ Advanced Modules",
              "In-house Internship",
              "100% Placement Support",
              "Lifetime LMS Access",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-800 text-lg">
                <CheckCircle className="text-blue-600 mt-1" size={22} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE BANNER */}
        <div className="flex flex-col items-center">
         <div className="relative group w-full max-w-md rounded-xl overflow-hidden border-4  shadow-lg transition-all duration-300 hover:shadow-blue-400">
  
            {/* IMAGE */}
            <Image
                src="/images/About/FreeDigitalMarketing.webp"
                alt="Digital Marketing Masterclass"
                width={500}
                height={600}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />


           </div>

          {/* Button */}
          <button className="mt-6 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-lg px-8 py-3 rounded-lg shadow-md transition-all duration-200 cursor-pointer">
            » Book Your Seat
          </button>
        </div>
      </div>
    </section>
  );
}
