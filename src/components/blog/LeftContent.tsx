import Link from "next/link"

export default function LeftContent(){
    return ( <article>
              {/* ===== BLOG HEADER ===== */}
              <section className="px-4 pt-16">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-50 text-blue-600">
                      Database • SQL
                    </span>
                    <span className="text-xs text-slate-500">8 min read</span>
                  </div>

                  <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                    Top SQL Queries Every Data Scientist Should Know
                  </h1>

                  {/* Gradient underline */}
                  <div className="mt-3 h-1 w-24 bg-linear-to-r from-blue-500 via-indigo-500 to-transparent rounded-full"></div>

                  <p className="mt-4 text-sm text-slate-600">
                    By <span className="font-medium text-slate-800">Rohit Juyal</span> · Jun 28,
                    2025
                  </p>
              </section>

                {/* ===== FEATURE IMAGE ===== */}
                <section className="px-4 mt-10">
                  <div className="group relative w-full h-[380px] rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src="https://www.techicy.com/wp-content/uploads/2018/10/qualities-of-an-excellent-tech-blog.jpg"
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
                      SQL is one of the most important skills for any data scientist.
                      Whether you are preparing for interviews or working on real-world
                      data, mastering SQL queries is essential.
                    </p>

                    <p>
                      In this article, we will cover the most frequently used SQL queries
                      that every data scientist should know.
                    </p>

                    <p>Introduction

                   SQL is one of the most important skills for any data scientist. 
                   Whether you are preparing for interviews, analyzing real-world datasets,
                    or building dashboards, SQL plays a crucial role in extracting meaningful insights from data.

                   Even with the rise of Python and machine learning tools, SQL remains the backbone of data work because almost all structured data lives in databases.
                    In this article, we will explore some of the most commonly used SQL queries that every data scientist should know and understand deeply.</p>
                  </div>
                </section>
          </article>)
}