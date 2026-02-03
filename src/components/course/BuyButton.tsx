"use client";

import { supabase } from "@/lib/supabse/supabaseConfig";
import { useRouter } from "next/navigation";


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
    modules: {
        [categoryName: string]: {
            module: string;
            title: string;
            lectures: string[];
        }[];
    }[];

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

export default function BuyButton({ courseData }: { courseData: Course }) {

    const router = useRouter();

    const handleBuy = async () => {

        const { data: userData } = await supabase.auth.getUser();

        if (userData.user == null) {
            router.push("/login");
            return;
        }

        console.log(userData);
        console.log("THE PRICE OF THE COURSE IS : ");
        console.log(courseData.price);

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/razorpay/create-order`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                amount: courseData.price * 100, // in paise
                courseId: courseData.id
            })
        });

        console.log(res);

        const order = await res.json();

        const options = {

            key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
            amount: order.amount,
            currency: 'INR',
            name: 'Course Unbox',
            description: courseData.title,
            image: "https://pdgzqzyhgeowizefaoxs.supabase.co/storage/v1/object/public/AppImages/CourseUnboxLogo.webp",
            order_id: order.id,
            "handler": async function (response: any) {

                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/razorpay/verify-payment`, {

                    method: "POST",
                    body: JSON.stringify(response),

                });

                const paymentResult = await res.json();

                if (paymentResult.success === true) {

                    const { data: student, error } = await supabase
                        .from("Student")
                        .select("*")
                        .eq("email", userData.user.email)
                        .single();

                    if (error) return;

                    const updatedCourses = [
                        ...(student.course ?? []),
                        { id: courseData.id }
                    ];

                    const { error: updateError } = await supabase
                        .from("Student")
                        .update({ course: updatedCourses })
                        .eq("email", userData.user.email);

                    if (updateError) {
                        return;
                    }

                    router.push("/student/courses");
                }

            },

            prefill: {
                name: userData.user.user_metadata?.name ?? "User",
                email: userData.user.email,
                contact: '9643065630'
            },

            theme: {

                color: '#050568'

            },
        };


        const rzp = new (window as any).Razorpay(options);
        rzp.on('payment.failed', function (response: any) {
            alert("The Payment is failed currently : ");
        });
        rzp.open();

    };

    return (
        <button
            onClick={handleBuy}
            className="flex items-center justify-center gap-2 bg-[#e6ba2b] text-white px-12 py-4 rounded-full mt-5 cursor-pointer hover:bg-[#070739] transition "
        >
            Buy Now Start your Learning

        </button>
    );
}
