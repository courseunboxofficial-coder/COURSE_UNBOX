
"use client";

import { log } from "console";
import { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";

export default function StatsSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  let a = useRef("")

  console.log(a);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);        // start animation
          observer.disconnect();  // run only once
        }
      },
      { threshold: 0.5 }         // 50% of container visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);


  return (
    <section className="w-full bg-sky-50 py-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-5 ">
        {/* Card */}
        <div className="relative bg-white rounded-2xl shadow-sm xl:px-8 xl:py-10 px-6 py-6">
          {/* Heading */}
          <div className="mb-8">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-8 bg-sky-500 rounded-full" />
<<<<<<< HEAD
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Powering Careers with Skills That Matter
              </h2>
            </div>
            <p className="mt-4 text-black max-w-4xl font-semibold">
              Join a growing community of learners who trust us to upskill, reskill, and accelerate their careers through practical, outcome-driven learning.
=======
              <h2 className=" text-md sm:text-lg md:text-4xl font-bold text-gray-900">
                Giving flight to your ambitions
              </h2>
            </div>
            <p className="mt-4 text-black max-w-4xl font-semibold text-justify">
              Real success requires the right skillset. Through our online
              courses, you too can give wings to your dreams.
>>>>>>> 96f6e2dd216ac441039ec08ea8782678e4906437
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 [&_h3]:text-xl  md:[&_h3]:text-2xl lg:[&_h3]:text-3xl xl:[&_h3]:text-4xl
           [&_p]:text-md md:[&_p]:text-lg lg:[&_p]:text-xl">
            {/* Item 1 */}
            <div className="flex flex-col items-center lg:items-start">
<<<<<<< HEAD
              <h3 className="text-4xl font-extrabold text-sky-500">
                {inView && <CountUp start={0} end={170} duration={2} />}K+
=======
              <h3 className=" font-extrabold text-sky-500">
                {inView && <CountUp start={0} end={600} duration={2} />}K+
>>>>>>> 96f6e2dd216ac441039ec08ea8782678e4906437
              </h3>
              <p className="mt-1 text-gray-700 font-medium">Learners</p>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col items-center lg:items-start">
<<<<<<< HEAD
              <h3 className="text-4xl font-extrabold text-sky-500">
                {inView && <CountUp start={0} end={30} duration={2.5} />}M+
=======
              <h3 className="  font-extrabold text-sky-500">
                {inView && <CountUp start={0} end={200} duration={2.5} />}M+
>>>>>>> 96f6e2dd216ac441039ec08ea8782678e4906437
              </h3>
              <p className="mt-1 text-gray-700 font-medium">Learning Minutes</p>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col items-center lg:items-start">
<<<<<<< HEAD
              <h3 className="text-4xl font-extrabold text-sky-500">
                {inView && <CountUp start={0} end={4.8} decimals={1} duration={2} />}/5
=======
              <h3 className=" font-extrabold text-sky-500">
                {inView && <CountUp start={0} end={4.5} decimals={1} duration={2} />}/5
>>>>>>> 96f6e2dd216ac441039ec08ea8782678e4906437
              </h3>
              <p className="mt-1 text-gray-700 font-medium">Average rating</p>
            </div>

            {/* Item 4 */}
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="text-4xl font-extrabold text-sky-500">
                {inView && <CountUp start={0} end={60} decimals={1} duration={2.5} />}k+
              </h3>
              <p className="mt-1 text-gray-700 font-medium">Succesful Placements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

