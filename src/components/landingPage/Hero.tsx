import React from "react";
import { EnrollmentForm } from "./EnrollmentForm";

export function Hero() {
  return (
    <header className="relative bg-primary overflow-hidden pt-12 pb-16 md:pt-20 md:pb-32 lg:pb-48">
      {/* Background Effect for Desktop */}
      <div className="hidden lg:block absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-container rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-md lg:max-w-7xl mx-auto px-6 lg:grid lg:grid-cols-12 lg:gap-12 lg:items-start relative z-10">
        {/* Left / Top Content */}
        <div className="lg:col-span-7">
          <div className="flex items-center gap-2 mb-6">
            <span className="bg-primary-fixed text-on-secondary-fixed px-1 py-1 lg:rounded-sm rounded-sm text-[10px] font-bold font-label uppercase tracking-wider max-w-30">
              <img
                src={"/images/About/CourseUnboxImage.webp"}
                alt="course unbox logo"
              />
            </span>
            {/* Added styling for rating that matches mobile view on small screens */}
            <div className="flex items-center lg:hidden text-secondary">
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span className="font-headline font-bold text-xs ml-1 text-white">
                4.9 (2,450 Ratings)
              </span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-headline font-bold text-white lg:text-on-primary leading-tight tracking-tight mb-6">
            AI Digital{" "}
            <span className=" text-primary-fixed">
              Marketing Course in{" "}
              <span className="text-secondary-container">Noida</span>
            </span>
            <br className=" lg:block" />
            <span className=" lg:inline text-xl text-primary  md:text-3xl tracking-wider font-bold md:font-extrabold bg-secondary-fixed-dim">
              With 100% Placement Guarantee{" "}
            </span>
          </h1>

          {/* Desktop specific stats */}
          <div className="hidden lg:flex flex-wrap gap-4 items-center mb-6">
            <div className="flex items-center gap-2">
              <span className="text-secondary-fixed font-bold text-lg">
                4.8
              </span>
              <div className="flex text-secondary-fixed">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star_half
                </span>
              </div>
              <span className="text-primary-fixed text-sm">
                (12,450 ratings)
              </span>
            </div>
            <span className="text-primary-fixed text-sm">105,432 students</span>
          </div>

          {/* Mobile Video element injected here to match mobile flow */}
          <div className="relative rounded-xl overflow-hidden aspect-video editorial-shadow border border-white/10 mb-8 group cursor-pointer lg:hidden">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzTHD8ZG3iI3WzuNv0ODuxE0yWTbCZapex8JnRpSutoMJvk5VjKPRxHDcXQQ8waYdaK54z6Hv_IiaXvfZnHSM-nvS8HjlZLMyRQJMJKIJHl9VS2_VeLj8EA43vEXGHhnlBSVJTeNOR9tRFiT5A7QZv-mAHfdTJOzszz2yaOeoe5sxuq9DJQNzj6lNas6Tis7Be0Apk98MpTR4L8ghw-F9U_mD2uTd94b_pF1TOvIQRjAGrIEEaPSP58J0REoUqMXi2tgWZQfyBZVuq"
              alt="Video Preview"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40">
                <span
                  className="material-symbols-outlined text-white text-4xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  play_arrow
                </span>
              </div>
            </div>
          </div>

          <p className="text-white/80 lg:text-primary-fixed-dim text-lg leading-relaxed mb-8 max-w-2xl">
            <span className="text-secondary-container text-3xl md:text-4xl font-bold">
              #1
            </span>{" "}
            Digital Marketing Training Institute in Noida | Learn 25+ Modules |
            3-12 Months Digital Marketing Courses | 50+ Certifications | 75,000+
            Trained
          </p>

          <div className="lg:hidden bg-white p-6 rounded-xl editorial-shadow">
            <h3 className="text-xl font-headline font-bold text-center mb-4 text-on-surface">
              Start Your AI Marketing Journey
            </h3>
            <EnrollmentForm />
          </div>
        </div>
      </div>
    </header>
  );
}
