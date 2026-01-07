"use client";

import React, { useState } from "react";
import PopUpForm from "../AllCourses/PopUpForm";

const LetsConnect = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
     
      <section
        className="
          relative 
          w-full 
          min-h-[150px] sm:min-h-[140px] md:min-h-[162px] lg:min-h-[170px]
          flex items-center
          rounded-b-4xl sm:rounded-b-full
          overflow-hidden
        "
        style={{
          backgroundImage: "url('/images/Blog/letsConnect.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
      
        <div className="hidden sm:block absolute inset-0 bg-linear-to-r from-blue-[900/90] via-blue-900/70 to-blue-900/30" />
        <div className="block sm:hidden absolute inset-0 bg-linear-to-r from-[#6493cc] via-[#538ed6] to-[#6493cc]" />

        <div className="
          relative z-10 
          w-full max-w-7xl mx-auto
          px-4 sm:px-36 md:px-26 lg:px-20 xl:px-6
        ">
          <div className="
            flex flex-col 
            sm:flex-row lg:flex-row
            items-start sm:items-center
            justify-between
            gap-4 sm:gap-5
            text-center sm:text-left
          ">
            
            {/* LEFT TEXT */}
            <div className="max-w-full sm:max-w-xl text-white">
              <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-extrabold leading-tight">
                Let’s Build Your Career Together
              </h2>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-blue-100">
                Have questions about our courses or career guidance?  
                Our experts are ready to help.
              </p>
            </div>

            {/* RIGHT BUTTON */}
            <button
              onClick={() => setIsOpen(true)}
              className="
                w-full sm:w-auto
                mt-2 sm:mt-0
                px-4 py-3
                sm:px-9 sm:py-5
                bg-yellow-500 hover:bg-yellow-600
                text-blue-900
                font-bold
                rounded-full
                shadow-md
                transition
                text-sm
                cursor-pointer
                active:scale-95
              "
            >
              Let’s Connect
            </button>
          </div>
        </div>
      </section>

      <PopUpForm
        isOpen={isOpen}
        onCancel={() => setIsOpen(false)}
        onConfirm={() => setIsOpen(false)}
      />
    </>
  );
};

export default LetsConnect;
