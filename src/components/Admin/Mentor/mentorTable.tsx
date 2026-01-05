import React, { useEffect, useState } from 'react'
import { Pencil, Trash2, Layers, Sparkles } from "lucide-react";
import { supabase } from '@/lib/supabse/supabaseConfig';
import { toast, ToastContainer } from 'react-toastify';

type Mentor = {

    id: number;
    name: string;
    profession: string;
    work_experience: number;
    teaching_experience: number;
    description: string;
    created_at: number

};

export default function MentorTable ({onEdit} : {onEdit : any}) {

    const [mentors, setMentors] = useState<Mentor[]>([]);


    const fetchTableData = async () => {

        const { data, error } = await supabase.from("Mentors").select("*");

        if (error) {

            console.log("THERE IS SOME ERROR OCCUR: ");
            console.log(error);

        } else {

            console.log("THE DATA OF THE TABLE IS : ");
            console.log(data);

            setMentors(data);

        };

    };


    useEffect(() => {

        fetchTableData();

    }, []);


    const handleDelete = async (id : number) => {

        const {data , error} = await supabase.from("Mentor").delete().eq("id", id);

        if(error){
            console.log("THERE IS SOME ERROR HAPPENS IN IT : ");
            console.log(error);
            toast.error("The error happens in this is : ");
        }

        toast.success("Mentor Data is Delete Succesfully : ");


        console.log(data);

        setMentors((prev) => prev.filter((mentor) => mentor.id !== id));

    }

    return (
        <section className="w-full max-w-7xl mx-auto px-4 py-10">

            
            <div className="relative overflow-hidden rounded-[32px] bg-white/80 backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,0.12)] border border-gray-100">
            
               
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500" />

                {/* Header */}
                <div className="flex items-center justify-between px-8 py-6">
                    <div className="flex items-center gap-3">
                        <div className="p-3 rounded-2xl bg-indigo-100 text-indigo-600">
                            
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">Mentors Management</h2>
                            <p className="text-sm text-gray-500">Manage, edit and organize</p>
                        </div>
                    </div>

                    <div className="text-sm font-medium text-gray-500">
                        Total Courses: <span className="text-gray-900">{mentors.length}</span>
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
                            {mentors.map((mentor) => (
                                <tr
                                    key={mentor.id}
                                    className="group border-t border-gray-100 hover:bg-gradient-to-r hover:from-indigo-50/40 hover:to-transparent transition-all"
                                >
                                    <td className="px-8 py-6">
                                        <div className="flex flex-col">
                                            <span className="text-base font-semibold text-gray-900">
                                                {mentor.name}
                                            </span>
                                            <span className="text-xs text-gray-400">Premium Course</span>
                                        </div>
                                    </td>

                                    <td className="px-8 py-6">
                                        <span className="inline-flex items-center rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-semibold text-indigo-600 shadow-sm">
                                            {mentor.profession}
                                        </span>
                                    </td>

                                    <td className="px-8 py-6 text-center">
                                        <button className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-100 to-emerald-200 px-5 py-2.5 text-sm font-semibold text-emerald-700 shadow-md hover:shadow-lg hover:scale-105 transition-all cursor-pointer" onClick={()=>onEdit(mentor)}>
                                            <Pencil size={16} /> Edit
                                        </button>
                                    </td>

                                    <td className="px-8 py-6 text-center">
                                        <button className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-rose-100 to-rose-200 px-5 py-2.5 text-sm font-semibold text-rose-700 shadow-md hover:shadow-lg hover:scale-105 transition-all cursor-pointer" onClick={()=>handleDelete(mentor.id)}>
                                            <Trash2 size={16} /> Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <ToastContainer/>
        </section>
    );
}
