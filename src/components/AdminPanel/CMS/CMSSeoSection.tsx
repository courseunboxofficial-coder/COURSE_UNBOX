"use client";

import React from "react";

const inputClass =
    "mt-2 w-full px-4 py-2.5 rounded-xl bg-white text-gray-900 placeholder-gray-400 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/25 focus:border-indigo-500 transition shadow-sm text-sm";

const CMSSeoSection = ({
    metaTitle,
    metaDescription,
    onChange,
    editorType,
}: {
    metaTitle: string;
    metaDescription: string;
    onChange: (field: string, value: string) => void;
    editorType: "Blog" | "Course" | "Package" | "Temple" | "Pooja" | "Hotel";
}) => {
    return (
        <div className="bg-linear-to-br from-white to-gray-50/40 border border-gray-100 rounded-2xl p-6 shadow-sm space-y-5">
            <div>
                <h2 className="text-base font-bold text-gray-900 mb-1">SEO Metadata</h2>
                <p className="text-xs text-gray-500">Optimise how this {editorType.toLowerCase()} appears in search results.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <label className="text-sm font-semibold text-gray-700">
                        Meta Title <span className="text-red-500">*</span>
                    </label>
                    <input
                        value={metaTitle}

                        placeholder={`${editorType} SEO title…`}
                        className={inputClass}
                        maxLength={60}
                        onChange={(e) => onChange("metaTitle", e.target.value)}
                    />
                    <p className="text-xs text-gray-400 mt-1.5">{metaTitle.length}/60 characters</p>
                </div>

                <div>
                    <label className="text-sm font-semibold text-gray-700">
                        Meta Description <span className="text-red-500">*</span>
                    </label>
                    <input
                        value={metaDescription}

                        placeholder="Brief description for search engines…"
                        className={inputClass}
                        maxLength={160}
                        onChange={(e) => onChange("metaDescription", e.target.value)}
                    />
                    <p className="text-xs text-gray-400 mt-1.5">{metaDescription.length}/160 characters</p>
                </div>
            </div>
        </div>
    );
};

export default CMSSeoSection;
