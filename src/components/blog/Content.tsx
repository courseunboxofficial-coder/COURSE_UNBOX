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
  image: string;
  author : string;
  

};

const categories = [
  "All Blogs",
  "Digital Marketing",
  "Data Science",
  "IT & Software",
  "Development",
];





const Content = () => {


  const [blogs, setBlogs] = useState<InternshipCard[]>([]);
  const [totalBlogs, setTotalBlogs] = useState( Math.ceil((blogs.length) / 12));
  const [page, setPage] = useState(1);
  const [authors, setAuthors] = useState<string[]>([]);
  const limit = 12;


  const [currBlogs, setCurrBlogs] = useState<InternshipCard[]>([]);

  const [activeCategory, setActiveCategory] = useState('All Blogs'); 
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [showAuthorDropdown, setShowAuthorDropdown] = useState(false);





  useEffect(() => {

    const getBlogData = async () => {

      const { data, error } = await supabase.from("Blog").select("*").order("created_at", {ascending : false});
      
      
      if (error) {

        console.log("There is some of the error I have got");
        console.log(error);

      }

      setBlogs(data || []);
      console.log(blogs)

      console.log("THE BLOG DATA COME FROM THE DATA BASE IS : ");
      console.log(data);

    }


    getBlogData();

  }, []);



  

   useEffect(()=>{

    //authors
    const authors = [...new Set(blogs.map((b)=>b.author))];
    setAuthors(authors ?? []);

    //Pagenation logic 
    const start  =  (page * 12) - 11;
    const end =  page * 12;
    const filterBlogs = blogs.filter((blog)=>{
     
       if(selectedAuthor){
           return selectedAuthor===blog?.author
       }

       if(activeCategory==='All Blogs'){
          return true;
       }

       return blog?.domain===activeCategory;
    });
    
    setTotalBlogs( Math.ceil((filterBlogs.length) / 12))
    console.log(filterBlogs)
    
    setCurrBlogs(filterBlogs.slice((start-1),end));
  },[blogs,page, activeCategory, selectedAuthor])



  return (


    <section className="py-16 relative">


    

      <div className="mx-auto w-full px-6">
        {/* BreadCrumb */}
        <nav className="text-sm text-gray-400 mb-6 pl-20  bg-white max-w-sm -mt-9">
            <Link href="/" className="hover:text-blue-500 transition">
            Home
            </Link>
            <span className="mx-2">/</span>
            <Link href={"/blog"} className="text-gray-600 font-medium ">
              Blogs
            </Link>
        </nav>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 pl-20 mb-8">
          {/* Categories */}
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setSelectedAuthor("");
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition shadow-sm cursor-pointer
                ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-blue-100"
                }
              `}
            >
              {cat}
            </button>
          ))}

          {/* Author Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowAuthorDropdown(!showAuthorDropdown)}
              className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 hover:bg-blue-100 text-sm font-medium flex items-center gap-1 cursor-pointer"
            >
              By   {selectedAuthor ? ` ${selectedAuthor} `   : "Author"}  
              <span className={`text-xs transition-transform duration-300 ${showAuthorDropdown ? 'rotate-0' : '-rotate-180'}`}>▼</span>
            </button>

            {showAuthorDropdown && (
              <div className="absolute left-0 mt-2 w-44 bg-white shadow-lg rounded-xl border border-blue-300 z-20 cursor-pointer">
                {authors.map((author) => (
                  <button
                    key={author}
                    onClick={() => {
                      setSelectedAuthor(author);
                      setShowAuthorDropdown(false);
                      setActiveCategory("All Blogs");
                    }}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-blue-50 cursor-pointer"
                  >
                    {author}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>




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