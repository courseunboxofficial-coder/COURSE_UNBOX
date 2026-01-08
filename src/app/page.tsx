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
import CertificationBanner from "@/components/Home/CertificationBanner";
import StatsSection from "@/components/Home/StatsSection";
import Trending from "@/components/Home/Trending";
import PhotoGallery from "@/components/Home/PhotoGallery";
import AboutUs from "@/components/Home/AboutUs";
import Faq from "@/components/Home/Faq";
import DigiCourseSection from "@/components/Home/DigiCourseSection";
import { UpdatedBanner } from "@/components/Home/UpdatedBanner";
import { supabase } from "@/lib/supabse/supabaseConfig";
import GetCertifiedByAmazon from "@/components/Home/GetCertifiedByAmazon";
import HomeEnquiry from "@/components/Home/HomeEnquiry";
import WhyChooseUs from "@/components/AllCourses/WhyChooseUs";



const getAboutData = async () => {

      const { data, error } = await supabase.from("Home").select("*").eq("section", "AboutHome").single();

      if (error) {

            console.log("THERE IS ERROR IN THE HOME ABOUT SECTION : ");
            console.log(error);

      }

      return data;

}





export default async function Home() {

      const about = await getAboutData();

      return (


            <main className="w-full min-h-screen bg-white">

                  <Navbar />
                  <Hero />
                  <UpdatedBanner />
                  <GetCertifiedByAmazon />
                  <Partners />
                  <Trending />
                  <Courses />
                  <HomeEnquiry />
                  <TopCourses />
                  <Hire />
                  <Mentors />
                  <CertificationBanner />
                  <StatsSection />
                  <AboutUs about={about} />
                  <PhotoGallery />
                  <DigiCourseSection />
                  <WhyChooseUs/>
                  <Faq />
                  <Testimonials />
                  <TopCompanies />
                  <LetsConnect />
                  <Footer />

            </main>

      );
}
