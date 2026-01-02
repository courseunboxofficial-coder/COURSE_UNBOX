"use client"
import { supabase } from "@/lib/supabse/supabaseConfig";
import { BookA, Clock, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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

        <section className="w-screen pt-20 py-16 bg-[#fbfdff]">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px) [background-size:24px_24px]" />

            <h2 className="text-center font-extrabold text-3xl md:text-4xl lg:text-5xl text-[#14399f]">
                Our Courses
            </h2>
            <div className="w-full xl:w-7xl mx-auto px-6 text-center">

                <p className="text-gray-500 mt-2 mb-8 text-lg md:xl lg:text-2xl">
                    Explore a wide range of courses where learning is fun, easy, and absolutely free!
                </p>


                <div className=" w-full flex    flex-wrap justify-center gap-4 mb-10">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-3 sm:px-8 sm:py-3 md:px-12 md:py-4 lg:px-15 lg:py-6 rounded-full border transition-all duration-300 cursor-pointer ${activeCategory === cat
                                ? "bg-[#1C336E] text-white font-bold border-[#1C336E]"
                                : "border-[#1C336E] text-[#1C336E] font-bold bg-white hover:bg-[#cac2f7]"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
                <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
                    {filteredCourses.map((course) => (
                        <div
                            key={course.id}
                            className="
                            w-full
                            sm:w-[90%]
                            md:w-[45%]
                            lg:w-[32%]
                            xl:w-[28%]
                            bg-white
                            border-2 border-[#2e19a7]
                            rounded-2xl
                            flex flex-col
                            shadow-2xl
                            hover:shadow-2xl
                            hover:-translate-y-1
                            transition-all
                            duration-300
                            cursor-pointer
                            overflow-hidden
                        "
                        >
                            {/* IMAGE */}
                            <div className="relative w-full h-[240px] lg:h-[260px]">
                                <Image
                                    src={course.image}
                                    alt={course.title}
                                    fill
                                    className="object-cover rounded-tr-xl rounded-tl-xl"
                                    sizes="(max-width: 768px) 100vw, 400px"
                                />
                            </div>

                            {/* CONTENT */}
                            <div className="flex flex-col flex-1 px-5 py-4 text-center gap-3">
                                <p className="text-lg font-bold text-[#213c98] line-clamp-2">
                                    {course.title}
                                </p>

                                <div className="w-fit mx-auto bg-indigo-100 px-4 py-1 rounded-2xl text-sm font-medium">
                                    {course.domain}
                                </div>

                                <div className="w-full bg-gray-100 flex justify-center gap-3 p-2 rounded-lg text-sm shadow-inner">
                                    <div className="flex items-center gap-1 border-r pr-3">
                                        <Clock size={16} /> {course.Duration}
                                    </div>
                                    <div className="flex items-center gap-1 border-r pr-3">
                                        <ShieldCheck size={16} /> Certificate
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <BookA size={16} /> {course.language}
                                    </div>
                                </div>

                                <Link href={`/course/${course.id}`} className="mt-auto">
                                    <button className="
                                w-full
                                bg-[#dbb004]
                                py-2.5
                                rounded-3xl
                                font-bold
                                hover:bg-[#052f7c]
                                hover:text-white
                                transition
                                cursor-pointer
                            ">
                                        View
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>


            </div>

        </section>

    );
}


export default Courses