import { supabase } from '@/lib/supabse/supabaseConfig';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';

import "suneditor/dist/css/suneditor.min.css";


const SunEditor = dynamic(() => import("suneditor-react"), {
    ssr: false,
});

type blog = {

    id: string;
    title: string;
    content: string;
    FAQ: {
        question: string;
        answer: string
    }[];
    image: string,
    created_at: number;
    author: string,
    domain: string;

};




const EditBlog = ({ collapsed, blog }: { collapsed: boolean; blog: blog }) => {
    const [imageURL, setimageURL] = useState("");
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        domain: ""
    });

    const [editorContent, setEditorContent] = useState("");

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


    useEffect(() => {
        setFormData({
            title: blog.title,
            content: blog.content,
            domain: blog.domain,
        });

        setimageURL(blog.image)

        setContent({
            firstQuestion: blog.FAQ?.[0]?.question || "",
            firstAnswer: blog.FAQ?.[0]?.answer || "",

            secondQuestion: blog.FAQ?.[1]?.question || "",
            secondAnswer: blog.FAQ?.[1]?.answer || "",

            thirdQuestion: blog.FAQ?.[2]?.question || "",
            thirdAnswer: blog.FAQ?.[2]?.answer || "",

            fourthQuestion: blog.FAQ?.[3]?.question || "",
            fourthAnswer: blog.FAQ?.[3]?.answer || "",

            fifthQuestion: blog.FAQ?.[4]?.question || "",
            fifthAnswer: blog.FAQ?.[4]?.answer || "",

            sixthQuestion: blog.FAQ?.[5]?.question || "",
            sixthAnswer: blog.FAQ?.[5]?.answer || "",
        });

        setEditorContent(blog.content);

        setimageURL(blog.image);

    }, []);


    const handleFileData = async (event: React.ChangeEvent<HTMLInputElement>) => {

        const file = event.target.files?.[0];

        if (!file) {
            return;
        };

        const fileName = `${file.name}`;

        const { data, error } = await supabase.storage.from("AppImages").upload(fileName, file, { upsert: true });


        if (error) {
            console.log(error);
        } else {
            console.log(data);
        };

        const { data: publicUrlData } = await supabase.storage.from("AppImages").getPublicUrl(fileName);

        console.log(publicUrlData)
        console.log(publicUrlData.publicUrl);
        setimageURL(publicUrlData.publicUrl);

    }


    const handleEditData = async (event: React.FormEvent<HTMLFormElement>) => {


        event.preventDefault();

        setloading(true);

        const { data, error } = await supabase.from("Blog").update(

            {

                title: formData.title,
                content: formData.content,
                domain: formData.domain,

                FAQ: [

                    { question: content.firstQuestion, answer: content.firstAnswer },
                    { question: content.secondQuestion, answer: content.secondAnswer },
                    { question: content.thirdQuestion, answer: content.secondAnswer },
                    { question: content.fourthQuestion, answer: content.fourthAnswer },
                    { question: content.fifthQuestion, answer: content.fifthAnswer },
                    { question: content.sixthQuestion, answer: content.sixthAnswer },

                ],

                image: imageURL || blog.image

            }

        ).eq("id", blog.id);


        if (error) {
            console.log("The error ocuur in this is : ");
            console.log(error);
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



    return (
        <>
            <div className={`${collapsed ? "w-[85vw]" : "w-[75vw]"} mx-auto mt-10 px-4`}>
                <form onSubmit={handleEditData}>
                    <div className="rounded-2xl border border-blue-200 bg-white shadow-xl overflow-hidden">
                        <div className="h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

                        <div className="text-center text-3xl font-bold mt-4">
                            Blog Editor
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
                                            <option value="">Select Domain</option>
                                            <option value="Digital Marketing">Digital Marketing</option>
                                            <option value="Development">Development</option>
                                            <option value="IT & Software">IT & Software</option>
                                            <option value="Data Science">Data Science</option>
                                        </select>
                                    </div>

                                </div>


                                {/* Image Upload */}

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Blog Image
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
                                        {imageURL && imageURL.slice(0, 10)}...
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
                                                required
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
                                                required
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
                                                required
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
                                                required
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
                                                required
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
                                                required
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
                                                required
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
                                                required
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
                                                required
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
                                                required
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
                                                required
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
                                                required
                                            />
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="h-[85vh] w-full rounded-2xl border p-5 overflow-hidden ">

                            <SunEditor
                                defaultValue={editorContent}
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
                        <button type='submit' className="mt-6 px-10 py-4 rounded-3xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition mb-4 ml-4 cursor-pointer" >
                            {loading ? "...Loading" : "Update Blog"}
                        </button>

                    </div>

                </form>



            </div>

            <ToastContainer />

        </>
    )
}

export default EditBlog