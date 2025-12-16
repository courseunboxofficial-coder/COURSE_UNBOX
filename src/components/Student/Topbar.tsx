"use client";

import { Bell, LogOut } from "lucide-react";

export default function Topbar() {
  return (
    <header className="h-16 bg-white flex items-center justify-between px-6 shadow">
      <h1 className="text-lg font-semibold text-[#025378]">
        Student Dashboard
      </h1>

      <div className="flex items-center gap-4">
        <Bell className="text-gray-600 cursor-pointer" />
        <button className="flex items-center gap-2 text-red-500">
          <LogOut size={18} /> Logout
        </button>
      </div>
    </header>
  );
}
