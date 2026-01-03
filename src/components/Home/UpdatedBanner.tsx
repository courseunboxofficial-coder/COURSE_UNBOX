"use client"
import React from "react";
import { NotepadText, Award , GraduationCap , IndianRupee } from "lucide-react";
import CountUp from 'react-countup';

export const UpdatedBanner = () => {
  const stats = [
    {
      icon: <NotepadText size={52} color="#d18800"  />,
      value: 40,
      prefix:"",
      suffix : "+",
      text: "Courses",
    },
    {
      icon: <GraduationCap size={52} color="#d18800" />,
      value: 100,
      suffix: "k+",
      prefix : "",
      text: "Students",
    },
    {
      icon: <Award  size={52} color="#d18800"  />,
      value: 12,
      prefix:"",
      suffix : "+",
      text: "Experience",
    },
    {
      icon: <IndianRupee size={52} color="#d18800" />,
      value: 450000,
      prefix:"INR ",
      text: " Average salary",
      suffix: "+"
    },
   ];

  return (
    <section className=" px-3 sm:px-6 md:px-20 py-4  bg-linear-to-r from-[rgb(28,51,110)] to-[#3d5ba9] ">
      <div className="max-w-2xl md:max-w-3xl lg:max-w-5xl mx-auto bg-white rounded-xl md:flex grid grid-cols-1 sm:grid-cols-2  px-6 md:px-0  lg:flex-row md:justify-around justify-center  items-center text-black py-6 gap-6">

         
          {
            stats.map((item,idx)=>{

                return (<React.Fragment key={idx}>
                     <div className="flex items-center gap-2  rounded-lg md:rounded-0 p-4 md:p-0 justify-center md:justify-normal">
                            {item.icon}
                            <div>
                            <p className="text-lg sm:text-2xl font-bold">
                                <CountUp suffix={item.suffix} end={item.value} prefix={item.prefix}/>
                            </p>
                            <p className="text-xs sm:text-sm text-gray-700">
                                {item.text}
                            </p>

                           </div>
                     </div>
                    {idx<=2 && <div className="hidden md:block bg-linear-to-br from-yellow-100 via-yellow-400 to-amber-100 h-12 w-0.5"/>}
                   </React.Fragment>
             )

            })
          }
          

     </div>

    </section>
  );
};


