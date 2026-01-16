"use client";

import { useEffect, useState } from "react";
import { Lock, ChevronRight } from "lucide-react";
import { supabase } from "@/lib/supabse/supabaseConfig";

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
    modules: {
        [categoryName: string]: {
            module: string;
            title: string;
            lectures: string[];
        }[];
    }[];

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

type ModuleType = {
    module: string;
    title: string;
    lectures: string[];
};

export default function Module({ courseSlug }: { courseSlug: string }) {

    const [course, setCourse] = useState<Course | null>(null);
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [activeModule, setActiveModule] = useState(0);
    console.log("THE COURSE COMING IS : ");
    console.log(course);


    const getData = async () => {
        const { data, error } = await supabase
            .from("Pages")
            .select("*")
            .eq("slug", courseSlug)
            .single();

        if (error) {

            console.log("THE GOT IN THE MODULE SECTION IS : ");
            console.log(error);

        }

        console.log("THE DATA OF THE MODULE SECTION IS : ")
        console.log(data);

        console.log("THE Modules is : ");

        console.log(data.modules);


        setCourse(data);
        setActiveTabIndex(0);


    };

    useEffect(() => {
        getData();
    }, []);



    const activeCategoryObj =
        course?.modules[activeTabIndex];

    const activeCategoryName =
        activeCategoryObj
            ? Object.keys(activeCategoryObj)[0]
            : null;

    const modules: ModuleType[] =
        activeCategoryName && activeCategoryObj
            ? activeCategoryObj[activeCategoryName]
            : [];



    return (
        <section className="p-2 sm:p-6 md:p-10 bg-[#f6fbff]">
            <div className="w-full p-6">

                {/* Heading */}

                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 p-2 text-yellow-500 border-l-8">
                    Your Guide To Upskilling: Our Curriculum
                </h2>

                {/* Tabs */}

                <div className="flex gap-3 mb-8 overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth">
                    {course?.modules.map((categoryObj, index) => {
                        const categoryName = Object.keys(categoryObj)[0];

                        return (
                            <button
                                key={categoryName}
                                onClick={() => {
                                    setActiveTabIndex(index);
                                    setActiveModule(0);
                                }}
                                className={`px-10 py-3 sm:px-16 sm:py-5 md:px-20 md:py-6 text-black shrink-0 rounded-4xl text-sm font-medium transition cursor-pointer 
                                ${activeTabIndex === index
                                        ? "bg-[#030363] text-white"
                                        : "md:bg-white bg-gray-100  hover:bg-gray-200"
                                    }`}
                            >
                                {categoryName}
                            </button>
                        );
                    })}


                </div>

                {/* Content */}

                <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 rounded-lg p-4 bg-white shadow-xl">

                    {/* Left Modules */}

                    <div className="md:col-span-1 border-r pr-4">
                        {modules.map((mod, index) => (
                            <button
                                key={mod.title}
                                onClick={() => setActiveModule(index)}
                                className={`w-full text-left p-4 mb-2 rounded-md flex justify-between items-center transition cursor-pointer
                ${activeModule === index
                                        ? "bg-[#040455] border-l-4 border-[#02025a]"
                                        : "hover:bg-[#020246] bg-[#020286]"
                                    }`}
                            >
                                <div>
                                    <p className="text-xs text-white">{mod.module}</p>
                                    <p className="font-medium text-white">{mod.title}</p>
                                </div>
                                <ChevronRight className="text-gray-400" />
                            </button>
                        ))}
                    </div>

                    {/* Right Lectures */}
                    <div className="md:col-span-2">
                        {modules[activeModule]?.lectures.map((lecture: string) => (
                            <div
                                key={lecture}
                                className="flex bg-white items-center justify-between p-4 border-2 border-gray-200 rounded-md mb-3"
                            >
                                <p className="text-sm font-bold text-black">{lecture}</p>
                                <Lock className="w-4 h-4 text-[#a1a112]" />
                            </div>
                        ))}
                    </div>
                </div>


                {/* ================= MOBILE VIEW ================= */}

                <div className="md:hidden  py-6 bg-slate-50">

                    <div className="space-y-3">
                        {modules.map((mod, index) => {
                            const isOpen = activeModule === index;

                            return (
                                <div
                                    key={mod.title}
                                    className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-shadow duration-300"
                                >
                                    {/* MODULE HEADER */}
                                    <button
                                        onClick={() => setActiveModule(isOpen ? -1 : index)}
                                        className={`
                                w-full flex items-center justify-between p-4
                                transition-colors duration-300
                                ${isOpen ? "bg-indigo-100" : "hover:bg-slate-50"}
                                `}
                                    >
                                        <div className="text-left">
                                            <p className="text-[11px] uppercase tracking-wide text-slate-500">
                                                {mod.module}
                                            </p>
                                            <p className="text-sm font-semibold text-slate-900">
                                                {mod.title}
                                            </p>
                                        </div>

                                        <ChevronRight
                                            className={`
                                    w-5 h-5 text-slate-400
                                    transition-transform duration-300
                                    ${isOpen ? "rotate-90" : ""}
                                `}
                                        />
                                    </button>

                                    {/* LECTURES */}
                                    {isOpen && (
                                        <div className="px-4 pb-4 space-y-2 animate-fadeIn mt-2">
                                            {mod.lectures.map((lecture: string) => (
                                                <div
                                                    key={lecture}
                                                    className="
                                        flex items-center justify-around
                                        p-3 rounded-lg
                                        bg-slate-50 border border-slate-200
                                    "
                                                >
                                                    <p className="text-sm text-slate-800 font-medium">
                                                        {lecture}
                                                    </p>
                                                    <div className="bg-gray-200 p-1 rounded-full" >
                                                        <Lock className="size-4 text-slate-500 " />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>


            </div>

        </section>
    );
}