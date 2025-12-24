import { Home } from "lucide-react";
import { IndianRupee } from "lucide-react";
import CountUp from "./CountUp";

export default function CategoryHero({ categories }: any) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-linear-to-r from-[#182848] to-[#4b6cb7] text-white">
      
      {/* background shapes */}
      <div className="absolute -top-32 -left-32 w-[420px] md:w-[520px] h-[420px] md:h-[520px] bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[320px] md:w-[420px] h-80 md:h-[420px] bg-black/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-10 lg:py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-white/80 mb-5">
            <Home size={18} />
            <span>/ Data Science & Analytics</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Data Science and <br className="hidden sm:block" />
            Analytics Courses
          </h1>

          <p className="mt-5 text-base sm:text-lg text-white/80 max-w-xl mx-auto lg:mx-0">
            Learn statistical analysis, data visualization, and data mining from
            industry experts. Gain hands-on experience through real-world
            projects and case studies.
          </p>

          <button className="mt-5 text-blue-200 underline underline-offset-4 hover:text-white transition cursor-pointer">
            Read More
          </button>

          {/* Partners */}
          <div className="mt-10">
            <p className="text-sm font-semibold mb-4">
              Our Program Partners:
            </p>

            <div className="bg-white rounded-xl p-4 flex flex-wrap justify-center lg:justify-start gap-6 items-center">
              <span className="text-black font-bold">IBM</span>
              <span className="text-black font-bold">Microsoft</span>
              <span className="text-black font-bold">IIT</span>
              <span className="text-black font-bold">MNIT Jaipur</span>
            </div>
          </div>
        </div>

        {/* RIGHT FORM CARD */}
        <div className="bg-white text-black rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 max-w-md w-full mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">
            Secure Your Free Spot!
          </h2>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Full Name*"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <div className="flex gap-3">
              <select className="px-3 py-3 rounded-lg border border-gray-300 focus:outline-none">
                <option>+91 IN</option>
              </select>

              <input
                type="tel"
                placeholder="Mobile Number*"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <input
              type="email"
              placeholder="Email*"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <label className="flex items-start gap-2 text-sm text-gray-600">
              <input type="checkbox" className="mt-1" />
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

      <div className="max-w-5xl mx-auto bg-white rounded-xl flex flex-col sm:flex-row justify-around items-center text-black py-6 gap-6">

          {/* CARD 1 */}
          <div className="flex items-center gap-2">
            <IndianRupee color="#d18800" size={45} />
            <div>
              <p className="text-lg sm:text-2xl font-bold">
                <CountUp prefix="INR " end={1200000} suffix="+" />
              </p>
              <p className="text-xs sm:text-sm text-gray-700">
                Average salary at entry level
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="flex items-center gap-2">
            <IndianRupee color="#d18800" size={45} />
            <div>
              <p className="text-lg sm:text-2xl font-bold">
                <CountUp prefix="INR " end={1800000} suffix="+" />
              </p>
              <p className="text-xs sm:text-sm text-gray-700">
                Highest salary offered
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="flex items-center gap-2">
            <IndianRupee color="#d18800" size={45} />
            <div>
              <p className="text-lg sm:text-2xl font-bold">
                <CountUp end={5000} suffix="+" />
              </p>
              <p className="text-xs sm:text-sm text-gray-700">
                Hiring partners
              </p>
            </div>
          </div>

     </div>

    </section>
  );
}
