export default function CourseList({course}:any) {
  const courses = [
    {
      title: "MBA in Data Science",
      duration: "12 Months",
      start: "20 Dec 2025",
      partner: "SSBM Geneva",
    },
    {
      title: "Executive PG Certification in Data Analytics",
      duration: "11 Months",
      start: "21 Dec 2025",
      partner: "IIT Roorkee",
    },
    {
      title: "Advanced Certification in Data Science & AI",
      duration: "7 Months",
      start: "28 Dec 2025",
      partner: "IITM Pravartak",
    },
    {
      title: "Professional Data Science Program",
      duration: "7 Months",
      start: "21 Dec 2025",
      partner: "Top Indian University",
    },
    {
      title: "Applied Data Analytics Program",
      duration: "9 Months",
      start: "5 Jan 2026",
      partner: "Industry Experts",
    },
    {
      title: "AI & Machine Learning Bootcamp",
      duration: "6 Months",
      start: "15 Jan 2026",
      partner: "Global Faculty",
    },
  ];

  return (
    <section className="py-24 bg-linearr-to-b from-[#F7F9FF] to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-14">
          Top Universities <span className="text-indigo-600">Data Science & Analytics</span> Courses
        </h2>

        {/* Carousel */}
        <div id="courseCard" className="relative">
          <div  className=" flex gap-8 overflow-x-auto pb-6 scroll-smooth no-scrollbar">
            {courses.map((course, idx) => (
              <div
                key={idx}
                className="min-w-[300px] max-w-[300px] bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition"
              >
                {/* Image placeholder */}
                <div className="h-40 bg-linear-to-br from-indigo-600 to-blue-500 rounded-t-2xl flex items-center justify-center text-white font-bold">
                  {course.partner}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-semibold text-lg leading-snug mb-4">
                    {course.title}
                  </h3>

                  <div className="text-sm text-gray-600 space-y-2 mb-6">
                    <p>
                      <span className="font-medium">Duration:</span> {course.duration}
                    </p>
                    <p>
                      <span className="font-medium">Cohort Starts:</span> {course.start}
                    </p>
                  </div>

                  <button className="w-full py-3 rounded-xl border border-indigo-600 text-indigo-600 font-semibold hover:bg-indigo-600 hover:text-white transition">
                    View Program
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows (visual only) */}
          <div className="hidden md:flex justify-between absolute inset-y-0 -left-6 -right-6 items-center pointer-events-none ">
            <div className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center text-indigo-600  ">‹</div>
            <div className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center text-indigo-600  ">›</div>
          </div>
        </div>
      </div>
    </section>
  );
}
