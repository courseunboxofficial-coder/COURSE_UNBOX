"use client";

import { ChevronDown, CircleQuestionMark } from "lucide-react";
import React, { useState } from "react";

let questions = [
  {
    ques:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, dolores porro aut eligendi saepe illum?",
    ans:
      "Lorem answer - 1  ipsum dolor sit amet consectetur adipisicing elit. Perferendis fugit fugiat illo, debitis qui consequatur dignissimos. Suscipit beatae doloremque esse in necessitatibus saepe. Ratione, fuga.",
  },
  {
    ques:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, dolores porro aut eligendi saepe illum?",
    ans:
      "Lorem answer - 2 ipsum dolor sit amet consectetur adipisicing elit. Perferendis fugit fugiat illo, debitis qui consequatur dignissimos. Suscipit beatae doloremque esse in necessitatibus saepe. Ratione, fuga.",
  },
  {
    ques:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, dolores porro aut eligendi saepe illum?",
    ans:
      "Lorem answer - 3 ipsum dolor sit amet consectetur adipisicing elit. Perferendis fugit fugiat illo, debitis qui consequatur dignissimos. Suscipit beatae doloremque esse in necessitatibus saepe. Ratione, fuga.",
  },
  {
    ques:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, dolores porro aut eligendi saepe illum?",
    ans:
      "Lorem answer - 4 ipsum dolor sit amet consectetur adipisicing elit. Perferendis fugit fugiat illo, debitis qui consequatur dignissimos. Suscipit beatae doloremque esse in necessitatibus saepe. Ratione, fuga.",
  },
  {
    ques:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, dolores porro aut eligendi saepe illum?",
    ans:
      "Lorem answer - 5 ipsum dolor sit amet consectetur adipisicing elit. Perferendis fugit fugiat illo, debitis qui consequatur dignissimos. Suscipit beatae doloremque esse in necessitatibus saepe. Ratione, fuga.",
  },
  {
    ques:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, dolores porro aut eligendi saepe illum?",
    ans:
      "Lorem answer - 6 ipsum dolor sit amet consectetur adipisicing elit. Perferendis fugit fugiat illo, debitis qui consequatur dignissimos. Suscipit beatae doloremque esse in necessitatibus saepe. Ratione, fuga.",
  },
];

function Faq() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#F5F6F8] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col gap-4">
          {questions.map((data, index) => {
            const isOpen = currentIndex === index;
// xl:px-5 xl:py-4 
            return (
              <div key={index} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden transition-all">
                {/* Question */}
                <button className="w-full flex justify-between items-center text-left xl:px-4 xl:py-3  p-2 font-medium text-gray-800 hover:bg-sky-50 transition  duration-300 cursor-pointer"
                   onClick={() =>
                    setCurrentIndex(isOpen ? null : index)
                  }>
                  
                  <span className={`text-sm md:text-md lg:text-lg xl:text-lg font-semibold transition-colors duration-300 ease-in-out
                    ${isOpen ? "text-[#47b2e4]" : "text-[#37517e]"}`}><CircleQuestionMark  className={`inline-block mr-2 w-5 `}/>{data.ques}</span>
                  {/* <span  className={`text-sky-500 text-xl transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}>
                    +
                  </span> */}
                  
                  <ChevronDown className={`w-12 h-12 sm:w-5 sm:h-5 md:w-6 md:h-6 xl:w-5 xl:h-5 transition-transform duration-300 ease-linear
                    ${isOpen ? "rotate-180 text-[#47b2e4]" : "rotate-0 text-[#37517e]"}`}/>
 



                </button>

                {/* Answer */}
                 <div className={`grid transition-all duration-300 ease-in-out ${
                    isOpen  ? "grid-rows-[1fr] opacity-100": "grid-rows-[0fr] opacity-0"}`}> 
  
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
    </section>
  );
}

export default Faq;
