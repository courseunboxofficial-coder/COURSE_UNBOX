import Navbar from '@/components/Home/Navbar';
import Footer from '@/components/Home/Footer';
import Content from '@/components/blog/Content';
import LetConnect from "@/components/blog/LetConnect";
import LetsConnect from "@/components/Home/LetsConnect";
import { supabase } from '@/lib/supabse/supabaseConfig';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Course Unbox Blogs | Digital Marketing, Tech & Career Insights",
    description: "Explore expert-written blogs on digital marketing, technology, online courses, and career growth. Stay updated with the latest learning insights from Course Unbox."
}


 const getBlogData = async () => {

      const { data, error } = await supabase.from("Blog").select("*");

      if (error) {

        console.log("There is some of the error I have got");
        console.log(error);

      }

      return data;

    }


const page = async () => {

    const blogs = await getBlogData();

    return (

        <>
            <Navbar />

            <LetConnect />

            <Content/>

            <LetsConnect />

            <Footer />
        </>
    );

}

export default page