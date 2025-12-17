"use client";

import Image from "next/image";
import { Headset } from "lucide-react";

export default function CounselorCTA() {
  return (
    <div className="max-w-5xl mt-6 relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm" style={{ backgroundImage: "url('/images/Student/bg-2.png')" }}>
      {/* subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-size-[40px_40px] opacity-40" />

      <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6 p-2 sm:p-6" >
        {/* LEFT CONTENT */}
        <div className="max-w-xl">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
            Got questions? We are always here for you!
          </h3>

          <p className="text-gray-600 mt-2">
            Feel free to reach out.
          </p>

          <button className="mt-6 inline-flex items-center gap-2 rounded-xl border border-blue-300 bg-blue-50 px-6 py-3 text-blue-600 font-semibold hover:bg-blue-100 transition">
            <Headset size={18} />
            Connect To Counsellor
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-48 h-30 sm:w-56 sm:h-56 shrink-0">
          <Image
            src="/images/Student/Counsell.svg" // replace with your image path
            alt="Student Counselor"
            fill
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
