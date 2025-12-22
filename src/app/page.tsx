"use client";
import Banner from "@/components/Home/Banner";
import Courses from "@/components/Home/Courses";
import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Home/Navbar";
import TopCourses from "@/components/Home/TopCourses";
import Footer from "@/components/Home/Footer"
import Enquiry from "@/components/Home/Enquiry";
import Mentors from "@/components/Home/Mentors";
import Testimonials from "@/components/Home/Testimonials";
import Partners from "@/components/Home/Partners";
import Hire from "@/components/Home/Hire";
import TopCompanies from "@/components/Home/TopCompanies";
import LetsConnect from "@/components/Home/LetsConnect";

export default function Home() {

  return (


    <main className="w-full min-h-screen bg-white">

      <Navbar />
      <Hero />
      <Partners />
      <Banner />
      <Courses />
      <Enquiry />
      <TopCourses />
      <Hire />
      <Mentors />
      <Testimonials />
      <TopCompanies/>
      <LetsConnect/>
      <Footer />

    </main>

  );
}
