import { notFound } from "next/navigation";
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
    .from("Courses")
    .select("id, slug")
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
