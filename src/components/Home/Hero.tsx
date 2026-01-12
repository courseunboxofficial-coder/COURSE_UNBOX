"use client"


import Image from "next/image";
import {useState } from "react";
import { Send, FileText } from "lucide-react";
import PopUpForm from "../AllCourses/PopUpForm";


const Hero = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isBrochure , setIsBrochure] = useState(false);

  const handleDownload = ()=>{
    const link  =  document.createElement('a');
    link.href = '/Course Unbox Brochure.pdf';
    link.download = 'Course Unbox Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
   
  }

  return (
    <>
     {!isBrochure && <PopUpForm isOpen={isOpen} onCancel={() => setIsOpen(false)} onConfirm={() => setIsOpen(false)} />}
     {isBrochure &&  <PopUpForm isOpen={isOpen} onCancel={() => {setIsOpen(false); setIsBrochure(false)}} onConfirm={() => {setIsOpen(false); handleDownload(); setIsBrochure(false)}} /> }
        
      <section
        className="
        w-full hidden md:block
        bg-linear-to-r from-[#1C336E] to-[#3d5ba9]
        text-white
        px-10 sm:px-6 md:px-12 lg:px-20
        pt-14 pb-3
        xl:h-[62vh]
        2xl:h-[58vh]
      "
      >



        <div
          className="
          w-[95%] mx-auto
          flex flex-row
          items-center
          gap-10 md:gap-15 lg:gap-20
        "
        >
          {/* LEFT CONTENT */}
          <div className="w-[50%] text-center content-center lg:text-left">
            <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Best Digital Marketing Institute <span className="text-yellow-400">In Delhi NCR</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-lg mb-8 sm:mb-10 lg:ml-5">
             India’s No.1 AI & Digital Marketing Institution — Get Industry-Recognized Certification by Amazon & Flipkart
            </p>
            



            {/* CTA BUTTONS */}
            <div className="flex flex-col xl:flex-row gap-4 sm:gap-6">
              <button
                className="
                flex items-center justify-center gap-2
                bg-[#e6ba2b] text-white
                pl-3
                pr-7
                px-5 py-2.5
                rounded-full
                font-medium
                w-full sm:w-auto
                hover:bg-[#b9b940]
                transition
                z-99
                cursor-pointer
              "
                onClick={() => setIsOpen(true)}
              >
                <Send fill="#ffffff" className="text-gray-300" size={24} />
                <span className="cursor-pointer" onClick={() => setIsOpen(true)}>Let's connect</span>
              </button>

              <button
                className="
                flex items-center justify-center gap-2
                bg-blue-500 pl-3
                pr-10 py-4
                rounded-full
                cursor-pointer
                font-medium
                w-full sm:w-auto
                hover:bg-[#060646]
                transition
                z-99
                
              "
              onClick={()=>{setIsOpen(true); setIsBrochure(true)}}
                
              >
                 
                <FileText size={24} />
                <span>Download Brochure</span>
              </button>
            </div>

            
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-[40%] ">
            <Image
              src="/images/Home/Hero1.png"
              width={520}
              height={520}
              alt="HeroImage"
              className="w-full  rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-indigo-300 transition cursor-pointer"
            />
          </div>

        </div>


      </section>


      {/* MOBILE / SMALL SCREENS */}
      <section
        className="
            md:hidden
            w-full
            bg-linear-to-r from-[#1C336E] to-[#3d5ba9]
            text-white
            px-4 py-16
          "
      >

        <div className="text-center mb-12">
          <h1 className="text-2xl font-bold mb-4">
            Best Digital Marketing Institute <span className="text-yellow-400">In Delhi NCR</span>
          </h1>
          <p className="text-base">
            Indias no.1 Ai/Digital Marketing Institution
          </p>
        </div>

        <div className="flex justify-center  mb-12">
          <Image
            src="/images/Home/Hero1.png"
            width={380}
            height={380}
            alt="Hero"
            className="rounded-2xl shadow-lg"
          />
        </div>

        <div className="flex flex-col xl:flex-row gap-4 sm:gap-6">
          <button
            className="
                flex items-center justify-center gap-2
                bg-[#e6ba2b] text-white
                pl-3
                pr-7
                px-5 py-2.5
                rounded-full
                font-medium
                w-full sm:w-auto
                hover:bg-[#b9b940]
                transition
                z-99
                cursor-pointer
              "
            onClick={() => setIsOpen(true)}
          >
            <Send fill="#ffffff" className="text-gray-300" size={24} />
            <span className="cursor-pointer" onClick={() => setIsOpen(true)}>Let's connect</span>
          </button>

          <a
            className="
                flex items-center justify-center gap-2
                bg-blue-500 pl-3
                pr-10 py-4
                rounded-full
                cursor-pointer
                font-medium
                w-full sm:w-auto
                hover:bg-[#060646]
                transition
                z-99
                
              "
            href="/brochure.pdf"
            download
          >
            {/* <Image
                src="/images/Home/GmailLogo.webp"
                width={36}
                height={20}
                alt="email"
                className="rounded-full"
              /> */}
            <FileText size={24} />
            <span>Download Brochure</span>
          </a>
        </div>
      </section>

    </>


  );
};

export default Hero;