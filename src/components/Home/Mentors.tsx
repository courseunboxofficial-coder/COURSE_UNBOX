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

        <div className="bg-[#eef5fc] w-full  mx-auto px-4 py-12 overflow-hidden">

            <div className="text-center text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#061b52] mb-12">
                Our Mentors
            </div>

            {/* SCROLL WRAPPER */}
            <div className="relative w-full overflow-hidden">


                <div className="mentor-track">

                    {[...MentorsData, ...MentorsData].map((mentor, index) => (
                        <div
                            key={index}
                            className="mentor-card cursor-pointer "
                        >
                            <div
                                className="
                                    h-full
                                    lg:h-[60vh]
                                    w-[320px] sm:w-[340px] lg:w-[360px] shrink-0
                                    rounded-2xl
                                    overflow-hidden
                                    flex flex-col
                                    bg-white
                                    transition
                                    hover:scale-[1.02]
                                    shadow-lg
                                    
                                
                                    rounded-xl
                                    
                                    "
                            >

                                <div className="relative w-full h-[40vw] lg:h-[60%] ">
                                    <Image
                                        src={mentor.Image}
                                        alt="Mentor Image"
                                        fill
                                        className="object-center"
                                        
                                    />
                                </div>

                            
                               


                                <div className="flex-col px-4  py-1 lg:py-4 flex">
                                    <div >
                                        <p className="font-bold text-base sm:text-lg text-gray-900">{mentor.name}</p>
                                         <p className="font-semibold text-gray-500 sm:text-sm" >{mentor.profession}</p>

                                    </div>


                                    <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent mt-6" />



                                     


                                     <div className=" py-4 space-y-3">

                                        <div className="flex gap-4 justify-around items-center shadow-sm rounded-2xl  p-2 bg-gradient-to-r from-gray-50 via-white to-indigo-50
                                            border border-gray-50
                                             ">
                                            <div className="flex items-center gap-2 text-gray-700">
                                                <Briefcase className="w-5 h-5 text-gray-600" />
                                                <div className="leading-tight">
                                                    <p className="font-semibold text-sm">
                                                    {mentor.work_Experience}+ Years
                                                    </p>
                                                    <p className="text-xs text-gray-500">
                                                    Work Experience
                                                    </p>
                                                </div>
                                             </div>


                                             <div className="flex items-center gap-2 text-gray-700">
                                             <Users className="w-5 h-5 text-gray-600" />
                                                <div className="leading-tight">
                                                    <p className="font-semibold text-sm">
                                                    {/* {mentor.teaching_Experience} */} 8+ Years
                                                    </p>
                                                    <p className="text-xs text-gray-500">
                                                    Teaching Experience
                                                    </p>
                                                </div>
                                             </div>

                                        </div>
                                   
                                        <p className="text-sm w-full text-gray-600 leading-relaxed  ">
                                            {mentor.description.slice(0 ,90)}...
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