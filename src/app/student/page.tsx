"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabse/supabaseConfig";

import RecommendedCourse from "@/components/Student/RecommendedCourse";
import StatCard from "@/components/Student/StartCard";
import TrendingCourse from "@/components/Student/TrendingCourse";
import DashboardCTA from "@/components/Student/DashboardCTA";

type Student = {
  id: string;
  name: string;
  email: string;
};

export default function StudentDashboard() {
  const router = useRouter();
  const [studentData, setStudentData] = useState<Student | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStudent = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

     

      if (!session) {
        router.replace("/login");
        return;
      }

      const { data, error } = await supabase
        .from("Student")
        .select("*")
        .eq("id", session.user.id)
        .single();

      if (error || !data) {
        router.replace("/login");
        return;
      }

      

      setStudentData(data);
      setLoading(false);
      if(!data.phone_verified){
         router.replace('/verifyphone');
      }
    };

    loadStudent();
  }, [router]);

  if (loading) {
    return <p>Loading dashboard...</p>;
  }

  return (
    <div className="space-y-6">
     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Courses" value="6" color="blue" />
        <StatCard title="Attendance" value="92%" color="emerald" />
        <StatCard title="Assignments" value="12" color="pink" />
        <StatCard title="Results" value="A+" color="yellow" />
      </div>

    
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-900 p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-white">
          Welcome back,{" "}
          <span className="text-yellow-400">{studentData?.name} 👋</span>
        </h2>
        <p className="mt-2 text-blue-200 text-sm">
          Check your courses, assignments, and progress from here.
        </p>
      </div>

      <TrendingCourse />
      <RecommendedCourse />
      <DashboardCTA />
    </div>
  );
}
