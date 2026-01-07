"use client";

import { ChevronDown, CircleQuestionMark } from "lucide-react";
import Image from "next/image";
import  {useState } from "react";

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

function Faq({ courses }: { courses: Course }) {

  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  

  return (
    <>
    
      <section className="w-full bg-[#dceefa] py-12">

        <div className="w-full text-center mb-5">
          <h2 className="relative inline-block font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-16 text-black">
           FAQs : Frequently Asked Questions
            <svg
              className="absolute left-0 -bottom-16 w-full"
              viewBox="0 0 300 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 15 C 60 5, 240 5, 295 15"
                stroke="#2BB0FF"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </h2>
        </div>

        <div className="flex w-full">
          <div className="w-[40%] h-[60vh] hidden lg:block">
            <Image src="/images/Home/FAQIMAGE.png" height={850} width={800} alt="Testimonials Section Image" />
          </div>


          <div className="w-full md:w-[60%] mx-auto md:px-4 px-8">
            <div className="flex flex-col gap-4">
              {courses?.FAQ.map((data, index) => {
                const isOpen = currentIndex === index;
                // xl:px-5 xl:py-4 
                return (
                  <div key={index} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden transition-all">
                    {/* Question */}
                    <button className="w-full flex justify-between items-center text-left xl:px-4 xl:py-3  p-2 font-medium text-gray-800 hover:bg-sky-50 transition  duration-300 cursor-pointer"
                      onClick={() =>
                        setCurrentIndex(isOpen ? null : index)
                      }>

                      <span className={`text-sm md:text-sm lg:text-md xl:text-md font-semibold transition-colors duration-300 ease-in-out
                    ${isOpen ? "text-[#47b2e4]" : "text-[#37517e]"}`}><CircleQuestionMark className={`inline-block mr-2 w-5 `} />{data.question}</span>
                      {/* <span  className={`text-sky-500 text-xl transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}>
                    +
                  </span> */}

                      <ChevronDown className={` sm:w-5 sm:h-5 md:w-6 md:h-6 xl:w-5 xl:h-5 transition-transform duration-300 ease-linear
                    ${isOpen ? "rotate-180 text-[#47b2e4]" : "rotate-0 text-[#37517e]"}`} />




                    </button>

                    {/* Answer */}
                    <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>

                      <div className="overflow-hidden">
                        <p className=" pb-4 text-gray-600 leading-relaxed text-sm md:text-md lg:text-lg xl:px-4 xl:py-3  p-2 font">
                          {data.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default Faq;
