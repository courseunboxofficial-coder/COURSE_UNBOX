"use client";

import React from "react";
import dynamic from "next/dynamic";
import "suneditor/dist/css/suneditor.min.css";

const SunEditor = dynamic(() => import("suneditor-react"), { ssr: false });

const inputClass =
    "mt-2 w-full px-4 py-2.5 rounded-xl bg-white text-gray-900 placeholder-gray-400 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/25 focus:border-indigo-500 transition shadow-sm text-sm";

const CMSContentSection = ({
    subContent,
    content,
    contentKey,
    onChange,
    editorType,
}: {
    subContent: string;
    content: string;
    contentKey?: string | number;
    onChange: (field: string, value: string) => void;
    editorType: "Blog" | "Course" | "Package" | "Temple" | "Pooja" | "Hotel";
}) => {
    return (
        <div className="bg-linear-to-br from-white to-gray-50/40 border border-gray-100 rounded-2xl p-6 shadow-sm space-y-5">
            <div>
                <h2 className="text-base font-bold text-gray-900 mb-1 flex items-center gap-2">
                    📝 Content
                </h2>
                <p className="text-xs text-gray-500 mb-5">
                    Write a short summary and the full description of your {editorType.toLowerCase()}.
                </p>
            </div>

            {/* Short Description */}
            <div>
                <label className="text-sm font-semibold text-gray-700">
                    Short Description{" "}
                    <span className="text-gray-400 font-normal text-xs">(shown in listings)</span>
                </label>
                <textarea
                    required
                    rows={3}
                    value={subContent}
                    maxLength={300}
                    onChange={(e) => onChange("subContent", e.target.value)}
                    placeholder="A brief 1–2 line description shown on cards and preview sections…"
                    className={`${inputClass} resize-none`}
                />
                <p className="text-xs text-gray-400 mt-1.5">
                    {subContent.length}/300 characters
                </p>
            </div>

            {/* Rich Text — SunEditor */}
            <div>
                <label className="text-sm font-semibold text-gray-700 flex items-center justify-between">
                    <span>
                        Full Description <span className="text-red-500">*</span>
                    </span>
                    {content.replace(/<[^>]*>/g, "").length < 300 && (
                        <span className="text-amber-500 text-xs font-semibold">
                            min 300 chars ({content.replace(/<[^>]*>/g, "").length} so far)
                        </span>
                    )}
                </label>
                <div className="mt-2 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                    <SunEditor
                        key={contentKey}
                        defaultValue={content}
                        setOptions={{
                            minHeight: "400px",
                            maxHeight: "600px",
                            buttonList: [
                                ["undo", "redo"],
                                ["formatBlock"],
                                ["bold", "italic", "underline", "strike"],
                                ["fontColor", "hiliteColor"],
                                ["list"],
                                ["align"],
                                ["link", "image"],
                                ["table"],
                                ["codeView"],
                            ],
                        }}
                        onChange={(val) => onChange("content", val)}
                    />
                </div>
            </div>
        </div>
    );
};

export default CMSContentSection;
