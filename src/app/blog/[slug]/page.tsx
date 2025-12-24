import Navbar from "@/components/Home/Navbar";
import Foter from "@/components/Home/Footer"
import RelatedBlog from "@/components/blog/RelatedBlog";
import BlogFAQ from "@/components/blog/BlogFAQ";
import AdCard from "@/components/blog/AdCTA";
import BlogCategories from "@/components/blog/BlogCategories";
import FinalCTASection from "@/components/blog/FinalCTASection";
import LeftContent from "@/components/blog/LeftContent";

const Page = () => {

  return (
    <>
      <Navbar />

      <div className="w-full min-h-screen bg-slate-50"  >

        <div className="max-w-7xl mx-auto px-4">

          <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-10" >


            <LeftContent />


            <aside className="relative shadow-xs">

              <div className="sticky top-44 space-y-6">

                <AdCard />

                <BlogCategories />

              </div>

            </aside>

          </div>

        </div>





        <BlogFAQ />


        <RelatedBlog />


        <FinalCTASection />

      </div>

      <Foter />
    </>

  );
};

export default Page;
