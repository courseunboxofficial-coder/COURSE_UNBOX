"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                },
            },
        ],
    };

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

        <div className="bg-[#eef5fc] w-full h-[87vh] mx-auto px-4 py-12 slider-container content-center">
            <div className=" text-center text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#061b52] w-full mb-10 lg:pl-20 ">
                Our Mentors
            </div>
            <Slider {...settings} className="w-[90%] mx-auto">


                {
                    MentorsData.map((mentor) => {
                        return (
                            <div className="cursor-pointer">
                                <div className="w-[90%] h-[60vh] bg-white rounded-2xl flex transition">
                                    <div className="">
                                        <Image src="/images/Home/TopCourse.jpg" height={30} width={410} alt="Mentor Image" className="rounded-tr-2xl rounded-tl-xl" />
                                        <div className="font-bold">
                                            {mentor.name}
                                        </div>
                                    </div>


                                </div>
                            </div>
                        )

                    })
                }

            </Slider>

        </div>

    );

};

export default Mentors;
