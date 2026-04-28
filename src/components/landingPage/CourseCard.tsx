import React from "react";
import { EnrollmentForm } from "./EnrollmentForm";

export function CourseCard() {
  return (
    <div className="bg-surface-container-lowest rounded-xl overflow-hidden editorial-shadow border border-outline-variant/10">
      <div className="aspect-video relative overflow-hidden bg-black">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube-nocookie.com/embed/Wx-oVuD5XUE?si=ZscgE-Et6p7R5luV&playsinline=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-headline font-bold text-center mb-4">
          Start Your AI Marketing Journey
        </h3>
        <EnrollmentForm />
      </div>
    </div>
  );
}
