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
    <section className="bg-linear-to-b from-blue-50 via-white to-blue-100 py-6 ">
      <div className="max-w-2xl mx-auto px-6">

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8">

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 text-center">
            Apply for Free Masterclass
          </h2>

          <p className="text-center text-gray-600 mt-3 text-lg">
            Learn AI & Digital Marketing from industry experts
          </p>

          {/* Divider */}
          <div className="mx-auto my-4 h-[3px] w-48 rounded-full bg-linear-to-r from-transparent via-blue-600 to-transparent" />

          {/* Form */}
          <form className="space-y-2">

            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Full Name"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full rounded-lg border border-gray-300 px-3 py-2  focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-lg border border-gray-300 px-3 py-2  focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            

            {/* Profession
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Your Profession
              </label>

              <div className="grid sm:grid-cols-2 gap-4">
                {["Student", "Business Owner", "House Wife", "Freelancer"].map(
                  (item) => (
                    <label
                      key={item}
                      className={`flex items-center gap-3 px-3 py-2  rounded-lg border cursor-pointer transition
                        ${
                          profession.includes(item)
                            ? "border-blue-600 bg-blue-50"
                            : "border-gray-300"
                        }`}
                    >
                      <input
                        type="checkbox"
                        checked={profession.includes(item)}
                        onChange={() => toggleProfession(item)}
                        className="accent-blue-600"
                      />
                      <span className="text-gray-800 font-medium">
                        {item}
                      </span>
                    </label>
                  )
                )}
              </div>
            </div> */}

            {/* Submit */}
            <button
              type="submit"
              className="w-full mt-4 bg-blue-700 hover:bg-blue-800 text-white text-lg font-bold py-2 rounded-xl shadow-lg transition-all duration-200 cursor-pointer"
            >
              Apply Now »
            </button>

            {/* Trust Note */}
            <p className="text-center text-sm text-gray-500 mt-2">
              🔒 Your information is 100% safe and will not be shared
            </p>

          </form>
        </div>
      </div>
    </section>
  );
}
