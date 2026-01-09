"use client"
import { supabase } from '@/lib/supabse/supabaseConfig';
import Image from 'next/image';
import Link from 'next/link'
import { useEffect, useState } from 'react'
import DesktopPagenation from './DesktopPagenation';
import MobilePagenation from './MobilePagenation'

export type InternshipCard = {

  id: number;
  domain: string;
  title: string;
  content: string;
  subcontent: string
  slug: string
  FAQ: string;
  image: string

};


const Content = () => {


  const [blogs, setBlogs] = useState<InternshipCard[]>([]);
  const totalBlogs = Math.ceil((blogs.length) / 12);
  const [page, setPage] = useState(1);
  const limit = 12;


  const [currBlogs, setCurrBlogs] = useState<InternshipCard[]>([]);





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

   useEffect(()=>{
    const start  =  (page * 12) - 11;
    const end =  page * 12;
    
    setCurrBlogs(blogs.slice(start,end+1));
  },[blogs,page])



  return (


    <section className="py-16 relative">


    

      <div className="mx-auto w-full px-6">
        <nav className="text-sm text-gray-400 mb-4 pl-20 bg-white max-w-sm -mt-8">
            <Link href="/" className="hover:text-blue-500 transition">
            Home
            </Link>
            <span className="mx-2">/</span>
            <Link href={"/blog"} className="text-gray-600 font-medium ">
              Blogs
            </Link>
        </nav>

        <div className='text-center mb-10'>
          <h2 className="relative inline-block  font-extrabold text-xl sm:text-2xl md:text-4xl lg:text-5xl mb-10 px-20 md:px-16 lg:px-8 ">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:px-8 pb-4">
          {currBlogs.map((card, idx) => (
            <Link
              key={idx}
              href={`/blog/${card.slug}`}
              className="md:max-w-[300px] lg:max-w-[340px] bg-white rounded-3xl shadow hover:shadow-2xl hover:shadow-indigo-300 transition"
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
                    card.subcontent.slice(0, 400)
                  }
                  ...
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="sticky bottom-6 hidden md:flex justify-center z-40 mt-12">
          <DesktopPagenation
            currentPage={page}
            totalPages={totalBlogs}
            onPageChange={(p) => setPage(p)}
          />
        </div>

        <div className="md:hidden sticky bottom-6 flex justify-center z-40 mt-12">
          <MobilePagenation
            currentPage={page}
            totalPages={totalBlogs}
            onPageChange={(p) => setPage(p)}
          />
        </div>




      </div>
    </section>
  );
};

export default Content;