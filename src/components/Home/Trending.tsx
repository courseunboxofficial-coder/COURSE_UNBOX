"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, TrendingUp } from "lucide-react";
import Image from "next/image";
import PopUpForm from "../AllCourses/PopUpForm";

const STATIC_IMAGES = [
  {
    key: "1",
    Image:"/images/Home/Image1.webp"
  },

  {
    key: "2",
    Image:
      "/images/Home/Image2.webp",
  },
  {
    key: "3",
    Image:
      "/images/Home/Image3.webp",
  },
  {
    key: "4",
    Image:
      "/images/Home/Image4.webp",
  },
  {
    key: "5",
    Image:
      "/images/Home/Image5.webp",
  },
];

export default function Trending() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const cardWidth = 320;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <>
      <PopUpForm
        isOpen={isOpen}
        onCancel={() => setIsOpen(false)}
        onConfirm={() => setIsOpen(false)}
      />

      <section className="w-full bg-[#e2eff9] py-14 px-4 cursor-pointer">
        <div className="max-w-6xl mx-auto cursor-pointer">
          {/* Title */}
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Trending
            </h2>
            <div className="rounded-full bg-green-300 p-1">
              <TrendingUp className="text-blue-600" />
            </div>
          </div>

          {/* Carousel */}
          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={() => scroll("left")}
              className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-3 rounded-full cursor-pointer hover:bg-blue-300 transition"
            >
              <ChevronLeft />
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => scroll("right")}
              className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-3 rounded-full cursor-pointer hover:bg-blue-300 transition"
            >
              <ChevronRight />
            </button>

            {/* Cards */}
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
            >
              {STATIC_IMAGES.map((image) => (
                <div
                  key={image.key}
                  className="relative min-w-[370px] max-w-[370px] min-h-[250px] rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition ease-in-out"
                  onClick={() => setIsOpen(true)}
                >
                  <Image
                    src={image.Image}
                    alt="Digital Marketing Course"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}