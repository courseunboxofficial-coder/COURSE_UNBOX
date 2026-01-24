import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { supabase } from "@/lib/supabse/supabaseConfig";

const getMentorData = async () => {
  const {data , error} = await supabase.from("Mentors").select("*");

  if(error){
    console.log("THERE IS SOME ERORR HAPPEN IN THE TOP MENTORS OF TGHE CATEGORY PAGE : ");
    console.log(error);
  }
  
  return data;

}

export default async function TopMentors() {

  const mentors = await getMentorData();

  return (

    <section className="max-w-7xl mx-auto px-4 py-16">

      {/* Heading */}
      <div className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          Top <span className="text-blue-600">Mentors</span>
        </h2>
        <p className="mt-3 max-w-2xl text-gray-600">
          Learn directly from highly experienced professors and industry experts
          from India’s top institutions.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 cursor-pointer">
        {mentors?.slice(1, 4).map((mentor) => (
          <MentorCard
            key={mentor.id}
            name={mentor.name}
            role={mentor.profession}
            image={mentor.Image}
            description={mentor.description.slice(0, 300)}
          />
        ))}
      </div>

    </section>


  );
}

/* --- Card Component --- */

function MentorCard({
  name,
  role,
  image,
  description,
  readMore = false,
}: {
  name: string;
  role: string;
  image: string;
  description: string;
  readMore?: boolean;
}) {
  return (
    <div
      className="
          relative rounded-2xl bg-gray-100 p-6
          border border-gray-100
          shadow-sm hover:shadow-md
          transition
          mx-4 sm:mx-0
        "
    >
      {/* Profile */}
      <div className="flex justify-center">
        <div className="relative">
          <Image
            src={image}
            alt={name}
            width={110}
            height={110}
            className="rounded-full border-2 border-blue-500"
          />

          <span className="absolute bottom-1 right-1 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
            <ExternalLink size={14} />
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="mt-5 text-center">
        <h3 className="text-lg font-semibold text-gray-900">
          {name}
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          {role}
        </p>

        <p className="mt-4 text-sm leading-relaxed text-gray-600">
          {description}
        </p>

        {readMore && (
          <button className="mt-4 text-sm font-semibold text-blue-600 hover:text-blue-700 cursor-pointer">
            Read More →
          </button>
        )}
      </div>

      {/* Subtle accent */}
      <div className="absolute inset-x-0 bottom-0 h-1 rounded-b-2xl bg-linear-to-r from-blue-500 to-yellow-400" />
    </div>
  );
}
