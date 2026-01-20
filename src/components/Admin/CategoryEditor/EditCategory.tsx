import { supabase } from '@/lib/supabse/supabaseConfig';
import dynamic from 'next/dynamic';
import React, { useEffect, useRef, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';

import "suneditor/dist/css/suneditor.min.css";

const Editor = dynamic(
    () => import("@monaco-editor/react"),
    { ssr: false }
);


const SunEditor = dynamic(() => import("suneditor-react"), {
    ssr: false,
});


type Category = {

    id: string;
    title: string;
    description: string;
    domain: string,
    about: string,

    FAQ: {
        question: string;
        answer: string
    }[];

    meta: {
        title: string,
        description: string
    },

    slug: string,
}


const EditCategory = ({ collapsed, category }: { collapsed: boolean; category: Category }) => {


    const [loading, setloading] = useState(false);

    const [meta, setMeta] = useState({
        metaTitle: "",
        metaDescription: ""

    });

    const [formData, setFormData] = useState({

        title: "",
        description: "",
        slug: ""

    });

    const [editorContent, setEditorContent] = useState("");

    const [FAQ, setFAQ] = useState({

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


    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleFAQChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFAQ({ ...FAQ, [e.target.name]: e.target.value });
    };


    const handleMeta = async (event: React.ChangeEvent<HTMLInputElement>) => {

        setMeta({ ...meta, [event.target.name]: event.target.value });

    };





    useEffect(() => {

        setFormData({
            title: category.title,
            description: category.description,
            slug: category.slug,
        })




        setMeta({
            metaTitle: category.title,
            metaDescription: category.description
        })


        setFAQ({
            firstQuestion: category.FAQ?.[0]?.question || "",
            firstAnswer: category.FAQ?.[0]?.answer || "",

            secondQuestion: category.FAQ?.[1]?.question || "",
            secondAnswer: category.FAQ?.[1]?.answer || "",

            thirdQuestion: category.FAQ?.[2]?.question || "",
            thirdAnswer: category.FAQ?.[2]?.answer || "",

            fourthQuestion: category.FAQ?.[3]?.question || "",
            fourthAnswer: category.FAQ?.[3]?.answer || "",

            fifthQuestion: category.FAQ?.[4]?.question || "",
            fifthAnswer: category.FAQ?.[4]?.answer || "",

            sixthQuestion: category.FAQ?.[5]?.question || "",
            sixthAnswer: category.FAQ?.[5]?.answer || "",
        });

        setEditorContent(category.about);

    }, []);


    const handleEditData = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();


        const slug = formData.slug
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "");

        const { data: existingBlogs, error: slugError } = await supabase.from("Category").select("*").eq("slug", slug);

        if (slugError) {

            console.error(slugError);
            return;

        }

        if (existingBlogs.length > 1) {

            alert("Slug already exists. Please use a unique slug.");
            return;

        }

        setloading(true);

        const { data, error } = await supabase.from("Category").update(

            {

                title: formData.title,
                description: formData.description,
                slug: slug,
                about : editorContent,

                FAQ: [
                    { question: FAQ.firstQuestion, answer: FAQ.firstAnswer },
                    { question: FAQ.secondQuestion, answer: FAQ.secondAnswer },
                    { question: FAQ.thirdQuestion, answer: FAQ.thirdAnswer },
                    { question: FAQ.fourthQuestion, answer: FAQ.fourthAnswer },
                    { question: FAQ.fifthQuestion, answer: FAQ.fifthAnswer },
                    { question: FAQ.sixthQuestion, answer: FAQ.sixthAnswer },
                ],


            }

        ).eq("id", category.id);


        if (error) {
            console.log("The error ocuur in this is : ");
            console.log(error);
            toast.error("There is some error occur : ");
            setloading(false);
        }

        console.log(data);
        setloading(false);

        toast.success("The course is Edited Successfully : ");

    }



    return (
        <div className={`${collapsed ? "w-[85vw]" : "w-[75vw]"} mx-auto mt-10 px-4`}>
            <form onSubmit={handleEditData}>
                <div className="rounded-2xl border border-blue-200 bg-white shadow-xl overflow-hidden">
                    <div className="h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

                    <div className="text-center text-3xl font-bold mt-4">
                        Category Editor
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-8">

                        {/* ================= FORM ================= */}

                        <div className="space-y-5">


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



                        </div>

                        <div className="flex gap-4">

                            <div className="w-full">
                                <label className="block text-sm font-medium mb-2">
                                    Description for Course
                                </label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                                    required
                                />
                            </div>

                        </div>


                    </div>

                    <div>


                        <div className="h-[85vh] w-full rounded-2xl border p-5 overflow-hidden mb-10">
                            <div className="w-full text-2xl font-extrabold text-center mb-5">About Course Section</div>
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


                        <div>
                            {/* content */}

                            <div className="h-[80vh] border p-5 rounded-3xl mb-7">
                                <p className="text-center text-2xl font-bold mb-5"> Frequently Asked Questions ? </p>

                                <div className="flex gap-4 justify-between w-full">
                                    <div className="flex flex-col mb-3 w-full">
                                        <label className="block text-sm font-medium mb-2">
                                            First Question
                                        </label>
                                        <input
                                            name="firstQuestion"
                                            value={FAQ.firstQuestion}
                                            onChange={handleFAQChange}
                                            className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                            required
                                        />
                                    </div>

                                    <div className="flex flex-col w-full">
                                        <label className="block text-sm font-medium mb-2 ">
                                            First Answer
                                        </label>
                                        <textarea
                                            name="firstAnswer"
                                            value={FAQ.firstAnswer}
                                            onChange={handleFAQChange}
                                            rows={2}
                                            className="w-full rounded-xl border px-4 text-sm resize-none"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="flex gap-4 justify-between">
                                    <div className="flex flex-col mb-3 w-full">
                                        <label className="block text-sm font-medium mb-2">
                                            Second Question
                                        </label>
                                        <input
                                            name="secondQuestion"
                                            value={FAQ.secondQuestion}
                                            onChange={handleFAQChange}
                                            className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                            required
                                        />
                                    </div>

                                    <div className="flex flex-col w-full">
                                        <label className="block text-sm font-medium mb-2 ">
                                            Second Answer
                                        </label>
                                        <textarea
                                            name="secondAnswer"
                                            value={FAQ.secondAnswer}
                                            onChange={handleFAQChange}
                                            rows={2}
                                            className="w-full rounded-xl border px-4 text-sm resize-none"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="flex gap-4 justify-between">
                                    <div className="flex flex-col mb-3 w-full">
                                        <label className="block text-sm font-medium mb-2">
                                            Third Question
                                        </label>
                                        <input
                                            name="thirdQuestion"
                                            value={FAQ.thirdQuestion}
                                            onChange={handleFAQChange}
                                            className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                            required
                                        />
                                    </div>

                                    <div className="flex flex-col w-full">

                                        <label className="block text-sm font-medium mb-2">

                                            Third Answer

                                        </label>
                                        <textarea
                                            name="thirdAnswer"
                                            value={FAQ.thirdAnswer}
                                            onChange={handleFAQChange}
                                            rows={2}
                                            className="w-full rounded-xl border px-4 text-sm resize-none"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="flex gap-4 justify-between">
                                    <div className="flex flex-col mb-3 w-full">
                                        <label className="block text-sm font-medium mb-2">
                                            fourth Question
                                        </label>
                                        <input
                                            name="fourthQuestion"
                                            value={FAQ.fourthQuestion}
                                            onChange={handleFAQChange}
                                            className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                            required
                                        />
                                    </div>

                                    <div className="flex flex-col w-full">
                                        <label className="block text-sm font-medium mb-2">
                                            fourth Answer
                                        </label>
                                        <textarea
                                            name="fourthAnswer"
                                            value={FAQ.fourthAnswer}
                                            onChange={handleFAQChange}
                                            rows={2}
                                            className="w-full rounded-xl border px-4 text-sm resize-none"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="flex gap-4 justify-between">
                                    <div className="flex flex-col mb-3 w-full">
                                        <label className="block text-sm font-medium mb-2">
                                            Fifth Question
                                        </label>
                                        <input
                                            name="fifthQuestion"
                                            value={FAQ.fifthQuestion}
                                            onChange={handleFAQChange}
                                            className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                            required
                                        />
                                    </div>

                                    <div className="flex flex-col w-full">
                                        <label className="block text-sm font-medium mb-2">
                                            Fifth Answer
                                        </label>
                                        <textarea
                                            name="fifthAnswer"
                                            value={FAQ.fifthAnswer}
                                            onChange={handleFAQChange}
                                            rows={2}
                                            className="w-full rounded-xl border px-4 text-sm resize-none"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="flex gap-4 justify-between w-full">
                                    <div className="flex flex-col mb-3 w-full">
                                        <label className="block text-sm font-medium mb-2">
                                            sixth Answer
                                        </label>
                                        <input
                                            name="sixthQuestion"
                                            value={FAQ.sixthQuestion}
                                            onChange={handleFAQChange}
                                            className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                            required
                                        />
                                    </div>

                                    <div className="flex flex-col w-full">
                                        <label className="block text-sm font-medium mb-2">
                                            sixth Question
                                        </label>
                                        <textarea
                                            name="sixthAnswer"
                                            value={FAQ.sixthAnswer}
                                            onChange={handleFAQChange}
                                            rows={2}
                                            className="w-full rounded-xl border px-4 text-sm resize-none"
                                            required
                                        />
                                    </div>
                                </div>

                            </div>

                        </div>

                        {/* Submit */}

                        <button type='submit' className="mt-6 px-10 py-4 rounded-3xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition ml-5 mb-5 cursor-pointer">
                            {
                                loading ? "...Loading" : "Save Course"
                            }
                        </button>

                    </div>

                </div>
            </form>
            <ToastContainer />
        </div>
    )
}

export default EditCategory