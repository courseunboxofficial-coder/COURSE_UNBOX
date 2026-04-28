"use client";

import React from "react";
import { Plus, Trash2, Star } from "lucide-react";

export type Testimonial = {
    id: string;
    name: string;
    role: string;
    title: string;
    course: string;
    company: string;
    ranking: string;
    description: string;
};

const inputClass =
    "mt-2 w-full px-4 py-2.5 rounded-xl bg-white text-gray-900 placeholder-gray-400 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/25 focus:border-indigo-500 transition shadow-sm text-sm";

const EMPTY_TESTIMONIAL = (): Testimonial => ({
    id: crypto.randomUUID(),
    name: "",
    role: "",
    title: "",
    course: "",
    company: "",
    ranking: "5.0",
    description: "",
});

const TestimonialsHandler = ({
    testimonials,
    setTestimonials,
}: {
    testimonials: Testimonial[];
    setTestimonials: React.Dispatch<React.SetStateAction<Testimonial[]>>;
}) => {
    const add = () => setTestimonials((p) => [...p, EMPTY_TESTIMONIAL()]);

    const remove = (id: string) =>
        setTestimonials((p) => p.filter((t) => t.id !== id));

    const update = (id: string, field: keyof Omit<Testimonial, "id">, value: string) =>
        setTestimonials((p) => p.map((t) => (t.id === id ? { ...t, [field]: value } : t)));

    return (
        <div className="bg-linear-to-br from-white to-gray-50/40 border border-gray-100 rounded-2xl p-6 shadow-sm space-y-5">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-base font-bold text-gray-900 mb-1 flex items-center gap-2">
                        <Star size={16} className="text-yellow-500" />
                        Testimonials
                        {testimonials.length > 0 && (
                            <span className="ml-1 text-xs font-semibold bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded-full">
                                {testimonials.length}
                            </span>
                        )}
                    </h2>
                    <p className="text-xs text-gray-500">
                        Student reviews shown on the course page. Add at least 3 for best display.
                    </p>
                </div>
                <button
                    type="button"
                    onClick={add}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-500 transition active:scale-95 cursor-pointer shadow-sm"
                >
                    <Plus size={15} /> Add Testimonial
                </button>
            </div>

            {testimonials.length === 0 && (
                <div className="py-8 text-center border border-dashed border-gray-200 rounded-xl">
                    <p className="text-sm text-gray-400">No testimonials yet — click "Add Testimonial" to create one.</p>
                </div>
            )}

            <div className="space-y-4">
                {testimonials.map((t, idx) => (
                    <div
                        key={t.id}
                        className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-3"
                    >
                        <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                                Testimonial #{idx + 1}
                            </span>
                            <button
                                type="button"
                                onClick={() => remove(t.id)}
                                className="p-1.5 rounded-lg text-red-400 hover:bg-red-50 hover:text-red-600 transition cursor-pointer"
                            >
                                <Trash2 size={15} />
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-semibold text-gray-700">Student Name</label>
                                <input
                                    type="text"
                                    value={t.name}
                                    placeholder="Rahul Mehta"
                                    className={inputClass}
                                    onChange={(e) => update(t.id, "name", e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="text-sm font-semibold text-gray-700">Role / Designation</label>
                                <input
                                    type="text"
                                    value={t.role}
                                    placeholder="Performance Marketing Executive"
                                    className={inputClass}
                                    onChange={(e) => update(t.id, "role", e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-semibold text-gray-700">Company</label>
                                <input
                                    type="text"
                                    value={t.company}
                                    placeholder="Company name"
                                    className={inputClass}
                                    onChange={(e) => update(t.id, "company", e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="text-sm font-semibold text-gray-700">
                                    Rating
                                    <span className="text-gray-400 font-normal text-xs ml-1">(e.g. 4.8)</span>
                                </label>
                                <input
                                    type="text"
                                    value={t.ranking}
                                    placeholder="5.0"
                                    className={inputClass}
                                    onChange={(e) => update(t.id, "ranking", e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="text-sm font-semibold text-gray-700">Review Title</label>
                            <input
                                type="text"
                                value={t.title}
                                placeholder="Career Transformation Through AI Marketing"
                                className={inputClass}
                                onChange={(e) => update(t.id, "title", e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="text-sm font-semibold text-gray-700">Review Description</label>
                            <textarea
                                rows={3}
                                value={t.description}
                                placeholder="What the student said about the course…"
                                className={`${inputClass} resize-none`}
                                onChange={(e) => update(t.id, "description", e.target.value)}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestimonialsHandler;
