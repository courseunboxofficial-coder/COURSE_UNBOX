"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, TrendingUp } from "lucide-react";
import { supabase } from "@/lib/supabse/supabaseConfig";
import Image from "next/image";

type ImageType = { key: string; Image: string }

export default function Trending() {

  const [Images, setImages] = useState<ImageType[]>([]);

  const getImagesData = async () => {
    const { data, error } = await supabase.from("Home").select("*").eq("section", "Trending").single();

    if (error) {
      console.log("THERE IS SOME OF THE ERROR IS OCCUR : ");
      console.log(error);
    };


    console.log("THE DATA COMING FORM THE DATABASE AS THE IMAGE IS : ");
    console.log(data);

    setImages(data.content);

  }


  useEffect(() => {
    getImagesData();
  }, []);


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


    <section className="w-full bg-[#e2eff9] py-14 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Title – aligned to carousel start */}
        <div className="flex items-center gap-2 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Trending Now
          </h2>
          <div className="rounded-full bg-green-300 p-1">
            <TrendingUp className="text-blue-600" />
          </div>
        </div>

        {/* Carousel – centered */}
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

          {/* Cards Track */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
          >
            {Images.map((image, index) => (
              <div
                key={index}
                className="relative min-w-[370px] max-w-[370px] min-h-[250px] rounded-3xl overflow-hidden shadow-xl"
              >
                <Image
                  src={image.Image}
                  alt="Course Image"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

  );
}










