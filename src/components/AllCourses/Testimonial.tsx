import React from "react";

const testimonials = [
  {
    name: "Aman Sharma",
    role: "Digital Marketing Executive",
    image: "/images/Student/UnboxProfile.png",
    review:
      "Course Unbox gave me real exposure to tools and live projects. I gained confidence, cracked interviews, and started my career within weeks.",
  },
  {
    name: "Priya Verma",
    role: "MBA Student",
    image: "/images/Student/UnboxProfile.png",
    review:
      "What I loved most was the practical approach. Course Unbox helped me stand out during college placements with real skills, not theory.",
  },
  {
    name: "Rohit Singh",
    role: "Freelance Marketer",
    image: "/images/Student/UnboxProfile.png",
    review:
      "This institute focuses on execution. I started freelancing while learning and landed my first paid client during the course itself.",
  },
];

export default function StudentTestimonials() {
  return (
    <section
      className="
      relative overflow-hidden
      py-16 sm:py-20 lg:py-24
      px-4 sm:px-6 lg:px-20
      "
    >
      {/* Background effects */}
      <div className="absolute inset-0" />
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">
            Real Stories. Real Careers.
          </h2>
          <p className="mt-3 sm:mt-4 text-blue-700 text-sm sm:text-base lg:text-lg">
            Hear from Course Unbox students who built job-ready skills and
            transformed their careers with practical learning.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
              bg-white/95 backdrop-blur-xl
              rounded-2xl sm:rounded-3xl
              p-6 sm:p-8 lg:p-10
              shadow-md sm:shadow-lg
              transition-all duration-300
              hover:shadow-blue-900/30
              hover:-translate-y-2
              "
            >
              {/* Profile */}
              <div className="flex items-center gap-4 sm:gap-5 mb-5 sm:mb-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="
                  w-14 h-14 sm:w-16 sm:h-16
                  rounded-full object-cover
                  border-2 sm:border-4 border-blue-600
                  "
                />
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900">
                    {item.name}
                  </h4>
                  <p className="text-xs sm:text-sm font-medium text-blue-700">
                    {item.role}
                  </p>
                </div>
              </div>

              {/* Review */}
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                “{item.review}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
