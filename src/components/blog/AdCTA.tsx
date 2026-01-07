import Image from "next/image";
import Link from "next/link";

export default function AdCard() {
  
  return (
    <div className="hidden  lg:flex flex-col items-center ">
             <div
               className="relative group w-full max-w-sm sm:max-w-md rounded-xl
                          overflow-hidden border-4 shadow-lg
                          transition-all duration-300 hover:shadow-blue-400"
             >
               {/* IMAGE */}
               <Image
                 src="/images/About/FreeDigitalMarketing.webp"
                 alt="Digital Marketing Masterclass"
                 width={500}
                 height={600}
                 className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
               />
             </div>
   
             {/* Button */}
             <button
               className="mt-5 sm:mt-6 bg-blue-700 hover:bg-blue-800
                          text-white font-semibold
                          text-base sm:text-lg
                          px-6 sm:px-8 py-3
                          rounded-lg shadow-md
                          transition-all duration-200 cursor-pointer"
             >
               » Book Your Seat
             </button>
      </div>
  );
}
