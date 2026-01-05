import React, { useEffect, useRef, useState } from 'react'
import { ToastContainer, toast } from "react-toastify"
import { supabase } from "@/lib/supabse/supabaseConfig"

const Hero = ({ collapsed } : { collapsed : boolean }) => {

    const [formData, setFormData] = useState({
        HeroTitle: "",
        HeroTitle2:"",
        HeroSubtitle1: "",
        HeroSubtitle2: ""
    });


    const [loading, setloading] = useState(false);
    const idRef = useRef("");


    useEffect(() => {

        const fetchData = async () => {


            const { data, error } = await supabase.from("Home").select("*").eq("section", "Hero").single();

            if(error){

                console.log("This is the error happens in the fetch Data : ");
                console.log(error);

            }

            idRef.current = data.id;

            console.log(idRef.current)


        }


        fetchData();

    }, [])


    const handleFormData = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => {

            return { ...prev, [event.target.name]: event.target.value };

        });
    };



    const handleData = async () => {

        setloading(true);


        const { data, error } = await supabase.from("Home").update({ "content": formData }).eq("id", idRef.current).select();

        console.log(data);

        if (error) {

            console.log("There is some error happend in the code : ", error);

        }


        if (data !== null) {

            setloading(false);

            const notify = () => {
                toast("Data is saved");
            }

            notify();

        }


    };


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
    }


    console.log(collapsed);


    return (


        <>

            <div className={`${collapsed ? "w-[85vw]" : "w-[75vw]"} mx-auto mt-10 px-4`}>

                <div className="rounded-2xl border border-blue-200 bg-white shadow-xl overflow-hidden">

                    <div className="h-1 bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500" />

                    <div className='text-center text-3xl font-bold mt-3'>Hero Section</div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-8">

                        <div className="space-y-4">
                            <div className='flex gap-3'>
                                <div className=" w-full flex flex-col">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Main Heading
                                    </label>

                                    <input
                                        value={formData.HeroTitle}
                                        name='HeroTitle'
                                        onChange={handleFormData}
                                        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                                    />
                                </div>

                                <div className=" w-full flex flex-col">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Main Heading 2
                                    </label>

                                    <input
                                        value={formData.HeroTitle2}
                                        name='HeroTitle2'
                                        onChange={handleFormData}
                                        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                                    />
                                </div>
                            </div>


                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Sub Heading 1
                                </label>
                                <input
                                    value={formData.HeroSubtitle1}
                                    name='HeroSubtitle1'
                                    onChange={handleFormData}
                                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                                />
                            </div>


                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Sub Heading 2
                                </label>
                                <input
                                    value={formData.HeroSubtitle2}
                                    name='HeroSubtitle2'
                                    onChange={handleFormData}
                                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                                />
                            </div>



                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">

                                    Hero Background Image

                                </label>

                                <div className="flex items-center gap-4">
                                    <label className="flex cursor-pointer items-center justify-center rounded-xl border-2 border-dashed border-blue-300 bg-blue-50 px-6 py-4 text-sm font-medium text-blue-600 hover:bg-blue-100 transition">
                                        <span>Upload Image</span>
                                        <input
                                            type="file"
                                            onChange={handleFileData}
                                            className="hidden"
                                        />
                                    </label>
                                    <span className="text-xs text-gray-500">
                                        PNG, JPG up to 5MB
                                    </span>
                                </div>
                            </div>


                            <button className="mt-6 px-10 py-4 rounded-3xl bg-blue-600 text-white text-sm font-medium cursor-pointer hover:bg-[#117fdf] hover:text-[black] transition" onClick={handleData}>

                                {loading ? "...Loading" : "Update"}

                            </button>
                        </div>

                        <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-8">
                            <p className="text-xs font-medium text-gray-500 mb-3">LIVE PREVIEW</p>


                            <div className="space-y-4">
                                <h1 className="text-3xl font-bold text-gray-900">
                                    {formData.HeroTitle || "Hero heading goes here"}
                                </h1>
                                <h2 className="text-lg font-medium text-blue-600">
                                    {formData.HeroSubtitle1 || "Sub heading goes here"}
                                </h2>
                                <p className="text-gray-600 max-w-md">
                                    {formData.HeroSubtitle2 || "Hero description goes here"}
                                </p>
                            </div>


                        </div>

                    </div>
                </div>
            </div>

            <ToastContainer />

        </>

    )
}

export default Hero