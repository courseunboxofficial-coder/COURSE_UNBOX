"use client";

import { useState } from "react";

export default function FinalMasterclassForm() {
  const [profession, setProfession] = useState<string[]>([]);

  const toggleProfession = (value: string) => {
    setProfession((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <section className="bg-linear-to-b from-blue-50 via-white to-blue-100 py-6 sm:py-10">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">

        {/* Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-6 md:p-8">

          {/* Heading */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-blue-900 text-center">
            Apply for Free Masterclass
          </h2>

          <p className="text-center text-gray-600 mt-2 sm:mt-3 text-sm sm:text-base md:text-lg">
            Learn AI & Digital Marketing from industry experts
          </p>

          {/* Divider */}
          <div className="mx-auto my-3 sm:my-4 h-[3px] w-32 sm:w-48 rounded-full bg-linear-to-r from-transparent via-blue-600 to-transparent" />

          {/* Form */}
          <form className="space-y-3 sm:space-y-4">

            {/* Name */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Full Name"
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 sm:py-3
                           text-sm sm:text-base
                           focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 sm:py-3
                           text-sm sm:text-base
                           focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 sm:py-3
                           text-sm sm:text-base
                           focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full mt-4 sm:mt-5
                         bg-blue-700 hover:bg-blue-800
                         text-white text-base sm:text-lg font-bold
                         py-2.5 sm:py-3
                         rounded-xl shadow-lg
                         transition-all duration-200 cursor-pointer"
            >
              Apply Now »
            </button>

            {/* Trust Note */}
            <p className="text-center text-xs sm:text-sm text-gray-500 mt-2">
              🔒 Your information is 100% safe and will not be shared
            </p>

          </form>
        </div>
      </div>
    </section>
  );
}
