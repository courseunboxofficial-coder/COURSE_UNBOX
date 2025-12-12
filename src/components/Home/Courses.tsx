"use client"

import Image from "next/image";
import { useState } from "react";

type Course = {
    id: number;
    title: string;
    category: string;
    image: string;
};

type Props = {
    courses: Course[];
};

const categories = ["All Courses", "Design", "Development", "IT & Software", "Business"];

const Courses = ({ courses }: Props) => {

    const [activeCategory, setActiveCategory] = useState("All Courses");

    const filteredCourses =

        activeCategory === "All Courses"
            ? courses
            : courses.filter((c) => c.category === activeCategory);

    return (
        <section className="w-full py-16 bg-gray-50">
            <div className="w-7xl mx-auto px-6 text-center">

               
                <h2 className="font-extrabold text-3xl text-[#1C336E]">
                     Our Courses
                </h2>
                <p className="text-gray-500 mt-2 mb-8">
                    Explore a wide range of courses where learning is fun, easy, and absolutely free!
                </p>

               
                <div className="flex flex-wrap justify-center gap-6 mb-10">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-15 py-6 rounded-full border transition-all duration-300 cursor-pointer ${activeCategory === cat
                                    ? "bg-[#1C336E] text-white font-bold border-[#1C336E]"
                                    : "border-[#1C336E] text-[#1C336E] font-bold hover:bg-[#cac2f7]"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredCourses.map((course) => (
                        <div
                            key={course.id}
                            className="min-h-[50vh] w-[19vw] border border-[#2e19a7] rounded-2xl flex flex-col shadow-xl gap-20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                        >
                            <Image
                                src={course.image}
                                alt={course.title}
                                width={400}
                                height={400}
                                className="rounded-tr-2xl rounded-tl-2xl h-[30vh]"
                            />
                            <p className="mt-4 text-lg font-bold text-[#213c98]">
                                {course.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


export default Courses