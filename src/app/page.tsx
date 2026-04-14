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
      console.log(data, "this data is from HOME ABOUT SECTION.");
      return data;

}





export default async function Home() {

      const about = await getAboutData();

      const websiteSchema = {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Course Unbox",
            "url": "https://courseunbox.com"
      }

      const organizationSchema = {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Course Unbox",
            "url": "https://courseunbox.com",
            "logo": "https://courseunbox.com/favicon.ico"
      }

      const faqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                  {
                        "@type": "Question",
                        "name": "Which is the best Digital Marketing Institute in Delhi NCR for practical learning?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "The best Digital Marketing Institute in Delhi NCR is one that focuses on hands-on training, real-world projects, updated tools, and career support—not just theory. Institutes like Course Unbox emphasize live projects, industry tools, and mentor-led learning to help students become job-ready rather than just certified."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "What skills should I learn from a Digital Marketing course in Delhi NCR?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "A good Digital Marketing course in Delhi NCR should cover SEO, Google Ads and performance marketing, social media marketing, content marketing, email marketing, web analytics, and real campaign optimization. Practical exposure to tools like Google Analytics, Search Console, and paid ad platforms is essential for real career growth."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Is Digital Marketing a good career option in Delhi NCR?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Yes, digital marketing is a strong career choice in Delhi NCR due to the region’s high concentration of startups, agencies, and corporate businesses. Skilled digital marketers are in demand for roles like SEO specialist, performance marketer, social media manager, and content strategist, with opportunities for both full-time jobs and freelancing."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "How much does a Digital Marketing course cost in Delhi NCR?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "The fees for a Digital Marketing course in Delhi NCR vary depending on course depth, duration, tools access, and placement support. Instead of choosing a course based only on price, learners should compare curriculum quality, live projects, trainer experience, and post-course career guidance. Course Unbox offers transparent pricing with industry-aligned training and practical exposure."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Does Course Unbox provide placement support after Digital Marketing training?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Yes, Course Unbox provides structured placement and career support, including resume building, interview preparation, portfolio guidance, and job referrals based on skill performance. The focus is on helping learners transition confidently into real digital marketing roles."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Who should join a Digital Marketing Institute in Delhi NCR?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "A Digital Marketing Institute in Delhi NCR is suitable for students, working professionals, career switchers, freelancers, and business owners. No prior technical background is required—only the willingness to learn, practice, and adapt. Structured institutes like Course Unbox make the learning process easier through guided mentorship and practical training."
                        }
                  },

            ]
      };

      return (

            <>

                  <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                              __html: JSON.stringify([
                                    websiteSchema,
                                    organizationSchema,
                                    faqSchema
                              ])
                        }}
                  />

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
                        <WhyChooseUs />
                        <Faq />
                        <Testimonials />
                        <TopCompanies />
                        <LetsConnect />
                        <Footer />

                  </main>

            </>

      );
}
