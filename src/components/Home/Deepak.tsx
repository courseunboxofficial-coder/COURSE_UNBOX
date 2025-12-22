"use client";

import { Check, Timer } from "lucide-react";
import React from "react";
import Countdown from "react-countdown";

export default function Deepak() {
  // Target time (same duration you used)
  const TARGET_TIME =
    Date.now() +
    1 * 24 * 60 * 60 * 1000 +
    10 * 60 * 60 * 1000 +
    21 * 60 * 1000 +
    58 * 1000;

  return (
    // <section className="w-full bg-slate-50 py-10">
    //   <div className="max-w-7xl mx-auto px-6">
    //     {/* Header */}
    //     <div className="mb-6">
    //       <span className="inline-block text-xs font-semibold text-blue-600 border border-blue-200 rounded-md px-2 py-1 mb-3">
    //         CERTIFICATION COURSES · 4–8 weeks
    //       </span>

    //       <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
    //         Fastest way to build your CV
    //       </h1>
    //     </div>

    //     {/* Banner */}
    //     <div className="rounded-2xl bg-linear-to-r from-blue-600 via-cyan-500 to-teal-400 p-8 shadow-lg text-white">
    //       <h2 className="text-3xl font-bold">Training Certificate</h2>
    //       <p className="mt-2 text-xl">
    //         Get <b>55% + 10% OFF</b> on all online trainings
    //       </p>
    //     </div>

    //     {/* Countdown */}
    //     <div className="mt-6 bg-blue-50 border border-blue-100 rounded-xl py-3 flex justify-center text-blue-700 font-medium">
    //       <Countdown
    //         date={TARGET_TIME}
    //         renderer={({ days, hours, minutes, seconds, completed }) => {
    //           if (completed) {
    //             return <span>⏱ Offer Expired</span>;
    //           }

    //           return (
    //             <span>
    //               ⏱ Offer ends in {days}d : {hours}h : {minutes}m : {seconds}s
    //             </span>
    //           );
    //         }}
    //       />
    //     </div>
    //   </div>
    // </section>

       <section className="w-full bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-6">
      <div className="flex gap-2">
            <span className="font-semibold">CERTIFICATION COURSES</span>
          <span className="inline-block    text-blue-600 border border-blue-200 rounded-md px-2 py-1 mb-3">
         4-8 weeks
          </span>
      </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 border-blue-500  border-l-8 px-2">
            Fastest way to build your CV
          </h1>

          <div className="flex flex-wrap gap-6 mt-4 text-black font-semibold">
            <div className="flex items-center gap-2"><Check  strokeWidth={3} size={17} className="text-blue-500 mt-[0.5px]"/><p> Learn at your own schedule</p></div>
            <div className="flex items-center gap-2"><Check  strokeWidth={3} size={17} className="text-blue-500 mt-[0.5px]"/> <p>Practical learning</p></div>
            <div className="flex items-center gap-2"><Check  strokeWidth={3} size={17} className="text-blue-500 mt-[0.5px]"/><p> Industry recognised certificate</p></div>
          </div>
        </div>

        {/* Banner */}
        <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-blue-600 via-cyan-500 to-teal-400 p-8 md:p-10 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="text-white">
              <p className=" text-xl opacity-90">Earn your</p>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">
                Training Certificate
              </h2>
              <p className="mt-3  opacity-95 text-xl">
                Get <span className="font-semibold">55% + 10% OFF</span> on all online trainings
              </p>

              <button className="mt-5 inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-5 py-2.5 rounded-full shadow hover:scale-105 transition">
                <Timer />FINAL HOURS
              </button>
            </div>

            {/* Right Content */}
            <div className="relative flex justify-center md:justify-end">
              <div className="bg-white rounded-xl shadow-xl p-5 w-64">
                <p className="text-xs text-gray-500 mb-1">INTERNSHALA TRAININGS</p>
                <h3 className="text-sm font-semibold text-gray-800 mb-2">
                  Certificate of Training
                </h3>
                <p className="text-lg font-bold text-gray-900">AKASH SHARMA</p>
                <div className="h-1 w-16 bg-blue-500 mt-3 rounded"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Countdown */}
        {/* <div className="mt-6 bg-blue-50 border border-blue-100 rounded-xl py-3 flex items-center justify-center text-blue-700 text-sm font-medium">
           <Timer /> 
           Offer ends in 1d: 10h: 21m: 58s
           
        </div> */}

        <div className="mt-6 bg-blue-50 border border-blue-100 rounded-xl py-3 flex justify-center text-blue-700 font-medium">
          <Countdown
            date={TARGET_TIME}
            renderer={({ days, hours, minutes, seconds, completed }) => {
              if (completed) {
                return <span>⏱ Offer Expired</span>;
              }

              return (
                <span>
                  ⏱ Offer ends in {days}d : {hours}h : {minutes}m : {seconds}s
                </span>
              );
            }}
          />
        </div>
      </div>
    </section>
  );
}



// import React from "react";

// export default function CertificationBanner() {
//   return (
//     <section className="w-full bg-slate-50 py-10">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Header */}
//         <div className="mb-6">
//           <span className="inline-block text-xs font-semibold text-blue-600 border border-blue-200 rounded-md px-2 py-1 mb-3">
//             CERTIFICATION COURSES · 4–8 weeks
//           </span>
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
//             Fastest way to build your CV
//           </h1>

//           <div className="flex flex-wrap gap-6 mt-4 text-sm text-gray-700">
//             <div className="flex items-center gap-2">✔ Learn at your own schedule</div>
//             <div className="flex items-center gap-2">✔ Practical learning</div>
//             <div className="flex items-center gap-2">✔ Industry recognised certificate</div>
//           </div>
//         </div>

//         {/* Banner */}
//         <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-blue-600 via-cyan-500 to-teal-400 p-8 md:p-10 shadow-lg">
//           <div className="grid md:grid-cols-2 gap-8 items-center">
//             {/* Left Content */}
//             <div className="text-white">
//               <p className="text-sm opacity-90">Earn your</p>
//               <h2 className="text-3xl md:text-4xl font-bold mt-2">
//                 Training Certificate
//               </h2>
//               <p className="mt-3 text-sm md:text-base opacity-95">
//                 Get <span className="font-semibold">55% + 10% OFF</span> on all online trainings
//               </p>

//               <button className="mt-5 inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-5 py-2.5 rounded-full shadow hover:scale-105 transition">
//                 ⏱ FINAL HOURS
//               </button>
//             </div>

//             {/* Right Content */}
//             <div className="relative flex justify-center md:justify-end">
//               <div className="bg-white rounded-xl shadow-xl p-5 w-64">
//                 <p className="text-xs text-gray-500 mb-1">INTERNSHALA TRAININGS</p>
//                 <h3 className="text-sm font-semibold text-gray-800 mb-2">
//                   Certificate of Training
//                 </h3>
//                 <p className="text-lg font-bold text-gray-900">AKASH SHARMA</p>
//                 <div className="h-1 w-16 bg-blue-500 mt-3 rounded"></div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Countdown */}
//         <div className="mt-6 bg-blue-50 border border-blue-100 rounded-xl py-3 flex items-center justify-center text-blue-700 text-sm font-medium">
//           ⏱ Offer ends in 1d: 10h: 21m: 58s
//         </div>
//       </div>
//     </section>
//   );
// }
