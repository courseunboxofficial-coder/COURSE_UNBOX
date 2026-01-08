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
import WhyChooseUs from "@/components/AllCourses/WhyChooseUs";

const FetchCourseData = async () => {

      const { data, error } = await supabase.from("Courses").select("*");

      if (error) {
            console.log("THE ERROR IS : ");
            console.log(error);
      }

      return data;

};


const getAboutData = async () => {

      const { data, error } = await supabase.from("Home").select("*").eq("section", "AboutHome").single();

      if (error) {

            console.log("THERE IS ERROR IN THE HOME ABOUT SECTION : ");
            console.log(error);

      }

      return data;

}


const getMentorsData = async () => {

      const { data, error } = await supabase.from("Mentors").select("*");

      if (error) {

            console.log("There is some error I have in my code : ");
            console.log(error);

      }

      return data;

}



export default async function Home() {

      const courses = await FetchCourseData();
      const about = await getAboutData();
      const mentors = await getMentorsData();


      return (


            <main className="w-full min-h-screen bg-white">

                  <Navbar />
                  <Hero />
                  <UpdatedBanner />
                  <Partners />
                  <Trending />
                  <Courses/>
                  <Enquiry />
                  <TopCourses />
                  <Hire />
                  <Mentors MentorsData = {mentors  ?? []}/>
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
