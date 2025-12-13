import Image from "next/image";
import Link from "next/link";

const StillConfusedSection = () => {

  return (
    
    
    <section className="w-full bg-[#cfdcc8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        
       
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1f2937]">
            Still Confused?
          </h2>

          <p className="mt-4 text-gray-700 max-w-md">
            Get Connected to our experts and know what's best for you.{" "}
            <span className="text-green-700 font-medium">
              Achieve your dreams!
            </span>
          </p>

          <Link
            href="/contact"
            className="inline-block mt-6 bg-[#1b3b1b] text-white px-6 py-3 rounded-md font-medium hover:bg-[#162f16] transition"
          >
            Get Connected Now
          </Link>
        </div>

        

        <div className="relative flex justify-center md:justify-end">
          <Image
            src="/images/Course/Confused.jpg"
            alt="Confused person thinking"
            width={480}
            height={450}
            className="object-contain rounded-3xl"
            priority
          />
        </div>
      </div>

    

      <div className="absolute top-6 right-20 w-20 h-20 bg-[#fde7b2] rounded-full opacity-80" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#8aa876] rounded-full opacity-70" />


    </section>
  );
};

export default StillConfusedSection;
