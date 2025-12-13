"use client";

import Banner from "@/components/course/Banner";
import Hero from "@/components/course/Hero";
import Enquiry from "@/components/course/Enquiry";
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import Module from "@/components/course/Module";
import Mentors from "@/components/course/Mentors";
import StillConfusedSection from "@/components/course/getConnected";

interface CoursePageProps {
    params: {
        slug: string;
    };
}

export default function CoursePage({ params }: CoursePageProps) {

    return (
        <>
            <Navbar />

            <div className="w-full min-h-screen text-white">
                <Hero />
                <Banner />
                <Enquiry />
                <Module />
                <Mentors />
                <StillConfusedSection />
            </div>

            <Footer />

        </>
    );
}
