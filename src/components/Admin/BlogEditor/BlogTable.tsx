"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Pencil, Trash2, BookOpen , Layers} from "lucide-react";
import { supabase } from "@/lib/supabse/supabaseConfig";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

type Blog = {

  id: string;
  title: string;
  content: string;
  FAQ: {
    question: string;
    answer: string
  }[];
  image: string,

  meta: {

    title: string,
    description: string
  },

  slug: string,
  alt: string,
  subcontent: string,
  created_at: string;
  author: string,
  domain: string;

};

const categories = [
  "All Blogs",
  "Digital Marketing",
  "Data Science",
  "IT & Software",
  "Development",
];



const BlogTable = ({ onEdit }: { onEdit: any }) => {


    const [Blogs, setBlogs] = useState<Blog[]>([]);
    const [currBlogs, setCurrBlogs] = useState<Blog[]>([]);
    const [activeCategory, setActiveCategory] = useState("All Blogs");
    const [selectedAuthor, setSelectedAuthor]  = useState("");
    const [showAuthorDropdown, setShowAuthorDropdown] = useState(false);
    const [authors, setAuthors] = useState<string[]>([]);




    const fetchTableData = async () => {


        const { data, error } = await supabase.from("Blog").select("*").order("created_at", {ascending : false});

        if (error) {

            console.log("THERE IS SOME ERROR OCCUR: ");
            console.log(error);

        } else {

            console.log("THE DATA OF THE TABLE IS : ");
            console.log(data);

            setBlogs(data);
        }

    };

    const handleDelete = async (id: string) => {

        console.log("This is Running correctly : ");



        const { data, error } = await supabase.from("Blog").delete().eq("id", id);

        if (error) {

            console.log("THE ERROR OCCUR IS : ");
            console.log(error);

            toast.error("There is some error");
            return;
        };



        toast.success("Data is Deleted");
        setBlogs((prev) => prev.filter((blog) => blog.id !== id));
    }
    function toNormalCase(name: string): string {
        return name
            .toLowerCase()
            .split(" ")
            .filter(Boolean) // removes extra spaces
            .map(word => word[0].toUpperCase() + word.slice(1))
            .join(" ");
    }


    
        useEffect(() => {
    
            fetchTableData();
    
    
        }, []);

        

        const allAuthors = useMemo(() => {
            return [...new Set(
                Blogs.map(blog => toNormalCase(blog.author).trim())
            )];
        }, [Blogs]);
    
    
        useEffect(()=>{
    
        
    
            const filterBlogs = Blogs.filter((blog)=>{
                if(selectedAuthor){
                    return blog.author===selectedAuthor;
                }
                if(activeCategory ==='All Blogs'){
                    return true;
                }
    
                return activeCategory === blog.domain;
            });
    
            setCurrBlogs(filterBlogs);
         
    
        },[Blogs, activeCategory,selectedAuthor]);


    return (

        <>
            <section className="w-full max-w-7xl mx-auto px-4 py-10">

                {/* Glass Card */}
                <div className="relative overflow-hidden rounded-[32px] bg-white/80 backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,0.12)] border border-gray-100">

                    {/* Decorative Gradient */}
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500" />

                    {/* Header */}
                    <div className="flex items-center justify-between px-20 py-6">
                        <div className="flex items-center gap-3">
                            <div className="p-3 rounded-2xl bg-indigo-100 text-indigo-600">
                                <BookOpen size={22} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">Blog Management</h2>
                                <p className="text-sm text-gray-500">Manage, edit and organize courses</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 ">
                        {/* Categories */}
                        {categories.map((cat) => (
                            <button
                            key={cat}
                            onClick={() => {
                                setActiveCategory(cat);
                                setSelectedAuthor("");
                            }}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition shadow-sm cursor-pointer
                                ${
                                activeCategory === cat
                                    ? "bg-blue-600 text-white"
                                    : "bg-slate-100 text-slate-700 hover:bg-blue-100"
                                }
                            `}
                            >
                            {cat}
                            </button>
                        ))}

                        {/* Author Dropdown */}
                        <div className="relative">
                            <button
                            onClick={() => setShowAuthorDropdown(!showAuthorDropdown)}
                            className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 hover:bg-blue-100 text-sm font-medium flex items-center gap-1 cursor-pointer shadow-lg"
                            >
                            By   {selectedAuthor ? ` ${selectedAuthor} `   : "Author"}  
                            <span className={`text-xs transition-transform duration-300 shadow-lg ${showAuthorDropdown ? 'rotate-0' : '-rotate-180'}`}>▼</span>
                            </button>

                            {showAuthorDropdown && (
                            <div className="absolute left-0 mt-2 w-44 bg-white shadow-lg rounded-xl border border-blue-300 z-20 cursor-pointer ">
                                {authors.map((author) => (
                                <button
                                    key={author}
                                    onClick={() => {
                                    setSelectedAuthor(author);
                                    setShowAuthorDropdown(false);
                                    setActiveCategory("All Blogs");
                                    }}
                                    className="w-full text-left px-4 py-2 text-sm hover:bg-blue-50 cursor-pointer shadow-lg"
                                >
                                    {author}
                                </button>
                                ))}
                            </div>
                            )}
                        </div>
                        </div>

                       
                    </div>

                    <div className="flex justify-end items-center gap-2 text-sm font-medium text-gray-500 px-10 py-6">
                        <Layers size={18} />

                        <span>

                            Total Blogs: <span className="text-gray-900">{currBlogs.length}</span>

                        </span>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-xs uppercase tracking-wider text-gray-500 bg-gradient-to-r from-gray-50 to-gray-100">
                                    <th className="px-8 py-5 text-left">Course</th>
                                    <th className="px-8 py-5 text-left">Domain</th>
                                    <th className="px-8 py-5 text-center">Edit</th>
                                    <th className="px-8 py-5 text-center">Delete</th>
                                </tr>
                            </thead>

                            <tbody>
                                {Blogs.map((blog) => (
                                    <tr
                                        key={blog.id}
                                        className="group border-t border-gray-100 hover:bg-gradient-to-r hover:from-indigo-50/40 hover:to-transparent transition-all"
                                    >
                                        <td className="px-8 py-6">
                                            <div className="flex flex-col">
                                                <span className="text-base font-semibold text-gray-900">
                                                    {blog.title}
                                                </span>
                                                <span className="text-xs text-gray-400">Premium Course</span>
                                            </div>
                                        </td>

                                        <td className="px-8 py-6">
                                            <span className="inline-flex items-center rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-semibold text-indigo-600 shadow-sm">
                                                {blog.domain}
                                            </span>
                                        </td>

                                        <td className="px-8 py-6 text-center">
                                            <button onClick={(e) => { onEdit(blog) }} className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-100 to-emerald-200 px-5 py-2.5 text-sm font-semibold text-emerald-700 shadow-md hover:shadow-lg hover:scale-105 transition-all cursor-pointer">
                                                <Pencil size={16} /> Edit
                                            </button>
                                        </td>

                                        <td className="px-8 py-6 text-center">
                                            <button className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-rose-100 to-rose-200 px-5 py-2.5 text-sm font-semibold text-rose-700 shadow-md hover:shadow-lg hover:scale-105 transition-all cursor-pointer" onClick={(e) => { handleDelete(blog.id) }}>
                                                <Trash2 size={16} />
                                                Delete

                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <ToastContainer />
            </section>


        </>
    );
}


export default BlogTable
