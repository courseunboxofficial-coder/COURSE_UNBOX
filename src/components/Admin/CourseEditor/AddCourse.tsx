"use client";
import { supabase } from "@/lib/supabse/supabaseConfig";
import dynamic from "next/dynamic";
import { title } from "process";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const Editor = dynamic(
    () => import("@monaco-editor/react"),
    { ssr: false }
);

const AddCourse = ({ collapsed }: { collapsed: boolean }) => {

    const [imageURL, setImageURL] = useState<string>("");
    const [loading, setloading] = useState(false);
    const [meta, setMeta] = useState({

        metaTitle: "",
        metaDescription: ""

    });

    const [editorValue, setEditorValue] = useState<string>(`{
    "Data Science Foundations": [

        {
            "module": "Module 1",
            "title": "What is Data Science?",
            "lectures": [

                "Lecture 1 : What is DS?",
                "Lecture 2 : Why DS Matters",
                "Lecture 3 : DS Roles (DS, ML Engineer, AI Engineer)",
                "Lecture 4 : Tools used in DS",
                "Lecture 5 : Industry examples"

            ]
        },

        {
            "module": "Module 2",
            "title": "Future of Data Science",
            "lectures": [
                "Lecture 1 : DS Career Growth",
                "Lecture 2 : AI & Data Trends",
                "Lecture 3 : Skills for Future"
            ]
        }

    ]
}`);

    const [parsedMessage, setParsedMessage] = useState<{
        status: boolean | null;
        message: string
    }>({
        status: null,
        message: ""
    });

    const [parsedJson, setParsedJson] = useState({});


    const [formData, setFormData] = useState({
        title: "",
        description: "",
        startDate: "",
        Duration: 0,
        language: "",
        domain: "",
        price: 0,
        low: 0,
        high: 0,
        Delivery_Mode: "",
        alt: "",
        slug: ""
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

    const [Testimonial1, setTestimonial1] = useState({
        name: "",
        role: "",
        company: "",
        title: "",
        description: "",
        ranking: "",
        course: ""
    });

    const [Testimonial2, setTestimonial2] = useState({
        name: "",
        role: "",
        company: "",
        title: "",
        description: "",
        ranking: "",
        course: ""
    });

    const [Testimonial3, setTestimonial3] = useState({
        name: "",
        role: "",
        company: "",
        title: "",
        description: "",
        ranking: "",
        course: ""
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


    const handleContentChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setContent({ ...content, [e.target.name]: e.target.value });
    };


    const handleTestimonial1 = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setTestimonial1({ ...Testimonial1, [e.target.name]: e.target.value });
    };


    const handleTestimonial2 = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setTestimonial2({ ...Testimonial2, [e.target.name]: e.target.value });
    };


    const handleTestimonial3 = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setTestimonial3({ ...Testimonial3, [e.target.name]: e.target.value });
    };

    const handleMeta = async (event: React.ChangeEvent<HTMLInputElement>) => {

        setMeta({ ...meta, [event.target.name]: event.target.value });

    };


    const handleModuleParse = () => {

        try {
            const parsed = JSON.parse(editorValue);
            console.log("Valid JSON:", parsed);

            setParsedMessage({ status: true, message: "Valid Json: Your Module Content is correct Now you can Save Module" });

            setParsedJson(parsed);

            return true;

        } catch (err) {

            setParsedMessage({ status: false, message: "InValid Json: Your Module Content is Incorrect you need to manipulate it" })
            console.error("Invalid JSON");


            return false;
        }

    }



    const handleSave = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        const validationJson = handleModuleParse();

        if (!validationJson) {

            alert("Your current Editor Value for Module is not in correct format please write it correctly : ")

            return;
        }

        if (parsedMessage.status == false) {

            alert("Your Json is Not Correct you need to write it correctly you are not able to save the Data :");

            return

        };


        if (imageURL === "") {

            alert("Your Image URL IS Empty please upload the image otherwise you are not able to save the data : ");

            return;
        };


        const slug = formData.slug
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "");

        const { data: existingBlogs, error: slugError } = await supabase.from("Courses").select("*").eq("slug", slug);

        if (slugError) {

            console.error(slugError);
            return;

        }

        if (existingBlogs.length > 0) {

            alert("Slug already exists. Please use a unique slug.");
            return;

        }


        setloading(true);


        const { data, error } = await supabase.from("Courses").insert([{

            title: formData.title,
            description: formData.description,
            startDate: formData.startDate,
            Duration: formData.Duration,
            language: formData.language,
            domain: formData.domain,
            Delivery_Mode: formData.Delivery_Mode,
            price: formData.price,
            low: formData.low,
            high: formData.high,
            alt: formData.alt,
            slug: slug,
            meta: {
                title: meta.metaTitle,
                description: meta.metaDescription
            },
            content: [

                { title: content.firstTitle, subtitle: content.firstDescription },
                { title: content.secondTitle, subtitle: content.secondDescription },
                { title: content.thirdTitle, subtitle: content.thirdDescription },
                { title: content.fourthTitle, subtitle: content.fourthDescription },
                { title: content.fifthTitle, subtitle: content.fifthDescription },
                { title: content.sixthTitle, subtitle: content.sixthDescription }

            ],

            FAQ: [
                { question: FAQ.firstQuestion, answer: FAQ.firstAnswer },
                { question: FAQ.secondQuestion, answer: FAQ.secondAnswer },
                { question: FAQ.thirdQuestion, answer: FAQ.thirdAnswer },
                { question: FAQ.fourthQuestion, answer: FAQ.fourthAnswer },
                { question: FAQ.fifthQuestion, answer: FAQ.fifthAnswer },
                { question: FAQ.sixthQuestion, answer: FAQ.sixthAnswer },
            ],

            Testimonials: [

                {
                    name: Testimonial1.name,
                    role: Testimonial1.role,
                    company: Testimonial1.company,
                    title: Testimonial1.title,
                    description: Testimonial1.description,
                    ranking: Testimonial1.ranking,
                    course: Testimonial1.course
                },
                {
                    name: Testimonial2.name,
                    role: Testimonial2.role,
                    company: Testimonial2.company,
                    title: Testimonial2.title,
                    description: Testimonial2.description,
                    ranking: Testimonial2.ranking,
                    course: Testimonial2.course
                },
                {
                    name: Testimonial3.name,
                    role: Testimonial3.role,
                    company: Testimonial3.company,
                    title: Testimonial3.title,
                    description: Testimonial3.description,
                    ranking: Testimonial3.ranking,
                    course: Testimonial3.course
                }

            ],

            modules: parsedJson,
            image: imageURL

        }]).select().single();

        if (error) {
            console.log("THE ERROR COMES IS : ");
            console.log(error);
            toast.error("There is somne of the error : ");
            setloading(false);
            return
        };

        toast.success("Data is Added SuccesFully : ");
        setloading(false);
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
                                        required
                                    >
                                        <option value="">Select Mode</option>
                                        <option value="digital Marketing">Digital Marketing</option>
                                        <option value="developement">Development</option>
                                        <option value="IT & Software">IT & Software</option>
                                        <option value="Data Science">Data Science</option>

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
                                        required
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
                                        required
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
                                        required
                                    />
                                </div>
                            </div>

                            {/* Delivery Mode */}

                            <div className="flex gap-4">

                                <div className="w-full">
                                    <label className="block text-sm font-medium mb-2">
                                        Delivery Mode
                                    </label>
                                    <select
                                        name="Delivery_Mode"
                                        value={formData.Delivery_Mode}
                                        onChange={handleChange}
                                        className="w-full rounded-xl border px-4 py-3 text-sm"
                                        required
                                    >
                                        <option value="">Select Mode</option>
                                        <option value="Online">Online</option>
                                        <option value="Offline">Offline</option>
                                        <option value="Hybrid">Hybrid</option>
                                    </select>
                                </div>


                                <div className="w-full">
                                    <label className="block text-sm font-medium mb-2">
                                        Course Price
                                    </label>
                                    <input
                                        name="price"
                                        value={formData.price}
                                        onChange={handleChange}
                                        className="w-full rounded-xl border px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                                        required
                                    />
                                </div>

                            </div>


                            <div className="flex gap-4">

                                <div className="w-full">
                                    <label className="block text-sm font-medium mb-2">
                                        Low Salary Range
                                    </label>
                                    <input
                                        name="low"
                                        value={formData.low}
                                        onChange={handleChange}
                                        className="w-full rounded-xl border px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                                        required
                                    />
                                </div>


                                <div className="w-full">
                                    <label className="block text-sm font-medium mb-2">
                                        High Salary Range
                                    </label>
                                    <input
                                        name="high"
                                        value={formData.high}
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


                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    About Course
                                </label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    rows={3}
                                    className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                    required
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
                                <div >
                                    {imageURL && (
                                        <div>
                                            {imageURL.slice(0, 10)}...
                                        </div>
                                    )}
                                </div>
                            </div>

                        </div>


                        <div>
                            {/* content */}

                            <div className="h-[80vh] border p-3 rounded-3xl">
                                <p className="text-center text-2xl font-bold mb-5">Why choose this course section ?</p>

                                <div className="flex gap-4 justify-between">
                                    <div className="flex flex-col mb-3 w-full">
                                        <label className="block text-sm font-medium mb-2">
                                            FirstTitle
                                        </label>
                                        <input
                                            name="firstTitle"
                                            value={content.firstTitle}
                                            onChange={handleContentChange}
                                            className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                            required
                                        />
                                    </div>

                                    <div className="flex flex-col w-full">
                                        <label className="block text-sm font-medium mb-2">
                                            First Description
                                        </label>
                                        <textarea
                                            name="firstDescription"
                                            value={content.firstDescription}
                                            onChange={handleContentChange}
                                            rows={2}
                                            className="w-full rounded-xl border px-4 text-sm resize-none"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="flex gap-4 justify-between">
                                    <div className="flex flex-col mb-3 w-full">
                                        <label className="block text-sm font-medium mb-2">
                                            SecondTitle
                                        </label>
                                        <input
                                            name="secondTitle"
                                            value={content.secondTitle}
                                            onChange={handleContentChange}
                                            className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                            required
                                        />
                                    </div>

                                    <div className="flex flex-col w-full">
                                        <label className="block text-sm font-medium mb-2">
                                            Second Description
                                        </label>
                                        <textarea
                                            name="secondDescription"
                                            value={content.secondDescription}
                                            onChange={handleContentChange}
                                            rows={2}
                                            className="w-full rounded-xl border px-4 text-sm resize-none"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="flex gap-4 justify-between">
                                    <div className="flex flex-col mb-3 w-full">
                                        <label className="block text-sm font-medium mb-2">
                                            ThirdTitle
                                        </label>
                                        <input
                                            name="thirdTitle"
                                            value={content.thirdTitle}
                                            onChange={handleContentChange}
                                            className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                            required
                                        />
                                    </div>

                                    <div className="flex flex-col w-full">

                                        <label className="block text-sm font-medium mb-2">

                                            Third Description

                                        </label>
                                        <textarea
                                            name="thirdDescription"
                                            value={content.thirdDescription}
                                            onChange={handleContentChange}
                                            rows={2}
                                            className="w-full rounded-xl border px-4 text-sm resize-none"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="flex gap-4 justify-between">
                                    <div className="flex flex-col mb-3 w-full">
                                        <label className="block text-sm font-medium mb-2">
                                            fourthTitle
                                        </label>
                                        <input
                                            name="fourthTitle"
                                            value={content.fourthTitle}
                                            onChange={handleContentChange}
                                            className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                            required
                                        />
                                    </div>

                                    <div className="flex flex-col w-full">
                                        <label className="block text-sm font-medium mb-2">
                                            fourth Description
                                        </label>
                                        <textarea
                                            name="fourthDescription"
                                            value={content.fourthDescription}
                                            onChange={handleContentChange}
                                            rows={2}
                                            className="w-full rounded-xl border px-4 text-sm resize-none"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="flex gap-4 justify-between">
                                    <div className="flex flex-col mb-3 w-full">
                                        <label className="block text-sm font-medium mb-2">
                                            FifthTitle
                                        </label>
                                        <input
                                            name="fifthTitle"
                                            value={content.fifthTitle}
                                            onChange={handleContentChange}
                                            className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                            required
                                        />
                                    </div>

                                    <div className="flex flex-col w-full">
                                        <label className="block text-sm font-medium mb-2">
                                            Fifth Description
                                        </label>
                                        <textarea
                                            name="fifthDescription"
                                            value={content.fifthDescription}
                                            onChange={handleContentChange}
                                            rows={2}
                                            className="w-full rounded-xl border px-4 text-sm resize-none"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="flex gap-4 justify-between">
                                    <div className="flex flex-col mb-3 w-full">
                                        <label className="block text-sm font-medium mb-2">
                                            sixthTitle
                                        </label>
                                        <input
                                            name="sixthTitle"
                                            value={content.sixthTitle}
                                            onChange={handleContentChange}
                                            className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                            required
                                        />
                                    </div>

                                    <div className="flex flex-col w-full">
                                        <label className="block text-sm font-medium mb-2">
                                            sixth Description
                                        </label>
                                        <textarea
                                            name="sixthDescription"
                                            value={content.sixthDescription}
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
                                        sixth Question
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
                                        sixth Answer
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

                    <div className="w-[95%] mx-auto border rounded-2xl h-[75vh]">
                        <p className="text-2xl text-black font-bold text-center mb-4">Testimonials Section</p>
                        <div className="flex w-full items-center justify-center gap-4">
                            <div className="w-[30%]">
                                <h3 className="mb-2 font-bold">Testimonial 1</h3>
                                <div className="flex flex-col mb-3">
                                    <label className="block text-sm font-medium">
                                        Name
                                    </label>
                                    <input
                                        name="name"
                                        value={Testimonial1.name}
                                        onChange={handleTestimonial1}
                                        className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                        required
                                    />
                                </div>

                                <div className="flex flex-col mb-3">
                                    <label className="block text-sm font-medium ">
                                        Role
                                    </label>
                                    <input
                                        name="role"
                                        value={Testimonial1.role}
                                        onChange={handleTestimonial1}
                                        className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                        required
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label className="block text-sm font-medium mb-2">
                                        Company
                                    </label>
                                    <input
                                        name="company"
                                        value={Testimonial1.company}
                                        onChange={handleTestimonial1}
                                        className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                        required
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label className="block text-sm font-medium mb-2">
                                        Title
                                    </label>
                                    <input
                                        name="title"
                                        value={Testimonial1.title}
                                        onChange={handleTestimonial1}
                                        className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                        required
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label className="block text-sm font-medium mb-2">
                                        Description
                                    </label>
                                    <input
                                        name="description"
                                        value={Testimonial1.description}
                                        onChange={handleTestimonial1}
                                        className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                        required
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label className="block text-sm font-medium mb-2">
                                        Rating
                                    </label>
                                    <input
                                        name="ranking"
                                        value={Testimonial1.ranking}
                                        onChange={handleTestimonial1}
                                        className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="w-[30%]">
                                <h3 className="mb-2 font-bold">Testimonial 2</h3>

                                <div className="flex flex-col mb-3">
                                    <label className="block text-sm font-medium">
                                        Name
                                    </label>
                                    <input
                                        name="name"
                                        value={Testimonial2.name}
                                        onChange={handleTestimonial2}
                                        className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                        required
                                    />
                                </div>

                                <div className="flex flex-col mb-3">
                                    <label className="block text-sm font-medium ">
                                        Role
                                    </label>
                                    <input
                                        name="role"
                                        value={Testimonial2.role}
                                        onChange={handleTestimonial2}
                                        className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                        required
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label className="block text-sm font-medium mb-2">
                                        Company
                                    </label>
                                    <input
                                        name="company"
                                        value={Testimonial2.company}
                                        onChange={handleTestimonial2}
                                        className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                        required
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label className="block text-sm font-medium mb-2">
                                        Title
                                    </label>
                                    <input
                                        name="title"
                                        value={Testimonial2.title}
                                        onChange={handleTestimonial2}
                                        className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                        required
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label className="block text-sm font-medium mb-2">
                                        Description
                                    </label>
                                    <input
                                        name="description"
                                        value={Testimonial2.description}
                                        onChange={handleTestimonial2}
                                        className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                        required
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label className="block text-sm font-medium mb-2">
                                        Ranting
                                    </label>
                                    <input
                                        name="ranking"
                                        value={Testimonial2.ranking}
                                        onChange={handleTestimonial2}
                                        className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="w-[30%]">
                                <h3 className="mb-2 font-bold">Testimonial 3</h3>

                                <div className="flex flex-col mb-3">
                                    <label className="block text-sm font-medium">
                                        Name
                                    </label>
                                    <input
                                        name="name"
                                        value={Testimonial3.name}
                                        onChange={handleTestimonial3}
                                        className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                        required
                                    />
                                </div>

                                <div className="flex flex-col mb-3">
                                    <label className="block text-sm font-medium ">
                                        role
                                    </label>
                                    <input
                                        name="role"
                                        value={Testimonial3.role}
                                        onChange={handleTestimonial3}
                                        className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                        required
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label className="block text-sm font-medium mb-2">
                                        company
                                    </label>
                                    <input
                                        name="company"
                                        value={Testimonial3.company}
                                        onChange={handleTestimonial3}
                                        className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                        required
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label className="block text-sm font-medium mb-2">
                                        Title
                                    </label>
                                    <input
                                        name="title"
                                        value={Testimonial3.title}
                                        onChange={handleTestimonial3}
                                        className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                        required
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label className="block text-sm font-medium mb-2">
                                        Description
                                    </label>
                                    <input
                                        name="description"
                                        value={Testimonial3.description}
                                        onChange={handleTestimonial3}
                                        className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                        required
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label className="block text-sm font-medium mb-2">
                                        Ranking
                                    </label>
                                    <input
                                        name="ranking"
                                        value={Testimonial3.ranking}
                                        onChange={handleTestimonial3}
                                        className="w-full rounded-xl border px-4 py-3 text-sm resize-none"
                                        required
                                    />
                                </div>

                            </div>

                        </div>

                    </div>



                    {/* Editor for Module */}

                    <div className="w-[95%] mx-auto border rounded-2xl h-full mt-5 mb-5 p-4">
                        <div className="font-bold text-center text-3xl mb-4">Module Manipulate Section</div>

                        <Editor

                            height="65vh"
                            language="json"
                            theme="vs-dark"
                            value={editorValue}
                            onChange={(value) => setEditorValue(value || "")}
                            className="rounded-2xl"

                        />

                        <div className="mt-6 inline-block px-10 py-4 rounded-3xl bg-blue-600 text-white text-sm font-medium transition cursor-pointer hover:bg-[#020242] ml-3 mb-3" onClick={handleModuleParse}>
                            Save Converted Module
                        </div>

                        <div className="w-full bg-[#708cf1] border-none rounded-2xl h-[10vh]">

                            <p className="text-center text-xl font-bold ">Output Box</p>
                            <p className={`text-center text-xl font-bold ${parsedMessage.status ? "text-green-300" : "text-red-400"}`}>
                                {
                                    parsedMessage.message
                                }
                            </p>

                        </div>
                    </div>


                    {/* Submit */}

                    <button type="submit" className="mt-6 px-10 py-4 rounded-3xl bg-blue-600 text-white text-sm font-medium transition cursor-pointer hover:bg-[#020242] ml-3 mb-3">
                        {
                            loading ? "...Loading" : "Save Course"
                        }
                    </button>


                </div>

            </form>

            <ToastContainer />
        </div>
    );
};

export default AddCourse;
