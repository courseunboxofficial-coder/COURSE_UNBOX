import { supabase } from '@/lib/supabse/supabaseConfig';
import { BookA, Clock, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

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

const Courses = () => {

    const [active, setActive] = useState(0);
    const [courses, setCourses] = useState<Course[]>([]);
    const [filtered, setFiltered] = useState<Course[]>([]);

    const handleActiveButton = (index: number, category: string) => {
        console.log("THIS IS THE RENDEREING ONE : ");
        setActive(index);

        const filter = courses.filter((course, index) => {
            return course.domain == category
        });

        setFiltered(filter);
    }

    const fetchCourseData = async () => {
        const { data, error } = await supabase.from("Courses").select("*");
        setCourses(data ?? []);
    };


    useEffect(() => {
        fetchCourseData();
    });

    const cateGories = [
        "Digital Marketing",
        "Development",
        "IT & Software",
        "Data Science"
    ]

    return (
        <div>

            <div className='w-full flex gap-10 mt-10 items-center justify-center mb-10'>
                {cateGories.map((tab, index) => {
                    return (
                        <button key={index} className={`px-4 py-3 text-[#030352] hover:text-white cursor-pointer rounded-3xl ${active == index ? "bg-[#050549] text-white" : "bg-[#c2c2f3] "}`} onClick={() => { handleActiveButton(index, tab) }}>
                            {tab}
                        </button>
                    )
                })}
            </div>

            <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
                {filtered.map((course) => (
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

                        {/* CONTENT */}
                        <div className="flex flex-col flex-1 px-5 py-4 text-center gap-3">
                            <Link href={`/course/${course.slug}`}>
                                <p className="text-lg font-bold text-[#213c98] hover:text-blue-500 line-clamp-2">
                                    {course.title}
                                </p>
                            </Link>

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
                                Duplicate
                            </button>

                        </div>
                    </div>
                ))}
            </div>



        </div>
    )
}

export default Courses