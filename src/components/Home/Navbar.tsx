"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Router from "next/router";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className="w-full h-full md:h-18 sticky top-0 z-100 border-b bg-white shadow-md">
      <div className=" flex items-center justify-between px-4 sm:px-8 py-4">

        <div className="flex items-center justify-between  space-x-2   w-full  lg:w-[60%] xl:w-[40%]">
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
            <Link href={"/"} className="cursor-pointer relative
                                          after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 
                                          after:bg-blue-600 after:transition-all after:duration-400
                                          hover:after:w-full hover:text-blue-600">Home</Link>
            <Link href={"/course"} className="cursor-pointer relative
                                          after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 
                                          after:bg-blue-600 after:transition-all after:duration-400
                                          hover:after:w-full hover:text-blue-600">Courses</Link>
            <Link href={"/about"} className="cursor-pointer relative
                                          after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 
                                          after:bg-blue-600 after:transition-all after:duration-400
                                          hover:after:w-full md:text-md hover:text-blue-600">About Us</Link>
            <Link href={"/blog"} className="cursor-pointer relative
                                          after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 
                                          after:bg-blue-600 after:transition-all after:duration-400
                                          hover:after:w-full hover:text-blue-600">Blogs</Link>
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
