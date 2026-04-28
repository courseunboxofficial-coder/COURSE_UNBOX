"use client";

import { Loader2 } from "lucide-react";

interface CMSActionsProps {
    actionType: "create" | "update";
    editorType: "Blog" | "Course" | "Package" | "Temple" | "Pooja" | "Hotel";
    onPreview?: () => void;
    onSaveDraft: () => void;
    loading?: boolean;
}

const CMSActions = ({
    actionType,
    editorType,
    onPreview,
    onSaveDraft,
    loading = false,
}: CMSActionsProps) => {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-30
            bg-white/95 backdrop-blur-md
            border-t border-gray-200
            shadow-[0_-4px_24px_-4px_rgba(99,102,241,0.15)]
            px-6 py-3">
            <div className="flex flex-wrap items-center gap-3 max-w-7xl mx-auto">
                {/* Publish / Update */}
                <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center gap-2 px-7 py-2.5 rounded-xl
                        bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold
                        shadow-md shadow-indigo-200 hover:shadow-lg hover:shadow-indigo-300/50
                        disabled:opacity-60 disabled:cursor-not-allowed
                        cursor-pointer transition-all active:scale-95"
                >
                    {loading && <Loader2 size={15} className="animate-spin" />}
                    {actionType === "update" ? `Update ${editorType}` : `Publish ${editorType}`}
                </button>

                {/* Save Draft */}
                <button
                    type="button"
                    onClick={onSaveDraft}
                    disabled={loading}
                    className="flex items-center gap-2 px-7 py-2.5 rounded-xl
                        bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-bold
                        shadow-md shadow-emerald-200 hover:shadow-lg hover:shadow-emerald-300/50
                        disabled:opacity-60 disabled:cursor-not-allowed
                        transition-all active:scale-95 cursor-pointer"
                >
                    {loading && <Loader2 size={15} className="animate-spin" />}
                    Save Draft
                </button>

                {onPreview && (
                    <button
                        type="button"
                        onClick={onPreview}
                        disabled={loading}
                        className="flex items-center gap-2 px-6 py-2.5 rounded-xl
                            bg-white text-gray-600 text-sm font-semibold
                            border border-gray-300 hover:bg-gray-50
                            disabled:opacity-60 transition-all active:scale-95 cursor-pointer"
                    >
                        Preview
                    </button>
                )}

                <span className="ml-auto text-xs text-gray-400 self-center italic">
                    {actionType === "update" ? "Editing" : "Creating"} {editorType}
                </span>
            </div>
        </div>
    );
};

export default CMSActions;
