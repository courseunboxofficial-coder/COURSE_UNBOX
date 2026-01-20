"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Home,
  User,
  BookOpen,
  ClipboardList,
  BarChart,
  Settings,
  Menu,
  X,
} from "lucide-react";
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
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* MOBILE MENU BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow"
      >
        <Menu size={22} />
      </button>

      {/* BACKDROP (Mobile) */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed md:static top-0 left-0 z-50
          h-full w-64 bg-white
          shadow-2xl border-r border-gray-200
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
          flex flex-col
        `}
      >
        {/* Header */}
        <div className="p-5 flex items-center justify-between border-b">
          <Image
            src="/images/Student/CourseUnboxImage.webp"
            alt="Course Unbox image"
            width={150}
            height={80}
          />

          {/* Close Button (Mobile) */}
          <button
            onClick={() => setOpen(false)}
            className="md:hidden p-1 rounded-lg"
          >
            <X size={22} />
          </button>
        </div>

        {/* Menu */}
        <nav className="flex-1 p-4 space-y-2">
          {menu.map((item, idx) => {
            const isActive = idx === activeIndex;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => {
                  setActiveIndex(idx);
                  setOpen(false);
                }}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-lg
                  transition
                  ${
                    isActive
                      ? "bg-[#025378] text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }
                `}
              >
                <item.icon size={18} />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
