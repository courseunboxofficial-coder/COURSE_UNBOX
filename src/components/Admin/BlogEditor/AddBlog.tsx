"use client";
import { supabase } from "@/lib/supabse/supabaseConfig";
import React, { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import dynamic from 'next/dynamic';
import "suneditor/dist/css/suneditor.min.css";


const SunEditor = dynamic(() => import("suneditor-react"), {
    ssr: false,
});


const AddBlog = ({ collapsed }: { collapsed: boolean }) => {

    const [imageURL, setImageURL] = useState("");

    const [formData, setFormData] = useState({

        title: "",
        content: "",
        domain: "",
        author: "",
        slug: "",
        alt: "",
        subcontent : ""

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

    const [editorContent, setEditorContent] = useState("");


    const [loading, setloading] = useState(false);

    const [meta, setMeta] = useState({

        metaTitle: "",
        metaDescription: ""

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


    const handleMeta = async (event: React.ChangeEvent<HTMLInputElement>) => {

        setMeta({ ...meta, [event.target.name]: event.target.value });

    };

    
    const handleSave = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        if (imageURL == "") {

            setloading(false);
            alert("You also need to Give the image Url currently you image is empty");
            return;

        }
        
        const slug = formData.slug
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "");

        const { data: existingBlogs, error: slugError } = await supabase.from("Blog").select("*").eq("slug", slug);

        if (slugError) {
            console.error(slugError);
            return;
        }

        if (existingBlogs.length > 0) {
            alert("Slug already exists. Please use a unique slug.");
            return;
        }

        setloading(true);


        const { data, error } = await supabase.from("Blog").insert([{

            title: formData.title,
            domain: formData.domain,
            content: editorContent,
            author: formData.author,
            slug: slug,
            alt: formData.alt,
            subcontent : formData.subcontent,
            FAQ: [
                { question: content.firstQuestion, answer: content.firstAnswer },
                { question: content.secondQuestion, answer: content.secondAnswer },
                { question: content.thirdQuestion, answer: content.thirdAnswer },
                { question: content.fourthQuestion, answer: content.fourthAnswer },
                { question: content.fifthQuestion, answer: content.fifthAnswer },
                { question: content.sixthQuestion, answer: content.sixthAnswer },
            ],

            meta: {

                title: meta.metaTitle,
                description: meta.metaDescription

            },

            image: imageURL

        }]).select().single();


        if (error) {
            console.log("THE ERROR COMES IS : ");
            console.log(error);

            return
        };


        if (error) {
            console.error(error);
            setloading(false);
            toast.error("Update failed");
            return;
        }

        setloading(false);
        toast.success("Blog Added successfully");

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
            <form onSubmit={handleSave}>
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
                                        required
                                    >
                                        <option value="">Select Mode</option>
                                        <option value="digital Marketing">Digital Marketing</option>
                                        <option value="development">Development</option>
                                        <option value="IT & Software">IT & Software</option>
                                        <option value="Data Science">Data Science</option>

                                    </select>

                                </div>

                            </div>


                            {/* Description */}

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Author
                                </label>
                                <input
                                    name="author"
                                    value={formData.author}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border px-4 py-3 text-sm"
                                    required
                                />
                            </div>



                            <div className="flex gap-4">
                                <div className="w-full">
                                    <label className="block text-sm font-medium mb-2">
                                        Meta Title
                                    </label>
                                    <input
                                        name="metaTitle"
                                        value={meta.metaTitle}
                                        onChange={handleMeta}
                                        className="w-full rounded-xl border px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                                        required
                                    />
                                </div>

                                <div className="w-full">
                                    <label className="block text-sm font-medium mb-2">
                                        Meta Description
                                    </label>
                                    <input
                                        name="metaDescription"
                                        value={meta.metaDescription}
                                        onChange={handleMeta}
                                        className="w-full rounded-xl border px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                                        required
                                    />
                                </div>

                            </div>


                            <div className="flex gap-4">
                                <div className="w-full">
                                    <label className="block text-sm font-medium mb-2">
                                        Slug
                                    </label>
                                    <input
                                        name="slug"
                                        value={formData.slug}
                                        onChange={handleChange}
                                        className="w-full rounded-xl border px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                                        required
                                    />
                                </div>

                                <div className="w-full">
                                    <label className="block text-sm font-medium mb-2">
                                        Alt Tag For Image
                                    </label>
                                    <input
                                        name="alt"
                                        value={formData.alt}
                                        onChange={handleChange}
                                        className="w-full rounded-xl border px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                                        required
                                    />
                                </div>

                            </div>

                            <div className="flex gap-4">
                                <div className="w-full">
                                    <label className="block text-sm font-medium mb-2">
                                        SubContent
                                    </label>
                                    <textarea
                                        name="subcontent"
                                        value={formData.subcontent}
                                        onChange={handleChange}
                                        rows={2}
                                        className="w-full rounded-xl border px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                                        required
                                    />
                                </div>

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
                                    </span> <br />

                                </div>

                                <div>
                                    {imageURL.slice(0, 10)}...
                                </div>

                            </div>




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

                    {/* This is the Blog Editor */}

                    <div className="h-[85vh] w-full rounded-2xl border p-5 overflow-hidden ">
                        <SunEditor
                            defaultValue="<p><strong>Welcome!</strong> Start writing your course content here.</p>"
                            setOptions={{
                                minHeight: "65vh",
                                maxHeight: "70vh",
                                buttonList: [
                                    ["undo", "redo"],
                                    ["formatBlock"],   // H1, H2, H3 works here
                                    ["bold", "italic", "underline"],
                                    ["list"],
                                    ["align"],
                                    ["link", "image"],
                                ],
                            }}

                            onChange={(content) => {
                                setEditorContent(content);
                            }}
                        />
                    </div>

                    {/* Submit */}

                    <button type="submit" className="mt-6 px-10 py-4 rounded-3xl bg-blue-600 text-white text-sm font-medium transition cursor-pointer hover:bg-[#020242] mb-3">
                        {loading ? "...Loading" : "Save Blog"}
                    </button>
                </div>

            </form>

            <ToastContainer />

        </div>

    );
};

export default AddBlog;
