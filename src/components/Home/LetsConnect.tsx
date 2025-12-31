import React from 'react'

const LetsConnect = () => {
    return (

        <section className='h-[60vh] pt-10' >

            <div className="w-[80%] h-[70vh] mx-auto mb-0 mt-10 bg-[#020e52] py-8 px-3 md:px-12 rounded-2xl flex gap-10">

                <div className="relative mt-10">

                    <img
                        src="/images/Home/PeopleGather.png"
                        alt="confused person"
                        className="w-[480px] h-[260px] object-cover rounded-xl"
                    />

                    <span className="absolute -top-10 left-28 text-5xl">❓</span>
                </div>

                <div className="mt-10 text-white">

                    <div className='text-6xl font-bold mb-5 max-md:text-3xl max-sm:text-2xl max-lg:text-3xl'>
                        Build skills that employers look for, not just marks
                    </div>

                    <button className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold  py-4 px-3 mt-4 rounded-lg transition shadow-md cursor-pointer">
                        Our Courses
                        <span className="text-xl">→</span>
                    </button>

                </div>

            </div>


        </section>


    )
}

export default LetsConnect