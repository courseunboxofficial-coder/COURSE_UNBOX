
import Navbar from '@/components/Home/Navbar';
import Footer from '@/components/Home/Footer';
import Content from '@/components/blog/Content';
import LetsConnect from "@/components/blog/LetsConnect";
import type { Metadata } from 'next';

export const metadata : Metadata = {
    title : "Course Unbox Blogs | Digital Marketing, Tech & Career Insights",
    description : "Explore expert-written blogs on digital marketing, technology, online courses, and career growth. Stay updated with the latest learning insights from Course Unbox."
}


const page = () => {

    return (

        <>
            <Navbar />

            <LetsConnect/>

            <Content />
            
            <Footer />
        </>
    );

}

export default page