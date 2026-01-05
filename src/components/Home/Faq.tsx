"use client";

import { ChevronDown, CircleQuestionMark } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

let faqs =[
  {
    ques: "Which is the best Digital Marketing Institute in Delhi NCR for practical learning?",
    ans: "The best Digital Marketing Institute in Delhi NCR is one that focuses on hands-on training, real-world projects, updated tools, and career support—not just theory. Institutes like Course Unbox emphasize live projects, industry tools, and mentor-led learning to help students become job-ready rather than just certified."
  },
  {
    ques: "What skills should I learn from a Digital Marketing course in Delhi NCR?",
    ans: "A good Digital Marketing course in Delhi NCR should cover SEO, Google Ads and performance marketing, social media marketing, content marketing, email marketing, web analytics, and real campaign optimization. Practical exposure to tools like Google Analytics, Search Console, and paid ad platforms is essential for real career growth."
  },
  {
    ques: "Is Digital Marketing a good career option in Delhi NCR?",
    ans: "Yes, digital marketing is a strong career choice in Delhi NCR due to the region’s high concentration of startups, agencies, and corporate businesses. Skilled digital marketers are in demand for roles like SEO specialist, performance marketer, social media manager, and content strategist, with opportunities for both full-time jobs and freelancing."
  },
  {
    ques: "How much does a Digital Marketing course cost in Delhi NCR?",
    ans: "The fees for a Digital Marketing course in Delhi NCR vary depending on course depth, duration, tools access, and placement support. Instead of choosing a course based only on price, learners should compare curriculum quality, live projects, trainer experience, and post-course career guidance. Course Unbox offers transparent pricing with industry-aligned training and practical exposure."
  },
  {
    ques: "Does Course Unbox provide placement support after Digital Marketing training?",
    ans: "Yes, Course Unbox provides structured placement and career support, including resume building, interview preparation, portfolio guidance, and job referrals based on skill performance. The focus is on helping learners transition confidently into real digital marketing roles."
  },
  {
    ques: "Who should join a Digital Marketing Institute in Delhi NCR?",
    ans: "A Digital Marketing Institute in Delhi NCR is suitable for students, working professionals, career switchers, freelancers, and business owners. No prior technical background is required—only the willingness to learn, practice, and adapt. Structured institutes like Course Unbox make the learning process easier through guided mentorship and practical training."
  }
]

function Faq() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  return (
    <>
    
      <section className="w-full bg-[#f5fbff] py-12">

        <div className="w-full text-center mb-5">
          <h2 className="relative inline-block font-extrabold text-3xl md:text-4xl lg:text-5xl mb-16 ">
           FAQs : Digital Marketing Institute in Delhi NCR
            <svg
              className="absolute left-0 -bottom-7 sm:-bottom-16 w-full"
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
              {faqs.map((data, index) => {
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
                    ${isOpen ? "text-[#47b2e4]" : "text-[#37517e]"}`}><CircleQuestionMark className={`inline-block mr-2 w-5 `} />{data.ques}</span>
                      {/* <span  className={`text-sky-500 text-xl transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}>
                    +
                  </span> */}

                      <ChevronDown className={`w-12 h-12 sm:w-5 sm:h-5 md:w-6 md:h-6 xl:w-5 xl:h-5 transition-transform duration-300 ease-linear
                    ${isOpen ? "rotate-180 text-[#47b2e4]" : "rotate-0 text-[#37517e]"}`} />




                    </button>

                    {/* Answer */}
                    <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>

                      <div className="overflow-hidden">
                        <p className=" pb-4 text-gray-600 leading-relaxed text-sm md:text-md lg:text-lg xl:px-4 xl:py-3  p-2 font">
                          {data.ans}
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
