"use client"

import { supabase } from "@/lib/supabse/supabaseConfig"
import { useEffect, useState } from "react";
import Link from "next/link"
import Image from "next/image";

type Blog = {

  id: string;
  title: string;
  content: string;
  FAQ: {
    question: string;
    answer: string
  }[];
  image: string,

  meta: {

    title: string,
    description: string
  },

  slug: string,
  alt: string,
  subcontent: string,
  created_at: number;
  author: string,
  domain: string;

};

export default function RelatedBlog({slug}:{slug:string}) {


  const [blog, setBlog] = useState<Blog | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>([]);

  const getBlog = async () => {
    const { data, error } = await supabase
      .from("Blog")
      .select("*")
      .eq('slug',slug)
      .single();


    if (error) {
      console.error("RELATED BLOG ERROR:", error);
      return;
    }
   
    if(data){
      setBlog(data);
    }
  };

  const getRelatedBlog = async()=>{
     const {data,error} = await supabase.from("Blog").select("*").eq("domain",blog?.domain).neq('slug',slug).limit(3);
     if (error) {
      console.error("RELATED BLOG ERROR:", error);
      return;
    }

    console.log(data)

       if(data){
        
         setRelatedBlogs(data ?? []);
         console.log("Related Blogs", relatedBlogs)
       }   
   
  }

  useEffect(() => {
    getBlog();
    
  }, [])

  useEffect(() => {
  if (blog?.domain) {
    getRelatedBlog();
  }
}, [blog]);



  return (
    <section className="max-w-7xl mx-auto px-4 mt-20 pb-20">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8 ">
        Related Articles
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {relatedBlogs?.map((blog, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl border-gray-200 shadow-lg  overflow-hidden
                         transition-all duration-300 hover:shadow-blue-200 hover:-translate-y-1  curosr-pointer"
          >
            <div className="relative h-40 cursor-pointer">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-center w-full h-full"
              />
            </div>
            <div className="inset-0 bg-linear-to-bl bg-gray-300  hover:bg-blue-300 h-0.5"></div>

            <div className="p-5 cursor-pointer">
              <h3 className="font-bold text-slate-900 leading-snug">
                {blog.title}
              </h3>

              <p className="mt-2 text-sm text-slate-600 line-clamp-3">
                {blog.subcontent}
              </p>

              <Link href={`/blog/${blog.slug}`}>
                <span className="inline-block mt-4 text-sm font-medium text-blue-600">
                  Read more →
                </span>
              </Link>



            </div>
          </div>
        ))}
      </div>
    </section>

  )
}