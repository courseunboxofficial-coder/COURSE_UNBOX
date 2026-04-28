"use client";

import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Sidebar from "./Sidebar";
import Topbar from "./TopBar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50 text-white">

            {/* Toast notifications */}
            <Toaster
                position="top-right"
                toastOptions={{
                    duration: 4000,
                    style: {
                        background: "#fff",
                        color: "#111827",
                        fontSize: "14px",
                        fontWeight: "500",
                        borderRadius: "12px",
                        border: "1px solid #e5e7eb",
                        boxShadow: "0 4px 24px -4px rgba(0,0,0,0.12)",
                        padding: "12px 16px",
                    },
                    success: {
                        iconTheme: { primary: "#10b981", secondary: "#fff" },
                    },
                    error: {
                        iconTheme: { primary: "#ef4444", secondary: "#fff" },
                    },
                    loading: {
                        iconTheme: { primary: "#6366f1", secondary: "#fff" },
                    },
                }}
            />

            {/* Topbar (Fixed) */}
            <Topbar toggleSidebar={() => setIsOpen(true)} />

            {/* Sidebar Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />

            {/* Main Content */}
            <main className="pt-5 px-6 pb-5">
                {children}
            </main>
        </div>
    );
}