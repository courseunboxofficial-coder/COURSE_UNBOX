"use client";

import { useState } from "react";
import { PlayCircle } from "lucide-react";

const course = {
  title: "Full Stack Web Development",
  modules: [
    {
      title: "Introduction",
      lessons: [
        { id: 1, title: "Welcome", duration: "3:20", videoUrl: "https://www.youtube.com/watch?v=lzIxUCSinKc" },
        { id: 2, title: "Course Overview", duration: "5:10", videoUrl: "https://www.youtube.com/watch?v=lzIxUCSinKc" },
      ],
    },
    {
      title: "Frontend Basics",
      lessons: [
        { id: 3, title: "HTML Basics", duration: "10:00", videoUrl: "https://www.youtube.com/watch?v=lzIxUCSinKc" },
        { id: 4, title: "CSS Basics", duration: "12:30", videoUrl: "https://www.youtube.com/watch?v=lzIxUCSinKc" },
      ],
    },
  ],
};


export default function CourseWatchPage() {
  const [currentLesson, setCurrentLesson] = useState(
    course.modules[0].lessons[0]
  );

    const getEmbedUrl = (url: string) => {
    const videoId = url.split("v=")[1];
    return `https://www.youtube.com/embed/${videoId}`;
    };


  return (
    <div className="h-screen grid grid-cols-1 lg:grid-cols-4">

      {/* SIDEBAR */}
      <aside className="lg:col-span-1 border-r bg-white overflow-y-auto">
        <div className="p-4 border-b">
          <h2 className="font-semibold text-lg">Course Content</h2>
        </div>

        <div className="p-4 space-y-5">
          {course.modules.map((module, idx) => (
            <div key={idx}>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">
                {module.title}
              </h3>

              <div className="space-y-1">
                {module.lessons.map((lesson) => (
                  <button
                    key={lesson.id}
                    onClick={() => setCurrentLesson(lesson)}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm
                      ${
                        currentLesson.id === lesson.id
                          ? "bg-blue-100 text-blue-700"
                          : "hover:bg-gray-100 text-gray-700"
                      }`}
                  >
                    <PlayCircle className="w-4 h-4" />
                    {lesson.title}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* MAIN VIDEO AREA */}
      <main className="lg:col-span-3 bg-gray-50 p-6">
        <h1 className="text-xl font-semibold mb-4">
          {currentLesson.title}
        </h1>

        <div className="w-full aspect-video rounded-xl overflow-hidden bg-black">
          <iframe
            key={currentLesson.id}
            src={getEmbedUrl(currentLesson.videoUrl)}
            className="w-full h-full"
            allowFullScreen
          />
        </div>
      </main>

    </div>
  );
}
