"use client"
import { Clock ,User } from "lucide-react";
import { useState } from "react";
export default function RecommendedCourse(){
    
    const [visible , setVisible] = useState(3);
    
      const courses = [
    {
      title: "Full Stack Web Development",
      description: "Learn MERN stack from scratch to advanced level.",
    },
    {
      title: "Data Structures & Algorithms",
      description: "Crack coding interviews with strong DSA fundamentals.",
    },
    {
      title: "React & Next.js Mastery",
      description: "Build scalable, production-ready frontend apps.",
    },
    {
      title: "Backend with Node.js",
      description: "APIs, authentication, databases, and scaling.",
    },
  ];
    return (
       <section className="py-16 px-12">
      {/* Heading */}
      <h2 className="font-bold text-3xl sm:text-4xl text-[#025378] ">
         Recommended Course
      </h2>

      <div className="flex gap-2 text-gray-800  my-6 px-4 ">

        <button className="py-1 px-3 rounded-2xl border border-gray-400 text-sm">Paid</button>
        <button className="py-1 px-3 rounded-2xl border border-gray-400 text-sm">Free</button>

      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 ">
        {courses.slice(0,visible).map((course, idx) => (
          <div
            key={idx}
            className="
                group bg-white rounded-2xl shadow-md border border-gray-200
                hover:shadow-xl transition-all duration-300 overflow-hidden
                w-full max-w-sm
            "
            >
            {/* IMAGE SECTION */}
            <div className="relative h-44 w-full overflow-hidden">
                <img
                src="https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/0b01b98d-1711-4869-8cc6-fcda02ab7a51.jpeg"
                alt={course.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                {/* Optional overlay */}
                <div className="absolute inset-0 bg-black/10"></div>
            </div>

            {/* CONTENT */}
            <div className="p-5 space-y-3">
                {/* Title */}
                <h3 className="font-semibold text-lg text-gray-900 leading-snug line-clamp-2">
                {course.title}
                </h3>

                {/* Meta info */}
                <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                    <Clock size={18}/>                    
                    <span>8 months</span>
                </div>

                <div className="flex items-center gap-1">
                   <User size={18}/>
                  
                 
                    <span>500+ Enrolled</span>
                </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gray-200"></div>

                {/* CTA */}
                <button
                className="
                    w-full mt-2 py-2.5 rounded-lg font-semibold
                    text-[#025378] border border-[#025378]
                    hover:bg-[#025378] hover:text-white
                    transition
                "
                >
                Explore Course
                </button>
            </div>
       </div>
        ))}
      </div>

      <div className="flex justify-center my-10">

       { ((courses.length - visible) > 0) ?
            <button
             className="bg-white
                       text-blue-600
                         py-2 px-4 border
                         rounded-lg cursor-pointer
                       hover:bg-blue-500
                        hover:text-white"
                        onClick={()=>setVisible((prev)=>prev + 3)}
                        >
                    View More
            </button>
            :

            <button
             className="bg-white 
                        text-blue-600 py-2 px-4 
                        border rounded-lg
                        cursor-pointer 
                      hover:bg-blue-500
                       hover:text-white"
                       onClick={()=>setVisible((prev)=>prev-3)}
                       >
                    View Less
            </button>

        }  

      </div>

     
    </section>
    )
}