import React from "react";
import { CheckCircle, ShieldCheck, Briefcase, Award } from "lucide-react";

const points = [
  {
    icon: ShieldCheck,
    title: "Amazon & Flipkart Verified",
    desc: "The only Digital Marketing institute in Delhi NCR certified and verified by Amazon and Flipkart.",
  },
  {
    icon: Award,
    title: "Industry-Aligned Curriculum",
    desc: "Our syllabus is designed to match real corporate and agency requirements.",
  },
  {
    icon: Briefcase,
    title: "100% Placement Support",
    desc: "Dedicated placement assistance with interview preparation and job referrals.",
  },
  {
    icon: CheckCircle,
    title: "Practical, Job-Ready Training",
    desc: "Live projects, real tools, and hands-on learning — not just theory.",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 my-16 rounded-3xl shadow-xl  overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-100/40 via-white to-blue-50/40 blur-3xl" />

      {/* Heading */}
      <div className="relative flex gap-4 mb-14">
        <div className="hidden sm:block w-1 bg-blue-600 rounded-full animate-pulse" />
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Why Choose Course Unbox?
          </h2>
          <p className="mt-4 max-w-3xl text-slate-600 text-base sm:text-lg">
            We are the only Digital Marketing institute in Delhi NCR certified and
            verified by Amazon and Flipkart — ensuring industry-level training and
            real career outcomes.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {points.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="
                group bg-blue
                border border-blue-200
                rounded-2xl p-6
                shadow-md
                transition-all duration-500
                hover:-translate-y-3
                hover:shadow-xl hover:shadow-blue-200
                cursor-pointer
              "
            >
              {/* Icon */}
              <div className="
                w-14 h-14 mb-5
                rounded-xl
                bg-blue-50
                flex items-center justify-center
                transition-all duration-500
                group-hover:bg-blue-600
              ">
                <Icon className="
                  w-8 h-8 text-blue-600
                  transition-all duration-500
                  group-hover:text-white
                  group-hover:scale-110 group-hover:rotate-3
                " />
              </div>

              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                {item.desc}
              </p>

              {/* Bottom line animation */}
              <div className="
                mt-4 h-[2px] w-0
                bg-blue-500
                transition-all duration-500
                group-hover:w-full
              " />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyChooseUs;
