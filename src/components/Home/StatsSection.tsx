"use client";

import CountUp from "react-countup";

export default function StatsSection() {
  return (
    <section className="w-full bg-sky-50 py-10">
      <div className="max-w-7xl mx-auto px-4 ">
        {/* Card */}
        <div className="relative bg-white rounded-2xl shadow-sm px-8 py-10 ">
          {/* Heading */}
          <div className="mb-8">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-8 bg-sky-500 rounded-full" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Giving flight to your ambitions
              </h2>
            </div>
            <p className="mt-4 text-black max-w-4xl font-semibold  ">
              Real success requires the right skillset. Through our online
              courses, you too can give wings to your dreams.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {/* Item 1 */}
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="text-4xl font-extrabold text-sky-500">
                <CountUp start={0} end={600} duration={2} />K+
              </h3>
              <p className="mt-1 text-gray-700 font-medium">Learners</p>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="text-4xl font-extrabold text-sky-500">
                <CountUp start={0} end={200} duration={2.5} />M+
              </h3>
              <p className="mt-1 text-gray-700 font-medium">Learning Minutes</p>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="text-4xl font-extrabold text-sky-500">
                <CountUp start={0} end={4.5} decimals={1} duration={2} />/5
              </h3>
              <p className="mt-1 text-gray-700 font-medium">Average rating</p>
            </div>

            {/* Item 4 */}
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="text-4xl font-extrabold text-sky-500">
                <CountUp start={0} end={1.3} decimals={1} duration={2.5} />M+
              </h3>
              <p className="mt-1 text-gray-700 font-medium">Placements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
