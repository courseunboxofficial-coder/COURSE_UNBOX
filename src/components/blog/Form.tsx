"use client"

import { useState } from "react";

import emailjs from "@emailjs/browser"

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");


  const handleSubmit = (e:React.FormEvent<HTMLElement>)=>{
       e.preventDefault();

    const templateParams = {

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
        templateParams,
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



  return (

    <section className="">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-6 sm:py-10">

        {/* Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-6 md:p-8">

          {/* Heading */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-blue-900">
            Let's Connect
          </h2>

          {/* Divider */}
          <div className=" my-3 sm:my-4 h-[3px] w-32 sm:w-48 rounded-full bg-linear-to-r from-transparent via-blue-600 to-transparent" />

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">

            {/* Name */}
            <div className="flex gap-6">
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                 First Name
                </label>
                <input
                  name="firstName"
                  value={firstName}
                  onChange={(e)=>setFirstName(e.target.value)}
                  type="text"
                  placeholder="Your First Name"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 sm:py-3
                            text-sm sm:text-base
                            focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  name="lastName"
                  value={lastName}
                  onChange={(e)=>setLastName(e.target.value)}

                  type="text"
                  placeholder="Your Last Name"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 sm:py-3
                            text-sm sm:text-base
                            focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

            </div>


            {/* Email */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                Email
              </label>
              <input
                name="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                type="email"
                placeholder="your@email.com"
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 sm:py-3
                           text-sm sm:text-base
                           focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

            {/* Phone */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                Phone
              </label>
              <input
                name="phone"
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 sm:py-3
                           text-sm sm:text-base
                           focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full mt-4 sm:mt-5
                         bg-blue-700 hover:bg-blue-800
                         text-white text-base sm:text-lg font-bold
                         py-2.5 sm:py-3
                         rounded-xl shadow-lg
                         transition-all duration-200 cursor-pointer"
            >
              Apply Now »
            </button>

            {/* Trust Note */}
            <p className="text-center text-xs sm:text-sm text-gray-500 mt-2">
              🔒 Your information is 100% safe and will not be shared
            </p>

          </form>
        </div>
      </div>

    </section>
  );
}
