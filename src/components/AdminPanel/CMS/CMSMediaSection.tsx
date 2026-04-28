"use client";

import { useState } from "react";
import { ImageIcon, Loader2, X } from "lucide-react";
import toast from "react-hot-toast";
import { supabase } from "@/lib/supabse/supabaseConfig";

type EditorType = "Blog" | "Course" | "Package" | "Temple" | "Pooja" | "Hotel";

const BUCKET: Record<EditorType, string> = {
    Blog:    "BlogImages",
    Course:  "CourseImages",
    Package: "ProductImages",
    Temple:  "TempleImages",
    Pooja:   "PoojaImages",
    Hotel:   "HotelImages",
};

const inputClass =
    "mt-2 w-full px-4 py-2.5 rounded-xl bg-white text-gray-900 placeholder-gray-400 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/25 focus:border-indigo-500 transition shadow-sm text-sm";

const CMSMediaSection = ({
    image,
    alt,
    previewVideo,
    onChange,
    editorType,
}: {
    image: string;
    alt: string;
    previewVideo?: string;
    onChange: (field: string, value: string) => void;
    editorType: EditorType;
}) => {
    const [uploading, setUploading] = useState(false);

    const inputId = `cms-image-upload-${editorType.toLowerCase()}`;

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        /* Reset input so the same file can be re-selected after an error */
        e.target.value = "";

        if (file.size > 2 * 1024 * 1024) {
            toast.error("Image must be under 2 MB");
            return;
        }

        if (file.type !== "image/webp") {
            toast.error("Only WEBP images are allowed");
            return;
        }

        const ext = file.name.split(".").pop();
        const fileName = `${editorType.toLowerCase()}/${Date.now()}.${ext}`;
        const bucket = BUCKET[editorType];

        setUploading(true);
        const uploadToast = toast.loading("Uploading image…");

        try {
            const { error: uploadError } = await supabase.storage
                .from(bucket)
                .upload(fileName, file, { upsert: true });

            if (uploadError) {
                toast.error(uploadError.message || "Upload failed", { id: uploadToast });
                return;
            }

            const { data } = supabase.storage.from(bucket).getPublicUrl(fileName);
            onChange("image", data.publicUrl);
            toast.success("Image uploaded!", { id: uploadToast });
        } catch {
            toast.error("Unexpected error — please try again", { id: uploadToast });
        } finally {
            setUploading(false);
        }
    };

    const handleRemove = () => {
        onChange("image", "");
    };

    return (
        <div className="bg-linear-to-br from-white to-gray-50/40 border border-gray-100 rounded-2xl p-6 shadow-sm space-y-5">
            <div>
                <h2 className="text-base font-bold text-gray-900 mb-1">Media</h2>
                <p className="text-xs text-gray-500">
                    Upload a thumbnail for your {editorType.toLowerCase()}. WEBP format only · max 2 MB.
                </p>
            </div>

            {/* Image Upload Zone */}
            <div>
                <label className="text-sm font-semibold text-gray-700">
                    {editorType} Thumbnail <span className="text-red-500">*</span>
                </label>

                <div className="relative mt-2">
                    <label
                        htmlFor={inputId}
                        className={`flex flex-col items-center justify-center rounded-xl border-2 border-dashed
                            p-6 text-center transition group min-h-35
                            ${uploading
                                ? "border-indigo-300 bg-indigo-50/50 cursor-wait"
                                : "border-gray-200 cursor-pointer hover:border-indigo-400 hover:bg-indigo-50/30"
                            }`}
                    >
                        {/* Uploading overlay */}
                        {uploading && (
                            <div className="flex flex-col items-center gap-2">
                                <Loader2 size={32} className="text-indigo-500 animate-spin" />
                                <p className="text-sm text-indigo-600 font-semibold">Uploading…</p>
                                <p className="text-xs text-gray-400">Please wait</p>
                            </div>
                        )}

                        {/* Preview */}
                        {!uploading && image && (
                            <img
                                src={image}
                                alt={alt || "uploaded image"}
                                className="max-h-52 rounded-lg object-contain"
                            />
                        )}

                        {/* Empty state */}
                        {!uploading && !image && (
                            <>
                                <div className="w-12 h-12 rounded-xl bg-gray-100 group-hover:bg-indigo-100 flex items-center justify-center mb-3 transition">
                                    <ImageIcon size={22} className="text-gray-400 group-hover:text-indigo-500 transition" />
                                </div>
                                <p className="text-sm text-gray-600 font-medium">
                                    Click to upload{" "}
                                    <span className="text-indigo-600 font-semibold">an image</span>
                                </p>
                                <p className="text-xs text-gray-400 mt-1">WEBP only — max 2 MB</p>
                            </>
                        )}

                        <input
                            id={inputId}
                            type="file"
                            accept="image/webp"
                            className="hidden"
                            disabled={uploading}
                            onChange={handleImageUpload}
                        />
                    </label>

                    {/* Remove button */}
                    {image && !uploading && (
                        <button
                            type="button"
                            onClick={handleRemove}
                            className="absolute top-3 right-3 w-7 h-7 rounded-full bg-red-500 hover:bg-red-600
                                text-white flex items-center justify-center shadow-md transition cursor-pointer"
                            title="Remove image"
                        >
                            <X size={14} />
                        </button>
                    )}
                </div>

                {/* Change image link */}
                {image && !uploading && (
                    <label
                        htmlFor={inputId}
                        className="mt-2 inline-flex items-center gap-1.5 text-xs text-indigo-600 hover:text-indigo-800 font-semibold cursor-pointer transition"
                    >
                        <ImageIcon size={12} />
                        Change image
                        <input
                            id={`${inputId}-change`}
                            type="file"
                            accept="image/webp"
                            className="hidden"
                            disabled={uploading}
                            onChange={handleImageUpload}
                        />
                    </label>
                )}
            </div>

            {/* Alt Text */}
            <div>
                <label className="text-sm font-semibold text-gray-700">
                    Image Alt Text <span className="text-red-500">*</span>
                </label>
                <input
                    value={alt}
                    required
                    placeholder="Describe the image for SEO and accessibility"
                    className={inputClass}
                    onChange={(e) => onChange("alt", e.target.value)}
                />
            </div>

            {/* Preview Video — only for Course */}
            {editorType === "Course" && (
                <div>
                    <label className="text-sm font-semibold text-gray-700">Preview Video URL</label>
                    <input
                        value={previewVideo ?? ""}
                        placeholder="https://youtube.com/embed/..."
                        className={inputClass}
                        onChange={(e) => onChange("previewVideo", e.target.value)}
                    />
                    <p className="text-xs text-gray-400 mt-1.5">
                        Short preview clip shown on the course landing page
                    </p>
                </div>
            )}
        </div>
    );
};

export default CMSMediaSection;
