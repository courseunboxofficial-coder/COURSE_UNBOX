"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabse/supabaseConfig";
import { Briefcase, Users } from "lucide-react";


type Mentor = {
    id: number;
    name: string;
    profession: string;
    Image: string;
    work_Experience: number;
    teaching_Experience: number;
    description: string;
    created_at: number
};

const Mentors = () => {



    const [MentorsData, setMentorsData] = useState<Mentor[]>([]);

    const fetchData = async () => {

        const { data, error } = await supabase.from("Mentors").select("*");

        if (error) {

            console.log("There is some error I have in my code : ");
            console.log(error);

        } else {

            console.log("The Mentors Data is seen in this : ");
            console.log(data);
            setMentorsData(data);

        };

    }

    useEffect(() => {

        console.log("THE DATA IS FETCHED INTIALLY : ");
        fetchData();

    }, [])

    return (

        <div className="bg-[#eef5fc] w-full mx-auto px-4 py-10 sm:py-14 overflow-hidden">
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#061b52] mb-10">
                Our Mentors
            </h2>

            {/* Scroll Wrapper */}
            <div className="relative w-full overflow-hidden">
                <div
                className="
                    mentor-track
                    flex gap-6
                    overflow-x-auto
                    snap-x snap-mandatory
                    scroll-smooth
                    scrollbar-hide
                "
                >
                {[...MentorsData, ...MentorsData].map((mentor, index) => (
                    <div
                    key={index}
                    className="mentor-card snap-center flex-shrink-0"
                    >
                    <div
                        className="
                        w-[280px] sm:w-[320px] lg:w-[360px]
                        rounded-2xl
                        bg-white
                        shadow-lg
                        overflow-hidden
                        flex flex-col
                        transition-transform
                        hover:scale-[1.03]
                        "
                    >
                        {/* Image */}
                        <div className="relative w-full aspect-[4/3] lg:aspect-[3/2]">
                        <Image
                            src={mentor.Image}
                            alt={mentor.name}
                            fill
                            className="object-cover"
                        />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col px-4 py-4">
                        <div>
                            <p className="font-bold text-base sm:text-lg text-gray-900">
                            {mentor.name}
                            </p>
                            <p className="text-sm text-gray-500">
                            {mentor.profession}
                            </p>
                        </div>

                        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent my-4" />

                        {/* Experience */}
                        <div className="space-y-3">
                            <div className="flex justify-between items-center rounded-xl p-3 bg-gradient-to-r from-gray-50 via-white to-indigo-50 border">
                            <div className="flex items-center gap-2">
                                <Briefcase className="w-4 h-4 text-gray-600" />
                                <div>
                                <p className="font-semibold text-sm">
                                    {mentor.work_Experience}+ Years
                                </p>
                                <p className="text-xs text-gray-500">
                                    Work Experience
                                </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <Users className="w-4 h-4 text-gray-600" />
                                <div>
                                <p className="font-semibold text-sm">8+ Years</p>
                                <p className="text-xs text-gray-500">
                                    Teaching
                                </p>
                                </div>
                            </div>
                            </div>

                            <p className="text-sm text-gray-600 leading-relaxed">
                            {mentor.description.slice(0, 90)}...
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>
            </div>

    );

};

export default Mentors;