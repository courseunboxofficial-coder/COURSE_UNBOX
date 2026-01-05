"use client"

import { supabase } from '@/lib/supabse/supabaseConfig';
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

const Banner = ({ courseSlug }: { courseSlug : string }) => {
    const [course, setCourse] = useState<Course | null>(null);

    const getData = async () => {

        const { data, error } = await supabase.from("Courses").select("*").eq("slug", courseSlug).single();

        if (error) {

            console.log("The error coming in the Banner Section of the : ");
            console.log(error);

        }


        console.log("THE DATA IS FOR THE PARTICULAR ID IS : ");
        console.log(data);
        setCourse(data);

    }


    useEffect(() => {

        getData();

    }, []);


    return (
        <section className="bg-white  text-black py-6 border-b border-gray-200">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 text-center">

                <div className="py-4 border-r border-gray-300">
                    <h3 className="text-lg font-semibold">Job Assistance</h3>
                    <p className="text-gray-600 text-sm">For Pro Plan</p>
                </div>

                <div className="py-4 border-r border-gray-300">
                    <h3 className="text-lg font-semibold">{course?.startDate}</h3>
                    <p className="text-gray-600 text-sm">Date of Commencement</p>
                </div>

                <div className="py-4 border-r border-gray-300">
                    <h3 className="text-lg font-semibold">{course?.Duration} Months</h3>
                    <p className="text-gray-600 text-sm">Duration</p>
                </div>

                <div className="py-4 border-r border-gray-300">
                    <h3 className="text-lg font-semibold">Live</h3>
                    <p className="text-gray-600 text-sm">{course?.Delivery_Mode}</p>
                </div>

                <div className="py-4">
                    <h3 className="text-lg font-semibold">{course?.language}</h3>
                    <p className="text-gray-600 text-sm">Language</p>
                </div>
            </div>
        </section>
    )
}

export default Banner