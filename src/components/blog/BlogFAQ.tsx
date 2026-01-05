"use client"

import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { supabase } from "@/lib/supabse/supabaseConfig";


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

export default function BlogFAQ({ BlogId }: { BlogId: string }) {


  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [Blogs, setBlogs] = useState<Blog | null>(null);

  const getBlogData = async () => {

    const { data, error } = await supabase
      .from("Blog")
      .select("*")
      .eq("slug", BlogId)
      .single();

    if (error) {

      console.error(error);

    }

    console.log("THE DATA IS : ");
    console.log(data);

    setBlogs(data);

  }



  useEffect(() => {

    getBlogData();

  }, []);



  return (
    <section className="max-w-5xl mx-4 lg:mx-32 px-4 py-16 cursor-pointer">

      {/* Heading */}
      <div className="mb-10 ">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center md:text-left">
          Frequently Asked <span className="text-blue-600">Questions</span>
        </h2>

      </div>

      {/* FAQ List */}
      <div className="space-y-4">

        {Blogs?.FAQ.map((faq, index) => {

          const isOpen = openIndex === index;

          return (

            <div
              key={index}
              className="
                rounded-xl border border-gray-100 bg-white
                shadow-md transition
              "
            >
              <button
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                className="
                  w-full flex items-center justify-between gap-4
                  px-6 py-4 text-left cursor-pointer 
                "
              >
                <span className="font-semibold text-gray-900">
                  {faq.question}
                </span>

                <span
                  className={`
                    flex h-8 w-8 items-center justify-center rounded-full
                    bg-blue-50 text-blue-600
                    transition-transform duration-300 hover:bg-[#8787fc]
                    ${isOpen ? "rotate-180" : ""}
                  `}
                >
                  <ChevronDown size={18} />
                </span>
              </button>

              {isOpen && (
                <div className="px-6 pb-4 text-sm leading-relaxed text-gray-600">
                  {faq.answer}
                </div>
              )}


              <div className="h-0.5 bg-linear-to-r from-blue-500 rounded-b-xl" />
            </div>
          );
        })}
      </div>
    </section>
  );
}