"use client";

import React, { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabse/supabaseConfig";
import emailjs from "@emailjs/browser";

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

    meta: {
        title: string,
        description: string
    },

    slug: string,

    alt: string,

    image: string;

}


const Enquiry = ({ courseSlug }: { courseSlug : string }) => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");


  console.log("THE COURSE ID IS :")
  console.log(courseSlug);

  const [course, setCourse] = useState<Course | null>(null);

  console.log(course?.content);

  const getData = async () => {

    const { data, error } = await supabase.from("Pages").select("*").eq("slug", courseSlug).single();

    if (error) {

      console.log("The error coming in the Enquiry Section of the : ");
      console.log(error);

    }


    console.log("THE DATA IS FOR THE PARTICULAR ID IS : ");
    console.log(data);
    setCourse(data);

  }

  const handleSubmit = (e:React.FormEvent)=>{
      e.preventDefault();

      const template = {
        name: `${firstName} ${lastName}`,
        first_name: firstName,
        last_name: lastName,
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
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send message");
      });
      
  }

  


  useEffect(() => {

    getData();

  }, []);



  return (
    <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-pink-500 text-white">
        <section className="
          mx-auto max-w-7xl
          px-4 sm:px-6 lg:px-8
          py-14 sm:py-20
          grid grid-cols-1 md:grid-cols-2
          gap-12 items-center
        ">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="
              text-2xl sm:text-3xl md:text-4xl lg:text-5xl
              font-extrabold leading-tight
            ">
              Ready for a Career{" "}
              <span className="text-yellow-300">Change?</span>
            </h2>

            <p className="
              mt-4 sm:mt-6
              text-sm sm:text-base md:text-lg
              text-white/90
            ">
              A professional UI built using Next.js, TypeScript, and Tailwind CSS —
              no external UI libraries.
            </p>

            {/* BUTTONS */}
            <div className="
              mt-8 flex flex-col sm:flex-row
              gap-3 sm:gap-4
              w-full sm:w-auto
            ">
              <Link href={"/"} className="
                w-full sm:w-auto
                rounded-3xl bg-white text-black
                px-6 sm:px-8 py-2.5 sm:py-3
                font-medium
                hover:bg-gray-100 transition
              ">
                Home
              </Link>

              <Link href={"/about"} className="
                w-full sm:w-auto
                rounded-3xl border border-white/40
                px-6 sm:px-8 py-2.5 sm:py-3
                hover:bg-white/10 transition
              ">
                About Us
              </Link>
            </div>
          </div>

          {/* FORM CARD */}
          <div className="
            bg-white text-black
            rounded-3xl shadow-2xl
            transition
            p-4 sm:p-6 md:p-8
          ">
            <h3 className="
              text-xl sm:text-2xl md:text-3xl
              font-bold mb-6 sm:mb-8
              text-[#030358]
              text-center md:text-left
            ">
              Reach To Us
            </h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* NAME ROW */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  value={firstName}
                  onChange={(e)=>setFirstName(e.target.name)}
                  type="text"
                  placeholder="First Name"
                  className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-blue-500"
                />
                <input
                  value={lastName}
                  onChange={(e)=>setLastName(e.target.name)}
                  type="text"
                  placeholder="Last Name"
                  className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <input
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                type="email"
                placeholder="Email address"
                className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-blue-500"
              />

              <input
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                className="
                  w-full rounded-2xl
                  bg-blue-600 py-3
                  text-white font-semibold
                  hover:bg-blue-700 transition
                "
              >
                Let’s Connect
              </button>
            </form>
          </div>
        </section>

        <section
          id="features"
          className="relative bg-white text-black py-14 sm:py-20 overflow-hidden"
        >
         
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#e0e7ff,transparent_60%)]" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h3
              className="
                text-2xl sm:text-3xl md:text-4xl
                font-bold text-center
                text-[#090952]
                
                animate-fade-up
              "
            >
              Why choose this course?
            </h3>
            <div
        className="mx-auto mt-6 h-[3px] w-full max-w-xl md:max-w-2xl rounded-full
                   bg-linear-to-r
                   from-transparent
                   via-blue-600
                   to-transparent mb-10 sm:mb-14"
        />
            


            <div
              className="
                grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
                gap-6 sm:gap-8
              "
            >
              {course?.content.map((item, index) => (
                <div
                  key={index}
                  style={{ animationDelay: `${index * 120}ms` }}
                  className="
                    group relative
                    rounded-3xl
                    border border-[#121283]/30
                    bg-white
                    p-5 sm:p-6
                    text-center
                    shadow-sm
                    transition-all duration-300 ease-out
                    hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03]
                    animate-fade-up
                    cursor-pointer
                    bg-linear-to-tr from-white via-blue-50 to-blue-100
            
                  "
                >
                  {/* glow ring */}
                  <div
                    className="
                      absolute inset-0 rounded-3xl
                      bg-gradient-to-br from-[#121283]/10 to-transparent
                      opacity-0 group-hover:opacity-100
                      blur-xl transition
                    "
                  />

                  {/* content */}
                  <h4
                    className="
                      relative z-10
                      text-lg sm:text-xl font-semibold
                      text-[#090952]
                    "
                  >
                    {item.title}
                  </h4>

                  <p
                    className="
                      relative z-10
                      mt-2 text-sm text-gray-600
                      transition
                      group-hover:text-gray-800
                    "
                  >
                    {item.subtitle}
                  </p>

                  {/* animated underline */}
                  <span
                    className="
                      absolute bottom-5 left-1/2
                      h-[2px] w-0
                      bg-[#121283]
                      transition-all duration-300
                      group-hover:w-16 group-hover:left-[calc(50%-2rem)]
                    "
                  />
                </div>
              ))}
            </div>
          </div>
      </section>

      </div>


  );
}

export default Enquiry