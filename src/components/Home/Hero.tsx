import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <section className=" flex  gap-40 w-full h-[70vh] bg-gradient-to-r from-[#1C336E] to-[#3d5ba9] text-white py-20 px-8 md:px-20">
            <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    India's <span className="text-yellow-400">#1 platform</span>
                </h1>
                <p className="text-lg md:text-xl mb-10">
                    For fresher jobs, internships and courses
                </p>

                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
                    <button className="flex items-center justify-center space-x-2 bg-[#e6ba2b] text-gray-800 pr-10 pl-1 py-2 rounded-4xl font-medium w-full md:w-auto cursor-pointer">
                        <Image src="/images/Home/googleLogo.png" width={60} height={20} alt="google" />
                        <span>Continue with Google</span>
                    </button>

                    <button className="flex items-center justify-center space-x-2 bg-blue-500 pr-12 pl-4 py-2 rounded-4xl font-medium w-full md:w-auto cursor-pointer">
                        <Image src="/images/Home/GmailLogo.webp" width={40} height={20} alt="email" className='rounded-full'/>
                        <span> Continue with Email </span>
                    </button>
                </div>

                <p className="text-sm mt-4">
                    By continuing, you agree to our <span className="underline">T&C</span>.
                </p>
            </div>

            <div>
                <Image src="/images/Home/HeroImage.png" width={600} height={600} alt='HeroImage' className='rounded-2xl hover:shadow-2xl hover:shadow-indigo-300 transition cursor-pointer'/>
            </div>
        </section>
    )
}

export default Hero