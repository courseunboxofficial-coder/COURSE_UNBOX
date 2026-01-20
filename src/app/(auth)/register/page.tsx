"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Home } from "lucide-react";
import AuthSideBanner from "@/components/Auth/AuthSideBanner";
export default function RegisterPage() {
    const router = useRouter();
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-gray-50 relative">
      
      {/* ================ LEFT : FORM ================ */}
     
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
      <AuthSideBanner/>

    </div>
  );
}
