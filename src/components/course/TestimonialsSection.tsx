"use client"

import Image from "next/image";
import { Linkedin, TrendingUp, Star } from "lucide-react";
import { supabase } from "@/lib/supabse/supabaseConfig";
import { useEffect, useState } from "react";

type testimonials = {

    name: string;
    role: string;
    company: string;
    title: string;
    description: string;
    ranking: number;
    course: string;

}

export default function Testimonials({ courseSlug }: { courseSlug : string }) {

    const [Testimonials, setTestimonials] = useState<testimonials[]>([]);

    const getTestimonialsData = async () => {

        const { data, error } = await supabase.from("Courses").select("Testimonials").eq("slug", courseSlug).single();

        if (error) {

            console.log("THERE IS SOME OF THE ERROR OCUUR IN THE COURSE TESTIMONIALS :");
            console.log(error);
            
        }

        console.log("THE TESTIMONAILS DATA COMEMON THE FORNTEND SIDE IS : ");
        console.log(data);

        setTestimonials(data?.Testimonials);
    }



    useEffect(() => {

        getTestimonialsData();

    }, []);


    return (

        <section className="bg-[#F7FBFF] py-16">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-10">
                    Reviews from placed learners.
                </h2>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {Testimonials?.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex 
                            flex-col justify-between cursor-pointer transition-all duration-300
                            hover:shadow-blue-900/30
                            hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-400 "
                        >
                            {/* Top Badges */}
                            <div className="flex items-center justify-between mb-4">
                                <span className="flex items-center gap-1 text-sm font-semibold bg-orange-50 text-orange-600 px-3 py-1 rounded-full">
                                    <Star size={14} fill="currentColor" />
                                    {testimonial.ranking}
                                </span>

                                <span className="flex items-center gap-1 text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
                                    <TrendingUp size={14} />
                                    Placed in 2025
                                </span>
                            </div>

                            {/* Content */}

                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {testimonial.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {testimonial.description}
                                </p>
                            </div>

                            <hr className="my-6" />

                            {/* User Info */}

                            <div className="flex items-center gap-3">
                                <Image
                                    src="/images/Student/UnboxProfile.png" 
                                    alt="Avtar Image"
                                    width={44}
                                    height={44}
                                    className="rounded-full object-cover border-3 border-blue-600"
                                />

                                <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                        <p className="font-semibold text-gray-900">
                                            {testimonial.name}
                                        </p>
                                        <Linkedin
                                            size={16}
                                            className="text-blue-600 cursor-pointer"
                                        />
                                    </div>
                                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}