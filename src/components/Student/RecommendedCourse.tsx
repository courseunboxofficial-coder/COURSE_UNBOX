"use client"
import { Clock, User } from "lucide-react";
import { useState } from "react";

export default function RecommendedCourse() {
  const [visible, setVisible] = useState(3);
  const [selectedCourse, setSelectedCourse] = useState("Paid");

  const courses = [
    {
      title: "Full Stack Web Development",
      description: "Learn MERN stack from scratch to advanced level.",
    },
    {
      title: "Data Structures & Algorithms",
      description: "Crack coding interviews with strong DSA fundamentals.",
    },
    {
      title: "React & Next.js Mastery",
      description: "Build scalable, production-ready frontend apps.",
    },
    {
      title: "Backend with Node.js",
      description: "APIs, authentication, databases, and scaling.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 px-3 sm:px-6 lg:px-10">
      {/* Heading */}
      <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-[#025378] text-center sm:text-left">
        Recommended Course
      </h2>

      {/* Tabs */}
      <div className="flex justify-center sm:justify-start gap-3 my-6 flex-wrap">
        {["Paid", "Free"].map((type) => (
          <button
            key={type}
            onClick={() => setSelectedCourse(type)}
            className={`py-1.5 px-4 rounded-full text-sm border transition
              ${
                selectedCourse === type
                  ? "bg-[#025378] text-white border-[#025378]"
                  : "bg-gray-100 text-gray-800 border-gray-300"
              }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div
        className="
          grid gap-5
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          place-items-center
        "
      >
        {courses.slice(0, visible).map((course, idx) => (
          <div
            key={idx}
            className="
              w-full max-w-sm
              bg-white rounded-2xl
              border border-gray-200
              shadow-md hover:shadow-xl
              transition-all duration-300
              overflow-hidden
              group
            "
          >
            {/* Image */}
            <div className="relative h-40 sm:h-44 md:h-48 w-full overflow-hidden">
              <img
                src="https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/0b01b98d-1711-4869-8cc6-fcda02ab7a51.jpeg"
                alt={course.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Content */}
            <div className="p-4 sm:p-5 space-y-3">
              <h3 className="font-semibold text-base sm:text-lg text-gray-900 line-clamp-2">
                {course.title}
              </h3>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>8 months</span>
                </div>
                <div className="flex items-center gap-1">
                  <User size={16} />
                  <span>500+ Enrolled</span>
                </div>
              </div>

              <div className="h-px w-full bg-gray-200" />

              {/* CTA */}
              <button
                className="
                  w-full py-2.5 rounded-lg
                  font-semibold text-sm sm:text-base
                  text-[#025378] border border-[#025378]
                  hover:bg-[#025378] hover:text-white
                  transition
                "
              >
                Explore Course
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View More / Less */}
      <div className="flex justify-center mt-10">
        {(courses.length - visible) > 0 ? (
          <button
            onClick={() => setVisible((prev) => prev + 3)}
            className="py-2 px-5 rounded-lg border text-blue-600 hover:bg-blue-500 hover:text-white transition"
          >
            View More
          </button>
        ) : (
          <button
            onClick={() => setVisible((prev) => prev - 3)}
            className="py-2 px-5 rounded-lg border text-blue-600 hover:bg-blue-500 hover:text-white transition"
          >
            View Less
          </button>
        )}
      </div>
    </section>
  );
}
