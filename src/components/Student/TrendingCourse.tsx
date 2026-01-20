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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="
              group relative overflow-hidden rounded-2xl
              
              border border-blue-400/30
              shadow-lg transition-all duration-500
              hover:-translate-y-2 hover:shadow-blue-500/40 cursor-pointer
            "
          >
            <div className="absolute inset-0 
                           
                            opacity-20 blur-2xl
                            group-hover:opacity-40 transition duration-500" />

            <div className="absolute -top-6 -right-6 w-20 h-20 
                            rounded-full bg-blue-400/30 blur-xl animate-pulse" />

       
            <div className="relative h-44 overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="h-full w-full object-cover 
                           group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>

  
            <div className="relative z-10 p-5 space-y-3">
              <h3 className="text-lg font-semibold ">
                {course.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {course.description}
              </p>

              <span
                className="
                  inline-flex items-center gap-1
                  text-sm font-medium text-blue-400
                  transition-all cursor-pointer
                "
              >
                View Course <ArrowRight size={14} />
              </span>
            </div>

            {/* Glow Border */}
            <div className="absolute inset-0 rounded-2xl 
                            border border-transparent
                            group-hover:border-cyan-400/60
                            transition duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
}
