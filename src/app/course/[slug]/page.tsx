import { notFound } from "next/navigation";
import Banner from "@/components/course/Banner";
import Hero from "@/components/course/Hero";
import Enquiry from "@/components/course/Enquiry";
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import Module from "@/components/course/Module";
import CertificationBanner from "@/components/Home/CertificationBanner";
import TopCompanies from "@/components/Home/TopCompanies";
import LetsConnect from "@/components/Home/LetsConnect";
import Testimonials from "@/components/course/TestimonialsSection";
import CourseContent from "@/components/course/CourseContent";
import Faq from "@/components/course/CourseFAQ";
import { supabase } from "@/lib/supabse/supabaseConfig";
import Mentors from "@/components/Home/Mentors";


export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
) {

  const { slug } = await params;

  const { data } = await supabase
    .from("Courses")
    .select("*")
    .eq("slug", slug)
    .single();

  return {

    title: data?.meta?.title ?? "Course Image",
    description: data?.meta?.description ?? "",
    
  };


}

const getMentorsData = async () => {

  const { data, error } = await supabase.from("Mentors").select("*");

  if (error) {

    console.log("There is some error I have in my code : ");
    console.log(error);

  }

  return data;

}

const getCoursesData = async (courseSlug: string) => {

  const { data, error } = await supabase.from("Courses").select("*").eq("slug", courseSlug).single();

  if (error) {

    console.log("The error coming in the Hero Section of the : ");
    console.log(error);

  }

  return data;

}


export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {

  const { slug } = await params


  const { data: course, error } = await supabase
    .from("Courses")
    .select("id, slug")
    .eq("slug", slug)
    .maybeSingle();


  if (!course || error) {

    notFound();

  }


  const mentors = await getMentorsData();
  const courses = await getCoursesData(slug)

  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen text-white">
        <Hero courses={courses} />
        <Banner courses={courses} />
        <Enquiry courses={courses} />
        <Module courses={courses} />
        <CourseContent courses={courses} />
        <Mentors MentorsData={mentors ?? []} />
        <Testimonials courses={courses} />
        <CertificationBanner />
        <TopCompanies />
        <Faq courses={courses} />
        <LetsConnect />
      </div>
      <Footer />

    </>
  );
}
