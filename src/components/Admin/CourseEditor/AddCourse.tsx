"use client";

import { supabase } from "@/lib/supabse/supabaseConfig";
import React, { useState } from "react";

const AddCourse = ({ collapsed }: { collapsed: boolean }) => {

    const [imageURL, setImageURL] = useState("");
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        startDate: "",
        Duration: 0,
        language: "",
        domain: "",
        Delivery_Mode: "",
    });

    const [content, setContent] = useState({
        firstTitle: "",
        firstDescription: "",
        secondTitle: "",
        secondDescription: "",
        thirdTitle: "",
        thirdDescription: "",
        fourthTitle: "",
        fourthDescription: "",
        fifthTitle: "",
        fifthDescription: "",
        sixthTitle: "",
        sixthDescription: ""
    });

    const [Testimonial1 , setTestimonial1] = useState({
        name : "",
        role : "",
        company : "",
        title : "",
        description : "",
        ranking : "",
        course : ""
    });

    const [Testimonial2 , setTestimonial2] = useState({
        name : "",
        role : "",
        company : "",
        title : "",
        description : "",
        ranking : "",
        course : ""
    });

    const [Testimonial3 , setTestimonial3] = useState({
        name : "",
        role : "",
        company : "",
        title : "",
        description : "",
        ranking : "",
        course : ""
    });





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

    const handleTestimonial = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setTestimonial1({ ...Testimonial1, [e.target.name]: e.target.value });
    };


    const handleSave = async () => {
        const { data, error } = await supabase.from("Courses").insert([{

            title: formData.title,
            description: formData.description,
            startDate: formData.startDate,
            Duration: formData.Duration,
            language: formData.language,
            domain: formData.domain,
            Delivery_Mode: formData.Delivery_Mode,
            content: {},
            image: imageURL

        }]).select().single();

        if (error) {
            console.log("THE ERROR COMES IS : ");
            console.log(error);

            return
        };


        console.log(data);
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
                                Course Title
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

                            <div className="w-full">
                                <label className="block text-sm font-medium mb-2">
                                    language
                                </label>
                                <select
                                    name="language"
                                    value={formData.language}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border px-4 py-3 text-sm"
                                >
                                    <option value="">Select Mode</option>
                                    <option value="Online">English</option>
                                    <option value="Offline">Hindi</option>
                                    <option value="Hybrid">Other</option>
                                </select>
                            </div>

                        </div>

                        {/* Start Date + Duration */}

                        <div className="flex gap-4">
                            <div className="w-full">
                                <label className="block text-sm font-medium mb-2">
                                    Start Date
                                </label>
                                <input
                                    type="date"
                                    name="startDate"
                                    value={formData.startDate}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border px-4 py-3 text-sm"
                                />
                            </div>

                            <div className="w-full">
                                <label className="block text-sm font-medium mb-2">
                                    Duration (Days)
                                </label>
                                <input
                                    type="number"
                                    name="Duration"
                                    value={formData.Duration}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border px-4 py-3 text-sm"
                                />
                            </div>
                        </div>

                        {/* Delivery Mode */}

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Delivery Mode
                            </label>
                            <select
                                name="Delivery_Mode"
                                value={formData.Delivery_Mode}
                                onChange={handleChange}
                                className="w-full rounded-xl border px-4 py-3 text-sm"
                            >
                                <option value="">Select Mode</option>
                                <option value="Online">Online</option>
                                <option value="Offline">Offline</option>
                                <option value="Hybrid">Hybrid</option>
                            </select>
                        </div>

                        {/* Description */}

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Short Description
                            </label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                rows={3}
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
                                </span>
                            </div>
                        </div>

                    </div>


                    <div>
                        {/* content */}

                        <div className="h-[80vh] border p-3 rounded-3xl">
                            <p className="text-center text-2xl font-bold mb-5">Why choose this course section ?</p>

                            <div className="flex gap-4 justify-between">
                                <div className="flex flex-col mb-3">
                                    <label className="block text-sm font-medium mb-2">
                                        FirstTitle
                                    </label>
                                    <input
                                        name="firstTitle"
                                        value={content.firstTitle}
                                        onChange={handleContentChange}
                                        className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label className="block text-sm font-medium mb-2">
                                        First Description
                                    </label>
                                    <textarea
                                        name="firstDescription"
                                        value={content.firstDescription}
                                        onChange={handleContentChange}
                                        rows={2}
                                        className="w-full rounded-xl border px-4 text-sm resize-none"
                                    />
                                </div>
                            </div>

                            <div className="flex gap-4 justify-between">
                                <div className="flex flex-col mb-3">
                                    <label className="block text-sm font-medium mb-2">
                                        SecondTitle
                                    </label>
                                    <input
                                        name="secondTitle"
                                        value={content.secondTitle}
                                        onChange={handleContentChange}
                                        className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label className="block text-sm font-medium mb-2">
                                        Second Description
                                    </label>
                                    <textarea
                                        name="secondDescription"
                                        value={content.secondDescription}
                                        onChange={handleContentChange}
                                        rows={2}
                                        className="w-full rounded-xl border px-4 text-sm resize-none"
                                    />
                                </div>
                            </div>

                            <div className="flex gap-4 justify-between">
                                <div className="flex flex-col mb-3">
                                    <label className="block text-sm font-medium mb-2">
                                        ThirdTitle
                                    </label>
                                    <input
                                        name="thirdTitle"
                                        value={content.thirdTitle}
                                        onChange={handleContentChange}
                                        className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                    />
                                </div>

                                <div className="flex flex-col">

                                    <label className="block text-sm font-medium mb-2">

                                        First Description

                                    </label>
                                    <textarea
                                        name="thirdDescription"
                                        value={content.thirdDescription}
                                        onChange={handleContentChange}
                                        rows={2}
                                        className="w-full rounded-xl border px-4 text-sm resize-none"
                                    />
                                </div>
                            </div>

                            <div className="flex gap-4 justify-between">
                                <div className="flex flex-col mb-3">
                                    <label className="block text-sm font-medium mb-2">
                                        fourthTitle
                                    </label>
                                    <input
                                        name="fourthTitle"
                                        value={content.fourthTitle}
                                        onChange={handleContentChange}
                                        className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label className="block text-sm font-medium mb-2">
                                        fourth Description
                                    </label>
                                    <textarea
                                        name="fourthDescription"
                                        value={content.fourthDescription}
                                        onChange={handleContentChange}
                                        rows={2}
                                        className="w-full rounded-xl border px-4 text-sm resize-none"
                                    />
                                </div>
                            </div>

                            <div className="flex gap-4 justify-between">
                                <div className="flex flex-col mb-3">
                                    <label className="block text-sm font-medium mb-2">
                                        FifthTitle
                                    </label>
                                    <input
                                        name="fifthTitle"
                                        value={content.fifthTitle}
                                        onChange={handleContentChange}
                                        className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label className="block text-sm font-medium mb-2">
                                        Fifth Description
                                    </label>
                                    <textarea
                                        name="fifthDescription"
                                        value={content.fifthDescription}
                                        onChange={handleContentChange}
                                        rows={2}
                                        className="w-full rounded-xl border px-4 text-sm resize-none"
                                    />
                                </div>
                            </div>

                            <div className="flex gap-4 justify-between">
                                <div className="flex flex-col mb-3">
                                    <label className="block text-sm font-medium mb-2">
                                        sixthTitle
                                    </label>
                                    <input
                                        name="sixthTitle"
                                        value={content.sixthTitle}
                                        onChange={handleContentChange}
                                        className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label className="block text-sm font-medium mb-2">
                                        sixth Description
                                    </label>
                                    <textarea
                                        name="sixthDescription"
                                        value={content.sixthDescription}
                                        onChange={handleContentChange}
                                        rows={2}
                                        className="w-full rounded-xl border px-4 text-sm resize-none"
                                    />
                                </div>
                            </div>

                        </div>

                    </div>



                </div>

                <div className="w-[95%] mx-auto border rounded-2xl h-[65vh]">
                    <p className="text-2xl text-black font-bold text-center mb-4">Testimonials Section</p>
                    <div className="flex w-full items-center justify-center gap-4">
                        <div className="w-[30%]">
                            <h3 className="mb-2">Testimonial 1</h3>
                            <div className="flex flex-col mb-3">
                                <label className="block text-sm font-medium">
                                    Name
                                </label>
                                <input
                                    name="name"
                                    value={Testimonial1.name}
                                    onChange={handleTestimonial}
                                    className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                />
                            </div>

                            <div className="flex flex-col mb-3">
                                <label className="block text-sm font-medium ">
                                    Role
                                </label>
                                <input
                                    name="role"
                                    value={Testimonial1.role}
                                    onChange={handleTestimonial}
                                    className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="block text-sm font-medium mb-2">
                                    Company
                                </label>
                                <input
                                    name="sixthTitle"
                                    value={Testimonial1.company}
                                    onChange={handleTestimonial}
                                    className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="block text-sm font-medium mb-2">
                                    Title
                                </label>
                                <input
                                    name="title"
                                    value={Testimonial1.title}
                                    onChange={handleTestimonial}
                                    className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="block text-sm font-medium mb-2">
                                    Description
                                </label>
                                <input
                                    name="description"
                                    value={Testimonial1.description}
                                    onChange={handleTestimonial}
                                    className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                />
                            </div>
                        </div>

                        <div className="w-[30%]">
                            <h3 className="mb-2">Testimonial 2</h3>

                            <div className="flex flex-col mb-3">
                                <label className="block text-sm font-medium">
                                    Name
                                </label>
                                <input
                                    name="name"
                                    value={Testimonial1.name}
                                    onChange={handleTestimonial}
                                    className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                />
                            </div>

                            <div className="flex flex-col mb-3">
                                <label className="block text-sm font-medium ">
                                    Role
                                </label>
                                <input
                                    name="role"
                                    value={Testimonial1.role}
                                    onChange={handleTestimonial}
                                    className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="block text-sm font-medium mb-2">
                                    Company
                                </label>
                                <input
                                    name="sixthTitle"
                                    value={Testimonial1.company}
                                    onChange={handleTestimonial}
                                    className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="block text-sm font-medium mb-2">
                                    Title
                                </label>
                                <input
                                    name="title"
                                    value={Testimonial1.title}
                                    onChange={handleTestimonial}
                                    className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="block text-sm font-medium mb-2">
                                    Description
                                </label>
                                <input
                                    name="description"
                                    value={Testimonial1.description}
                                    onChange={handleTestimonial}
                                    className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                />
                            </div>
                        </div>

                        <div className="w-[30%]">
                            <h3 className="mb-2">Testimonial 2</h3>

                            <div className="flex flex-col mb-3">
                                <label className="block text-sm font-medium">
                                    Name
                                </label>
                                <input
                                    name="sixthTitle"
                                    value={content.sixthTitle}
                                    onChange={handleContentChange}
                                    className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                />
                            </div>

                            <div className="flex flex-col mb-3">
                                <label className="block text-sm font-medium ">
                                    role
                                </label>
                                <input
                                    name="sixthTitle"
                                    value={content.sixthTitle}
                                    onChange={handleContentChange}
                                    className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="block text-sm font-medium mb-2">
                                    company
                                </label>
                                <input
                                    name="sixthTitle"
                                    value={content.sixthTitle}
                                    onChange={handleContentChange}
                                    className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="block text-sm font-medium mb-2">
                                    Title
                                </label>
                                <input
                                    name="sixthTitle"
                                    value={content.sixthTitle}
                                    onChange={handleContentChange}
                                    className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="block text-sm font-medium mb-2">
                                    Description
                                </label>
                                <input
                                    name="sixthTitle"
                                    value={content.sixthTitle}
                                    onChange={handleContentChange}
                                    className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                />
                            </div>

                        </div>

                        <div className="w-[30%]">
                            <h3 className="mb-2">Testimonial 3</h3>
                            <div className="flex flex-col mb-3">
                                <label className="block text-sm font-medium">
                                    Name
                                </label>
                                <input
                                    name="name"
                                    value={Testimonial1.name}
                                    onChange={handleTestimonial}
                                    className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                />
                            </div>

                            <div className="flex flex-col mb-3">
                                <label className="block text-sm font-medium ">
                                    Role
                                </label>
                                <input
                                    name="role"
                                    value={Testimonial1.role}
                                    onChange={handleTestimonial}
                                    className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="block text-sm font-medium mb-2">
                                    Company
                                </label>
                                <input
                                    name="sixthTitle"
                                    value={Testimonial1.company}
                                    onChange={handleTestimonial}
                                    className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="block text-sm font-medium mb-2">
                                    Title
                                </label>
                                <input
                                    name="title"
                                    value={Testimonial1.title}
                                    onChange={handleTestimonial}
                                    className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="block text-sm font-medium mb-2">
                                    Description
                                </label>
                                <input
                                    name="description"
                                    value={Testimonial1.description}
                                    onChange={handleTestimonial}
                                    className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                />
                            </div>
                        </div>

                        
                    </div>
                </div>

                {/* Submit */}

                <button className="mt-6 px-10 py-4 rounded-3xl bg-blue-600 text-white text-sm font-medium transition cursor-pointer hover:bg-[#020242] ml-3 mb-3" onClick={handleSave}>
                    Save Course
                </button>


            </div>
        </div>
    );
};

export default AddCourse;
