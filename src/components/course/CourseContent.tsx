"use client";

import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { supabase } from "@/lib/supabse/supabaseConfig";

type Course = {

  id: string;
  title: string;
  description: string;
  startDate: string;
  Duration: number;
  language: string;
  domain: string;
  Delivery_Mode: string;
  low: number,
  high: number,
  price: number,
  content: {
    title: string;
    subtitle: string;
  }[];
  Testimonials:
  {
    name: string,
    role: string,
    company: string,
    title: string,
    description: string,
    ranking: string,
    course: string
  }[],
  modules: Record<
    string,
    {
      module: string;
      title: string;
      lectures: string[];
    }[]
  >,

  FAQ: {
    question: string;
    answer: string
  }[];
  image: string;

}


export default function CategoryOverview({courseSlug } : {courseSlug : string}) {
  const [expanded, setExpanded] = useState(false);
  const [content, setContent] = useState<Course | null>(null);


  const getCourseData = async () => {
    const { data, error } = await supabase
      .from("Courses")
      .select("*")
      .eq("slug", courseSlug)
      .single();

    if (error) {

      console.error(error);

    }

    console.log("THE DATA IS : ");
    console.log(data);

    setContent(data);
  }

  useEffect(() => {

    getCourseData();

  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 rounded-xl border-gray-200 shadow-xl bg-linear-to-br from-blue-300 via-yellow-50 to-blue-300 my-20">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px) [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 py-12 bg-[radial-gradient(#ffffff_1px,transparent_1px)">
        <div className="text-2xl md:text-4xl font-extrabold mb-4 text-black">
          <h2>About the <span className="text-blue-600">{content?.title}</span> Courses</h2>

        </div>

        <div className="w-20 h-1 mb-6 bg-linear-to-r from-blue-600 to-yellow-400 rounded-full" />


        <p className="text-gray-700 leading-relaxed text-base md:text-lg ">
          {content?.description.slice(0,300)}
            
          

          {expanded && (
            <>
              {" "}
              {content?.description.slice(1000)}
            </>
          )}
        </p>

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 flex gap-2 items-center text-blue-600 font-medium  transition cursor-pointer py-2 px-4 border-2 rounded-4xl border-blue-400"
        >
          {expanded ? "Read Less" : "Read More"}
          {expanded ? (
            <ChevronUp size={18} />
          ) : (
            <ChevronDown size={18} />
          )}
        </button>
      </div>

    </section>

  );
}
