"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function CourseOverview() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="md:max-w-7xl mx-4 md:mx-auto px-6 rounded-xl border-gray-200 shadow-xl bg-linear-to-br from-blue-200 via-blue-100 to-white">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px) bg-size-[24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 py-12 bg-[radial-gradient(#ffffff_1px,transparent_1px)">
      <div className="text-2xl md:text-4xl font-extrabold mb-4">
       <h2>About the <span className="text-blue-600">Data Science</span> Courses</h2>

      </div>

      <p className="text-gray-700 leading-relaxed text-base md:text-lg ">
        Data Science courses focus on building strong foundations in data analysis,
        statistics, machine learning, and real-world problem solving. Learners work
        with industry tools and datasets to develop skills required for modern data
        roles.
        
        {expanded && (
          <>
            {" "}
            Along with Digital Marketing, we also offer a wide range of
            career-focused courses in Data Science, Web Development, AI & Machine
            Learning, UI/UX Design, and other emerging technologies. Each course
            is structured to match current industry requirements, helping
            learners gain job-ready skills, work on real projects, and confidently
            transition into their desired careers.
          </>
        )}
      </p>

      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-4 flex gap-2 items-center text-blue-600 font-medium  transition cursor-pointer py-2 px-4 border-2 rounded-4xl border-blue-400" 
      >
        {expanded ? "Read Less" : "Read More"}
         {expanded ? (
                      <ChevronUp size={18} />
                    ) : (
                      <ChevronDown size={18} />
                    )}
      </button>
    </div>

    </section>
    
  );
}
