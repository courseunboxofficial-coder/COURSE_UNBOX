"use client";

import React, { useState } from "react";
import { Plus, Trash2, Play, Loader2, ChevronDown, ChevronUp, Upload } from "lucide-react";
import toast from "react-hot-toast";
import { supabase } from "@/lib/supabse/supabaseConfig";

export type VideoItem = { id: string; title: string; video: string };
export type VideoModuleItem = { id: string; moduleName: string; videos: VideoItem[] };

const inputClass =
    "mt-2 w-full px-4 py-2.5 rounded-xl bg-white text-gray-900 placeholder-gray-400 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/25 focus:border-indigo-500 transition shadow-sm text-sm";

const ACCEPTED_TYPES = "video/mp4,video/webm,video/ogg,video/quicktime";
const MAX_SIZE_MB = 500;

/* ───── Single Video Row ───── */
const VideoRow = ({
    video,
    onUpdate,
    onRemove,
}: {
    video: VideoItem;
    onUpdate: (v: VideoItem) => void;
    onRemove: () => void;
}) => {
    const [uploading, setUploading] = useState(false);

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        e.target.value = "";

        if (file.size > MAX_SIZE_MB * 1024 * 1024) {
            toast.error(`Video must be under ${MAX_SIZE_MB} MB`);
            return;
        }

        const ext = file.name.split(".").pop();
        const fileName = `${Date.now()}-${file.name.replace(/\s+/g, "-")}`;

        setUploading(true);
        const tid = toast.loading("Uploading video…");

        try {
            const { error: uploadError } = await supabase.storage
                .from("VideoBucket")
                .upload(fileName, file, { upsert: true });

            if (uploadError) {
                toast.error(uploadError.message || "Upload failed", { id: tid });
                return;
            }

            const { data } = supabase.storage.from("VideoBucket").getPublicUrl(fileName);
            onUpdate({ ...video, video: data.publicUrl });
            toast.success("Video uploaded!", { id: tid });
        } catch {
            toast.error("Unexpected error", { id: tid });
        } finally {
            setUploading(false);
        }
    };

    const inputId = `video-upload-${video.id}`;

    return (
        <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl border border-gray-200">
            <Play size={14} className="text-indigo-400 mt-3 shrink-0" />

            <div className="flex-1 space-y-2">
                <input
                    type="text"
                    value={video.title}
                    placeholder="Video title"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/25 focus:border-indigo-500 transition"
                    onChange={(e) => onUpdate({ ...video, title: e.target.value })}
                />

                {/* URL display / upload */}
                <div className="flex items-center gap-2">
                    {video.video ? (
                        <span className="flex-1 truncate text-xs text-gray-500 bg-white border border-gray-200 rounded-lg px-3 py-2">
                            {video.video}
                        </span>
                    ) : (
                        <span className="flex-1 text-xs text-gray-400 italic px-3 py-2">
                            No video uploaded yet
                        </span>
                    )}

                    <label
                        htmlFor={inputId}
                        className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition cursor-pointer shrink-0
                            ${uploading
                                ? "bg-gray-100 text-gray-400 cursor-wait"
                                : "bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
                            }`}
                    >
                        {uploading ? <Loader2 size={13} className="animate-spin" /> : <Upload size={13} />}
                        {uploading ? "Uploading…" : video.video ? "Replace" : "Upload"}
                        <input
                            id={inputId}
                            type="file"
                            accept={ACCEPTED_TYPES}
                            className="hidden"
                            disabled={uploading}
                            onChange={handleUpload}
                        />
                    </label>
                </div>
            </div>

            <button
                type="button"
                onClick={onRemove}
                className="p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition cursor-pointer shrink-0 mt-1"
            >
                <Trash2 size={13} />
            </button>
        </div>
    );
};

/* ───── Main Component ───── */
const VideoModulesHandler = ({
    videoModules,
    setVideoModules,
}: {
    videoModules: VideoModuleItem[];
    setVideoModules: React.Dispatch<React.SetStateAction<VideoModuleItem[]>>;
}) => {
    const [openModules, setOpenModules] = useState<Record<string, boolean>>({});

    const toggleModule = (id: string) =>
        setOpenModules((p) => ({ ...p, [id]: !p[id] }));

    const addModule = () => {
        const id = crypto.randomUUID();
        setVideoModules((p) => [...p, { id, moduleName: "", videos: [] }]);
        setOpenModules((p) => ({ ...p, [id]: true }));
    };

    const removeModule = (id: string) =>
        setVideoModules((p) => p.filter((m) => m.id !== id));

    const updateModuleName = (id: string, name: string) =>
        setVideoModules((p) => p.map((m) => (m.id === id ? { ...m, moduleName: name } : m)));

    const addVideo = (moduleId: string) =>
        setVideoModules((p) =>
            p.map((m) =>
                m.id === moduleId
                    ? { ...m, videos: [...m.videos, { id: crypto.randomUUID(), title: "", video: "" }] }
                    : m
            )
        );

    const updateVideo = (moduleId: string, updated: VideoItem) =>
        setVideoModules((p) =>
            p.map((m) =>
                m.id === moduleId
                    ? { ...m, videos: m.videos.map((v) => (v.id === updated.id ? updated : v)) }
                    : m
            )
        );

    const removeVideo = (moduleId: string, videoId: string) =>
        setVideoModules((p) =>
            p.map((m) =>
                m.id === moduleId
                    ? { ...m, videos: m.videos.filter((v) => v.id !== videoId) }
                    : m
            )
        );

    return (
        <div className="bg-linear-to-br from-white to-gray-50/40 border border-gray-100 rounded-2xl p-6 shadow-sm space-y-5">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-base font-bold text-gray-900 mb-1 flex items-center gap-2">
                        <Play size={16} className="text-indigo-500" />
                        Video Modules
                        {videoModules.length > 0 && (
                            <span className="ml-1 text-xs font-semibold bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded-full">
                                {videoModules.length} modules
                            </span>
                        )}
                    </h2>
                    <p className="text-xs text-gray-500">
                        Upload course videos grouped by module. Videos are stored in Supabase (max {MAX_SIZE_MB} MB each).
                    </p>
                </div>
                <button
                    type="button"
                    onClick={addModule}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-500 transition active:scale-95 cursor-pointer shadow-sm"
                >
                    <Plus size={15} /> Add Video Module
                </button>
            </div>

            {videoModules.length === 0 && (
                <div className="py-8 text-center border border-dashed border-gray-200 rounded-xl">
                    <p className="text-sm text-gray-400">No video modules yet — click "Add Video Module" to begin.</p>
                </div>
            )}

            <div className="space-y-4">
                {videoModules.map((mod, idx) => {
                    const isOpen = openModules[mod.id] !== false;
                    return (
                        <div
                            key={mod.id}
                            className="border border-gray-200 rounded-2xl bg-white shadow-sm overflow-hidden"
                        >
                            {/* Module header */}
                            <div className="flex items-center gap-3 p-4 border-b border-gray-100">
                                <span className="shrink-0 w-7 h-7 rounded-lg bg-violet-600 text-white text-xs font-bold flex items-center justify-center">
                                    {idx + 1}
                                </span>
                                <input
                                    type="text"
                                    value={mod.moduleName}
                                    placeholder="Module name (e.g. Introduction to React)"
                                    className="flex-1 px-3 py-2 text-sm font-semibold rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/25 focus:border-indigo-500 transition"
                                    onChange={(e) => updateModuleName(mod.id, e.target.value)}
                                />
                                <span className="text-xs text-gray-400 shrink-0">{mod.videos.length} videos</span>
                                <button
                                    type="button"
                                    onClick={() => removeModule(mod.id)}
                                    className="p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition cursor-pointer shrink-0"
                                >
                                    <Trash2 size={14} />
                                </button>
                                <button
                                    type="button"
                                    onClick={() => toggleModule(mod.id)}
                                    className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition cursor-pointer shrink-0"
                                >
                                    {isOpen ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                                </button>
                            </div>

                            {/* Module body */}
                            {isOpen && (
                                <div className="p-4 space-y-3">
                                    {mod.videos.map((v) => (
                                        <VideoRow
                                            key={v.id}
                                            video={v}
                                            onUpdate={(updated) => updateVideo(mod.id, updated)}
                                            onRemove={() => removeVideo(mod.id, v.id)}
                                        />
                                    ))}

                                    <button
                                        type="button"
                                        onClick={() => addVideo(mod.id)}
                                        className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-violet-200 text-violet-600 text-sm font-semibold hover:bg-violet-50 transition cursor-pointer w-full justify-center"
                                    >
                                        <Plus size={14} /> Add Video
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

export default VideoModulesHandler;
