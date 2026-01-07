import { CheckCircle, Star } from "lucide-react";


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

}



const Hero = ({ courses }: { courses: Course }) => {


    return (


        <section className="w-full bg-linear-to-br from-[#01016c] via-[#4d14c6] to-violet-800 bg-opacity-90 py-6 px-6 md:px-10 md:py-12">

            <div className="w-full md:w-8xl md:mx-auto grid lg:grid-cols-2 gap-12 items-center">


                <div className="w-full text-white md:px-10">


                    {/* Top Badges */}

                    <div className="flex flex-wrap items-center gap-3 mb-6">
                        <span className="bg-white/15 px-4 py-1 rounded-full text-sm font-medium">
                            Government-certified
                        </span>

                        <span className="flex items-center gap-1 bg-white/15 px-4 py-1 rounded-full text-sm font-medium">
                            <Star className="w-4 h-4 text-yellow-400" />
                            4.5
                        </span>
                    </div>



                    {/* Heading */}

                    <div className="text-2xl md:text-3xl font-bold leading-tight max-w-4xl">
                        <span className="text-yellow-400">{courses?.title} </span>
                        Placement Course with AI
                        <span className="inline-block ml-2 mt-4 bg-white/15 px-4 py-1 rounded-full text-sm p-5">
                            Updated in May’25
                        </span>
                    </div>





                    {/* Features */}

                    <div className="mt-6 space-y-3">
                        <div className="flex items-center gap-3">
                            <CheckCircle className="text-green-400" />
                            <p className="text-sm md:text-lg ">
                                Get placed with <b>₹{courses?.low}-{courses?.high} LPA</b> salary{" "}
                                <span className="underline cursor-pointer">Know more</span>
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <CheckCircle className="text-green-400" />
                            <p className="text-sm md:text-lg">Course fee refund if not placed</p>
                        </div>
                    </div>

                    <div className=" lg:hidden my-6 ">
                        <img
                            src={courses?.image || "/images/Course/CouresesHero.svg"}
                            alt="Course Banner"
                            className="rounded-2xl shadow-lg w-[95%] h-[30vh]"
                        />
                    </div>



                    {/* Pricing Card */}

                    <div className="mt-6  lg:w-xl bg-white/10 backdrop-blur-xl rounded-2xl pb-2">


                        <div className='flex  items-center w-full  md:h-9 bg-[#4f0095] rounded-tr-2xl rounded-tl-2xl border border-white/20 p-3 pb-4 text-sm sm:text-lg'>
                            <p>{courses?.Duration} months online course with LIVE sessions</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 items-center pl-1 sm:pl-3">

                            <div className='pl-7'>

                                <p className="text-sm text-white/80">Batch starts on</p>

                                <h4 className="text-lg sm:text-xl md:text-2xl font-bold mt-1">{courses?.startDate}</h4>

                                <span className="inline-block mt-3 bg-yellow-400 text-black px-3 sm:px-4 py-1 rounded-3xl sm:rounded-full  text-xs sm:text-sm font-semibold">
                                    Limited seats
                                </span>

                            </div>


                            <div className="border-l md:border-white/20 md:pl-9 pl-3">

                                <p className="text-sm text-white/80">Course Fee</p>

                                <div className="flex items-end gap-3 mt-2 flex-wrap">
                                    <h4 className="text-lg sm:text-xl md:text-2xl  font-extrabold">₹{courses?.price}</h4>
                                    <span className="line-through text-white/60 text-xs  sm:text-normal">₹{courses?.price! + 10001}</span>
                                </div>

                                <span className="inline-block mt-3 bg-white text-purple-700  px-3 sm:px-4 py-1 rounded-3xl sm:rounded-full text-xs sm:text-sm font-semibold">
                                    Save ₹10,001
                                </span>

                                <p className="mt-3 text-yellow-300 text-xs sm:text-sm font-medium">
                                    Course fee increasing soon ↗
                                </p>
                            </div>
                        </div>
                    </div>



                    {/* Hiring Partners */}

                    <div className="mt-10">
                        <p className="text-lg font-semibold mb-4">
                            Our learners get placed at
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                            {["Samsung", "xTo10x", "Haptik", "+250 more hiring partners"].map(
                                (company) => (
                                    <div
                                        key={company}
                                        className="bg-white/15 px-3 py-1  sm:px-5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium"
                                    >
                                        {company}
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>






                <div className="hidden lg:flex justify-center">
                    <img
                        src={courses?.image || "/images/Course/CouresesHero.svg"}
                        alt="Course Banner"
                        className="rounded-2xl shadow-lg w-[80%] h-[40vh] xl:w-[95%] xl:h-[60vh]"
                    />
                </div>

            </div>
        </section>



    )
}

export default Hero