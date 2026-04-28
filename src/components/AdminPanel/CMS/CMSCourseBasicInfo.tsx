"use client";

import React from "react";
import { BookOpen, DollarSign, Star } from "lucide-react";

const inputClass =
    "mt-2 w-full px-4 py-2.5 rounded-xl bg-white text-gray-900 placeholder-gray-400 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/25 focus:border-indigo-500 transition shadow-sm text-sm";

const CourseDomains = [
    "Digital Marketing",
    "Development",
    "Data Science",
    "IT & Software",
    "Design",
    "Business",
    "Finance",
    "Personal Development",
    "Marketing",
    "Photography",
];

const DeliveryModes = ["Online", "Offline", "Hybrid", "Live", "Recorded"];

const CourseLanguages = ["English", "Hindi", "Hinglish", "Spanish", "French", "German"];

export type CourseBasicFields = {
    title: string;
    slug: string;
    domain: string;
    language: string;
    startDate: string;
    duration: string;
    deliveryMode: string;
    price: string;
    low: string;
    high: string;
};

const CMSCourseBasicInfo = ({
    fields,
    onChange,
}: {
    fields: CourseBasicFields;
    onChange: (field: keyof CourseBasicFields, value: string) => void;
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
                <h2 className="text-base font-bold text-gray-900 mb-1 flex items-center gap-2">
                    <BookOpen size={16} className="text-indigo-500" />
                    Course Information
                </h2>
                <p className="text-xs text-gray-500">
                    Core details visible to learners on the course page.
                </p>
            </div>

            {/* Title */}
            <div>
                <label className="text-sm font-semibold text-gray-700">
                    Course Title <span className="text-red-500">*</span>
                </label>
                <input
                    value={fields.title}
                    required
                    placeholder="e.g. AI Based Digital Marketing Diploma"
                    className={inputClass}
                    onChange={(e) => onChange("title", e.target.value)}
                />
            </div>

            {/* Slug + Domain */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <label className="text-sm font-semibold text-gray-700">
                        Slug <span className="text-red-500">*</span>
                    </label>
                    <input
                        value={fields.slug}
                        required
                        placeholder="ai-based-digital-marketing"
                        className={inputClass}
                        onChange={(e) => handleSlugChange(e.target.value)}
                    />
                    <p className="text-xs text-gray-400 mt-1.5">Auto-formatted: lowercase + dashes</p>
                </div>
                <div>
                    <label className="text-sm font-semibold text-gray-700">
                        Domain / Category <span className="text-red-500">*</span>
                    </label>
                    <select
                        required
                        value={fields.domain}
                        onChange={(e) => onChange("domain", e.target.value)}
                        className={`${inputClass} cursor-pointer`}
                    >
                        <option value="">Select a domain</option>
                        {CourseDomains.map((d) => (
                            <option key={d} value={d}>{d}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Language + Delivery Mode */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <label className="text-sm font-semibold text-gray-700">
                        Language <span className="text-red-500">*</span>
                    </label>
                    <select
                        required
                        value={fields.language}
                        onChange={(e) => onChange("language", e.target.value)}
                        className={`${inputClass} cursor-pointer`}
                    >
                        <option value="">Select language</option>
                        {CourseLanguages.map((l) => (
                            <option key={l} value={l}>{l}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="text-sm font-semibold text-gray-700">
                        Delivery Mode <span className="text-red-500">*</span>
                    </label>
                    <select
                        required
                        value={fields.deliveryMode}
                        onChange={(e) => onChange("deliveryMode", e.target.value)}
                        className={`${inputClass} cursor-pointer`}
                    >
                        <option value="">Select mode</option>
                        {DeliveryModes.map((m) => (
                            <option key={m} value={m}>{m}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Start Date + Duration */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <label className="text-sm font-semibold text-gray-700">
                        Start Date <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="date"
                        value={fields.startDate}
                        required
                        className={inputClass}
                        onChange={(e) => onChange("startDate", e.target.value)}
                    />
                </div>
                <div>
                    <label className="text-sm font-semibold text-gray-700">
                        Duration (months) <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="number"
                        min="1"
                        step="1"
                        value={fields.duration}
                        required
                        placeholder="e.g. 6"
                        className={inputClass}
                        onChange={(e) => onChange("duration", e.target.value)}
                    />
                    <p className="text-xs text-gray-400 mt-1.5">Enter total duration in months</p>
                </div>
            </div>

            {/* Price */}
            <div>
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-1">
                    <DollarSign size={13} />
                    Price (₹) <span className="text-red-500">*</span>
                </label>
                <input
                    type="number"
                    min="0"
                    step="1"
                    value={fields.price}
                    required
                    placeholder="e.g. 35000"
                    className={inputClass}
                    onChange={(e) => onChange("price", e.target.value)}
                />
                <p className="text-xs text-gray-400 mt-1.5">Enter 0 for a free course</p>
            </div>

            {/* Rating range */}
            <div>
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-1">
                    <Star size={13} className="text-yellow-500" />
                    Rating Range
                    <span className="text-gray-400 font-normal text-xs ml-1">(displayed as "4 – 5 stars")</span>
                </label>
                <div className="grid grid-cols-2 gap-4 mt-2">
                    <div>
                        <input
                            type="number"
                            min="0"
                            max="5"
                            step="0.1"
                            value={fields.low}
                            placeholder="Low (e.g. 4)"
                            className="w-full px-4 py-2.5 rounded-xl bg-white text-gray-900 placeholder-gray-400 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/25 focus:border-indigo-500 transition shadow-sm text-sm"
                            onChange={(e) => onChange("low", e.target.value)}
                        />
                        <p className="text-xs text-gray-400 mt-1">Minimum rating</p>
                    </div>
                    <div>
                        <input
                            type="number"
                            min="0"
                            max="5"
                            step="0.1"
                            value={fields.high}
                            placeholder="High (e.g. 5)"
                            className="w-full px-4 py-2.5 rounded-xl bg-white text-gray-900 placeholder-gray-400 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/25 focus:border-indigo-500 transition shadow-sm text-sm"
                            onChange={(e) => onChange("high", e.target.value)}
                        />
                        <p className="text-xs text-gray-400 mt-1">Maximum rating</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CMSCourseBasicInfo;
