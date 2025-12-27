
import Banner from "@/components/course/Banner";
import Hero from "@/components/course/Hero";
import Enquiry from "@/components/course/Enquiry";
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import Module from "@/components/course/Module";
import Mentors from "@/components/course/Mentors";
import StillConfusedSection from "@/components/course/getConnected";
import CertificationBanner from "@/components/Home/Deepak";
import TopCompanies from "@/components/Home/TopCompanies";
import LetsConnect from "@/components/Home/LetsConnect";
import Testimonials from "@/components/course/TestimonialsSection";

import CourseContent from "@/components/course/CourseContent";
import Faq from "@/components/course/CourseFAQ";


export default async function CoursePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params

    console.log("THE PARAMETERS IS : ", id);

    return (
        <>
            <Navbar />
            <div className="w-full min-h-screen text-white">
                <Hero courseId={id}/>
                <Banner courseId={id}/>
                <Enquiry /> 
                <Module />
                <Mentors />
                <Testimonials courseId={id}/>
                <CertificationBanner/>
                <TopCompanies />
                <Faq/>
                <LetsConnect/>
            </div>
            <Footer />

        </>
    );
}
