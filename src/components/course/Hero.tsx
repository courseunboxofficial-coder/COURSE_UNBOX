import React from 'react'

const Hero = () => {

    
    return (


        <section className="w-full bg-gradient-to-r from-[#1e3a8a] via-[#6366f1] to-[#ec4899]
 bg-opacity-90 py-16 px-10">
            <div className="w-8xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                
                <div>

                    <h1 className="text-4xl font-extrabold leading-tight">
                        Data Science With Generative AI Course
                    </h1>

                    <p className="text-gray-300 mt-4 text-[15px] leading-relaxed">
                        Become a Certified Data Scientist with PW Skills and harness the power
                        of Machine Learning, NLP and Generative AI. Learn industry-relevant
                        skills that can help you build a strong career in Data Science.
                    </p>

                    <div className="mt-8">
                        <p className="text-gray-300 mb-3">Enroll Now!</p>

                        <div className="flex gap-4">
                            <button className="bg-[#f4cf3e] hover:bg-[#bac218] px-10 py-3 rounded-3xl font-bold text-black cursor-pointer">
                                Buy now
                            </button>

                            <button className="border border-[#08087e] bg-[#050590] text-white px-10 py-3 rounded-3xl flex items-center justify-center cursor-pointer">
                                <span className="text-xl">Download</span>
                            </button>
                        </div>
                    </div>
                </div>




                <div className="flex justify-center">
                    <img
                        src="/images/Course/course.jpeg"
                        alt="Course Banner"
                        className="rounded-2xl shadow-lg w-[90%]"
                    />
                </div>

            </div>
        </section>



    )
}

export default Hero