"use client";

import { supabase } from "@/lib/supabse/supabaseConfig";
import React, { useState } from "react";
import { toast } from "react-toastify";

const AddBlog = ({ collapsed }: { collapsed: boolean }) => {

    const [imageURL, setImageURL] = useState("");
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        domain: "",
    });

    const [content, setContent] = useState({

        firstQuestion: "",
        firstAnswer: "",
        secondQuestion: "",
        secondAnswer: "",
        thirdQuestion: "",
        thirdAnswer: "",
        fourthQuestion: "",
        fourthAnswer: "",
        fifthQuestion: "",
        fifthAnswer: "",
        sixthQuestion: "",
        sixthAnswer: ""

    });

    const [loading, setloading] = useState(false);



    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleContentChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setContent({ ...content, [e.target.name]: e.target.value });
    };


    const handleSave = async () => {
        setloading(true);

        const { data, error } = await supabase.from("Blog").insert([{

            title: formData.title,
            domain: formData.domain,
            content: formData.content,
            FAQ: [
                { question: content.firstQuestion, answer: content.firstAnswer },
                { question: content.secondQuestion, answer: content.secondAnswer },
                { question: content.thirdQuestion, answer: content.thirdAnswer },
                { question: content.fourthQuestion, answer: content.fourthAnswer },
                { question: content.fifthQuestion, answer: content.fifthAnswer },
                { question: content.sixthQuestion, answer: content.sixthAnswer },
            ],

            image: imageURL

        }]).select().single();

        if (error) {
            console.log("THE ERROR COMES IS : ");
            console.log(error);

            return
        };


        if (error) {
            console.error(error);
            setloading(true);
            toast.error("Update failed");
            return;
        }

        setloading(false);
        toast.success("Blog updated successfully");
    }


    const handleFileData = async (event: React.ChangeEvent<HTMLInputElement>) => {

        const file = event.target.files?.[0];

        if (!file) {
            return;
        };

        const fileName = `${Date.now()}-${file.name}`;

        const { data, error } = await supabase.storage.from("AppImages").upload(fileName, file, { upsert: true });


        if (error) {
            console.log(error);
        } else {
            console.log(data);
        };

        const { data: publicUrlData } = await supabase.storage.from("AppImages").getPublicUrl(fileName);

        console.log(publicUrlData)
        console.log(publicUrlData.publicUrl);
        setImageURL(publicUrlData.publicUrl);

    }

    return (
        <div className={`${collapsed ? "w-[85vw]" : "w-[75vw]"} mx-auto mt-10 px-4`}>
            <div className="rounded-2xl border border-blue-200 bg-white shadow-xl overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

                <div className="text-center text-3xl font-bold mt-4">
                    Add Course
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-8">

                    {/* ================= FORM ================= */}

                    <div className="space-y-5">

                        {/* Title */}

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Blog Title
                            </label>
                            <input
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                className="w-full rounded-xl border px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                                required
                            />
                        </div>

                        {/* Domain + Language */}

                        <div className="flex gap-4">
                            <div className="w-full">
                                <label className="block text-sm font-medium mb-2">
                                    Domain
                                </label>
                                <select
                                    name="domain"
                                    value={formData.domain}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border px-4 py-3 text-sm"
                                >
                                    <option value="">Select Mode</option>
                                    <option value="digi">Digital Marketing</option>
                                    <option value="deve">Development</option>
                                    <option value="IT">IT & Software</option>
                                    <option value="Data">Data Science</option>

                                </select>
                            </div>

                        </div>


                        {/* Description */}

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Short Description
                            </label>
                            <textarea
                                name="content"
                                value={formData.content}
                                onChange={handleChange}
                                rows={10}
                                className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                            />
                        </div>


                        {/* Image Upload */}

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Course Image
                            </label>

                            <div className="flex items-center gap-4">
                                <label className="flex cursor-pointer items-center justify-center rounded-xl border-2 border-dashed border-blue-300 bg-blue-50 px-6 py-4 text-sm font-medium text-blue-600 hover:bg-blue-100 transition">
                                    Upload Image
                                    <input type="file" className="hidden" onChange={handleFileData} />
                                </label>
                                <span className="text-xs text-gray-500">
                                    PNG, JPG up to 5MB
                                </span> <br/>
                                <span>
                                    {imageURL}
                                </span>
                            </div>
                        </div>


                        {/* Submit */}

                        <button className="mt-6 px-10 py-4 rounded-3xl bg-blue-600 text-white text-sm font-medium transition cursor-pointer hover:bg-[#020242] mb-3" onClick={handleSave}>
                            {loading ? "...Loading" : "Save Blog"}
                        </button>

                    </div>


                    <div>
                        {/* content */}

                        <div className="h-[80vh] border p-3 rounded-3xl">
                            <p className="text-center text-2xl font-bold mb-5"> Frequently Asked Questions ? </p>

                            <div className="flex gap-4 justify-between">
                                <div className="flex flex-col mb-3">
                                    <label className="block text-sm font-medium mb-2">
                                        First Question
                                    </label>
                                    <input
                                        name="firstQuestion"
                                        value={content.firstQuestion}
                                        onChange={handleContentChange}
                                        className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label className="block text-sm font-medium mb-2">
                                        First Answer
                                    </label>
                                    <textarea
                                        name="firstAnswer"
                                        value={content.firstAnswer}
                                        onChange={handleContentChange}
                                        rows={2}
                                        className="w-full rounded-xl border px-4 text-sm resize-none"
                                    />
                                </div>
                            </div>

                            <div className="flex gap-4 justify-between">
                                <div className="flex flex-col mb-3">
                                    <label className="block text-sm font-medium mb-2">
                                        Second Question
                                    </label>
                                    <input
                                        name="secondQuestion"
                                        value={content.secondQuestion}
                                        onChange={handleContentChange}
                                        className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label className="block text-sm font-medium mb-2">
                                        Second Answer
                                    </label>
                                    <textarea
                                        name="secondAnswer"
                                        value={content.secondAnswer}
                                        onChange={handleContentChange}
                                        rows={2}
                                        className="w-full rounded-xl border px-4 text-sm resize-none"
                                    />
                                </div>
                            </div>

                            <div className="flex gap-4 justify-between">
                                <div className="flex flex-col mb-3">
                                    <label className="block text-sm font-medium mb-2">
                                        Third Question
                                    </label>
                                    <input
                                        name="thirdQuestion"
                                        value={content.thirdQuestion}
                                        onChange={handleContentChange}
                                        className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                    />
                                </div>

                                <div className="flex flex-col">

                                    <label className="block text-sm font-medium mb-2">

                                        Third Answer

                                    </label>
                                    <textarea
                                        name="thirdAnswer"
                                        value={content.thirdAnswer}
                                        onChange={handleContentChange}
                                        rows={2}
                                        className="w-full rounded-xl border px-4 text-sm resize-none"
                                    />
                                </div>
                            </div>

                            <div className="flex gap-4 justify-between">
                                <div className="flex flex-col mb-3">
                                    <label className="block text-sm font-medium mb-2">
                                        fourth Question
                                    </label>
                                    <input
                                        name="fourthQuestion"
                                        value={content.fourthQuestion}
                                        onChange={handleContentChange}
                                        className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label className="block text-sm font-medium mb-2">
                                        fourth Answer
                                    </label>
                                    <textarea
                                        name="fourthAnswer"
                                        value={content.fourthAnswer}
                                        onChange={handleContentChange}
                                        rows={2}
                                        className="w-full rounded-xl border px-4 text-sm resize-none"
                                    />
                                </div>
                            </div>

                            <div className="flex gap-4 justify-between">
                                <div className="flex flex-col mb-3">
                                    <label className="block text-sm font-medium mb-2">
                                        Fifth Question
                                    </label>
                                    <input
                                        name="fifthQuestion"
                                        value={content.fifthQuestion}
                                        onChange={handleContentChange}
                                        className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label className="block text-sm font-medium mb-2">
                                        Fifth Answer
                                    </label>
                                    <textarea
                                        name="fifthAnswer"
                                        value={content.fifthAnswer}
                                        onChange={handleContentChange}
                                        rows={2}
                                        className="w-full rounded-xl border px-4 text-sm resize-none"
                                    />
                                </div>
                            </div>

                            <div className="flex gap-4 justify-between">
                                <div className="flex flex-col mb-3">
                                    <label className="block text-sm font-medium mb-2">
                                        sixth Answer
                                    </label>
                                    <input
                                        name="sixthQuestion"
                                        value={content.sixthQuestion}
                                        onChange={handleContentChange}
                                        className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label className="block text-sm font-medium mb-2">
                                        sixth Question
                                    </label>
                                    <textarea
                                        name="sixthAnswer"
                                        value={content.sixthAnswer}
                                        onChange={handleContentChange}
                                        rows={2}
                                        className="w-full rounded-xl border px-4 text-sm resize-none"
                                    />
                                </div>
                            </div>

                        </div>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default AddBlog;
