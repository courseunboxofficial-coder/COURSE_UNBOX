"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
export default function RegisterPage() {
    const router = useRouter();
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-gray-50 relative">
      
      {/* ================= LEFT : FORM ================= */}
      <button
            onClick={() => router.back()}
            className="fixed top-6 right-6 z-[100] w-10 h-10 rounded-full bg-white shadow-md cursor-pointer"
        >
            ✕
      </button>

      <div className="flex items-center justify-center px-6 py-12 cursor-pointer">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
            
            {/* CUT / BACK BUTTON */}
            

            {/* LOGO / TITLE */}
            <h1 className="text-2xl font-bold text-gray-900">
            Create Student Account
            </h1>
            <p className="text-sm text-gray-500 mt-1">
            Join the dashboard and start learning 🚀
            </p>

          {/* GOOGLE LOGIN */}
          <button
            className="w-full mt-6 cursor-pointer flex items-center justify-center gap-4 border rounded-lg py-3 text-sm font-medium hover:bg-gray-50 transition"
          > 
            <img src="/images/About/GoogleIcon.webp" alt="Google Icon" className="size-7" />
            Continue with Google
          </button>

          {/* DIVIDER */}
          <div className="flex items-center gap-3 my-6">
            <span className="h-px bg-gray-200 flex-1"></span>
            <span className="text-xs text-gray-400">OR</span>
            <span className="h-px bg-gray-200 flex-1"></span>
          </div>

          {/* REGISTER FORM */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Email address"
              className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="w-full bg-blue-900 cursor-pointer text-white rounded-lg py-3 text-sm font-semibold hover:bg-blue-700 transition"
            >
              Create Account
            </button>
          </form>

          {/* FOOTER */}
          <p className="text-sm text-gray-500 mt-6 text-center cursor-pointer">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600 font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>

     {/* ================= RIGHT : COURSE IMAGE ================= */}
        <div className="hidden lg:flex items-center justify-center bg-linear-to-br from-blue-950 via-blue-900 to-blue-800 relative overflow-hidden">
        
        {/* TEXT CONTENT */}
        <div className="absolute top-20 left-16 text-white max-w-md space-y-6">
            
            <h2 className="text-4xl font-bold leading-tight">
            Unbox Your <br /> Learning Journey 🎓
            </h2>

            <p className="text-sm text-blue-100 leading-relaxed">
            Learn from industry experts, work on real-world projects, and build
            job-ready skills — all inside one powerful student dashboard.
            </p>

            {/* FEATURE LIST */}
            <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
                <span className="text-green-400">✔</span>
                Industry-ready courses & career paths
            </li>
            <li className="flex items-center gap-2">
                <span className="text-green-400">✔</span>
                Live mentorship & doubt-clearing sessions
            </li>
            <li className="flex items-center gap-2">
                <span className="text-green-400">✔</span>
                Hands-on projects & real case studies
            </li>
            <li className="flex items-center gap-2">
                <span className="text-green-400">✔</span>
                Placement support & interview preparation
            </li>
            </ul>

            {/* TRUST / CTA LINE */}
            <p className="text-xs text-blue-200 pt-2">
            Trusted by <span className="font-semibold text-white">10,000+</span> learners •
            Beginner to Advanced
            </p>
        </div>

        {/* IMAGE */}
        <div className="w-[42%] top-50 relative z-10">
            <img
            src="/images/Student/CourseUnboxImage.webp"
            alt="Course Unbox"
            className="w-full object-contain drop-shadow-2xl"
            />
        </div>

        {/* BACKGROUND DECOR */}
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-700/20 rounded-full blur-3xl"></div>
        </div>

    </div>
  );
}
