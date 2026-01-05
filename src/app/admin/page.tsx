"use client"

import Sidebar from "@/components/Admin/Sidebar";
import { supabase } from "@/lib/supabse/supabaseConfig";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function page() {

    const router = useRouter();

    const fetchCurrentSession = async () => {

        const { data } = await supabase.auth.getSession();

        if (!data.session) {
            router.replace("/admin/login");
            return;
        }


        if (data.session.user.email !== process.env.NEXT_PUBLIC_ADMIN_EMAIL) {

            await supabase.auth.signOut();

            router.replace("/admin/login");

            return;
        }

    }

    useEffect(() => {

        fetchCurrentSession();

    }, [])

    return (

        <Sidebar />

    );
}




