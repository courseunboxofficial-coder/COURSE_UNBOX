"use client";

import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabse/supabaseConfig";
import { Bell, LogOut, BookOpen } from "lucide-react";

export default function Topbar() {
  const router = useRouter();

  const handleLogOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (!error) {
      router.replace("/login");
    }
  };

  return (
    <header className="h-20 flex items-center justify-between px-6 border-b-2">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#025378] to-teal-500 flex items-center justify-center">
          <BookOpen className="text-white" size={20} />
        </div>
        <h1 className="text-xl font-bold">Scholar Portal</h1>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-5">
        <Bell  />
        <button className="flex item-center cursor-pointer" onClick={handleLogOut}>
          <LogOut  />
          Sign Out
        </button>
      </div>
    </header>
  );
}
