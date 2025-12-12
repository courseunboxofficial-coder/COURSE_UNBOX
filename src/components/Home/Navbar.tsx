import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <nav className="w-full h-18 border-b bg-white flex items-center justify-between px-8 shadow-md shadow-black sticky cursor-pointer">


            <div className="flex items-center justify-between space-x-2 w-[40%] ">

                <Image src="/images/Home/CourseUnboxLogo.webp" width={100} height={30} alt="logo" />


                <div className="hidden md:flex items-center space-x-15 font-medium text-gray-700">
                    <span className="cursor-pointer hover:text-blue-600 font-bold">Jobs</span>
                    <span className="cursor-pointer hover:text-blue-600 font-bold">Internships</span>
                    <span className="cursor-pointer hover:text-blue-600 font-bold">Courses</span>
                    <span className="cursor-pointer hover:text-blue-600 font-bold">Blogs</span>
                </div>
            </div>



            <div className="flex items-center space-x-4">
                <button className="px-6 py-3 text-sm rounded-3xl border bg-[#1C336E] font-bold cursor-pointer">Login</button>
                <button className="px-6 py-3 text-sm bg-blue-600 text-white rounded-3xl font-bold cursor-pointer">
                    Register
                </button>
            </div>
        </nav>
    )
}

export default Navbar