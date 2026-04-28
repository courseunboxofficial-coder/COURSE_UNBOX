import { notFound } from "next/navigation";
import Navbar from "@/components/Home/Navbar";
import Foter from "@/components/Home/Footer"
import RelatedBlog from "@/components/blog/RelatedBlog";
import BlogFAQ from "@/components/blog/BlogFAQ";
import AdCard from "@/components/blog/AdCTA";
import BlogCategories from "@/components/blog/BlogCategories";
import FinalCTASection from "@/components/blog/FinalCTASection";
import LeftContent from "@/components/blog/LeftContent";
import { supabase } from "@/lib/supabse/supabaseConfig";




export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {

  const { slug } = await params;

  const { data } = await supabase
    .from("Blog")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .single();

  return {
    title: data?.meta?.title ?? "CourseUnbox Blog",
    description: data?.meta?.description ?? "",
  };


}


const getBlogData = async (BlogId: string) => {
  const { data, error } = await supabase
    .from("Blog")
    .select("*")
    .eq("slug", BlogId)
    .eq("status", "published")
    .single();

  if (error) {

    console.error(error);

  }

  return data;


}


const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {

  const { slug } = await params;

  console.log("THE ID WE HAVE GOT IS : ");
  console.log(slug);

  const { data: blog, error } = await supabase
    .from("Blog")
    .select("id, slug")
    .eq("slug", slug)
    .eq("status", "published")
    .maybeSingle();


  if (!blog || error) {

    notFound();

  }

  const Blogs = await getBlogData(slug);

  const articleSchema = {

    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": Blogs.title,
    "description": Blogs.meta?.description,
    "image": Blogs.image,
    "author": {
      "@type": "Person",
      "name": Blogs.author || "Course Unbox Editorial Team"
    },

    "publisher": {
      "@type": "Organization",
      "name": "Course Unbox",
      "logo": {
        "@type": "ImageObject",
        "url": "https://courseunbox.com/favicon.ico"
      }
    },

    "dateModified": Blogs.created_at,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://courseunbox.com/blog/${Blogs.slug}`
    },

    "url": `https://courseunbox.com/blog/${Blogs.slug}`

  };

  const breadcrumbSchema = {

    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://courseunbox.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://courseunbox.com/blog" },
      { "@type": "ListItem", "position": 3, "name": Blogs.domain }
    ]

  };

  const faqSchema =
    Blogs.faqs?.length > 0
      ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": Blogs.faqs.map((faq: any) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
      : null;


  return (

    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            [articleSchema, breadcrumbSchema, faqSchema].filter(Boolean)
          )
        }}
      />

      <Navbar />

      <div className="w-full min-h-screen bg-slate-50"  >


        <div className="max-w-7xl mx-auto px-4">

          <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-10" >


            <LeftContent Blogs={Blogs} />


            <aside className="relative shadow-xs">

              <div className="sticky top-44 space-y-6">

                <AdCard />

                <BlogCategories />

              </div>

            </aside>

          </div>

        </div>


        <BlogFAQ Blogs={Blogs} />


        <RelatedBlog slug={slug} />


        <FinalCTASection />

      </div>

      <Foter />

    </>

  );
};

export default Page;
