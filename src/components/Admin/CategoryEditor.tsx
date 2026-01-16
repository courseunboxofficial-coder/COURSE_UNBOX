"use client"

import { supabase } from '@/lib/supabse/supabaseConfig'
import React, { useEffect, useState } from 'react'
import Courses from './Category/Courses';
import Duplicate from './Category/Duplicate';
import Pages from './Category/Pages';

const CategoryEditor = ({ collapsed }: { collapsed: boolean }) => {


    const [active, setActive] = useState("card");

    const handleCoursesView = () => {

        setActive("course");

    }

    const handleDuplicateView = () => {

        setActive("duplicate")

    }

    const handlePages = () => {

        setActive("pages");

    }

    

    const getCoursesData = async () => {
        const { data, error } = await supabase.from("Courses").select("*");
    }

    useEffect(() => {

        getCoursesData();

    }, []);


    return (
        <section>
            <div>
                <div className='flex gap-4 w-full'>
                    <button className='py-4 px-10 bg-blue-600 rounded-4xl text-white font-bold cursor-pointer hover:bg-[#0e0e4d] transition' onClick={handleCoursesView}>Courses</button>
                    <button className='py-4 px-10 bg-blue-600 rounded-4xl text-white font-bold cursor-pointer hover:bg-[#0e0e4d] transition' onClick={handleDuplicateView}>Duplicate</button>
                    <button className='py-4 px-10 bg-blue-600 rounded-4xl text-white font-bold cursor-pointer hover:bg-[#0e0e4d] transition' onClick={handlePages}>Pages</button>
                </div>
            </div>

            {active === "course" && <Courses/>}
            {active === "duplicate" && <Duplicate />}
            {active === "pages" && <Pages/>}


            
        </section>
    )
}

export default CategoryEditor