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
          min-h-[130px] sm:min-h-[140px] md:min-h-[162px] lg:min-h-[170px]
          flex items-center
          rounded-b-full sm:rounded-b-full
          overflow-hidden
        "
        style={{
          backgroundImage: "url('/images/Blog/letsConnect.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/70 to-blue-900/30" />

     
        <div className="relative z-10 max-w-7xl mx-auto w-full px-20  sm:px-36 md:px-26 lg:px-20 xl:px-6">
          <div className="flex flex-col lg:flex-row  items-start sm:items-center justify-between gap-5">
            
            {/* LEFT TEXT */}
            <div className="max-w-xl text-white">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold leading-tight mt-3 sm:mt-0">
                Let’s Build Your Career Together
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-blue-100">
                Have questions about our courses or career guidance?  
                Our experts are ready to help.
              </p>
            </div>

            {/* RIGHT BUTTON */}
            <button
              onClick={() => setIsOpen(true)}
              className="
                w-full  sm:mx-20 md:w-auto
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
