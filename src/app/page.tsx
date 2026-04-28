import dynamic from "next/dynamic";
import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Home/Navbar";
import Partners from "@/components/Home/Partners";
import { UpdatedBanner } from "@/components/Home/UpdatedBanner";
import GetCertifiedByAmazon from "@/components/Home/GetCertifiedByAmazon";

// Below-fold components loaded on demand to reduce initial JS bundle
const Courses = dynamic(() => import("@/components/Home/Courses"));
const TopCourses = dynamic(() => import("@/components/Home/TopCourses"));
const Footer = dynamic(() => import("@/components/Home/Footer"));
const Enquiry = dynamic(() => import("@/components/Home/Enquiry"));
const Mentors = dynamic(() => import("@/components/Home/Mentors"));
const Testimonials = dynamic(() => import("@/components/Home/Testimonials"));
const TopCompanies = dynamic(() => import("@/components/Home/TopCompanies"));
const LetsConnect = dynamic(() => import("@/components/Home/LetsConnect"));
const CertificationBanner = dynamic(() => import("@/components/Home/CertificationBanner"));
const StatsSection = dynamic(() => import("@/components/Home/StatsSection"));
const Trending = dynamic(() => import("@/components/Home/Trending"));
const PhotoGallery = dynamic(() => import("@/components/Home/PhotoGallery"));
const AboutUs = dynamic(() => import("@/components/Home/AboutUs"));
const Faq = dynamic(() => import("@/components/Home/Faq"));
const DigiCourseSection = dynamic(() => import("@/components/Home/DigiCourseSection"));
const HomeEnquiry = dynamic(() => import("@/components/Home/HomeEnquiry"));
const WhyChooseUs = dynamic(() => import("@/components/AllCourses/WhyChooseUs"));
const Hire = dynamic(() => import("@/components/Home/Hire"));

export default async function Home() {

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Course Unbox",
    url: "https://courseunbox.com",
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Course Unbox",
    url: "https://courseunbox.com",
    logo: "https://courseunbox.com/favicon.ico",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which is the best Digital Marketing Institute in Delhi NCR for practical learning?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The best Digital Marketing Institute in Delhi NCR is one that focuses on hands-on training, real-world projects, updated tools, and career support—not just theory. Institutes like Course Unbox emphasize live projects, industry tools, and mentor-led learning to help students become job-ready rather than just certified.",
        },
      },
      {
        "@type": "Question",
        name: "What skills should I learn from a Digital Marketing course in Delhi NCR?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A good Digital Marketing course in Delhi NCR should cover SEO, Google Ads and performance marketing, social media marketing, content marketing, email marketing, web analytics, and real campaign optimization. Practical exposure to tools like Google Analytics, Search Console, and paid ad platforms is essential for real career growth.",
        },
      },
      {
        "@type": "Question",
        name: "Is Digital Marketing a good career option in Delhi NCR?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, digital marketing is a strong career choice in Delhi NCR due to the region's high concentration of startups, agencies, and corporate businesses. Skilled digital marketers are in demand for roles like SEO specialist, performance marketer, social media manager, and content strategist, with opportunities for both full-time jobs and freelancing.",
        },
      },
      {
        "@type": "Question",
        name: "How much does a Digital Marketing course cost in Delhi NCR?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The fees for a Digital Marketing course in Delhi NCR vary depending on course depth, duration, tools access, and placement support. Instead of choosing a course based only on price, learners should compare curriculum quality, live projects, trainer experience, and post-course career guidance. Course Unbox offers transparent pricing with industry-aligned training and practical exposure.",
        },
      },
      {
        "@type": "Question",
        name: "Does Course Unbox provide placement support after Digital Marketing training?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Course Unbox provides structured placement and career support, including resume building, interview preparation, portfolio guidance, and job referrals based on skill performance. The focus is on helping learners transition confidently into real digital marketing roles.",
        },
      },
      {
        "@type": "Question",
        name: "Who should join a Digital Marketing Institute in Delhi NCR?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Digital Marketing Institute in Delhi NCR is suitable for students, working professionals, career switchers, freelancers, and business owners. No prior technical background is required—only the willingness to learn, practice, and adapt. Structured institutes like Course Unbox make the learning process easier through guided mentorship and practical training.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([websiteSchema, organizationSchema, faqSchema]),
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
        <AboutUs />
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
