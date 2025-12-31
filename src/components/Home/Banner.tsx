"use client"
import React from "react";
import { NotepadText, Brain, GraduationCap, Award } from "lucide-react";
import CountUp from 'react-countup';

const Banner = () => {
  const stats = [
    {
      icon: <NotepadText size={52} />,
      value: 40,
      sign:"+",
      label: "Courses",
    },
    {
      icon: <GraduationCap size={52} />,
      value: 100,
      sign: "k+",
      label: "Students",
    },
    {
      icon: <Award size={52} />,
      value: 12,
      sign:"+",
      label: "Experience",
    },
    {
      icon: <Brain size={52} />,
      value: 450000,
      sign:"+",
      label: "Average Salary",
    },
  ];

  return (
    <section className="w-full bg-blue-100 md:bg-white px-3 sm:px-6 md:px-20 py-4 border-y-2 border-[#08086d]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-0 max-w-7xl mx-auto">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`
              flex items-center justify-center gap-3
              px-4 py-3
              rounded-lg md:rounded-none
              shadow-lg md:shadow-none
              bg-[#ffffff] md:bg-transparent
              ${index < 3 ? "md:border-r md:border-blue-900" : ""}
            `}
          >
           
            <div className="text-blue-950">
              {item.icon}
            </div>

      
            <div className="flex flex-col leading-tight">
              <span className="text-2xl font-bold text-blue-950">
                <CountUp end={item.value} duration={4}/>{item.sign}
              </span>
              {/* Text-base */}
              <span className="text-lg text-gray-600">
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Banner;
