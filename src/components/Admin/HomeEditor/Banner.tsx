import React, { useState } from 'react'
import { supabase } from '@/lib/supabse/supabaseConfig';

const Banner = ({ collapsed }: { collapsed: boolean }) => {
    const [formData, setFormData] = useState({
        firstTitle: "",
        firstNumber: "",
        secondTitle: "",
        secondNumber: "",
        thirdTitle: "",
        thirdNumber: "",
        fourthTitle: "",
        fourthNumber: ""
    });

    const [loading, setLoading] = useState(false);


    const handleFormData = (event: React.ChangeEvent<HTMLInputElement>) => {

        setFormData((prev) => {
            return { ...prev, [event.target.name]: event.target.value };
        });
    }

    const handleData = async () => {

        setLoading(true);

        const { data, error } = await supabase.from("Home").insert([{ section: "Banner", content: formData }]).select().single();

        console.log(data);


        if (error) {
            console.log("THERE IS SOME ERROR : ", error);
        }

        if (data) {

            setLoading(false);

        };


    }


    return (

        <div className={`${collapsed ? "w-[85vw]" : "w-[75vw]"} mx-auto mt-10 px-4`}>

            <div className="rounded-2xl border border-blue-200 bg-white shadow-xl overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

                <div className='text-center text-3xl font-bold mt-3'>Banner Section</div>

                <div className="p-8 space-y-8">


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                First Title
                            </label>
                            <input
                                name="firstTitle"
                                value={formData.firstTitle}
                                onChange={handleFormData}
                                placeholder="Learn Anytime, Anywhere"
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                First Number
                            </label>
                            <input
                                name="firstNumber"
                                value={formData.firstNumber}
                                onChange={handleFormData}
                                placeholder="100+ Courses"
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Second Title
                            </label>
                            <input
                                name="secondTitle"
                                value={formData.secondTitle}
                                onChange={handleFormData}
                                placeholder="Upgrade your skills"
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Second Number
                            </label>
                            <input
                                name="secondNumber"
                                value={formData.secondNumber}
                                onChange={handleFormData}
                                placeholder="5000+ Students"
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Third Title
                            </label>
                            <input
                                name="thirdTitle"
                                value={formData.thirdTitle}
                                onChange={handleFormData}
                                placeholder="Industry Experts"
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Third Number
                            </label>
                            <input
                                name="thirdNumber"
                                value={formData.thirdNumber}
                                onChange={handleFormData}
                                placeholder="50+ Mentors"
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Fourth Title
                            </label>
                            <input
                                name="fourthTitle"
                                value={formData.fourthTitle}
                                onChange={handleFormData}
                                placeholder="Certifications"
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Fourth Number
                            </label>
                            <input
                                name="fourthNumber"
                                value={formData.fourthNumber}
                                onChange={handleFormData}
                                placeholder="20+ Domains"
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>
                    </div>

                </div>


                <div className="w-[70vw] mx-auto rounded-2xl border border-gray-200 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-8">

                    <p className="text-xs font-medium text-gray-500 mb-3">LIVE PREVIEW</p>


                    <div className="space-y-4">
                        <h1 className="text-3xl font-bold text-gray-900">
                            {"Hero heading goes here"}
                        </h1>
                        <h2 className="text-lg font-medium text-blue-600">
                            {"Sub heading goes here"}
                        </h2>
                        <p className="text-gray-600 max-w-md">
                            {"Hero description goes here"}
                        </p>
                    </div>


                </div>


                <button
                    onClick={handleData}
                    className="mt-6 ml-7 mb-4 px-10 py-4 rounded-3xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition cursor-pointer"
                >
                    {loading ? "Loading..." : "Update"}

                </button>

            </div>
        </div>

    )
}

export default Banner



