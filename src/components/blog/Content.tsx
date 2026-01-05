"use client"
import { supabase } from '@/lib/supabse/supabaseConfig';
import Image from 'next/image';
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

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


const Content = () => {


  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {

    const getBlogData = async () => {

      const { data, error } = await supabase.from("Blog").select("*");

      if (error) {

        console.log("There is some of the error I have got");
        console.log(error);

      }

      setBlogs(data || []);

      console.log("THE BLOG DATA COME FROM THE DATA BASE IS : ");
      console.log(data);

    }


    getBlogData();

  }, []);

  return (


    <section className="py-16">
      <div className="mx-auto w-full px-6">

        <div className='w-full text-center mb-10'>
          <h2 className="relative inline-block font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-6xl mb-5 sm:mb-6 md:mb-10 lg:mb-15">
            Latest Blogs
            <svg
              className="absolute left-0 -bottom-6 w-full"
              viewBox="0 0 300 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 15 C 60 5, 240 5, 295 15"
                stroke="#2BB0FF"
                strokeWidth="8"
                strokeLinecap="round"
              />
            </svg>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {blogs.map((card) => (
            <Link
              key={card.id}
              href={`/blog/${card.slug}`}
              className="group bg-white rounded-3xl shadow transition hover:shadow-2xl hover:shadow-indigo-300"
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden rounded-t-3xl bg-gray-100">
                <Image
                  src={card.image}
                  alt={card.alt || card.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="inline-block mb-3 rounded-full bg-gray-100 px-4 py-1 text-xs font-medium text-gray-700">
                  {card.domain}
                </span>

                <h3 className="mb-3 text-lg font-semibold leading-snug">
                  {card.title}
                </h3>

                <p className="text-sm text-gray-600 line-clamp-3">
                  {card.subcontent}
                </p>
              </div>
            </Link>
          ))}
        </div>


        {/* {hasMore && (
          <div
            ref={loaderRef}
            className="py-10 text-center text-gray-500"
          >
            {loading ? "Loading..." : "Scroll to load more"}
          </div>
        )} */}



      </div>
    </section>
  );
};

export default Content;
