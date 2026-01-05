import { notFound } from "next/navigation";
import Navbar from "@/components/Home/Navbar";
import Foter from "@/components/Home/Footer"
import RelatedBlog from "@/components/blog/RelatedBlog";
import BlogFAQ from "@/components/blog/BlogFAQ";
import AdCard from "@/components/blog/AdCTA";
import BlogCategories from "@/components/blog/BlogCategories";
import FinalCTASection from "@/components/blog/FinalCTASection";
import LeftContent from "@/components/blog/LeftContent";
import type { Metadata } from "next";
import { supabase } from "@/lib/supabse/supabaseConfig";
import { title } from "process";


export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
) {

  const { slug } = await params;

  const { data } = await supabase
    .from("Blog")
    .select("*")
    .eq("slug", slug)
    .single();

  return {
    title: data?.meta?.title ?? "CourseUnbox Blog",
    description: data?.meta?.description ?? "",
  };


}


const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {

  const { slug } = await params;

  console.log("THE ID WE HAVE GOT IS : ");
  console.log(slug);

  const { data: blog , error } = await supabase
    .from("Blog")
    .select("id, slug")
    .eq("slug", slug)
    .maybeSingle();


  if (!blog || error) {

    notFound();

  }


  return (

    <>
      <Navbar />

      <div className="w-full min-h-screen bg-slate-50"  >

        <div className="max-w-7xl mx-auto px-4">

          <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-10" >


            <LeftContent BlogId={slug} />


            <aside className="relative shadow-xs">

              <div className="sticky top-44 space-y-6">

                <AdCard />

                <BlogCategories />

              </div>

            </aside>

          </div>

        </div>


        <BlogFAQ BlogId={slug} />


        <RelatedBlog />


        <FinalCTASection />

      </div>

      <Foter />
    </>

  );
};

export default Page;
