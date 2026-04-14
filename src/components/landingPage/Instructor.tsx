import Link from "next/link";
import React from "react";

const InstructorCard = ({
  imgSrc,
  name,
  title,
  bio,
  stats,
  social,
  icon
}: {
  imgSrc: string;
  name: string;
  title: string;
  bio: string[];
  social: string,
  icon: string
  stats?: { value: string; label: string }[];
}) => (
  <div className="flex flex-col md:flex-row md:p-3 gap-8 md:gap-10 items-center justify-center  h-full ">
    <div className="relative w-48 h-48 flex-shrink-0">
      <div className="absolute inset-0 bg-primary/10 rounded-full translate-x-3 translate-y-3"></div>
      <img
        className="relative z-10 w-full h-full object-cover rounded-full editorial-shadow border-4 border-white"
        src={imgSrc}
        alt={name}
      />
    </div>

    <div className="flex flex-col gap-4 w-full max-w-2xl text-center md:text-left">
      <div>
        <h3 className="font-headline font-bold text-2xl text-on-surface">
          {name}
        </h3>
        <p className="text-primary font-bold text-sm tracking-wide uppercase">
          {title}
        </p>
      </div>

      {stats && (
        <div className="grid grid-cols-3 gap-4 py-4 border-y border-outline-variant/20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center md:text-left ${index === 1 ? "border-x border-outline-variant/20 px-2 lg:px-4" : ""}`}
            >
              <div className="font-headline font-bold text-xl text-primary">
                {stat.value}
              </div>
              <div className="text-[10px] text-on-surface-variant uppercase font-bold tracking-tighter">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="space-y-3 text-on-surface-variant leading-relaxed text-sm md:text-base">
        {bio.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div className="flex justify-center md:justify-start items-center ">
        <Link target="_blank" href={social}><img src={icon} alt="" /></Link>
      </div>
    </div>
  </div>
);

export function Instructor() {
  const instructors = [
    {
      imgSrc: "/images/About/Founder.webp",
      name: "Jugal Chauhan Sir",
      title: "Founder & Mentor – Course Unbox",
      bio: [
        "With 11+ years of experience in AI and Digital Marketing, Jugal has trained over 40,000+ students and worked with 100+ clients, from startups to global brands.",
      ],
      social: "https://www.linkedin.com/in/jugalchauhandm/",
      icon: "images/About/LinkedIn.png",
    },
    {
      imgSrc: "https://courseunbox.com/images/About/Punit%20Jindal.jpeg",
      name: "Punit Jindal Sir",
      title: "Performance Marketing Expert",
      bio: [
        "Punit Jindal, widely known as Zorbathezen, is a renowned digital entrepreneur, educator, and content creator. Former CEO of AAFT, he is celebrated for his expertise in digital media and personal branding.",
      ],
      social: "https://www.youtube.com/@zorbathezen",
      icon: "images/About/youtube.svg",
    },
  ];

  return (
    <section className="py-16">
      <h2 className="font-headline font-bold text-3xl text-center tracking-tight mb-12">
        Meet Your <span className="text-primary">Instructors</span>
      </h2>
      <div className="max-w-4xl mx-auto space-y-16 md:max-w-full md:px-6 md:flex gap-3">
        {instructors.map((instructor, index) => (
          <InstructorCard key={index} {...instructor} />
        ))}
      </div>
    </section>
  );
}
