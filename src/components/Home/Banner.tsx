import Image from 'next/image'
import React from 'react'
import {NotepadText,Brain, GraduationCap,} from "lucide-react"

const Banner = () => {
    return (
        <section className="w-full py-8 bg-[#cdf1f8] px-8 md:px-20 border-2 border-blue-300">
            <div className='flex items-center justify-around'>
                <div className='w-[20vw] flex gap-4 items-center justify-center border border-blue-900 border-l-0 border-r-4 border-t-0 border-b-0 p-3'>
                    <div className='text-2xl text-blue-950'>
                        <NotepadText size={52}/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='text-2xl text-blue-950 font-bold'>
                            40+
                        </div>
                        <div className='text-2xl text-gray-500'>
                            courses
                        </div>
                    </div>
                </div>


                <div className='w-[20vw] flex gap-4 items-center justify-center  border border-blue-900 border-l-0 border-r-4 border-t-0 border-b-0 p-3'>
                    <div className='text-2xl text-blue-950'>
                        <GraduationCap size={52}/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='text-2xl text-blue-950 font-bold'>
                            100K+
                        </div>
                        <div className='text-2xl text-gray-500'>
                            Students
                        </div>
                    </div>
                </div>

                <div className=' w-[20vw] flex gap-4  items-center justify-center  border border-blue-900 border-l-0 border-r-4 border-t-0 border-b-0 p-3'>
                    <div className='text-2xl text-blue-950 font-bold'>
                        <Brain size={52}/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='text-2xl text-blue-950 font-bold'>
                            12+
                        </div>
                        <div className='text-2xl text-gray-500'>
                            Experience
                        </div>
                    </div>
                </div>

                <div className=' w-[20vw] flex gap-4 items-center justify-center  border border-blue-900 border-l-0 border-r-4 border-t-0 border-b-0 p-3'>
                    <div className='text-2xl text-blue-950 font-bold'>
                        <Brain size={52}/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='text-2xl text-blue-950 font-bold'>
                            12+
                        </div>
                        <div className='text-2xl text-gray-500'>
                            Experience
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Banner