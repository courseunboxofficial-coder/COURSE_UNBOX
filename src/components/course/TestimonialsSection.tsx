import { Linkedin, TrendingUp, Star } from "lucide-react";


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
    image: string;

}

export default function Testimonials({ courses }: { courses: Course }) {



    return (

        <section className="bg-[#F7FBFF] py-16">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-10">
                    Reviews from placed learners
                </h2>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {courses.Testimonials?.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between"
                        >
                            {/* Top Badges */}
                            <div className="flex items-center justify-between mb-4">
                                <span className="flex items-center gap-1 text-sm font-semibold bg-orange-50 text-orange-600 px-3 py-1 rounded-full">
                                    <Star size={14} fill="currentColor" />
                                    {testimonial.ranking}
                                </span>

                                <span className="flex items-center gap-1 text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
                                    <TrendingUp size={14} />
                                    Placed in 2025
                                </span>
                            </div>

                            {/* Content */}

                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {testimonial.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {testimonial.description}
                                </p>
                            </div>

                            <hr className="my-6" />

                            {/* User Info */}

                            <div className="flex items-center gap-3">
                                {/* <Image
                                    src={item.avatar}
                                    alt={item.name}
                                    width={44}
                                    height={44}
                                    className="rounded-full object-cover"
                                /> */}

                                <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                        <p className="font-semibold text-gray-900">
                                            {testimonial.name}
                                        </p>
                                        <Linkedin
                                            size={16}
                                            className="text-blue-600 cursor-pointer"
                                        />
                                    </div>
                                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}
