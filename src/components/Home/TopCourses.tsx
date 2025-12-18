import Image from "next/image";
import React from "react";

const TopCourses = () => {
  return (
    <section className="w-full bg-linear-to-r from-[#f8f8fd] to-[#c9e1f1] py-12 px-6 md:px-12 lg:px-20">
      
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-extrabold mb-10 text-[#020274]">
        Top Courses
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">

        {/* CARD */}
        {[1, 2, 3].map((_, idx) => (
          <div
            key={idx}
            className="flex flex-col bg-white shadow-2xl rounded-3xl
                       hover:scale-[1.03] transition cursor-pointer overflow-hidden"
          >
            {/* Image */}
            <div className="relative w-full aspect-[16/9]">
              <Image
                src="/images/Home/Course.jpg"
                alt="courseImage"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex-1 p-5 bg-blue-50 text-gray-700">
              Here is Content of the Course
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 p-4">
              <button className="w-full sm:w-auto py-3 px-6 bg-blue-600 rounded-full text-white font-bold hover:bg-blue-700 transition">
                Explore
              </button>
              <button className="w-full sm:w-auto py-3 px-6 bg-[#060663] rounded-full text-white font-bold hover:bg-[#020274] transition">
                Reach To Us
              </button>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default TopCourses;
