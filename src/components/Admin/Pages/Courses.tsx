import { supabase } from '@/lib/supabse/supabaseConfig';
import { BookA, Clock, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';

type Course = {

    id: string;
    title: string;
    description: string;
    startDate: string;
    Duration: number;
    language: string;
    domain: string;
    Delivery_Mode: string;
    low: number,
    high: number,
    price: number,
    content: {
        title: string;
        subtitle: string;
    }[];
    Testimonials:
    {
        name: string,
        role: string,
        company: string,
        title: string,
        description: string,
        ranking: string,
        course: string
    }[],
    modules: Record<
        string,
        {
            module: string;
            title: string;
            lectures: string[];
        }[]
    >,

    FAQ: {
        question: string;
        answer: string
    }[];

    meta: {
        title: string,
        description: string
    },

    slug: string,
    alt: string,
    image: string;
    city : string

}

const Courses = () => {

    const [active, setActive] = useState(0);
    const [courses, setCourses] = useState<Course[]>([]);
    const [filtered, setFiltered] = useState<Course[]>([]);
    const [loading, setloading] = useState(false);

    const handleActiveButton = (index: number, category: string) => {

        console.log("THIS IS THE RENDEREING ONE : ");
        setActive(index);

        const filter = courses.filter((course, index) => {
            return course.domain == category
        });

        setFiltered(filter);
    }

    const fetchCourseData = async () => {
        const { data, error } = await supabase.from("Courses").select("*");
        setCourses(data ?? []);

        if (error) {
            console.log("THERE IS SOME OF THE ERROR  : ");
            console.log(error);
        }

        const filter = data?.filter((course, index) => {
            return course.domain == "Digital Marketing"
        });

        setFiltered(filter ?? []);
    };

    const handleDuplicate = async (slug: string) => {

        const { data, error } = await supabase.from("Courses").select("*").eq("slug", slug).single();

        if (error) {
            console.log("THERE IS SOME OF THE ERROR IN THE COURSES OF THE PAGE EDITOR : ");
            console.log("THE ERROR IS : ", data);
        }

        if (data) {
            console.log("THE DATA IS : ");
            console.log(data);
        }

        const { data: PagesData, error: PagesError } = await supabase.from("Pages").select("*").order("created_at", { ascending: false }).limit(1).single();

        if (PagesData && PagesData.city == "") {
            alert("Your current Duplication is not Correctly filled in that City is null so first filled it after that create other duplication : ");
            return;
        };

        if (PagesData && PagesData.description == "") {
            alert("Your current Duplication is not Correctly filled in that About Us content is null so first filled it after that create other duplication : ");
            return;
        }

        if (PagesData && PagesData.slug == "") {
            alert("Your current Duplication is not Correctly filled in that Slug is null so first filled it after that create other duplication : ");
            return
        }

        setloading(true);

        const { data: insertData, error: insertError } = await supabase.from("Pages").insert([{

            title: data.title,
            startDate: data.startDate,
            Duration: data.Duration,
            language: data.language,
            domain: data.domain,
            Delivery_Mode: data.Delivery_Mode,
            price: data.price,
            low: data.low,
            high: data.high,
            alt: data.alt,
            meta: {
                title: data.meta.title,
                description: data.meta.description
            },
            content: [

                { title: data.content[0].title, subtitle: data.content[0].subtitle },
                { title: data.content[1].title, subtitle: data.content[1].subtitle },
                { title: data.content[2].title, subtitle: data.content[2].subtitle },
                { title: data.content[3].title, subtitle: data.content[3].subtitle },
                { title: data.content[4].title, subtitle: data.content[4].subtitle },
                { title: data.content[5].title, subtitle: data.content[5].subtitle }

            ],
            FAQ: [

                { question: data.FAQ[0].question, answer: data.FAQ[0].answer },
                { question: data.FAQ[1].question, answer: data.FAQ[1].answer },
                { question: data.FAQ[2].question, answer: data.FAQ[2].answer },
                { question: data.FAQ[3].question, answer: data.FAQ[3].answer },
                { question: data.FAQ[4].question, answer: data.FAQ[4].answer },
                { question: data.FAQ[5].question, answer: data.FAQ[5].answer },

            ],
            Testimonials: [

                {

                    name: data.Testimonials[0].name,
                    role: data.Testimonials[0].role,
                    company: data.Testimonials[0].company,
                    title: data.Testimonials[0].title,
                    description: data.Testimonials[0].description,
                    ranking: data.Testimonials[0].ranking,
                    course: data.Testimonials[0].course


                },
                {

                    name: data.Testimonials[1].name,
                    role: data.Testimonials[1].role,
                    company: data.Testimonials[1].company,
                    title: data.Testimonials[1].title,
                    description: data.Testimonials[1].description,
                    ranking: data.Testimonials[1].ranking,
                    course: data.Testimonials[1].course

                },
                {

                    name: data.Testimonials[2].name,
                    role: data.Testimonials[2].role,
                    company: data.Testimonials[2].company,
                    title: data.Testimonials[2].title,
                    description: data.Testimonials[2].description,
                    ranking: data.Testimonials[2].ranking,
                    course: data.Testimonials[2].course

                }

            ],

            image: data.image,
            modules: data.modules

        }]).select().single();

        if (insertError) {

            console.log("THE ERROR COMES IS : ");
            console.log(insertError);
            setloading(false);
            toast.error("There is some error in data insertion")
            return

        };

        console.log(insertData);
        toast.success("Data is duplicated successfully : ");
        setloading(false);
    }


    useEffect(() => {

        fetchCourseData();

    }, []);

    const cateGories = [
        "Digital Marketing",
        "Development",
        "IT & Software",
        "Data Science"
    ]

    return (
        <>
            <div>

                <div className='w-full flex gap-10 mt-10 items-center justify-center mb-10'>
                    {cateGories.map((tab, index) => {
                        return (
                            <button key={index} className={`px-4 py-3 text-[#030352] hover:text-white cursor-pointer rounded-3xl ${active == index ? "bg-[#050549] text-white" : "bg-[#c2c2f3] "}`} onClick={() => { handleActiveButton(index, tab) }}>
                                {tab}
                            </button>
                        )
                    })}
                </div>

                <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
                    {filtered.map((course) => (
                        <div
                            key={course.id}
                            className=" w-full sm:w-[90%] md:w-[45%] lg:w-[32%] xl:w-[28%]
                            bg-white border-2 border-[#2e19a7] rounded-2xl flex flex-col shadow-2xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidde "
                        >

                            {/* CONTENT */}
                            <div className="flex flex-col flex-1 px-5 py-4 text-center gap-3">
                                <Link href={`/course/${course.slug}`}>
                                    <p className="text-lg font-bold text-[#213c98] hover:text-blue-500 line-clamp-2">
                                        {course.title}
                                    </p>
                                </Link>

                                <div className="w-fit mx-auto bg-indigo-100 px-4 py-1 rounded-2xl text-sm font-medium">
                                    {course.domain}
                                </div>

                                <div className="w-full bg-gray-100 flex justify-center gap-3 p-2 rounded-lg text-sm shadow-inner">
                                    <div className="flex items-center gap-1 border-r pr-3">
                                        <Clock size={16} /> {course.Duration}
                                    </div>
                                    <div className="flex items-center gap-1 border-r pr-3">
                                        <ShieldCheck size={16} /> Certificate
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <BookA size={16} /> {course.language}
                                    </div>
                                </div>

                                <button

                                    key={course.id}
                                    className="
                                w-full
                                bg-[#dbb004]
                                py-2.5
                                rounded-3xl
                                font-bold
                                hover:bg-[#052f7c]
                                hover:text-white
                                transition
                                cursor-pointer"
                                    onClick={() => {

                                        handleDuplicate(course.slug)

                                    }
                                    }
                                >
                                    Duplicate


                                </button>

                            </div>
                        </div>
                    ))}
                </div>



            </div>

            <ToastContainer />

        </>
    )
}

export default Courses