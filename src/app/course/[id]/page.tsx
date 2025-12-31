import Banner from "@/components/course/Banner";
import Hero from "@/components/course/Hero";
import Enquiry from "@/components/course/Enquiry";
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import Module from "@/components/course/Module";
import StillConfusedSection from "@/components/course/getConnected";
import CertificationBanner from "@/components/Home/CertificationBanner";
import TopCompanies from "@/components/Home/TopCompanies";
import LetsConnect from "@/components/Home/LetsConnect";
import Testimonials from "@/components/course/TestimonialsSection";

import CourseContent from "@/components/course/CourseContent";
import Faq from "@/components/course/CourseFAQ";
import { supabase } from "@/lib/supabse/supabaseConfig";
import Mentors from "@/components/Home/Mentors";

// export async function generateMetadata({params}:{params : Promise<{id:string}>}) {
//     const {id} = await params;

//     const {data, error} = await supabase.from('Courses').select("*").eq("id", id);

//     return {
//         title : data,
//         description : data
//     }
// }

export default async function CoursePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params

    console.log("THE PARAMETERS IS : ", id);

    return (
        <>
            <Navbar />
            <div className="w-full min-h-screen text-white">
                <Hero courseId={id}/>
                <Banner courseId={id}/>
                <Enquiry courseId={id}/> 
                <Module courseId={id}/>
                <CourseContent courseId={id}/>
                <Mentors/>
                <Testimonials courseId={id}/>
                <CertificationBanner/>
                <TopCompanies />
                <Faq courseId={id}/>
                <LetsConnect/>
            </div>
            <Footer />

        </>
    );
}
