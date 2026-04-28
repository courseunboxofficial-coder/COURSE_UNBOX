"use client";

import React from "react";

const inputClass =
    "mt-2 w-full px-4 py-2.5 rounded-xl bg-white text-gray-900 placeholder-gray-400 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/25 focus:border-indigo-500 transition shadow-sm text-sm";

const BlogCategories = [
    "Digital Marketing",
    "Data Science",
    "IT & Software",
    "Development",
];

const CMSMetaSection = ({
    title,
    category,
    slug,
    onChange,
    editorType,
}: {
    title: string;
    category: string;
    slug: string;
    onChange: (field: string, value: string) => void;
    editorType: "Blog" | "Course" | "Package" | "Temple" | "Pooja" | "Hotel";
}) => {
    const handleSlugChange = (value: string) => {
        const formatted = value
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9-]/g, "");
        onChange("slug", formatted);
    };

    return (
        <div className="bg-linear-to-br from-white to-gray-50/40 border border-gray-100 rounded-2xl p-6 shadow-sm space-y-5">
            <div>
                <h2 className="text-base font-bold text-gray-900 mb-1">Basic Info</h2>
                <p className="text-xs text-gray-500">Title, category, and URL slug for your {editorType.toLowerCase()}.</p>
            </div>

            {/* Title */}
            <div>
                <label className="text-sm font-semibold text-gray-700">
                    {editorType} Title <span className="text-red-500">*</span>
                </label>
                <input
                    value={title}
                    required
                    placeholder={`Enter your ${editorType.toLowerCase()} title…`}
                    className={inputClass}
                    onChange={(e) => onChange("title", e.target.value)}
                />
            </div>

            {/* Category + Slug */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <label className="text-sm font-semibold text-gray-700">
                        Category <span className="text-red-500">*</span>
                    </label>
                    <select
                        required
                        value={category}
                        onChange={(e) => onChange("category", e.target.value)}
                        className={`${inputClass} cursor-pointer`}
                    >
                        <option value="">Select Category</option>
                        {BlogCategories.map((cat, idx) => (
                            <option key={idx} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="text-sm font-semibold text-gray-700">
                        Slug <span className="text-red-500">*</span>
                    </label>
                    <input
                        value={slug}
                        required
                        placeholder="my-blog-post-title"
                        className={inputClass}
                        onChange={(e) => handleSlugChange(e.target.value)}
                    />
                    <p className="text-xs text-gray-400 mt-1.5">Auto-formatted: lowercase + dashes</p>
                </div>
            </div>
        </div>
    );
};

export default CMSMetaSection;
