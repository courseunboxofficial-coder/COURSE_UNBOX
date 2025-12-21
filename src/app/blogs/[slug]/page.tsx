"use client";
import Image from "next/image";
import React, { useState } from "react";
import Navbar from "@/components/Home/Navbar";
import Foter from "@/components/Home/Footer"
import LetsConnect from "@/components/blog/LetsConnect";
import Link from "next/link";
import FinalMasterclassForm from "@/components/About/FinalMasterclassForm";

const Page = ()=> {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const FAQs = [
    {
      question: "How long does it take to master DSA?",
      answer:
        "Mastering DSA depends on consistency. With daily practice, most learners take 6–9 months to become confident.",
    },
  ];

  const blogs = [
    {
      slug: "learn-javascript-basics",
      title: "JavaScript Basics Every Student Must Know",
      excerpt:
        "Understand variables, loops, functions, and how JavaScript works under the hood.",
      image: "https://tutedude.com/blogs/wp-content/uploads/elementor/thumbs/Dom-in-javascript-rb5eekfneh6pas4jil307kuhqwuxfssuf28g9eae4s.webp",
    },
    {
      slug: "how-to-learn-react",
      title: "How to Learn React the Right Way",
      excerpt:
        "A structured roadmap to learn React efficiently without getting overwhelmed.",
      image: "https://tutedude.com/blogs/wp-content/uploads/elementor/thumbs/Dom-in-javascript-rb5eekfneh6pas4jil307kuhqwuxfssuf28g9eae4s.webp",
    },
    {
      slug: "study-tips-for-developers",
      title: "Study Tips for Computer Science Students",
      excerpt:
        "Proven techniques to stay consistent and productive while learning coding.",
      image: "https://tutedude.com/blogs/wp-content/uploads/elementor/thumbs/Dom-in-javascript-rb5eekfneh6pas4jil307kuhqwuxfssuf28g9eae4s.webp",
    },
  ];

  return (
    <>
    <Navbar/>
    <div className="w-full min-h-screen bg-slate-50">
      {/* ===== BLOG HEADER ===== */}
     <section className="max-w-5xl mx-auto px-4 pt-16">
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
      <section className="max-w-5xl mx-auto px-4 mt-10">
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
       
      <div className="max-w-5xl mx-auto flex justify-center py-10">
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
      <section className="max-w-5xl mx-auto px-4 mt-12">
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
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="max-w-5xl mx-auto px-4 mt-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {FAQs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="font-medium text-slate-800">
                  {faq.question}
                </span>
                <span className="text-blue-600">
                  {openFAQ === idx ? "−" : "+"}
                </span>
              </button>

              {openFAQ === idx && (
                <p className="mt-3 text-sm text-slate-600 leading-relaxed animate-fadeIn">
                  {faq.answer}
                </p>
              )}

            </div>
          ))}
        </div>
      </section>

      {/* ===== RELATED BLOGS ===== */}
      <section className="max-w-6xl mx-auto px-4 mt-20 pb-20">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">
          Related Articles
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border-gray-200 shadow-lg  overflow-hidden
                         transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative h-40">
                <img
                  src={blog.image}
                  alt={blog.title}
                  
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="inset-0 bg-linear-to-bl bg-gray-300 mt-4 h-0.5"></div>

              <div className="p-5">
                <h3 className="font-bold text-slate-900 leading-snug">
                  {blog.title}
                </h3>

                <p className="mt-2 text-sm text-slate-600 line-clamp-3">
                  {blog.excerpt}
                </p>

                <span className="inline-block mt-4 text-sm font-medium text-blue-600">
                  Read more →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="form"><FinalMasterclassForm/></section>
    </div>
    <Foter/>
    </>
    
  );
};

export default Page;
