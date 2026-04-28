"use client";

import React, { useState } from "react";
import { Plus, Trash2, ChevronDown, ChevronUp, BookOpen, GripVertical } from "lucide-react";

/* ───── Types ───── */
export type CourseLecture = string;

export type CourseModule = {
    id: string;
    title: string;
    moduleNumber: string;
    lectures: string[];
};

export type CourseSection = {
    id: string;
    name: string;
    modules: CourseModule[];
};

/* ───── DB Serialisation ───── */
export const sectionsToDb = (sections: CourseSection[]) =>
    sections.map((s) => ({
        [s.name]: s.modules.map((m) => ({
            title: m.title,
            module: m.moduleNumber,
            lectures: m.lectures,
        })),
    }));

export const sectionsFromDb = (data: Record<string, any>[]): CourseSection[] =>
    (data || []).map((sectionObj) => {
        const [name, mods] = Object.entries(sectionObj)[0] as [string, any[]];
        return {
            id: crypto.randomUUID(),
            name,
            modules: (mods || []).map((m) => ({
                id: crypto.randomUUID(),
                title: m.title || "",
                moduleNumber: m.module || "",
                lectures: Array.isArray(m.lectures) ? m.lectures : [],
            })),
        };
    });

const inputClass =
    "mt-2 w-full px-4 py-2.5 rounded-xl bg-white text-gray-900 placeholder-gray-400 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/25 focus:border-indigo-500 transition shadow-sm text-sm";

/* ───── LectureList sub-component ───── */
const LectureList = ({
    lectures,
    onChange,
}: {
    lectures: string[];
    onChange: (lectures: string[]) => void;
}) => {
    const addLecture = () => onChange([...lectures, ""]);
    const removeLecture = (i: number) => onChange(lectures.filter((_, idx) => idx !== i));
    const updateLecture = (i: number, val: string) =>
        onChange(lectures.map((l, idx) => (idx === i ? val : l)));

    return (
        <div className="mt-3 space-y-2">
            {lectures.map((lec, i) => (
                <div key={i} className="flex items-center gap-2">
                    <GripVertical size={14} className="text-gray-300 shrink-0" />
                    <input
                        type="text"
                        value={lec}
                        placeholder={`Lecture ${i + 1}: Topic name`}
                        className="flex-1 px-3 py-2 text-sm rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/25 focus:border-indigo-500 transition"
                        onChange={(e) => updateLecture(i, e.target.value)}
                    />
                    <button
                        type="button"
                        onClick={() => removeLecture(i)}
                        className="p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition cursor-pointer"
                    >
                        <Trash2 size={13} />
                    </button>
                </div>
            ))}
            <button
                type="button"
                onClick={addLecture}
                className="flex items-center gap-1.5 text-xs text-indigo-600 hover:text-indigo-800 font-semibold mt-1 cursor-pointer"
            >
                <Plus size={13} /> Add Lecture
            </button>
        </div>
    );
};

