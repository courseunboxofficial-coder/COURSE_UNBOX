"use client"

import { supabase } from "@/lib/supabse/supabaseConfig";
import Link from "next/link"
import { useEffect, useState } from "react";


type Blog = {

  id: string;
  domain: string;
  title: string;
  content: string;
  FAQ: {
    question: string;
    answer: string;
  }[];

  image : string

  created_at: string;
  
};


export default function LeftContent({ BlogId }: { BlogId: string }) {

const [Blogs, setBlogs] = useState<Blog | null>(null);

  const getBlogData = async () => {
    const { data, error } = await supabase
      .from("Blog")
      .select("*")
      .eq("id", BlogId)
      .single();

    if (error) {

      console.error(error);

    }

    console.log("THE DATA IS : ");
    console.log(data);

    setBlogs(data );
  }



  useEffect(() => {

    getBlogData();

  }, []);
  return (<article className=" border-r-gray-400 ">
    {/* ===== BLOG HEADER ===== */}
    <section className="px-4 pt-16 ">

      <div className="flex items-center gap-3 mb-4">

        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-50 text-blue-600">

          {Blogs && Blogs.domain}

        </span>
        <span className="text-xs text-slate-500">8 min read</span>
      </div>

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
        {Blogs?.title}
      </h1>

      {/* Gradient underline */}
      <div className="mt-3 h-1 w-24 bg-linear-to-r from-blue-500 via-indigo-500 to-transparent rounded-full"></div>

      <p className="mt-4 text-sm text-slate-600">
        By <span className="font-medium text-slate-800">Rohit Juyal</span> · Jun 28,
        2025
      </p>
    </section>

    {/* ===== FEATURE IMAGE ===== */}
    <section className="px-6 sm:px-4 mt-10">
      <div className="group relative w-full h-70 sm:h-95 rounded-2xl overflow-hidden shadow-xl">
        <img
          src={Blogs?.image}
          alt="Blog cover"
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent" />
      </div>
    </section>


    {/* ==== REDIRECT TO FORM ==== */}
    <div className="flex justify-center py-10">
      <Link
        href="#form"
        className="relative inline-flex items-center gap-2 px-7 py-3 rounded-full
                                bg-linear-to-r from-blue-600 to-indigo-600
                                text-white font-medium shadow-lg
                                hover:shadow-xl hover:scale-[1.02]
                                transition-all duration-300"
      >
        Let’s Connect
        <span className="absolute inset-0 rounded-full ring-2 ring-blue-300/40"></span>
      </Link>
    </div>


    {/* ===== BLOG CONTENT ===== */}
    <section className="mx-auto px-4 mt-12">
      <div className="prose prose-slate max-w-none">
        <p>

          {Blogs?.content}

        </p>
      </div>
    </section>
  </article>)
}