"use client"

import { supabase } from "@/lib/supabse/supabaseConfig";
import { BookA, Clock, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

type Course = {
    id: string;
    title: string;
    description: string;
    startDate: string;
    Duration: number;
    language: string;
    domain: string;
    Delivery_Mode: string;

    content: {
        title: string;
        subtitle: string;
    }[];

    image: string;
}



const categories = ["All Courses", "Digital Marketing", "Development", "IT & Software", "Data Science"];

const Courses = () => {

    const [activeCategory, setActiveCategory] = useState("All Courses");
    const [courses, setCourses] = useState<Course[]>([]);

    console.log("THE COURSES DATA IS : ");
    console.log(courses);

    useEffect(() => {
        const handleFetchCourseData = async () => {
            const { data, error } = await supabase.from("Courses").select("*");


            if (error) {

                console.log("THE ERROR IS : ");
                console.log(error);

            }

            setCourses(data || []);

        };

        handleFetchCourseData();

    }, []);

    const filteredCourses =

        activeCategory === "All Courses"
            ? courses
            : courses.filter((c) => c.domain === activeCategory);

    return (

        <section className="w-full pt-20 py-16 bg-[#fbfdff]">
            <h2 className="text-center font-extrabold text-5xl text-[#14399f]">
                Our Courses
            </h2>
            <div className="w-7xl mx-auto px-6 text-center">

                <p className="text-gray-500 mt-2 mb-8 text-2xl">
                    Explore a wide range of courses where learning is fun, easy, and absolutely free!
                </p>


                <div className="flex flex-wrap justify-center gap-4 mb-10">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-15 py-6 rounded-full border transition-all duration-300 cursor-pointer ${activeCategory === cat
                                ? "bg-[#1C336E] text-white font-bold border-[#1C336E]"
                                : "border-[#1C336E] text-[#1C336E] font-bold bg-white hover:bg-[#cac2f7]"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>


                <div className="flex flex-wrap justify-center gap-8">
                    {filteredCourses.map((course) => (
                        <div
                            key={course.id}
                            className="h-[55vh] w-[20vw] border-2 bg-white border-[#2e19a7] rounded-2xl flex flex-col shadow-xl gap-1 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                        >
                            <Image
                                src={course.image}
                                alt={course.title}
                                width={400}
                                height={400}
                                className="rounded-tr-xl rounded-tl-xl h-[30vh]"
                            />
                            <div className="">
                                <p className="mt-4 text-lg font-bold text-[#213c98]">
                                    {course.title}
                                </p>

                                <div className="w-[50%] mx-auto mt-1 mb-1 bg-indigo-100 p-1 rounded-2xl">
                                    {course.domain}
                                </div>

                                <div className="w-[98%] mx-auto bg-gray-100 flex shadow-2xl justify-center gap-3 p-1">
                                    <div className="flex gap-1 border-r border-[black] p-1.5">
                                       <Clock/> {course.Duration} 
                                    </div>
                                    <div className="flex gap-1 border-r border-[black] p-1.5">
                                      <ShieldCheck />  Certificate
                                    </div>
                                    <div className="flex gap-1 p-1.5">
                                        <BookA />{course.language}
                                    </div>

                                   
                                </div>

                                 <button className="bg-[#dbb004] px-7 py-2 rounded-3xl mt-2 mb-2 cursor-pointer hover:bg-[#052f7c] hover:text-white font-bold">view</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>

    );
}


export default Courses