"use client";

import React from "react";

const inputClass =
    "mt-2 w-full px-4 py-2.5 rounded-xl bg-white text-gray-900 placeholder-gray-400 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/25 focus:border-indigo-500 transition shadow-sm text-sm";

const CMSSchema = ({
    schemaTitle,
    schemaDescription,
    onChange,
    editorType,
}: {
    schemaTitle: string;
    schemaDescription: string;
    onChange: (field: string, value: string) => void;
    editorType: "Blog" | "Course" | "Package" | "Temple" | "Pooja" | "Hotel";
}) => {
    return (
        <div className="bg-linear-to-br from-white to-gray-50/40 border border-gray-100 rounded-2xl p-6 shadow-sm space-y-5">
            <div>
                <h2 className="text-base font-bold text-gray-900 mb-1">Structured Data</h2>
                <p className="text-xs text-gray-500">Schema markup for rich search snippets and better visibility.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <label className="text-sm font-semibold text-gray-700">
                        Schema Title <span className="text-red-500">*</span>
                    </label>
                    <input
                        value={schemaTitle}

                        placeholder={`${editorType} structured data title…`}
                        className={inputClass}
                        onChange={(e) => onChange("schemaTitle", e.target.value)}
                    />
                </div>

                <div>
                    <label className="text-sm font-semibold text-gray-700">
                        Schema Description <span className="text-red-500">*</span>
                    </label>
                    <input
                        value={schemaDescription}

                        placeholder="Structured data description for rich snippets…"
                        className={inputClass}
                        onChange={(e) => onChange("schemaDescription", e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default CMSSchema;
