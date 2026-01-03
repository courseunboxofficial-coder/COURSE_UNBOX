"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  src: `https://picsum.photos/600/400?random=${i + 1}`,
  alt: `Gallery Image ${i + 1}`,
}));

export default function PhotoGalleryCarousel() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(3);





  const maxIndex = images.length - visible;


  const prev = () => {
    if (current === 0) return;
    setCurrent(current - 1);
  };

  const next = () => {
    if (current === maxIndex) return;
    setCurrent(current + 1);
  };


  const isPrevDisabled = current === 0;
  const isNextDisabled = current >= maxIndex;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisible(1);        // mobile
      } else if (window.innerWidth < 1024) {
        setVisible(2);        // sm + md
      } else {
        setVisible(3);        // lg+
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full py-10 bg-neutral-50
">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            Our Photo Gallery
          </h2>
        </div>

        <div className="relative">

          {/* Left Button */}
          <button onClick={prev}
            disabled={isPrevDisabled}
            className={`absolute -left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full  border  border-gray-300 transition
                cursor-pointer   shadow-2xl     
                 ${isPrevDisabled ? "bg-gray-200 text-gray-400 " : "bg-white text-gray-700 hover:bg-sky-500 hover:text-white"}`}>
            <ChevronLeft className="text-gray-300" />
          </button>

          {/* Right Button */}
          <button onClick={next} disabled={isNextDisabled}
            className={`absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 transition
                cursor-pointer  
              ${isNextDisabled ? "bg-gray-200 text-gray-400" : "bg-white text-gray-700 hover:bg-sky-500 hover:text-white "}`} >
            <ChevronRight className="text-gray-300" />
          </button>



          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                width: `${(images.length * 100) / visible}%`,
                transform: `translateX(-${(100 / images.length) * current}%)`,
              }}
            >
              {images.map((img) => (
                <div key={img.id} className="px-3"
                  style={{ width: `${100 / images.length}%` }}
                >
                  <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition h-65">
                    <div className="relative h-65">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>



        </div>
      </div>
    </section>
  );
}

