// "use client";

// import Slider from "react-slick";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const testimonials = [
//   {
//     name: "Rahul Sharma",
//     role: "Frontend Developer",
//     message:
//       "This platform helped me improve my frontend skills and confidence. Highly recommended!",
//   },
//   {
//     name: "Anjali Verma",
//     role: "UI/UX Designer",
//     message:
//       "Amazing learning experience with real-world projects and clear explanations.",
//   },
//   {
//     name: "Aman Singh",
//     role: "React Developer",
//     message:
//       "The structured approach and mentorship made learning React smooth and enjoyable.",
//   },
// ];

// function PrevArrow({ onClick }) {
//   return (
//     <button
//       onClick={onClick}
//       className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
//     >
//       <ChevronLeft size={20} />
//     </button>
//   );
// }

// function NextArrow({ onClick }) {
//   return (
//     <button
//       onClick={onClick}
//       className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
//     >
//       <ChevronRight size={20} />
//     </button>
//   );
// }

// export default function TestimonialsSection() {
//   const settings = {
//     dots: false,
//     arrows: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     prevArrow: <PrevArrow />,
//     nextArrow: <NextArrow />,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: { slidesToShow: 2 },
//       },
//       {
//         breakpoint: 768,
//         settings: { slidesToShow: 1 },
//       },
//     ],
//   };

//   return (
//     <section className="w-full bg-gray-50 py-16">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-10">
//           What Our Learners Say
//         </h2>

//         <div className="relative">
//           <Slider {...settings}>
//             {testimonials.map((item, index) => (
//               <div key={index} className="px-4">
//                 <div className="bg-white rounded-2xl shadow-sm p-6 h-full">
//                   <p className="text-gray-600 mb-6 leading-relaxed">
//                     “{item.message}”
//                   </p>
//                   <div>
//                     <h4 className="font-semibold text-gray-900">
//                       {item.name}
//                     </h4>
//                     <span className="text-sm text-gray-500">
//                       {item.role}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </section>
//   );
// }



// "use client";

// import Slider from "react-slick";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import type { Settings as SliderSettings } from "react-slick";

// /* -------------------- Types -------------------- */
// interface Testimonial {
//   name: string;
//   role: string;
//   message: string;
// }

// interface ArrowProps {
//   onClick?: () => void;
// }

// /* -------------------- Data -------------------- */
// const testimonials: Testimonial[] = [
//   {
//     name: "Rahul Sharma",
//     role: "Frontend Developer",
//     message:
//       "This platform helped me improve my frontend skills and confidence. Highly recommended!",
//   },
//   {
//     name: "Anjali Verma",
//     role: "UI/UX Designer",
//     message:
//       "Amazing learning experience with real-world projects and clear explanations.",
//   },
//   {
//     name: "Aman Singh",
//     role: "React Developer",
//     message:
//       "The structured approach and mentorship made learning React smooth and enjoyable.",
//   },
// ];

// /* -------------------- Arrows -------------------- */
// function PrevArrow({ onClick }: ArrowProps) {
//   return (
//     <button
//       onClick={onClick}
//       className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
//     >
//       <ChevronLeft size={20} />
//     </button>
//   );
// }

// function NextArrow({ onClick }: ArrowProps) {
//   return (
//     <button
//       onClick={onClick}
//       className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
//     >
//       <ChevronRight size={20} />
//     </button>
//   );
// }

// /* -------------------- Component -------------------- */
// export default function TestimonialsSection() {

//   const settings: SliderSettings = {
//     dots: false,
//     arrows: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     prevArrow: <PrevArrow />,
//     nextArrow: <NextArrow />,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: { slidesToShow: 2 },
//       },
//       {
//         breakpoint: 768,
//         settings: { slidesToShow: 1 },
//       },
//     ],
//   };

//   return (
//     <section className="w-full bg-gray-50 py-16">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-10">
//           What Our Learners Say
//         </h2>

