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
import CertificationBanner from "@/components/Home/Deepak";
import StatsSection from "@/components/Home/StatsSection";
import Trending from "@/components/Home/Trending";
import PhotoGallery from "@/components/Home/PhotoGallery";
import AboutUs from "@/components/Home/AboutUs";
import Faq from "@/components/Home/Faq";
import TestimonialsSection from "@/components/About/TestimonialsSection";
import DigiCourseSection from "@/components/Home/DigiCourseSection";
import PhotoGalleryCarousel from "@/components/Home/PhotoGallery";

export default function Home() {

      return (


            <main className="w-full min-h-screen bg-white">
                  <Navbar />
                  <Hero />
                  <Partners />
                  <Banner /> 
                  <Trending />
                   <Courses /> 
                  <Enquiry /> 
                  <TopCourses />
                  
                  <Hire /> 
                  <Mentors /> 

                  <CertificationBanner />
                  <StatsSection /> 
                  <AboutUs />
                  <TestimonialsSection />
                  <PhotoGallery />
                  <DigiCourseSection />
                  <Faq />
                  <Testimonials />
                  <TopCompanies />
                  <LetsConnect />
                  <Footer />
            </main>

      );
}
