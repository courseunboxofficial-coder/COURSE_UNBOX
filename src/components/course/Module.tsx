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
    content: {
        title: string;
        subtitle: string;
    }[];
    price: number,
    high: number,
    low: number,
    modules: Record<
        string,
        {
            module: string;
            title: string;
            lectures: string[];
        }[]
    >,
    image: string,
}

type ModuleType = {
    module: string;
    title: string;
    lectures: string[];
};

export default function Module({ courseId }: { courseId: string }) {

    const [course, setCourse] = useState<Course | null>(null);
    const [activeTab, setActiveTab] = useState<string | null>(null);
    const [activeModule, setActiveModule] = useState(0);
    console.log("THE COURSE COMING IS : ");
    console.log(course);


    const getData = async () => {
        const { data, error } = await supabase
            .from("Courses")
            .select("*")
            .eq("id", courseId)
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
        setActiveTab(Object.keys(data.modules)[0]);


    };

    useEffect(() => {
        getData();
    }, []);



    /* Derived Modules */
    const modules: ModuleType[] =
        course && activeTab ? course.modules[activeTab] : [];


    return (
        <section className="p-10 bg-[#f6fbff]">
            <div className="w-full p-6">

                {/* Heading */}

                <h2 className="text-3xl font-bold mb-6 p-2 text-black border-l-8">
                    Your Guide To Upskilling: Our Curriculum
                </h2>

                {/* Tabs */}

                <div className="flex gap-3 mb-8 overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth">
                    {course &&
                        Object.keys(course.modules).map((tab) => (

                            <button
                                key={tab}
                                onClick={() => {
                                    setActiveTab(tab);
                                    setActiveModule(0);
                                }}
                                className={`px-20 py-6 text-black shrink-0 rounded-4xl text-sm font-medium transition cursor-pointer 
        ${activeTab === tab
                                        ? "bg-[#030363] text-white"
                                        : "bg-white hover:bg-gray-200"
                                    }`}
                            >
                                {tab}

                            </button>


                        ))}


                </div>

                {/* Content */}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 rounded-lg p-4 bg-white shadow-xl">

                    {/* Left Modules */}

                    <div className="md:col-span-1 border-r pr-4">
                        {modules.map((mod, index) => (
                            <button
                                key={mod.title}
                                onClick={() => setActiveModule(index)}
                                className={`w-full text-left p-4 mb-2 rounded-md flex justify-between items-center transition cursor-pointer
                ${activeModule === index
                                        ? "bg-[#040455] border-l-4 border-[#02025a]"
                                        : "hover:bg-[#020286] bg-blue-300"
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
                                className="flex bg-white items-center justify-between p-4 border-2 border-black rounded-md mb-3"
                            >
                                <p className="text-sm font-bold text-black">{lecture}</p>
                                <Lock className="w-4 h-4 text-[#a1a112]" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
