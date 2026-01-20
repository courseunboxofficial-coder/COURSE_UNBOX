"use client"

import React, { useState } from 'react'
import CategoryCard from './CategoryEditor/CategoryCard';
import CategoryTable from './CategoryEditor/CategoryTable';
import AddCategory from './CategoryEditor/AddCategory';
import EditCategory from './CategoryEditor/EditCategory';

type Category = {

  id: string;
  title: string;
  description: string;
  domain: string,
  about : string

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


const CategoryEditor = ({ collapsed }: { collapsed: boolean }) => {
  const [active, setActive] = useState("card");
  const [editItem, setEditItem] = useState<Category | null>(null);

  const handleCardView = () => {
    setActive("card");
  }

  const handleTableView = () => {
    setActive("Table")
  }

  const onEdit = (course: Category) => {
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

      {active === "card" && <CategoryCard onEdit={onEdit} />}
      {active === "Table" && <CategoryTable onEdit={onEdit} />}
      {active === "Add" && <AddCategory collapsed={collapsed} />}
      {active === "Edit" && editItem && (<EditCategory collapsed={collapsed} category={editItem} />)}

    </>
  );
}

export default CategoryEditor