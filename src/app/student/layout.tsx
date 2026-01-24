
import Sidebar from "@/components/Student/Sidebar";
import Topbar from "@/components/Student/Topbar";
import { createSupabaseServerClient } from "@/lib/supabse/supabase-server";

export default async function StudentLayout({children,}: {children: React.ReactNode;}) {
    

  return (

    <div className="flex h-screen overflow-hidden">
     
      <Sidebar />
   
      {/* Right Section */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <Topbar />

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          {children}
        </main>
      </div>
    </div>

  );
}
