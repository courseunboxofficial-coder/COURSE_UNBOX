"use client";

import Link from "next/link";
import Image from "next/image";
import { BookOpen } from "lucide-react";

type Course = {
  id: string;
  title: string;
  progress: number;
  image: string;
};

export default function MyCourses({ courses }: { courses: Course[] }) {
  if (courses.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center bg-white rounded-xl p-10 shadow text-center">
        <BookOpen size={48} className="text-[#025378] mb-4" />

        <h2 className="text-xl font-semibold text-[#025378]">
          No Courses Yet
        </h2>

        <p className="text-gray-600 mt-2 max-w-md">
          You haven’t enrolled in any courses yet. Start learning by exploring
          our course catalog.
        </p>

        <Link
          href="/courses"
          className="mt-6 inline-block bg-[#025378] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#01334A] transition"
        >
          Browse Courses
        </Link>
      </div>
    );
  }

  return (

      <div className="space-y-6 max-w-5xl">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col sm:flex-row overflow-hidden"
          >
            {/* LEFT IMAGE */}
            <div className="relative w-full sm:w-88 h-44 sm:h-auto">
              <img
                src={course.image}
                alt={course.title}
                
                className="object-cover w-full h-full rounded-lg"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="flex flex-col justify-between flex-1 p-6">
              <div>
                <h3 className="text-xl font-semibold text-[#025378]">
                  {course.title}
                </h3>

                {/* Progress */}
                <div className="mt-4">
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-[#025378] rounded-full transition-all"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    {course.progress}% completed
                  </p>
                </div>
              </div>

              {/* BUTTONS */}
              <div className="flex gap-3 justify-end mt-6">
                <Link
                  href={`/courses/${course.id}`}
                  className="px-4 py-2 text-sm font-semibold text-[#025378] border border-[#025378] rounded-lg hover:bg-[#025378] hover:text-white transition"
                >
                  View Details
                </Link>

                <Link
                  href={`/courses/${course.id}/learn`}
                  className="px-4 py-2 text-sm font-semibold bg-[#025378] text-white rounded-lg hover:bg-[#01334A] transition"
                >
                  Continue
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
  );
}
