"use client";

import {
  TrendingUp,
  ChevronDown,
  BookOpen,
  Code2,
  Database,
  Megaphone,
  Gift,
  ArrowRight,
  Clock,
  Monitor,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
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

const CATEGORIES = [
  {
    name: "Digital Marketing",
    icon: Megaphone,
    color: "text-orange-600",
    bg: "bg-orange-50",
    iconBg: "bg-orange-100",
    cardBorder: "border-l-orange-400",
    badge: "bg-orange-100 text-orange-600",
    glow: "hover:shadow-orange-100/60",
  },
  {
    name: "Development",
    icon: Code2,
    color: "text-blue-600",
    bg: "bg-blue-50",
    iconBg: "bg-blue-100",
    cardBorder: "border-l-blue-400",
    badge: "bg-blue-100 text-blue-600",
    glow: "hover:shadow-blue-100/60",
  },
  {
    name: "IT & Software",
    icon: BookOpen,
    color: "text-violet-600",
    bg: "bg-violet-50",
    iconBg: "bg-violet-100",
    cardBorder: "border-l-violet-400",
    badge: "bg-violet-100 text-violet-600",
    glow: "hover:shadow-violet-100/60",
  },
  {
    name: "Data Science",
    icon: Database,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    iconBg: "bg-emerald-100",
    cardBorder: "border-l-emerald-400",
    badge: "bg-emerald-100 text-emerald-600",
    glow: "hover:shadow-emerald-100/60",
  },
  {
    name: "Free Classes",
    icon: Gift,
    color: "text-pink-600",
    bg: "bg-pink-50",
    iconBg: "bg-pink-100",
    cardBorder: "border-l-pink-400",
    badge: "bg-pink-100 text-pink-600",
    glow: "hover:shadow-pink-100/60",
  },
];

const CATEGORY_LIST = CATEGORIES.map((c) => c.name);

export default function CoursesDropdown({ courses }: { courses: typeCourse[] }) {
  const [open, setOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Digital Marketing");
  const [categoryCourses, setCategoryCourses] = useState<CategoryMap>({});
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const map: CategoryMap = {};
    CATEGORY_LIST.forEach((cat) => {
      map[cat] = courses.filter((course) => course.domain === cat);
    });
    setCategoryCourses(map);

    // Set default to first category that has courses
    const firstWithCourses = CATEGORY_LIST.find((cat) =>
      courses.some((c) => c.domain === cat)
    );
    if (firstWithCourses) setActiveCategory(firstWithCourses);
  }, [courses]);

  const handleMouseEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => setOpen(false), 150);
  };

  const activeCat = CATEGORIES.find((c) => c.name === activeCategory)!;
  const activeCourses = categoryCourses[activeCategory] || [];

  return (
    <div
      className="relative h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* ── Trigger ── */}
      <button className="flex items-center gap-1.5 font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-200 cursor-pointer group">
        <Link href="/course" className="flex items-center gap-1.5">
          Courses
          <span className="bg-linear-to-r from-orange-500 to-orange-400 text-white text-[9px] font-black tracking-widest px-2 py-0.5 rounded-full leading-none uppercase shadow-sm shadow-orange-200">
            OFFER
          </span>
        </Link>
        <ChevronDown
          size={14}
          strokeWidth={2.5}
          className={`transition-transform duration-300 text-gray-500 group-hover:text-blue-600 ${open ? "rotate-180" : "rotate-0"}`}
        />
      </button>

      {/* Hover bridge */}
      <div className="absolute left-0 top-full h-5 w-60" />

      {/* ── Mega-menu panel ── */}
      <div
        className={`absolute left-0 top-full mt-5 w-[880px] bg-white rounded-2xl z-50
          shadow-[0_20px_60px_-10px_rgba(0,0,0,0.15),0_4px_20px_-4px_rgba(0,0,0,0.08)]
          border border-gray-100 overflow-hidden
          transition-all duration-200 origin-top-left
          ${open ? "opacity-100 visible scale-100 translate-y-0" : "opacity-0 invisible scale-[0.97] -translate-y-3"}`}
      >
        {/* Top accent strip in active category color */}
        <div className={`h-0.5 w-full bg-linear-to-r ${activeCat.bg} transition-colors duration-300`}
          style={{ background: `linear-gradient(to right, var(--tw-gradient-stops))` }}
        />

        <div className="grid grid-cols-[260px_1fr]">

          {/* ── LEFT: CATEGORY SIDEBAR ── */}
          <div className="bg-gray-50/60 border-r border-gray-100 p-5 flex flex-col">
            <p className="text-[9px] font-black uppercase tracking-[0.18em] text-gray-400 mb-4 px-1">
              Browse Categories
            </p>

            <ul className="space-y-0.5 flex-1">
              {CATEGORIES.map(({ name, icon: Icon, color, bg, iconBg, badge }) => {
                const isActive = activeCategory === name;
                const count = (categoryCourses[name] || []).length;
                return (
                  <li key={name}>
                    <button
                      onMouseEnter={() => setActiveCategory(name)}
                      className={`w-full flex items-center gap-3 pl-3 pr-2.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer border-l-[3px]
                        ${isActive
                          ? `${bg} ${color} border-current shadow-sm`
                          : "text-gray-500 hover:bg-white hover:text-gray-800 border-transparent hover:border-gray-200 hover:shadow-sm"
                        }`}
                    >
                      <span className={`flex-shrink-0 p-1.5 rounded-lg transition-all duration-200 ${isActive ? iconBg : "bg-gray-100"}`}>
                        <Icon size={13} className={isActive ? color : "text-gray-400"} strokeWidth={2} />
                      </span>
                      <span className="flex-1 text-left font-semibold whitespace-nowrap">{name}</span>
                      {count > 0 && (
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full transition-all duration-200 ${isActive ? badge : "bg-gray-200 text-gray-500"}`}>
                          {count}
                        </span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="mt-5 pt-4 border-t border-gray-200 px-1">
              <Link
                href="/course"
                className="group/link flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                View all courses
                <ArrowRight size={13} className="transition-transform duration-200 group-hover/link:translate-x-0.5" />
              </Link>
            </div>
          </div>

          {/* ── RIGHT: COURSE CARDS ── */}
          <div className="p-6 flex flex-col bg-white">
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <span className={`flex-shrink-0 p-2 rounded-xl ${activeCat.iconBg} transition-colors duration-300`}>
                  <activeCat.icon size={15} className={`${activeCat.color} transition-colors duration-300`} strokeWidth={2} />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 leading-none">Category</p>
                  <h4 className={`font-bold text-base leading-tight ${activeCat.color} transition-colors duration-300`}>
                    {activeCategory}
                  </h4>
                </div>
              </div>

              <span className="flex items-center gap-1.5 bg-orange-50 text-orange-500 border border-orange-100 text-xs px-3 py-1.5 rounded-full font-bold">
                <TrendingUp size={11} strokeWidth={2.5} />
                Trending
              </span>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-2 gap-3 flex-1 max-h-[280px] overflow-y-auto pr-0.5">
              {activeCourses.map((course) => (
                <Link
                  key={course.id}
                  href={`/course/${course.slug}`}
                  className={`group flex flex-col gap-2.5 rounded-xl p-4 border border-gray-100 border-l-[3px] ${activeCat.cardBorder}
                    hover:shadow-lg ${activeCat.glow} hover:border-gray-200 hover:-translate-y-px
                    transition-all duration-200 bg-white`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <h5 className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 leading-snug line-clamp-2 transition-colors duration-150">
                      {course.title}
                    </h5>
                    <TrendingUp size={12} className={`flex-shrink-0 ${activeCat.color} mt-0.5 opacity-70`} strokeWidth={2.5} />
                  </div>

                  <div className="flex items-center gap-3 text-[11px] text-gray-400 font-medium">
                    <span className="flex items-center gap-1">
                      <Clock size={10} strokeWidth={2} />
                      {course.Duration}w
                    </span>
                    <span className="flex items-center gap-1">
                      <Monitor size={10} strokeWidth={2} />
                      {course.Delivery_Mode}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 pt-1 mt-auto border-t border-dashed border-gray-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                    <p className="text-[11px] font-bold text-emerald-600">
                      ₹{course.low}L – ₹{course.high}L avg. salary
                    </p>
                  </div>
                </Link>
              ))}

              {activeCourses.length === 0 && (
                <div className="col-span-2 flex flex-col items-center justify-center py-14 text-gray-300">
                  <BookOpen size={38} strokeWidth={1.5} className="mb-3" />
                  <p className="text-sm font-medium text-gray-400">No courses in this category yet.</p>
                  <p className="text-xs text-gray-300 mt-1">Check back soon!</p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
              <p className="text-xs text-gray-400 font-medium">
                <span className={`font-bold ${activeCat.color}`}>{activeCourses.length}</span>
                {" "}course{activeCourses.length !== 1 ? "s" : ""} available
              </p>
              <Link
                href="/course"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white text-xs font-bold
                  bg-linear-to-r from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600
                  shadow-sm hover:shadow-md hover:shadow-blue-200/50
                  transition-all duration-200 hover:-translate-y-px active:translate-y-0`}
              >
                Explore all {activeCategory}
                <ArrowRight size={12} strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
