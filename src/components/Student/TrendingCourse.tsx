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
      
      <h2 className="font-bold text-3xl sm:text-4xl text-[#025378] mb-10">
        Trending on Course Unbox
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="rounded-xl bg-white border border-gray-200 hover:border-blue-300 
            transition-shadow hover:shadow-md shadow-lg"
          >
            {/* Image */}
            <img
              src={course.image}
              alt={course.title}
              className="h-44 w-full object-cover rounded-t-xl"
            />

            {/* Content */}
            <div className="p-4">
              <h3 className="text-base font-semibold text-gray-900 mb-1">
                {course.title}
              </h3>

              <p className="text-sm text-gray-600 mb-3">
                {course.description}
              </p>

              <span className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:gap-2 transition-all cursor-pointer">
                View Course <ArrowRight size={14} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
