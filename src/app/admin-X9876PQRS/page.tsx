"use client";

import {
    FileText,
    Users,
    MessageSquare,
    BookOpen,
    Plus,
    Upload,
    Settings,
    Folder,
} from "lucide-react";

import {
    LineChart,
    Line,
    XAxis,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";

const stats = [
    {
        title: "Total Blogs",
        value: "356",
        change: "+12%",
        icon: FileText,
        color: "bg-purple-100 text-purple-600",
    },
    {
        title: "Total Courses",
        value: "124",
        change: "+8%",
        icon: BookOpen,
        color: "bg-green-100 text-green-600",
    },
    {
        title: "Users",
        value: "2,145",
        change: "+18%",
        icon: Users,
        color: "bg-blue-100 text-blue-600",
    },
    {
        title: "Enquiries",
        value: "532",
        change: "-6%",
        icon: MessageSquare,
        color: "bg-orange-100 text-orange-600",
    },
];

const chartData = [
    { name: "May 12", blogs: 200, courses: 120, users: 400, enquiries: 80 },
    { name: "May 13", blogs: 300, courses: 150, users: 600, enquiries: 120 },
    { name: "May 14", blogs: 280, courses: 170, users: 550, enquiries: 100 },
    { name: "May 15", blogs: 420, courses: 200, users: 800, enquiries: 150 },
    { name: "May 16", blogs: 350, courses: 180, users: 700, enquiries: 130 },
    { name: "May 17", blogs: 370, courses: 190, users: 720, enquiries: 140 },
    { name: "May 18", blogs: 450, courses: 220, users: 900, enquiries: 180 },
];

const recentPosts = [
    {
        title: "Exploring the Mountains",
        date: "May 18, 2024",
        status: "Published",
    },
    {
        title: "Future of Web Design",
        date: "May 17, 2024",
        status: "Published",
    },
    {
        title: "Better User Experience",
        date: "May 16, 2024",
        status: "Draft",
    },
];

const comments = [
    { name: "Sarah Johnson", text: "Great article!", time: "2h ago" },
    { name: "Michael Brown", text: "Very helpful!", time: "5h ago" },
    { name: "Emily Davis", text: "Loved this!", time: "1d ago" },
];

// ===================== PAGE ===================== //

export default function DashboardPage() {
    return (
        <div className="space-y-6">

            {/* HEADER */}
            <div>
                <h1 className="text-2xl font-semibold text-gray-800">
                    Welcome back, Course Unbox 👋
                </h1>
                <p className="text-gray-500 text-sm">
                    Here’s what’s happening with your platform today.
                </p>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((item, i) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={i}
                            className="bg-white p-5 rounded-xl border shadow-sm flex justify-between items-center"
                        >
                            <div>
                                <p className="text-gray-500 text-sm">{item.title}</p>
                                <h2 className="text-2xl font-semibold text-black">{item.value}</h2>

                                <p
                                    className={`text-xs mt-1 ${item.change.includes("+")
                                            ? "text-green-600"
                                            : "text-red-500"
                                        }`}
                                >
                                    {item.change} vs last week
                                </p>
                            </div>

                            <div className={`p-3 rounded-lg ${item.color}`}>
                                <Icon size={20} />
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* CHART + ACTIONS */}
            <div className="grid lg:grid-cols-3 gap-6">

                {/* CHART */}
                <div className="lg:col-span-2 bg-white p-5 rounded-xl border shadow-sm">
                    <div className="flex justify-between mb-4">
                        <h2 className="font-medium text-gray-700">
                            Analytics Overview
                        </h2>
                        <span className="text-xs text-gray-500">Last 7 days</span>
                    </div>

                    <ResponsiveContainer width="100%" height={280}>
                        <LineChart data={chartData}>
                            <XAxis dataKey="name" />
                            <Tooltip />
                            <Legend />

                            <Line type="monotone" dataKey="blogs" stroke="#8b5cf6" strokeWidth={2} />
                            <Line type="monotone" dataKey="courses" stroke="#22c55e" strokeWidth={2} />
                            <Line type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={2} />
                            <Line type="monotone" dataKey="enquiries" stroke="#f97316" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* QUICK ACTIONS */}
                <div className="bg-white p-5 rounded-xl border shadow-sm">
                    <h2 className="font-medium text-gray-700 mb-4">
                        Quick Actions
                    </h2>

                    <div className="grid grid-cols-2 gap-4">
                        <ActionCard icon={Plus} label="Add Blog" desc="Create post" color="text-blue-500" />
                        <ActionCard icon={Upload} label="Upload Media" desc="Images" color="text-purple-500" />
                        <ActionCard icon={Folder} label="Categories" desc="Manage" color="text-green-500" />
                        <ActionCard icon={Settings} label="Settings" desc="Config" color="text-orange-500" />
                    </div>
                </div>
            </div>

            {/* BOTTOM */}
            <div className="grid lg:grid-cols-3 gap-6">

                {/* POSTS */}
                <div className="bg-white p-5 rounded-xl border shadow-sm">
                    <div className="flex justify-between mb-4">
                        <h2 className="font-medium text-gray-700">
                            Recent Blogs
                        </h2>
                        <span className="text-sm text-indigo-600 cursor-pointer">
                            View All
                        </span>
                    </div>

                    <div className="space-y-4">
                        {recentPosts.map((post, i) => (
                            <div key={i} className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-lg">
                                <img
                                    src={`https://picsum.photos/40?random=${i}`}
                                    className="w-10 h-10 rounded-lg"
                                />

                                <div className="flex-1">
                                    <p className="text-sm font-medium text-black">{post.title}</p>
                                    <p className="text-xs text-gray-500">{post.date}</p>
                                </div>

                                <span
                                    className={`text-xs px-2 py-1 rounded-full ${post.status === "Published"
                                            ? "bg-green-100 text-green-600"
                                            : "bg-yellow-100 text-yellow-600"
                                        }`}
                                >
                                    {post.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* COMMENTS */}
                <div className="bg-white p-5 rounded-xl border shadow-sm">
                    <div className="flex justify-between mb-4">
                        <h2 className="font-medium text-gray-700">
                            Recent Comments
                        </h2>
                        <span className="text-sm text-indigo-600 cursor-pointer">
                            View All
                        </span>
                    </div>

                    <div className="space-y-4">
                        {comments.map((c, i) => (
                            <div key={i} className="flex gap-3">
                                <img
                                    src={`https://i.pravatar.cc/40?img=${i + 10}`}
                                    className="w-9 h-9 rounded-full"
                                />

                                <div>
                                    <p className="text-sm font-medium">{c.name}</p>
                                    <p className="text-xs text-gray-500">{c.text}</p>
                                    <span className="text-xs text-gray-400">{c.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* SYSTEM */}
                <div className="bg-white p-5 rounded-xl border shadow-sm">
                    <h2 className="font-medium text-gray-700 mb-4">
                        System Status
                    </h2>

                    <div className="space-y-3 text-sm">
                        <StatusRow label="PHP Version" value="8.2.4" />
                        <StatusRow label="Database" value="MySQL 8.0.36" />
                        <StatusRow label="Server" value="Nginx 1.24.0" />

                        <div>
                            <div className="flex justify-between text-xs text-gray-500 mb-1">
                                <span>Storage</span>
                                <span>50%</span>
                            </div>
                            <div className="w-full bg-gray-200 h-2 rounded-full">
                                <div className="bg-blue-500 h-2 rounded-full w-1/2"></div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 p-3 bg-green-100 text-green-700 text-sm rounded-lg">
                        ✔ All systems running smoothly
                    </div>
                </div>
            </div>
        </div>
    );
}



function ActionCard({ icon: Icon, label, desc, color }: any) {
    return (
        <button className="p-4 rounded-xl border hover:bg-gray-50 shadow-sm hover:shadow-md transition flex flex-col items-center gap-2 cursor-pointer">
            <Icon size={20} className={color} />
            <span className="text-sm font-medium text-black">{label}</span>
            <span className="text-xs text-gray-500">{desc}</span>
        </button>
    );
}


function StatusRow({ label, value }: any) {
    return (
        <div className="flex justify-between">
            <span className="text-gray-500">{label}</span>
            <span className="font-medium">{value}</span>
        </div>
    );
}