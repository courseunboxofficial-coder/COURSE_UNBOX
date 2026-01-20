"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

interface IPopForm {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

export default function PopUpForm({
  isOpen,
  onCancel,
  onConfirm,
}: IPopForm) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [occupation, setOccupation] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams = {
      name: `${firstName} ${lastName}`,
      first_name: firstName,
      last_name: lastName,
      email,
      phone,
      occupation,
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
        onConfirm();
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setOccupation("");
      })
      .catch(() => {
        alert("Failed to send message");
      });
  };

  // Close on ESC
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCancel();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onCancel]);

  return (
    <div
      className={`
        fixed inset-0 z-[999]
        backdrop-blur-sm
        transition-opacity duration-300
        ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}
    >
      {/* Animated Container */}
      <section
        className={`
          fixed left-1/2 top-0 -translate-x-1/2
          w-full px-4
          transition-all duration-500 ease-out
          ${isOpen ? "translate-y-16 opacity-100" : "-translate-y-full opacity-0"}
        `}
      >
        {/* Scroll Fix Wrapper  */}
        <div className="max-w-2xl mx-auto max-h-[90vh] overflow-y-auto">
      
          <div className="relative bg-white rounded-2xl rounded-tr-0 sm:rounded-3xl shadow-2xl p-5 sm:p-6 md:p-8">
            
            {/*  Close Button  */}
            <button
              onClick={onCancel}
              className="absolute top-4 right-4
                w-9 h-9 flex items-center justify-center
                rounded-full bg-gray-100 hover:bg-gray-200
                transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Heading */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-blue-900">
              Let's Connect
            </h2>

            
            <div className="my-4 h-[3px] w-40 rounded-full bg-linear-to-r from-transparent via-blue-600 to-transparent" />

      
            <form onSubmit={handleSubmit} className="space-y-4">
          
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="w-full">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Your First Name"
                    className="w-full rounded-lg border border-gray-300 px-3 py-3
                      focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    required
                  />
                </div>

                <div className="w-full">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Your Last Name"
                    className="w-full rounded-lg border border-gray-300 px-3 py-3
                      focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    required
                  />
                </div>
              </div>

             
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-gray-300 px-3 py-3
                    focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  required
                />
              </div>

      
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone Number"
                  className="w-full rounded-lg border border-gray-300 px-3 py-3
                    focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  required
                />
              </div>

        
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Occupation
                </label>
                <select
                  value={occupation}
                  onChange={(e) => setOccupation(e.target.value)}
                  className="w-full border border-gray-300 p-3 rounded-lg
                    focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white"
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

           
              <button
                type="submit"
                className="w-full mt-4 bg-blue-700 hover:bg-blue-800
                  text-white text-lg font-bold py-3
                  rounded-xl shadow-lg transition cursor-pointer"
              >
                Connect with an Expert »
              </button>

              
              <p className="text-center text-sm text-gray-500">
                🔒 Your information is 100% safe and will not be shared
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
