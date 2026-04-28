"use client";

import React from "react";
import { Trash2, Plus } from "lucide-react";

type FAQ = {
    id: string;
    question: string;
    answer: string;
};

const inputClass =
    "mt-2 w-full px-4 py-2.5 rounded-xl bg-white text-gray-900 placeholder-gray-400 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/25 focus:border-indigo-500 transition shadow-sm text-sm";

const FaqHandler = ({
    faqs,
    setFaqs,
    editorType,
}: {
    faqs: FAQ[];
    setFaqs: React.Dispatch<React.SetStateAction<FAQ[]>>;
    editorType: "Blog" | "Course" | "Package" | "Temple" | "Pooja" | "Hotel";
}) => {
    const addFaq = () => {
        setFaqs((prev) => [
            ...prev,
            { id: crypto.randomUUID(), question: "", answer: "" },
        ]);
    };

    const removeFaq = (id: string) => {
        setFaqs((prev) => prev.filter((f) => f.id !== id));
    };

    const updateFaq = (id: string, field: "question" | "answer", value: string) => {
        setFaqs((prev) =>
            prev.map((f) => (f.id === id ? { ...f, [field]: value } : f))
        );
    };

    return (
        <div className="bg-linear-to-br from-white to-gray-50/40 border border-gray-100 rounded-2xl p-6 shadow-sm space-y-5">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-base font-bold text-gray-900 mb-1">
                        FAQs
                        {faqs.length > 0 && (
                            <span className="ml-2 text-xs font-semibold bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded-full">
                                {faqs.length}
                            </span>
                        )}
                    </h2>
                    <p className="text-xs text-gray-500">
                        Frequently asked questions shown on the {editorType.toLowerCase()} page.
                    </p>
                </div>
                <button
                    type="button"
                    onClick={addFaq}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-500 transition active:scale-95 cursor-pointer shadow-sm"
                >
                    <Plus size={15} />
                    Add FAQ
                </button>
            </div>

            {faqs.length === 0 && (
                <div className="py-8 text-center border border-dashed border-gray-200 rounded-xl">
                    <p className="text-sm text-gray-400">No FAQs yet — click "Add FAQ" to create one.</p>
                </div>
            )}

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={faq.id}
                        className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-3"
                    >
                        <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                                FAQ #{index + 1}
                            </span>
                            <button
                                type="button"
                                onClick={() => removeFaq(faq.id)}
                                className="p-1.5 rounded-lg text-red-400 hover:bg-red-50 hover:text-red-600 transition cursor-pointer"
                            >
                                <Trash2 size={15} />
                            </button>
                        </div>

                        <div>
                            <label className="text-sm font-semibold text-gray-700">Question</label>
                            <input
                                type="text"
                                placeholder="Enter the question for this FAQ"
                                className={inputClass}
                                value={faq.question}
                                onChange={(e) => updateFaq(faq.id, "question", e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="text-sm font-semibold text-gray-700">Answer</label>
                            <textarea
                                rows={3}
                                placeholder="Enter the answer for this FAQ"
                                className={`${inputClass} resize-none`}
                                value={faq.answer}
                                onChange={(e) => updateFaq(faq.id, "answer", e.target.value)}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FaqHandler;
