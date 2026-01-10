"use client"
import React from "react";
import { Home } from "lucide-react";
import { IndianRupee , NotepadText, GraduationCap, Award } from "lucide-react";
import CountUp from "./CountUp";
import { useState }  from "react";
import emailjs from "@emailjs/browser";




export default function CategoryHero({ categories }: any) {

      const stats = [
    {
      icon: <NotepadText  className=" text-[#d18800]
                                        w-8 h-8
                                        sm:w-10 sm:h-10
                                        md:w-12 md:h-12
                                        lg:w-14 lg:h-14
                                        "  />,
      value: 40,
      prefix:"",
      suffix : "+",
      text: "Courses",
    },
    {
      icon: <GraduationCap  className="text-[#d18800]
                                    w-7 h-7
                                    xs:w-8 xs:h-8
                                    sm:w-10 sm:h-10
                                    md:w-12 md:h-12
                                  " />,
      value: 100,
      suffix: "k+",
      prefix : "",
      text: "Students",
    },
    {
      icon: <Award   className="text-[#d18800]
                              w-7 h-7
                              xs:w-8 xs:h-8
                              sm:w-10 sm:h-10
                              md:w-12 md:h-12
                            "  />,
      value: 12,
      prefix:"",
      suffix : "+",
      text: "Experience",
    },
    {
      icon: <IndianRupee  className="text-[#d18800]
                                w-7 h-7
                                xs:w-8 xs:h-8
                                sm:w-10 sm:h-10
                                md:w-12 md:h-12
                              " />,
      value: 450000,
      prefix:"",
      text: " Average salary",
      suffix: "+"
    },
      ];
      const [expanded , setExpanded] = useState(false);
      const [fullName, setFullName] = useState("");
      const [phone, setPhone] = useState("");
      const [email, setEmail] = useState("");


      const handleSubmit = (e:React.FormEvent)=>{
          e.preventDefault();
          const template = {
            name: `${fullName}`,
            email: email,
            phone: phone,
          };
     
        
        emailjs
          .send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            template,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
          )
          .then(() => {
            alert("Message sent successfully!");
            setFullName("");
            setEmail("");
            setPhone("");
          })
          .catch((error) => {
            console.error(error);
            alert("Failed to send message");
          });
      }


      
  return (
    <section className="relative  overflow-hidden bg-linear-to-r from-[#182848] to-[#4b6cb7] text-white">
      
      {/* background shapes */}
      <div className="absolute -top-32 -left-32 w-[420px] md:w-[520px] h-[420px] md:h-[520px] bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[320px] md:w-[420px] h-80 md:h-[420px] bg-black/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-10  grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div className="text-left lg:text-left">
          <div className="flex justify-start gap-2 text-sm text-white/80 mb-5">
            <Home size={18} />
            <span>/ Data Science & Analytics</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            Data Science and <br className="hidden sm:block" />
            Analytics Courses
          </h1>

         <p className="mt-5 text-base sm:text-lg text-white/80 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Learn statistical analysis, data visualization, and data mining from
            industry experts. Gain hands-on experience through real-world
            projects and case studies.

            {expanded && (
              <>
                <span className="block mt-3">
                  Our curriculum is designed to bridge theory and practice, helping
                  learners build job-ready skills through industry-relevant tools,
                  practical assignments, and guided mentorship.
                </span>
              </>
            )}
          </p>

          <button onClick={()=>setExpanded(!expanded)} className="mt-5 text-blue-200 underline underline-offset-4 hover:text-white transition cursor-pointer">
            {expanded ? "Read Less" : "Read More"}
          </button>

          {/* Partners */}
          <div className="mt-10">
                <p className="text-lg font-semibold mb-4">
                    Our learners get placed at
                </p>

                <div className="flex flex-wrap items-center gap-4">
                    {["Samsung", "xTo10x", "Haptik", "+250 more hiring partners"].map(
                        (company) => (
                            <div
                                key={company}
                                className="bg-white/15 px-5 py-2 rounded-lg text-sm font-medium"
                            >
                                {company}
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>

        {/* RIGHT FORM CARD */}
        <div className="bg-white text-black rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 max-w-md w-full mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">
            Secure Your Free Spot!
          </h2>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              required
              value={fullName}
              onChange={(e)=>setFullName(e.target.value)}
              type="text"
              placeholder="Full Name*"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <div className="flex gap-3">
              <select className="px-3 py-3 rounded-lg border border-gray-300 focus:outline-none">
                <option>+91 IN</option>
              </select>

              <input
                required
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
                type="tel"
                placeholder="Mobile Number*"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <input
              required
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <label className="flex items-start gap-2 text-sm text-gray-600">
              <input  type="checkbox" className="mt-1" required />
              <span>
                I agree to the{" "}
                <a className="text-indigo-600 underline cursor-pointer">
                  Terms & Conditions
                </a>
              </span>
            </label>

            <button
              type="submit"
              className="w-full mt-4 py-4 rounded-xl bg-yellow-600 text-white font-semibold text-lg hover:bg-yellow-700 transition cursor-pointer"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-2xl md:max-w-3xl lg:max-w-5xl mx-auto bg-white rounded-xl md:flex grid grid-cols-2  px-6 md:px-0  lg:flex-row md:justify-around justify-center 
       items-center text-black py-6 gap-5 sm:gap-6 divide-x md:divide-x-0 md:divide-y-0 divide-y divide-blue-300 mb-4">

         
          {
            stats.map((item,idx)=>{

                return (<React.Fragment key={idx}>
                     <div className="flex items-center gap-2  rounded-lg md:rounded-0 p-4 md:p-0 justify-center md:justify-normal  border-r-blue-300 shadow-sm md:shadow-[0px] ">
                            <div className="">{item.icon}</div>
                            <div>
                            <p className="text-sm sm:text-lg md:text-xl lg:ext-2xl font-bold">
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
}
