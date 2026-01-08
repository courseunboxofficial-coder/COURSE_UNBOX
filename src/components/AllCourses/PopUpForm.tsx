import { X } from "lucide-react";
import { useState } from "react";
interface IPopForm {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}
import emailjs from "@emailjs/browser";

export default function PopUpForm({ isOpen, onCancel, onConfirm }: IPopForm) {


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
    <div
      className={`
          fixed inset-0  backdrop-blur-sm z-999
          transition-opacity duration-300 
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}

    >

      <section className={`
          fixed left-1/2 top-0 
          transform -translate-x-1/2
          w-full  px-4 bottom-1/2
          transition-all duration-500 ease-out
          backdrop-blur-sm
          

          
          ${isOpen ? "translate-y-18 lg:translate-y-0 xl:translate-y-16 2xl:translate-y-18 opacity-100 z-999" : "-translate-y-full opacity-0"}
        `}>



        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-6 lg:py-6 xl:py-10 z-9999">



          {/* Card */}
          <div className="bg-white rounded-2xl rounded-tr-0 sm:rounded-3xl shadow-2xl p-5 sm:p-6 md:p-8">

            {/* Close Button */}
            <button
              onClick={onCancel}
              aria-label="Close"
              className="
                fixed 
                top-3 right-3
                sm:right-9 sm:top-2
                md:right-18 md:top-1 
                lg:right-56 lg:top-2
                xl:top-4 xl:right-108
                w-9 h-9 sm:w-10 sm:h-10
                flex items-center justify-center
                rounded-full
                bg-gray-100 hover:bg-gray-200
                text-gray-700 hover:text-black
                transition
                cursor-pointer
              "
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>


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
                <div className="w-full">
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Your First Name"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2.5 sm:py-3
                              text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-600"
                              required
                  />
                </div>

                <div className="w-full">
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Your Last Name"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2.5 sm:py-3
                              text-sm sm:text-base
                              focus:outline-none focus:ring-2 focus:ring-blue-600"
                               required
                  />
                </div>

              </div>


              {/* Email */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 sm:py-3
                            text-sm sm:text-base
                            focus:outline-none focus:ring-2 focus:ring-blue-600"
                             required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone Number"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 sm:py-3
                            text-sm sm:text-base
                            focus:outline-none focus:ring-2 focus:ring-blue-600"
                             required
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
                Connect with an Expert »
              </button>

              {/* Trust Note */}
              <p className="text-center text-xs sm:text-sm text-gray-500 mt-2">
                🔒 Your information is 100% safe and will not be shared
              </p>

            </form>
          </div>
        </div>
      </section>

    </div>

  );
}
