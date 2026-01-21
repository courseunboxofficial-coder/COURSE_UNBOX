"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function CategoryOverview({ category }: any) {
  
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-[#eaf8fc] min-h-[30vh] p-10">
      <section className="max-w-7xl mx-auto px-6 rounded-xl border-gray-200 shadow-xl bg-linear-to-br from-blue-200 via-blue-100 to-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px) [background-size:24px_24px]" />

        <div className="max-w-7xl mx-auto px-4 py-12 bg-[radial-gradient(#ffffff_1px,transparent_1px)">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
            About the <span className="text-blue-600">{category.title}</span> Courses

          </h2>

          <div className="text-gray-700 leading-relaxed text-base md:text-lg ">

            {expanded && (

              <section className="mx-auto px-4 ">
                <div className="BlogContent prose prose-slate max-w-none prose-ul:list-disc prose-ul:pl-6 prose-ol:list-decimal prose-ol:pl-6 prose-li:my-1 prose-li:marker:text-slate-500 prose-p:leading-7 "
                  dangerouslySetInnerHTML={{ __html: category.about }}
                />

              </section>
            )}

          </div>

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

      </section >
    </div>

  );
}
