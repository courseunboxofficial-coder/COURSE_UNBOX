import type { Metadata } from "next";
import Navbar from "@/components/Home/Navbar"
import Footer from "@/components/Home/Footer"
import AboutCourseUnbox from "@/components/About/AboutCourseUnbox";
import PartnerTrustSection from "@/components/About/PartnerTrustSection";
import FounderSection from "@/components/About/FounderSection";
import WhyChooseUs from "@/components/About/WhyChooseUs";
import PlacementAssistance from "@/components/About/PlacementAssistance";
import FinalMasterclassForm from "@/components/About/FinalMasterclassForm";

    
export const metadata: Metadata = {
    title: "About Course Unbox",
    description:"Discover who we are, what we do, and why Course Unbox exists to empower learners.", 

};



export default function AboutPage() {
    return (
        <>

            <Navbar />
            <div className="w-full bg-white ">
                
                {/* STATS SECTION */}
                <AboutCourseUnbox/>

                {/* Parterner Trus Section */}
                <PartnerTrustSection/>

                {/* Founder Section */}
                <FounderSection/>


                {/* Why Choose Us */}
                <WhyChooseUs/>


                {/* Placement Assistance Section */}
                <PlacementAssistance/>


                {/* Final Form */}
                <FinalMasterclassForm/>


                {/* TEAM SECTION */}
               

            </div>


            <Footer />

        </>
    );
}
