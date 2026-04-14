import React from "react";
import { EnrollmentForm } from "./EnrollmentForm";

export function CourseCard() {
  return (
    <div className="bg-surface-container-lowest rounded-xl overflow-hidden editorial-shadow border border-outline-variant/10">
      <div className="aspect-video relative group cursor-pointer">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/jPB8TcBhyuw?si=AGlrhp7MP_IQkW7E&amp;controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        
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
