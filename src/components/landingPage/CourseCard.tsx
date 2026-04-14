import React from "react";
import { EnrollmentForm } from "./EnrollmentForm";

export function CourseCard() {
  return (
    <div className="bg-surface-container-lowest rounded-xl overflow-hidden editorial-shadow border border-outline-variant/10">
      <div className="aspect-video relative group cursor-pointer">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Wx-oVuD5XUE?si=7JXxRUDS0WI48yyg"
          title="YouTube video player"
          frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen>

        </iframe>
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
