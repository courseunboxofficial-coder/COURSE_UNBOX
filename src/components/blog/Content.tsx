"use client"
import { supabase } from '@/lib/supabse/supabaseConfig';
import Image from 'next/image';
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

export type InternshipCard = {

  id: number;
  domain: string;
  title: string;
  content: string;
  FAQ: string;
  image : string

};

// const ITEMS_PER_PAGE = 4;

const Content = () => {


  const [blogs, setBlogs] = useState<InternshipCard[]>([]);

  // const [page, setPage] = useState(1);
  // const [loading, setLoading] = useState(false);
  // const [hasMore, setHasMore] = useState(true);

  // const loaderRef = useRef<HTMLDivElement | null>(null);

  // const fetchBlogs = () => {

  //   console.log(page);
  //   if (loading || !hasMore) return;

  //   setLoading(true);
  //   setTimeout(() => {

  //     const start = (page - 1) * ITEMS_PER_PAGE;
  //     const end = start + ITEMS_PER_PAGE;
  //     const newBlogs = cards.slice(start, end);

  //     if (newBlogs.length === 0) {

  //       setHasMore(false);

  //     } else {

  //       setBlogs((prev) => [...prev, ...newBlogs]);

  //       setPage((prev) => {

  //         return prev + 1

  //       })
  //     }


  //     setLoading(false);

  //   }, 300)


  // };

  // useEffect(() => {
  //   fetchBlogs();
  // }, []);


  // useEffect(() => {
  //   if (!loaderRef.current) return;

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       if (entries[0].isIntersecting) {

  //         fetchBlogs();
  //       }
  //     },
  //     {
  //       threshold: 0.1,
  //       rootMargin: "100px",
  //     }
  //   );

  //   observer.observe(loaderRef.current);

  //   return () => observer.disconnect();

  // }, [fetchBlogs]);




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
        <h2 className="relative inline-block font-extrabold text-5xl mb-10 ">
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
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>
        </h2>

        <div className="flex flex-wrap gap-8 pb-4">
          {blogs.map((card, idx) => (
            <Link
              key={idx}
              href={`/blog/${card.id}`}
              className="min-w-[340px] max-w-[340px] bg-white rounded-3xl shadow hover:shadow-2xl hover:shadow-indigo-300 transition"
            >

              <div className="relative h-44 w-full overflow-hidden rounded-t-3xl">

                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <span className="inline-block mb-3 rounded-full bg-gray-100 px-4 py-1 text-xs font-medium text-gray-700">
                  {card.domain}
                </span>
                <h3 className="text-lg font-semibold leading-snug mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {
                    card.content.slice(0, 400)
                  }
                  ...
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
