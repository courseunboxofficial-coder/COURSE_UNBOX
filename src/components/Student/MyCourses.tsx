"use client";

import Link from "next/link";
import { BookOpen } from "lucide-react";

type Course = {
  id: string;
  title: string;
  progress: number;
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <div
          key={course.id}
          className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition cursor-pointer"
        >
          <h3 className="font-semibold text-lg text-[#025378]">
            {course.title}
          </h3>

          <div className="mt-4">
            <div className="h-2 bg-gray-200 rounded">
              <div
                className="h-2 bg-[#025378] rounded"
                style={{ width: `${course.progress}%` }}
              />
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Progress: {course.progress}%
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
