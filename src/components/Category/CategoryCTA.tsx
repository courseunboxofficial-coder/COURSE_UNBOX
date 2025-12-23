import Link from "next/link";

interface CategoryCTAProps {
  category: {
   _id: number;
    name: string;
    slug: string;
    description: string;
    banner: string;
    themeColor:string;
  };
}

export default function CategoryCTA({ category }: any) {
  return (
    <section className="relative overflow-hidden py-20 bg-linear-to-r from-[#182848] via-[#2b4c9a] to-[#4b6cb7]">
      
      {/* subtle background glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 text-center text-white">
        
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Ready to Start Your Journey in {category.name}?
        </h2>

        <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
          Learn industry-ready skills with structured courses, hands-on projects,
          and expert mentorship designed for real careers.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          
          {/* Primary CTA */}
          <Link
            href={`/courses/category/${category.slug}`}
            className="px-8 py-4 rounded-xl bg-white text-blue-700 font-semibold hover:bg-blue-50 transition"
          >
            Explore {category.name} Courses
          </Link>

          {/* Secondary CTA */}
          <Link
            href="/contact"
            className="px-8 py-4 rounded-xl border border-white/30 text-white hover:bg-white/10 transition"
          >
            Talk to a Mentor
          </Link>
        </div>

      </div>
    </section>
  );
}
