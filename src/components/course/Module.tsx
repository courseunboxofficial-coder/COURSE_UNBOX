"use client"

import React from 'react'
import { useState } from "react"


type Lecture = {
    id: number;
    title: string;
    locked: boolean;
};

type Module = {
    id: number;
    title: string;
    lectures: Lecture[];
};

const Module = () => {


    const curriculumTabs = [
        "Data Science Foundations",
        "Python",
        "Statistics",
        "EDA",
        "Machine Learning",
        "SQL",
        "MLOps",
    ];

    const modules: Module[] = [

        {
            id: 1,
            title: "What is Data Science?",
            lectures: [
                { id: 1, title: "Lecture 1 : What is DS?", locked: true },
                { id: 2, title: "Lecture 2 : Why DS Matters", locked: true },
                { id: 3, title: "Lecture 3 : DS Roles (DS, ML Engineer, AI Engineer)", locked: true },
                { id: 4, title: "Lecture 4 : Tools used in DS", locked: true },
                { id: 5, title: "Lecture 5 : Industry examples", locked: true },
            ],
        },
        {
            id: 2,
            title: "Future of Data Science",
            lectures: [{ id: 1, title: "Lecture 1 : What is DS?", locked: true },
            { id: 2, title: "Lecture 2 : Why DS Matters", locked: true },
            { id: 3, title: "Lecture 3 : DS Roles (DS, ML Engineer, AI Engineer)", locked: true },
            { id: 4, title: "Lecture 4 : Tools used in DS", locked: true },
            { id: 5, title: "Lecture 5 : Industry examples", locked: true },],
        },
    ];

    const [activeTab, setActiveTab] = useState(0);
    const [activeModule, setActiveModule] = useState<number>(1);



    return (

        <section className="py-16 bg-white">
            <div className="mx-auto max-w-7xl px-6">


                <div className="flex items-center gap-4 mb-10">
                    <span className="h-10 w-1 bg-[#060650] rounded" />
                    <h2 className="text-3xl font-bold text-black">Your Guide To Upskilling: Our Curriculum</h2>
                </div>



                <div className="flex flex-wrap gap-4 mb-12">
                    {curriculumTabs.map((tab, index) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(index)}
                            className={`rounded-2xl px-8 py-4 text-sm font-medium transition border cursor-pointer 
                ${activeTab === index
                                    ? "bg-[#050546] text-white border-[#070769]"
                                    : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>



                <div className="grid md:grid-cols-3 gap-10">


                    <div className="space-y-4">
                        {modules.map((module) => (
                            <button
                                key={module.id}
                                onClick={() => setActiveModule(module.id)}
                                className={`w-full flex items-center justify-between rounded-xl border p-5 text-left transition 
                  ${activeModule === module.id
                                        ? "border-orange-400 bg-orange-50"
                                        : "border-gray-200 hover:bg-gray-50"
                                    }`}
                            >
                                <div>
                                    <p className="text-xs text-orange-500 font-semibold">Module {module.id}</p>
                                    <h3
                                        className={`text-lg font-semibold mt-1 ${activeModule === module.id ? "text-orange-600" : "text-gray-800"
                                            }`}
                                    >
                                        {module.title}
                                    </h3>
                                </div>
                                <span className="text-xl">›</span>
                            </button>
                        ))}
                    </div>


                    <div className="md:col-span-2 border rounded-xl">
                        {modules
                            .find((m) => m.id === activeModule)
                            ?.lectures.map((lecture) => (
                                <div
                                    key={lecture.id}
                                    className="flex items-center justify-between px-6 py-4 border-b last:border-b-0"
                                >
                                    <p className="text-sm font-medium text-gray-800">{lecture.title}</p>
                                    {lecture.locked && (
                                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
                                            🔒
                                        </span>
                                    )}
                                </div>
                            ))}

                        {modules.find((m) => m.id === activeModule)?.lectures.length === 0 && (
                            <div className="p-10 text-center text-gray-500">
                                Lectures coming soon
                            </div>
                        )}
                    </div>
                </div>
            </div>


        </section>

    )
}

export default Module