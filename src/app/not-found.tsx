import Link from "next/link";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main className="flex min-h-[70vh] items-center justify-center px-6">
        <div className="max-w-xl text-center">
          {/* 404 Text */}
          <h1 className="text-7xl md:text-9xl font-extrabold text-blue-600">
            404
          </h1>

          {/* Message */}
          <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-800">
            Page Not Found
          </h2>

          <p className="mt-3 text-gray-600 text-base md:text-lg">
            Oops! The course or page you’re looking for doesn’t exist or has
            been moved. Let’s get you back on track 🚀
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="rounded-lg bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition"
            >
              Go to Home
            </Link>

            <Link
              href="/courses"
              className="rounded-lg border border-blue-600 px-6 py-3 text-blue-600 font-medium hover:bg-blue-50 transition"
            >
              Browse Courses
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
