"use client";

import { useState } from "react"
import Image from "next/image";
import HomeEditor from './HomeEditor';
import CourseEditor from './CourseEditor';
import BlogEditor from './BlogEditor';
import { Home, BookOpen, Info, FileText, Settings, Menu, Users, ChartColumnBigIcon, LogOut, BookOpenCheck, ChartColumnStacked } from "lucide-react";
import MentorEditor from './MentorEditor';
import Stastics from './Stastics';
import { supabase } from '@/lib/supabse/supabaseConfig';
import { useRouter } from 'next/navigation';
import PagesEditor from "./PagesEditor";
import CategoryEditor from "./CategoryEditor";

const sidebarItems = [
    { key: "stats", label: "Stats", icon: ChartColumnBigIcon },
    { key: "home", label: "Home", icon: Home },
    { key: "courses", label: "Courses", icon: BookOpen },
    { key: "mentors", label: "Mentors", icon: Users },
    { key: "blog", label: "Blog", icon: FileText },
    { key: "pages", label: "Pages", icon: BookOpenCheck },
    { key: "category", label: "Category", icon: ChartColumnStacked },
];

const Sidebar = () => {

    const router = useRouter();

    const [active, setActive] = useState("home");
    const [collapsed, setCollapsed] = useState(false);

    const handleLogout = async () => {

        await supabase.auth.signOut();

        router.replace("/admin/login");

    }
    return (
        <div className="flex min-h-screen bg-slate-100 overflow-hidden">



            <aside className={`${collapsed ? "w-20" : "w-74"} bg-white border-r-3 border-[#1290da] shadow-2xl shadow-indigo-300 transition-all duration-300 fixed h-screen`}>
                <div className="flex items-center justify-between px-6 py-5 border-b">
                    <div className="flex items-center gap-2">
                        <Image src="/images/Home/CourseUnboxLogo.webp" alt="" height={100} width={100} className={`text-lg font-semibold ${collapsed ? "hidden" : "block"}`} />
                    </div>
                    <button
                        onClick={() => setCollapsed(!collapsed)}
                        className="text-slate-500 hover:text-slate-800 cursor-pointer"
                    >
                        <Menu />
                    </button>
                </div>

                <nav className="p-4 space-y-2">
                    {sidebarItems.map((item) => (
                        <button
                            key={item.key}
                            onClick={() => setActive(item.key)}
                            className={`flex items-center w-full gap-20 px-4 py-3 rounded-lg text-sm font-medium transition cursor-pointer ${collapsed ? "justify-center" : ""} ${active === item.key
                                ? "bg-blue-600 text-white"
                                : "text-slate-600 hover:bg-slate-100"
                                }`}
                        >
                            <item.icon size={25} />
                            {!collapsed && item.label}
                        </button>
                    ))}

                    <button className={`flex items-center w-full gap-20 px-4 py-3 rounded-lg text-sm font-medium transition cursor-pointer ${collapsed ? "justify-center" : ""} hover:bg-slate-100`} onClick={handleLogout}>

                        <LogOut size={25} />
                        {!collapsed && "LogOut"}
                    </button>
                </nav>
            </aside>



            <main className={`flex-1 p-8 overflow-y-scroll transition-all duration-300 ${collapsed ? "ml-20" : "ml-74"}`}>
                <header className="mb-8">
                    <h2 className="text-2xl text-center font-extrabold capitalize"> {active.toUpperCase()} SECTION</h2>
                </header>

                <div className="grid gap-6">
                    {active === "stats" && <Stastics collapsed={collapsed} />}
                    {active === "home" && <HomeEditor collapsed={collapsed} />}
                    {active === "courses" && <CourseEditor collapsed={collapsed} />}
                    {active === "mentors" && <MentorEditor collapsed={collapsed} />}
                    {active === "blog" && <BlogEditor collapsed={collapsed} />}
                    {active === "pages" && <PagesEditor collapsed={collapsed}/>}
                     {active === "category" && <CategoryEditor collapsed={collapsed}/>}
                </div>
            </main>
        </div>
    )
}

export default Sidebar