"use client";

import { TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";



type typeCourse = {
  id: string;
  title: string;
  description: string;
  startDate: string;
  Duration: number;
  language: string;
  domain: string;
  Delivery_Mode: string;
  low: number;
  high: number;
  price: number;
  slug: string;
};

type CategoryMap = Record<string, typeCourse[]>;



const CATEGORY_LIST = [
  "Digital Marketing",
  "Development",
  "IT & Software",
  "Data Science",
  "Free Classes",
];



export default function CoursesDropdown({
  courses,
}: {
  courses: typeCourse[];
}) {
  const [open, setOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Development");
  const [categoryCourses, setCategoryCourses] = useState<CategoryMap>({});


  useEffect(() => {
    const map: CategoryMap = {};
    CATEGORY_LIST.forEach((cat) => {
      map[cat] = courses.filter((course) => course.domain === cat);
    });
    setCategoryCourses(map);
  }, [courses]);

  console.log(courses);



  return (
    <div
      className="relative h-full"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
     
      <Link
        href="/course"
        className="flex items-center gap-2 font-medium cursor-pointer"
      >
        Courses
        <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded">
          OFFER
        </span>
        <span
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          ▲
        </span>
      </Link>

      <div
        className={`absolute left-0 top-full mt-5 w-[900px] bg-white rounded-2xl shadow-2xl border z-50 p-10 transition-all
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
  
        <div className="absolute -top-6 left-0 w-full h-6" />

        <div className="grid grid-cols-3 gap-10">

          
        
          <div>
            <h4 className="font-semibold text-lg text-gray-900 mb-6">
              Course Categories
            </h4>

            <ul className="flex flex-col gap-3">
              {CATEGORY_LIST.map((cat) => (
                <li
                  key={cat}
                  onMouseEnter={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg cursor-pointer text-sm transition
                    ${
                      activeCategory === cat
                        ? "bg-blue-50 text-blue-600 font-semibold"
                        : "text-gray-500 hover:bg-gray-50"
                    }`}
                >
                  {cat}
                </li>
              ))}
            </ul>

            <Link
              href="/course"
              className="inline-block mt-8 text-sm font-semibold text-blue-600 hover:underline"
            >
              View all courses →
            </Link>
          </div>

          {/* ================= RIGHT: COURSES ================= */}
          <div className="col-span-2">
            {/* TRENDING TAG */}
            <div className="flex items-center gap-2 mb-5">
              <span className="bg-orange-100 text-orange-600 text-xs px-3 py-1 rounded-full">
                🔥 Trending in {activeCategory}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-5 max-h-[360px] overflow-y-auto pr-2">
              {(categoryCourses[activeCategory] || []).map((course) => (
                <Link
                  key={course.id}
                  href={`/course/${course.slug}`}
                  className="group block border rounded-xl p-4 hover:shadow-lg transition"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-gray-800 group-hover:text-blue-600">
                      {course.title}
                    </h4>
                    <TrendingUp size={16} className="text-orange-500" />
                  </div>

                  <p className="text-xs text-gray-500 mt-1">
                    {course.Duration} weeks • {course.Delivery_Mode}
                  </p>

                  <p className="text-xs font-semibold text-green-600 mt-2">
                    ₹{course.low}LPA – ₹{course.high}LPA
                  </p>
                </Link>
              ))}

              {/* EMPTY STATE */}
              {(categoryCourses[activeCategory] || []).length === 0 && (
                <p className="text-sm text-gray-500">
                  No courses available.
                </p>
              )}
            </div>

            {/* CTA */}
            <Link
              href="/course"
              className="block text-center mt-6 text-sm font-semibold text-blue-600 hover:underline"
            >
              Explore all {activeCategory} courses →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
