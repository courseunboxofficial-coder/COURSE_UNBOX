"use client";

import React, { useEffect, useState } from "react";
import { Pencil, Trash2, Layers, Sparkles } from "lucide-react";
import { supabase } from "@/lib/supabse/supabaseConfig";
import { toast, ToastContainer } from "react-toastify";

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



export default function Pages({ onEdit }: { onEdit: any }) {

    const [courses, setCourses] = useState<Course[]>([]);

    const fetchTableData = async () => {

        const { data, error } = await supabase.from("Pages").select("*").order("created_at", {ascending : false});

        if (error) {

            console.log("THERE IS SOME ERROR IN IT : ");
            console.log(error);

        } else {

            console.log("THIS IS THE DATA OF THE TABLE : ");
            console.log(data[0]);
            setCourses(data);

        }
    };


    useEffect(() => {

        fetchTableData();


    }, []);


    const handleDelete = async (id: string) => {

        const { data, error } = await supabase.from("Pages").delete().eq("id", id);

        if (error) {

            console.log("This is the error : ");
            console.log(error);
            return
        }

        const notify = () => {

            toast("Data is Deleted");
            
        };

        notify();

        console.log(data);

        setCourses((prev) => prev.filter((course) => course.id !== id));
    }



    return (

        <section className="w-full max-w-7xl mx-auto px-4 py-14">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
                <div className="flex items-center gap-4">
                    <div>
                        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                            Manage Pages
                        </h2>
                        <p className="text-gray-500 mt-1">
                            Premium, industry-ready courses curated for growth
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                    <Layers size={18} />

                    <span>

                        Total Pages : <span className="text-gray-900">{courses.length}</span>

                    </span>
                </div>
            </div>


            <div className="flex flex-wrap gap-10 md:gap-4">
                {courses.map((course) => (
                    <div
                        key={course.id}
                        className="group relative overflow-hidden rounded-2xl bg-white shadow-[0_30px_90px_rgba(0,0,0,0.12)] border border-gray-100 hover:shadow-[0_40px_120px_rgba(0,0,0,0.18)] transition-all duration-300 w-[22vw]"
                    >

                        <div className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-indigo-500/20 blur-3xl group-hover:opacity-100 opacity-70 transition" />

                        <div className="h-1 w-full bg-gradient-to-r from-indigo-500 to-violet-500" />


                        <div className="relative p-7 flex flex-col h-full">

                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-gray-900 leading-snug">
                                    {course.title}
                                </h3>
                                <p className="text-xs text-gray-400 mt-1">
                                    Career-focused professional course
                                </p>
                            </div>


                            <div className="mb-8">
                                <span className="inline-flex items-center rounded-full bg-indigo-50 px-5 py-2 text-xs font-semibold text-indigo-600 shadow-sm">
                                    {course.domain}
                                </span>
                            </div>


                            <div className="flex-grow" />


                            <div className="flex items-center gap-4">
                                <button onClick={(e) => { onEdit(course) }} className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-200 px-4 py-3 text-sm font-semibold text-emerald-700 shadow-md hover:shadow-xl hover:scale-[1.04] transition-all cursor-pointer">

                                    <Pencil size={16} />

                                    Edit

                                </button>

                                <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-rose-100 to-rose-200 px-4 py-3 text-sm font-semibold text-rose-700 shadow-md hover:shadow-xl hover:scale-[1.04] transition-all cursor-pointer" onClick={(e) => { handleDelete(course.id) }}>

                                    <Trash2 size={16} />

                                    Delete

                                </button>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

            <ToastContainer/>
            
        </section>

    );
}
