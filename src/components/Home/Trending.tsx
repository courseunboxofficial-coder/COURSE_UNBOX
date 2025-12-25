// "use client";

// import Slider from "react-slick";
// import { useRef, useState } from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default function CustomCarousel() {
//   const sliderRef = useRef(null);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const totalSlides = 8;
//   const slidesToShow = 3;

//   const settings = {
//     dots: false,
//     infinite: false,
//     speed: 600, // smooth scrolling
//     slidesToShow,
//     slidesToScroll: 1,
//     arrows: false,
//     beforeChange: (_, next) => setCurrentSlide(next),
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: { slidesToShow: 2 },
//       },
//       {
//         breakpoint: 640,
//         settings: { slidesToShow: 1 },
//       },
//     ],
//   };

//   const isPrevDisabled = currentSlide === 0;
//   const isNextDisabled = currentSlide >= totalSlides - slidesToShow;

//   return (
//     <section className="w-full py-10 bg-slate-50">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Header + Buttons */}
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-2xl font-bold text-gray-900">Custom Carousel</h2>

//           <div className="flex gap-3">
//             {/* Left Button */}
//             <button
//               onClick={() => sliderRef.current?.slickPrev()}
//               disabled={isPrevDisabled}
//               className={`w-10 h-10 flex items-center justify-center rounded-full border transition
//                 ${isPrevDisabled
//                   ? "bg-gray-200 text-gray-400 cursor-not-allowed"
//                   : "bg-white text-gray-700 hover:bg-sky-500 hover:text-white"}`}
//             >
//               ←
//             </button>

//             {/* Right Button */}
//             <button
//               onClick={() => sliderRef.current?.slickNext()}
//               disabled={isNextDisabled}
//               className={`w-10 h-10 flex items-center justify-center rounded-full border transition
//                 ${isNextDisabled
//                   ? "bg-gray-200 text-gray-400 cursor-not-allowed"
//                   : "bg-white text-gray-700 hover:bg-sky-500 hover:text-white"}`}
//             >
//               →
//             </button>
//           </div>
//         </div>

//         {/* Slider */}
//         <Slider ref={sliderRef} {...settings}>
//           {Array.from({ length: totalSlides }).map((_, index) => (
//             <div key={index} className="px-3">
//               <div className="h-48 rounded-xl bg-white shadow-sm flex items-center justify-center text-xl font-semibold text-gray-700">
//                 Slide {index + 1}
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// }








// "use client";

// import Slider, { Settings } from "react-slick";
// import { useRef, useState } from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default function Trending() {
//   // ✅ Properly typed ref
//   const sliderRef = useRef<Slider | null>(null);
//   const [currentSlide, setCurrentSlide] = useState<number>(0);

//   const totalSlides = 8;
//   const slidesToShow = 3;

//   // ✅ Properly typed settings
//   const settings: Settings = {
//     dots: false,
//     infinite: false,
//     speed: 600, // smooth scrolling
//     slidesToShow: slidesToShow,
//     slidesToScroll: 1,
//     arrows: false,
//     beforeChange: (_current: number, next: number) => {
//       setCurrentSlide(next);
//     },
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: { slidesToShow: 2 },
//       },
//       {
//         breakpoint: 640,
//         settings: { slidesToShow: 1 },
//       },
//     ],
//   };

//   const isPrevDisabled = currentSlide === 0;
//   const isNextDisabled = currentSlide >= totalSlides - slidesToShow;

//   return (
//     <section className="w-full py-10 bg-slate-50">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Header + Buttons */}
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-2xl font-bold text-gray-900">Custom Carousel</h2>

//           <div className="flex gap-3">
//             {/* Left Button */}
//             <button
//               onClick={() => sliderRef.current?.slickPrev()}
//               disabled={isPrevDisabled}
//               className={`w-10 h-10 flex items-center justify-center rounded-full border transition
//                 ${isPrevDisabled
//                   ? "bg-gray-200 text-gray-400 cursor-not-allowed"
//                   : "bg-white text-gray-700 hover:bg-sky-500 hover:text-white"}`}
//             >
//               ←
//             </button>

//             {/* Right Button */}
//             <button
//               onClick={() => sliderRef.current?.slickNext()}
//               disabled={isNextDisabled}
//               className={`w-10 h-10 flex items-center justify-center rounded-full border transition
//                 ${isNextDisabled
//                   ? "bg-gray-200 text-gray-400 cursor-not-allowed"
//                   : "bg-white text-gray-700 hover:bg-sky-500 hover:text-white"}`}
//             >
//               →
//             </button>
//           </div>
//         </div>

