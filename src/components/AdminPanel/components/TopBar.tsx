"use client";

import { Menu, Bell, Search, Sun } from "lucide-react";

export default function Topbar({
    toggleSidebar,
}: {
    toggleSidebar: () => void;
}) {
    return (
        <header className="h-16 bg-gray-100 border-b border-gray-200 px-6 flex items-center justify-between sticky top-0 z-30">

            {/* LEFT */}
            <div className="flex items-center gap-4">

                {/* Hamburger */}
                <button
                    onClick={toggleSidebar}
                    className="p-2 rounded-lg border border-gray-200 hover:bg-gray-100 transition text-black cursor-pointer"
                >
                    <Menu size={18} />
                </button>

                {/* SEARCH BAR */}
                <div className="hidden md:flex items-center bg-gray-100 border border-gray-200 rounded-xl px-4 py-2 w-[340px] focus-within:ring-2 focus-within:ring-indigo-500 transition">

                    <Search size={16} className="text-gray-500" />

                    <input
                        type="text"
                        placeholder="Search anything..."
                        className="bg-transparent outline-none ml-2 w-full text-sm text-gray-700 placeholder:text-gray-400"
                    />

                    {/* Shortcut */}
                    <div className="ml-3 flex items-center gap-1 text-xs text-gray-500 border border-gray-300 px-2 py-[2px] rounded-md bg-white">
                        <span>⌘</span>
                        <span>K</span>
                    </div>
                </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-4">

                {/* Theme Icon */}
                <button className="p-2 rounded-lg hover:bg-gray-100 transition">
                    <Sun size={18} className="text-gray-600" />
                </button>

                {/* Notification */}
                <button className="relative p-2 rounded-lg hover:bg-gray-100 transition">
                    <Bell size={18} className="text-gray-600" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full"></span>
                </button>

                {/* Profile */}
                <div className="flex items-center gap-3 cursor-pointer pl-2 border-l border-gray-200">
                    <img
                        src="https://i.pravatar.cc/40"
                        className="w-9 h-9 rounded-full"
                    />

                    <div className="hidden md:block leading-tight">
                        <p className="text-sm font-medium text-gray-800">
                            John Doe
                        </p>
                        <p className="text-xs text-gray-500">
                            Administrator
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
}