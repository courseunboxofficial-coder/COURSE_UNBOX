import { notFound } from "next/navigation";
import Banner from "@/components/courses/Banner";
import Hero from "@/components/courses/Hero";
import Enquiry from "@/components/courses/Enquiry";
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import Module from "@/components/courses/Module";
import CertificationBanner from "@/components/Home/CertificationBanner";
import TopCompanies from "@/components/Home/TopCompanies";
import LetsConnect from "@/components/Home/LetsConnect";
import Testimonials from "@/components/courses/TestimonialsSection";
import CourseContent from "@/components/courses/CourseContent";
import Faq from "@/components/courses/CourseFAQ";
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


export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {

  const { slug } = await params

  console.log("THE PARAMETERS IS : ", slug);

  const { data: course, error } = await supabase
    .from("Pages")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();


  if (!course || error) {
    
    notFound();

  }

  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen text-white">
        <Hero courseSlug={slug} />
        <Banner courseSlug={slug} />
        <Enquiry courseSlug={slug} />
        <Module courseSlug={slug} />
        <CourseContent courseSlug={slug} />
        <Mentors />
        <Testimonials courseSlug={slug} />
        <CertificationBanner />
        <TopCompanies />
        <Faq courseSlug={slug} />
        <LetsConnect />
      </div>
      <Footer />

    </>
  );
}