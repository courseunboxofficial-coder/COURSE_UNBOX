"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full h-full md:h-18 sticky top-0 z-50 border-b bg-white shadow-md">
      <div className=" flex items-center justify-between px-4 sm:px-8 py-4">

        <div className="flex items-center justify-between space-x-2 w-full md:w-[40%]">
          <Image
            src="/images/Home/CourseUnboxLogo.webp"
            width={100}
            height={30}
            alt="logo"
            className="cursor-pointer"
          />

          
          <div className="hidden md:flex items-center space-x-15 font-bold text-gray-700">
            <Link href={"/"} className="cursor-pointer hover:text-blue-600">Home</Link>
            <Link href={"/courses"} className="cursor-pointer hover:text-blue-600">Courses</Link>
            <Link href={"/about"} className="cursor-pointer hover:text-blue-600">About Us</Link>
            <Link href={"/blog"} className="cursor-pointer hover:text-blue-600">Blogs</Link>
          </div>
        </div>

        {/* RIGHT: Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <button className="px-6 py-3 text-sm rounded-3xl border bg-[#1C336E] font-bold text-white hover:bg-blue-600 transition cursor-pointer">
            Login
          </button>
          <button className="px-6 py-3 text-sm bg-blue-600 text-white rounded-3xl font-bold hover:bg-[#1C336E] transition cursor-pointer">
            Register
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t bg-white px-6 py-6 space-y-5 shadow-lg">

          <div className="flex flex-col gap-4 font-bold text-gray-700">
            <Link href={"/"} className="hover:text-blue-600 cursor-pointer">Home</Link>
            <Link href={"/courses"} className="hover:text-blue-600 cursor-pointer">Courses</Link>
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
