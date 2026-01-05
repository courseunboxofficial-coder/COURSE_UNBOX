"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabse/supabaseConfig";

type Mentor = {
    id: number;
    name: string;
    profession: string;
    work_experience: number;
    teaching_experience: number;
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

        <div className="bg-[#eef5fc] w-full mx-auto px-4 py-12 overflow-hidden">
  
            <div className="text-center text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#061b52] mb-12">
                Our Mentors
            </div>

            {/* SCROLL WRAPPER */}
            <div className="relative w-full overflow-hidden">
                
                
                <div className="mentor-track">

                {[...MentorsData, ...MentorsData].map((mentor, index) => (
                    <div
                    key={index}
                    className="mentor-card cursor-pointer"
                    >
                    <div
                        className="
                        w-[80%]
                        sm:w-full
                        h-[55vh]
                        sm:h-[60vh]
                        rounded-2xl
                        overflow-hidden
                        flex flex-col
                        bg-white
                        transition
                        hover:scale-[1.02]
                        "
                    >
                        
                        <div className="relative w-full h-[70%]">
                        <Image
                            src="/images/Home/TopCourse.jpg"
                            alt="Mentor Image"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 410px"
                        />
                        </div>

                        
                        <div className="flex-1 px-4 py-3 flex items-center justify-center">
                        <div className="font-bold text-base sm:text-lg text-gray-900">
                            {mentor.name}
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
