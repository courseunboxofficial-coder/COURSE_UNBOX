import React from "react";

const CMSHeader = ({ editorType }: { editorType: string }) => {
    return (
        <div className="mb-2">
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
                {editorType} Editor
            </h1>
            <p className="mt-1 text-sm text-gray-500">
                Fill in the details below to {editorType === "Blog" ? "write and publish your blog post" : `create and publish your ${editorType.toLowerCase()}`}.
            </p>
            <div className="mt-3 h-[2px] w-24 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full" />
        </div>
    );
};

export default CMSHeader;
