import { supabase } from '@/lib/supabse/supabaseConfig';
import React, { useEffect, useRef, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

const TrendingImage = ({ collapsed }: { collapsed: boolean }) => {

    const [formData, setFormData] = useState({
        Image1: "",
        Image2: "",
        Image3: "",
        Image4: "",
        Image5: "",
        Image6: "",
        Image7: "",
        Image8: ""
    });


    const [loading, setloading] = useState(false);
    const idRef = useRef("");
    const Images = [
        { key: "Image1", Image: "" },
        { key: "Image2", Image: "" },
        { key: "Image3", Image: "" },
        { key: "Image4", Image: "" },
        { key: "Image5", Image: "" },
        { key: "Image6", Image: "" },
        { key: "Image7", Image: "" },
        { key: "Image8", Image: "" },
    ]


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

        setFormData(prev => ({
            ...prev,
            [event.target.name as keyof typeof formData]: publicUrlData.publicUrl
        }));

    };

    const handleData = async () => {
        setloading(true);

        const { data: existingData, error: fetchError } = await supabase
            .from("Home")
            .select("content")
            .eq("section", "Trending")
            .single();

        if (fetchError || !existingData) {
            console.error("Error fetching existing data", fetchError);
            setloading(false);
            return;
        }

        const mergedContent = existingData.content.map((item: any) => {
            const newImage = formData[item.key as keyof typeof formData];
            return {
                ...item,
                Image: newImage && newImage !== "" ? newImage : item.Image
            };
        });

        const { error } = await supabase
            .from("Home")
            .update({ content: mergedContent })
            .eq("section", "Trending");

        setloading(false);

        if (error) {
            console.error("Update failed:", error);
            return;
        }

        toast("Trending images updated successfully ✅");
    };



    return (
        <>

            <div className={`${collapsed ? "w-[85vw]" : "w-[75vw]"} mx-auto mt-10 px-4`}>

                <div className="rounded-2xl border border-blue-200 bg-white shadow-xl overflow-hidden">

                    <div className="h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

                    <div className='text-center text-3xl font-bold mt-3'>Trending Course Section</div>


                    <div className="space-y-4 p-5">

                        {
                            Images.map((Image, Index) => {
                                return (
                                    <div key={Index}>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Trending Course {Image.key}
                                        </label>

                                        <div className="flex items-center gap-4">
                                            <label className="flex w-[30vw] cursor-pointer items-center justify-center rounded-xl border-2 border-dashed border-blue-300 bg-blue-50 px-6 py-4 text-sm font-medium text-blue-600 hover:bg-blue-100 transition ">
                                                <span>Upload Image</span>
                                                <input
                                                    name={Image.key}
                                                    type="file"
                                                    onChange={handleFileData}
                                                    className="hidden"
                                                />
                                            </label>
                                            <span className="text-xs text-gray-500">
                                                PNG, JPG up to 5MB
                                            </span>

                                            {
                                                formData[Image.key as keyof typeof formData] != "" ? formData[Image.key as keyof typeof formData] : <p>No file is Chosen currently</p>
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }


                        <button className="mt-6 px-10 py-4 rounded-3xl bg-blue-600 text-white text-sm font-medium cursor-pointer hover:bg-[#117fdf] hover:text-[black] transition" onClick={handleData}>

                            {loading ? "...Loading" : "Update"}

                        </button>
                    </div>

                </div>
            </div>

            <ToastContainer />

        </>

    )
}

export default TrendingImage