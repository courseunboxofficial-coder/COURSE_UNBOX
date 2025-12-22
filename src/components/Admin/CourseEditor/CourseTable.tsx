"use client";

import React, { useEffect, useState } from "react";
import { Pencil, Trash2, BookOpen } from "lucide-react";
import { supabase } from "@/lib/supabse/supabaseConfig";

type course = {
    id : string;
    title: string;
    description: string;
    startDate : number;
    Duration : number;
    language: string;
    content : string;
    created_at: number;
    domain : string;
    Delivery_Mode : string


};

const CourseTable = ({onEdit} : {onEdit : any}) => {


  const [courses, setCourses] = useState<course[]>([]);

  const fetchTableData = async () => {
    const { data, error } = await supabase.from("Courses").select("*");

    if (error) {

      console.log("THERE IS SOME ERROR OCCUR: ");
      console.log(error);

    } else {

      console.log("THE DATA OF THE TABLE IS : ");
      console.log(data);

      setCourses(data);
    }

  };

  const handleDelete = async (id : string) => {
    const {data , error} = await supabase.from("Courses").delete().eq("id" , id);

    if(error){
      console.log("THE ERROR OCCUR IS : ");
      console.log(error);
    };

    console.log(data);

  }


  useEffect(() => {

    fetchTableData();

  },[])
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-10">

      {/* Glass Card */}
      <div className="relative overflow-hidden rounded-[32px] bg-white/80 backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,0.12)] border border-gray-100">

        {/* Decorative Gradient */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500" />

        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-indigo-100 text-indigo-600">
              <BookOpen size={22} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Course Management</h2>
              <p className="text-sm text-gray-500">Manage, edit and organize courses</p>
            </div>
          </div>

          <div className="text-sm font-medium text-gray-500">
            Total Courses: <span className="text-gray-900">{courses.length}</span>
          </div>
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
              {courses.map((course) => (
                <tr
                  key={course.id}
                  className="group border-t border-gray-100 hover:bg-gradient-to-r hover:from-indigo-50/40 hover:to-transparent transition-all"
                >
                  <td className="px-8 py-6">
                    <div className="flex flex-col">
                      <span className="text-base font-semibold text-gray-900">
                        {course.title}
                      </span>
                      <span className="text-xs text-gray-400">Premium Course</span>
                    </div>
                  </td>

                  <td className="px-8 py-6">
                    <span className="inline-flex items-center rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-semibold text-indigo-600 shadow-sm">
                      {course.domain}
                    </span>
                  </td>

                  <td className="px-8 py-6 text-center">
                    <button onClick={(e)=>{onEdit(course)}} className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-100 to-emerald-200 px-5 py-2.5 text-sm font-semibold text-emerald-700 shadow-md hover:shadow-lg hover:scale-105 transition-all cursor-pointer">
                      <Pencil size={16} /> Edit
                    </button>
                  </td>

                  <td className="px-8 py-6 text-center">
                    <button className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-rose-100 to-rose-200 px-5 py-2.5 text-sm font-semibold text-rose-700 shadow-md hover:shadow-lg hover:scale-105 transition-all cursor-pointer" onClick={(e)=>{handleDelete(course.id)}}>
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
    </section>
  );
}


export default CourseTable
