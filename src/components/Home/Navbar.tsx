"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CoursesDropdown from "./DropDown/CourseDropDown";
import BlogsDropdown from "./DropDown/BlogsDropDown";
import { supabase } from "@/lib/supabse/supabaseConfig";


type typeBlogs = {

  id: string;
  title: string;
  content: string;
  FAQ: {
    question: string;
    answer: string
  }[];
  image: string,

  meta: {

    title: string,
    description: string
  },

  slug: string,
  alt: string,
  subcontent: string,
  created_at: Date;
  author: string,
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


const Navbar = () => {
  
  const [open, setOpen] = useState(false);
  const [blogs, setBlogs] = useState<typeBlogs[]>([]);
  const [courses, setCourses] = useState<typeCourse[]>([]);
  

  useEffect(()=>{
    const getBlogs = async()=>{
       const {data, error} = await supabase.from('Blog').select("*");
       if(data){
         setBlogs(data)
       }
    }
    const getCourses = async()=>{
      const {data, error} = await supabase.from('Courses').select("*");

      if(data){
        setCourses(courses);
      }
    }

    getCourses();

    getBlogs();
  },[]);

  console.log("Courses Section" , courses);

  
 


  return (
    <nav className="w-full h-full md:h-18 sticky top-0 z-100 border-b bg-white shadow-md">
      <div className=" flex items-center justify-between px-4 sm:px-8 py-4">

        <div className="flex items-center justify-between  space-x-2   w-full   lg:w-[50%] xl:w-[48%] 2xl:w-[44%]">
          <Link href={"/"}>
            
            <Image
            src="/images/Home/CourseUnboxLogo.webp"
            width={100}
            height={30}
            alt="logo"
            className="cursor-pointer"
          />
          </Link>
          
          
          <div className="hidden lg:flex items-center space-x-15 font-bold text-gray-700">
            <div>

              <Link href={"/"} className="cursor-pointer relative
                                          after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 
                                          after:bg-blue-600 after:transition-all after:duration-400
                                          hover:after:w-full hover:text-blue-600">
                                         Home
                </Link>
              
            </div>
  

            <CoursesDropdown/>     
            <Link href={"/about"} className="cursor-pointer relative
                                          after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 
                                          after:bg-blue-600 after:transition-all after:duration-400
                                          hover:after:w-full md:text-md hover:text-blue-600">About Us
            </Link>

            <div>

              {/* <Link href={"/blog"} className="cursor-pointer relative
                                          after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 
                                          after:bg-blue-600 after:transition-all after:duration-400
                                          hover:after:w-full hover:text-blue-600">
                                            Blogs
              </Link> */}

              
             <BlogsDropdown blogs={blogs}/>

            </div>
            
          </div>
        </div>

        {/* RIGHT: Buttons (Desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="px-6 py-3 text-sm rounded-3xl border bg-[#1C336E] font-bold text-white hover:bg-blue-600 transition cursor-pointer">
            Login
          </button>
          <button className="px-6 py-3 text-sm bg-blue-600 text-white rounded-3xl font-bold hover:bg-[#1C336E] transition cursor-pointer">
            Register
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700 cursor-pointer transition"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden border-t bg-white px-6 py-6 space-y-5 shadow-lg">

          <div className="flex flex-col gap-4 font-bold text-gray-700">
            <Link href={"/"} className="hover:text-blue-600 cursor-pointer">Home</Link>
            <Link href={"/course"} className="hover:text-blue-600 cursor-pointer">Courses</Link>
            <Link href={"/about"} className="hover:text-blue-600 cursor-pointer">About Us</Link>
            <Link href={"/blog"} className="hover:text-blue-600 cursor-pointer">Blogs</Link>
          </div>

          <div className="flex flex-col gap-3 pt-4">
            <button className="w-full px-6 py-3 rounded-3xl bg-[#1C336E] text-white font-bold hover:bg-blue-600 transition cursor-pointer">
              Login
            </button>
            <button className="w-full px-6 py-3 rounded-3xl bg-blue-600 text-white font-bold hover:bg-[#1C336E] transition cursor-pointer">
              Register
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