//         <div className="relative">
//           <Slider {...settings}>
//             {testimonials.map((item, index) => (
//               <div key={index} className="px-4">
//                 <div className="bg-white rounded-2xl shadow-sm p-6 h-full">
//                   <p className="text-gray-600 mb-6 leading-relaxed">
//                     “{item.message}”
//                   </p>
//                   <div>
//                     <h4 className="font-semibold text-gray-900">
//                       {item.name}
//                     </h4>
//                     <span className="text-sm text-gray-500">
//                       {item.role}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </section>
//   );
// }















 

// "use client";

// import Slider from "react-slick";
// import { ChevronLeft, ChevronRight, Star } from "lucide-react";
// import { useRef } from "react";

// const testimonials = [
//   {
//     name: "Amit Sharma",
//     role: "Digital Marketer",
//     image: "https://i.pravatar.cc/150?img=3",
//     review:
//       "This course completely changed my career. Practical projects and mentors are amazing!",
//   },
//   {
//     name: "Neha Verma",
//     role: "SEO Specialist",
//     image: "https://i.pravatar.cc/150?img=5",
//     review:
//       "One of the best learning platforms. Very beginner friendly and industry focused.",
//   },
//   {
//     name: "Rahul Singh",
//     role: "Content Strategist",
//     image: "https://i.pravatar.cc/150?img=8",
//     review:
//       "Loved the structure and real-world examples. Highly recommended!",
//   },
// ];

// export default function TestimonialsSection() {
//   const sliderRef = useRef<Slider | null>(null);

//   const settings = {
//     dots: false,
//     arrows: false,
//     infinite: true,
//     speed: 600,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: { slidesToShow: 1 },
//       },
//     ],
//   };

//   return (
//     <section className="w-full bg-gradient-to-b from-sky-50 to-white py-16">
//       <div className="max-w-7xl mx-auto px-4">

//         {/* Header */}
//         <div className="text-center mb-12">
//           <p className="uppercase tracking-[2px] text-sky-600 text-sm font-semibold">
//             Testimonials
//           </p>
//           <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
//             What Our Students Say
//           </h2>
//         </div>

//         {/* Slider + Buttons */}
//         <div className="relative">

//           {/* Left Button */}
//           <button
//             onClick={() => sliderRef.current?.slickPrev()}
//             className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10
//                        h-12 w-12 items-center justify-center rounded-full
//                        bg-white shadow-md hover:bg-sky-600 hover:text-white transition"
//           >
//             <ChevronLeft />
//           </button>

//           {/* Right Button */}
//           <button
//             onClick={() => sliderRef.current?.slickNext()}
//             className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10
//                        h-12 w-12 items-center justify-center rounded-full
//                        bg-white shadow-md hover:bg-sky-600 hover:text-white transition"
//           >
//             <ChevronRight />
//           </button>

//           {/* Slider */}
//           <Slider ref={sliderRef} {...settings}>
//             {testimonials.map((item, index) => (
//               <div key={index} className="px-4">
//                 <div className="h-full bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition">

//                   {/* Stars */}
//                   <div className="flex gap-1 mb-4 text-yellow-400">
//                     {[...Array(5)].map((_, i) => (
//                       <Star key={i} size={18} fill="currentColor" />
//                     ))}
//                   </div>

//                   {/* Review */}
//                   <p className="text-gray-600 text-[16px] leading-relaxed mb-6">
//                     “{item.review}”
//                   </p>

//                   {/* User */}
//                   <div className="flex items-center gap-4">
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="h-12 w-12 rounded-full object-cover"
//                     />
//                     <div>
//                       <h3 className="font-semibold text-gray-900">
//                         {item.name}
//                       </h3>
//                       <p className="text-sm text-gray-500">
//                         {item.role}
//                       </p>
//                     </div>
//                   </div>

//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </section>
//   );
// }




// "use client";

// import Slider from "react-slick";
// import { ChevronLeft, ChevronRight, Star } from "lucide-react";
// import { useRef } from "react";

