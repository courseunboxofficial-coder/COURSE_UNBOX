"use client";

import {
  Users,
  GraduationCap,
  Laptop,
  UserCheck,
} from "lucide-react";

const features = [
  {
    title: "In-Course Internship",
    desc: "Paid internships to learn from professionals and gain meaningful, hands-on experience.",
    icon: Users,
  },
  {
    title: "Scholarship Facility",
    desc: "Complete guidance to build your professional resume and catch recruiters’ attention.",
    icon: GraduationCap,
  },
  {
    title: "Live Practical Sessions",
    desc: "Live training sessions that help students understand concepts in an easy and practical way.",
    icon: Laptop,
  },
  {
    title: "Skilled Trainers",
    desc: "Mock interview sessions from experts to prepare you confidently for final interviews.",
    icon: UserCheck,
  },
];

export default function PlacementAssistance() {
  return (
    <section className="bg-linear-to-b from-white via-blue-50 to-blue-100 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <p className="text-blue-600 font-semibold text-lg">
          We Provide You
        </p>

        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mt-2">
          100% Placement Assistance
        </h2>

        {/* Divider */}
        <div className="mx-auto my-8 h-[3px] w-56 rounded-full bg-linear-to-r from-transparent via-blue-600 to-transparent" />

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group cursor-pointer bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition">
                    <Icon
                      size={28}
                      className="text-blue-700 group-hover:text-white transition"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
