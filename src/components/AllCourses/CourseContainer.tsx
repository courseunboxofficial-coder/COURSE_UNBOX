"use client";

import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronRight, Star } from "lucide-react";
import Link from "next/link"
import { supabase } from "@/lib/supabse/supabaseConfig";


const categories = [
  "All courses",
  "Digital Marketing",
  "Development",
  "IT & Software",
  "Data Science",
  "Data Analytics",
  "Design",
  "Creative Arts",
  "Language",
  "Career Development",
  "Human Resource",
  "Architecture",
];

const mobileSliderSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};


/* ---------- Custom Arrows ---------- */
function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg items-center justify-center text-indigo-600 hover:bg-indigo-600 hover:text-white transition"
    >
      ‹
    </button>
  );
}

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg items-center justify-center text-indigo-600 hover:bg-indigo-600 hover:text-white transition"
    >
      ›
    </button>
  );
}

type Course = {

  id: string;
  title: string;
  description: string;
  startDate: string;
  Duration: number;
  language: string;
  domain: string;
  Delivery_Mode: string;
  low: number,
  high: number,
  price: number,
  content: {
    title: string;
    subtitle: string;
  }[];
  Testimonials:
  {
    name: string,
    role: string,
    company: string,
    title: string,
    description: string,
    ranking: string,
    course: string
  }[],
  modules: Record<
    string,
    {
      module: string;
      title: string;
      lectures: string[];
    }[]
  >,

  FAQ: {
    question: string;
    answer: string
  }[];

  meta: {
    title: string,
    description: string
  },

  slug: string,

  alt: string,

  image: string;

}



export default function AllCoursesPage() {

  const [selected, setSelected] = useState<number>(0);
  const [filtered, setFiltered] = useState<Course[]>([]);
  const [courses, setCourses] = useState<Course[]>([])

  const handleFilteredCourse = (category: string, index: number) => {
    setSelected(index);

    if (category === "All courses") {
      setFiltered(courses);
      return;
    }

    const filteredCourses = courses.filter((course, index) => course.domain === category)
    setFiltered(filteredCourses);

  }


  const getCoursesData = async () => {
    const { data, error } = await supabase.from("Courses").select("*");

    console.log("THE DATA OF THE ARCHIVE PAGE IS : ");
    console.log(data);

    if (error) {
      console.log("THERE IS SOME CAUSED IN ARCHIVE PAGE : ");
      console.log(error);
    }
    setFiltered(data ?? []);
    setCourses(data ?? []);
  };


  useEffect(() => {
    getCoursesData();
  }, []);

  return (

    <section className="bg-[#f7fbff] min-h-screen">

      <div className="hidden max-w-7xl mx-auto px-6 py-16 lg:grid grid-cols-1 lg:grid-cols-4 gap-12">

        {/* ================= LEFT SIDEBAR ================= */}
        <aside className="lg:col-span ">
          <div className="sticky top-24 rounded-xl   p-6 bg-blue-50 shadow-xl">
            <h3 className="font-bold text-lg mb-6 ">Categories</h3>

            <ul className="space-y-6 text-sm">
              {categories.map((cat, i) => (
                <li
                  key={i}
                  onClick={() => { handleFilteredCourse(cat, i) }}
                  className={`cursor-pointer px-4  border-l-4 transition flex items-center justify-between
                    ${selected === i
                      ? "border-blue-600 text-gray-800 font-bold bg-blue-100 py-3"
                      : "border-transparent text-gray-700 hover:bg-blue-100 py-3 py-1"
                    }
                  `}
                >
                  {/* LEFT TEXT */}
                  <span>{cat}</span>

                  {/* RIGHT ICON */}
                  <ChevronRight
                    size={22}
                    className={`transition-opacity duration-300 ${selected === i ? "opacity-100 text-gray-800 translate-x-0 " : "opacity-0 -translate-x-1"
                      }`}
                  />
                </li>

              ))}
            </ul>
          </div>
        </aside>

        {/* ================= RIGHT CONTENT ================= */}
        <main className="lg:col-span-3">
          <h2 className="text-2xl text-gray-500 font-bold mb-8">
            Top AI Courses <span className="text-gray-500">(7)</span>
          </h2>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 shadow-xl p-6">
            {filtered.map((course, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-blue-300 shadow-sm hover:shadow-lg transition overflow-hidden"
              >
                {/* Image Placeholder */}
                <div className="h-36 bg-blue-50 flex items-center justify-center relative">
                  <Link href={`/course/${course.slug}`}>
                    <img className="w-full h-full object-cover" src={course.image} alt={course.alt} />
                  </Link>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <div className="flex items-center justify-between shadow-lg gap-2 text-sm mb-2 px-3 py-2 rounded-xs bg-linear-to-br from-white via-amber-50 to-amber-100 ">
                    <div className="flex items-center gap-2 ">
                      <Star size={16} className="text-yellow-500 fill-yellow-500" /> <span className="font-medium">4.5</span>
                    </div>
                    <p className="text-sm text-gray-500">
                      {course.Duration}
                    </p>
                  </div>

                  <Link href={`/course/${course.slug}`}>
                    <h3 className="font-semibold text-lg leading-snug mb-2 hover:text-blue-500">
                      {course.title}
                    </h3>
                  </Link>



                  <p className="text-sm text-gray-600 mb-4">
                    {course.content[0].subtitle.slice(0, 30)}
                  </p>

                  <Link href={`/course/${course.slug}`}>
                    <button className="text-blue-700 text-sm font-medium  flex items-center cursor-pointer hover:text-blue-950">
                      Know more →
                    </button>
                  </Link>

                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* ================= MOBILE VIEW ================= */}
      <div className="block lg:hidden w-full px-4 py-12 space-y-4">
        <h1 className="text-3xl font-extrabold">Our Courses</h1>
        {categories.map((cat, index) => {
          const isOpen = selected === index;

          return (
            <div
              key={index}
              className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden"
            >
              {/* Header */}
              <button
                onClick={() => setSelected(isOpen ? 0 : index)}
                className="w-full flex items-center justify-between px-5 py-4"
              >
                <span className="font-semibold text-gray-900">{cat}</span>
                <span
                  className={`h-8 w-8 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-transform ${isOpen ? "rotate-180" : ""
                    }`}
                >
                  <ChevronDown size={18} />
                </span>
              </button>

              {/* Slider */}
              {isOpen && (
                <div className="px-3 pb-6">
                  <Slider {...mobileSliderSettings}>
                    {courses.map((course, i) => (
                      <div key={i} className="px-2">
                        <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
                          {/* Image */}
                          <div className="h-26 bg-blue-50 flex items-center justify-center relative">
                            <Link href={`/course/${course.slug}`}>
                              <img className="w-full h-full object-contain" src={course.image} alt={course.alt} />
                            </Link>
                          </div>

                          {/* Content */}
                          <div className="p-5">
                            <div className="flex items-center gap-2 text-sm mb-2">
                              ⭐ <span className="font-medium">4.5</span>
                            </div>

                            <h3 className="font-semibold text-lg mb-2">
                              {course.title}
                            </h3>

                            <p className="text-sm text-gray-600 mb-4">
                              {course.content[0].subtitle.slice(0, 30)}
                            </p>

                            <p className="text-sm text-gray-500 mb-5">
                              {course.Duration}
                            </p>

                            <Link href={`/course/${course.slug}`}>
                              <button className="text-blue-600 text-sm font-medium">
                                Know more →
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              )}
            </div>
          );
        })}
      </div>



    </section>
  );
}