// const testimonials = [
//   {
//     name: "Amit Sharma",
//     role: "Digital Marketer",
//     image: "https://i.pravatar.cc/150?img=3",
//     review:
//       "This course completely changed my career. The explanations are very clear and the projects are extremely practical. Even complex topics like SEO and paid ads were explained in a very simple way. I would highly recommend this to anyone who wants real industry exposure.",
//   },
//   {
//     name: "Neha Verma",
//     role: "SEO Specialist",
//     image: "https://i.pravatar.cc/150?img=5",
//     review:
//       "One of the best learning platforms I have come across. The mentors are supportive and the course structure is very beginner-friendly. I loved how every module builds on the previous one and gives confidence to work on real client projects.One of the best learning platforms I have come across. The mentors are supportive and the course structure is very beginner-friendly. I loved how every module builds on the previous one and gives confidence to work on real client projectsOne of the best learning platforms I have come across. The mentors are supportive and the course structure is very beginner-friendly. I loved how every module builds on the previous one and gives confidence to work on real client projectsOne of the best learning platforms I have come across. The mentors are supportive and the course structure is very beginner-friendly. I loved how every module builds on the previous one and gives confidence to work on real client projects",
//   },
//   {
//     name: "Rahul Singh",
//     role: "Content Strategist",
//     image: "https://i.pravatar.cc/150?img=8",
//     review:
//       "Very well-structured course with lots of real-world examples. The assignments helped me understand how digital marketing actually works in the industry. Totally worth the time and money.",
//   },
// ];

// export default function TestimonialsSection() {
//   const sliderRef = useRef<Slider | null>(null);

//   const settings = {
//     dots: false,
//     arrows: false,
//     infinite: true,
//     speed: 600,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: { slidesToShow: 1 },
//       },
//     ],
//   };
  

//   return (
//     <section className="w-full py-10 bg-slate-50">
//       <div className="max-w-7xl mx-auto px-4">

//         {/* Header */}
//         <div className="text-center mb-12">
//           <p className="uppercase tracking-[2px] text-sky-600 text-sm font-semibold">
//             Testimonials
//           </p>
//           <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
//             What Our Students Say
//           </h2>
//         </div>

//         <div className="relative">


//           <button
//             onClick={() => sliderRef.current?.slickPrev()}
//             className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10
//                        h-12 w-12 items-center justify-center rounded-full
//                        bg-white shadow-md hover:bg-sky-600 hover:text-white transition"
//           >
//             <ChevronLeft />
//           </button> 


//           <button
//             onClick={() => sliderRef.current?.slickNext()}
//             className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10
//                        h-12 w-12 items-center justify-center rounded-full bg-white shadow-md hover:bg-sky-600 hover:text-white transition" >
//             <ChevronRight />
//           </button>

//           {/* Slider */}
//           <Slider ref={sliderRef} {...settings}>
//             {testimonials.map((item, index) => (
//               <div key={index} className="px-4">
//                 <div
//                   className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition
//                              p-6 h-85 flex flex-col"
//                 >
//                   {/* Stars */}
//                   <div className="flex gap-1 text-yellow-400 mb-4">
//                     {[...Array(5)].map((_, i) => (
//                       <Star key={i} size={18} fill="currentColor" />
//                     ))}
//                   </div>

//                   {/* Review (Scrollable) */}
//                   <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-200">
//                     <p className="text-gray-600 text-[16px] leading-6.5">
//                       “{item.review}”
//                     </p>
//                   </div>

//                   {/* User */}
//                   <div className="flex items-center gap-4 pt-5 border-t border-gray-100 mt-5">
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="h-12 w-12 rounded-full object-cover"
//                     />
//                     <div>
//                       <h3 className="font-semibold text-gray-900">
//                         {item.name}
//                       </h3>
//                       <p className="text-sm text-gray-500">
//                         {item.role}
//                       </p>
//                     </div>
//                   </div>

//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </section>
//   );
// }





//original

// "use client";

