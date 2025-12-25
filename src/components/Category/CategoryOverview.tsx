"use client";

import { useState } from "react";

export default function CategoryOverview() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
       <h2>About the <span className="text-blue-600">Data Science</span> Courses</h2>

      </h2>

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
        className="mt-4 text-blue-600 font-medium hover:underline transition"
      >
        {expanded ? "Read Less" : "Read More"}
      </button>
    </section>
  );
}
