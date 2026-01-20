"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import AuthSideBanner from "@/components/Auth/AuthSideBanner";

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-gray-50 relative">
      
      {/* GLOBAL CLOSE / BACK BUTTON */}
      <button
        onClick={() => router.back()}
        className="fixed top-6 right-6 z-[100] cursor-pointer flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md text-gray-600 hover:text-gray-900 hover:scale-105 transition"
        aria-label="Go back"
      >
        ✕
      </button>

      {/* ================= LEFT : LOGIN FORM ================= */}
      <div className="flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
          
          {/* TITLE */}
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome Back 👋
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Login to access your student dashboard
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

          {/* LOGIN FORM */}
          <form className="space-y-4">
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

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-500">
                <input type="checkbox" className="accent-blue-600" />
                Remember me
              </label>

              <Link
                href="/forgot-password"
                className="text-blue-600 hover:underline font-medium cursor-pointer"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-900 cursor-pointer text-white rounded-lg py-3 text-sm font-semibold hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>

          {/* FOOTER */}
          <p className="text-sm text-gray-500 mt-6 text-center cursor-pointer">
            Don’t have an account?{" "}
            <Link href="/register" className="text-blue-600 font-semibold">
              Create one
            </Link>
          </p>
        </div>
      </div>

      {/* ================= RIGHT : COURSE IMAGE ================= */}
     <AuthSideBanner/>
    </div>
  );
}
