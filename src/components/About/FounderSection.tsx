"use client";

import Image from "next/image";
import { Linkedin } from "lucide-react";

export default function FounderSection() {
  return (
    <section className="bg-linear-to-br p-4 sm:p-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">

        {/* IMAGE SIDE */}
        <div className="relative">
          <div className="absolute -inset-4 bg-blue-200/40 rounded-3xl blur-2xl"></div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-blue-200 bg-white">
            <Image
              src="/images/About/Founder.webp"
              alt="Jugal Chauhan Founder Course Unbox"
              width={600}
              height={450}
              className="w-full object-cover"
            />
          </div>

          {/* CTA */}
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2
                       mt-5 sm:mt-6
                       w-full sm:w-auto
                       px-6 py-3
                       bg-blue-700 hover:bg-blue-800
                       text-white font-semibold
                       rounded-lg shadow-md transition cursor-pointer"
          >
            Connect on LinkedIn
            <Linkedin size={18} />
          </a>
        </div>

        {/* CONTENT SIDE */}
        <div>
          {/* Section Tag */}
          <span className="inline-block mb-3 sm:mb-4 text-xs sm:text-sm font-semibold tracking-wide text-blue-600 uppercase">
            Founder & Mentor
          </span>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight text-blue-900">
            About{" "}
            <span className="bg-linear-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Jugal Chauhan
            </span>
            <br />
            <span className="block mt-1 text-gray-800 text-xl sm:text-2xl md:text-3xl font-bold">
              Founder, Course Unbox Institute
            </span>
          </h2>

          {/* Divider */}
          <div className="my-5 sm:my-6 h-[3px] w-28 sm:w-40 rounded-full bg-linear-to-r from-transparent via-blue-600 to-transparent"></div>

          {/* Content */}
          <div className="space-y-4 sm:space-y-5 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            <p>
              Jugal Chauhan is the founder of{" "}
              <strong>Course Unbox Institute</strong>, a leading platform for
              skill-based education with a strong focus on{" "}
              <strong>AI and Digital Marketing</strong>.
            </p>

            <p>
              With over <strong>11 years of experience</strong>, Jugal has trained
              more than <strong>40,000+ students</strong> and worked with{" "}
              <strong>100+ clients</strong>, ranging from startups to global brands.
            </p>

            <p>
              His expertise in <strong>Artificial Intelligence</strong> and{" "}
              <strong>Digital Marketing</strong> has made him a trusted mentor and
              consultant for businesses navigating the digital era.
            </p>

            <p>
              Certified by <strong>Amazon</strong>, <strong>Flipkart</strong>, and a{" "}
              <strong>Google Premier Partner</strong>, Jugal is known for his
              practical, industry-driven teaching approach.
            </p>

            <p>
              Under his leadership, <strong>Course Unbox Institute</strong> continues
              to empower individuals and organisations by bridging the gap between
              learning and real-world application.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
