"use client";

import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Enquiry = () => {


  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [occupation, setOccupation] = useState("");


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {

      name: `${firstName} ${lastName}`,
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phone,
      occupation: occupation

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
  };

  return (
    <div className="min-h-screen flex  items-center justify-center bg-[#4b1faf] p-2">
      <div className="bg-white w-full md:w-[80vw] rounded-3xl shadow-lg shadow-indigo-300 hover:shadow-2xl
       hover:shadow-indigo-500 flex overflow-hidden transition cursor-pointer">


        <div className="md:w-1/2 w-full p-8 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-[#3c2df9] mb-8 leading-tight">
            Need <span className="text-[#2f27ce]">Help? </span>
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">


            <div className="flex gap-3">

              <div className="flex flex-col w-[50%]">
                <label className="text-sm font-medium text-black">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  className="text-black w-full border border-gray-300 p-3 rounded-md mt-1 focus:ring-2 focus:ring-purple-500"
                  placeholder="Myname"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="flex flex-col w-[50%]">
                <label className="text-sm font-medium text-black">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  className=" text-black w-full border border-gray-300 p-3 rounded-md mt-1 focus:ring-2 focus:ring-purple-500"
                  placeholder="Dubey"
                   onChange={(e) => setLastName(e.target.value)}

                />
              </div>

            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">Email address</label>
              <input
                type="email"
                className="w-full border border-gray-300 p-3 rounded-md mt-1 focus:ring-2 focus:ring-purple-500"
                placeholder="name@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">Phone Number</label>
              <input
                type="phone"
                className="text-black w-full border border-gray-300 p-3 rounded-md mt-1 focus:ring-2 focus:ring-purple-500"
                placeholder="9643065630"
                 onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">
                Occupation
              </label>

              <select
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
                className="border border-gray-300 p-3 rounded-md w-full text-black
               focus:ring-2 focus:ring-purple-500 focus:outline-none
               bg-white cursor-pointer"
                required
              >
                <option value="" disabled>
                  Select your occupation
                </option>
                <option value="Student">Student</option>
                <option value="Professional">Professional</option>
                <option value="Housewife">Housewife</option>
                <option value="Business Owner">Business Owner</option>
                <option value="Freelancer">Freelancer</option>
                <option value="Other">Other</option>
              </select>
            </div>



            <div className="flex gap-3">
              <button
                type="submit"
                className="w-full bg-[#060647] text-white text-xl font-bold px-6 py-3 rounded-3xl  hover:bg-[#1a42ba] cursor-pointer transition"
              >
                Let's Connect
              </button>

            </div>
          </form>



          <div className="sm:mt-10 mt-5">
            <p className="text-sm text-gray-500 mb-3">FOLLOW</p>
            <div className="flex gap-5 text-gray-600 text-xl">
              <Facebook />
              <Instagram />
              <Twitter />
              <Youtube />
            </div>
          </div>
        </div>



        <div className="w-1/2 relative bg-linear-to-br from-[#e852ff] via-[#715aff] to-[#3c2df9] hidden md:block ">
          <div className="absolute top-10 right-10 w-48 h-48 bg-pink-400 rounded-full mix-blend-screen opacity-70"></div>
          <div className="absolute bottom-12 left-16 w-56 h-56 bg-blue-400 rounded-full mix-blend-screen opacity-60"></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-screen opacity-50 translate-x-[-50%] translate-y-[-50%]"></div>
        </div>

      </div>
    </div>
  );
}


export default Enquiry