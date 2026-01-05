"use client"

import React, { useState } from 'react'
import CourseCards from './CourseEditor/CourseCards';
import CourseTable from './CourseEditor/CourseTable';
import AddCourse from './CourseEditor/AddCourse';
import EditCourse from './CourseEditor/EditCourse';

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

}


const CourseEditor = ({ collapsed }: { collapsed: boolean }) => {
    const [active, setActive] = useState("card");
    const [editItem, setEditItem] = useState<Course | null>(null);

    const handleCardView = () => {
        setActive("card");
    }

    const handleTableView = () => {
        setActive("Table")
    }

    const onEdit = (course: Course) => {
        setActive("Edit");
        setEditItem(course);

    }

    const handleAdd = () => {
        setActive("Add");
    }
    return (
        <>

            <div>
                <div className='flex gap-4 w-full'>
                    <button className='py-4 px-10 bg-blue-600 rounded-4xl text-white font-bold cursor-pointer' onClick={handleCardView}>Card</button>
                    <button className='py-4 px-10 bg-blue-600 rounded-4xl text-white font-bold cursor-pointer' onClick={handleTableView}>Table</button>
                    <button className='py-4 px-10 bg-blue-600 rounded-4xl text-white font-bold cursor-pointer' onClick={handleAdd}>Add</button>
                </div>
            </div>

            {active === "card" && <CourseCards onEdit={onEdit} />}
            {active === "Table" && <CourseTable onEdit={onEdit} />}
            {active === "Add" && <AddCourse collapsed={collapsed} />}
            {active === "Edit" && editItem && (<EditCourse collapsed={collapsed} course={editItem} />)}

        </>
    );
}

export default CourseEditor