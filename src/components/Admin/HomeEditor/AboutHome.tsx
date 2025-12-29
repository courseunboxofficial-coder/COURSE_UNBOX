import React, { useEffect, useRef, useState } from 'react'
import { supabase } from '@/lib/supabse/supabaseConfig';

const AboutHome = ({ collapsed }: { collapsed: boolean }) => {

    const [loading, setLoading] = useState(false);
    const [aboutData, setAboutData] = useState("");
    const idRef = useRef("");


    useEffect(() => {

        const fetchData = async () => {


            const { data, error } = await supabase.from("Home").select("*").eq("section", "AboutHome").single();

            if (error) {

                console.log("This is the error happens in the fetch Data : ");
                console.log(error);

            }

            idRef.current = data.id;

            console.log(idRef.current)


        }


        fetchData();

    }, [])


    const handleAboutData = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setAboutData(event.target.value);
    }





    const handleData = async () => {

        setLoading(true);

        const { data, error } = await supabase.from("Home").update({ "content": aboutData}).eq("id", idRef.current).select();

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

                <div className='text-center text-3xl font-bold mt-3'>About Section</div>

                <div className="p-8 space-y-8">



                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            About Section Content
                        </label>
                        <textarea
                            name="firstTitle"
                            value={aboutData}
                            rows={8}
                            onChange={handleAboutData}
                            placeholder="Learn Anytime, Anywhere"
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                        />
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

export default AboutHome



