import React from 'react'

const LetsConnect = () => {
    return (

        <section className="w-full pt-10 px-4">
            <div
                className="
      max-w-7xl mx-auto
      bg-[#020e52]
      rounded-tr-2xl
      rounded-tl-2xl
      flex flex-col lg:flex-row
      items-center
      gap-8 lg:gap-12
      px-4 sm:px-8 lg:px-12
      py-8 lg:py-12
    "
            >
                {/* Image Section */}
                <div className="relative w-full lg:w-1/2 flex justify-center">
                    <img
                        src="/images/Home/PeopleGather.png"
                        alt="confused person"
                        className="
          w-full
          max-w-xs sm:max-w-sm md:max-w-md
          h-auto
          object-cover
          rounded-xl
        "
                    />

                    <span className="absolute -top-6 sm:-top-8 right-6 sm:right-10 text-4xl sm:text-5xl">
                        ❓
                    </span>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 text-white text-center lg:text-left">
                    <h2
                        className="
          font-bold
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl
          leading-tight
          mb-6
        "
                    >
                        Build skills that employers look for, not just marks
                    </h2>

                    <button
                        className="
          inline-flex items-center gap-2
          bg-yellow-400 hover:bg-yellow-500
          text-gray-900 font-semibold
          py-3 px-6
          rounded-lg
          transition shadow-md
        "
                    >
                        Our Courses
                        <span className="text-xl">→</span>
                    </button>
                </div>
            </div>
        </section>



    )
}

export default LetsConnect