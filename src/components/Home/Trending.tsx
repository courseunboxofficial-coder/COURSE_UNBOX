"use client";

import Slider, { Settings } from "react-slick";
import { useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight, TrendingUp } from "lucide-react";

export default function Trending() {
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const totalSlides = 8;
  const slidesToShow = 3;

  const settings: Settings = {
    dots: false,
    infinite: false,
    speed: 600,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (_current: number, next: number) => {
      setCurrentSlide(next);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const isPrevDisabled = currentSlide === 0;
  const isNextDisabled = currentSlide >= totalSlides - slidesToShow;

  return (
    <section className="w-full py-10 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex  items-center  gap-2 ">
            <h2 className="text-3xl font-bold text-gray-900">Trending Now </h2>
                              <TrendingUp  className="h-7.5 w-7.5 rounded-full p-1 pl-0 text-white bg-green-500 inline-block"/>
        </div>
 
        {/* Slider Wrapper */}


        <div className="relative mt-6">
          {/* Left Button */}

          <button
            onClick={() => sliderRef.current?.slickPrev()}
            disabled={isPrevDisabled}
            className={`absolute -left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-3xl  border  border-gray-300 transition
                cursor-pointer shadow-2xl     
                 ${isPrevDisabled   ? "bg-gray-200 text-gray-400 ": "bg-white text-gray-700 hover:bg-sky-500 hover:text-white"}`}>
          <ChevronLeft  className="text-gray-300"/>
          </button>

          {/* Right Button */}

          <button onClick={() => sliderRef.current?.slickNext()} disabled={isNextDisabled}
            className={`absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 transition
                cursor-pointer  
              ${ isNextDisabled  ? "bg-gray-200 text-gray-400": "bg-white text-gray-700 hover:bg-sky-500 hover:text-white "}`}
          >
            <ChevronRight  className="text-gray-300"/>
          </button>

          {/* Slider */}
          <Slider ref={sliderRef} {...settings}>
            {Array.from({ length: totalSlides }).map((_, index) => (
              <div key={index} className="px-3">
                <div className="h-65 rounded-3xl bg-white  shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] flex items-center justify-center text-xl font-semibold text-gray-700 cursor-pointer hover:shadow-2xl">
                  Slide {index + 1}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}










