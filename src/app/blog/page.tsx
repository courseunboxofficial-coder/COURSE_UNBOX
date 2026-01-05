
import Navbar from '@/components/Home/Navbar';
import Footer from '@/components/Home/Footer';
import Content from '@/components/blog/Content';
import LetConnect from "@/components/blog/LetConnect";
import LetsConnect from "@/components/Home/LetsConnect";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Course Unbox Blogs | Digital Marketing, Tech & Career Insights",
    description: "Explore expert-written blogs on digital marketing, technology, online courses, and career growth. Stay updated with the latest learning insights from Course Unbox."
}


const page = () => {

    return (

        <>
            <Navbar />

            <LetConnect />

            <Content />

            <LetsConnect />

            <Footer />
        </>
    );

}

export default page