import Image from "next/image";
import Link from "next/link";
import Form from "../blog/Form";

export default function HomeEnquiry() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-900 via-blue-800 to-indigo-900" />

      {/* Subtle Accent */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div className="text-white max-w-xl">
            <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold rounded-full bg-yellow-400/20 text-yellow-300">
              Need Guidance?
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              Talk to Our Experts Before You Enroll
            </h2>

            <p className="mt-5 text-lg text-blue-100 leading-relaxed">
              Get personalized advice on courses, career paths, fees, and
              learning modes. Our experts help you choose what truly fits your
              goals — not just what’s popular.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/course"
                className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-8 py-4 text-base font-semibold text-blue-900 hover:bg-yellow-300 transition"
              >
                Explore Courses 
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 px-8 py-4 text-base font-medium text-white hover:bg-white/10 transition"
              >
                About Course Unbox
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full max-w-lg mx-auto">
            <div className="absolute -inset-4 rounded-3xl bg-linear-to-tr from-yellow-400/30 to-blue-500/30 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              {/* <Image
                src="/images/home/enquiry.webp"
                alt="Course counselling and enquiry"
                width={520}
                height={420}
                className="w-full h-auto object-cover"
                priority
              /> */}
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-6 md:p-8">

                {/* Heading */}
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-blue-900">
                    Let's Connect
                </h2>
                
                {/* Divider */}
                <div className=" my-3 sm:my-4 h-[3px] w-32 sm:w-48 rounded-full bg-linear-to-r from-transparent via-blue-600 to-transparent" />

                {/* Form */}
                <form className="space-y-3 sm:space-y-4">

                    {/* Name */}
                    <div className="flex gap-6">
                        <div>
                        <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                            Name
                        </label>
                        <input
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
                                bg-blue-600 hover:bg-blue-700
                                text-white text-base sm:text-lg font-bold
                                py-2.5 sm:py-3
                                rounded-xl shadow-lg
                                transition-all duration-200 cursor-pointer"
                    >
                    Send Enquiry »
                    </button>
                </form>
                </div>
                    
                    </div>
            </div>

        </div>
      </div>
    </section>
  );
}