// const testimonials = [
//   {
//     name: "Amit Sharma",
//     role: "Digital Marketer",
//     image: "https://i.pravatar.cc/150?img=3",
//     review:
//       "This course completely changed my career. The explanations are very clear and the projects are extremely practical. Even complex topics like SEO and paid ads were explained in a very simple way. I would highly recommend this to anyone who wants real industry exposure.",
//   },
//   {
//     name: "Neha Verma",
//     role: "SEO Specialist",
//     image: "https://i.pravatar.cc/150?img=5",
//     review:
//       "One of the best learning platforms I have come across. The mentors are supportive and the course structure is very beginner-friendly. I loved how every module builds on the previous one and gives confidence to work on real client projects.One of the best learning platforms I have come across. The mentors are supportive and the course structure is very beginner-friendly. I loved how every module builds on the previous one and gives confidence to work on real client projectsOne of the best learning platforms I have come across. The mentors are supportive and the course structure is very beginner-friendly. I loved how every module builds on the previous one and gives confidence to work on real client projectsOne of the best learning platforms I have come across. The mentors are supportive and the course structure is very beginner-friendly. I loved how every module builds on the previous one and gives confidence to work on real client projects",
//   },
//   {
//     name: "Rahul Singh",
//     role: "Content Strategist",
//     image: "https://i.pravatar.cc/150?img=8",
//     review:
//       "Very well-structured course with lots of real-world examples. The assignments helped me understand how digital marketing actually works in the industry. Totally worth the time and money.",
//   },
//   {
// name: "Priya Kapoor",
// role: "Graphic Designer",
// image: "https://i.pravatar.cc/150?img=12",
// review: "Creative and practical course content. I was able to apply the design principles immediately to my projects.",
// },
// {
// name: "Vikram Patel",
// role: "Full Stack Developer",
// image: "https://i.pravatar.cc/150?img=15",
// review: "Well-structured and easy to follow. The real-world projects made learning engaging and effective.",
// },
// {
// name: "Sneha Joshi",
// role: "Marketing Analyst",
// image: "https://i.pravatar.cc/150?img=20",
// review: "Excellent mentorship and guidance. I feel much more confident in applying digital marketing strategies.",
// },
// {
// name: "Rohit Mehta",
// role: "UI/UX Designer",
// image: "https://i.pravatar.cc/150?img=25",
// review: "The course content is very practical and helps bridge the gap between theory and real-world application.",
// },
// {
// name: "Kavita Singh",
// role: "SEO Expert",
// image: "https://i.pravatar.cc/150?img=30",
// review: "Clear explanations and step-by-step guidance made complex SEO topics easy to understand.",
// },
// {
// name: "Ankit Sharma",
// role: "Content Writer",
// image: "https://i.pravatar.cc/150?img=35",
// review: "I gained a lot of confidence in content creation. The projects were very helpful for practice.",
// },
// {
// name: "Richa Gupta",
// role: "Digital Strategist",
// image: "https://i.pravatar.cc/150?img=40",
// review: "Fantastic course structure and mentorship. Every module was clear and actionable.",
// },
// ];

// import Slider from "react-slick";
// import { ChevronLeft, ChevronRight, Star } from "lucide-react";
// import { useRef, useState } from "react";



// export default function TestimonialsSection() {
//   const sliderRef = useRef<Slider | null>(null);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const totalSlides = testimonials.length;

//   const settings = {
//     dots: false,
//     arrows: false,
//     infinite: true,
//     speed: 600,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     beforeChange: (_: number, next: number) => setCurrentSlide(next),
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: { slidesToShow: 1 },
//       },
//     ],
//   };

//   return (
//     <section className="w-full py-10 bg-slate-50">
//       <div className="max-w-7xl mx-auto px-4">

//         {/* Header */}
//         <div className="text-center mb-12">
//           <p className="uppercase tracking-[2px] text-sky-600 text-sm font-semibold">
//             Testimonials
//           </p>
//           <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
//             What Our Students Say
//           </h2>
//         </div>

//         <div className="relative">

