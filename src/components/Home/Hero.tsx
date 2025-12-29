"use client"
import { supabase } from "@/lib/supabse/supabaseConfig";
import Image from "next/image";
import { title } from "process";
import { useEffect, useState } from "react";
import { Send } from "lucide-react";
import PopUpForm from "../AllCourses/PopUpForm";


const Hero = () => {
  
  const [isOpen , setIsOpen] = useState(false);

  return (
    <>
    <PopUpForm isOpen={isOpen} onCancel={()=>setIsOpen(false)} onConfirm={()=>setIsOpen(false)}/>
    <section
      className="
        w-full hidden md:block
        bg-linear-to-r from-[#1C336E] to-[#3d5ba9]
        text-white
        px-10 sm:px-6 md:px-12 lg:px-20
        pt-14 pb-3
        xl:h-[58vh]
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
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            India&apos;s <span className="text-yellow-400">#1 platform</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-lg mb-8 sm:mb-10 lg:ml-5">
            Best Digital Marketing Institute in Delhi NCR
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
                pointer-events-auto
                cursor-pointer
              "
              onClick={()=>setIsOpen(true)}
            >
              {/* <Image
                src="/images/Home/googleLogo.png"
                width={50}
                height={20}
                alt="google"
              /> */}
              <Send fill="#ffffff" className="text-gray-300" size={22}/>
              <span className="cursor-pointer" onClick={()=>setIsOpen(true )}>Let's connect</span>
            </button>

            <button
              className="
                flex items-center justify-center gap-2
                bg-blue-500 pl-3
                pr-10 py-2.5
                rounded-full
                cursor-pointer
                font-medium
                w-full sm:w-auto
                hover:bg-[#060646]
                transition
                
              "
            >
              <Image
                src="/images/Home/GmailLogo.webp"
                width={36}
                height={20}
                alt="email"
                className="rounded-full"
              />
              <span>Continue with Email</span>
            </button>
          </div>

          <p className="text-xs sm:text-sm mt-4">
            By continuing, you agree to our{" "}
            <span className="underline cursor-pointer">T&amp;C</span>.
          </p>
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
      <h1 className="text-3xl font-bold mb-4">
        India&apos;s <span className="text-yellow-400">#1 platform</span>
      </h1>
      <p className="text-base">
        Best Digital Marketing Institute in Delhi NCR
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

    <div className="flex flex-col gap-4">
      <button className="flex items-center justify-center gap-3 bg-[#e6ba2b] text-gray-800 px-6 py-3 rounded-full">
        <Image src="/images/Home/googleLogo.png" width={40} height={20} alt="google" />
        Continue with Google
      </button>

      <button className="flex items-center justify-center gap-3 bg-blue-500 px-6 py-3 rounded-full">
        <Image src="/images/Home/GmailLogo.webp" width={32} height={20} alt="email" />
        Continue with Email
      </button>
    </div>

    <p className="text-xs text-center mt-6 opacity-90">
      By continuing, you agree to our <span className="underline">T&amp;C</span>.
  </p>
  </section>

    </>
    

  );
};

export default Hero;
