"use client";

import { supabase } from "@/lib/supabse/supabaseConfig";
import { ShieldCheck, Lock } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminLoginUI() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleAdminAuthentication = async (event: React.FormEvent) => {

        event.preventDefault();
        setError("");

        const { data, error } = await supabase.auth.signInWithPassword({
            email, password
        });

        if (error) {
            console.log(error)
            setError("Invalid admin credentials");
            return;
        };

        if (data.user.email !== process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
            await supabase.auth.signOut();
            setError("Unauthorized access");
            return;
        }

        router.push("/admin");

    }

    return (
        <>

            <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#020617] to-black px-4">


                {error && <p className="text-[white] text-xl mb-5">{error}</p>}
                {/* Card */}
                <div className="w-full max-w-md bg-[#020617]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8">

                    {/* Header */}
                    <div className="flex flex-col items-center mb-8">
                        <div className="h-14 w-14 flex items-center justify-center rounded-full bg-indigo-600/10 mb-4">
                            <ShieldCheck className="text-indigo-500" size={28} />
                        </div>
                        <h1 className="text-2xl font-semibold text-white">
                            Admin Panel Login
                        </h1>
                        <p className="text-sm text-gray-400 mt-1">
                            Restricted access • Authorized users only
                        </p>
                    </div>

                    {/* Form */}
                    <form className="space-y-5" onSubmit={handleAdminAuthentication}>

                        {/* Email */}
                        <div>
                            <label className="block text-sm text-gray-400 mb-1">
                                Admin Email
                            </label>
                            <input
                                type="email"
                                placeholder="adarsh@gmail.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full rounded-lg bg-[#020617] border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm text-gray-400 mb-1">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type="password"
                                    placeholder="••••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full rounded-lg bg-[#020617] border border-white/10 px-4 py-3 pr-10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                    required
                                />
                                <Lock
                                    size={18}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                                />
                            </div>
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="w-full rounded-lg bg-indigo-600 hover:bg-indigo-700 transition text-white py-3 font-medium tracking-wide cursor-pointer"
                        >
                            Secure Login

                        </button>

                    </form>

                    {/* Footer */}
                    <div className="mt-6 text-center text-xs text-gray-500">
                        © {new Date().getFullYear()} Course Unbox • Admin System
                    </div>
                </div>
            </div>

        </>
    );
}
