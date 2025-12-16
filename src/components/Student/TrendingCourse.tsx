import { ArrowRight } from "lucide-react";

export default function TrendingCourse() {

  const courses = [
    {
      title: "Full Stack Web Development",
      description: "Learn MERN stack from scratch to advanced level.",
      image: "https://tse2.mm.bing.net/th/id/OIP.zoX90hGOY_7kCCmFiP9dRgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      title: "Data Structures & Algorithms",
      description: "Crack coding interviews with strong DSA fundamentals.",
      image: "https://tse2.mm.bing.net/th/id/OIP.zoX90hGOY_7kCCmFiP9dRgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      title: "React & Next.js Mastery",
      description: "Build scalable, production-ready frontend apps.",
      image: "https://tse2.mm.bing.net/th/id/OIP.zoX90hGOY_7kCCmFiP9dRgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      title: "Backend with Node.js",
      description: "APIs, authentication, databases, and scaling.",
      image: "https://tse2.mm.bing.net/th/id/OIP.zoX90hGOY_7kCCmFiP9dRgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
  ];

  return (
    <section className="py-16 px-6 sm:px-12">
      
      {/* Heading */}
      <h2 className="font-bold text-3xl sm:text-4xl text-[#025378] mb-10">
        Trending on Course Unbox
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-sm border border-blue-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Image */}
            <div className="relative h-44 w-full overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="font-semibold text-lg text-gray-900 mb-1">
                {course.title}
              </h3>

              <p className="text-sm text-gray-600 mb-4">
                {course.description}
              </p>

              <button className="flex items-center gap-2 text-sm font-semibold text-[#025378] group-hover:gap-3 transition-all">
                Explore Course <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
