import { supabase } from '@/lib/supabse/supabaseConfig';
import React, { useEffect, useState } from 'react'

type Mentor = {

    id: number;
    name: string;
    profession: string;
    work_experience: number;
    teaching_experience: number;
    description: string;
    created_at: number
};

const EditMentor = ({ collapsed, mentor }: { collapsed: boolean, mentor: Mentor }) => {

    const [imageURL, setimageURL] = useState("");
    const [formData, setFormData] = useState({

        name: "",
        profession: "",
        work_experience: 0,
        teaching_experience: 0,
        description: ""

    });


    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    useEffect(() => {
        setFormData({

            name: mentor.name,
            profession: mentor.profession,
            work_experience: mentor.work_experience,
            teaching_experience: mentor.teaching_experience,
            description: mentor.description,

        })
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

    const handleEditData = async () => {


        const { data, error } = await supabase.from("Mentors").update(

            {

                name: formData.name,
                profession: formData.profession,
                work_Experience: formData.work_experience,
                teaching_Experience: formData.teaching_experience,
                description: formData.description,
                Image: imageURL

            }


        ).eq("id", mentor.id);


        if (error) {

            console.log("The error ocuur in this is : ");
            console.log(error);

        }

        console.log(data);

    }



    return (


        <div className={`${collapsed ? "w-[85vw]" : "w-[75vw]"} mx-auto mt-10 px-4`}>
            <div className="rounded-2xl border border-blue-200 bg-white shadow-xl overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

                <div className="text-center text-3xl font-bold mt-4">
                    Course Editor
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-8">

                    {/* ================= FORM ================= */}

                    <div className="space-y-5">

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Course Title
                            </label>
                            <input
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full rounded-xl border px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>


                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Course Title
                            </label>
                            <input
                                name="profession"
                                value={formData.profession}
                                onChange={handleChange}
                                className="w-full rounded-xl border px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>



                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Course Title
                            </label>
                            <input
                                type='number'
                                name="work_experience"
                                value={formData.work_experience}
                                onChange={handleChange}
                                className="w-full rounded-xl border px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Teaching Experience
                            </label>
                            <input
                                type='text'
                                name="teaching_experience"
                                value={formData.teaching_experience}
                                onChange={handleChange}
                                className="w-full rounded-xl border px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>


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

                    {/* Submit */}

                    <button className="mt-6 px-10 py-4 rounded-3xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition" onClick={handleEditData}>
                        Save Course
                    </button>

                </div>


                {/* ================= PREVIEW ================= */}

                <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-8">

                    <p className="text-xs font-medium text-gray-500 mb-3">
                        LIVE PREVIEW
                    </p>

                    <div className="space-y-4">
                        <h1 className="text-3xl font-bold text-gray-900">
                            {formData.name || "Course title goes here"}
                        </h1>

                        <span className="inline-block rounded-full bg-indigo-100 px-4 py-1 text-xs font-semibold text-indigo-700">
                            {formData.profession || "Domain"}
                        </span>

                        <p className="text-gray-600">
                            {formData.work_experience || "Course description preview"}
                        </p>

                        <div className="text-sm text-gray-500 space-y-1">
                            <p>📅 Start: {formData.name || "Not set"}</p>
                            <p>⏱ Duration: {formData.profession || "0"} days</p>
                            <p>🌐 Mode: {formData.work_experience || "N/A"}</p>
                            <p>🗣 Language: {formData.description || "English"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )


}

export default EditMentor