//           {/* Left Arrow */}
//           <button
//             onClick={() => sliderRef.current?.slickPrev()}
//             disabled={currentSlide === 0}
//             className={`hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10
//               h-12 w-12 items-center justify-center rounded-full shadow-md transition
//               ${currentSlide === 0 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white hover:bg-sky-600 hover:text-white'}`}
//           >
//             <ChevronLeft />
//           </button>

//           {/* Right Arrow */}
//           <button
//             onClick={() => sliderRef.current?.slickNext()}
//             disabled={currentSlide >= totalSlides - settings.slidesToShow}
//             className={`hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10
//               h-12 w-12 items-center justify-center rounded-full shadow-md transition
//               ${currentSlide >= totalSlides - settings.slidesToShow ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white hover:bg-sky-600 hover:text-white'}`}
//           >
//             <ChevronRight />
//           </button>

//           {/* Slider */}
//           <Slider ref={sliderRef} {...settings}>
//             {testimonials.map((item, index) => (
//               <div key={index} className="px-4">
//                 <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition p-6 h-85 flex flex-col">

//                   {/* Stars */}
//                   <div className="flex gap-1 text-yellow-400 mb-4">
//                     {[...Array(5)].map((_, i) => (
//                       <Star key={i} size={18} fill="currentColor" />
//                     ))}
//                   </div>

//                   {/* Review (Scrollable) */}
//                   <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-200">
//                     <p className="text-gray-600 text-[16px] leading-6.5">
//                       “{item.review}”
//                     </p>
//                   </div>

//                   {/* User */}
//                   <div className="flex items-center gap-4 pt-5 border-t border-gray-100 mt-5">
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="h-12 w-12 rounded-full object-cover"
//                     />
//                     <div>
//                       <h3 className="font-semibold text-gray-900">
//                         {item.name}
//                       </h3>
//                       <p className="text-sm text-gray-500">
//                         {item.role}
//                       </p>
//                     </div>
//                   </div>

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
  import { useEffect } from "react";
const testimonials = [
  {
    name: "Amit Sharma",
    role: "Digital Marketer",
    image: "https://i.pravatar.cc/150?img=3",
    review:
      "This course completely changed my career. The explanations are very clear and the projects are extremely practical. Even complex topics like SEO and paid ads were explained in a very simple way. I would highly recommend this to anyone who wants real industry exposure.",
  },
  {
    name: "Neha Verma",
    role: "SEO Specialist",
    image: "https://i.pravatar.cc/150?img=5",
    review:
      "One of the best learning platforms I have come across. The mentors are supportive and the course structure is very beginner-friendly. I loved how every module builds on the previous one and gives confidence to work on real client projects.One of the best learning platforms I have come across. The mentors are supportive and the course structure is very beginner-friendly. I loved how every module builds on the previous one and gives confidence to work on real client projectsOne of the best learning platforms I have come across. The mentors are supportive and the course structure is very beginner-friendly. I loved how every module builds on the previous one and gives confidence to work on real client projectsOne of the best learning platforms I have come across. The mentors are supportive and the course structure is very beginner-friendly. I loved how every module builds on the previous one and gives confidence to work on real client projects",
  },
  {
    name: "Rahul Singh",
    role: "Content Strategist",
    image: "https://i.pravatar.cc/150?img=8",
    review:
      "Very well-structured course with lots of real-world examples. The assignments helped me understand how digital marketing actually works in the industry. Totally worth the time and money.",
  },
  {
name: "Priya Kapoor",
role: "Graphic Designer",
image: "https://i.pravatar.cc/150?img=12",
review: "Creative and practical course content. I was able to apply the design principles immediately to my projects.",
},
{
name: "Vikram Patel",
role: "Full Stack Developer",
image: "https://i.pravatar.cc/150?img=15",
review: "Well-structured and easy to follow. The real-world projects made learning engaging and effective.",
},
{
name: "Sneha Joshi",
role: "Marketing Analyst",
image: "https://i.pravatar.cc/150?img=20",
review: "Excellent mentorship and guidance. I feel much more confident in applying digital marketing strategies.",
},
{
name: "Rohit Mehta",
role: "UI/UX Designer",
image: "https://i.pravatar.cc/150?img=25",
review: "The course content is very practical and helps bridge the gap between theory and real-world application.",
},
{
name: "Kavita Singh",
role: "SEO Expert",
image: "https://i.pravatar.cc/150?img=30",
review: "Clear explanations and step-by-step guidance made complex SEO topics easy to understand.",
},
{
name: "Ankit Sharma",
role: "Content Writer",
image: "https://i.pravatar.cc/150?img=35",
review: "I gained a lot of confidence in content creation. The projects were very helpful for practice.",
},
{
name: "Richa Gupta",
role: "Digital Strategist",
image: "https://i.pravatar.cc/150?img=40",
review: "Fantastic course structure and mentorship. Every module was clear and actionable.",
},
];

