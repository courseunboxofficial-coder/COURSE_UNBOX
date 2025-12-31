"use client"
import React, { useState } from 'react'
import BlogCard from './BlogEditor/BlogCard';
import BlogTable from './BlogEditor/BlogTable';
import AddBlog from './BlogEditor/AddBlog';
import EditBlog from './BlogEditor/EditBlog';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

type blog = {

    id: string;
    title: string;
    content: string;
    author: string;
    FAQ: {
        question: string;
        answer: string
    }[];
    created_at: number;
    image : string,
    domain: string;

};



const BlogEditor = ({ collapsed }: { collapsed: boolean }) => {

    const [active, setActive] = useState("card");
    const [editItem, setEditItem] = useState<blog | null>(null);

    const handleCardView = () => {
        setActive("card");
    }

    const handleTableView = () => {
        setActive("Table")
    }

    const onEdit = (blog : blog ) => {
        setActive("Edit");
        setEditItem(blog);

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

            {active === "card" && <BlogCard onEdit={onEdit} />}
            {active === "Table" && <BlogTable onEdit={onEdit} />}
            {active === "Add" && <AddBlog collapsed={collapsed} />}
            {active === "Edit" && editItem && (<EditBlog collapsed={collapsed} blog={editItem} />)}
        </>
    );
}

export default BlogEditor