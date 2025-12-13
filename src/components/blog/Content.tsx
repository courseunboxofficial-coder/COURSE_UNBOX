import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

export type InternshipCard = {
    id: number;
    category: string;
    title: string;
    description: string;
    image: string;
    href: string;
};

const Content = () => {

    const cards: InternshipCard[] = [
        {
            id: 1,
            category: "Digital Marketing",
            title:
                "Content Writing Internship at NDTV in Delhi, Editing & Managing Content – Apply Now in 2025",
            description:
                "Why the NDTV Content Writing Internship is a big opportunity if you're searching for a content writing internship...",
            image: "/images/Home/Course.jpg",
            href: "/internships/content-writing",
        },
        {
            id: 2,
            category: "Data Analytics",
            title: "6 Reasons Interactive Python Is a Game-Changer for Me",
            description:
                "Interactive Python reshaped the way I write code, learn new concepts, and experiment with ideas...",
            image: "/images/Home/Course.jpg",
            href: "/blogs/interactive-python",
        },

        {
            id: 3,
            category: "Web Development",
            title:
                "Free Software Engineer Internship at Stripe, Bengaluru – Apply Now | Stipend ₹12 LPA, Apply in 2025",
            description:
                "Stripe is offering a Free Software Engineer Internship in Bengaluru with a ₹12 LPA stipend...",
            image: "/images/Home/Course.jpg",
            href: "/internships/software-engineer",
        },

        {
            id: 4,
            category: "Web Development",
            title:
                "Free Software Engineer Internship at Stripe, Bengaluru – Apply Now | Stipend ₹12 LPA, Apply in 2025",
            description:
                "Stripe is offering a Free Software Engineer Internship in Bengaluru with a ₹12 LPA stipend...",
            image: "/images/Home/Course.jpg",
            href: "/internships/software-engineer",
        },

        {
            id: 5,
            category: "Web Development",
            title:
                "Free Software Engineer Internship at Stripe, Bengaluru – Apply Now | Stipend ₹12 LPA, Apply in 2025",
            description:
                "Stripe is offering a Free Software Engineer Internship in Bengaluru with a ₹12 LPA stipend...",
            image: "/images/Home/Course.jpg",
            href: "/internships/software-engineer",
        },

        {
            id: 6,
            category: "Web Development",
            title:
                "Free Software Engineer Internship at Stripe, Bengaluru – Apply Now | Stipend ₹12 LPA, Apply in 2025",
            description:
                "Stripe is offering a Free Software Engineer Internship in Bengaluru with a ₹12 LPA stipend...",
            image: "/images/Home/Course.jpg",
            href: "/internships/software-engineer",
        },

        {
            id: 7,
            category: "Web Development",
            title:
                "Free Software Engineer Internship at Stripe, Bengaluru – Apply Now | Stipend ₹12 LPA, Apply in 2025",
            description:
                "Stripe is offering a Free Software Engineer Internship in Bengaluru with a ₹12 LPA stipend...",
            image: "/images/Home/Course.jpg",
            href: "/internships/software-engineer",
        },

        {
            id: 8,
            category: "Web Development",
            title:
                "Free Software Engineer Internship at Stripe, Bengaluru – Apply Now | Stipend ₹12 LPA, Apply in 2025",
            description:
                "Stripe is offering a Free Software Engineer Internship in Bengaluru with a ₹12 LPA stipend...",
            image: "/images/Home/Course.jpg",
            href: "/internships/software-engineer",
        },
        {
            id: 9,
            category: "Web Development",
            title:
                "Free Software Engineer Internship at Stripe, Bengaluru – Apply Now | Stipend ₹12 LPA, Apply in 2025",
            description:
                "Stripe is offering a Free Software Engineer Internship in Bengaluru with a ₹12 LPA stipend...",
            image: "/images/Home/Course.jpg",
            href: "/internships/software-engineer",
        },
        {
            id: 10,
            category: "Web Development",
            title:
                "Free Software Engineer Internship at Stripe, Bengaluru – Apply Now | Stipend ₹12 LPA, Apply in 2025",
            description:
                "Stripe is offering a Free Software Engineer Internship in Bengaluru with a ₹12 LPA stipend...",
            image: "/images/Home/Course.jpg",
            href: "/internships/software-engineer",
        },

        {
            id: 11,
            category: "Web Development",
            title:
                "Free Software Engineer Internship at Stripe, Bengaluru – Apply Now | Stipend ₹12 LPA, Apply in 2025",
            description:
                "Stripe is offering a Free Software Engineer Internship in Bengaluru with a ₹12 LPA stipend...",
            image: "/images/Home/Course.jpg",
            href: "/internships/software-engineer",
        },

        {
            id: 12,
            category: "Web Development",
            title:
                "Free Software Engineer Internship at Stripe, Bengaluru – Apply Now | Stipend ₹12 LPA, Apply in 2025",
            description:
                "Stripe is offering a Free Software Engineer Internship in Bengaluru with a ₹12 LPA stipend...",
            image: "/images/Home/Course.jpg",
            href: "/internships/software-engineer",
        },

    ];


    return (

        <section className="py-16">
            <div className="mx-auto w-full px-6">
                <h2 className="text-3xl font-bold mb-10">Latest Opportunities</h2>

                <div className="flex flex-wrap gap-8 pb-4">

                    {cards.map((card) => (
                        <Link
                            key={card.id}
                            href={card.href}
                            className="min-w-[340px] max-w-[340px] bg-white rounded-3xl shadow hover:shadow-2xl hover:shadow-indigo-300 transition"
                        >

                            <div className="relative h-44 w-full overflow-hidden rounded-t-3xl">
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>


                            <div className="p-6">
                                <span className="inline-block mb-3 rounded-full bg-gray-100 px-4 py-1 text-xs font-medium text-gray-700">
                                    {card.category}
                                </span>
                                <h3 className="text-lg font-semibold leading-snug mb-3">
                                    {card.title}
                                </h3>
                                <p className="text-sm text-gray-600 line-clamp-3">
                                    {card.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Content