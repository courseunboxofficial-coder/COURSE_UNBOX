"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export type CourseHighlight = { id: string; title: string; subtitle: string };

const inputClass =
    "mt-2 w-full px-4 py-2.5 rounded-xl bg-white text-gray-900 placeholder-gray-400 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/25 focus:border-indigo-500 transition shadow-sm text-sm";

const CourseHighlightsHandler = ({
    highlights,
    setHighlights,
}: {
    highlights: CourseHighlight[];
    setHighlights: React.Dispatch<React.SetStateAction<CourseHighlight[]>>;
}) => {
    /* Always maintain exactly 6 highlights */
    const normalised = Array.from({ length: 6 }, (_, i) => ({
        id: highlights[i]?.id ?? `h-${i}`,
        title: highlights[i]?.title ?? "",
        subtitle: highlights[i]?.subtitle ?? "",
    }));

    const update = (idx: number, field: "title" | "subtitle", value: string) => {
        setHighlights((prev) => {
            const next = Array.from({ length: 6 }, (_, i) => ({
                id: prev[i]?.id ?? `h-${i}`,
                title: prev[i]?.title ?? "",
                subtitle: prev[i]?.subtitle ?? "",
            }));
            next[idx] = { ...next[idx], [field]: value };
            return next;
        });
    };

    return (
        <div className="bg-linear-to-br from-white to-gray-50/40 border border-gray-100 rounded-2xl p-6 shadow-sm space-y-5">
            <div>
                <h2 className="text-base font-bold text-gray-900 mb-1 flex items-center gap-2">
                    <Sparkles size={16} className="text-indigo-500" />
                    Course Highlights
                </h2>
                <p className="text-xs text-gray-500">
                    6 key features / outcomes shown on the course card. Each needs a short title and subtitle.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {normalised.map((h, idx) => (
                    <div
                        key={h.id}
                        className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm space-y-3"
                    >
                        <span className="text-xs font-semibold text-indigo-500 uppercase tracking-wide">
                            Highlight {idx + 1}
                        </span>

                        <div>
                            <label className="text-sm font-semibold text-gray-700">Title</label>
                            <input
                                type="text"
                                value={h.title}
                                placeholder="e.g. 100% Job Guaranteed"
                                className={inputClass}
                                onChange={(e) => update(idx, "title", e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="text-sm font-semibold text-gray-700">Subtitle</label>
                            <textarea
                                rows={2}
                                value={h.subtitle}
                                placeholder="Brief description of this highlight…"
                                className={`${inputClass} resize-none`}
                                onChange={(e) => update(idx, "subtitle", e.target.value)}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseHighlightsHandler;
