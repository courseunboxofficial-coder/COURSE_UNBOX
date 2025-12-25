"use client";

import { useState } from "react";

export default function CoursesOverview() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
       <h2>Explore <span className="text-blue-600">Career-Focused</span> Courses Across High-Demand Domains</h2>

      </h2>

      <p className="text-gray-700 leading-relaxed text-base md:text-lg ">
        Digital Marketing is one of the fastest-growing career domains today, and
        our Digital Marketing courses are designed to help learners build
        real-world skills in SEO, social media marketing, performance marketing,
        content strategy, and analytics. These programs focus on hands-on
        learning, industry tools, and practical projects that prepare students
        for high-demand roles from day one.
        
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