//         {/* Slider */}
//         <Slider ref={sliderRef} {...settings}>
//           {Array.from({ length: totalSlides }).map((_, index) => (
//             <div key={index} className="px-3">
//               <div className="h-48 rounded-xl bg-white shadow-sm flex items-center justify-center text-xl font-semibold text-gray-700">
//                 Slide {index + 1}
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// }











// "use client";

// import Slider, { Settings } from "react-slick";
// import { useRef, useState } from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default function Trending() {
//   const sliderRef = useRef<Slider | null>(null);
//   const [currentSlide, setCurrentSlide] = useState<number>(0);

//   const totalSlides = 8;
//   const slidesToShow = 3;

//   const settings: Settings = {
//     dots: false,
//     infinite: false,
//     speed: 600,
//     slidesToShow: slidesToShow,
//     slidesToScroll: 1,
//     arrows: false,
//     beforeChange: (_current: number, next: number) => {
//       setCurrentSlide(next);
//     },
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: { slidesToShow: 2 },
//       },
//       {
//         breakpoint: 640,
//         settings: { slidesToShow: 1 },
//       },
//     ],
//   };

//   const isPrevDisabled = currentSlide === 0;
//   const isNextDisabled = currentSlide >= totalSlides - slidesToShow;

//   return (
//     <section className="w-full py-10 bg-slate-50">
//       <div className="max-w-7xl mx-auto px-4">
//         <h2 className="text-2xl font-bold text-gray-900 mb-6">
//           Custom Carousel
//         </h2>

//         {/* Slider Wrapper */}
//         <div className="relative">
//           {/* Left Button */}
//           <button
//             onClick={() => sliderRef.current?.slickPrev()}
//             disabled={isPrevDisabled}
//             className={`absolute -left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full border transition
//               ${
//                 isPrevDisabled
//                   ? "bg-gray-200 text-gray-400 cursor-not-allowed"
//                   : "bg-white text-gray-700 hover:bg-sky-500 hover:text-white"
//               }`}
//           >
//             ←
//           </button>

//           {/* Right Button */}
//           <button
//             onClick={() => sliderRef.current?.slickNext()}
//             disabled={isNextDisabled}
//             className={`absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full border transition
//               ${
//                 isNextDisabled
//                   ? "bg-gray-200 text-gray-400 cursor-not-allowed"
//                   : "bg-white text-gray-700 hover:bg-sky-500 hover:text-white"
//               }`}
//           >
//             →
//           </button>

//           {/* Slider */}
//           <Slider ref={sliderRef} {...settings}>
//             {Array.from({ length: totalSlides }).map((_, index) => (
//               <div key={index} className="px-3">
//                 <div className="h-48 rounded-xl bg-white shadow-sm flex items-center justify-center text-xl font-semibold text-gray-700">
//                   Slide {index + 1}
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </section>
//   );
// }









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
          <button onClick={() => sliderRef.current?.slickPrev()}
            disabled={isPrevDisabled}
            className={`absolute -left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full  border  border-gray-300 transition
                cursor-pointer   shadow-2xl     
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
                <div className="h-65 rounded-xl bg-white  shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] flex items-center justify-center text-xl font-semibold text-gray-700">
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










// "use client";

// export default function InternshipDreamCard() {
//   return (
//     <section className="w-full py-10 bg-slate-50">
//       <div className="max-w-5xl mx-auto px-4">
//         <div className="relative overflow-hidden rounded-3xl shadow-xl text-white">
//           {/* Background */}
//           <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-800 to-fuchsia-700" />

//           {/* Decorative city */}
//           <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-30 bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.2),transparent_60%)]" />

//           {/* Content */}
//           <div className="relative p-8 md:p-12">
//             <span className="inline-block mb-4 rounded-full bg-white/20 px-4 py-1 text-sm font-medium">
//               Internships
//             </span>

//             <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
//               Internship with Dream
//               <br />
//               Companies
//             </h2>

//             <p className="mt-4 text-lg text-white/90">
//               Stipend up to ₹2.4 lacs
//             </p>

//             {/* Logos */}
//             <div className="mt-6 flex gap-4">
//               {['Paytm', 'Microsoft', 'Audi'].map((brand) => (
//                 <div
//                   key={brand}
//                   className="flex items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow"
//                 >
//                   {brand}
//                 </div>
//               ))}
//             </div>

//             {/* CTA */}
//             <button className="mt-8 inline-flex items-center justify-center rounded-xl bg-pink-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-pink-600">
//               Participate now
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



 