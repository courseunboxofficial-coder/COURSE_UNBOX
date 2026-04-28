"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import Link from "next/link";
import CoursesDropdown from "./DropDown/CourseDropDown";
import BlogsDropdown from "./DropDown/BlogsDropDown";
import { supabase } from "@/lib/supabse/supabaseConfig";
import PopUpForm from "../AllCourses/PopUpForm";


type typeBlogs = {
  id: string;
  title: string;
  content: string;
  FAQ: { question: string; answer: string }[];
  image: string;
  meta: { title: string; description: string };
  slug: string;
  alt: string;
  subcontent: string;
  created_at: Date;
  author: string;
  domain: string;
};

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
  content: { title: string; subtitle: string }[];
  Testimonials: {
    name: string;
    role: string;
    company: string;
    title: string;
    description: string;
    ranking: string;
    course: string;
  }[];
  modules: Record<string, { module: string; title: string; lectures: string[] }[]>;
  FAQ: { question: string; answer: string }[];
  meta: { title: string; description: string };
  slug: string;
  alt: string;
  image: string;
};


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [blogs, setBlogs] = useState<typeBlogs[]>([]);
  const [courses, setCourses] = useState<typeCourse[]>([]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const [blogsRes, coursesRes] = await Promise.all([
          supabase.from("Blog").select("*").eq("status", "published").order("created_at", { ascending: false }),
          supabase.from("Courses").select("*"),
        ]);

        if (blogsRes.error) throw blogsRes.error;
        if (coursesRes.error) throw coursesRes.error;

        if (isMounted) {
          setBlogs(blogsRes.data || []);
          setCourses(coursesRes.data || []);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
    return () => { isMounted = false; };
  }, []);


  return (
    <>
      <PopUpForm isOpen={isOpen} onCancel={() => setIsOpen(false)} onConfirm={() => setIsOpen(false)} />

      <nav
        className={`w-full h-full md:h-18 sticky top-0 z-100 border-b transition-all duration-300
          ${scrolled
            ? "bg-white/95 backdrop-blur-lg border-gray-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
            : "bg-white border-gray-100 shadow-[0_1px_6px_rgba(0,0,0,0.05)]"
          }`}
      >
        {/* ── Main row ── */}
        <div className="flex items-center justify-between px-4 sm:px-8 py-4">

          {/* LEFT: Logo + Nav links (original 50% split) */}
          <div className="flex items-center justify-between space-x-2 w-full lg:w-[50%] xl:w-[50%] 2xl:w-[44%]">
            <Link href={"/"}>
              <Image
                src="/images/Home/CourseUnboxLogo.webp"
                width={100}
                height={30}
                alt="Course Unbox"
                className="cursor-pointer"
                priority
              />
            </Link>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center lg:space-x-10 xl:space-x-14 font-bold text-gray-700">

              <Link
                href={"/"}
                className="cursor-pointer relative text-[15px]
                  after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0
                  after:bg-blue-600 after:rounded-full after:transition-all after:duration-300
                  hover:after:w-full hover:text-blue-600 transition-colors duration-200"
              >
                Home
              </Link>

              <CoursesDropdown courses={courses} />

              <Link
                href={"/about"}
                className="cursor-pointer relative text-[15px]
                  after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0
                  after:bg-blue-600 after:rounded-full after:transition-all after:duration-300
                  hover:after:w-full hover:text-blue-600 transition-colors duration-200"
              >
                About Us
              </Link>

              <BlogsDropdown blogs={blogs} />

            </div>
          </div>

          {/* RIGHT: CTA button (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => setIsOpen(true)}
              className="group relative inline-flex items-center justify-center gap-2
                px-5 py-2.5 rounded-full text-sm font-bold text-white
                bg-linear-to-r from-blue-700 to-blue-500
                hover:from-blue-800 hover:to-blue-600
                shadow-md shadow-blue-200/60 hover:shadow-lg hover:shadow-blue-300/50
                hover:-translate-y-px active:translate-y-0
                transition-all duration-300
                focus:outline-none focus:ring-4 focus:ring-blue-200 cursor-pointer"
            >
              <GraduationCap size={15} strokeWidth={2.5} className="transition-transform duration-300 group-hover:scale-110" />
              Apply for Scholarship
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex items-center justify-center w-9 h-9 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 cursor-pointer transition-colors duration-200"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2.5} />}
          </button>
        </div>

        {/* ── Mobile Menu ── */}
        <div
          className={`lg:hidden border-t border-gray-100 bg-white overflow-hidden transition-all duration-300 ease-in-out
            ${open ? "max-h-100 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="px-6 py-4 space-y-0.5">
            {[
              { href: "/",       label: "Home" },
              { href: "/course", label: "Courses" },
              { href: "/about",  label: "About Us" },
              { href: "/blog",   label: "Blogs" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-center px-4 py-3 rounded-xl text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-150"
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="px-6 pb-6 pt-2 border-t border-gray-100 flex flex-col gap-3">
            <button className="w-full px-5 py-3 rounded-2xl bg-gray-900 text-white text-sm font-bold hover:bg-gray-800 transition-colors duration-200 cursor-pointer">
              Start Learning
            </button>
            <button
              onClick={() => { setIsOpen(true); setOpen(false); }}
              className="w-full px-5 py-3 rounded-2xl font-bold text-sm text-white
                bg-linear-to-r from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600
                shadow-md shadow-blue-200/50 transition-all duration-200 cursor-pointer"
            >
              Apply for Scholarship
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