import Slider from "react-slick";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function TestimonialsSection() {
  const [mounted, setMounted] = useState(false);

  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const totalSlides = testimonials.length;
  const slidesToShow = 2;

  // const settings = {
  //   dots: false,
  //   arrows: false,
  //   infinite: true,
  //   speed: 600,
  //   slidesToShow: slidesToShow,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 5000,
  //   beforeChange: (_: number, next: number) => setCurrentSlide(next),
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: { slidesToShow: 1 },
  //     },
  //   ],
  // };


  const settings = {
  infinite: false,
  arrows: false,
  slidesToScroll: 1,
  slidesToShow: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 1 },
    },
  ],
};

  const isPrevDisabled = currentSlide === 0;
  const isNextDisabled = currentSlide >= totalSlides - slidesToShow;



 

  return (
    <section className="w-full py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="uppercase tracking-[2px] text-sky-600 text-sm font-semibold">
            Testimonials
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            What Our Students Say
          </h2>
        </div>

        <div className="relative">

          {/* Left Arrow */}
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            disabled={isPrevDisabled}
            className={`hidden md:flex absolute -left-2 top-1/2 -translate-y-1/2 z-10
             w-10 h-10 items-center justify-center rounded-full shadow-md transition cursor-pointer
              ${isPrevDisabled ? 'bg-gray-200 text-gray-400 ' : 'bg-white text-gray-700 hover:bg-sky-500 hover:text-white'}`}
          >
            <ChevronLeft  className="text-gray-300" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => sliderRef.current?.slickNext()}
            disabled={isNextDisabled}
            className={`hidden md:flex absolute -right-2 top-1/2  -translate-y-1/2 z-10
              w-10 h-10 items-center justify-center rounded-full shadow-md transition cursor-pointer
              ${ isNextDisabled  ? "bg-gray-200 text-gray-400": "bg-white text-gray-700 hover:bg-sky-500 hover:text-white "}`}
          >
            <ChevronRight  className="text-gray-300" />
          </button>

          {/* Slider */}
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((item, index) => (
              <div key={index} className="px-4 ">

             <div className="bg-[#FCFCFC] rounded-2xl shadow-md p-6 h-85 flex flex-col
                transition-shadow duration-300 ease-linear 
                hover:shadow-xl">

          
                  <div className="flex gap-1 text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />))}
                  </div>

               
                  <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-200">
                    <p className="text-gray-600 text-[16px] leading-6.5">
                      “{item.review}”
                    </p>
                  </div>

         
                  <div className="flex items-center gap-4 pt-5 border-t border-gray-100 mt-5">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {item.role}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            ))}
       
          </Slider>




        </div>
      </div>
    </section>
  );
}































                {/* <div className="bg-[#FCFCFC] rounded-2xl shadow-sm hover:shadow-lg transition p-6 h-85 flex flex-col hover:border duration-300 ease-linear"> */}
                {/* <div className="bg-[#FCFCFC] rounded-2xl shadow-sm transition-all duration-300 ease-linear
                p-6 h-85 flex flex-col hover:border "> */}

                {/* <div className="bg-[#FCFCFC] rounded-2xl shadow-sm p-6 h-85 flex flex-col
                border border-transparent transition-all duration-300
                hover:border-sky-500"> */}