"use client"

import { supabase } from '@/lib/supabse/supabaseConfig'
import React, { useEffect, useState } from 'react'
import Courses from './Pages/Courses';
import Duplicate from './Pages/Duplicate';
import Pages from './Pages/Pages';
import EditPage from './Pages/EditPage';


type Course = {

    id: string;
    title: string;
    description: string;
    startDate: string;
    Duration: number;
    language: string;
    domain: string;
    Delivery_Mode: string;
    low: number,
    high: number,
    price: number,
    content: {
        title: string;
        subtitle: string;
    }[];
    Testimonials:
    {
        name: string,
        role: string,
        company: string,
        title: string,
        description: string,
        ranking: string,
        course: string
    }[],
    modules: Record<
        string,
        {
            module: string;
            title: string;
            lectures: string[];
        }[]
    >,

    FAQ: {
        question: string;
        answer: string
    }[];

    meta: {
        title: string,
        description: string
    },

    slug: string,

    alt: string,

    image: string;

    city : string

}



const PagesEditor = ({ collapsed }: { collapsed: boolean }) => {


    const [active, setActive] = useState("course");
    const [editItem, setEditItem] = useState<Course | null>(null);

    const handleCoursesView = () => {

        setActive("course");

    }

    const handleDuplicateView = () => {

        setActive("duplicate")

    }

    const handlePages = () => {

        setActive("pages");

    }

    const onEdit = (pages : Course) => {

        setActive("Edit");
        setEditItem(pages );

    }


    return (
        <section>
            <div>
                <div className='flex gap-4 w-full'>
                    <button className='py-4 px-10 bg-blue-600 rounded-4xl text-white font-bold cursor-pointer hover:bg-[#0e0e4d] transition' onClick={handleCoursesView}>Courses</button>
                    <button className='py-4 px-10 bg-blue-600 rounded-4xl text-white font-bold cursor-pointer hover:bg-[#0e0e4d] transition' onClick={handleDuplicateView}>Duplicate</button>
                    <button className='py-4 px-10 bg-blue-600 rounded-4xl text-white font-bold cursor-pointer hover:bg-[#0e0e4d] transition' onClick={handlePages}>Pages</button>
                </div>
            </div>

            {active === "course" && <Courses />}
            {active === "duplicate" && <Duplicate onEdit={onEdit} /> }
            {active === "pages" && <Pages onEdit={onEdit}/>}
            {active === "Edit" && editItem && (<EditPage  collapsed={collapsed} course={editItem} />)}



        </section>
    )
}

export default PagesEditor