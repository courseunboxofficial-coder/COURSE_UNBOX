import { BookA, Clock, ShieldCheck } from "lucide-react";
import Image from "next/image";
import React from "react";

const TopCourses = () => {

  const TopCourses = [
    { title: "MERN Stack Mastery", subtitle: "Best Course To learn About Mern Stack", domain: "Development", duration: "6 months", language: "English", image :"/images/Home/MERN STACK MASTERY.png" },
    { title: "UI/UX Design Fundamentals", subtitle: "Best Course To Learn About UI/UX", domain: "Development", duration: "7 months", language: "English", image :"/images/Home/NEXT.JS.png" },
    { title: "Next.js Advanced Development", subtitle: "Best Course To Learn About The Next.js", domain: "Development", duration: "8 months", language: "English", image :"/images/Home/UIUX.png" },
    { title: "MERN Stack Mastery", subtitle: "Best Course To learn About Mern Stack", domain: "Development", duration: "6 months", language: "English", image :"/images/Home/MERN STACK MASTERY.png" },
    { title: "UI/UX Design Fundamentals", subtitle: "Best Course To Learn About UI/UX", domain: "Development", duration: "7 months", language: "English", image :"/images/Home/NEXT.JS.png" },
    { title: "Next.js Advanced Development", subtitle: "Best Course To Learn About The Next.js", domain: "Development", duration: "8 months", language: "English", image :"/images/Home/UIUX.png" },
  ]

  return (

    <section className="w-full  bg-[#e3f0fd] py-8  sm:py-10 md:py-12  px-6 md:px-12 lg:px-20">


      <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-extrabold mb-13 text-[#020274]">
        Top Courses
      </h2>


      <div className="flex gap-10 overflow-x-auto overflow-y-hidden horizontal-scroll p-2 sm:p-3 md:p-4 lg:p-5 pb-10">

        {/* CARD */}
        {TopCourses.map((course, idx) => (
          <div
            key={idx}
            className="flex flex-col shrink-0 min-w-[83vw] sm:min-w-[70vw] md:min-w-[50vw] lg:min-w-[26vw] 2xl:w-[20vw]  bg-white shadow-2xl rounded-3xl
                       hover:scale-[1.03] transition cursor-pointer overflow-hidden"
          >
            {/* Image */}
            <div className="relative w-full aspect-[16/9]">
              <Image
                src={course.image}
                alt="courseImage"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex-1 p-2 sm:p-3 md:p-4 lg:p-5 text-gray-700">
              <div className="">
                <p className="mt-2 mb-2 text-center text-lg font-bold text-[#213c98]">
                  {course.title}
                </p>

                <p className="mb-2 text-center text-sm  md:text-md text-[#213c98]">
                  {course.subtitle}
                </p>

                <div className="w-[50%] mb-2 text-center mx-auto mt-1 bg-indigo-100 p-1 rounded-2xl">
                  {course.domain}
                </div>

                <div className="w-[98%] mx-auto bg-gray-100 flex flex-wrap shadow-2xl justify-center gap-2 md:gap-3 p-1 rounded-lg">
                  <div className="flex gap-0.5 items-center  md:gap-1 border-r border-[black] p-1 md:p-1.5">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6" /> <span className="text-xs sm:text:sm md:text-base">{course.duration}</span> 
                  </div>
                  <div className="flex gap-0.5  items-center md:gap-1 border-r border-[black] p-1 md:p-1.5">
                    <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6" /> <span className="text-xs sm:text:sm md:text-base">  Certificate </span>
                  </div>
                  <div className="flex gap-0.5  items-center  md:gap-1 p-1.5">
                    <BookA className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6" /> <span className="text-xs sm:text:sm md:text-base">{course.language}</span>
                  </div>


                </div>
              </div>

              <div className="flex justify-around md:justify-between flex-row py-4 sm:p-3 md:p-4">
                <button className=" sm:w-auto text-sm sm:text-base py-2 px-6 md:py-3 md:px-8 bg-blue-600 rounded-full text-white font-bold hover:bg-[#020276] transition cursor-pointer">
                  Explore
                </button>
                <button className="sm:w-auto text-sm sm:text-base py-2 px-6 md:py-3 md:px-8 bg-[#060663] rounded-full text-white font-bold hover:bg-[#0a0ad7] transition cursor-pointer">
                  Reach To Us
                </button>
              </div>
            </div>

          </div>
        ))}

      </div>
    </section>


  );

};

export default TopCourses;