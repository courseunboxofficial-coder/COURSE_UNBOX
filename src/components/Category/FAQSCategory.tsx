"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";


export default function FAQs({category} : any) {

  const [openIndex, setOpenIndex] = useState<number | null>(-1);

  return (
    
    <section className="w-full px-4 py-16">
      
      {/* Heading */}
      <div className="mb-18 text-center relative">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          Frequently Asked <span className="text-blue-600">Questions</span>
        </h2>
        

        <svg
              className="absolute left-90 -bottom-7 sm:top-8 w-3xl hidden lg:block"
              viewBox="0 0 300 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 15 C 60 5, 240 5, 295 15"
                stroke="#2BB0FF"
                strokeWidth="1.9"
                strokeLinecap="round"
              />
            </svg>
      </div>

      {/* FAQ List */}
      <div className="flex gap-5 ">
        <div className="w-[40%] h-[80vh]  hidden lg:block ">
             <Image src="/images/Home/FAQIMAGE.png" height={850} width={800} alt="Testimonials Section Image" />
          </div>

        <div className="space-y-4 lg:w-[60%] w-[80%] px-6 mx-auto">
        {category.FAQ.map((faq : any, index : number) => {

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
                    transition-transform duration-300
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

      </div>
      
    </section>
  );
}
