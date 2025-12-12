import Image from 'next/image'
import React from 'react'

const TopCourses = () => {
    return (
        <div>
            <section className="w-full h-[90vh] mb-10 bg-gradient-to-r from-[#059ad0] to-[#2b54ba] py-12 px-8 md:px-20">
                <h2 className="text-4xl font-bold mb-12">Top Courses</h2>

                <div className='flex gap-20'>
                    <div className="bg-white shadow-2xl h-[65vh] w-[27vw] rounded-3xl hover:scale-105 transition cursor-pointer">
                        <Image src="/images/Home/Course.jpg" width={400} height={300} alt='courseImage' className='rounded-tr-2xl rounded-tl-2xl'/>
                    </div>

                    <div className="bg-white shadow-2xl  h-[65vh] w-[27vw] rounded-3xl hover:scale-105 transition  cursor-pointer">
                        <Image src="/images/Home/Course.jpg" width={400} height={300} alt='courseImage' className='rounded-tr-2xl rounded-tl-2xl'/>
                    </div>

                    <div className="bg-white shadow-2xl  h-[65vh] w-[27vw] rounded-3xl hover:scale-105 transition  cursor-pointer">
                        <Image src="/images/Home/Course.jpg" width={400} height={300} alt='courseImage' className='rounded-tr-2xl rounded-tl-2xl'/>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default TopCourses