/* ───── ModuleCard sub-component ───── */
const ModuleCard = ({
    mod,
    onUpdate,
    onRemove,
}: {
    mod: CourseModule;
    onUpdate: (updated: CourseModule) => void;
    onRemove: () => void;
}) => {
    const [open, setOpen] = useState(true);

    return (
        <div className="border border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden">
            <div
                className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-50 transition"
                onClick={() => setOpen((o) => !o)}
            >
                <div className="flex items-center gap-2">
                    <BookOpen size={14} className="text-indigo-500" />
                    <span className="text-sm font-semibold text-gray-800">
                        {mod.title || "Untitled Module"}
                    </span>
                    <span className="text-xs text-gray-400">{mod.moduleNumber}</span>
                    <span className="text-xs text-gray-400">· {mod.lectures.length} lectures</span>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); onRemove(); }}
                        className="p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition cursor-pointer"
                    >
                        <Trash2 size={13} />
                    </button>
                    {open ? <ChevronUp size={15} className="text-gray-400" /> : <ChevronDown size={15} className="text-gray-400" />}
                </div>
            </div>

            {open && (
                <div className="px-4 pb-4 space-y-3 border-t border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                        <div>
                            <label className="text-xs font-semibold text-gray-600">Module Title</label>
                            <input
                                type="text"
                                value={mod.title}
                                placeholder="e.g. HTML Basics"
                                className={inputClass}
                                onChange={(e) => onUpdate({ ...mod, title: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="text-xs font-semibold text-gray-600">
                                Module Number
                                <span className="text-gray-400 font-normal ml-1">(e.g. Module 1)</span>
                            </label>
                            <input
                                type="text"
                                value={mod.moduleNumber}
                                placeholder="Module 1"
                                className={inputClass}
                                onChange={(e) => onUpdate({ ...mod, moduleNumber: e.target.value })}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="text-xs font-semibold text-gray-600">Lectures</label>
                        <LectureList
                            lectures={mod.lectures}
                            onChange={(lectures) => onUpdate({ ...mod, lectures })}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

/* ───── Main Component ───── */
const CourseModulesHandler = ({
    sections,
    setSections,
}: {
    sections: CourseSection[];
    setSections: React.Dispatch<React.SetStateAction<CourseSection[]>>;
}) => {
    const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

    const toggleSection = (id: string) =>
        setOpenSections((p) => ({ ...p, [id]: !p[id] }));

    const addSection = () => {
        const id = crypto.randomUUID();
        setSections((p) => [...p, { id, name: "", modules: [] }]);
        setOpenSections((p) => ({ ...p, [id]: true }));
    };

    const removeSection = (id: string) =>
        setSections((p) => p.filter((s) => s.id !== id));

    const updateSectionName = (id: string, name: string) =>
        setSections((p) => p.map((s) => (s.id === id ? { ...s, name } : s)));

    const addModule = (sectionId: string) =>
        setSections((p) =>
            p.map((s) =>
                s.id === sectionId
                    ? {
                          ...s,
                          modules: [
                              ...s.modules,
                              {
                                  id: crypto.randomUUID(),
                                  title: "",
                                  moduleNumber: `Module ${s.modules.length + 1}`,
                                  lectures: [],
                              },
                          ],
                      }
                    : s
            )
        );

    const updateModule = (sectionId: string, updated: CourseModule) =>
        setSections((p) =>
            p.map((s) =>
                s.id === sectionId
                    ? { ...s, modules: s.modules.map((m) => (m.id === updated.id ? updated : m)) }
                    : s
            )
        );

    const removeModule = (sectionId: string, moduleId: string) =>
        setSections((p) =>
            p.map((s) =>
                s.id === sectionId
                    ? { ...s, modules: s.modules.filter((m) => m.id !== moduleId) }
                    : s
            )
        );

    return (
        <div className="bg-linear-to-br from-white to-gray-50/40 border border-gray-100 rounded-2xl p-6 shadow-sm space-y-5">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-base font-bold text-gray-900 mb-1 flex items-center gap-2">
                        <BookOpen size={16} className="text-indigo-500" />
                        Course Curriculum / Modules
                        {sections.length > 0 && (
                            <span className="ml-1 text-xs font-semibold bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded-full">
                                {sections.length} sections
                            </span>
                        )}
                    </h2>
                    <p className="text-xs text-gray-500">
                        Build the full course curriculum. Each section can have multiple modules with lecture lists.
                    </p>
                </div>
                <button
                    type="button"
                    onClick={addSection}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-500 transition active:scale-95 cursor-pointer shadow-sm"
                >
                    <Plus size={15} /> Add Section
                </button>
            </div>

            {sections.length === 0 && (
                <div className="py-8 text-center border border-dashed border-gray-200 rounded-xl">
                    <p className="text-sm text-gray-400">No sections yet — click "Add Section" to start building your curriculum.</p>
                </div>
            )}

            <div className="space-y-4">
                {sections.map((section, sIdx) => {
                    const isOpen = openSections[section.id] !== false;
                    return (
                        <div
                            key={section.id}
                            className="border border-indigo-100 rounded-2xl bg-indigo-50/30 overflow-hidden"
                        >
                            {/* Section header */}
                            <div className="flex items-center gap-3 p-4 bg-white border-b border-indigo-100">
                                <span className="shrink-0 w-7 h-7 rounded-lg bg-indigo-600 text-white text-xs font-bold flex items-center justify-center">
                                    {sIdx + 1}
                                </span>
                                <input
                                    type="text"
                                    value={section.name}
                                    placeholder="Section name (e.g. HTML & CSS Fundamentals)"
                                    className="flex-1 px-3 py-2 text-sm font-semibold rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/25 focus:border-indigo-500 transition"
                                    onChange={(e) => updateSectionName(section.id, e.target.value)}
                                />
                                <span className="text-xs text-gray-400 shrink-0">
                                    {section.modules.length} modules
                                </span>
                                <button
                                    type="button"
                                    onClick={() => removeSection(section.id)}
                                    className="p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition cursor-pointer shrink-0"
                                >
                                    <Trash2 size={14} />
                                </button>
                                <button
                                    type="button"
                                    onClick={() => toggleSection(section.id)}
                                    className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition cursor-pointer shrink-0"
                                >
                                    {isOpen ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                                </button>
                            </div>

                            {/* Section body */}
                            {isOpen && (
                                <div className="p-4 space-y-3">
                                    {section.modules.map((mod) => (
                                        <ModuleCard
                                            key={mod.id}
                                            mod={mod}
                                            onUpdate={(updated) => updateModule(section.id, updated)}
                                            onRemove={() => removeModule(section.id, mod.id)}
                                        />
                                    ))}

                                    <button
                                        type="button"
                                        onClick={() => addModule(section.id)}
                                        className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-indigo-200 text-indigo-600 text-sm font-semibold hover:bg-indigo-50 transition cursor-pointer w-full justify-center"
                                    >
                                        <Plus size={14} /> Add Module to "{section.name || `Section ${sIdx + 1}`}"
                                    </button>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CourseModulesHandler;
