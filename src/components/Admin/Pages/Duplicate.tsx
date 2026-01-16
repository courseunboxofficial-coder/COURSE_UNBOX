import { supabase } from '@/lib/supabse/supabaseConfig'
import { BookA, Clock, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';


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

  meta: {
    title: string,
    description: string
  },

  slug: string,
  alt: string,
  image: string;
  city : string

}

const Duplicate = ({ onEdit }: { onEdit: any }) => {

  const [pages, setPages] = useState<Course | null>(null);
  const [loading, setLoading] = useState(false);

  const getPagesData = async () => {

    const { data, error } = await supabase
      .from("Pages")
      .select("*")
      .order("created_at", { ascending: false }).limit(1).single();

    if (!error) setPages(data);

  };

  const handleDelete = async (id: string) => {
    if (!id) return;

    try {

      setLoading(true);

      const { error } = await supabase
        .from("Pages")
        .delete()
        .eq("id", id);

      if (error) throw error;

      toast.success("Data deleted successfully");
      setPages(null);

    } catch (err) {
      console.error(err);
      toast.error("Something went wrong while deleting");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPagesData();
  }, []);

  return (
    <>
      <ToastContainer />

      {pages && (
        <div className="w-full flex justify-center items-center">
          <div className="w-[40%] bg-white border-2 border-[#2e19a7] rounded-2xl flex flex-col shadow-2xl hover:-translate-y-1 transition-all duration-300 mt-20 overflow-hidden">

            {/* IMAGE */}
            <div className="relative w-full h-[240px] lg:h-[260px]">
              {pages.image && (
                <Image

                  src={pages.image}
                  alt={pages.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"

                />
              )}
            </div>

            {/* CONTENT */}
            <div className="flex flex-col flex-1 px-5 py-4 text-center gap-3">
              <p className="text-lg font-bold text-[#213c98] line-clamp-2">
                {pages.title}
              </p>

              <div className="w-fit mx-auto bg-indigo-100 px-4 py-1 rounded-2xl text-sm font-medium">
                {pages.domain}
              </div>

              <div className="w-full bg-gray-100 flex justify-center gap-3 p-2 rounded-lg text-sm shadow-inner">
                <div className="flex items-center gap-1 border-r pr-3">
                  <Clock size={16} /> {pages.Duration}
                </div>
                <div className="flex items-center gap-1 border-r pr-3">
                  <ShieldCheck size={16} /> Certificate
                </div>
                <div className="flex items-center gap-1">
                  <BookA size={16} /> {pages.language}
                </div>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="mt-auto flex gap-5 p-3">
              <button onClick={(e) => { onEdit(pages) }}  className="w-full bg-[#64efa9] py-2.5 rounded-3xl font-bold hover:bg-[#052f7c] hover:text-white transition cursor-pointer">
                Edit
              </button>

              <button
                disabled={loading}
                onClick={() => handleDelete(pages.id)}
                className="w-full bg-[#f07e7e] py-2.5 rounded-3xl font-bold hover:bg-[#052f7c] hover:text-white transition disabled:opacity-50 cursor-pointer"
              >
                {loading ? "Deleting..." : "Delete"}
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};


export default Duplicate