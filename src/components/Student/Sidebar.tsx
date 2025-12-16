"use client";

import Link from "next/link";
import { Home, User, BookOpen, ClipboardList, BarChart, Settings } from "lucide-react";
import Image from "next/image";

const menu = [
  { name: "Dashboard", href: "/student", icon: Home },
  { name: "Profile", href: "/student/profile", icon: User },
  { name: "Courses", href: "/student/courses", icon: BookOpen },
  { name: "Assignments", href: "/student/assignments", icon: ClipboardList },
  { name: "Results", href: "/student/results", icon: BarChart },
  { name: "Settings", href: "/student/settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-linear-to-br from-[#6177ad] via-[#2d4276] to-[#2a4487] text-white hidden md:flex flex-col">
      <div className="p-6 text-xl font-bold border-b border-white/20">
        <Image src="/images/About/CourseUnboxImage.webp" alt="Course Unbox image" width={170} height={100} />
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menu.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#01334A] transition"
          >
            <item.icon size={18} />
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
