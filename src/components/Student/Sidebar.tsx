"use client";
import { useState } from "react";
import Link from "next/link";
import { Home, User, BookOpen, ClipboardList, BarChart, Settings } from "lucide-react";
import Image from "next/image";

const menu = [
  { name: "Dashboard", href: "/student", icon: Home },
  { name: "Profile", href: "/student/profile", icon: User },
  { name: "My Courses", href: "/student/courses", icon: BookOpen },
  { name: "Assignments", href: "/student/assignments", icon: ClipboardList },
  { name: "Results", href: "/student/results", icon: BarChart },
  { name: "Settings", href: "/student/settings", icon: Settings },
];

export default function Sidebar() {
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  return (
    <aside className="w-64 bg-white shadow-2xl border-1 border-t-0 border-b-0 border-r-gray-300 hidden md:flex flex-col">
      <div className="p-6 text-xl font-bold border-b border-white/20">
        <Image src="/images/Student/CourseUnboxImage.webp" alt="Course Unbox image" width={170} height={100} />
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menu.map((item , idx) => {
           const isSame = idx === activeIndex;
          return <Link
            onClick={()=>setActiveIndex(idx)}
            key={item.name}
            href={menu[idx].href}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${isSame ? "bg-[#025378] text-white" : 'text-black'}`}
          >
            <item.icon size={18} />
            {item.name}
          </Link>
       })}
      </nav>
    </aside>
  );
}
