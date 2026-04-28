"use client";

import {
    LayoutDashboard,
    FileText,
    Image,
    Folder,
    Tag,
    Users,
    Shield,
    MenuSquare,
    MessageSquare,
    Settings,
    Puzzle,
    Palette,
    Database,
    FileBarChart2,
    LogOut,
    X,
    BookOpen,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) {
    const pathname = usePathname();

    const sections = [
        {
            title: "CONTENT",
            items: [
                { name: "Blogs", icon: FileText, slug: "/admin-X9876PQRS/blogs" },
                { name: "Courses", icon: BookOpen, slug: "/admin-X9876PQRS/courses" },
                { name: "Media", icon: Image, slug: "/media" },
                { name: "Categories", icon: Folder, slug: "/categories" },
                { name: "Tags", icon: Tag, slug: "/tags" },
            ],
        },
        {
            title: "MANAGEMENT",
            items: [
                { name: "Users", icon: Users, slug: "/users" },
                { name: "Roles & Permissions", icon: Shield, slug: "/roles" },
                { name: "Menus", icon: MenuSquare, slug: "/menus" },
                { name: "Comments", icon: MessageSquare, slug: "/comments" },
            ],
        },
        {
            title: "SYSTEM",
            items: [
                { name: "Settings", icon: Settings, slug: "/settings" },
                { name: "Plugins", icon: Puzzle, slug: "/plugins" },
                { name: "Themes", icon: Palette, slug: "/themes" },
                { name: "Backups", icon: Database, slug: "/backups" },
                { name: "Logs", icon: FileBarChart2, slug: "/logs" },
            ],
        },
    ];

    return (
        <aside
            className={`fixed top-0 left-0 h-full w-64 z-50
  bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#1e293b]
  text-gray-300
  transform transition-transform duration-300
  ${isOpen ? "translate-x-0" : "-translate-x-full"}
`}
        >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-700">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600"></div>
                    <h2 className="text-white font-semibold text-lg">Apex CMS</h2>
                </div>

                {/* FIXED CLOSE BUTTON */}
                <button
                    onClick={onClose}
                    className="text-white hover:text-white cursor-pointer"
                >
                    <X size={20} />

                </button>
            </div>

            {/* Scrollable Menu */}
            <div className="h-[calc(100vh-70px)] overflow-y-auto px-3 py-4 space-y-6">

                {/* Dashboard */}
                <Link href="/admin-X9876PQRS" onClick={onClose}>
                    <div
                        className={`flex items-center gap-3 px-3 py-2 rounded-xl transition
            ${pathname === "/admin-X9876PQRS"
                                ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
                                : "hover:bg-gray-800"
                            }`}
                    >
                        <LayoutDashboard size={18} />
                        Dashboard
                    </div>
                </Link>

                {/* Sections */}
                {sections.map((section, i) => (
                    <div key={i}>
                        <p className="text-xs text-gray-500 px-2 mb-2 tracking-wider">
                            {section.title}
                        </p>

                        <div className="space-y-1">
                            {section.items.map((item, j) => {
                                const Icon = item.icon;
                                const active = pathname.includes(item.slug);

                                return (
                                    <Link key={j} href={item.slug} onClick={onClose}>
                                        <div
                                            className={`flex items-center gap-3 px-3 py-2 rounded-xl transition
                      ${active
                                                    ? "bg-indigo-600 text-white"
                                                    : "hover:bg-gray-800"
                                                }`}
                                        >
                                            <Icon size={18} />
                                            {item.name}
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                ))}

                {/* Logout */}
                <button
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-xl
          text-red-400 hover:bg-red-900/30 transition"
                >
                    <LogOut size={18} />
                    Logout
                </button>
            </div>
        </aside>
    );
}