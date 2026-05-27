"use client";

import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

export default function PopupForm() {
    const [show, setShow] = useState(false);
    const [status, setStatus] = useState<"success" | "error" | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
   

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 10000);

        return () => clearTimeout(timer);
    }, []);


    useEffect(() => {
        document.body.style.overflow = show ? "hidden" : "auto";
    }, [show]);


    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") handleClose();
        };
        document.addEventListener("keydown", handleEsc);
        return () => document.removeEventListener("keydown", handleEsc);
    }, []);


    const handleClose = () => {
        setShow(false);
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const templateParams = {
            name: `${firstName}`,
            first_name: firstName,
            email,
            phone,
        };

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                templateParams,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            setFirstName("");
            setEmail("");
            setPhone("");

            setStatus("success");
        } catch (error) {
            console.error(error);
            setStatus("error");
            setErrorMessage(
                "Failed to send message. Please check your connection and try again.",
            );
        }
    };

    if (!show) return null;

    return (
        <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={handleClose}
        >
            {/* Modal */}
            <div
                className="bg-white rounded-2xl p-6 w-[90%] max-w-md relative"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-3 right-3 text-gray-500 text-xl cursor-pointer"
                >
                    ✕
                </button>

                {/* Heading */}
                <h2 className="text-xl font-bold text-center mb-6">
                    Start Your AI Marketing Journey
                </h2>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full p-3 rounded-lg bg-gray-100 outline-none"
                        required
                    />


                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 rounded-lg bg-gray-100 outline-none"
                        required
                    />

                    <input
                        type="tel"
                        placeholder="Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full p-3 rounded-lg bg-gray-100 outline-none"
                        required
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:opacity-90 cursor-pointer"
                    >
                        {isSubmitting ? "Enrolling..." : "Enroll Now"}
                    </button>

                    {status === "success" && (
                        <p className="text-green-500 text-sm text-center mt-2">
                            Enrollment successful! We will contact you soon.
                        </p>
                    )}
                    {status === "error" && (
                        <p className="text-red-500 text-sm text-center mt-2">{errorMessage}</p>
                    )}
                </form>

                <p className="text-xs text-gray-500 text-center mt-4">
                    By enrolling, you agree to our Terms of Service.
                </p>
            </div>
        </div>
    );
}