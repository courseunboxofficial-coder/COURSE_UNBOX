"use client";


import { Bell, LogOut, BookOpen } from "lucide-react";

export default function Topbar() {
  return (
    <header className="h-20 flex items-center justify-between px-6 border-b-2 border-cyan-200">
  <div className="flex items-center space-x-3">
    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#025378] to-teal-500 flex items-center justify-center">
      <BookOpen className="text-white" size={20} />
    </div>
    <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#025378] to-teal-600">
      Scholar Portal
    </h1>
  </div>

  <div className="flex items-center gap-5">
    <div className="relative">
      <Bell className="text-cyan-700 cursor-pointer hover:text-teal-600 transition-colors" />
      <span className="absolute -top-1 -right-1 w-4 h-4 flex items-center justify-center text-xs font-bold text-white bg-red-500 rounded-full">3</span>
    </div>
    <button className="group flex items-center gap-2 px-3 py-1 rounded-lg hover:bg-red-50 transition-colors">
      <LogOut size={18} className="text-red-500 group-hover:text-red-600" />
      <span className="text-red-500 font-medium group-hover:text-red-600 hidden md:inline-block">
        Sign Out
      </span>
    </button>
  </div>
</header>
  );
}
